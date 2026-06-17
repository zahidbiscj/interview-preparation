import {
  ChangeDetectionStrategy, Component, computed, inject, OnInit, signal
} from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { QuestionBankService } from '../question-bank/question-bank.service';
import { QuestionView } from '../question-bank/models/question-bank.models';
import { ReviewLogService } from '../shared/review-log.service';

type Phase = 'setup' | 'running' | 'done';
type Grade = 'got' | 'review';

interface TopicChoice { id: string; name: string; icon: string; selected: boolean; }
interface Graded { question: QuestionView; grade: Grade; }

@Component({
  selector: 'app-mock-exam-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MarkdownComponent, RouterLink],
  template: `
    <div class="exam-shell" [attr.data-theme]="isDark() ? 'dark' : 'light'">

      <!-- ── Top bar ── -->
      <header class="topbar">
        <a routerLink="/" class="back-link">← <span class="lbl">Question Bank</span></a>
        <span class="app-brand">🎯 <span class="lbl">Interview Simulator</span></span>
        <span class="topbar-spacer">
          <a routerLink="/sets" class="nav-link"><span class="ico">🗂</span><span class="lbl">Sets</span></a>
          <a routerLink="/dashboard" class="nav-link"><span class="ico">📊</span><span class="lbl">Dashboard</span></a>
          <button class="theme-btn" (click)="svc.toggleTheme()">{{ isDark() ? '☀️' : '🌙' }}</button>
        </span>
      </header>

      <main class="exam-main">

        <!-- ════════ SETUP ════════ -->
        @if (phase() === 'setup') {
          <div class="setup fade-slide-enter">
            <h1 class="setup-title">Mock Interview Simulator</h1>
            <p class="setup-sub">Pick your scope, reveal each answer, and grade yourself. Build confidence gradually.</p>

            <section class="setup-block">
              <h3>1 · Topics</h3>
              <div class="chip-row">
                <button class="chip" [class.on]="allTopicsOn()" (click)="toggleAllTopics()">All</button>
                @for (t of topicChoices(); track t.id) {
                  <button class="chip" [class.on]="t.selected" (click)="toggleTopic(t.id)">
                    {{ t.icon }} {{ t.name }}
                  </button>
                }
              </div>
            </section>

            <section class="setup-block">
              <h3>2 · Difficulty</h3>
              <div class="chip-row">
                @for (lvl of levels; track lvl.value) {
                  <button class="chip" [class.on]="selectedLevels().includes(lvl.value)" (click)="toggleLevel(lvl.value)">
                    {{ lvl.label }}
                  </button>
                }
              </div>
            </section>

            <section class="setup-block">
              <h3>3 · Number of questions</h3>
              <div class="chip-row">
                @for (c of countOptions; track c) {
                  <button class="chip" [class.on]="count() === c" (click)="count.set(c)">
                    {{ c === 0 ? 'All' : c }}
                  </button>
                }
              </div>
            </section>

            <section class="setup-block">
              <h3>4 · Order</h3>
              <div class="chip-row">
                <button class="chip" [class.on]="order() === 'gradual'" (click)="order.set('gradual')">📈 Gradual (easy → hard)</button>
                <button class="chip" [class.on]="order() === 'shuffle'" (click)="order.set('shuffle')">🔀 Shuffle</button>
              </div>
            </section>

            <section class="setup-block">
              <label class="predict-toggle">
                <input type="checkbox" [checked]="predictOnly()" (change)="predictOnly.set(!predictOnly())" />
                🔮 Predict-the-output questions only
              </label>
            </section>

            @if (setupError()) { <p class="setup-error">{{ setupError() }}</p> }

            <button class="start-btn" [disabled]="loading()" (click)="start()">
              {{ loading() ? 'Loading…' : 'Start Simulation →' }}
            </button>
            <button class="start-btn" style="margin-top:8px; background: var(--surface-2); color: var(--text); border: 1px solid var(--border); font-weight: 600;" (click)="goLive()">
              🎤 Live Interview Mode
            </button>
          </div>
        }

        <!-- ════════ RUNNING ════════ -->
        @if (phase() === 'running' && current()) {
          <div class="runner">
            <!-- progress -->
            <div class="progress-head">
              <div class="progress-bar"><div class="progress-fill" [style.width.%]="progressPct()"></div></div>
              <div class="progress-meta">
                <span>Question {{ index() + 1 }} / {{ exam().length }}</span>
                <span class="timer">⏱ {{ elapsed() }}</span>
              </div>
            </div>

            <div class="q-panel fade-slide-enter">
              <div class="q-badges">
                <span class="badge badge-{{ current()!.type || 'conceptual' }}">{{ current()!.type || 'conceptual' }}</span>
                <span class="lvl lvl-{{ current()!.level || 'mid' }}">{{ current()!.level || 'mid' }}</span>
                <span class="q-topic">{{ current()!.topicName }} › {{ current()!.subtopicName }}</span>
              </div>

              <h2 class="q-text">{{ current()!.q }}</h2>

              <!-- code upfront for predict-the-output -->
              @if (current()!.type === 'code' && current()!.answer.code) {
                <div class="code-block">
                  <div class="code-lang-tag">{{ current()!.answer.code!.lang }}</div>
                  <markdown [data]="currentCodeMd()" />
                </div>
              }

              <!-- reveal -->
              @if (!revealed()) {
                <div class="think-zone">
                  <p class="think-hint">💭 Say your answer out loud, then reveal.</p>
                  <button class="reveal-btn" (click)="reveal()">Reveal Answer</button>
                </div>
              } @else {
                <div class="answer-zone fade-slide-enter">
                  <div class="answer-divider"></div>

                  <div class="md-content answer-oneliner">
                    <markdown [data]="current()!.answer.oneLiner" />
                  </div>

                  @if (current()!.answer.keyPoints?.length) {
                    <ul class="key-points">
                      @for (pt of current()!.answer.keyPoints!; track $index) {
                        <li class="md-content"><markdown [data]="pt" /></li>
                      }
                    </ul>
                  }

                  @if (current()!.answer.code?.note) {
                    <p class="code-note">📤 {{ current()!.answer.code!.note }}</p>
                  }

                  @if (current()!.answer.analogy) {
                    <div class="analogy md-content">💡 <markdown [data]="current()!.answer.analogy!" /></div>
                  }

                  <div class="grade-row">
                    <button class="grade-btn review" (click)="grade('review')">✗ Need review</button>
                    <button class="grade-btn got" (click)="grade('got')">✓ Got it</button>
                  </div>
                </div>
              }
            </div>

            <button class="quit-btn" (click)="finish()">End &amp; see results</button>
          </div>
        }

        <!-- ════════ DONE ════════ -->
        @if (phase() === 'done') {
          <div class="result fade-slide-enter">
            <h1 class="result-title">Session Complete</h1>

            <div class="score-ring" [style.--pct]="scorePct()">
              <div class="score-inner">
                <span class="score-big">{{ scorePct() }}%</span>
                <span class="score-sub">{{ gotCount() }} / {{ graded().length }} got it</span>
              </div>
            </div>

            <div class="result-stats">
              <div class="stat got"><span class="stat-num">{{ gotCount() }}</span><span class="stat-lbl">Got it</span></div>
              <div class="stat review"><span class="stat-num">{{ reviewCount() }}</span><span class="stat-lbl">To review</span></div>
            </div>

            @if (reviewList().length) {
              <section class="review-section">
                <h3>📌 Review these ({{ reviewList().length }})</h3>
                <div class="review-list">
                  @for (g of reviewList(); track g.question.id) {
                    <details class="review-item">
                      <summary>
                        <span class="badge badge-{{ g.question.type || 'conceptual' }}">{{ g.question.type || 'conceptual' }}</span>
                        {{ g.question.q }}
                      </summary>
                      <div class="md-content review-answer">
                        <markdown [data]="g.question.answer.oneLiner" />
                      </div>
                    </details>
                  }
                </div>
              </section>
            } @else {
              <p class="all-good">🎉 You marked everything as "got it". Nice.</p>
            }

            <div class="result-actions">
              @if (reviewList().length) {
                <button class="action-btn primary" (click)="retryReview()">Retry review-only ({{ reviewList().length }})</button>
              }
              <button class="action-btn" (click)="resetToSetup()">New session</button>
              <a routerLink="/" class="action-btn link">Back to bank</a>
            </div>
          </div>
        }
      </main>
    </div>
  `,
  styleUrl: './mock-exam.page.scss'
})
export class MockExamPage implements OnInit {
  svc = inject(QuestionBankService);
  readonly isDark = this.svc.isDark;

  readonly levels = [
    { value: 'junior', label: '🟢 Junior' },
    { value: 'mid', label: '🟡 Mid' },
    { value: 'senior', label: '🔴 Senior' },
  ];
  readonly countOptions = [5, 10, 20, 40, 0];

  // ── setup state ──
  readonly topicChoices = signal<TopicChoice[]>([]);
  readonly selectedLevels = signal<string[]>(['junior', 'mid', 'senior']);
  readonly count = signal<number>(10);
  readonly order = signal<'gradual' | 'shuffle'>('shuffle');
  readonly predictOnly = signal(false);
  readonly loading = signal(false);
  readonly setupError = signal<string | null>(null);

  // ── exam state ──
  readonly phase = signal<Phase>('setup');
  readonly exam = signal<QuestionView[]>([]);
  readonly index = signal(0);
  readonly revealed = signal(false);
  readonly graded = signal<Graded[]>([]);
  readonly elapsed = signal('0:00');

  private timerId: ReturnType<typeof setInterval> | null = null;
  private startMs = 0;

  readonly current = computed(() => this.exam()[this.index()] ?? null);
  readonly allTopicsOn = computed(() => this.topicChoices().every(t => t.selected));
  readonly progressPct = computed(() =>
    this.exam().length ? Math.round((this.index() / this.exam().length) * 100) : 0);

  readonly gotCount = computed(() => this.graded().filter(g => g.grade === 'got').length);
  readonly reviewCount = computed(() => this.graded().filter(g => g.grade === 'review').length);
  readonly reviewList = computed(() => this.graded().filter(g => g.grade === 'review'));
  readonly scorePct = computed(() =>
    this.graded().length ? Math.round((this.gotCount() / this.graded().length) * 100) : 0);

  readonly currentCodeMd = computed(() => {
    const c = this.current()?.answer.code;
    return c ? '```' + c.lang + '\n' + c.snippet + '\n```' : '';
  });

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private reviewLog = inject(ReviewLogService);

  async ngOnInit(): Promise<void> {
    this.svc.applyStoredTheme();
    if (!this.svc.topics().length) await this.svc.init();
    this.topicChoices.set(
      this.svc.topics().map(t => ({ id: t.id, name: t.name, icon: t.icon, selected: true }))
    );

    // Custom set launch: /simulator?set=<id> — run that exact curated list.
    const setId = this.route.snapshot.queryParamMap.get('set');
    if (setId) {
      const set = this.svc.sets().find(s => s.id === setId);
      if (set?.questionIds.length) {
        this.loading.set(true);
        const pool = await this.svc.buildPoolFromIds(set.questionIds);
        this.loading.set(false);
        if (pool.length) { this.beginExam(pool); return; }
      }
      this.setupError.set('That set is empty or could not be loaded.');
      return;
    }

    // Quick-start preset (e.g. dashboard "Shuffle 10"): /simulator?quick=10
    const quick = Number(this.route.snapshot.queryParamMap.get('quick'));
    if (quick > 0) {
      this.topicChoices.update(list => list.map(t => ({ ...t, selected: true })));
      this.selectedLevels.set(['junior', 'mid', 'senior']);
      this.count.set(quick);
      this.order.set('shuffle');
      this.predictOnly.set(false);
      await this.start();
    }
  }

  // ── setup actions ──
  toggleTopic(id: string): void {
    this.topicChoices.update(list =>
      list.map(t => (t.id === id ? { ...t, selected: !t.selected } : t)));
  }
  toggleAllTopics(): void {
    const turnOn = !this.allTopicsOn();
    this.topicChoices.update(list => list.map(t => ({ ...t, selected: turnOn })));
  }
  toggleLevel(lvl: string): void {
    this.selectedLevels.update(arr =>
      arr.includes(lvl) ? arr.filter(l => l !== lvl) : [...arr, lvl]);
  }

  async start(): Promise<void> {
    this.setupError.set(null);
    const topicIds = this.topicChoices().filter(t => t.selected).map(t => t.id);
    const levels = this.selectedLevels();
    if (!topicIds.length) { this.setupError.set('Pick at least one topic.'); return; }
    if (!levels.length) { this.setupError.set('Pick at least one difficulty.'); return; }

    this.loading.set(true);
    let pool = await this.svc.buildPool(topicIds, levels);
    if (this.predictOnly()) pool = pool.filter(q => q.type === 'code' && !!q.answer.code);
    this.loading.set(false);

    if (!pool.length) { this.setupError.set('No questions match that selection.'); return; }

    pool = this.orderPool(pool);
    const n = this.count();
    if (n > 0 && pool.length > n) pool = pool.slice(0, n);

    this.beginExam(pool);
  }

  private orderPool(pool: QuestionView[]): QuestionView[] {
    if (this.order() === 'shuffle') return this.shuffle(pool);
    // gradual: junior → mid → senior, shuffled within each band
    const bands: Record<'junior' | 'mid' | 'senior', QuestionView[]> = { junior: [], mid: [], senior: [] };
    for (const q of pool) {
      const lvl = (q.level === 'junior' || q.level === 'senior') ? q.level : 'mid';
      bands[lvl].push(q);
    }
    return [
      ...this.shuffle(bands.junior),
      ...this.shuffle(bands.mid),
      ...this.shuffle(bands.senior),
    ];
  }

  private shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  private beginExam(pool: QuestionView[]): void {
    this.exam.set(pool);
    this.index.set(0);
    this.revealed.set(false);
    this.graded.set([]);
    this.phase.set('running');
    this.startTimer();
  }

  // ── runner actions ──
  reveal(): void { this.revealed.set(true); }

  grade(g: Grade): void {
    const q = this.current();
    if (!q) return;
    this.graded.update(list => [...list, { question: q, grade: g }]);
    this.reviewLog.log({ questionId: q.id, topicId: q.topicId, topicName: q.topicName, result: g });
    if (this.index() + 1 >= this.exam().length) {
      this.finish();
    } else {
      this.index.update(i => i + 1);
      this.revealed.set(false);
    }
  }

  finish(): void {
    if (this.phase() !== 'running') return;
    this.stopTimer();
    this.svc.recordPractice(this.graded().length, this.gotCount());
    this.phase.set('done');
  }

  retryReview(): void {
    const pool = this.reviewList().map(g => g.question);
    this.beginExam(this.shuffle(pool));
  }

  goLive(): void {
    this.router.navigate(['/live-interview']);
  }

  resetToSetup(): void {
    this.stopTimer();
    this.phase.set('setup');
    this.exam.set([]);
    this.graded.set([]);
    this.index.set(0);
    this.revealed.set(false);
  }

  // ── timer ──
  private startTimer(): void {
    this.startMs = Date.now();
    this.elapsed.set('0:00');
    this.stopTimer();
    this.timerId = setInterval(() => {
      const s = Math.floor((Date.now() - this.startMs) / 1000);
      const m = Math.floor(s / 60);
      this.elapsed.set(`${m}:${String(s % 60).padStart(2, '0')}`);
    }, 1000);
  }
  private stopTimer(): void {
    if (this.timerId) { clearInterval(this.timerId); this.timerId = null; }
  }
}
