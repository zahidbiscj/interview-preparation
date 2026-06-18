import {
  ChangeDetectionStrategy, Component, computed, inject,
  OnDestroy, OnInit, signal,
} from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { QuestionBankService } from '../question-bank/question-bank.service';
import { QuestionView } from '../question-bank/models/question-bank.models';
import { ReviewLogService } from '../shared/review-log.service';
import { VoiceService } from './voice.service';
import { GraderService } from './grader.service';
import { LiveSettingsService } from './live-settings.service';
import { GradeResult, LiveResult, SavedSession } from './live-interview.models';

type LivePhase = 'loading' | 'listening' | 'evaluating' | 'feedback' | 'done';

@Component({
  selector: 'app-live-interview-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="live-shell" [attr.data-theme]="isDark() ? 'dark' : 'light'">

      <!-- ── Top bar ── -->
      <header class="topbar">
        <a routerLink="/" class="back-link">← <span>Question Bank</span></a>
        <span class="app-brand">🎤 Live Interview</span>
        <span class="topbar-right">
          <a routerLink="/simulator" class="nav-link">Simulator</a>
          <button class="icon-btn" (click)="openSettings()" title="AI Settings">⚙</button>
          <button class="icon-btn" (click)="svc.toggleTheme()">{{ isDark() ? '☀️' : '🌙' }}</button>
        </span>
      </header>

      <main class="live-main">

        <!-- ════════ LOADING ════════ -->
        @if (phase() === 'loading') {
          <div class="evaluating-zone fade-slide-enter" style="margin-top:4rem">
            <div class="spinner"></div>
            <span>Preparing questions…</span>
          </div>
        }

        <!-- ════════ RUNNING (listening / evaluating / feedback) ════════ -->
        @if (phase() !== 'loading' && phase() !== 'done') {
          <div class="runner">

            <!-- Resume banner -->
            @if (sessionRestored()) {
              <div class="resume-banner">
                ↩ Session resumed — {{ results().length }} question{{ results().length !== 1 ? 's' : '' }} already answered
                <button class="resume-dismiss" (click)="sessionRestored.set(false)">×</button>
              </div>
            }

            <!-- Progress -->
            <div class="progress-head">
              <div class="progress-bar"><div class="progress-fill" [style.width.%]="progressPct()"></div></div>
              <div class="progress-meta">
                <span>Question {{ index() + 1 }} / {{ questions().length }}</span>
                <span class="timer">⏱ {{ elapsed() }}</span>
              </div>
            </div>

            <!-- Question card (always visible) -->
            @if (current()) {
              <div class="q-panel">
                <div class="q-badges">
                  <span class="badge badge-{{ current()!.type || 'conceptual' }}">{{ current()!.type || 'conceptual' }}</span>
                  <span class="lvl lvl-{{ current()!.level || 'mid' }}">{{ current()!.level || 'mid' }}</span>
                  <span class="q-topic">{{ current()!.topicName }} › {{ current()!.subtopicName }}</span>
                </div>
                <p class="q-text">{{ current()!.q }}</p>
              </div>
            }

            <!-- Phase zone -->
            <div class="phase-zone">

              <!-- LISTENING: mic open or textarea fallback -->
              @if (phase() === 'listening') {
                <div class="listening-zone fade-slide-enter">

                  @if (micError()) {
                    <div class="mic-error">{{ micError() }}</div>
                  }

                  @if (voice.sttSupported && !micError()) {
                    <!-- STT mode -->
                    <div class="mic-row">
                      <div class="mic-dot"></div>
                      <span class="mic-label">Listening… speak your answer, then click Done Speaking</span>
                    </div>
                    <div class="live-transcript">
                      @if (transcript()) {
                        {{ transcript() }}
                      } @else {
                        <span class="transcript-placeholder">Start speaking — your words will appear here…</span>
                      }
                    </div>
                    <button class="done-btn" (click)="doneSpeaking()">Done Speaking</button>
                  } @else {
                    <!-- Textarea fallback (Firefox / mic denied) -->
                    <textarea
                      class="textarea-fallback"
                      [value]="transcript()"
                      (input)="transcript.set($any($event.target).value)"
                      placeholder="Type your answer here…"
                      rows="5"
                    ></textarea>
                    <button class="done-btn" (click)="submitTyped()">Submit Answer</button>
                  }
                </div>
              }

              <!-- EVALUATING: grading in flight -->
              @if (phase() === 'evaluating') {
                <div class="evaluating-zone fade-slide-enter">
                  <div class="spinner"></div>
                  <span>Grading your answer{{ hasKey() ? ' with AI' : '…' }}…</span>
                </div>
              }

              <!-- FEEDBACK: ✓/✗ key points + model answer + Next button -->
              @if (phase() === 'feedback' && grade() && current()) {
                <div class="feedback-zone fade-slide-enter">

                  <!-- Coverage summary -->
                  <div class="coverage-box">
                    You covered
                    <span class="coverage-fraction">{{ coveredCount() }}/{{ keyPointCount() }}</span>
                    key points.
                  </div>

                  <!-- Your spoken answer -->
                  @if (transcript()) {
                    <div class="your-answer-box">
                      <span class="section-label">Your answer</span>
                      <p class="your-answer-text">{{ transcript() }}</p>
                    </div>
                  }

                  @if (current()!.answer.keyPoints?.length) {
                    <p class="section-label">Key Points</p>
                    <ul class="kp-list">
                      @for (kp of current()!.answer.keyPoints!; track $index) {
                        <li class="kp-item" [class.covered]="grade()!.covered[$index]" [class.missed]="!grade()!.covered[$index]">
                          <span class="kp-icon">{{ grade()!.covered[$index] ? '✓' : '✗' }}</span>
                          <span class="kp-text">{{ kp }}</span>
                        </li>
                      }
                    </ul>
                  }

                  <!-- Spoken feedback -->
                  @if (grade()!.spokenFeedback) {
                    <p class="spoken-feedback-text">💬 "{{ grade()!.spokenFeedback }}"</p>
                  }

                  <p class="section-label">Real Answer</p>
                  <p class="model-answer-text">{{ current()!.answer.oneLiner }}</p>

                  <div class="feedback-footer">
                    <span class="source-badge" [class.llm]="grade()!.source === 'llm'">
                      {{ grade()!.source === 'llm' ? '✦ ' + grade()!.providerId : 'local match' }}
                    </span>
                    <div class="feedback-actions">
                      <button class="retry-btn" (click)="retryQuestion()">↩ Try Again</button>
                      <button class="next-btn" (click)="advance()">
                        {{ isLast() ? 'Finish →' : 'Next Question →' }}
                      </button>
                    </div>
                  </div>

                </div>
              }

            </div><!-- /phase-zone -->

            <button class="end-btn" (click)="finish()">End session</button>
          </div>
        }

        <!-- ════════ DONE ════════ -->
        @if (phase() === 'done') {
          <div class="result fade-slide-enter">
            <h1 class="result-title">Session Complete</h1>

            <div class="score-ring" [style.--pct]="scorePct()">
              <div class="score-inner">
                <span class="score-big">{{ scorePct() }}%</span>
                <span class="score-sub">{{ passCount() }} / {{ results().length }} passed</span>
              </div>
            </div>

            <div class="result-stats">
              <div class="stat pass">
                <span class="stat-num">{{ passCount() }}</span>
                <span class="stat-lbl">Passed (≥60%)</span>
              </div>
              <div class="stat weak">
                <span class="stat-num">{{ weakCount() }}</span>
                <span class="stat-lbl">To review</span>
              </div>
            </div>

            @if (weakList().length) {
              <section class="review-section">
                <h3>📌 Review these ({{ weakList().length }})</h3>
                <div class="review-list">
                  @for (r of weakList(); track r.question.id) {
                    <details class="review-item">
                      <summary>
                        <span class="badge badge-{{ r.question.type || 'conceptual' }}">{{ r.question.type || 'conceptual' }}</span>
                        {{ r.question.q }}
                        <span style="margin-left:auto; font-size:0.78em; color:var(--text-muted)">{{ r.grade.score }}%</span>
                      </summary>
                      <div class="review-answer">{{ r.question.answer.oneLiner }}</div>
                    </details>
                  }
                </div>
              </section>
            } @else {
              <p class="all-good">🎉 You passed every question. Excellent session!</p>
            }

            <!-- Full Session Transcript -->
            @if (results().length) {
              <section class="session-log">
                <div class="log-header">
                  <h3>📄 Full Session Transcript</h3>
                  <button class="copy-log-btn" (click)="copyLog()">Copy as text</button>
                </div>
                <div class="log-entries">
                  @for (r of results(); track r.question.id; let i = $index) {
                    <details class="log-entry">
                      <summary class="log-summary">
                        <span class="log-q-num">Q{{ i + 1 }}</span>
                        <span class="log-q-short">{{ r.question.q }}</span>
                        <span class="log-score-chip" [class.pass]="r.grade.score >= 60" [class.fail]="r.grade.score < 60">
                          {{ r.grade.score }}%
                        </span>
                      </summary>
                      <div class="log-body">
                        <div class="log-label">Your answer</div>
                        <div class="log-transcript-text">{{ r.transcript || '(no answer given)' }}</div>
                        <div class="log-label" style="margin-top:10px">Feedback</div>
                        <div class="log-feedback-text">{{ r.grade.spokenFeedback }}</div>
                      </div>
                    </details>
                  }
                </div>
              </section>
            }

            <div class="result-actions">
              @if (weakList().length) {
                <button class="action-btn primary" (click)="retryWeak()">
                  Retry weak questions ({{ weakList().length }})
                </button>
              }
              <button class="action-btn" (click)="newSession()">New session</button>
              <a routerLink="/" class="action-btn link">Back to bank</a>
            </div>
          </div>
        }

      </main>
    </div>

    <!-- ════════ SETTINGS OVERLAY ════════ -->
    @if (showSettings()) {
      <div class="settings-backdrop" (click)="showSettings.set(false)">
        <div class="settings-panel" (click)="$event.stopPropagation()">
          <h2>⚙ AI Settings</h2>

          <div class="settings-row">
            <label class="settings-label">OpenRouter API Key</label>
            <input
              type="password"
              class="settings-input"
              [value]="draftKey()"
              (input)="draftKey.set($any($event.target).value)"
              placeholder="sk-or-v1-…"
              autocomplete="off"
            />
            <span class="settings-hint">
              Get a free key at <a href="https://openrouter.ai" target="_blank" rel="noopener">openrouter.ai</a>
            </span>
          </div>

          <div class="settings-row">
            <label class="settings-label">Model</label>
            <input
              type="text"
              class="settings-input"
              [value]="draftModel()"
              (input)="draftModel.set($any($event.target).value)"
            />
            <span class="settings-hint">
              Free models: xiaomi/mimo-v2-flash:free · deepseek/deepseek-chat-v3-0324:free · meta-llama/llama-3.3-70b-instruct:free
            </span>
          </div>

          <div class="settings-warn">
            ⚠ Your key is stored in browser localStorage. Use a free-tier key only — it is
            visible to anyone with access to your browser devtools.
          </div>

          <div class="settings-btns">
            <button class="save-btn" (click)="saveSettings()">Save</button>
            <button class="cancel-btn" (click)="showSettings.set(false)">Cancel</button>
          </div>
        </div>
      </div>
    }
  `,
  styleUrl: './live-interview.page.scss',
})
export class LiveInterviewPage implements OnInit, OnDestroy {
  private static readonly SESSION_KEY = 'live.session';

  readonly svc          = inject(QuestionBankService);
  readonly voice        = inject(VoiceService);
  readonly grader       = inject(GraderService);
  readonly liveSettings = inject(LiveSettingsService);
  private readonly reviewLog = inject(ReviewLogService);
  private readonly route     = inject(ActivatedRoute);

  readonly isDark = this.svc.isDark;

  // ── session state ──
  readonly phase          = signal<LivePhase>('loading');
  readonly questions      = signal<QuestionView[]>([]);
  readonly index          = signal(0);
  readonly transcript     = signal('');
  readonly grade          = signal<GradeResult | null>(null);
  readonly results        = signal<LiveResult[]>([]);
  readonly elapsed        = signal('0:00');
  readonly micError       = signal<string | null>(null);
  readonly sessionRestored = signal(false);

  // ── settings panel ──
  readonly showSettings = signal(false);
  readonly draftKey     = signal('');
  readonly draftModel   = signal('');

  // ── computed ──
  readonly current      = computed(() => this.questions()[this.index()] ?? null);
  readonly progressPct  = computed(() =>
    this.questions().length ? Math.round((this.index() / this.questions().length) * 100) : 0);
  readonly isLast       = computed(() => this.index() === this.questions().length - 1);
  readonly passCount    = computed(() => this.results().filter(r => r.grade.score >= 60).length);
  readonly weakCount    = computed(() => this.results().filter(r => r.grade.score < 60).length);
  readonly weakList     = computed(() => this.results().filter(r => r.grade.score < 60));
  readonly scorePct     = computed(() =>
    this.results().length ? Math.round((this.passCount() / this.results().length) * 100) : 0);
  readonly coveredCount  = computed(() => this.grade()?.covered.filter(Boolean).length ?? 0);
  readonly keyPointCount = computed(() => this.current()?.answer.keyPoints?.length ?? 0);
  readonly hasKey        = computed(() => !!this.liveSettings.settings().openrouterKey?.trim());

  readonly sessionLogText = computed(() =>
    this.results().map((r, i) => [
      `Q${i + 1}: ${r.question.q}`,
      `Your answer: ${r.transcript || '(no answer given)'}`,
      `Score: ${r.grade.score}% | ${r.grade.covered.filter(Boolean).length}/${r.grade.covered.length} key points`,
      `Feedback: ${r.grade.spokenFeedback}`,
    ].join('\n')).join('\n\n---\n\n')
  );

  private timerId: ReturnType<typeof setInterval> | null = null;
  private startMs = 0;
  private listenCallId = 0; // guards against stale listen().then() calling evaluate()

  async ngOnInit(): Promise<void> {
    this.svc.applyStoredTheme();
    this.phase.set('loading');
    if (!this.svc.topics().length) await this.svc.init();
    if (!this.tryRestoreSession()) {
      await this.launchSession();
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
    this.voice.stopListening();
  }

  private async launchSession(): Promise<void> {
    const setId = this.route.snapshot.queryParamMap.get('set');
    if (setId) {
      const set = this.svc.sets().find(s => s.id === setId);
      if (set?.questionIds.length) {
        const pool = await this.svc.buildPoolFromIds(set.questionIds);
        if (pool.length) { this.beginSession(this.shuffle(pool)); return; }
      }
    }
    const pool = await this.svc.buildPool(
      this.svc.topics().map(t => t.id),
      ['junior', 'mid', 'senior'],
    );
    const sorted = this.shuffle(pool).slice(0, 10);
    this.beginSession(sorted.length ? sorted : pool.slice(0, 10));
  }

  private beginSession(pool: QuestionView[]): void {
    this.questions.set(pool);
    this.index.set(0);
    this.results.set([]);
    this.transcript.set('');
    this.grade.set(null);
    this.micError.set(null);
    this.sessionRestored.set(false);
    this.startMs = Date.now();
    this.startTimer();
    void this.askQuestion(0);
  }

  // ── session flow ──
  private askQuestion(i: number): void {
    const q = this.questions()[i];
    if (!q) return;
    this.transcript.set('');
    this.grade.set(null);
    this.micError.set(null);
    this.saveSession();
    this.openInput();
  }

  private openInput(): void {
    this.phase.set('listening');

    if (!this.voice.sttSupported) return;

    const callId = ++this.listenCallId;

    void this.voice.listen(
      t => this.transcript.set(t),
      msg => this.micError.set(msg),
    ).then(finalText => {
      // Discard result if a newer listen call has started (retry / next question)
      if (this.listenCallId !== callId) return;
      const text = finalText || this.transcript();
      this.transcript.set(text);
      if (this.micError()) return;
      if (!text.trim()) {
        this.micError.set('No speech captured. Type your answer below, or refresh and allow mic access.');
        return;
      }
      void this.evaluate();
    });
  }

  doneSpeaking(): void {
    this.voice.stopListening();
  }

  submitTyped(): void {
    void this.evaluate();
  }

  private async evaluate(): Promise<void> {
    this.phase.set('evaluating');
    const q = this.current();
    if (!q) return;

    const result = await this.grader.grade(q, this.transcript());
    this.grade.set(result);

    this.reviewLog.log({
      questionId: q.id,
      topicId: q.topicId,
      topicName: q.topicName,
      result: result.score >= 60 ? 'got' : 'review',
    });

    this.saveSession();
    this.phase.set('feedback');
  }

  retryQuestion(): void {
    this.voice.stopListening();
    this.transcript.set('');
    this.grade.set(null);
    this.micError.set(null);
    this.openInput();
  }

  advance(): void {
    const q = this.current();
    const g = this.grade();
    if (q && g) {
      this.results.update(r => [...r, { question: q, grade: g, transcript: this.transcript() }]);
    }
    this.saveSession();

    if (this.index() + 1 >= this.questions().length) {
      this.finish();
    } else {
      this.index.update(i => i + 1);
      void this.askQuestion(this.index());
    }
  }

  finish(): void {
    if (this.phase() === 'done') return;
    this.stopTimer();
    this.voice.stopListening();
    const q = this.current();
    const g = this.grade();
    if (q && g && this.phase() === 'feedback') {
      this.results.update(r => [...r, { question: q, grade: g, transcript: this.transcript() }]);
    }
    this.svc.recordPractice(this.results().length, this.passCount());
    this.clearSession();
    this.phase.set('done');
  }

  retryWeak(): void {
    this.clearSession();
    const pool = this.weakList().map(r => r.question);
    this.beginSession(this.shuffle(pool));
  }

  newSession(): void {
    this.clearSession();
    this.stopTimer();
    this.voice.stopListening();
    this.phase.set('loading');
    this.questions.set([]);
    this.results.set([]);
    this.index.set(0);
    this.transcript.set('');
    this.grade.set(null);
    this.micError.set(null);
    void this.launchSession();
  }

  copyLog(): void {
    navigator.clipboard.writeText(this.sessionLogText()).catch(() => {});
  }

  // ── settings panel ──
  openSettings(): void {
    const s = this.liveSettings.settings();
    this.draftKey.set(s.openrouterKey);
    this.draftModel.set(s.model);
    this.showSettings.set(true);
  }

  saveSettings(): void {
    this.liveSettings.update({
      openrouterKey: this.draftKey().trim(),
      model: this.draftModel().trim(),
    });
    this.showSettings.set(false);
  }

  // ── session persistence ──
  private saveSession(): void {
    const phase = this.phase();
    if (phase === 'done' || phase === 'loading' || phase === 'evaluating') return;
    try {
      const data: SavedSession = {
        questions:  this.questions(),
        index:      this.index(),
        results:    this.results(),
        transcript: this.transcript(),
        grade:      this.grade(),
        phase:      phase as 'listening' | 'feedback',
        startMs:    this.startMs,
      };
      localStorage.setItem(LiveInterviewPage.SESSION_KEY, JSON.stringify(data));
    } catch { /* storage quota */ }
  }

  private clearSession(): void {
    try { localStorage.removeItem(LiveInterviewPage.SESSION_KEY); } catch { /* */ }
  }

  private tryRestoreSession(): boolean {
    try {
      const raw = localStorage.getItem(LiveInterviewPage.SESSION_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw) as SavedSession;
      if (!data.questions?.length) return false;

      this.questions.set(data.questions);
      this.index.set(data.index ?? 0);
      this.results.set(data.results ?? []);
      this.transcript.set(data.transcript ?? '');
      this.grade.set(data.grade ?? null);
      this.startMs = data.startMs ?? Date.now();
      this.sessionRestored.set(true);
      this.startTimer();

      if (data.phase === 'feedback' && data.grade) {
        this.phase.set('feedback');
      } else {
        this.openInput();
      }
      return true;
    } catch {
      return false;
    }
  }

  // ── helpers ──
  private shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  private startTimer(): void {
    this.stopTimer();
    this.timerId = setInterval(() => {
      const s = Math.floor((Date.now() - this.startMs) / 1000);
      this.elapsed.set(`${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`);
    }, 1000);
  }

  private stopTimer(): void {
    if (this.timerId) { clearInterval(this.timerId); this.timerId = null; }
  }
}
