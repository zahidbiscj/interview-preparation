import {
  ChangeDetectionStrategy, Component, computed, inject, OnInit, signal
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuestionBankService } from '../question-bank/question-bank.service';
import { ReviewLogService } from '../shared/review-log.service';

interface TopicRow {
  topicId: string;
  name: string;
  icon: string;
  count: number;
  lastReviewed: string | null;
  daysSince: number | null;
}

@Component({
  selector: 'app-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
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
        <div class="home">

          <!-- Stat cards -->
          <section class="stat-cards">
            <div class="stat-card"><span class="stat-icon">🔥</span><span class="stat-num">{{ streak() }}</span><span class="stat-lbl">day streak</span></div>
            <div class="stat-card"><span class="stat-icon">✅</span><span class="stat-num">{{ todayAnswered() }}</span><span class="stat-lbl">today</span></div>
            <div class="stat-card"><span class="stat-icon">📚</span><span class="stat-num">{{ totalAnswered() }}</span><span class="stat-lbl">all-time</span></div>
            <div class="stat-card"><span class="stat-icon">🎯</span><span class="stat-num">{{ accuracy() }}%</span><span class="stat-lbl">accuracy</span></div>
          </section>

          <!-- Daily practice CTA -->
          <section class="practice-cta">
            <div class="cta-text">
              <h2>Daily Practice</h2>
              <p>10 random questions across every topic — opens the simulator, fresh shuffle each time.</p>
            </div>
            <button class="shuffle-btn" (click)="shuffle10()">🔀 Shuffle 10 &amp; Practice</button>
          </section>

          <!-- Practice mode tiles -->
          <section class="tiles">
            <a routerLink="/spaced-repetition" class="tile">
              <span class="tile-icon">🧠</span>
              <span class="tile-name">Spaced Repetition</span>
              <span class="tile-sub">SM-2 review queue</span>
            </a>
            <a routerLink="/feynman" class="tile">
              <span class="tile-icon">🗣️</span>
              <span class="tile-name">Feynman Mode</span>
              <span class="tile-sub">Explain it simply</span>
            </a>
            <a routerLink="/neglect" class="tile">
              <span class="tile-icon">⏳</span>
              <span class="tile-name">Topic Neglect</span>
              <span class="tile-sub">What you're forgetting</span>
            </a>
            <a routerLink="/mastery" class="tile">
              <span class="tile-icon">📡</span>
              <span class="tile-name">Mastery Radar</span>
              <span class="tile-sub">Strengths &amp; gaps</span>
            </a>
          </section>

          <div class="two-col">
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
                        <div class="bar-rev" [style.height.%]="barPct(d.answered - d.got)"></div>
                        <div class="bar-got" [style.height.%]="barPct(d.got)"></div>
                      </div>
                      <span class="bar-lbl">{{ shortDay(d.date) }}</span>
                    </div>
                  }
                </div>
              }
            </section>

            <!-- Topics by reviews (descending) -->
            <section class="topics-card">
              <div class="chart-head"><h3>Topics by reviews</h3><span class="chart-legend">most practiced first</span></div>
              <ul class="topic-rows">
                @for (t of topicRows(); track t.topicId) {
                  <li class="topic-row" (click)="studyTopic(t.topicId)">
                    <span class="t-icon">{{ t.icon }}</span>
                    <span class="t-name">{{ t.name }}</span>
                    <span class="t-bar"><span class="t-bar-fill" [style.width.%]="reviewPct(t.count)"></span></span>
                    <span class="t-count">{{ t.count }}</span>
                    <span class="t-status status-{{ statusClass(t.daysSince) }}" [title]="lastLabel(t)">{{ statusDot(t.daysSince) }}</span>
                  </li>
                }
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  `,
  styleUrl: './dashboard.page.scss'
})
export class DashboardPage implements OnInit {
  svc = inject(QuestionBankService);
  private reviewLog = inject(ReviewLogService);
  private router = inject(Router);
  readonly isDark = this.svc.isDark;

  readonly streak = this.svc.streak;
  readonly totalAnswered = this.svc.totalAnswered;

  readonly chartDays = computed(() => this.svc.lastDays(14));
  readonly chartMax = computed(() => Math.max(1, ...this.chartDays().map(d => d.answered)));

  readonly todayAnswered = computed(() => this.svc.lastDays(1)[0]?.answered ?? 0);

  readonly accuracy = computed(() => {
    let a = 0, g = 0;
    for (const d of Object.values(this.svc.daily())) { a += d.answered; g += d.got; }
    return a ? Math.round((g / a) * 100) : 0;
  });

  /** All topics with review counts, sorted descending by count. */
  readonly topicRows = computed<TopicRow[]>(() => {
    this.reviewLog.entries(); // establish dependency for reactivity
    const stats = this.reviewLog.statsByTopic();
    const byId = new Map(stats.map(s => [s.topicId, s]));
    const now = Date.now();
    const rows: TopicRow[] = this.svc.topics().map(t => {
      const s = byId.get(t.id);
      const last = s?.lastReviewed ?? null;
      return {
        topicId: t.id, name: t.name, icon: t.icon,
        count: s?.count ?? 0,
        lastReviewed: last,
        daysSince: last ? Math.floor((now - new Date(last).getTime()) / 86400000) : null,
      };
    });
    return rows.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  });

  readonly maxReviewCount = computed(() => Math.max(1, ...this.topicRows().map(t => t.count)));

  async ngOnInit(): Promise<void> {
    this.svc.applyStoredTheme();
    if (!this.svc.topics().length) await this.svc.init();
  }

  shuffle10(): void {
    this.router.navigate(['/simulator'], { queryParams: { quick: 10 } });
  }

  studyTopic(topicId: string): void {
    this.router.navigate(['/spaced-repetition'], { queryParams: { topic: topicId } });
  }

  barPct(value: number): number { return Math.round((value / this.chartMax()) * 100); }
  reviewPct(count: number): number { return Math.round((count / this.maxReviewCount()) * 100); }

  shortDay(dateKey: string): string {
    const [y, m, d] = dateKey.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(undefined, { weekday: 'short' }).charAt(0);
  }

  statusClass(days: number | null): string {
    if (days === null) return 'none';
    if (days > 14) return 'critical';
    if (days >= 7) return 'warning';
    return 'fresh';
  }
  statusDot(days: number | null): string {
    const c = this.statusClass(days);
    return c === 'critical' ? '🔴' : c === 'warning' ? '🟡' : c === 'fresh' ? '🟢' : '⚪';
  }
  lastLabel(t: TopicRow): string {
    if (t.daysSince === null) return 'Never reviewed';
    if (t.daysSince === 0) return 'Reviewed today';
    return `${t.daysSince}d since last review`;
  }
}
