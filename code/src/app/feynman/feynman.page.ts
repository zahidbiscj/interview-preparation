import {
  ChangeDetectionStrategy, Component, computed, inject, OnInit, signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { QuestionBankService } from '../question-bank/question-bank.service';
import { QuestionView } from '../question-bank/models/question-bank.models';
import { ReviewLogService } from '../shared/review-log.service';

type Phase = 'loading' | 'explain' | 'review' | 'done';
type SelfGrade = 'nailed' | 'most' | 'missed';

/** One key point matched (or not) against the learner's explanation. */
interface PointMatch { text: string; covered: boolean; }

/** Persisted Feynman self-assessment, keyed by question. */
interface FeynmanScore {
  questionId: string;
  topicId: string;
  grade: SelfGrade;
  covered: number;
  total: number;
  date: string;
}

const FEYNMAN_KEY = 'feynman_scores';

const STOP = new Set([
  'the', 'and', 'for', 'that', 'with', 'this', 'from', 'have', 'are', 'was',
  'will', 'can', 'use', 'used', 'using', 'when', 'what', 'which', 'your', 'you',
  'its', 'into', 'than', 'then', 'also', 'not', 'but', 'all', 'any', 'via',
  'per', 'out', 'how', 'why', 'they', 'them', 'each', 'such', 'one', 'two',
]);

@Component({
  selector: 'app-feynman-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, MarkdownComponent, RouterLink],
  template: `
    <div class="fey-shell" [attr.data-theme]="isDark() ? 'dark' : 'light'">

      <header class="topbar">
        <a routerLink="/dashboard" class="back-link">← Dashboard</a>
        <span class="app-brand">🗣️ Feynman Mode</span>
        <span class="topbar-spacer">
          <a routerLink="/simulator" class="nav-link">🎯 Simulator</a>
          <button class="theme-btn" (click)="svc.toggleTheme()">{{ isDark() ? '☀️' : '🌙' }}</button>
        </span>
      </header>

      <main class="fey-main">

        @if (phase() === 'loading') {
          <p class="state-msg">Loading questions…</p>
        }

        @if (phase() !== 'loading' && !current()) {
          <div class="state-msg fade-slide-enter">
            <h1>Nothing to explain yet</h1>
            <p>No questions with key points were found for this scope.</p>
            <a routerLink="/dashboard" class="action-btn">Back to dashboard</a>
          </div>
        }

        <!-- ════════ EXPLAIN / REVIEW ════════ -->
        @if ((phase() === 'explain' || phase() === 'review') && current(); as q) {
          <div class="runner">
            <div class="progress-head">
              <div class="progress-bar"><div class="progress-fill" [style.width.%]="progressPct()"></div></div>
              <div class="progress-meta">
                <span>Question {{ index() + 1 }} / {{ pool().length }}</span>
                <span class="q-topic">{{ q.topicName }} › {{ q.subtopicName }}</span>
              </div>
            </div>

            <div class="q-panel fade-slide-enter">
              <div class="q-badges">
                <span class="badge badge-{{ q.type || 'conceptual' }}">{{ q.type || 'conceptual' }}</span>
                <span class="lvl lvl-{{ q.level || 'mid' }}">{{ q.level || 'mid' }}</span>
              </div>

              <h2 class="q-text">{{ q.q }}</h2>
              <p class="fey-prompt">💬 Explain this to a junior developer in your own words.</p>

              <textarea
                class="fey-input"
                rows="7"
                placeholder="Teach it simply — no jargon you can't unpack…"
                [(ngModel)]="explanation"
                [disabled]="phase() === 'review'"></textarea>

              @if (phase() === 'explain') {
                <button class="reveal-btn" [disabled]="!explanation().trim()" (click)="submit()">
                  Reveal Answer &amp; Check
                </button>
              }

              <!-- ── Review ── -->
              @if (phase() === 'review') {
                <div class="answer-zone fade-slide-enter">
                  <div class="answer-divider"></div>

                  <div class="coverage" [class.good]="coveredCount() === matches().length">
                    You covered <strong>{{ coveredCount() }}/{{ matches().length }}</strong> key points.
                  </div>

                  <h4 class="section-label">Key points</h4>
                  <ul class="key-points">
                    @for (m of matches(); track $index) {
                      <li class="md-content" [class.covered]="m.covered" [class.missed]="!m.covered">
                        <span class="kp-mark">{{ m.covered ? '✓' : '✗' }}</span>
                        <markdown [data]="m.text" />
                      </li>
                    }
                  </ul>

                  <h4 class="section-label">Real answer</h4>
                  <div class="md-content answer-oneliner"><markdown [data]="q.answer.oneLiner" /></div>
                  @if (q.answer.analogy) {
                    <div class="analogy md-content">💡 <markdown [data]="q.answer.analogy!" /></div>
                  }

                  <h4 class="section-label">How did you do?</h4>
                  <div class="grade-row">
                    <button class="grade-btn missed" (click)="grade('missed')">😬 Missed a lot</button>
                    <button class="grade-btn most" (click)="grade('most')">🙂 Got most</button>
                    <button class="grade-btn nailed" (click)="grade('nailed')">🎯 Nailed it</button>
                  </div>
                </div>
              }
            </div>

            <button class="quit-btn" (click)="finish()">End &amp; see summary</button>
          </div>
        }

        <!-- ════════ DONE ════════ -->
        @if (phase() === 'done') {
          <div class="result fade-slide-enter">
            <h1 class="result-title">Session Complete</h1>
            <p class="result-sub">{{ done().length }} explained this session.</p>

            <div class="result-stats">
              <div class="stat nailed"><span class="stat-num">{{ countGrade('nailed') }}</span><span class="stat-lbl">Nailed it</span></div>
              <div class="stat most"><span class="stat-num">{{ countGrade('most') }}</span><span class="stat-lbl">Got most</span></div>
              <div class="stat missed"><span class="stat-num">{{ countGrade('missed') }}</span><span class="stat-lbl">Missed a lot</span></div>
            </div>

            <div class="result-actions">
              <button class="action-btn primary" (click)="restart()">Explain more</button>
              <a routerLink="/dashboard" class="action-btn">Back to dashboard</a>
            </div>
          </div>
        }
      </main>
    </div>
  `,
  styleUrl: './feynman.page.scss'
})
export class FeynmanPage implements OnInit {
  svc = inject(QuestionBankService);
  private route = inject(ActivatedRoute);
  private reviewLog = inject(ReviewLogService);
  readonly isDark = this.svc.isDark;

  readonly phase = signal<Phase>('loading');
  readonly pool = signal<QuestionView[]>([]);
  readonly index = signal(0);
  readonly explanation = signal('');
  readonly matches = signal<PointMatch[]>([]);
  readonly done = signal<FeynmanScore[]>([]);

  readonly current = computed(() => this.pool()[this.index()] ?? null);
  readonly coveredCount = computed(() => this.matches().filter(m => m.covered).length);
  readonly progressPct = computed(() =>
    this.pool().length ? Math.round((this.index() / this.pool().length) * 100) : 0);

  async ngOnInit(): Promise<void> {
    this.svc.applyStoredTheme();
    if (!this.svc.topics().length) await this.svc.init();

    const topic = this.route.snapshot.queryParamMap.get('topic');
    const topicIds = topic ? [topic] : [];
    const all = await this.svc.buildPool(topicIds, []);
    const withPoints = all.filter(q => (q.answer.keyPoints?.length ?? 0) > 0);
    this.pool.set(this.shuffle(withPoints));
    this.phase.set('explain');
  }

  submit(): void {
    const q = this.current();
    if (!q || !this.explanation().trim()) return;
    this.matches.set(this.matchKeyPoints(q.answer.keyPoints ?? [], this.explanation()));
    this.phase.set('review');
  }

  grade(grade: SelfGrade): void {
    const q = this.current();
    if (!q) return;

    const score: FeynmanScore = {
      questionId: q.id, topicId: q.topicId, grade,
      covered: this.coveredCount(), total: this.matches().length,
      date: new Date().toISOString(),
    };
    this.done.update(list => [...list, score]);
    this.persistScore(score);

    // Feed the shared review log + daily tally so the dashboard stays coherent.
    this.reviewLog.log({
      questionId: q.id, topicId: q.topicId, topicName: q.topicName,
      result: grade === 'missed' ? 'review' : 'got',
    });
    this.svc.recordPractice(1, grade === 'missed' ? 0 : 1);

    this.next();
  }

  finish(): void {
    if (this.phase() === 'loading') return;
    this.phase.set('done');
  }

  restart(): void {
    this.index.set(0);
    this.explanation.set('');
    this.matches.set([]);
    this.done.set([]);
    this.pool.update(p => this.shuffle(p));
    this.phase.set(this.pool().length ? 'explain' : 'done');
  }

  countGrade(g: SelfGrade): number {
    return this.done().filter(s => s.grade === g).length;
  }

  // ── internals ──
  private next(): void {
    this.explanation.set('');
    this.matches.set([]);
    if (this.index() + 1 >= this.pool().length) {
      this.finish();
    } else {
      this.index.update(i => i + 1);
      this.phase.set('explain');
    }
  }

  /** Mark each key point covered when ≥half its keywords appear in the explanation. */
  private matchKeyPoints(points: string[], answer: string): PointMatch[] {
    const text = ` ${answer.toLowerCase()} `;
    return points.map(text0 => {
      const words = this.keywords(text0);
      if (!words.length) {
        const stripped = this.stripMd(text0).toLowerCase().trim();
        return { text: text0, covered: !!stripped && text.includes(stripped) };
      }
      const hits = words.filter(w => text.includes(w)).length;
      return { text: text0, covered: hits >= Math.ceil(words.length / 2) };
    });
  }

  private keywords(point: string): string[] {
    const seen = new Set<string>();
    return this.stripMd(point).toLowerCase().split(/[^a-z0-9+#.]+/)
      .filter(w => w.length >= 4 && !STOP.has(w) && !seen.has(w) && seen.add(w));
  }

  private stripMd(s: string): string {
    return s.replace(/[`*_>#\[\]()]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  private persistScore(score: FeynmanScore): void {
    try {
      const raw = localStorage.getItem(FEYNMAN_KEY);
      const list: FeynmanScore[] = raw ? JSON.parse(raw) : [];
      list.push(score);
      localStorage.setItem(FEYNMAN_KEY, JSON.stringify(list));
    } catch { /* quota / disabled storage */ }
  }

  private shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
