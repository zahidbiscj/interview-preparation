import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { QuestionBankService } from '../../question-bank.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'qb-topic-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProgressSpinnerModule],
  template: `
    <nav class="sidebar">
      <div class="sidebar-header">
        <span class="sidebar-title">Topics</span>
        <span class="topic-count">{{ topics().length }} topics</span>
      </div>

      <ul class="topic-list">
        @for (topic of topics(); track topic.id) {
          <li class="topic-item">
            <button
              class="topic-row"
              [class.expanded]="topic.expanded"
              (click)="onTopicClick(topic.id)"
              [attr.aria-expanded]="topic.expanded">
              <span class="caret">{{ topic.expanded ? '▾' : '▸' }}</span>
              <span class="topic-icon">{{ topic.icon }}</span>
              <span class="topic-name">{{ topic.name }}</span>
              @if (loadingTopicId() === topic.id) {
                <p-progressSpinner
                  styleClass="sidebar-spinner"
                  strokeWidth="4"
                  animationDuration=".8s" />
              } @else if (topic.loaded) {
                <span class="q-count">{{ topic.questionCount }}</span>
              } @else {
                <span class="q-count muted">—</span>
              }
            </button>

            @if (topic.expanded && topic.loaded) {
              <ul class="subtopic-list">
                @for (sub of topic.subtopics; track sub.subtopicId) {
                  <li>
                    <button
                      class="subtopic-row"
                      [class.active]="isActive(topic.id, sub.subtopicId)"
                      (click)="onSubtopicClick(topic.id, sub.subtopicId)">
                      <span class="sub-dot">•</span>
                      <span class="sub-name">{{ sub.subtopicName }}</span>
                      <span class="q-count">{{ sub.questionCount }}</span>
                    </button>
                  </li>
                }
              </ul>
            }
          </li>
        }
      </ul>
    </nav>
  `,
  styles: [`
    .sidebar {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--sidebar-bg);
      border-right: 1px solid var(--border);
      overflow-y: auto;
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 16px 12px;
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      background: var(--sidebar-bg);
      z-index: 1;
    }

    .sidebar-title {
      font-weight: 700;
      font-size: 0.8em;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
    }

    .topic-count {
      font-size: 0.75em;
      color: var(--text-muted);
      background: var(--surface-2);
      padding: 2px 7px;
      border-radius: 10px;
    }

    .topic-list {
      list-style: none;
      padding: 8px 0;
      flex: 1;
    }

    .topic-item { width: 100%; }

    .topic-row {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 8px 14px;
      background: none;
      border: none;
      color: var(--text);
      cursor: pointer;
      text-align: left;
      font-size: 0.92em;
      font-weight: 500;
      transition: background 120ms ease;
      border-radius: 0;

      &:hover { background: var(--surface-2); }
      &.expanded { color: var(--accent); }
    }

    .caret { font-size: 0.7em; color: var(--text-muted); width: 10px; flex-shrink: 0; }
    .topic-icon { font-size: 1em; flex-shrink: 0; }
    .topic-name { flex: 1; }

    .q-count {
      font-size: 0.75em;
      color: var(--text-muted);
      background: var(--surface-2);
      padding: 1px 6px;
      border-radius: 10px;
      min-width: 22px;
      text-align: center;
      flex-shrink: 0;

      &.muted { opacity: 0.5; }
    }

    ::ng-deep .sidebar-spinner {
      width: 14px !important;
      height: 14px !important;
    }
    ::ng-deep .sidebar-spinner .p-progressspinner-circle {
      stroke: var(--accent) !important;
    }

    .subtopic-list {
      list-style: none;
      padding: 2px 0 4px;
    }

    .subtopic-row {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 6px 14px 6px 30px;
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      text-align: left;
      font-size: 0.875em;
      transition: background 120ms ease, color 120ms ease;

      &:hover { background: var(--surface-2); color: var(--text); }

      &.active {
        color: var(--accent);
        background: color-mix(in srgb, var(--accent) 10%, transparent);
        font-weight: 600;

        .sub-dot { color: var(--accent); }
      }
    }

    .sub-dot { font-size: 0.8em; flex-shrink: 0; }
    .sub-name { flex: 1; }
  `]
})
export class TopicSidebarComponent {
  readonly closed = output<void>();

  private svc = inject(QuestionBankService);

  readonly topics = this.svc.topics;
  readonly loadingTopicId = this.svc.loadingTopicId;
  readonly selected = this.svc.selected;

  onTopicClick(id: string): void {
    this.svc.toggleTopic(id);
  }

  onSubtopicClick(topicId: string, subtopicId: string): void {
    this.svc.select(topicId, subtopicId);
    this.closed.emit();
  }

  isActive(topicId: string, subtopicId: string): boolean {
    const sel = this.selected();
    return sel?.topicId === topicId && sel?.subtopicId === subtopicId;
  }
}
