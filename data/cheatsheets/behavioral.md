# Behavioral / Project & Experience Cheat-Sheet

Structured answers that show ownership, trade-offs, and measurable impact beat generic stories every time.

---

## The STAR Method

| Step | One-liner | Why it works |
|---|---|---|
| **Situation** | Set the context briefly (team size, system, constraint). | Gives the interviewer a frame without wasting time. |
| **Task** | State YOUR specific responsibility, not the team's. | Establishes personal accountability. |
| **Action** | Walk through the key decisions YOU made and why. | Shows seniority — reasoning > mechanics. |
| **Result** | Quantify: latency, cost, uptime, delivery speed, revenue. | Makes the story credible and memorable. |

---

## "Introduce Yourself" Template (60 seconds)

1. **Role** — "I'm a senior .NET/Azure integration engineer with 6+ years..."
2. **Stack** — "...primarily working in C#, Azure Service Bus, Azure Functions, and Angular."
3. **Current project** — "Right now I'm building/integrating [system] that [does X] for [audience]."
4. **Impact** — "That's reduced [metric] by X% / enabled [business outcome]."
5. **Why here** — One sentence linking your background to this role.

---

## How to Explain Your Project Architecture

Present in this order — zoom out to zoom in:
1. **Business problem** — what pain does the system solve?
2. **System boundary** — what's in scope, what's not (context diagram in words).
3. **Key components** — services, queues, databases, external APIs.
4. **Data flow** — how a key request travels end-to-end.
5. **Cross-cutting concerns** — auth, observability, error handling, retry.
6. **Trade-offs made** — what you chose and what you gave up.

---

## How to Justify a Design Decision (e.g. Clean Architecture)

Frame every decision as a conscious trade-off, not a preference:

> "We chose Clean Architecture because [requirement/constraint]. The trade-off was [extra complexity/boilerplate], which we accepted because [benefit outweighed cost]. An alternative was [option], but it fell short because [reason]. In hindsight I would [same / change X] because [evidence]."

Key axis: **Maintainability vs. speed-to-market | Consistency vs. flexibility | Cost vs. resilience.**

---

## How to Answer "A Challenge You Faced"

STAR skeleton with what makes it strong:

- **Situation** — non-trivial constraint (legacy, deadline, unclear requirements, org friction).
- **Task** — your specific ownership, not "we had to..."
- **Action** — at least two distinct decisions; mention what you ruled out and why.
- **Result** — concrete outcome + secondary benefit (e.g., faster, cheaper, now a team standard).

**Strong signal:** you'd make the same call again AND you know what you'd improve. Weak signal: "it all worked out fine."

---

## How to Answer "A Production Issue"

Walk through the lifecycle explicitly:

1. **Detect** — how you found it (alert, customer report, dashboards, log query).
2. **Triage** — blast radius, SLA impact, who you looped in and when.
3. **Mitigate** — fastest safe action to stop bleeding (feature flag, rollback, scale-out).
4. **Root-cause** — what actually caused it (code, config, dependency, data anomaly).
5. **Prevent** — what you shipped afterward (test, alert, runbook, architecture change).

**Bonus:** mention the post-mortem and what the team learned, not just what you fixed.

---

## Power Phrases to Sound Senior

- "I owned end-to-end delivery of..."
- "I weighed [option A] vs [option B] and chose [A] because [trade-off]."
- "That reduced p99 latency from X ms to Y ms."
- "I drove alignment across [teams] by..."
- "We cut infrastructure cost by X% by..."
- "I set up the observability layer so the next incident took minutes, not hours."
- "I made the call and I'd make the same one again, with one change: ..."

---

## Red Flags to Avoid

- **Blaming** — "the team didn't communicate well" (say what YOU did to fix it).
- **Vagueness** — "it was complex" without specifics.
- **No metrics** — outcomes without numbers sound like opinions.
- **No 'I'** — "we did everything" hides your individual contribution.
- **No conclusion** — STAR stories must end; don't trail off.
- **Over-engineering pride** — bragging about complexity you introduced without business need.
- **Victim framing** — "I had no choice" (you always have trade-offs; own the one you picked).

---

## Quick-Recall Checklist

- [ ] Every answer uses I, not just we.
- [ ] Result has at least one number.
- [ ] I named the trade-off, not just the solution.
- [ ] I can answer "what would you do differently?" for each story.
- [ ] Intro is under 60 seconds.
- [ ] Architecture explanation starts with the business problem.
- [ ] Production issue answer covers all 5 lifecycle steps.
- [ ] No blame, no vagueness, no trailing off.
