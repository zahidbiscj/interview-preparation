import {
  ChangeDetectionStrategy, Component, computed, inject,
  OnDestroy, OnInit, signal,
} from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { QuestionBankService } from '../question-bank/question-bank.service';
import { QuestionView } from '../question-bank/models/question-bank.models';
import { ReviewLogService } from '../shared/review-log.service';
import { VoiceService } from './voice.service';
import { GraderService } from './grader.service';
import { LiveSettingsService } from './live-settings.service';
import { GradeResult, LiveResult } from './live-interview.models';

type LivePhase = 'setup' | 'listening' | 'evaluating' | 'feedback' | 'done';

interface TopicChoice { id: string; name: string; icon: string; selected: boolean; }

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

        <!-- ════════ SETUP ════════ -->
        @if (phase() === 'setup') {
          <div class="setup fade-slide-enter">
            <h1 class="setup-title">🎤 Live Interview Mode</h1>
            <p class="setup-sub">
              Speak your answer. Your voice is converted to text, graded by AI, and
              missed key points are highlighted instantly.
            </p>

            <section class="setup-block">
              <h3>1 · Topics</h3>
              <div class="chip-row">
                <button class="chip" [class.on]="allTopicsOn()" (click)="toggleAllTopics()">All</button>
                @for (t of topicChoices(); track t.id) {
                  <button class="chip" [class.on]="t.selected" (click)="toggleTopic(t.id)">
                    {{ t.icon }} {{ t.name }}
                  </button>
                }
              </div>
            </section>

            <section class="setup-block">
              <h3>2 · Difficulty</h3>
              <div class="chip-row">
                @for (lvl of levels; track lvl.value) {
                  <button class="chip" [class.on]="selectedLevels().includes(lvl.value)" (click)="toggleLevel(lvl.value)">
                    {{ lvl.label }}
                  </button>
                }
              </div>
            </section>

            <section class="setup-block">
              <h3>3 · Number of questions</h3>
              <div class="chip-row">
                @for (c of countOptions; track c) {
                  <button class="chip" [class.on]="count() === c" (click)="count.set(c)">
                    {{ c === 0 ? 'All' : c }}
                  </button>
                }
              </div>
            </section>

            <div class="setup-footer">
              @if (setupError()) { <p class="setup-error">{{ setupError() }}</p> }

              @if (!hasKey()) {
                <div class="no-key-warn">
                  ⚠ No OpenRouter key — grading will use keyword matching. Add a key in ⚙ settings.
                </div>
              }

              <button class="settings-link-btn" (click)="openSettings()">⚙ AI Settings (OpenRouter key &amp; voice)</button>
              <button class="start-btn" [disabled]="loading()" (click)="start()">
                {{ loading() ? 'Loading…' : 'Start Live Interview →' }}
              </button>
            </div>
          </div>
        }

        <!-- ════════ RUNNING (listening / evaluating / feedback) ════════ -->
        @if (phase() !== 'setup' && phase() !== 'done') {
          <div class="runner">
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

                  <!-- Spoken feedback (what was read aloud) -->
                  @if (grade()!.spokenFeedback) {
                    <p class="spoken-feedback-text">💬 "{{ grade()!.spokenFeedback }}"</p>
                  }

                  <p class="section-label">Real Answer</p>
                  <p class="model-answer-text">{{ current()!.answer.oneLiner }}</p>

                  <div class="feedback-footer">
                    <span class="source-badge" [class.llm]="grade()!.source === 'llm'">
                      {{ grade()!.source === 'llm' ? '✦ ' + grade()!.providerId : 'local match' }}
                    </span>
                    <button class="next-btn" (click)="advance()">
                      {{ isLast() ? 'Finish →' : 'Next Question →' }}
                    </button>
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

            <div class="result-actions">
              @if (weakList().length) {
                <button class="action-btn primary" (click)="retryWeak()">
                  Retry weak questions ({{ weakList().length }})
                </button>
              }
              <button class="action-btn" (click)="resetToSetup()">New session</button>
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
  readonly svc         = inject(QuestionBankService);
  readonly voice       = inject(VoiceService);
  readonly grader      = inject(GraderService);
  readonly liveSettings = inject(LiveSettingsService);
  private readonly reviewLog  = inject(ReviewLogService);
  private readonly route      = inject(ActivatedRoute);
  private readonly router     = inject(Router);

  readonly isDark = this.svc.isDark;

  readonly levels = [
    { value: 'junior', label: '🟢 Junior' },
    { value: 'mid',    label: '🟡 Mid' },
    { value: 'senior', label: '🔴 Senior' },
  ];
  readonly countOptions = [5, 10, 20, 40, 0];

  // ── setup state ──
  readonly topicChoices   = signal<TopicChoice[]>([]);
  readonly selectedLevels = signal<string[]>(['junior', 'mid', 'senior']);
  readonly count          = signal<number>(10);
  readonly loading        = signal(false);
  readonly setupError     = signal<string | null>(null);

  // ── session state ──
  readonly phase     = signal<LivePhase>('setup');
  readonly questions = signal<QuestionView[]>([]);
  readonly index     = signal(0);
  readonly transcript = signal('');
  readonly grade     = signal<GradeResult | null>(null);
  readonly results   = signal<LiveResult[]>([]);
  readonly elapsed   = signal('0:00');
  readonly micError  = signal<string | null>(null);

  // ── settings panel ──
  readonly showSettings   = signal(false);
  readonly draftKey       = signal('');
  readonly draftModel     = signal('');

  // ── computed ──
  readonly current      = computed(() => this.questions()[this.index()] ?? null);
  readonly allTopicsOn  = computed(() => this.topicChoices().every(t => t.selected));
  readonly progressPct  = computed(() =>
    this.questions().length ? Math.round((this.index() / this.questions().length) * 100) : 0);
  readonly isLast       = computed(() => this.index() === this.questions().length - 1);
  readonly passCount    = computed(() => this.results().filter(r => r.grade.score >= 60).length);
  readonly weakCount    = computed(() => this.results().filter(r => r.grade.score < 60).length);
  readonly weakList     = computed(() => this.results().filter(r => r.grade.score < 60));
  readonly scorePct     = computed(() =>
    this.results().length ? Math.round((this.passCount() / this.results().length) * 100) : 0);
  readonly coveredCount = computed(() => this.grade()?.covered.filter(Boolean).length ?? 0);
  readonly keyPointCount = computed(() => this.current()?.answer.keyPoints?.length ?? 0);
  readonly hasKey       = computed(() => !!this.liveSettings.settings().openrouterKey?.trim());

  private timerId: ReturnType<typeof setInterval> | null = null;
  private startMs = 0;

  async ngOnInit(): Promise<void> {
    this.svc.applyStoredTheme();
    if (!this.svc.topics().length) await this.svc.init();
    this.topicChoices.set(
      this.svc.topics().map(t => ({ id: t.id, name: t.name, icon: t.icon, selected: true }))
    );

    // ?set=<id> → skip setup, launch from a saved set directly
    const setId = this.route.snapshot.queryParamMap.get('set');
    if (setId) {
      const set = this.svc.sets().find(s => s.id === setId);
      if (set?.questionIds.length) {
        this.loading.set(true);
        const pool = await this.svc.buildPoolFromIds(set.questionIds);
        this.loading.set(false);
        if (pool.length) { this.beginSession(this.shuffle(pool)); return; }
      }
      this.setupError.set('That set is empty or could not be loaded.');
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
    this.voice.stopListening();
  }

  // ── setup actions ──
  toggleTopic(id: string): void {
    this.topicChoices.update(list =>
      list.map(t => t.id === id ? { ...t, selected: !t.selected } : t));
  }
  toggleAllTopics(): void {
    const turnOn = !this.allTopicsOn();
    this.topicChoices.update(list => list.map(t => ({ ...t, selected: turnOn })));
  }
  toggleLevel(lvl: string): void {
    this.selectedLevels.update(arr =>
      arr.includes(lvl) ? arr.filter(l => l !== lvl) : [...arr, lvl]);
  }

  async start(): Promise<void> {
    this.setupError.set(null);
    const topicIds = this.topicChoices().filter(t => t.selected).map(t => t.id);
    const levels   = this.selectedLevels();
    if (!topicIds.length) { this.setupError.set('Pick at least one topic.'); return; }
    if (!levels.length)   { this.setupError.set('Pick at least one difficulty.'); return; }

    this.loading.set(true);
    const pool = await this.svc.buildPool(topicIds, levels);
    this.loading.set(false);

    if (!pool.length) { this.setupError.set('No questions match that selection.'); return; }

    let sorted = this.shuffle(pool);
    const n = this.count();
    if (n > 0 && sorted.length > n) sorted = sorted.slice(0, n);
    this.beginSession(sorted);
  }

  private beginSession(pool: QuestionView[]): void {
    this.questions.set(pool);
    this.index.set(0);
    this.results.set([]);
    this.transcript.set('');
    this.grade.set(null);
    this.micError.set(null);
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
    this.openInput();
  }

  private openInput(): void {
    this.phase.set('listening');

    if (!this.voice.sttSupported) return; // textarea mode — user taps "Submit Answer"

    void this.voice.listen(
      t => this.transcript.set(t),
      msg => this.micError.set(msg),
    ).then(finalText => {
      this.transcript.set(finalText);
      if (this.micError()) return;              // error shown → textarea visible, user types
      if (!finalText.trim()) {
        // STT ended with no captured speech — keep listening phase, show retry hint
        this.micError.set('No speech captured. Type your answer below, or refresh and allow mic access.');
        return;
      }
      void this.evaluate();
    });
  }

  /** Called by "Done Speaking" button — triggers recognition.stop() → onend → evaluate() */
  doneSpeaking(): void {
    this.voice.stopListening();
  }

  /** Called by "Submit Answer" button in textarea fallback mode */
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

    this.phase.set('feedback');
  }

  advance(): void {
    const q = this.current();
    const g = this.grade();
    if (q && g) this.results.update(r => [...r, { question: q, grade: g }]);

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
    // If we finish mid-question (End session tap), still record current if graded
    const q = this.current();
    const g = this.grade();
    if (q && g && this.phase() === 'feedback') {
      this.results.update(r => [...r, { question: q, grade: g }]);
    }
    this.svc.recordPractice(this.results().length, this.passCount());
    this.phase.set('done');
  }

  retryWeak(): void {
    const pool = this.weakList().map(r => r.question);
    this.beginSession(this.shuffle(pool));
  }

  resetToSetup(): void {
    this.stopTimer();
    this.voice.stopListening();
    this.phase.set('setup');
    this.questions.set([]);
    this.results.set([]);
    this.index.set(0);
    this.transcript.set('');
    this.grade.set(null);
    this.micError.set(null);
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
    this.startMs = Date.now();
    this.elapsed.set('0:00');
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
