import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionBankService } from '../../question-bank.service';
import { QuestionType } from '../../models/question-bank.models';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ButtonModule } from 'primeng/button';

interface TypeOption {
  label: string;
  value: QuestionType | 'all';
}

@Component({
  selector: 'qb-search-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, InputTextModule, SelectModule, ToggleSwitchModule, ButtonModule],
  template: `
    <div class="filter-bar">
      <div class="search-wrap">
        <span class="search-icon">🔍</span>
        <input
          pInputText
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
        <p-select
          [options]="typeOptions"
          optionLabel="label"
          optionValue="value"
          [ngModel]="filter().type"
          (ngModelChange)="onType($event)"
          placeholder="All Types"
          styleClass="filter-select" />

        <label class="bookmark-toggle">
          <p-toggleSwitch
            [ngModel]="filter().bookmarkedOnly"
            (ngModelChange)="onBookmark($event)" />
          <span>⭐ Bookmarked</span>
        </label>

        @if (hasActiveFilter()) {
          <p-button
            label="Clear"
            severity="secondary"
            size="small"
            (onClick)="clearAll()" />
        }
      </div>
    </div>
  `,
  styles: [`
    .filter-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 12px 16px;
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
      font-size: 0.85em;
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      padding-left: 32px !important;
      padding-right: 32px !important;
      background: var(--surface-2) !important;
      border-color: var(--border) !important;
      color: var(--text) !important;
      font-size: 0.9em;

      &::placeholder { color: var(--text-muted); }
      &:focus { border-color: var(--accent) !important; outline: none; }
    }

    .clear-btn {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      font-size: 0.8em;
      padding: 2px 4px;

      &:hover { color: var(--text); }
    }

    .filter-controls {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    ::ng-deep .filter-select {
      min-width: 150px;

      .p-select {
        background: var(--surface-2);
        border-color: var(--border);
        color: var(--text);
        font-size: 0.875em;
      }

      .p-select-label { color: var(--text); }
    }

    .bookmark-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-size: 0.875em;
      color: var(--text-muted);
      white-space: nowrap;

      &:hover { color: var(--text); }
    }
  `]
})
export class SearchFilterComponent {
  private svc = inject(QuestionBankService);

  readonly filter = this.svc.filter;

  readonly typeOptions: TypeOption[] = [
    { label: 'All Types', value: 'all' },
    { label: 'Conceptual', value: 'conceptual' },
    { label: 'Code', value: 'code' },
    { label: 'Comparison', value: 'comparison' },
    { label: 'Scenario', value: 'scenario' },
    { label: 'Design', value: 'design' },
    { label: 'Behavioral', value: 'behavioral' },
  ];

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
