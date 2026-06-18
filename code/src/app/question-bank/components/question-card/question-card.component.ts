import {
  ChangeDetectionStrategy, Component, ElementRef, effect, inject, input, signal, computed
} from '@angular/core';
import { QuestionBankService } from '../../question-bank.service';
import { QuestionView } from '../../models/question-bank.models';
import { MarkdownComponent } from 'ngx-markdown';

type RevealState = 'collapsed' | 'one-liner' | 'full';

@Component({
  selector: 'qb-question-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MarkdownComponent],
  template: `
    <div class="qcard" [class.expanded]="state() !== 'collapsed'">
      <!-- Header (always visible, click to expand) -->
      <div class="qcard-header" (click)="toggle()" role="button" [attr.aria-expanded]="state() !== 'collapsed'">
        <div class="qcard-meta">
          @if (q().bookmarked) { <span class="freq-badge">🔥</span> }
          @if (q().type) {
            <span class="badge badge-{{ q().type }}">{{ q().type }}</span>
          }
        </div>

        <div class="qcard-question">
          <span class="q-text">{{ q().q }}</span>
        </div>

        <div class="qcard-actions">
          <button
            class="bookmark-btn"
            [class.bookmarked]="q().bookmarked"
            (click)="onBookmark($event)"
            [title]="q().bookmarked ? 'Remove bookmark' : 'Bookmark'">
            {{ q().bookmarked ? '⭐' : '🔖' }}
          </button>
          <span class="caret-icon">{{ state() === 'collapsed' ? '▸' : '▾' }}</span>
        </div>
      </div>

      <!-- Predict-the-output: when expanded, show code first so you can guess before revealing -->
      @if (isPredict() && state() !== 'collapsed') {
        <div class="predict-code">
          <div class="code-block">
            <div class="code-lang-tag">{{ q().answer.code!.lang }}</div>
            <markdown [data]="codeMarkdown()" />
          </div>
          @if (!answerRevealed()) {
            <button class="reveal-btn" (click)="revealAnswer($event)">🔮 Reveal answer</button>
          }
        </div>
      }

      <!-- One-liner + full content -->
      @if (state() !== 'collapsed' && showAnswer()) {
        <div class="qcard-body fade-slide-enter">
          <div class="answer-divider"></div>

          <!-- One-liner -->
          <div class="one-liner md-content">
            <markdown [data]="q().answer.oneLiner" />
          </div>

          <!-- Show full answer button -->
          @if (hasFullAnswer() && state() === 'one-liner') {
            <div class="show-more-wrap">
              <button class="show-more-btn" (click)="showFull($event)">
                Show full answer ▾
              </button>
            </div>
          }

          <!-- Full answer -->
          @if (state() === 'full') {
            <div class="full-answer fade-slide-enter">

              @if (q().answer.dialogue?.length) {
                <section class="answer-section">
                  <h4 class="section-title">💬 DIALOGUE</h4>
                  <div class="dialogue">
                    @for (turn of q().answer.dialogue!; track $index) {
                      <div class="turn turn-{{ turn.role }}">
                        <span class="turn-who">{{ turn.role === 'interviewer' ? 'Interviewer' : 'Me' }}</span>
                        <div class="turn-text md-content"><markdown [data]="turn.text" /></div>
                      </div>
                    }
                  </div>
                </section>
              }

              @if (q().answer.keyPoints?.length) {
                <section class="answer-section">
                  <h4 class="section-title">KEY POINTS</h4>
                  <ul class="key-points">
                    @for (pt of q().answer.keyPoints!; track $index) {
                      <li class="md-content"><markdown [data]="pt" /></li>
                    }
                  </ul>
                </section>
              }

              @if (q().answer.detail) {
                <section class="answer-section">
                  <h4 class="section-title">DEEP DIVE</h4>
                  <div class="md-content">
                    <markdown [data]="q().answer.detail!" />
                  </div>
                </section>
              }

              @if (q().answer.code && !isPredict()) {
                <section class="answer-section">
                  <div class="code-block">
                    <div class="code-lang-tag">{{ q().answer.code!.lang }}</div>
                    <markdown [data]="codeMarkdown()" />
                  </div>
                  @if (q().answer.code!.note) {
                    <p class="code-note">{{ q().answer.code!.note }}</p>
                  }
                </section>
              }
              @if (q().answer.code && isPredict() && q().answer.code!.note) {
                <p class="code-note">📤 {{ q().answer.code!.note }}</p>
              }

              @if (q().answer.analogy) {
                <section class="answer-section analogy-section">
                  <h4 class="section-title">💡 ANALOGY</h4>
                  <div class="md-content">
                    <markdown [data]="q().answer.analogy!" />
                  </div>
                </section>
              }

              @if (q().answer.followUpsQA?.length) {
                <section class="answer-section">
                  <h4 class="section-title">📌 FOLLOW-UP QUESTIONS</h4>
                  <ul class="followqa-list">
                    @for (fu of q().answer.followUpsQA!; track $index) {
                      <li class="followqa">
                        @if (fu.relatedId) {
                          <button class="followqa-q link" (click)="goToFollowUp(fu.relatedId!, $event)">
                            {{ fu.q }} <span class="jump">↗</span>
                          </button>
                        } @else {
                          <span class="followqa-q">{{ fu.q }}</span>
                        }
                        <span class="followqa-a md-content"><markdown [data]="fu.a" /></span>
                      </li>
                    }
                  </ul>
                  <p class="go-deeper">Want to go deeper on any of these follow-up questions?</p>
                </section>
              } @else if (q().answer.followUps?.length) {
                <section class="answer-section">
                  <h4 class="section-title">➡ COMMON FOLLOW-UPS</h4>
                  <ul class="followup-list">
                    @for (fu of q().answer.followUps!; track $index) {
                      <li>→ {{ fu }}</li>
                    }
                  </ul>
                </section>
              }

              @if (q().answer.redFlags?.length) {
                <section class="answer-section red-flags-section">
                  <h4 class="section-title">🚩 RED FLAGS</h4>
                  <ul class="red-flags-list">
                    @for (rf of q().answer.redFlags!; track $index) {
                      <li>✗ {{ rf }}</li>
                    }
                  </ul>
                </section>
              }

              <div class="collapse-wrap">
                <button class="collapse-btn" (click)="collapse($event)">Hide ▴</button>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .qcard {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      transition: box-shadow 150ms ease, border-color 150ms ease;

      &:hover { border-color: color-mix(in srgb, var(--accent) 30%, var(--border)); }
      &.expanded { border-color: color-mix(in srgb, var(--accent) 40%, var(--border)); }
    }

    .qcard-header {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: start;
      gap: 12px;
      padding: 12px 14px;
      cursor: pointer;
      transition: background 120ms;

      &:hover { background: var(--card-hover); }
    }

    .qcard-meta {
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
      padding-top: 1px;
    }

    .freq-badge { font-size: 0.9em; }

    .qcard-question {
      padding-top: 1px;
    }

    .q-text {
      font-size: 0.95em;
      font-weight: 500;
      color: var(--text);
      line-height: 1.4;
    }

    .qcard-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .bookmark-btn {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1em;
      padding: 2px;
      opacity: 0.6;
      transition: opacity 120ms, transform 120ms;

      &:hover { opacity: 1; transform: scale(1.1); }
      &.bookmarked { opacity: 1; }
    }

    .caret-icon { color: var(--text-muted); font-size: 0.75em; }

    .predict-code {
      padding: 0 14px 12px;
    }

    .reveal-btn {
      margin-top: 10px;
      width: 100%;
      background: color-mix(in srgb, var(--accent) 12%, var(--surface-2));
      border: 1px solid color-mix(in srgb, var(--accent) 35%, var(--border));
      color: var(--accent);
      padding: 8px 18px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.85em;
      font-weight: 600;
      transition: background 120ms;

      &:hover { background: color-mix(in srgb, var(--accent) 20%, var(--surface-2)); }
    }

    .qcard-body { padding: 0 14px 14px; }

    .answer-divider {
      height: 1px;
      background: var(--border);
      margin: 0 0 12px;
    }

    .one-liner {
      font-size: 0.9em;
      color: var(--text);
      line-height: 1.6;
    }

    .show-more-wrap { margin-top: 12px; text-align: center; }

    .show-more-btn {
      background: var(--surface-2);
      border: 1px solid var(--border);
      color: var(--accent);
      padding: 6px 18px;
      border-radius: 20px;
      cursor: pointer;
      font-size: 0.8em;
      font-weight: 600;
      transition: background 120ms, border-color 120ms;

      &:hover { background: color-mix(in srgb, var(--accent) 12%, var(--surface-2)); border-color: var(--accent); }
    }

    .full-answer { margin-top: 12px; }

    .answer-section { margin-bottom: 16px; }

    .section-title {
      font-size: 0.7em;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      margin-bottom: 8px;
    }

    .key-points {
      list-style: none;
      padding: 0;

      li {
        padding: 4px 0 4px 16px;
        position: relative;
        font-size: 0.88em;

        &::before { content: '•'; position: absolute; left: 0; color: var(--accent); }
      }
    }

    .code-block {
      position: relative;
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;

      ::ng-deep pre {
        border: none;
        border-radius: 0;
        margin: 0;
      }
    }

    .code-lang-tag {
      position: absolute;
      top: 8px;
      right: 10px;
      font-size: 0.7em;
      color: var(--text-muted);
      background: var(--surface-2);
      padding: 2px 7px;
      border-radius: 4px;
      font-family: monospace;
      z-index: 1;
    }

    .code-note {
      font-size: 0.8em;
      color: var(--text-muted);
      margin-top: 6px;
      font-style: italic;
    }

    .analogy-section {
      background: color-mix(in srgb, var(--accent) 6%, var(--surface-2));
      border: 1px solid color-mix(in srgb, var(--accent) 20%, var(--border));
      border-radius: 6px;
      padding: 10px 12px;
    }

    .followup-list {
      list-style: none;
      padding: 0;

      li {
        font-size: 0.88em;
        color: var(--text-muted);
        padding: 3px 0;
      }
    }

    /* ── Dialogue ── */
    .dialogue { display: flex; flex-direction: column; gap: 8px; }
    .turn {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 8px 10px;
      border-radius: 8px;
      font-size: 0.88em;
    }
    .turn-interviewer {
      background: var(--surface-2);
      border-left: 3px solid var(--text-muted);
    }
    .turn-me {
      background: color-mix(in srgb, var(--accent) 8%, var(--surface-2));
      border-left: 3px solid var(--accent);
    }
    .turn-who {
      font-size: 0.72em;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--text-muted);
    }
    .turn-me .turn-who { color: var(--accent); }
    .turn-text { line-height: 1.5; }

    /* ── Follow-up Q&A ── */
    .followqa-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; }
    .followqa { display: flex; flex-direction: column; gap: 2px; }
    .followqa-q {
      font-size: 0.88em;
      font-weight: 600;
      color: var(--text);
      text-align: left;
    }
    .followqa-q.link {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      color: var(--accent);
      &:hover { text-decoration: underline; }
    }
    .jump { font-size: 0.85em; opacity: 0.8; }
    .followqa-a { font-size: 0.85em; color: var(--text-muted); padding-left: 12px; }
    .go-deeper {
      margin-top: 12px;
      font-size: 0.82em;
      font-style: italic;
      color: var(--accent);
    }

    .red-flags-section {
      background: color-mix(in srgb, var(--danger) 6%, var(--surface-2));
      border: 1px solid color-mix(in srgb, var(--danger) 20%, var(--border));
      border-radius: 6px;
      padding: 10px 12px;
    }

    .red-flags-list {
      list-style: none;
      padding: 0;

      li {
        font-size: 0.88em;
        color: color-mix(in srgb, var(--danger) 80%, var(--text));
        padding: 3px 0;
      }
    }

    .collapse-wrap { text-align: center; margin-top: 8px; }

    .collapse-btn {
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      font-size: 0.78em;
      padding: 4px 12px;
      border-radius: 10px;
      transition: color 120ms, background 120ms;

      &:hover { color: var(--text); background: var(--surface-2); }
    }
  `]
})
export class QuestionCardComponent {
  readonly question = input.required<QuestionView>();

  private svc = inject(QuestionBankService);
  private host = inject(ElementRef<HTMLElement>);
  readonly state = signal<RevealState>('collapsed');
  /** For predict (code) questions: has the user revealed the answer yet? */
  readonly answerRevealed = signal(false);

  readonly q = this.question;

  /** Whether the answer body should show: non-predict always; predict only after reveal. */
  readonly showAnswer = computed(() => !this.isPredict() || this.answerRevealed());

  readonly hasFullAnswer = computed(() => {
    const a = this.q().answer;
    return !!(a.keyPoints?.length || a.detail || a.code || a.analogy ||
      a.followUps?.length || a.followUpsQA?.length || a.dialogue?.length || a.redFlags?.length);
  });

  constructor() {
    // When a follow-up links here, expand fully and scroll into view.
    effect(() => {
      if (this.svc.focusQuestionId() === this.q().id) {
        this.state.set('full');
        this.answerRevealed.set(true);
        queueMicrotask(() => {
          this.host.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          this.svc.clearFocus();
        });
      }
    });
  }

  readonly codeMarkdown = computed(() => {
    const code = this.q().answer.code;
    if (!code) return '';
    return `\`\`\`${code.lang}\n${code.snippet}\n\`\`\``;
  });

  /** A "predict the output" question: show its code upfront so you can guess first. */
  readonly isPredict = computed(() => this.q().type === 'code' && !!this.q().answer.code);

  toggle(): void {
    if (this.state() === 'collapsed') {
      this.state.set('one-liner');
    } else {
      this.state.set('collapsed');
      this.answerRevealed.set(false);
    }
  }

  revealAnswer(e: Event): void {
    e.stopPropagation();
    this.answerRevealed.set(true);
  }

  showFull(e: Event): void {
    e.stopPropagation();
    this.state.set('full');
  }

  collapse(e: Event): void {
    e.stopPropagation();
    this.state.set('collapsed');
    this.answerRevealed.set(false);
  }

  onBookmark(e: Event): void {
    e.stopPropagation();
    this.svc.toggleBookmark(this.q().id);
  }

  goToFollowUp(id: string, e: Event): void {
    e.stopPropagation();
    this.svc.goToQuestion(id);
  }
}
