import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionBankService } from '../../question-bank.service';
import { QuestionType } from '../../models/question-bank.models';

@Component({
  selector: 'qb-search-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: `
    <div class="filter-bar">
      <div class="search-wrap">
        <span class="search-icon">🔍</span>
        <input
          class="search-input"
          type="text"
          placeholder="Search questions or tags…"
          [ngModel]="filter().search"
          (ngModelChange)="onSearch($event)" />
        @if (filter().search) {
          <button class="clear-btn" (click)="clearSearch()">✕</button>
        }
      </div>

      <div class="filter-controls">
        <select
          class="filter-select"
          [ngModel]="filter().type"
          (ngModelChange)="onType($event)">
          <option value="all">All Types</option>
          <option value="conceptual">Conceptual</option>
          <option value="code">Code</option>
          <option value="comparison">Comparison</option>
          <option value="scenario">Scenario</option>
          <option value="design">Design</option>
          <option value="behavioral">Behavioral</option>
        </select>

        <label class="bookmark-toggle">
          <input
            type="checkbox"
            class="bookmark-check"
            [ngModel]="filter().bookmarkedOnly"
            (ngModelChange)="onBookmark($event)" />
          <span class="toggle-track"><span class="toggle-thumb"></span></span>
          <span>⭐ Bookmarked</span>
        </label>

        @if (hasActiveFilter()) {
          <button class="clear-all-btn" (click)="clearAll()">Clear</button>
        }
      </div>
    </div>
  `,
  styles: [`
    .filter-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .search-wrap {
      position: relative;
      flex: 1;
      min-width: 200px;
    }

    .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.82em;
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      padding: 7px 32px 7px 32px;
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text);
      font-size: 0.88em;
      box-sizing: border-box;

      &::placeholder { color: var(--text-muted); }
      &:focus { border-color: var(--accent); outline: none; }
    }

    .clear-btn {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      font-size: 0.8em;
      padding: 2px 4px;
      line-height: 1;

      &:hover { color: var(--text); }
    }

    .filter-controls {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .filter-select {
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text);
      padding: 7px 10px;
      font-size: 0.85em;
      cursor: pointer;
      min-width: 130px;

      &:focus { border-color: var(--accent); outline: none; }
    }

    .bookmark-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-size: 0.875em;
      color: var(--text-muted);
      white-space: nowrap;
      user-select: none;

      &:hover { color: var(--text); }
    }

    .bookmark-check { display: none; }

    .toggle-track {
      position: relative;
      display: inline-block;
      width: 34px;
      height: 18px;
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: 10px;
      transition: background 150ms, border-color 150ms;
      flex-shrink: 0;
    }

    .toggle-thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--text-muted);
      transition: transform 150ms, background 150ms;
    }

    .bookmark-check:checked + .toggle-track {
      background: var(--accent);
      border-color: var(--accent);
    }

    .bookmark-check:checked + .toggle-track .toggle-thumb {
      transform: translateX(16px);
      background: white;
    }

    .clear-all-btn {
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text-muted);
      padding: 6px 12px;
      font-size: 0.82em;
      cursor: pointer;

      &:hover { color: var(--text); border-color: var(--text-muted); }
    }
  `]
})
export class SearchFilterComponent {
  private svc = inject(QuestionBankService);

  readonly filter = this.svc.filter;

  onSearch(value: string): void {
    this.svc.setFilter({ search: value });
  }

  onType(value: QuestionType | 'all'): void {
    this.svc.setFilter({ type: value });
  }

  onBookmark(value: boolean): void {
    this.svc.setFilter({ bookmarkedOnly: value });
  }

  clearSearch(): void {
    this.svc.setFilter({ search: '' });
  }

  clearAll(): void {
    this.svc.clearFilter();
  }

  hasActiveFilter(): boolean {
    const f = this.filter();
    return f.search !== '' || f.type !== 'all' || f.bookmarkedOnly;
  }
}
