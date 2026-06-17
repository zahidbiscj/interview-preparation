# Phase 3 — Live Interview Mode (Voice-Driven)

## Overview

A fully voice-driven interview simulation. An AI "interviewer" speaks each question aloud, listens to your verbal answer, evaluates which key points you covered, highlights what you missed (visually + spoken), reads the model answer aloud, then advances to the next question — hands-free.

Route: `/live-interview`  
Component: `code/src/app/live-interview/live-interview.page.ts`

---

## User Flow

```
Setup → Interview Running → Per-Question Cycle → Session Summary
```

### 1. Setup Screen

Same chip-based UI as `/simulator`. Extra option:

- **Source**: "All topics" (existing pool builder) **or** "From a Set" (pick from saved sets)
- **Pace**: After answer, auto-advance after N seconds of silence (3 s default) OR wait for "Next" button tap
- **Voice**: Speed slider (0.8 – 1.3x), voice picker (system TTS voices)

**Start button** → requests mic permission first. If denied → show inline error, no crash.

---

### 2. Per-Question Cycle (core loop)

```
[Interviewer speaks question]
        ↓
[User's mic opens — they answer verbally]
        ↓
[User taps "Done" OR silence detected (3 s)]
        ↓
[Transcript matched against keyPoints]
        ↓
[Key-point report shown + spoken]
        ↓
[Interviewer reads full model answer aloud]
        ↓
[Auto-advance or "Next →" tap]
```

---

### 3. Key-Point Matching

Each question has `answer.keyPoints: string[]`. After the user stops speaking:

1. Lower-case the transcript and each key point.
2. Tokenise each key point into **significant words** (strip stop-words: *the, a, an, is, are, in, of, to, with, if, you, must, show*).
3. A key point is **covered** if ≥ 60 % of its significant tokens appear anywhere in the transcript.
4. Points not covered → **missed**.

This is entirely client-side — no API call.

---

### 4. Visual Feedback (matches screenshot style)

```
┌─────────────────────────────────────────────────┐
│  You covered  2/3  key points.                  │
└─────────────────────────────────────────────────┘

KEY POINTS
  ✓  COUNT(*) per customer_id group.          ← green on covered
  ✗  LEFT JOIN from a Customers table …       ← red on missed
  ✗  Use HAVING to filter aggregated rows.    ← red on missed

REAL ANSWER
  Group by customer and COUNT the orders.
```

Key point rows animate in one-by-one as the interviewer speaks the feedback.

---

### 5. Spoken Feedback Script (TTS sequence)

After matching, the app queues these utterances in order:

```
1. "You covered [N] out of [total] key points."

2. For each MISSED point (read aloud):
   "You missed: [keyPoint text]."

3. "The model answer is: [answer.oneLiner]"

4. (if pace = auto) "Moving to the next question in 3… 2… 1…"
   (if pace = manual) [waits for tap]
```

Each utterance is queued via `SpeechSynthesisUtterance` so they play sequentially without overlap.

---

## Technology

| Need | API |
|---|---|
| Interviewer reads aloud | `window.speechSynthesis` + `SpeechSynthesisUtterance` (Web Speech API — no key needed) |
| Capture user speech | `window.SpeechRecognition` / `webkitSpeechRecognition` (Web Speech API — Chrome/Edge; fallback: manual typed input) |
| Key-point matching | Pure TS — no network |
| Silence detection | `SpeechRecognition` `onspeechend` + 3 s `setTimeout` guard |

Both APIs are **zero-cost** (browser built-in). No Anthropic / OpenAI key required.

---

## Files to Create / Modify

```
code/src/app/live-interview/
  live-interview.page.ts          ← new component (all-in-one)
  live-interview.page.scss        ← styles
  voice.service.ts                ← TTS + STT wrapper (injectable)

code/src/app/app.routes.ts        ← add /live-interview route
code/src/app/mock-exam/mock-exam.page.ts  ← add "Live Interview" button in setup
code/src/app/dashboard/dashboard.page.ts ← add tile (optional)
```

### `voice.service.ts` — public API

```ts
// TTS
speak(text: string, opts?: { rate?: number; pitch?: number }): Observable<void>
cancelSpeech(): void

// STT
startListening(): Observable<string>   // emits interim transcript, completes on silence/stop
stopListening(): void
readonly browserSupported: boolean     // false → show typed-fallback UI
```

---

## Component State Machine

```ts
type LivePhase =
  | 'setup'
  | 'asking'       // TTS is reading the question
  | 'listening'    // mic is open, user is speaking
  | 'evaluating'   // matching transcript → keyPoints (instant)
  | 'feedback'     // showing + speaking result
  | 'done';        // session complete
```

Signals:
```ts
phase = signal<LivePhase>('setup')
currentIndex = signal(0)
transcript = signal('')
coveredPoints = signal<boolean[]>([])   // parallel array to keyPoints
```

---

## Setup → Running Entry

```ts
async startLiveInterview(): Promise<void> {
  const pool = await buildPool(...)   // same as simulator
  this.questions.set(pool)
  this.askQuestion(0)
}

askQuestion(i: number): void {
  this.phase.set('asking')
  const q = this.questions()[i]
  this.voice.speak(`Question ${i + 1}: ${q.q}`).subscribe({
    complete: () => this.openMic()
  })
}

openMic(): void {
  this.phase.set('listening')
  this.voice.startListening().subscribe({
    next: t  => this.transcript.set(t),
    complete: () => this.evaluate()
  })
}
```

---

## Key-Point Evaluation

```ts
evaluate(): void {
  this.phase.set('evaluating')
  const kps = this.current().answer.keyPoints ?? []
  const text = this.transcript().toLowerCase()
  const STOP = new Set(['the','a','an','is','are','in','of','to','with','if','you','must','show'])
  const covered = kps.map(kp => {
    const tokens = kp.toLowerCase().split(/\W+/).filter(t => t.length > 2 && !STOP.has(t))
    if (!tokens.length) return true
    const hits = tokens.filter(t => text.includes(t)).length
    return hits / tokens.length >= 0.6
  })
  this.coveredPoints.set(covered)
  this.speakFeedback(kps, covered)
}
```

---

## Feedback Phase

```ts
speakFeedback(kps: string[], covered: boolean[]): void {
  this.phase.set('feedback')
  const missedKps = kps.filter((_, i) => !covered[i])
  const total = kps.length
  const coveredCount = covered.filter(Boolean).length

  const lines: string[] = [
    `You covered ${coveredCount} out of ${total} key points.`,
    ...missedKps.map(kp => `You missed: ${kp}`),
    `The model answer is: ${this.current().answer.oneLiner}`,
  ]

  // Speak all lines sequentially, then advance
  this.voice.speakSequence(lines).subscribe({
    complete: () => this.advance()
  })
}
```

---

## Browser Compatibility & Fallbacks

| Browser | TTS | STT | Notes |
|---|---|---|---|
| Chrome 33+ | ✓ | ✓ | Best experience |
| Edge 79+ | ✓ | ✓ | Works well |
| Firefox | ✓ | ✗ | STT unavailable — show typed input fallback |
| Safari 14+ | ✓ | Partial | May need `webkit` prefix |

When STT unavailable: replace mic button with a text `<textarea>` labelled "Type your answer". Rest of the flow (evaluation, TTS feedback) works identically.

---

## UI Layout (Running phase)

```
┌──────────────────────────────────────────┐
│  🎤 Live Interview        Q 3 / 10   ⏱ 4:12  │
├──────────────────────────────────────────┤
│                                          │
│  [topic badge]  [level badge]            │
│                                          │
│  What is the difference between          │
│  INNER JOIN and LEFT JOIN?               │
│                                          │
│  ● Listening...  [waveform animation]    │
│                                          │
│  [ Done speaking ]                       │
│                                          │
├──────────────────────────────────────────┤
│  (feedback zone — hidden until eval)     │
│  You covered 1/2 key points.            │
│  ✓  INNER JOIN returns only matches.    │
│  ✗  LEFT JOIN keeps all left rows.      │
│                                          │
│  REAL ANSWER: Returns only matching …   │
│                                          │
│  [ Next Question → ]                    │
└──────────────────────────────────────────┘
```

---

## Entry Points

### From Simulator Setup
Add a second "Start" button variant in `/simulator` setup:

```html
<button class="start-btn secondary" (click)="startLive()">
  🎤 Live Interview Mode
</button>
```

`startLive()` navigates to `/live-interview` with `?topics=X&levels=Y&count=Z` query params so setup is pre-filled.

### From Sets page
Each set card gets a "🎤 Live" button → `/live-interview?set=<id>`

---

## Session Summary (done phase)

Same score ring + review list as simulator. Extra column: "key points covered %".

Option to replay missed-key-point questions only — same `retryReview()` pattern.

---

## Implementation Order

1. `voice.service.ts` — TTS + STT, with typed fallback detection
2. `live-interview.page.ts` + SCSS — state machine, UI
3. Route + nav links
4. Key-point evaluator (pure function, unit-testable)
5. Entry points from simulator and sets

Estimated: 3–4 focused sessions.

---

## Out of Scope for Phase 3

- AI-graded answers (semantic similarity via Claude API) — Phase 4
- Recording / playback of user's audio
- Multi-language voices beyond browser defaults
