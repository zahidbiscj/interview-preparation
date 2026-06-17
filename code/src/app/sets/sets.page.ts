import {
  ChangeDetectionStrategy, Component, computed, inject, OnInit, signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { QuestionBankService } from '../question-bank/question-bank.service';
import { QuestionView, QuestionType } from '../question-bank/models/question-bank.models';
import { QuestionCardComponent } from '../question-bank/components/question-card/question-card.component';

type Mode = 'add' | 'review';

@Component({
  selector: 'app-sets-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, RouterLink, QuestionCardComponent],
  template: `
    <div class="sets-shell" [attr.data-theme]="isDark() ? 'dark' : 'light'">

      <!-- ── Top bar ── -->
      <header class="topbar">
        <a routerLink="/" class="back-link">← <span class="lbl">Question Bank</span></a>
        <a routerLink="/" class="app-brand">🚀 <span class="lbl">crackInterview</span></a>
        <span class="topbar-spacer">
          <a routerLink="/simulator" class="nav-link"><span class="ico">🎯</span><span class="lbl">Simulator</span></a>
          <a routerLink="/dashboard" class="nav-link"><span class="ico">📊</span><span class="lbl">Dashboard</span></a>
          <button class="theme-btn" (click)="svc.toggleTheme()">{{ isDark() ? '☀️' : '🌙' }}</button>
        </span>
      </header>

      <div class="layout">

        <!-- ── Sets sidebar ── -->
        <aside class="sets-col">
          <div class="new-set">
            <input
              class="new-input"
              type="text"
              placeholder="New set name…"
              [(ngModel)]="newSetName"
              (keyup.enter)="createSet()" />
            <button class="new-btn" (click)="createSet()" [disabled]="!newSetName().trim()">+ Create</button>
          </div>

          @if (sets().length === 0) {
            <p class="sets-empty">No sets yet. Create one to start adding questions.</p>
          } @else {
            <ul class="set-list">
              @for (s of sets(); track s.id) {
                <li
                  class="set-row"
                  [class.active]="s.id === activeSetId()"
                  (click)="selectSet(s.id)">
                  @if (renamingId() === s.id) {
                    <input
                      class="rename-input"
                      type="text"
                      [(ngModel)]="renameText"
                      (click)="$event.stopPropagation()"
                      (keyup.enter)="commitRename(s.id)"
                      (blur)="commitRename(s.id)" />
                  } @else {
                    <span class="set-name">{{ s.name }}</span>
                    <span class="set-count">{{ s.questionIds.length }}</span>
                  }
                  <span class="set-row-actions">
                    <button class="row-btn" title="Rename" (click)="startRename(s, $event)">✎</button>
                    <button class="row-btn danger" title="Delete" (click)="deleteSet(s.id, $event)">🗑</button>
                  </span>
                </li>
              }
            </ul>
          }
        </aside>

        <!-- ── Main pane ── -->
        <main class="main-col">
          @if (!activeSet()) {
            <div class="empty-state">
              <div class="empty-icon">🗂</div>
              <h2>Build your own interview set</h2>
              <p>Create a set on the left, then search across every topic and add the questions you want to practice. Review them as cards or run the whole set in the simulator.</p>
            </div>
          } @else {
            <!-- Set header -->
            <div class="set-head">
              <div class="set-head-info">
                <h1 class="set-title">{{ activeSet()!.name }}</h1>
                <span class="set-sub">{{ activeSet()!.questionIds.length }} question{{ activeSet()!.questionIds.length === 1 ? '' : 's' }}</span>
              </div>
              <div class="run-actions">
                <button
                  class="run-btn"
                  [disabled]="activeSet()!.questionIds.length === 0"
                  (click)="runSimulator()">
                  🎯 Run in Simulator
                </button>
                <button
                  class="run-btn run-btn-live"
                  [disabled]="activeSet()!.questionIds.length === 0"
                  (click)="runLive()">
                  🎤 Run Live Interview
                </button>
              </div>
            </div>

            <!-- Mode tabs -->
            <div class="tabs">
              <button class="tab" [class.on]="mode() === 'add'" (click)="mode.set('add')">＋ Add questions</button>
              <button class="tab" [class.on]="mode() === 'review'" (click)="mode.set('review')">
                📖 Review ({{ activeSet()!.questionIds.length }})
              </button>
            </div>

            @if (loading()) {
              <p class="loading-msg">Loading question bank…</p>
            }

            <!-- ADD MODE -->
            @if (!loading() && mode() === 'add') {
              <div class="add-controls">
                <input
                  class="search-input"
                  type="text"
                  placeholder="Search all questions by text or tag…"
                  [(ngModel)]="search" />
                <select class="type-select" [ngModel]="typeFilter()" (ngModelChange)="typeFilter.set($event)">
                  <option value="all">All types</option>
                  @for (t of types; track t) { <option [value]="t">{{ t }}</option> }
                </select>
                <select class="type-select" [ngModel]="categoryFilter()" (ngModelChange)="categoryFilter.set($event)">
                  <option value="all">All categories</option>
                  @for (c of topicOptions(); track c.id) { <option [value]="c.id">{{ c.name }}</option> }
                </select>
              </div>

              <p class="result-meta">{{ filteredQuestions().length }} matching · click a row to add / remove</p>

              <div class="pick-list">
                @for (q of filteredQuestions(); track q.id) {
                  <button
                    class="pick-row"
                    [class.in-set]="activeIds().has(q.id)"
                    (click)="toggle(q.id)">
                    <span class="pick-check">{{ activeIds().has(q.id) ? '✓' : '+' }}</span>
                    <span class="pick-q">{{ q.q }}</span>
                    <span class="pick-meta">
                      @if (q.type) { <span class="badge badge-{{ q.type }}">{{ q.type }}</span> }
                      <span class="pick-topic">{{ q.topicName }}</span>
                    </span>
                  </button>
                } @empty {
                  <p class="no-results">No questions match your search.</p>
                }
              </div>
            }

            <!-- REVIEW MODE -->
            @if (!loading() && mode() === 'review') {
              @if (setQuestions().length === 0) {
                <div class="no-results">
                  <p>This set is empty. Switch to "Add questions" to fill it.</p>
                </div>
              } @else {
                <div class="review-list">
                  @for (q of setQuestions(); track q.id) {
                    <qb-question-card [question]="q" />
                  }
                </div>
              }
            }
          }
        </main>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100vh; overflow: hidden; }

    .sets-shell {
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
      gap: 12px;
    }
    .back-link { color: var(--text-muted); font-size: 0.85em; }
    .back-link:hover { color: var(--text); text-decoration: none; }
    .app-brand { font-weight: 700; color: var(--text); text-decoration: none; &:hover { opacity: 0.8; } }
    .topbar-spacer { display: flex; align-items: center; gap: 8px; }
    .nav-link {
      background: color-mix(in srgb, var(--accent) 14%, var(--surface-2));
      border: 1px solid color-mix(in srgb, var(--accent) 35%, var(--border));
      color: var(--accent);
      padding: 5px 12px;
      border-radius: 6px;
      font-size: 0.82em;
      font-weight: 600;
    }
    .nav-link:hover { text-decoration: none; background: color-mix(in srgb, var(--accent) 22%, var(--surface-2)); }
    .theme-btn {
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 4px 8px;
      cursor: pointer;
      font-size: 1em;
    }

    .layout { display: flex; flex: 1; overflow: hidden; }

    /* ── Sets sidebar ── */
    .sets-col {
      width: 280px;
      flex-shrink: 0;
      border-right: 1px solid var(--border);
      background: var(--surface);
      overflow-y: auto;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      @media (max-width: 768px) { width: 220px; }
    }

    .new-set { display: flex; gap: 6px; }
    .new-input, .rename-input, .search-input, .type-select {
      background: var(--surface-2);
      border: 1px solid var(--border);
      color: var(--text);
      border-radius: 6px;
      padding: 7px 10px;
      font-size: 0.85em;
      width: 100%;
    }
    .new-input { flex: 1; }
    .new-btn {
      background: var(--accent);
      color: white;
      border: none;
      border-radius: 6px;
      padding: 7px 10px;
      font-size: 0.8em;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
    }
    .new-btn:disabled { opacity: 0.5; cursor: default; }

    .sets-empty { color: var(--text-muted); font-size: 0.82em; line-height: 1.5; padding: 8px 4px; }

    .set-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 4px; }
    .set-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 9px 10px;
      border-radius: 6px;
      cursor: pointer;
      border: 1px solid transparent;
      transition: background 120ms;
    }
    .set-row:hover { background: var(--surface-2); }
    .set-row.active { background: color-mix(in srgb, var(--accent) 12%, var(--surface-2)); border-color: color-mix(in srgb, var(--accent) 35%, var(--border)); }
    .set-name { flex: 1; font-size: 0.88em; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .set-count {
      font-size: 0.72em;
      color: var(--text-muted);
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 1px 8px;
    }
    .rename-input { flex: 1; }
    .set-row-actions { display: flex; gap: 2px; }
    .row-btn {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.8em;
      opacity: 0.6;
      padding: 2px 4px;
    }
    .row-btn:hover { opacity: 1; }
    .row-btn.danger:hover { color: var(--danger); }

    /* ── Main pane ── */
    .main-col { flex: 1; overflow-y: auto; display: flex; flex-direction: column; padding: 16px 20px 32px; }

    .empty-state {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      text-align: center;
      color: var(--text-muted);
      .empty-icon { font-size: 3em; }
      h2 { color: var(--text); font-size: 1.2em; }
      p { font-size: 0.9em; max-width: 420px; line-height: 1.6; }
    }

    .set-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
    .set-title { font-size: 1.3em; margin: 0; }
    .set-sub { font-size: 0.82em; color: var(--text-muted); }
    .run-actions { display: flex; gap: 8px; flex-shrink: 0; }
    .run-btn {
      background: var(--surface-2);
      color: var(--text);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 9px 16px;
      font-size: 0.88em;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
    }
    .run-btn:hover { border-color: var(--accent); color: var(--accent); }
    .run-btn:disabled { opacity: 0.5; cursor: default; }
    .run-btn-live { background: var(--accent); color: white; border-color: var(--accent); }
    .run-btn-live:hover { opacity: 0.88; color: white; border-color: var(--accent); }

    .tabs { display: flex; gap: 6px; border-bottom: 1px solid var(--border); margin-bottom: 14px; }
    .tab {
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      color: var(--text-muted);
      padding: 8px 12px;
      cursor: pointer;
      font-size: 0.86em;
      font-weight: 600;
      margin-bottom: -1px;
    }
    .tab.on { color: var(--accent); border-bottom-color: var(--accent); }

    .loading-msg, .result-meta { color: var(--text-muted); font-size: 0.82em; }

    .add-controls { display: flex; gap: 8px; margin-bottom: 8px; }
    .search-input { flex: 1; }
    .type-select { width: auto; min-width: 130px; cursor: pointer; }

    .pick-list { display: flex; flex-direction: column; gap: 4px; margin-top: 6px; }
    .pick-row {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 10px;
      width: 100%;
      text-align: left;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 8px 12px;
      cursor: pointer;
      color: var(--text);
      transition: border-color 120ms, background 120ms;
    }
    .pick-row:hover { border-color: color-mix(in srgb, var(--accent) 30%, var(--border)); }
    .pick-row.in-set { background: color-mix(in srgb, var(--accent) 8%, var(--card-bg)); border-color: color-mix(in srgb, var(--accent) 40%, var(--border)); }
    .pick-check {
      font-size: 0.95em;
      font-weight: 700;
      color: var(--text-muted);
      width: 18px;
      text-align: center;
    }
    .pick-row.in-set .pick-check { color: var(--accent); }
    .pick-q { font-size: 0.88em; line-height: 1.4; }
    .pick-meta { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
    .pick-topic { font-size: 0.72em; color: var(--text-muted); white-space: nowrap; }

    .review-list { display: flex; flex-direction: column; gap: 8px; }

    .no-results { color: var(--text-muted); font-size: 0.9em; padding: 24px; text-align: center; }

    .nav-link .ico { margin-right: 4px; }

    /* ── Mobile: stack the two panes, icon-only nav ── */
    @media (max-width: 720px) {
      .topbar { padding: 0 10px; gap: 8px; }
      .topbar-spacer { gap: 6px; }
      .back-link .lbl, .app-brand .lbl, .nav-link .lbl { display: none; }
      .nav-link .ico { margin-right: 0; }
      .nav-link { padding: 5px 9px; }

      .layout { flex-direction: column; }
      .sets-col {
        width: 100%;
        max-height: 40vh;
        border-right: none;
        border-bottom: 1px solid var(--border);
      }
      .main-col { padding: 14px 14px 28px; }

      .set-head { flex-direction: column; align-items: stretch; gap: 10px; }
      .run-actions { flex-direction: column; }
      .run-btn { width: 100%; }
      .add-controls { flex-direction: column; }
      .type-select { width: 100%; }
      .pick-row { grid-template-columns: auto 1fr; }
      .pick-meta { grid-column: 2; justify-content: flex-start; flex-wrap: wrap; padding-left: 0; }
    }
  `]
})
export class SetsPage implements OnInit {
  svc = inject(QuestionBankService);
  private router = inject(Router);

  readonly isDark = this.svc.isDark;
  readonly sets = this.svc.sets;

  readonly types: QuestionType[] = ['conceptual', 'code', 'comparison', 'scenario', 'design', 'behavioral'];

  readonly allQuestions = signal<QuestionView[]>([]);
  readonly loading = signal(false);

  readonly activeSetId = signal<string | null>(null);
  readonly newSetName = signal('');
  readonly renamingId = signal<string | null>(null);
  readonly renameText = signal('');
  readonly mode = signal<Mode>('add');
  readonly search = signal('');
  readonly typeFilter = signal<QuestionType | 'all'>('all');
  readonly categoryFilter = signal<string>('all');

  readonly activeSet = computed(() =>
    this.sets().find(s => s.id === this.activeSetId()) ?? null);

  readonly topicOptions = computed(() => {
    const seen = new Map<string, string>();
    for (const q of this.allQuestions()) {
      if (!seen.has(q.topicId)) seen.set(q.topicId, q.topicName);
    }
    return Array.from(seen.entries()).map(([id, name]) => ({ id, name }));
  });

  readonly activeIds = computed(() => new Set(this.activeSet()?.questionIds ?? []));

  private readonly byId = computed(() => {
    const map = new Map<string, QuestionView>();
    for (const q of this.allQuestions()) map.set(q.id, q);
    return map;
  });

  /** Questions in the active set, in the set's stored order. */
  readonly setQuestions = computed<QuestionView[]>(() => {
    const map = this.byId();
    return (this.activeSet()?.questionIds ?? [])
      .map(id => map.get(id))
      .filter((q): q is QuestionView => !!q);
  });

  /** All questions filtered by the add-mode search + type + category controls. */
  readonly filteredQuestions = computed<QuestionView[]>(() => {
    const term = this.search().toLowerCase().trim();
    const type = this.typeFilter();
    const cat  = this.categoryFilter();
    return this.allQuestions().filter(q => {
      if (type !== 'all' && q.type !== type) return false;
      if (cat  !== 'all' && q.topicId !== cat) return false;
      if (term) {
        const inQ = q.q.toLowerCase().includes(term);
        const inTags = q.tags?.some(t => t.toLowerCase().includes(term)) ?? false;
        const inTopic = q.topicName.toLowerCase().includes(term);
        if (!inQ && !inTags && !inTopic) return false;
      }
      return true;
    });
  });

  async ngOnInit(): Promise<void> {
    this.svc.applyStoredTheme();
    if (!this.svc.topics().length) await this.svc.init();

    this.loading.set(true);
    // empty arrays = every topic, every level
    this.allQuestions.set(await this.svc.buildPool([], []));
    this.loading.set(false);

    // open the first set by default if one exists
    const first = this.sets()[0];
    if (first) this.activeSetId.set(first.id);
  }

  createSet(): void {
    const name = this.newSetName().trim();
    if (!name) return;
    const id = this.svc.createSet(name);
    this.newSetName.set('');
    this.activeSetId.set(id);
    this.mode.set('add');
  }

  selectSet(id: string): void {
    this.activeSetId.set(id);
  }

  startRename(set: { id: string; name: string }, e: Event): void {
    e.stopPropagation();
    this.renamingId.set(set.id);
    this.renameText.set(set.name);
  }

  commitRename(id: string): void {
    if (this.renamingId() !== id) return;
    this.svc.renameSet(id, this.renameText());
    this.renamingId.set(null);
  }

  deleteSet(id: string, e: Event): void {
    e.stopPropagation();
    this.svc.deleteSet(id);
    if (this.activeSetId() === id) {
      this.activeSetId.set(this.sets()[0]?.id ?? null);
    }
  }

  toggle(questionId: string): void {
    const setId = this.activeSetId();
    if (setId) this.svc.toggleInSet(setId, questionId);
  }

  runSimulator(): void {
    const id = this.activeSetId();
    if (id) this.router.navigate(['/simulator'], { queryParams: { set: id } });
  }

  runLive(): void {
    const id = this.activeSetId();
    if (id) this.router.navigate(['/live-interview'], { queryParams: { set: id } });
  }
}
