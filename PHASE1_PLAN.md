# Phase 1 — Build Plan & Sonnet Prompts (Question Bank + Cheat Sheets)

> **Goal of Phase 1:** one page where you browse all topics in a collapsible tree, expand/collapse
> any question to reveal its answer, read a per-topic cheat sheet to learn, search, filter by type
> (including code / "predict the output" questions), and bookmark — all reading from local JSON.
> **No levels. No backend. No login.**

What's already built for you (content is DONE):
- `data/topics.json` — the topic index (8 topics)
- `data/questions/*.json` — **210 questions** across C#, ASP.NET, EF Core, SQL, Angular, Architecture, DevOps, Behavioral
- `data/cheatsheets/*.md` — one cheat sheet per topic
- `question-bank-spec/04-models.ts` — the exact TypeScript interfaces
- `question-bank-spec/02-data-model.md` — the JSON schema reference
- `question-bank-spec/03-ui-design.md` — the screen layout

This file tells you **what to build and in what order**, with a **copy-paste prompt for Sonnet** at
each step. Do the steps in order — each one builds on the last.

---

## How to use this with Sonnet

1. Open a Sonnet session **in the folder where you'll create the Angular app**.
2. For each step below, paste the **PROMPT** block. Where a prompt says *"attach/​paste this file"*,
   give Sonnet the referenced file (`04-models.ts`, `03-ui-design.md`, etc.) so it has the exact shapes.
3. Run the app after each step and eyeball it before moving on. Small steps = fewer bugs.

---

## Target structure (what you'll end up with)

```
prepdeck/
├── src/
│   ├── app/
│   │   └── question-bank/
│   │       ├── models/question-bank.models.ts      ← from 04-models.ts
│   │       ├── question-bank.service.ts            ← Step 2
│   │       ├── question-bank.page.ts/html/scss     ← Step 6 (the single page)
│   │       └── components/
│   │           ├── topic-sidebar/                  ← Step 3
│   │           ├── search-filter/                  ← Step 4
│   │           ├── question-card/                  ← Step 5
│   │           └── cheat-sheet-panel/              ← Step 5
│   ├── assets/
│   │   └── data/                                   ← copy the whole /data folder here
│   │       ├── topics.json
│   │       ├── questions/*.json
│   │       └── cheatsheets/*.md
│   └── styles.scss
└── angular.json
```

---

## Step 0 — Scaffold the Angular app

**PROMPT (paste to Sonnet):**
```
Create a new Angular 19 standalone app called "prepdeck" with routing and SCSS.
Requirements:
- Standalone components only (no NgModules), Angular signals for state.
- Install and configure ngx-markdown with Prism.js for syntax highlighting
  (languages: csharp, sql, typescript, bash). Import the markdown provider in
  app.config.ts and a Prism theme + the needed prism language scripts.
- Set up a single route "" that lazy-loads a QuestionBankPage component
  (I'll build it later — for now just a placeholder that says "Question Bank").
- Add a basic dark theme in styles.scss with CSS variables for background, surface,
  text, muted text, border, and an accent color.
Give me the exact terminal commands and the final app.config.ts and app.routes.ts.
```

After it scaffolds: **copy the entire `data/` folder into `src/assets/data/`** so the JSON and
cheat sheets are served as static assets.

---

## Step 1 — Drop in the models

**PROMPT:**
```
Create src/app/question-bank/models/question-bank.models.ts with EXACTLY the contents
of the file I'm pasting below. Do not change the shapes.

<paste the full contents of question-bank-spec/04-models.ts here>
```

---

## Step 2 — The data service (the brain)

Attach `question-bank-spec/04-models.ts` and `question-bank-spec/05-data-service.md` for reference.

**PROMPT:**
```
Build src/app/question-bank/question-bank.service.ts — an Angular standalone service,
providedIn: 'root', using inject(HttpClient) and signals. Use the models from
question-bank.models.ts (attached). Behaviour:

1. init(): GET assets/data/topics.json once → expose topics() as Signal<TopicNode[]>
   (each topic starts loaded:false, expanded:false, empty subtopics, questionCount:0).
2. toggleTopic(id): flip expanded. On first expand, lazy-load
   assets/data/questions/<file>.json, cache it in a Map<topicId, TopicFile>, and fill that
   topic node's subtopics + questionCount. Never re-fetch a cached topic. Expose
   loadingTopicId() so the UI can show a spinner.
3. select(topicId, subtopicId): set selected(). 
4. visibleQuestions(): computed Signal<QuestionView[]> = the selected subtopic's questions,
   mapped to QuestionView (add topic/subtopic names + bookmarked), filtered by the filter()
   signal: search matches q + tags (case-insensitive); type === 'all' or matches; 
   bookmarkedOnly. (There is NO level filter.)
5. filter(): WritableSignal<QuestionFilter> defaulting to EMPTY_FILTER. setFilter(patch),
   clearFilter().
6. Bookmarks in localStorage under key 'qbank.bookmarks' as a string[] of ids.
   isBookmarked(id), toggleBookmark(id) — back it with a signal so visibleQuestions recomputes.
7. Cheat sheets: cheatSheet(topicId) returns a signal/promise of the raw markdown from
   assets/data/cheatsheets/<topicId>.md, loaded lazily and cached. Expose loadCheatSheet(topicId).
8. error() signal set on any failed fetch.

Use firstValueFrom for the HTTP calls. No level anywhere.
```

---

## Step 3 — Topic sidebar (the collapsible tree)

Attach `question-bank-spec/06-topic-sidebar.component.md`.

**PROMPT:**
```
Build a standalone component qb-topic-sidebar (OnPush) at
src/app/question-bank/components/topic-sidebar/. Inject QuestionBankService.

- Render topics() as a list. Each topic row shows: caret (▸ collapsed / ▾ expanded),
  icon, name, and (once loaded) questionCount. Clicking the row calls toggleTopic(id).
- While loadingTopicId() === topic.id, show a small spinner on that row.
- When a topic is expanded, render its subtopics indented below; clicking a subtopic
  calls select(topicId, subtopicId) and highlights the active subtopic.
- Use Angular's new control flow (@for with track, @if).
- Keep styling minimal but clean using the theme CSS variables; full height, scrollable.
```

---

## Step 4 — Search + type filter bar

Attach `question-bank-spec/04-models.ts` (for QuestionType).

**PROMPT:**
```
Build a standalone component qb-search-filter (OnPush) at
src/app/question-bank/components/search-filter/. Inject QuestionBankService.

- A search text input bound to the filter; on input, call setFilter({ search: value }).
- A "Type" dropdown: All, Conceptual, Code, Comparison, Scenario, Design, Behavioral →
  setFilter({ type }).
- A "⭐ Bookmarked only" toggle → setFilter({ bookmarkedOnly }).
- A "Clear" button → clearFilter().
- NO level filter. Use signals + new control flow. Compact horizontal layout that wraps on mobile.
```

---

## Step 5 — Question card + cheat sheet panel

Attach `question-bank-spec/03-ui-design.md` (the "three answer states" section) and `04-models.ts`.

**PROMPT (question card):**
```
Build a standalone component qb-question-card (OnPush) at
src/app/question-bank/components/question-card/. 
Input: question = input.required<QuestionView>(). Inject QuestionBankService for bookmarks.

Three reveal states driven by local signals (collapsed → one-liner → full):
- Collapsed: header row only = [freq 🔥 if high] [type badge] · question text, a caret, and a
  bookmark toggle (🔖 / ⭐). Clicking the header expands to show answer.oneLiner (markdown).
- If the answer has any of keyPoints/detail/code/analogy/followUps/redFlags, show a
  "Show full answer ▾" button that expands the rest. If it has none, no button.
- Full view renders, ONLY for fields that exist: KEY POINTS (bullets), DEEP DIVE (detail markdown),
  a code block (use <markdown> or a Prism-highlighted <pre><code> with code.lang) + code.note,
  💡 ANALOGY, ➡ COMMON FOLLOW-UPS, 🚩 RED FLAGS.
- Render markdown fields with ngx-markdown. Animate expand/collapse (~150ms).
- toggleBookmark(question.id) on the bookmark control.
Use the layout in the attached 03-ui-design.md "three answer states" section as the visual spec.
```

**PROMPT (cheat sheet panel):**
```
Build a standalone component qb-cheat-sheet-panel (OnPush) at
src/app/question-bank/components/cheat-sheet-panel/.
Input: topicId = input.required<string>(). Inject QuestionBankService.

- A collapsible panel titled "📋 Cheat Sheet" — collapsed by default.
- On first expand, call loadCheatSheet(topicId) and render the returned markdown with <markdown>.
- Show a spinner while loading. When topicId changes, reset to collapsed.
```

---

## Step 6 — Assemble the single page

Attach `question-bank-spec/03-ui-design.md`.

**PROMPT:**
```
Build the QuestionBankPage standalone component at src/app/question-bank/question-bank.page.*
that composes everything into ONE page. Inject QuestionBankService; call init() in ngOnInit.

Layout (desktop): a left column = <qb-topic-sidebar>; a right column that shows:
  - if nothing selected: a hint "Pick a topic on the left to start."
  - else: a breadcrumb "Topic › Subtopic" + question count,
          <qb-cheat-sheet-panel [topicId]="selectedTopicId()">,
          <qb-search-filter>,
          then the list: @for over visibleQuestions() → <qb-question-card [question]="q">.
  - loading skeleton while loadingTopicId() is set; "No questions match. [Clear]" when empty;
    an error row with a Retry when error() is set.
Make the left column a slide-in drawer under 768px, toggled by a "☰ Topics" button.
Use the dark theme variables. Use new control flow throughout.
```

---

## Step 7 — Polish

**PROMPT:**
```
Polish the Question Bank page:
- Responsive: sidebar drawer on mobile, cards full-width, filter row wraps.
- Add a light/dark theme toggle in a slim top bar, persisted to localStorage.
- Smooth expand/collapse transitions; hover elevation on cards; sticky search/filter bar.
- Style code blocks and markdown tables to match the theme.
- Add a small "210 questions · 8 topics" stat somewhere in the header.
```

---

## Phase 1 "done" checklist
- [ ] App loads; sidebar shows 8 topics without fetching any topic file.
- [ ] Expanding a topic lazy-loads its JSON once and shows subtopics + counts.
- [ ] Selecting a subtopic lists its questions; cards expand/collapse (collapsed → one-liner → full).
- [ ] Cheat-sheet panel renders the topic's markdown.
- [ ] Search + Type filter + Bookmarked-only all work; bookmarks survive refresh.
- [ ] "Code" type questions (predict-the-output) render their snippet highlighted.
- [ ] Works on mobile (drawer).

## Later phases (not now)
- **Phase 2:** spaced-review marking ("got it / review"), per-question confidence, dashboard.
- **Phase 3:** mock-interview mode pulling random questions.
- **Phase 4:** deploy via GitHub Actions → Firebase Hosting; PWA/offline.
