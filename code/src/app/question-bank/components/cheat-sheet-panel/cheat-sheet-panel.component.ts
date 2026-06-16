import {
  ChangeDetectionStrategy, Component, effect, inject, input, signal
} from '@angular/core';
import { QuestionBankService } from '../../question-bank.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'qb-cheat-sheet-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProgressSpinnerModule, MarkdownComponent],
  template: `
    <div class="cheat-panel" [class.open]="expanded()">
      <button class="cheat-header" (click)="toggle()">
        <span class="cheat-title">📋 Cheat Sheet</span>
        <span class="cheat-caret">{{ expanded() ? '▾' : '▸' }}</span>
      </button>

      @if (expanded()) {
        <div class="cheat-body fade-slide-enter">
          @if (loading()) {
            <div class="cheat-loading">
              <p-progressSpinner styleClass="cheat-spinner" strokeWidth="4" animationDuration=".8s" />
              <span>Loading cheat sheet…</span>
            </div>
          } @else {
            <div class="md-content">
              <markdown [data]="content()" />
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .cheat-panel {
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      background: var(--surface);
      margin-bottom: 12px;
    }

    .cheat-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 12px 16px;
      background: var(--surface);
      border: none;
      color: var(--text);
      cursor: pointer;
      font-size: 0.9em;
      font-weight: 600;
      transition: background 120ms;

      &:hover { background: var(--surface-2); }
    }

    .cheat-title { display: flex; align-items: center; gap: 6px; }
    .cheat-caret { color: var(--text-muted); }

    .cheat-body {
      padding: 16px;
      border-top: 1px solid var(--border);
      max-height: 480px;
      overflow-y: auto;
    }

    .cheat-loading {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--text-muted);
      font-size: 0.875em;
    }

    ::ng-deep .cheat-spinner {
      width: 18px !important;
      height: 18px !important;
    }
    ::ng-deep .cheat-spinner .p-progressspinner-circle {
      stroke: var(--accent) !important;
    }
  `]
})
export class CheatSheetPanelComponent {
  readonly topicId = input.required<string>();

  private svc = inject(QuestionBankService);

  readonly expanded = signal(false);
  readonly loading = signal(false);
  readonly content = signal('');

  constructor() {
    effect(() => {
      const id = this.topicId();
      if (id) {
        this.expanded.set(false);
        this.content.set('');
      }
    });
  }

  async toggle(): Promise<void> {
    const next = !this.expanded();
    this.expanded.set(next);
    if (next && !this.content()) {
      this.loading.set(true);
      const md = await this.svc.loadCheatSheet(this.topicId());
      this.content.set(md);
      this.loading.set(false);
    }
  }
}
