# Behavioral / Project & Experience Cheat-Sheet

Structured answers that show ownership, trade-offs, and measurable impact beat generic stories every time. Talk like you're in the room: short, spoken sentences, always "I" not just "we".

---

## The STAR Framework

Every behavioral story should fit this skeleton — say it out loud in this order.

| Step | What to say | Why it lands |
|---|---|---|
| **S — Situation** | One-line context: team, system, constraint. | Frames it fast without burning time. |
| **T — Task** | YOUR specific responsibility, not the team's. | Establishes personal accountability. |
| **A — Action** | The 2-3 key decisions YOU made and the reasoning. | Seniority = reasoning, not mechanics. |
| **R — Result** | Quantify: latency, cost, uptime, delivery, revenue. | Numbers make it credible and memorable. |

**Golden rule:** every story ends with a result AND an answer to "what would you do differently?"

---

## Common Question Categories (and the hook each one tests)

| Category | Example | What they're really checking |
|---|---|---|
| **Intro / role** | "Tell me about yourself." | Can you be concise and relevant? |
| **Architecture / design** | "Walk me through your architecture / why Clean Architecture?" | Do you reason about trade-offs? |
| **Problem solving** | "A challenging problem you solved." | Systematic diagnosis to root cause. |
| **Performance** | "A performance improvement you made." | Baseline -> profile -> fix -> metric. |
| **Incidents / ownership** | "How do you handle a production incident?" | Calm, structured, prevention-minded. |
| **Conflict / influence** | "A disagreement with a lead." | Data + empathy, then commit. |
| **Mistakes / quality** | "Biggest mistake / something you weren't proud of." | Honest ownership + concrete change. |
| **Delivery / pressure** | "Tight deadlines without losing quality." | Scope triage + transparent comms. |
| **Growth / learning** | "How do you stay current?" | A real system, applied to real work. |
| **Team / mentoring** | "Your role / a time you mentored." | Self-awareness and lifting others. |
| **Motivation** | "Why are you leaving?" | Forward-looking, tied to this role. |

---

## "Introduce Yourself" Template (under 60 seconds)

1. **Role** — "I'm a senior .NET/Azure integration engineer..."
2. **Stack** — "...C#, Azure Service Bus, Functions, Cosmos, Angular."
3. **Current project** — "I'm building [system] that [does X] for [audience], at [scale]."
4. **Impact** — "That runs at [metric] / has reduced [metric] by X%."
5. **Why here** — one sentence linking your background to this role.

---

## Explain Your Architecture — zoom out to zoom in

1. **Business problem** the system solves.
2. **System boundary** — entry points (HTTP, events, schedules).
3. **Key components** — services, queues, databases, external APIs, and how they talk (sync vs async).
4. **Data flow** — how one key request travels end-to-end.
5. **Cross-cutting** — auth, observability, resilience, retry.
6. **Trade-offs** — what you chose and what you gave up.

---

## Justify a Design Decision (template)

> "We chose [X] because [constraint/requirement]. The trade-off was [cost], which we accepted because [benefit > cost]. An alternative was [option], but it fell short because [reason]. In hindsight I'd [keep it / change Y] because [evidence]."

Axes to name: **maintainability vs speed | consistency vs flexibility | cost vs resilience.**

---

## Production Incident — the 5 phases, every time

1. **Detect** — alert / dashboard / customer report.
2. **Triage** — severity and blast radius in the first 5 minutes.
3. **Communicate + Mitigate** — status update, then stop the bleeding (rollback, flag, scale-out) BEFORE root cause.
4. **Root cause** — once stable, trace with a correlation ID.
5. **Prevent** — blameless post-mortem within 48h; action items with owners.

---

## Handling the Deeper Probes

Interviewers always push. Have an answer ready for:

- **"What was YOUR specific role?"** — separate your decisions from the team's; use "I decided / I owned / I drove."
- **"What would you do differently?"** — name one concrete improvement; never "nothing."
- **"Was there pushback?"** — show you handled it with data, not authority.
- **"How did you measure it?"** — have a before and after number.

---

## Do / Don't

| Do | Don't |
|---|---|
| Say "I" and own specific decisions. | Hide behind "we did everything." |
| Quantify every result with a number. | Say "much faster" / "it was complex." |
| Name the trade-off, not just the fix. | Present a choice as obviously correct. |
| Show diagnosis before the solution. | Jump straight to "I added an index." |
| Stay positive about past employers. | Trash your team, manager, or pay. |
| End the story cleanly with a result. | Trail off or ramble past 2-3 minutes. |
| Pick real, significant examples. | Use trivial or clearly fake stories. |
| Commit after a decision goes against you. | "I just went along with it." |

---

## Power Phrases to Sound Senior

- "I owned end-to-end delivery of..."
- "I weighed [A] vs [B] and chose [A] because [trade-off]."
- "That took p99 from X ms to Y ms."
- "I made the call and I'd make the same one, with one change: ..."
- "I mitigated first, then chased root cause."
- "I flagged the trade-off and filed it as tech debt — then paid it back."

---

## Quick-Recall Checklist

- [ ] Every answer uses "I", not just "we".
- [ ] Result has at least one number.
- [ ] I named the trade-off, not just the solution.
- [ ] I can answer "what would you do differently?" for each story.
- [ ] Intro lands under 60 seconds.
- [ ] Architecture answer starts with the business problem.
- [ ] Incident answer covers all 5 phases.
- [ ] Diagnosis comes before the fix.
- [ ] No blame, no vagueness, no trailing off.
- [ ] Motivation is forward-looking and tied to this role.
