# 03 — UI Design (Question Bank Page)

> One page, two panels: a **topic tree** on the left, **question cards** on the right.
> Both the tree and each card **expand/collapse**. Style matches the existing `UI_DESIGN.md`.

---

## Desktop layout

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                          ☀/🌙          │
├───────────────────────┬────────────────────────────────────────────────────────┤
│  TOPICS               │  🔍 Search questions...                                 │
│                       │  Level: [All ▾]   Type: [All ▾]   [⭐ Bookmarked]        │
│  ▾ 🔷 C#        (5)   │ ──────────────────────────────────────────────────────  │
│     • Fundamentals(4) │  C#  ›  Fundamentals                       4 questions   │
│     • OOP         (1) │                                                          │
│  ▸ 🌐 ASP.NET   (—)   │  ┌────────────────────────────────────────────────────┐ │
│  ▸ 🗄️ SQL       (—)   │  │ 🔥 junior · conceptual                      🔖    │ │
│  ▸ 🅰️ Angular   (—)   │  │ What is the CLR?                              ▸    │ │
│                       │  └────────────────────────────────────────────────────┘ │
│                       │  ┌────────────────────────────────────────────────────┐ │
│                       │  │ 🔥 mid · comparison                          🔖    │ │
│                       │  │ What is the difference between a struct and a      │ │
│                       │  │ class?                                        ▾    │ │
│                       │  │ ─────────────────────────────────────────────────  │ │
│                       │  │ A struct is a value type stored on the stack that │ │
│                       │  │ copies on assignment; a class is a reference type │ │
│                       │  │ on the heap that shares a reference.              │ │
│                       │  │                                                    │ │
│                       │  │              [ Show full answer ▾ ]                │ │
│                       │  └────────────────────────────────────────────────────┘ │
│                       │  ┌────────────────────────────────────────────────────┐ │
│                       │  │    mid · comparison                          🔖    │ │
│                       │  │ What is the difference between == and .Equals()? ▸ │ │
│                       │  └────────────────────────────────────────────────────┘ │
└───────────────────────┴────────────────────────────────────────────────────────┘
```

- **Left = `TopicSidebarComponent`** (file 06). `▸` collapsed / `▾` expanded.
  Expanding a topic the first time **lazy-loads** its JSON, then shows its subtopics + counts.
- **Right = `QuestionListComponent`** (file 07) — a header breadcrumb + a `SearchFilterComponent`
  (file 09) + a stack of `QuestionCardComponent`s (file 08).
- `(—)` count = topic not loaded yet; fills in after first expand.

---

## The three answer states of a question card

The card is the core interaction. **One question → three reveal levels.** This is what makes
"silly" and "hard" questions both comfortable: easy ones stop at level 1, hard ones go deep.

### State A — Collapsed (default)
```
┌────────────────────────────────────────────────────┐
│ 🔥 junior · conceptual                         🔖   │
│ What is the CLR?                                ▸   │   ← click row to expand
└────────────────────────────────────────────────────┘
```

### State B — One-liner shown (first click)
```
┌────────────────────────────────────────────────────┐
│ 🔥 junior · conceptual                         🔖   │
│ What is the CLR?                                ▾   │
│ ──────────────────────────────────────────────────  │
│ The CLR (Common Language Runtime) is .NET's virtual │
│ machine — it JIT-compiles IL to native code and     │
│ manages memory, type safety, and garbage collection.│
│                                                      │
│                 [ Show full answer ▾ ]               │   ← only if more fields exist
└────────────────────────────────────────────────────┘
```

### State C — Full answer (second click)
```
┌────────────────────────────────────────────────────┐
│ 🔥 junior · conceptual                         🔖   │
│ What is the CLR?                                ▾   │
│ ──────────────────────────────────────────────────  │
│ ONE-LINER                                            │
│ The CLR is .NET's virtual machine — it JIT-compiles  │
│ IL to native code and manages memory & GC.           │
│                                                      │
│ KEY POINTS                                           │
│  • Runs IL produced by the C# compiler, JIT-compiling│
│    it to native machine code                         │
│  • Automatic memory management via the GC            │
│  • Enforces type safety and security                 │
│  • Language-agnostic (C#, F#, VB → same IL)          │
│                                                      │
│ DEEP DIVE                                            │
│ When you build a C# project, the compiler does not   │
│ produce machine code directly… (markdown)            │
│                                                      │
│ ┌── code (text) ──────────────────────────────────┐ │
│ │ C# ─(csc)─► IL ─(CLR JIT)─► native ─► CPU         │ │
│ └──────────────────────────────────────────────────┘ │
│ The CLR is the box in the middle.                    │
│                                                      │
│ 💡 ANALOGY                                           │
│ The CLR is to .NET what the JVM is to Java.          │
│                                                      │
│ ➡ COMMON FOLLOW-UPS                                  │
│  → What's the difference between managed and unmanaged│
│  → What is IL, and why not compile to native?        │
│  → CLR vs CTS vs CLS?                                 │
│                                                      │
│ 🚩 RED FLAGS                                          │
│  ✗ Calling the CLR 'the .NET Framework' or 'the SDK' │
│  ✗ Saying C# compiles directly to machine code       │
│                                                      │
│                  [ Hide ▴ ]                          │
└────────────────────────────────────────────────────┘
```

> **Section rule:** render a section **only if its field exists** in the JSON.
> `csharp-fund-003` (`var`) has just a `oneLiner`, so it has no "Show full answer" button at all —
> it expands straight to the one-liner and stops.

---

## Header bits per card

```
[freq badge] [type badge]                                    [🔖 bookmark toggle]
```
- `freq: "high"` → 🔥 (omit for medium/low, or show a subtle dot).
- `type` → muted text/badge (`conceptual`, `code`, `comparison`, …).
- Bookmark toggles a `localStorage` set; filled ⭐ when on.
- **No level pill** — Junior/Mid/Senior was dropped.

## Cheat sheet panel (per topic)

At the top of the right panel, above the question list, show a collapsible **"📋 Cheat Sheet"**
(collapsed by default). On first expand it lazy-loads `assets/data/cheatsheets/<topicId>.md`
and renders it as Markdown — a one-page "learn it / get confident" summary for that topic.

```
┌────────────────────────────────────────────────────┐
│ 📋 Cheat Sheet — C#                            ▸    │   ← click to expand the learn module
└────────────────────────────────────────────────────┘
```

---

## Search & filter bar (file 09)

```
🔍 [ search box: matches question text + tags ]
Type: [ All | Conceptual | Code | Comparison | Scenario | Design | Behavioral ]
[ ⭐ Bookmarked only ]    [ Clear ]
```
> No level filter. The **Type** filter is how you isolate e.g. "Code" (predict-the-output) questions.
- Filtering is **across the loaded topic** (or across all loaded topics — your call;
  start with "within the selected topic", it's simpler and faster).
- When a search term is active, show matching questions **grouped by subtopic** with the
  match count in the breadcrumb (e.g. "C# · 3 results for 'boxing'").

---

## Empty / loading states

| Situation | Show |
|-----------|------|
| Topic file loading | A 3-row skeleton shimmer in the list panel |
| No questions match filter | "No questions match. [Clear filters]" |
| Bookmarked-only, none saved | "You haven't bookmarked any questions yet." |
| Topic file failed to load | "Couldn't load C# questions. [Retry]" |

---

## Mobile (< 768px)

```
┌────────────────────────────┐
│ NAVBAR        [☰ Topics]    │   ← tree becomes a slide-in drawer
├────────────────────────────┤
│ C# › Fundamentals           │
│ 🔍 search                    │
│ [All ▾] [All ▾] [⭐]         │
│ ┌────────────────────────┐  │
│ │ 🔥 junior · conceptual │  │
│ │ What is the CLR?    ▸  │  │
│ └────────────────────────┘  │
│ … cards stack full-width …  │
└────────────────────────────┘
```
- Sidebar collapses into a **drawer** opened by a `☰ Topics` button.
- Cards go full-width; filter row wraps.

---

## Theme & style notes
- Reuse the app's existing dark/light theme tokens and navbar (don't reinvent).
- Cards: subtle border, rounded corners, hover elevation; the whole header row is the click target.
- Animate expand/collapse with Angular `@if` + a CSS height/opacity transition (keep it quick, ~150ms).
- Code blocks: `ngx-markdown` + Prism (already in the stack) for `code.snippet`.
