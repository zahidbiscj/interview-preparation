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
    <div class="gsearch">
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
    .gsearch { position: relative; width: 100%; max-width: 460px; }
    .gs-icon {
      position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
      font-size: 0.8em; pointer-events: none; opacity: 0.7;
    }
    .gs-input {
      width: 100%;
      padding: 7px 30px 7px 30px;
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text);
      font-size: 0.85em;
      font-family: inherit;
      &::placeholder { color: var(--text-muted); }
      &:focus { outline: none; border-color: var(--accent); }
    }
    .gs-clear {
      position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
      background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.8em;
      &:hover { color: var(--text); }
    }
    .gs-results {
      position: absolute;
      top: calc(100% + 6px);
      left: 0; right: 0;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      box-shadow: 0 8px 28px rgba(0,0,0,0.35);
      list-style: none;
      padding: 6px;
      margin: 0;
      max-height: 60vh;
      overflow-y: auto;
      z-index: 300;
    }
    .gs-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 10px;
      border-radius: 7px;
      cursor: pointer;
      &.active, &:hover { background: var(--surface-2); }
    }
    .gs-q {
      flex: 1;
      font-size: 0.85em;
      color: var(--text);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .gs-badge {
      flex-shrink: 0;
      font-size: 0.66em;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      padding: 2px 8px;
      border-radius: 10px;
      border: 1px solid transparent;
    }
    .gs-empty { padding: 12px; font-size: 0.82em; color: var(--text-muted); text-align: center; }
  `]
})
export class GlobalSearchComponent {
  private svc = inject(QuestionBankService);
  private router = inject(Router);
  private host = inject(ElementRef<HTMLElement>);

  readonly query = signal('');
  readonly open = signal(false);
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
    }
  }

  select(item: SearchItem): void {
    this.open.set(false);
    this.query.set('');
    // ensure we're on the bank page, then jump to the question
    this.router.navigate(['/']).then(() => this.svc.goToQuestion(item.id));
  }

  clear(): void {
    this.query.set('');
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    if (!this.host.nativeElement.contains(e.target as Node)) this.open.set(false);
  }
}
