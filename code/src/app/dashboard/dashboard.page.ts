import {
  ChangeDetectionStrategy, Component, computed, inject, OnInit, signal
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { QuestionBankService } from '../question-bank/question-bank.service';
import { QuestionView } from '../question-bank/models/question-bank.models';

type Phase = 'home' | 'practice';
type Grade = 'got' | 'review';

@Component({
  selector: 'app-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MarkdownComponent],
  template: `
    <div class="dash-shell" [attr.data-theme]="isDark() ? 'dark' : 'light'">

      <header class="topbar">
        <span class="app-brand">📊 Dashboard</span>
        <nav class="nav">
          <a routerLink="/" class="nav-link">📚 Bank</a>
          <a routerLink="/simulator" class="nav-link">🎯 Simulator</a>
          <button class="theme-btn" (click)="svc.toggleTheme()">{{ isDark() ? '☀️' : '🌙' }}</button>
        </nav>
      </header>

      <main class="dash-main">

        <!-- ════════ HOME ════════ -->
        @if (phase() === 'home') {
          <div class="home fade-slide-enter">

            <!-- Stat cards -->
            <section class="stat-cards">
              <div class="stat-card">
                <span class="stat-icon">🔥</span>
                <span class="stat-num">{{ streak() }}</span>
                <span class="stat-lbl">day streak</span>
              </div>
              <div class="stat-card">
                <span class="stat-icon">✅</span>
                <span class="stat-num">{{ todayAnswered() }}</span>
                <span class="stat-lbl">today</span>
              </div>
              <div class="stat-card">
                <span class="stat-icon">📚</span>
                <span class="stat-num">{{ totalAnswered() }}</span>
                <span class="stat-lbl">all-time</span>
              </div>
              <div class="stat-card">
                <span class="stat-icon">🎯</span>
                <span class="stat-num">{{ accuracy() }}%</span>
                <span class="stat-lbl">accuracy</span>
              </div>
            </section>

            <!-- Daily practice CTA -->
            <section class="practice-cta">
              <div class="cta-text">
                <h2>Daily Practice</h2>
                <p>10 random questions across every topic. New shuffle each time.</p>
              </div>
              <button class="shuffle-btn" [disabled]="loading()" (click)="startShuffle()">
                {{ loading() ? 'Shuffling…' : '🔀 Shuffle 10 & Practice' }}
              </button>
            </section>

            @if (lastResult()) {
              <div class="last-result">
                Last session: <strong>{{ lastResult()!.got }}/{{ lastResult()!.total }}</strong> got it 🎉
              </div>
            }

            <!-- Daily chart -->
            <section class="chart-card">
              <div class="chart-head">
                <h3>Activity — last 14 days</h3>
                <span class="chart-legend"><i class="dot got"></i> got it <i class="dot rev"></i> review</span>
              </div>

              @if (totalAnswered() === 0) {
                <p class="chart-empty">No practice yet — hit “Shuffle 10” to start your streak.</p>
              } @else {
                <div class="chart">
                  @for (d of chartDays(); track d.date) {
                    <div class="bar-col" [title]="d.date + ': ' + d.answered + ' answered'">
                      <div class="bar-stack">
                        <div class="bar-rev"
                             [style.height.%]="barPct(d.answered - d.got)"></div>
                        <div class="bar-got"
                             [style.height.%]="barPct(d.got)"></div>
                      </div>
                      <span class="bar-lbl">{{ shortDay(d.date) }}</span>
                    </div>
                  }
                </div>
              }
            </section>
          </div>
        }

        <!-- ════════ PRACTICE ════════ -->
        @if (phase() === 'practice' && current()) {
          <div class="runner">
            <div class="progress-head">
              <div class="progress-bar"><div class="progress-fill" [style.width.%]="progressPct()"></div></div>
              <div class="progress-meta">
                <span>Question {{ index() + 1 }} / {{ batch().length }}</span>
                <button class="quit-link" (click)="finishPractice()">End</button>
              </div>
            </div>

            <div class="q-panel fade-slide-enter">
              <div class="q-badges">
                <span class="badge badge-{{ current()!.type || 'conceptual' }}">{{ current()!.type || 'conceptual' }}</span>
                <span class="lvl lvl-{{ current()!.level || 'mid' }}">{{ current()!.level || 'mid' }}</span>
                <span class="q-topic">{{ current()!.topicName }}</span>
              </div>

              <h2 class="q-text">{{ current()!.q }}</h2>

              @if (current()!.type === 'code' && current()!.answer.code) {
                <div class="code-block">
                  <div class="code-lang-tag">{{ current()!.answer.code!.lang }}</div>
                  <markdown [data]="currentCodeMd()" />
                </div>
              }

              @if (!revealed()) {
                <div class="think-zone">
                  <p class="think-hint">💭 Answer out loud, then reveal.</p>
                  <button class="reveal-btn" (click)="revealed.set(true)">Reveal Answer</button>
                </div>
              } @else {
                <div class="answer-zone fade-slide-enter">
                  <div class="answer-divider"></div>
                  <div class="md-content"><markdown [data]="current()!.answer.oneLiner" /></div>
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
                  <div class="grade-row">
                    <button class="grade-btn review" (click)="grade('review')">✗ Review</button>
                    <button class="grade-btn got" (click)="grade('got')">✓ Got it</button>
                  </div>
                </div>
              }
            </div>
          </div>
        }
      </main>
    </div>
  `,
  styleUrl: './dashboard.page.scss'
})
export class DashboardPage implements OnInit {
  svc = inject(QuestionBankService);
  readonly isDark = this.svc.isDark;

  readonly streak = this.svc.streak;
  readonly totalAnswered = this.svc.totalAnswered;

  readonly phase = signal<Phase>('home');
  readonly loading = signal(false);
  readonly lastResult = signal<{ got: number; total: number } | null>(null);

  readonly batch = signal<QuestionView[]>([]);
  readonly index = signal(0);
  readonly revealed = signal(false);
  private gotSoFar = 0;
  private gradedSoFar = 0;

  readonly current = computed(() => this.batch()[this.index()] ?? null);
  readonly progressPct = computed(() =>
    this.batch().length ? Math.round((this.index() / this.batch().length) * 100) : 0);

  readonly chartDays = computed(() => this.svc.lastDays(14));
  readonly chartMax = computed(() => Math.max(1, ...this.chartDays().map(d => d.answered)));

  readonly todayAnswered = computed(() => {
    const days = this.svc.lastDays(1);
    return days[0]?.answered ?? 0;
  });

  readonly accuracy = computed(() => {
    const days = this.svc.daily();
    let a = 0, g = 0;
    for (const d of Object.values(days)) { a += d.answered; g += d.got; }
    return a ? Math.round((g / a) * 100) : 0;
  });

  readonly currentCodeMd = computed(() => {
    const c = this.current()?.answer.code;
    return c ? '```' + c.lang + '\n' + c.snippet + '\n```' : '';
  });

  async ngOnInit(): Promise<void> {
    this.svc.applyStoredTheme();
    if (!this.svc.topics().length) await this.svc.init();
  }

  barPct(value: number): number {
    return Math.round((value / this.chartMax()) * 100);
  }

  shortDay(dateKey: string): string {
    const [y, m, d] = dateKey.split('-').map(Number);
    const wd = new Date(y, m - 1, d).toLocaleDateString(undefined, { weekday: 'short' });
    return wd.charAt(0);
  }

  async startShuffle(): Promise<void> {
    this.loading.set(true);
    const pool = await this.svc.buildPool([], []);
    this.loading.set(false);
    if (!pool.length) return;
    const picked = this.shuffle(pool).slice(0, 10);
    this.batch.set(picked);
    this.index.set(0);
    this.revealed.set(false);
    this.gotSoFar = 0;
    this.gradedSoFar = 0;
    this.phase.set('practice');
  }

  grade(g: Grade): void {
    this.gradedSoFar++;
    if (g === 'got') this.gotSoFar++;
    if (this.index() + 1 >= this.batch().length) {
      this.finishPractice();
    } else {
      this.index.update(i => i + 1);
      this.revealed.set(false);
    }
  }

  finishPractice(): void {
    if (this.phase() !== 'practice') return;
    this.svc.recordPractice(this.gradedSoFar, this.gotSoFar);
    if (this.gradedSoFar > 0) {
      this.lastResult.set({ got: this.gotSoFar, total: this.gradedSoFar });
    }
    this.phase.set('home');
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
