# Question Bank — Spec & Content Index

This folder is the **specification** for the Question Bank feature. The actual **content** lives in
`../data/`. Build order and Sonnet prompts are in `../PHASE1_PLAN.md`.

> Scope: a single-page, topic-wise question bank with collapsible answers + per-topic cheat sheets.
> **No Junior/Mid/Senior levels. No backend.** (Job Radar and the 6-step Learn modules are out of scope for now.)

---

## What exists right now

**Content (`../data/`) — ready to use:**
- `topics.json` — index of 8 topics
- `questions/*.json` — **210 questions** (csharp 44, angular 33, aspnet 29, efcore 26, architecture 23, sql 22, devops 18, behavioral 15)
- `cheatsheets/*.md` — one cheat sheet per topic

**Spec (this folder):**
| File | What it is |
|------|-----------|
| `02-data-model.md` | The JSON schema — read this to understand the shape |
| `03-ui-design.md` | Screen layout + the three answer-reveal states (ASCII mockups) |
| `04-models.ts` | Exact TypeScript interfaces — drop straight into the app |
| `05-data-service.md` | The Angular service design |
| `06-topic-sidebar.component.md` / `07-question-list.component.md` | Component specs |
| `sample-data/` | Tiny illustrative copy used by the docs (the **live** bank is `../data/`) |

**Build plan:** `../PHASE1_PLAN.md` — step-by-step with a copy-paste Sonnet prompt per step.

---

## The hierarchy

```
Topic (C#)  →  Subtopic (Fundamentals)  →  Question ("What is the CLR?")  →  layered answer
```

Each answer is **progressive**: collapsed card → one-liner → full answer (key points, deep dive,
code, analogy, follow-ups, red flags). Easy questions fill only the one-liner; hard ones fill the rest.

---

## ⭐ How to manage / grow the bank (your weekly workflow)

**Recommended layout: one JSON file per topic + one index.** Not one giant file. (Why: you edit only
the relevant topic, the app lazy-loads per topic, and a typo can only break one topic.)

**Add a question:**
1. Open the topic file, e.g. `../data/questions/csharp.json`.
2. Find the right subtopic's `questions` array.
3. Append, bumping the id sequence:
```json
{
  "id": "csharp-fund-005",
  "q": "Your question?",
  "type": "conceptual",
  "freq": "medium",
  "tags": ["..."],
  "answer": { "oneLiner": "The memorize-this answer." }
}
```
4. Add `keyPoints` / `detail` / `code` when you want depth. No code changes, no rebuild.

**Add a "predict the output" / hard code question:** set `"type": "code"`, put the snippet in
`answer.code` (with `lang`), ask "what does this print?" in `q`, and explain in `oneLiner` + `detail`.

**Add a topic:** create `../data/questions/<topic>.json` (same shape) + one line in `topics.json`.

**Update a cheat sheet:** just edit `../data/cheatsheets/<topic>.md` (plain Markdown).

**Keep JSON valid:** edit in VS Code (it flags trailing commas / unclosed brackets). After editing,
the quick sanity check is the same one I ran: parse every file and count questions.

---

## When you're ready to build
Go to `../PHASE1_PLAN.md` and work through Step 0 → Step 7, pasting each prompt into Sonnet.
First thing it does is copy `../data/` into the app's `src/assets/data/`.
