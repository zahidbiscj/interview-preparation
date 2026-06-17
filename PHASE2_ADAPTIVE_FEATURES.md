# Phase 2 — Adaptive Practice (crackInterview)

> All client-side. No backend. State in `localStorage`. Angular standalone + signals.
> App routes live under base href `/interview-preparation/`.

## Fixes shipped alongside
1. **GitHub Pages 404 on refresh** — deep links like `/dashboard`, `/simulator` 404 on reload.
   Fix: publish a `404.html` (copy of `index.html`) so GH Pages serves the SPA shell for any
   path; Angular router then renders the correct route. Added as a build step in the deploy workflow.
2. **Dashboard "Shuffle 10 & Practice"** now navigates to `/simulator?quick=10` (all topics, all
   levels, shuffle, auto-start) instead of an inline runner — one consistent practice surface.
3. **Dashboard topic list** shows every topic sorted **descending by reviewed count** (most-practiced first),
   with each topic's review count + last-reviewed.

## Shared contract
`ReviewLogService` (`src/app/shared/review-log.service.ts`) — single source of truth for "what was
practiced when".
- localStorage key `review_log`: `{ questionId, topicId, topicName, date: ISO, result }[]`
  (`result`: `'got' | 'review'` from simulator/quick practice, or SM-2 rating `0..5` from spaced repetition).
- API: `log(entry)`, `entries(): Signal`, `countByTopic()`, `lastReviewedByTopic()`, `reviewsInRange(fromIso,toIso)`.
- Every practice surface (Simulator, Spaced Repetition, Feynman) calls `log(...)` per question so
  Neglect + Mastery + the dashboard topic list all read from one place.

Topics (display ↔ topicId): SQL→sql, .NET→csharp, Angular→angular, DevOps→devops, Security→security,
Testing→testing, Architecture→architecture (radar uses these 7; logs may contain any topicId).

---

## FEATURE 1 — Spaced Repetition (SM-2)
Route `/spaced-repetition`. `SpacedRepetitionService` + `SpacedRepetitionPage` (Focus Mode, full-screen).
- Per-question SM-2 record in `sr_data`: `{ interval, repetition, easeFactor=2.5, nextReviewDate }`.
- Rating 0..5 (Blackout/Wrong/Hard/Good/Easy/Perfect). `<3` → interval=1, repetition=0.
  `>=3` → rep0:1, rep1:6, rep>1: interval*=EF; EF += 0.1-(5-r)*(0.08+(5-r)*0.02), min 1.3.
  `nextReviewDate = today + interval`.
- `getTodaysQueue()` (due ≤ today), `updateAfterReview(id,rating)` (also writes review_log),
  `getProgress() → {total,dueToday,mastered}` (mastered = repetition ≥ 3 or interval ≥ 21).
- UI: today's queue count, one card at a time, reveal → 5-button rating bar, progress bar X/total,
  empty state "Done for today ✅ Next session: N tomorrow". Optional `?topic=<id>` filter.

## FEATURE 2 — Feynman Mode
Route `/feynman`. `FeynmanPage`.
- Prompt "Explain this to a junior developer in your own words" + textarea.
- On submit: show real answer; auto-match `keyPoints` (case-insensitive substring / keyword) against
  the user's text; "You covered X/Y key points"; missing keywords highlighted red.
- Self-grade: Nailed it / Got most / Missed a lot → store `feynman_scores` + write review_log.

## FEATURE 3 — Topic Neglect Score
Route `/neglect` (+ summary list embedded on dashboard). `NeglectService` + `NeglectDashboardPage`.
- Reads `review_log`. `getNeglectScore(topic)`=days since last review; `getTopicsSortedByNeglect()`;
  `getReviewCountByTopic() → {topic,count,lastReviewed}[]`; `getMonthlyTopicData()`.
- UI: table Topic | Last Reviewed | Days Since | Count | Status. Status 🔴>14d, 🟡7–14d, 🟢<7d.
  Sort toggle (neglect/count/alpha). "Study Now" per topic → `/spaced-repetition?topic=<id>`.
  Banner: "Most neglected: [topic] — X days".

## FEATURE 4 — Mastery Radar (pure SVG, no chart lib)
Route `/mastery` (+ mini radar on dashboard). `MasteryService` + `RadarChartPage`.
- 7 topics. Score 0–100 = 60% avg self-grade (last 30d) + 40% review-frequency vs topic size.
- SVG heptagon, grid at 25/50/75/100, axis labels outside, filled translucent polygon, per-axis score
  labels, green strong / red weak. `getTrend(topic)` last7 vs prev7 → improving/declining/stable.
- Below: ranked strongest→weakest, trend arrows ↑↗→↘↓, "Focus on: [weakest]".

## Dashboard hub layout
Stat cards (streak/today/all-time/accuracy) → daily 14-day chart → **Practice Modes** tiles
(Simulator, Spaced Repetition, Feynman, Neglect, Mastery) → **Topics by reviews** (desc) → mini radar.
