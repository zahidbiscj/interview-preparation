# Phase 3 — Live Interview Mode (Voice-Driven + AI-Graded)

> **For the implementer (Sonnet):** This spec is self-contained. Every file path, signal,
> prompt string, and JSON shape you need is here. Do **not** explore the repo broadly —
> the only files you must read before editing are listed in each step. Reuse existing
> patterns (signals + OnPush, `localStorage` via a service, `buildPool`/`buildPoolFromIds`).

---

## 1. What we're building

A hands-free mock interview. The AI interviewer:

1. **Speaks** the selected question aloud (TTS).
2. **Listens** to your spoken answer (STT → transcript).
3. **Grades** the transcript with an LLM (OpenRouter free model) → which key points you hit, a score, and natural spoken feedback.
4. **Highlights** missed points visually (✓ green / ✗ red, like the screenshot) **and** reads the feedback + model answer aloud.
5. **Advances** to the next question automatically.

Route: `/live-interview` · Component: `code/src/app/live-interview/live-interview.page.ts`

---

## 2. Key design decisions (improvements over the first draft)

### 2.1 Hybrid grading — LLM primary, local fallback ⭐
The original draft used naive token-overlap matching. That's brittle for **spoken/transcribed** answers (paraphrasing, filler words, "um", synonyms). So:

- **If at least one AI provider is configured** → grade with the LLM (semantic, accurate, natural feedback), trying providers in a fallback **chain**.
- **If no provider / offline / all error** → fall back to the local token-match evaluator (§7.2). The app **never hard-fails**.

All paths produce the **same `GradeResult` shape**, so the UI and TTS code don't branch.

### 2.2 Client-side only (no backend) ⭐
This app is a static GitHub Pages SPA — there is no server to proxy API calls. So:

- The user pastes their **own** free API key(s) into a Settings panel; stored in `localStorage` (`live.settings`).
- The fetch goes **directly** browser → the provider. All chosen providers must allow browser CORS (the four below do).
- ⚠️ **Security note to surface in the UI:** a key in `localStorage` is visible to anyone with the device/devtools. Use **free-tier keys** only. Acceptable for a personal prep tool. (A server proxy is Phase 4.)

### 2.3 Fully-free, multi-provider fallback chain ⭐ (the important one)
No paid services. The grader tries configured providers **top-down**, falling through on rate-limit / error, and finally to local token-match. The user enables any subset in Settings.

| Order | Provider | Free model (default) | Endpoint style | Notes |
|---|---|---|---|---|
| 1 | **Google Gemini** | `gemini-2.0-flash` | Gemini REST | Best free tier (~15 RPM, ~1500/day), native JSON. Key: aistudio.google.com |
| 2 | **Groq** | `llama-3.3-70b-versatile` | OpenAI-compatible | Fastest (~300 ms) → live feel. ~30 RPM free. Key: console.groq.com |
| 3 | **OpenRouter** | `deepseek/deepseek-chat-v3-0324:free` | OpenAI-compatible | Aggregates DeepSeek/Llama/Qwen `:free`. Key: openrouter.ai |
| 4 | **Ollama (local)** | `qwen2.5` / `deepseek-r1` | Ollama REST | Unlimited, offline, no key. Needs `OLLAMA_ORIGINS=*`. Optional/power-user |

**Adapter reuse:** Groq + OpenRouter are both OpenAI-compatible → **one adapter** (different baseURL + model + key). Gemini and Ollama each need a small adapter. So **3 adapters + local fallback** cover all four. Force JSON via each provider's JSON mode (see §6).

**On DeepSeek:** its own API is paid; access it **free** via OpenRouter (`deepseek-chat-v3:free`), Groq (distill models), or Ollama (`deepseek-r1`). No DeepSeek loss.

### 2.4 The LLM writes the spoken feedback ⭐
Instead of templated "You missed: X", the LLM returns a short, natural `spokenFeedback` string (1–2 sentences, interviewer tone). TTS reads that — feels like a real interviewer. The per-point ✓/✗ list is still rendered visually from `covered[]`.

### 2.5 Graceful STT fallback
STT (`SpeechRecognition`) only works in Chrome/Edge. When unsupported → swap the mic for a `<textarea>` ("Type your answer"). The grading + TTS path is identical.

---

## 3. Tech stack

| Need | Mechanism | Cost |
|---|---|---|
| Interviewer speaks | `window.speechSynthesis` + `SpeechSynthesisUtterance` | free, built-in |
| Capture answer | `webkitSpeechRecognition` / `SpeechRecognition`; textarea fallback | free, built-in |
| AI grading | Provider chain: Gemini → Groq → OpenRouter → Ollama, all `:free` | free (user key) |
| Local fallback grading | pure TS token-match | free |
| Key / settings storage | `localStorage` | — |

---

## 4. Shared types (single source of truth)

Put in `code/src/app/live-interview/live-interview.models.ts`:

```ts
/** Unified result from EITHER the LLM grader or the local fallback. */
export interface GradeResult {
  covered: boolean[];      // parallel to question.answer.keyPoints
  score: number;           // 0..100
  spokenFeedback: string;  // 1–2 natural sentences, read aloud by TTS
  source: 'llm' | 'local'; // for a small badge in the UI
}

export type LivePhase =
  | 'setup'        // pick scope + settings
  | 'asking'       // TTS reading the question
  | 'listening'    // mic open / textarea active
  | 'evaluating'   // grading in flight (LLM or local)
  | 'feedback'     // showing + speaking result
  | 'done';        // summary

export type ProviderId = 'gemini' | 'groq' | 'openrouter' | 'ollama';

/** One configured provider in the fallback chain. Tried in array order. */
export interface ProviderConfig {
  id: ProviderId;
  enabled: boolean;
  apiKey: string;   // '' for ollama (local, no key)
  model: string;    // provider-specific model id
}

export interface LiveSettings {
  /** Fallback chain — tried top-down; first success wins, else local grading. */
  providers: ProviderConfig[];
  rate: number;            // TTS speed 0.8..1.3, default 1.0
  voiceURI: string | null; // chosen system voice, null = default
  autoAdvance: boolean;    // true = auto, false = wait for tap
}

export const DEFAULT_LIVE_SETTINGS: LiveSettings = {
  providers: [
    { id: 'gemini',     enabled: false, apiKey: '', model: 'gemini-2.0-flash' },
    { id: 'groq',       enabled: false, apiKey: '', model: 'llama-3.3-70b-versatile' },
    // model alternatives: 'deepseek/deepseek-chat-v3-0324:free', 'meta-llama/llama-3.3-70b-instruct:free'
    { id: 'openrouter', enabled: false, apiKey: '', model: 'xiaomi/mimo-v2-flash:free' },
    { id: 'ollama',     enabled: false, apiKey: '', model: 'qwen2.5' },
  ],
  rate: 1.0,
  voiceURI: null,
  autoAdvance: true,
};

export interface LiveResult {       // per-question record for the summary
  question: import('../question-bank/models/question-bank.models').QuestionView;
  grade: GradeResult;
}
```

---

## 5. Files to create / modify

```
CREATE  code/src/app/live-interview/live-interview.models.ts   ← types above
CREATE  code/src/app/live-interview/voice.service.ts           ← TTS + STT wrapper
CREATE  code/src/app/live-interview/grader.service.ts          ← LLM + local fallback
CREATE  code/src/app/live-interview/live-settings.service.ts   ← localStorage settings
CREATE  code/src/app/live-interview/live-interview.page.ts     ← the page (state machine + UI)
CREATE  code/src/app/live-interview/live-interview.page.scss   ← styles
MODIFY  code/src/app/app.routes.ts                             ← add /live-interview route
MODIFY  code/src/app/mock-exam/mock-exam.page.ts               ← "🎤 Live Interview" button in setup
MODIFY  code/src/app/sets/sets.page.ts                         ← "🎤 Live" per set (optional)
```

No changes to the data model or JSON files — questions already carry `answer.keyPoints` and `answer.oneLiner`.

---

## 6. Provider integration (exact contracts)

All providers receive the **same system + user prompt** (§6.3, §6.4) and must return the
**same JSON shape**. Only the HTTP wrapper differs. The grader builds the prompt once, then
hands it to whichever adapter is next in the chain.

### 6.1 Adapter A — OpenAI-compatible (covers **Groq** + **OpenRouter**)
```
POST  <baseUrl>/chat/completions
  Groq:       baseUrl = https://api.groq.com/openai/v1
  OpenRouter: baseUrl = https://openrouter.ai/api/v1
Headers:
  Authorization: Bearer <provider.apiKey>
  Content-Type: application/json
  # OpenRouter only (optional, for their ranking):
  HTTP-Referer: https://zahidbiscj.github.io/interview-preparation/
  X-Title: crackInterview Live
Body:
{
  "model": "<provider.model>",
  "response_format": { "type": "json_object" },
  "temperature": 0.2,
  "messages": [
    { "role": "system", "content": "<SYSTEM PROMPT §6.3>" },
    { "role": "user",   "content": "<USER PROMPT §6.4>" }
  ]
}
Parse: data.choices[0].message.content  → JSON.parse
```

### 6.1b Adapter B — Google Gemini
```
POST  https://generativelanguage.googleapis.com/v1beta/models/<provider.model>:generateContent?key=<provider.apiKey>
Headers: Content-Type: application/json
Body:
{
  "system_instruction": { "parts": [{ "text": "<SYSTEM PROMPT §6.3>" }] },
  "contents":           [{ "parts": [{ "text": "<USER PROMPT §6.4>" }] }],
  "generationConfig": { "temperature": 0.2, "response_mime_type": "application/json" }
}
Parse: data.candidates[0].content.parts[0].text  → JSON.parse
```

### 6.1c Adapter C — Ollama (local, optional)
```
POST  http://localhost:11434/api/chat
Headers: Content-Type: application/json
Body:
{
  "model": "<provider.model>",
  "format": "json",
  "stream": false,
  "messages": [
    { "role": "system", "content": "<SYSTEM PROMPT §6.3>" },
    { "role": "user",   "content": "<USER PROMPT §6.4>" }
  ]
}
Parse: data.message.content  → JSON.parse
Requires the user to run:  OLLAMA_ORIGINS=* ollama serve
```

### 6.3 System prompt (constant)
```
You are a senior technical interviewer grading a candidate's SPOKEN answer that was
transcribed by speech-to-text, so ignore filler words, minor grammar, and transcription
typos. Judge MEANING, not exact wording. Be fair but rigorous.

Return ONLY a JSON object with EXACTLY this shape:
{
  "covered": boolean[],      // one entry per expected key point, in order
  "score": number,           // 0-100 overall
  "spokenFeedback": string   // 1-2 short sentences, spoken in first person to the
                             // candidate, naming what they missed and one tip
}
The "covered" array length MUST equal the number of key points given.
```

### 6.4 User prompt (templated, same for every provider)
```
Question:
{q}

Expected key points (judge each independently, in order):
1. {keyPoints[0]}
2. {keyPoints[1]}
...

Model answer (for your reference):
{oneLiner}

Candidate's transcribed spoken answer:
"{transcript}"
```

### 6.5 Parsing & guards (every adapter)
- Parse the provider-specific content path (above) → `JSON.parse`.
- Coerce: if `covered.length !== keyPoints.length`, pad with `false` / truncate.
- Clamp `score` to 0..100; default `spokenFeedback` if missing.
- On **any** failure (network, non-200, rate-limit 429, bad JSON, empty key) → **return `null`** so the grader tries the **next** provider, then local. Never throw to the UI.
- Add a 15 s `AbortController` timeout per call.

`grader.service.ts` public API:
```ts
async grade(q: QuestionView, transcript: string): Promise<GradeResult> {
  // 1. for each ENABLED provider in settings.providers (in order):
  //      const r = await callAdapter(provider, q, transcript);  // null on failure
  //      if (r) return { ...r, source: 'llm' };
  // 2. return gradeLocal(q, transcript);   // always succeeds, source: 'local'
}
```
The adapter dispatch is a single `switch (provider.id)` selecting A/B/C from §6.1.

---

## 7. Grading internals

### 7.1 LLM path
`callAdapter(provider, q, transcript): Promise<GradeResult | null>` — builds the shared prompt (§6.3/§6.4), dispatches to the right adapter (§6.1a/b/c), parses per §6.5, maps to `GradeResult`. try/catch → `null` on any failure so the chain advances.

### 7.2 Local fallback path (always works, no network)
```ts
gradeLocal(q: QuestionView, transcript: string): GradeResult {
  const kps = q.answer.keyPoints ?? [];
  const text = transcript.toLowerCase();
  const STOP = new Set(['the','a','an','is','are','in','of','to','with','if','you','must',
                        'show','and','or','for','on','that','this','it','as','be','use']);
  const covered = kps.map(kp => {
    const toks = kp.toLowerCase().split(/\W+/).filter(t => t.length > 2 && !STOP.has(t));
    if (!toks.length) return true;
    const hits = toks.filter(t => text.includes(t)).length;
    return hits / toks.length >= 0.5;
  });
  const n = covered.filter(Boolean).length;
  const score = kps.length ? Math.round((n / kps.length) * 100) : 0;
  const missed = kps.filter((_, i) => !covered[i]);
  const spokenFeedback = missed.length
    ? `You covered ${n} of ${kps.length} points. You missed: ${missed.join('; ')}.`
    : `Great — you covered all ${kps.length} key points.`;
  return { covered, score, spokenFeedback, source: 'local' };
}
```

---

## 8. voice.service.ts (TTS + STT)

```ts
@Injectable({ providedIn: 'root' })
export class VoiceService {
  readonly sttSupported =
    typeof window !== 'undefined' &&
    !!((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

  voices(): SpeechSynthesisVoice[]            // speechSynthesis.getVoices()

  // Speak one phrase; resolves when finished. rate/voiceURI from settings.
  speak(text: string, rate: number, voiceURI: string | null): Promise<void>

  // Speak an ordered list with no overlap (chain promises). For multi-line feedback.
  speakSequence(lines: string[], rate: number, voiceURI: string | null): Promise<void>

  cancelSpeech(): void                        // speechSynthesis.cancel()

  // Start STT. onText = live interim transcript. Resolves with FINAL transcript on
  // onspeechend / onend / stop(). Auto-stops after `silenceMs` of no speech (default 3000).
  listen(onText: (t: string) => void, silenceMs?: number): Promise<string>
  stopListening(): void
}
```
Implementation notes:
- `speak`: `new SpeechSynthesisUtterance(text)`, set `rate`, set `voice` by matching `voiceURI`, resolve on `utter.onend`. Call `speechSynthesis.cancel()` first to clear any queue.
- `voices()` may be empty on first call → also listen to `speechSynthesis.onvoiceschanged`.
- `listen`: `recognition.continuous = true`, `interimResults = true`, `lang = 'en-US'`. Accumulate final results; reset a `setTimeout(silenceMs)` on each result; on fire → `recognition.stop()` → resolve accumulated text.

---

## 9. live-settings.service.ts

Mirror `review-log.service.ts` (load/persist with try/catch). Key `live.settings`, value = `LiveSettings`. Expose a `settings` signal + `update(partial)` method. Default = `DEFAULT_LIVE_SETTINGS`.

---

## 10. Page state machine & flow

Signals on the page:
```ts
phase        = signal<LivePhase>('setup')
questions    = signal<QuestionView[]>([])
index        = signal(0)
transcript   = signal('')
grade        = signal<GradeResult | null>(null)
results      = signal<LiveResult[]>([])
showSettings = signal(false)
current = computed(() => this.questions()[this.index()] ?? null)
```

Flow:
```
start()        -> buildPool (reuse svc.buildPool / buildPoolFromIds) -> askQuestion(0)
askQuestion(i) -> phase='asking';  await voice.speak("Question {i+1}. " + q.q)  -> openInput()
openInput()    -> phase='listening';
                  if sttSupported: transcript = await voice.listen(t => transcript.set(t))
                  else: user types in textarea, taps "Submit"   -> evaluate()
evaluate()     -> phase='evaluating'; grade = await grader.grade(q, transcript())
                  -> reviewLog.log({result: grade.score>=60 ? 'got':'review', ...})
                  -> phase='feedback'; render ✓/✗; await voice.speakSequence([
                        grade.spokenFeedback,
                        "The model answer is: " + q.answer.oneLiner ])
                  -> if autoAdvance: advance()  else: wait for "Next" tap
advance()      -> push to results; if last -> finish() else index++, askQuestion(index())
finish()       -> phase='done'; svc.recordPractice(results.length, gotCount)
```
`gotCount` = results where `score >= 60`. Reuse the simulator's score-ring + review-list markup for the `done` phase (copy from `mock-exam.page.ts`).

**Cleanup:** in `ngOnDestroy` call `voice.cancelSpeech()` + `voice.stopListening()`. Also stop both whenever the user taps "End session" or navigates away.

---

## 11. UI (running phase) — match the screenshot

```
┌──────────────────────────────────────────────┐
│ 🎤 Live Interview      Q 3/10   ⏱ 4:12   ⚙︎ │
├──────────────────────────────────────────────┤
│ [topic badge] [level badge]                  │
│ What is the difference between INNER and      │
│ LEFT JOIN?                                    │
│                                              │
│ ● Listening…   "inner join returns rows…"     │   ← live interim transcript
│ [ Done speaking ]                            │
├──────────────────────────────────────────────┤
│ FEEDBACK (after eval)            [llm ▢]      │
│ ┌────────────────────────────────────────┐  │
│ │ You covered 1/2 key points.            │  │   ← amber count, like screenshot
│ └────────────────────────────────────────┘  │
│ KEY POINTS                                   │
│  ✓  INNER JOIN returns only matches   (green)│
│  ✗  LEFT JOIN keeps all left rows     (red)  │
│ REAL ANSWER                                  │
│  Returns only matching rows vs all left…     │
│ [ Next Question → ]                          │
└──────────────────────────────────────────────┘
```
Reuse the screenshot's visual language: amber `N/total` chip in a bordered box, ✗ in red, ✓ in green, "KEY POINTS" / "REAL ANSWER" section headers in muted uppercase. Borrow colors/spacing from `mock-exam.page.scss`.

Settings panel (gear icon → `showSettings`): for **each provider** in the chain (§2.3) a row with an enable toggle, an API-key input (`type=password`; hidden for Ollama), and a model field — listed in fallback order with up/down hints. Plus: rate slider, voice `<select>`, auto-advance toggle, a one-line security warning (§2.2), and small "Get a free key" links (aistudio.google.com / console.groq.com / openrouter.ai). "Save" → `liveSettings.update(...)`. A status line shows which provider produced the last grade (`source` + provider id).

---

## 12. Entry points
- `mock-exam.page.ts` setup: add `<button class="start-btn secondary" (click)="goLive()">🎤 Live Interview</button>` → `router.navigate(['/live-interview'])` (carry current topic/level/count selection via query params; page reads them in `ngOnInit` like the simulator's `?quick=` / `?set=` handling).
- `sets.page.ts`: per-set `🎤 Live` button → `/live-interview?set=<id>`.
- `app.routes.ts`: add lazy route mirroring the existing entries.

---

## 13. Step-by-step implementation order (each step = one small, testable change)

> Build with `npm run build` (or `ng build`) inside `code/` after steps 3, 6, 8. Mirror data
> only matters for content edits — none here.

1. **Models** — create `live-interview.models.ts` (§4). _No deps._
2. **Settings service** — `live-settings.service.ts` (§9), pattern-match `review-log.service.ts`.
3. **Voice service** — `voice.service.ts` (§8). Smoke-test: a throwaway button that speaks "hello" and logs STT. _Verify TTS + STT work in Chrome before going further._
4. **Grader — local first** — `grader.service.ts` with `gradeLocal` only (§7.2). Unit-test the token matcher on 2–3 sample questions.
5. **Grader — add LLM** — implement `gradeWithLLM` (§6, §7.1) and the `grade()` orchestration. Test with a real free key; confirm it falls back to local when the key is blank.
6. **Page skeleton** — `live-interview.page.ts` + route. Setup phase only (copy the chip UI from `mock-exam.page.ts`), then the state machine wired to console logs. Confirm navigation + pool building.
7. **Running UI** — question card, live transcript, mic/textarea, feedback zone with ✓/✗ (§11) + SCSS.
8. **Wire voice + grading** — connect `askQuestion → listen → grade → speakFeedback → advance` (§10).
9. **Done phase** — copy score-ring + review list from simulator; add "key-points covered %"; "Retry weak (score<60)" using the same `retryReview` pattern.
10. **Settings panel** — gear → form (§11), persisted via the settings service.
11. **Entry points** — buttons in simulator + sets (§12).
12. **Polish** — `ngOnDestroy` cleanup, mic-permission-denied inline error, STT-unsupported textarea fallback, "End session" stops all audio.

---

## 14. Acceptance criteria
- [ ] With no key set, a full session runs end-to-end using local grading (TTS asks, STT/textarea captures, ✓/✗ shown, model answer spoken, auto-advances).
- [ ] With a valid OpenRouter free key, grading uses the LLM (badge shows `llm`), feedback sounds natural, and paraphrased correct answers are marked covered.
- [ ] Bad/empty key or network failure silently falls back to local grading — no crash, no console error surfaced to the user.
- [ ] Firefox (no STT) shows the textarea fallback and still completes a session.
- [ ] Mic-permission denial shows an inline message, not a crash.
- [ ] Leaving the page / ending the session stops all speech and recognition.

---

## 15. Out of scope (Phase 4)
- Server-side proxy to hide the API key (remove client-side key exposure).
- Dynamic LLM-generated follow-up questions based on the answer.
- Recording / playback of the user's audio.
- Semantic model-answer generation (we already ship curated answers).
- Non-English voices.
