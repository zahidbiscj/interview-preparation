import {
  ChangeDetectionStrategy, Component, ElementRef, HostListener, computed, inject, signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionBankService, SearchItem } from '../../question-bank.service';

@Component({
  selector: 'qb-global-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    <div class="gsearch" [class.expanded]="expanded()">
      <!-- Mobile: compact icon that expands the search -->
      <button class="gs-toggle" (click)="expand()" aria-label="Search">🔍</button>

      <!-- Search field (always visible on desktop; on mobile when expanded) -->
      <div class="gs-field">
        <span class="gs-icon">🔍</span>
        <input
          class="gs-input"
          type="text"
          placeholder="Search all questions…"
          [ngModel]="query()"
          (ngModelChange)="onInput($event)"
          (focus)="onFocus()"
          (keydown)="onKey($event)"
          autocomplete="off"
          spellcheck="false" />
        @if (query()) {
          <button class="gs-clear" (click)="clear()" aria-label="Clear">✕</button>
        }
        <button class="gs-close" (click)="collapse()" aria-label="Close search">✕</button>
      </div>

      @if (open() && results().length) {
        <ul class="gs-results">
          @for (r of results(); track r.id; let i = $index) {
            <li
              class="gs-item"
              [class.active]="i === activeIndex()"
              (mousedown)="select(r)"
              (mouseenter)="activeIndex.set(i)">
              <span class="gs-q">{{ r.q }}</span>
              <span class="gs-badge badge-{{ r.type || 'conceptual' }}">{{ r.topicName }}</span>
            </li>
          }
        </ul>
      } @else if (open() && query().length >= 2) {
        <ul class="gs-results"><li class="gs-empty">No questions match “{{ query() }}”.</li></ul>
      }
    </div>
  `,
  styles: [`
    :host { display: block; width: 100%; }

    .gsearch { position: relative; width: 100%; }

    /* ── Field ── */
    .gs-field {
      display: flex;
      align-items: center;
      gap: 6px;
      width: 100%;
      height: 36px;
      padding: 0 10px;
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: 10px;
      transition: border-color 120ms, box-shadow 120ms;
    }
    .gs-field:focus-within {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 18%, transparent);
    }
    .gs-icon { font-size: 0.9em; opacity: 0.7; flex-shrink: 0; }
    .gs-input {
      flex: 1;
      min-width: 0;
      height: 100%;
      background: none;
      border: none;
      color: var(--text);
      font-size: 0.92em;
      font-family: inherit;
      &::placeholder { color: var(--text-muted); }
      &:focus { outline: none; }
    }
    .gs-clear, .gs-close {
      flex-shrink: 0;
      background: none; border: none; cursor: pointer;
      color: var(--text-muted); font-size: 0.9em; padding: 4px;
      &:hover { color: var(--text); }
    }
    .gs-toggle { display: none; }
    .gs-close { display: none; }   /* only on mobile-expanded */

    /* ── Results dropdown ── */
    .gs-results {
      position: absolute;
      top: calc(100% + 6px);
      left: 0; right: 0;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
      list-style: none;
      padding: 6px;
      margin: 0;
      max-height: 65vh;
      overflow-y: auto;
      z-index: 300;
    }
    .gs-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 10px;
      border-radius: 7px;
      cursor: pointer;
      &.active, &:hover { background: var(--surface-2); }
    }
    .gs-q { flex: 1; font-size: 0.88em; color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .gs-badge {
      flex-shrink: 0;
      font-size: 0.66em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.03em;
      padding: 2px 8px; border-radius: 10px; border: 1px solid transparent;
    }
    .gs-empty { padding: 12px; font-size: 0.82em; color: var(--text-muted); text-align: center; }

    /* ══════ Mobile: collapse to an icon, expand to cover the top bar ══════ */
    @media (max-width: 768px) {
      .gs-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px; height: 36px;
        background: var(--surface-2);
        border: 1px solid var(--border);
        border-radius: 8px;
        cursor: pointer;
        font-size: 1em;
        margin-left: auto;   /* push to the right edge of the center cell */
      }
      .gs-field { display: none; }

      .gsearch.expanded {
        position: absolute;
        inset: 0;                /* cover the whole top bar */
        background: var(--surface);
        display: flex;
        align-items: center;
        padding: 0 10px;
        z-index: 200;
      }
      .gsearch.expanded .gs-toggle { display: none; }
      .gsearch.expanded .gs-field { display: flex; height: 40px; }
      .gsearch.expanded .gs-close { display: block; }
      .gsearch.expanded .gs-results { top: calc(100% + 4px); left: 10px; right: 10px; }
    }
  `]
})
export class GlobalSearchComponent {
  private svc = inject(QuestionBankService);
  private router = inject(Router);
  private host = inject(ElementRef<HTMLElement>);

  readonly query = signal('');
  readonly open = signal(false);
  readonly expanded = signal(false);
  readonly activeIndex = signal(0);

  readonly results = computed<SearchItem[]>(() => {
    const q = this.query();
    if (q.trim().length < 2) return [];
    return this.svc.searchQuestions(q, 8);
  });

  async onFocus(): Promise<void> {
    await this.svc.ensureSearchIndex();
    if (this.query().trim().length >= 2) this.open.set(true);
  }

  async onInput(value: string): Promise<void> {
    this.query.set(value);
    this.activeIndex.set(0);
    if (value.trim().length >= 2) {
      await this.svc.ensureSearchIndex();
      this.open.set(true);
    } else {
      this.open.set(false);
    }
  }

  onKey(e: KeyboardEvent): void {
    const items = this.results();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.activeIndex.update(i => Math.min(i + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.activeIndex.update(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      const item = items[this.activeIndex()];
      if (item) this.select(item);
    } else if (e.key === 'Escape') {
      this.open.set(false);
      this.collapse();
    }
  }

  expand(): void {
    this.expanded.set(true);
    this.svc.ensureSearchIndex();
    queueMicrotask(() => this.host.nativeElement.querySelector('input')?.focus());
  }

  collapse(): void {
    this.expanded.set(false);
    this.open.set(false);
    this.query.set('');
  }

  select(item: SearchItem): void {
    this.open.set(false);
    this.expanded.set(false);
    this.query.set('');
    this.router.navigate(['/']).then(() => this.svc.goToQuestion(item.id));
  }

  clear(): void {
    this.query.set('');
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    if (!this.host.nativeElement.contains(e.target as Node)) {
      this.open.set(false);
      if (!this.query()) this.expanded.set(false);
    }
  }
}
