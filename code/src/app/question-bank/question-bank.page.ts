import {
  ChangeDetectionStrategy, Component, computed, inject, OnInit, signal
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuestionBankService } from './question-bank.service';
import { TopicSidebarComponent } from './components/topic-sidebar/topic-sidebar.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { CheatSheetPanelComponent } from './components/cheat-sheet-panel/cheat-sheet-panel.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-question-bank-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    TopicSidebarComponent,
    SearchFilterComponent,
    QuestionCardComponent,
    CheatSheetPanelComponent,
    ButtonModule
  ],
  template: `
    <div class="app-shell" [attr.data-theme]="isDark() ? 'dark' : 'light'">

      <!-- ── Top bar ── -->
      <header class="topbar">
        <div class="topbar-left">
          <button class="menu-btn" (click)="drawerOpen.set(true)">☰ Topics</button>
          <span class="app-brand">📚 PrepDeck</span>
        </div>
        <div class="topbar-center">
          <span class="stats-pill">235 questions · 8 topics</span>
        </div>
        <div class="topbar-right">
          <a routerLink="/simulator" class="sim-link">🎯 Simulator</a>
          <button class="theme-btn" (click)="toggleTheme()" [title]="isDark() ? 'Switch to light' : 'Switch to dark'">
            {{ isDark() ? '☀️' : '🌙' }}
          </button>
        </div>
      </header>

      <!-- ── Main layout ── -->
      <div class="layout">

        <!-- Mobile drawer backdrop -->
        @if (drawerOpen()) {
          <div class="drawer-backdrop" (click)="drawerOpen.set(false)"></div>
        }

        <!-- Sidebar (desktop: always visible; mobile: drawer) -->
        <aside class="sidebar-col" [class.drawer-open]="drawerOpen()">
          <qb-topic-sidebar (closed)="drawerOpen.set(false)" />
        </aside>

        <!-- Main content -->
        <main class="main-col">

          @if (error()) {
            <div class="error-banner">
              ⚠️ {{ error() }}
              <button class="retry-btn" (click)="retry()">Retry</button>
            </div>
          }

          @if (!selected()) {
            <div class="empty-state">
              <div class="empty-icon">📖</div>
              <h2>Pick a topic to start</h2>
              <p>Select a topic from the sidebar to browse questions and cheat sheets.</p>
            </div>
          } @else {
            <!-- Breadcrumb -->
            <div class="breadcrumb-bar">
              <span class="bc-topic">{{ selectedTopicName() }}</span>
              <span class="bc-sep">›</span>
              <span class="bc-sub">{{ selectedSubtopicName() }}</span>
              <span class="bc-count">
                {{ visibleQuestions().length }} of {{ totalInSubtopic() }} question{{ totalInSubtopic() === 1 ? '' : 's' }}
                @if (hasActiveFilter()) { <span class="filter-active-dot">•</span> }
              </span>
            </div>

            <!-- Cheat sheet panel -->
            <div class="content-area">
              <qb-cheat-sheet-panel [topicId]="selected()!.topicId" />

              <!-- Search filter bar -->
              <qb-search-filter />

              <!-- Loading skeleton -->
              @if (loadingTopicId()) {
                <div class="skeleton-list">
                  @for (i of [1,2,3]; track i) {
                    <div class="skeleton-card">
                      <div class="sk-line sk-short"></div>
                      <div class="sk-line sk-long"></div>
                    </div>
                  }
                </div>
              }

              <!-- Questions list -->
              @if (!loadingTopicId()) {
                @if (visibleQuestions().length === 0) {
                  <div class="no-results">
                    @if (filter().bookmarkedOnly) {
                      <p>You haven't bookmarked any questions yet.</p>
                    } @else {
                      <p>No questions match your filters.</p>
                      <button class="clear-link" (click)="clearFilter()">Clear filters</button>
                    }
                  </div>
                } @else {
                  <div class="question-list">
                    @for (q of visibleQuestions(); track q.id) {
                      <qb-question-card [question]="q" />
                    }
                  </div>
                }
              }
            </div>
          }
        </main>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100vh; overflow: hidden; }

    .app-shell {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background: var(--bg);
      color: var(--text);
    }

    /* ── Top bar ── */
    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      height: 48px;
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      flex-shrink: 0;
      z-index: 100;
      gap: 12px;
    }

    .topbar-left { display: flex; align-items: center; gap: 12px; }
    .topbar-center { flex: 1; display: flex; justify-content: center; }
    .topbar-right { display: flex; align-items: center; gap: 8px; }

    .menu-btn {
      display: none;
      background: var(--surface-2);
      border: 1px solid var(--border);
      color: var(--text);
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.85em;
      white-space: nowrap;

      @media (max-width: 768px) { display: flex; align-items: center; gap: 6px; }
    }

    .app-brand {
      font-weight: 700;
      font-size: 1em;
      letter-spacing: -0.01em;
    }

    .stats-pill {
      font-size: 0.75em;
      color: var(--text-muted);
      background: var(--surface-2);
      padding: 3px 10px;
      border-radius: 12px;
      border: 1px solid var(--border);

      @media (max-width: 480px) { display: none; }
    }

    .theme-btn {
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 4px 8px;
      cursor: pointer;
      font-size: 1em;
      transition: background 120ms;

      &:hover { background: var(--surface); }
    }

    .sim-link {
      background: color-mix(in srgb, var(--accent) 14%, var(--surface-2));
      border: 1px solid color-mix(in srgb, var(--accent) 35%, var(--border));
      color: var(--accent);
      padding: 5px 12px;
      border-radius: 6px;
      font-size: 0.82em;
      font-weight: 600;
      white-space: nowrap;
      transition: background 120ms;

      &:hover { background: color-mix(in srgb, var(--accent) 22%, var(--surface-2)); text-decoration: none; }
    }

    /* ── Layout ── */
    .layout {
      display: flex;
      flex: 1;
      overflow: hidden;
      position: relative;
    }

    /* ── Sidebar ── */
    .sidebar-col {
      width: 260px;
      flex-shrink: 0;
      overflow: hidden;

      @media (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 280px;
        z-index: 200;
        transform: translateX(-100%);
        transition: transform 200ms ease;
        box-shadow: 4px 0 20px rgba(0,0,0,0.4);

        &.drawer-open { transform: translateX(0); }
      }
    }

    .drawer-backdrop {
      display: none;

      @media (max-width: 768px) {
        display: block;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        z-index: 199;
      }
    }

    /* ── Main content ── */
    .main-col {
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      background: var(--bg);
    }

    /* ── Error banner ── */
    .error-banner {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: color-mix(in srgb, var(--danger) 10%, var(--surface));
      border-bottom: 1px solid color-mix(in srgb, var(--danger) 30%, var(--border));
      color: var(--danger);
      font-size: 0.9em;
    }

    .retry-btn {
      background: var(--danger);
      color: white;
      border: none;
      padding: 4px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85em;

      &:hover { opacity: 0.85; }
    }

    /* ── Empty state ── */
    .empty-state {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 40px;
      text-align: center;
      color: var(--text-muted);

      .empty-icon { font-size: 3em; }
      h2 { color: var(--text); font-size: 1.2em; }
      p { font-size: 0.9em; max-width: 320px; line-height: 1.6; }
    }

    /* ── Breadcrumb ── */
    .breadcrumb-bar {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;
      padding: 10px 16px;
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      font-size: 0.875em;
      flex-shrink: 0;
    }

    .bc-topic { color: var(--text-muted); }
    .bc-sep { color: var(--text-muted); }
    .bc-sub { color: var(--text); font-weight: 600; }
    .bc-count { margin-left: auto; color: var(--text-muted); font-size: 0.9em; display: flex; align-items: center; gap: 5px; }
    .filter-active-dot { color: var(--accent); font-size: 1.2em; }

    /* ── Content area ── */
    .content-area {
      padding: 12px 16px 24px;
      display: flex;
      flex-direction: column;
      gap: 0;
      flex: 1;
    }

    /* ── Skeleton ── */
    .skeleton-list { display: flex; flex-direction: column; gap: 8px; padding-top: 12px; }

    .skeleton-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      animation: shimmer 1.2s infinite;
    }

    .sk-line {
      height: 12px;
      border-radius: 6px;
      background: linear-gradient(90deg, var(--surface-2) 25%, var(--surface) 50%, var(--surface-2) 75%);
      background-size: 200% 100%;
      animation: shimmerMove 1.2s infinite;
    }

    .sk-short { width: 35%; }
    .sk-long { width: 75%; }

    @keyframes shimmerMove {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    /* ── No results ── */
    .no-results {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 40px;
      color: var(--text-muted);
      text-align: center;
      font-size: 0.9em;
    }

    .clear-link {
      background: none;
      border: 1px solid var(--border);
      color: var(--accent);
      padding: 6px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875em;

      &:hover { background: var(--surface-2); }
    }

    /* ── Question list ── */
    .question-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-top: 12px;
    }
  `]
})
export class QuestionBankPage implements OnInit {
  private svc = inject(QuestionBankService);

  readonly selected = this.svc.selected;
  readonly visibleQuestions = this.svc.visibleQuestions;
  readonly loadingTopicId = this.svc.loadingTopicId;
  readonly error = this.svc.error;
  readonly filter = this.svc.filter;
  readonly isDark = this.svc.isDark;

  readonly drawerOpen = signal(false);

  readonly selectedTopicName = computed(() => {
    const sel = this.selected();
    if (!sel) return '';
    return this.svc.topics().find(t => t.id === sel.topicId)?.name ?? '';
  });

  readonly selectedSubtopicName = computed(() => {
    const sel = this.selected();
    if (!sel) return '';
    const topic = this.svc.topics().find(t => t.id === sel.topicId);
    return topic?.subtopics.find(s => s.subtopicId === sel.subtopicId)?.subtopicName ?? '';
  });

  readonly totalInSubtopic = computed(() => {
    const sel = this.selected();
    if (!sel) return 0;
    const topic = this.svc.topics().find(t => t.id === sel.topicId);
    return topic?.subtopics.find(s => s.subtopicId === sel.subtopicId)?.questionCount ?? 0;
  });

  readonly hasActiveFilter = computed(() => {
    const f = this.filter();
    return f.search !== '' || f.type !== 'all' || f.bookmarkedOnly;
  });

  async ngOnInit(): Promise<void> {
    this.svc.applyStoredTheme();
    await this.svc.init();
  }

  toggleTheme(): void {
    this.svc.toggleTheme();
  }

  clearFilter(): void {
    this.svc.clearFilter();
  }

  async retry(): Promise<void> {
    await this.svc.init();
  }
}
