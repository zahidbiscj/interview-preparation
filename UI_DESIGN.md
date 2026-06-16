# InterviewCracker — UI Design & Page Flow

> **This doc has two parts:**
> - **Part A — Phase 1 (current build):** the Question Bank + cheat sheets, on a single page. This is what we're building now; it matches `PHASE1_PLAN.md` and `question-bank-spec/`.
> - **Part B — Phase 2+ vision:** the full app (landing, 6-step Learn modules, mock interview, dashboard). Kept for reference only — **not** the current build.

---

# Part A — Phase 1: Question Bank (current build)

**Scope:** one page. Browse topics in a collapsible tree → expand any question to reveal a layered
answer → read a per-topic cheat sheet to learn → search, filter by type, bookmark. **No
Junior/Mid/Senior levels. No backend** — all content from local JSON, bookmarks in `localStorage`.

## Phase 1 navigation

There's effectively **one screen**. The whole feature is the Question Bank page; a slim top bar
holds the app name and a theme toggle.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  PrepDeck · Question Bank            210 questions · 8 topics        ☀/🌙       │
├──────────────────────────────────────────────────────────────────────────────┤
│                          QUESTION BANK PAGE (below)                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Desktop layout — two panels

Left = collapsible **topic tree**. Right = **cheat sheet** + **search/filter** + **question cards**.

```
┌───────────────────────┬────────────────────────────────────────────────────────┐
│  TOPICS               │  C#  ›  Fundamentals                       4 questions   │
│                       │ ──────────────────────────────────────────────────────  │
│  ▾ 🔷 C#        (44)  │  ┌────────────────────────────────────────────────────┐ │
│     • Fundamentals(4) │  │ 📋 Cheat Sheet — C#                          ▸     │ │
│     • OOP        (1)  │  └────────────────────────────────────────────────────┘ │
│  ▸ 🌐 ASP.NET   (29)  │                                                          │
│  ▸ 🗃️ EF Core   (—)   │  🔍 Search questions...                                 │
│  ▸ 🗄️ SQL       (—)   │  Type: [All ▾]            [ ⭐ Bookmarked ]   [ Clear ]  │
│  ▸ 🅰️ Angular   (—)   │ ──────────────────────────────────────────────────────  │
│  ▸ 🏗️ Architecture(—) │  ┌────────────────────────────────────────────────────┐ │
│  ▸ 🔧 DevOps    (—)   │  │ 🔥 conceptual                                🔖    │ │
│  ▸ 💼 Behavioral (—)  │  │ What is the CLR?                              ▸    │ │
│                       │  └────────────────────────────────────────────────────┘ │
│                       │  ┌────────────────────────────────────────────────────┐ │
│                       │  │ 🔥 comparison                                🔖    │ │
│                       │  │ What is the difference between a struct and a      │ │
│                       │  │ class?                                        ▾    │ │
│                       │  │ ─────────────────────────────────────────────────  │ │
│                       │  │ A struct is a value type stored on the stack that │ │
│                       │  │ copies on assignment; a class is a reference type │ │
│                       │  │ on the heap that shares a reference.              │ │
│                       │  │              [ Show full answer ▾ ]                │ │
│                       │  └────────────────────────────────────────────────────┘ │
└───────────────────────┴────────────────────────────────────────────────────────┘
```

- `▸` collapsed / `▾` expanded. `(—)` = topic not loaded yet; the count fills in after first expand.
- Expanding a topic the first time **lazy-loads** its JSON, then shows its subtopics + counts.
- Clicking a subtopic loads its questions into the right panel.

## Topic sidebar (the collapsible tree)

```
▾ 🔷 C#                 (44)     ← topic row: caret · icon · name · count. Click = expand/collapse
   • Fundamentals       (4)      ← subtopic row. Click = show its questions (highlights active)
   • OOP                (1)
▸ 🌐 ASP.NET Core       (29)     ← collapsed; click loads aspnet.json then expands
```

- Active subtopic is highlighted.
- A small spinner shows on a topic row while its file loads.
- On mobile this becomes a slide-in drawer (see below).

## Cheat sheet panel (per topic — the "learn it" module)

Sits at the top of the right panel, **collapsed by default**. On first expand it lazy-loads
`assets/data/cheatsheets/<topicId>.md` and renders it as Markdown — a one-page summary to study.

```
┌────────────────────────────────────────────────────┐         ┌────────────────────────────────────────────────────┐
│ 📋 Cheat Sheet — C#                          ▸     │   →    │ 📋 Cheat Sheet — C#                          ▾     │
└────────────────────────────────────────────────────┘         │ ─────────────────────────────────────────────────  │
                                                               │ ## Must-know one-liners                            │
                                                               │ • CLR = .NET's runtime (JIT + GC + type safety)    │
                                                               │ • Struct = value type (copy); Class = reference … │
                                                               │ | struct | class |  …comparison tables…            │
                                                               │ ## Common gotchas …                                │
                                                               └────────────────────────────────────────────────────┘
```

## Question card — the three answer states

The core interaction: **one question → three reveal levels.** Easy questions stop at level 1; hard
ones go deep. A section renders **only if that field exists** in the JSON (no empty boxes).

**State A — Collapsed (default)**
```
┌────────────────────────────────────────────────────┐
│ 🔥 conceptual                                  🔖   │
│ What is the CLR?                                ▸   │   ← click row to expand
└────────────────────────────────────────────────────┘
```

**State B — One-liner (first click)**
```
┌────────────────────────────────────────────────────┐
│ 🔥 conceptual                                  🔖   │
│ What is the CLR?                                ▾   │
│ ──────────────────────────────────────────────────  │
│ The CLR is .NET's virtual machine — it JIT-compiles │
│ IL to native code and manages memory & GC.          │
│                 [ Show full answer ▾ ]               │   ← only if more fields exist
└────────────────────────────────────────────────────┘
```

**State C — Full answer (second click)**
```
┌────────────────────────────────────────────────────┐
│ 🔥 conceptual                                  🔖   │
│ What is the CLR?                                ▾   │
│ ──────────────────────────────────────────────────  │
│ ONE-LINER     The CLR is .NET's virtual machine …   │
│                                                      │
│ KEY POINTS                                           │
│  • Runs IL produced by the C# compiler (JIT)         │
│  • Automatic memory management via the GC            │
│  • Enforces type safety and security                 │
│  • Language-agnostic (C#, F#, VB → same IL)          │
│                                                      │
│ DEEP DIVE     When you build a C# project, the …     │
│                                                      │
│ ┌── code ─────────────────────────────────────────┐ │
│ │ C# ─(csc)─► IL ─(CLR JIT)─► native ─► CPU         │ │   ← "code" type Qs (predict-the-
│ └──────────────────────────────────────────────────┘ │     output) put the snippet here
│                                                      │
│ 💡 ANALOGY   The CLR is to .NET what the JVM is …    │
│ ➡ FOLLOW-UPS  → managed vs unmanaged · → what is IL  │
│ 🚩 RED FLAGS  ✗ calling the CLR 'the .NET Framework' │
│                  [ Hide ▴ ]                          │
└────────────────────────────────────────────────────┘
```

### Header bits per card
```
[freq 🔥 if high] [type badge]                              [🔖 bookmark toggle]
```
- `freq:"high"` → 🔥 (omit otherwise). `type` → muted badge (`conceptual`, `code`, `comparison`, …).
- Bookmark toggles a `localStorage` set; filled ⭐ when on.
- **No level pill.**

## Search & filter bar
```
🔍 [ search box: matches question text + tags ]
Type: [ All | Conceptual | Code | Comparison | Scenario | Design | Behavioral ]
[ ⭐ Bookmarked only ]    [ Clear ]
```
- No level filter. The **Type** filter is how you isolate e.g. "Code" (predict-the-output) questions.
- Filtering runs within the selected topic.

## Empty / loading states
| Situation | Show |
|-----------|------|
| Nothing selected | "Pick a topic on the left to start." |
| Topic file loading | 3-row skeleton shimmer |
| No questions match | "No questions match. [Clear filters]" |
| Bookmarked-only, none saved | "You haven't bookmarked any questions yet." |
| Topic file failed | "Couldn't load C# questions. [Retry]" |

## Mobile (< 768px)
```
┌────────────────────────────┐
│ PrepDeck       [☰ Topics]   │   ← tree becomes a slide-in drawer
├────────────────────────────┤
│ C# › Fundamentals           │
│ 📋 Cheat Sheet          ▸   │
│ 🔍 search                    │
│ Type:[All ▾]  [⭐]  [Clear]  │
│ ┌────────────────────────┐  │
│ │ 🔥 conceptual          │  │
│ │ What is the CLR?    ▸  │  │
│ └────────────────────────┘  │
│ … cards stack full-width …  │
└────────────────────────────┘
```

## Component map (matches PHASE1_PLAN.md)
| Region | Component | Step |
|--------|-----------|------|
| Whole page | `QuestionBankPage` | 6 |
| Left tree | `qb-topic-sidebar` | 3 |
| Cheat sheet panel | `qb-cheat-sheet-panel` | 5 |
| Search + type + bookmark | `qb-search-filter` | 4 |
| One question card | `qb-question-card` | 5 |
| Data/state | `QuestionBankService` | 2 |

---

# Part B — Phase 2+ Vision (reference — NOT the current build)

> ⚠️ The screens below describe the **full long-term app** and predate the Phase 1 scope decision.
> They still show Junior/Mid/Senior levels and the 6-step Learn modules, which are **deferred**.
> Use **Part A** as the source of truth for what we're building now.

---

## Navigation Flow (Site Map)

```
                            ┌─────────────┐
                            │  LANDING    │
                            │  PAGE       │
                            └──────┬──────┘
                                   │
                          Select Level
                    ┌──────┼──────┬──────┐
                    ▼      ▼      ▼      ▼
                 Junior   Mid  Senior  (saved)
                    │      │      │      │
                    └──────┴──────┴──────┘
                                   │
                            ┌──────▼──────┐
                            │   HOME      │
                            │  DASHBOARD  │
                            └──────┬──────┘
                                   │
              ┌────────┬───────────┼───────────┬────────┐
              ▼        ▼           ▼           ▼        ▼
         ┌────────┐┌────────┐┌──────────┐┌────────┐┌────────┐
         │ LEARN  ││QUESTION││  MOCK    ││COMPARE ││ CHEAT  │
         │MODULES ││ BANK   ││INTERVIEW ││ TABLES ││ SHEETS │
         └───┬────┘└───┬────┘└────┬─────┘└────────┘└────────┘
             │         │          │
        ┌────▼────┐    │     ┌────▼─────┐
        │ MODULE  │    │     │INTERVIEW │
        │ DETAIL  │◄───┘     │ SESSION  │
        │(6 steps)│          └────┬─────┘
        └─────────┘               │
                             ┌────▼─────┐
                             │SCORECARD │
                             └──────────┘
```

---

## Global Layout (Every Page)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                         TOP NAVBAR                                      │
│  ┌──────┐  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    ┌───────┐  │
│  │ LOGO │  │Learn │ │Q Bank│ │Mock  │ │Compar│ │Cheat │    │ Mid ▼ │  │
│  │  IC  │  │      │ │      │ │Intrvw│ │isons │ │Sheet │    │Level  │  │
│  └──────┘  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘    └───────┘  │
│                                                              ☀/🌙 🔔   │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│                         PAGE CONTENT                                     │
│                                                                          │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: ████████░░░░ 42/90 modules    Streak: 7 days    Ready: 46%  │
└──────────────────────────────────────────────────────────────────────────┘
```

- **Navbar:** Logo, 5 nav links, level switcher dropdown, theme toggle, notification bell
- **Footer bar:** sticky bottom bar showing quick progress stats
- **Responsive:** on mobile the navbar collapses to hamburger menu, footer hides

---

## Page 1: Landing Page (First Visit / No Level Selected)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                                                                          │
│                        INTERVIEW CRACKER                                 │
│                                                                          │
│              Crack any .NET Full Stack interview.                         │
│          Learn it. Exercise it. Prove you know it.                       │
│                                                                          │
│                                                                          │
│         ┌─────────────────────────────────────────────┐                  │
│         │       What level are you preparing for?      │                  │
│         └─────────────────────────────────────────────┘                  │
│                                                                          │
│    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                 │
│    │              │  │              │  │              │                 │
│    │   JUNIOR     │  │     MID      │  │   SENIOR     │                 │
│    │              │  │              │  │              │                 │
│    │  0-2 years   │  │  2-5 years   │  │  5+ years    │                 │
│    │              │  │              │  │              │                 │
│    │ Fundamentals │  │  Internals   │  │ Trade-offs   │                 │
│    │ Syntax       │  │  Debugging   │  │ System Design│                 │
│    │ Basic OOP    │  │  Architecture│  │ Decision     │                 │
│    │              │  │              │  │ Making       │                 │
│    │ 90 modules   │  │ 90 modules   │  │ 90 modules   │                 │
│    │ Beginner     │  │ Intermediate │  │ Advanced     │                 │
│    │ depth        │  │ depth        │  │ depth        │                 │
│    │              │  │              │  │              │                 │
│    │  [Select →]  │  │  [Select →]  │  │  [Select →]  │                 │
│    └──────────────┘  └──────────────┘  └──────────────┘                 │
│                                                                          │
│                                                                          │
│    ─────────────── How it works ───────────────                          │
│                                                                          │
│    ① Learn          ② Exercise         ③ Remember                       │
│    Read concise     Predict output,    Mnemonics &                      │
│    concept cards    spot bugs, fill    analogies that                    │
│    with code        gaps — prove you   stick in your                    │
│    examples         actually know it   brain forever                    │
│                                                                          │
│    ④ Rehearse        ⑤ Practice         ⑥ Track                         │
│    Practice the     Mock interviews    Dashboard shows                  │
│    exact interview  with real          what you know                    │
│    answer format    questions          and what to fix                  │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Page 2: Home Dashboard (After Level Selected)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Welcome back! You're preparing for MID-LEVEL interviews.               │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │  QUICK RECALL — Can you explain this in 10 seconds?              │   │
│  │                                                                   │   │
│  │  "What's the difference between IEnumerable and IQueryable?"     │   │
│  │                                                                   │   │
│  │  [ Show Answer ]              [ I Know This ✓ ] [ Not Sure ✗ ]   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌──── YOUR PROGRESS ──────────────────────────────────────────────┐    │
│  │                                                                  │    │
│  │  Overall Readiness          Modules                Streak       │    │
│  │  ┌──────────┐              ┌──────────┐           ┌────────┐   │    │
│  │  │          │              │          │           │        │   │    │
│  │  │   46%    │              │  12/90   │           │ 7 days │   │    │
│  │  │  ██████  │              │ ████░░░░ │           │ 🔥🔥🔥 │   │    │
│  │  │          │              │          │           │        │   │    │
│  │  └──────────┘              └──────────┘           └────────┘   │    │
│  │                                                                  │    │
│  │  Weak Areas (Radar Chart)        Recent Activity                │    │
│  │  ┌──────────────────┐            ┌──────────────────────┐      │    │
│  │  │     C# OOP       │            │ ✓ Struct vs Class    │      │    │
│  │  │    /\    SQL      │            │ ✓ Value vs Ref       │      │    │
│  │  │   /  \  /\        │            │ ✗ Boxing (78% - redo)│      │    │
│  │  │  / EF \ / \       │            │ → String vs SB (next)│      │    │
│  │  │ /Angular\ DI      │            │                      │      │    │
│  │  └──────────────────┘            └──────────────────────┘      │    │
│  └──────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌──── SPACED REVIEW — Due Today (3 modules) ─────────────────────┐    │
│  │                                                                  │    │
│  │  ⏰ Value vs Ref Types     (last reviewed 7 days ago) [Review]  │    │
│  │  ⏰ Abstract vs Interface  (last reviewed 3 days ago) [Review]  │    │
│  │  ⏰ DI Lifetimes           (last reviewed 1 day ago)  [Review]  │    │
│  │                                                                  │    │
│  └──────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌──── CONTINUE LEARNING ─────────────────────────────────────────┐    │
│  │                                                                  │    │
│  │  Next up: String vs StringBuilder (Module 4/90)                 │    │
│  │                                                                  │    │
│  │  [ Continue Learning → ]     [ Browse All Tracks ]              │    │
│  │                                                                  │    │
│  └──────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  ┌──── QUICK ACTIONS ─────────────────────────────────────────────┐    │
│  │                                                                  │    │
│  │  [📚 Learn Modules]  [❓ Question Bank]  [🎯 Mock Interview]    │    │
│  │  [⚖ Comparisons]     [📋 Cheat Sheets]                         │    │
│  │                                                                  │    │
│  └──────────────────────────────────────────────────────────────────┘    │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: ████░░░░░░░░ 12/90 modules    Streak: 7 days   Ready: 46%  │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Page 3: Learn Modules — Track Selection

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  LEARN MODULES                                         Level: Mid       │
│  Pick a track. Each module = 10-20 min.                                 │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │  🔍 Search modules...                                     [Filter]│   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── C# FUNDAMENTALS ──────────────────────────── 3/7 complete ───┐   │
│  │                                                                  │   │
│  │  ✅ 1. Value vs Reference Types          15 min    [Review]     │   │
│  │  ✅ 2. Struct vs Class                   12 min    [Review]     │   │
│  │  ✅ 3. Boxing / Unboxing                 10 min    [Review]     │   │
│  │  🔓 4. String vs StringBuilder           ~15 min   [Start →]   │   │
│  │  🔒 5. Nullable Types                    ~12 min   locked      │   │
│  │  🔒 6. Enums Deep Dive                   ~10 min   locked      │   │
│  │  🔒 7. Type Casting                      ~12 min   locked      │   │
│  │                                                                  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── C# OOP ───────────────────────────────────── 0/6 complete ───┐   │
│  │                                                                  │   │
│  │  🔓 8. Abstract vs Interface             ~15 min   [Start →]   │   │
│  │  🔒 9. Virtual vs Override vs New         ~12 min   locked      │   │
│  │  🔒 10. Sealed Classes                    ~10 min   locked      │   │
│  │  🔒 11. Access Modifiers                  ~10 min   locked      │   │
│  │  🔒 12. Static vs Instance                ~12 min   locked      │   │
│  │  🔒 13. Partial Classes                   ~8 min    locked      │   │
│  │                                                                  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── C# COLLECTIONS ───────────────────────────── 0/4 complete ───┐   │
│  │                                                                  │   │
│  │  🔓 14. Array vs List vs Dictionary      ~15 min   [Start →]   │   │
│  │  🔒 15. IEnumerable vs ICollection       ~12 min   locked      │   │
│  │  🔒 16. Stack / Queue / HashSet           ~10 min   locked      │   │
│  │  🔒 17. Concurrent Collections            ~12 min   locked      │   │
│  │                                                                  │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── SQL SERVER ────────────────────────────────── 0/7 complete ───┐  │
│  │  ...                                                              │  │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── ANGULAR ───────────────────────────────────── 0/7 complete ───┐  │
│  │  ...                                                              │  │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  (more tracks: ASP.NET Core, EF Core, Architecture, etc.)               │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: ████░░░░░░░░ 12/90 modules    Streak: 7 days   Ready: 46%  │
└──────────────────────────────────────────────────────────────────────────┘
```

**States:**
- ✅ = Completed (can review anytime)
- 🔓 = Unlocked (ready to start — first in track OR previous is done)
- 🔒 = Locked (must complete the previous module first)

---

## Page 4: Module Detail — Step 1 (One-Liner)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ◀ Back to Modules    C# Fundamentals > Module 2 of 7                   │
│                                                                          │
│  ┌──── STEP PROGRESS ────────────────────────────────────────────┐      │
│  │  [●] Step 1    ○ Step 2    ○ Step 3    ○ Step 4    ○ Step 5   │      │
│  │  One-liner    Visual     Code       Memory    Exercise       │      │
│  │               Breakdown  Example    Anchors                   │      │
│  │                                                    ○ Step 6   │      │
│  │                                                    Rehearsal  │      │
│  └───────────────────────────────────────────────────────────────┘      │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  STRUCT vs CLASS                                    Module 2/90   │   │
│  │                                                                   │   │
│  │  ─────────────────────────────────────────────────────────────    │   │
│  │  STEP 1 — THE ONE-LINER                                          │   │
│  │  Memorize this. It's the first thing you say in the interview.   │   │
│  │  ─────────────────────────────────────────────────────────────    │   │
│  │                                                                   │   │
│  │  Interviewer asks:                                                │   │
│  │  ┌─────────────────────────────────────────────────────────┐     │   │
│  │  │  "What's the difference between struct and class?"      │     │   │
│  │  └─────────────────────────────────────────────────────────┘     │   │
│  │                                                                   │   │
│  │  Your answer:                                                     │   │
│  │  ┌─────────────────────────────────────────────────────────┐     │   │
│  │  │                                                         │     │   │
│  │  │  "Struct is a value type stored on the stack that       │     │   │
│  │  │   copies on assignment. Class is a reference type       │     │   │
│  │  │   stored on the heap that shares a reference on         │     │   │
│  │  │   assignment."                                          │     │   │
│  │  │                                                         │     │   │
│  │  │                                         [ Copy 📋 ]    │     │   │
│  │  └─────────────────────────────────────────────────────────┘     │   │
│  │                                                                   │   │
│  │                                                                   │   │
│  │  Say it out loud 3 times. Don't just read it —                   │   │
│  │  close your eyes and repeat it from memory.                      │   │
│  │                                                                   │   │
│  │                                                                   │   │
│  │                                     [ I've memorized it → ]      │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: ████░░░░░░░░ 12/90 modules    Streak: 7 days   Ready: 46%  │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Page 5: Module Detail — Step 2 (Visual Breakdown)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ◀ Back to Modules    C# Fundamentals > Module 2 of 7                   │
│                                                                          │
│  ┌──── STEP PROGRESS ────────────────────────────────────────────┐      │
│  │  ✓ Step 1   [●] Step 2    ○ Step 3    ○ Step 4    ○ Step 5   │      │
│  └───────────────────────────────────────────────────────────────┘      │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  STEP 2 — VISUAL BREAKDOWN                                       │   │
│  │  Understand the differences at a glance.                         │   │
│  │                                                                   │   │
│  │  ┌───────────────────┬───────────────────┐                       │   │
│  │  │      STRUCT        │      CLASS         │                       │   │
│  │  ├───────────────────┼───────────────────┤                       │   │
│  │  │ Value type         │ Reference type     │                       │   │
│  │  │ Stack (usually)    │ Heap               │                       │   │
│  │  │ Copied on assign   │ Reference shared   │                       │   │
│  │  │ No inheritance     │ Supports inherit   │                       │   │
│  │  │ Cannot be null     │ Can be null        │                       │   │
│  │  │ No finalizer       │ Has finalizer      │                       │   │
│  │  │ Parameterless ctor │ Custom ctors OK    │                       │   │
│  │  │ Sealed implicitly  │ Can be abstract    │                       │   │
│  │  └───────────────────┴───────────────────┘                       │   │
│  │                                                                   │   │
│  │  ── When to use which? ──────────────────────────────────────    │   │
│  │                                                                   │   │
│  │  USE STRUCT when:              USE CLASS when:                    │   │
│  │  ✓ Small data (<16 bytes)      ✓ Complex objects                  │   │
│  │  ✓ Immutable data              ✓ Need inheritance                 │   │
│  │  ✓ Short-lived values          ✓ Need null                        │   │
│  │  ✓ Tight loops (perf)          ✓ Shared references needed         │   │
│  │                                                                   │   │
│  │  ── What happens on assignment ──────────────────────────────    │   │
│  │                                                                   │   │
│  │  STRUCT:                         CLASS:                           │   │
│  │  ┌───┐    copy    ┌───┐          ┌───┐         ┌───┐             │   │
│  │  │ a │ ────────→ │ b │          │ a │──ref──→│OBJ│             │   │
│  │  │X=1│           │X=1│          └───┘    ↗   └───┘             │   │
│  │  └───┘           └───┘          ┌───┐──ref──┘                    │   │
│  │  (independent)                  │ b │                             │   │
│  │                                 └───┘                             │   │
│  │                                 (same object)                     │   │
│  │                                                                   │   │
│  │  ── Mid-Level Depth ─────────────────────────────────────────    │   │
│  │  • Structs are allocated inline — no heap allocation overhead    │   │
│  │  • Boxing occurs when a struct is cast to object or interface    │   │
│  │  • Default(T) for struct = all fields zeroed, not null           │   │
│  │                                                                   │   │
│  │                         [ ◀ Back ]    [ Next: Code Example → ]   │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: ████░░░░░░░░ 12/90 modules    Streak: 7 days   Ready: 46%  │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Page 6: Module Detail — Step 3 (Code Example)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ◀ Back to Modules    C# Fundamentals > Module 2 of 7                   │
│                                                                          │
│  ┌──── STEP PROGRESS ────────────────────────────────────────────┐      │
│  │  ✓ Step 1    ✓ Step 2   [●] Step 3    ○ Step 4    ○ Step 5   │      │
│  └───────────────────────────────────────────────────────────────┘      │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  STEP 3 — CODE EXAMPLE                                           │   │
│  │  Trace each line mentally. Predict what happens.                 │   │
│  │                                                                   │   │
│  │  ── Example 1: Struct (copies on assign) ────────────────────    │   │
│  │  ┌────────────────────────────────────────────────────────┐      │   │
│  │  │  1 │ struct Point { public int X; public int Y; }      │      │   │
│  │  │  2 │                                                    │      │   │
│  │  │  3 │ Point a = new Point { X = 1, Y = 2 };             │      │   │
│  │  │  4 │ Point b = a;     // ← b gets a COPY of a          │      │   │
│  │  │  5 │ b.X = 99;        // ← only b changes              │      │   │
│  │  │  6 │                                                    │      │   │
│  │  │  7 │ Console.WriteLine(a.X);  // → 1 (unchanged!)      │      │   │
│  │  │  8 │ Console.WriteLine(b.X);  // → 99                  │      │   │
│  │  └────────────────────────────────────────────────────────┘      │   │
│  │                                                                   │   │
│  │  Line-by-line:                                                    │   │
│  │  ┌─ Line 3: a is created with X=1, Y=2                          │   │
│  │  ├─ Line 4: b is a FULL COPY of a (separate memory)             │   │
│  │  ├─ Line 5: b.X becomes 99, but a.X stays 1                     │   │
│  │  └─ Line 7: prints 1 — because struct = independent copies      │   │
│  │                                                                   │   │
│  │  ── Example 2: Class (shares reference) ─────────────────────    │   │
│  │  ┌────────────────────────────────────────────────────────┐      │   │
│  │  │  1 │ class Person { public string Name; }              │      │   │
│  │  │  2 │                                                    │      │   │
│  │  │  3 │ Person p1 = new Person { Name = "Alice" };         │      │   │
│  │  │  4 │ Person p2 = p1;  // ← p2 points to SAME object    │      │   │
│  │  │  5 │ p2.Name = "Bob"; // ← changes the shared object   │      │   │
│  │  │  6 │                                                    │      │   │
│  │  │  7 │ Console.WriteLine(p1.Name);  // → "Bob" !!        │      │   │
│  │  └────────────────────────────────────────────────────────┘      │   │
│  │                                                                   │   │
│  │  Line-by-line:                                                    │   │
│  │  ┌─ Line 3: p1 creates a Person on the heap                     │   │
│  │  ├─ Line 4: p2 = p1 means BOTH point to the same object         │   │
│  │  ├─ Line 5: changing p2.Name also changes p1.Name                │   │
│  │  └─ Line 7: prints "Bob" — because class = shared reference     │   │
│  │                                                                   │   │
│  │  KEY TAKEAWAY:                                                    │   │
│  │  ┌─────────────────────────────────────────────────────────┐     │   │
│  │  │ Struct assignment = new copy.  Class assignment = alias.│     │   │
│  │  └─────────────────────────────────────────────────────────┘     │   │
│  │                                                                   │   │
│  │                        [ ◀ Back ]    [ Next: Memory Anchors → ]  │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: ████░░░░░░░░ 12/90 modules    Streak: 7 days   Ready: 46%  │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Page 7: Module Detail — Step 4 (Memory Anchors)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ◀ Back to Modules    C# Fundamentals > Module 2 of 7                   │
│                                                                          │
│  ┌──── STEP PROGRESS ────────────────────────────────────────────┐      │
│  │  ✓ Step 1    ✓ Step 2    ✓ Step 3   [●] Step 4    ○ Step 5   │      │
│  └───────────────────────────────────────────────────────────────┘      │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  STEP 4 — MEMORY ANCHORS                                         │   │
│  │  Tricks to make this stick in your brain forever.                │   │
│  │                                                                   │   │
│  │  ┌─── ANALOGY ──────────────────────────────────────────────┐    │   │
│  │  │                                                          │    │   │
│  │  │  Struct = PHOTOCOPY                                      │    │   │
│  │  │  You photocopy a document and give it away.              │    │   │
│  │  │  They scribble on their copy — yours stays clean.        │    │   │
│  │  │                                                          │    │   │
│  │  │  Class = SHARED GOOGLE DOC                               │    │   │
│  │  │  You share a link to a Google Doc.                       │    │   │
│  │  │  They edit it — you see the exact same changes.          │    │   │
│  │  │                                                          │    │   │
│  │  └──────────────────────────────────────────────────────────┘    │   │
│  │                                                                   │   │
│  │  ┌─── MNEMONIC ─────────────────────────────────────────────┐    │   │
│  │  │                                                          │    │   │
│  │  │  S-S-S  =  Struct, Stack, Separate copy                  │    │   │
│  │  │  C-C-C  =  Class, (heap) Connected, shared reference    │    │   │
│  │  │                                                          │    │   │
│  │  │  "Struct Stays Separate, Class Connects"                 │    │   │
│  │  │                                                          │    │   │
│  │  └──────────────────────────────────────────────────────────┘    │   │
│  │                                                                   │   │
│  │  ┌─── RULE OF THUMB ───────────────────────────────────────┐    │   │
│  │  │                                                          │    │   │
│  │  │  "Fits on a Post-it? → Struct.                           │    │   │
│  │  │   Needs a full page? → Class."                           │    │   │
│  │  │                                                          │    │   │
│  │  └──────────────────────────────────────────────────────────┘    │   │
│  │                                                                   │   │
│  │  ┌─── GOTCHA ──────────────────────────────────────────────┐    │   │
│  │  │                                                          │    │   │
│  │  │  ⚠ "Mutable struct = hidden bug factory"                │    │   │
│  │  │                                                          │    │   │
│  │  │  list[0].X = 5;  // This modifies a COPY, not the       │    │   │
│  │  │                   // struct in the list. Silent failure.  │    │   │
│  │  │                                                          │    │   │
│  │  └──────────────────────────────────────────────────────────┘    │   │
│  │                                                                   │   │
│  │  ┌─── INTERVIEW TRICK ────────────────────────────────────┐     │   │
│  │  │                                                          │    │   │
│  │  │  When asked "struct vs class", answer in this order:     │    │   │
│  │  │  1. One-liner (value type vs reference type)             │    │   │
│  │  │  2. Stack vs Heap                                        │    │   │
│  │  │  3. Copy vs Reference behavior                           │    │   │
│  │  │  4. Photocopy analogy (interviewers love this)           │    │   │
│  │  │  5. When to use each                                     │    │   │
│  │  │  6. Drop the gotcha (shows depth)                        │    │   │
│  │  │                                                          │    │   │
│  │  └──────────────────────────────────────────────────────────┘    │   │
│  │                                                                   │   │
│  │                     [ ◀ Back ]    [ Next: Exercises → ]          │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: ████░░░░░░░░ 12/90 modules    Streak: 7 days   Ready: 46%  │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Page 8: Module Detail — Step 5 (Exercises)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ◀ Back to Modules    C# Fundamentals > Module 2 of 7                   │
│                                                                          │
│  ┌──── STEP PROGRESS ────────────────────────────────────────────┐      │
│  │  ✓ Step 1    ✓ Step 2    ✓ Step 3    ✓ Step 4   [●] Step 5   │      │
│  └───────────────────────────────────────────────────────────────┘      │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  STEP 5 — EXERCISES                    Question 1 of 6           │   │
│  │  Score 80%+ to unlock the next module.           Score: 0/0      │   │
│  │                                                                   │   │
│  │  ── PREDICT THE OUTPUT ──────────────────────────────────────    │   │
│  │                                                                   │   │
│  │  ┌────────────────────────────────────────────────────────┐      │   │
│  │  │  struct S { public int X; }                            │      │   │
│  │  │                                                        │      │   │
│  │  │  S a = new S();                                        │      │   │
│  │  │  a.X = 5;                                              │      │   │
│  │  │  S b = a;                                              │      │   │
│  │  │  b.X = 10;                                             │      │   │
│  │  │                                                        │      │   │
│  │  │  Console.WriteLine(a.X);                               │      │   │
│  │  └────────────────────────────────────────────────────────┘      │   │
│  │                                                                   │   │
│  │  What does this print?                                            │   │
│  │                                                                   │   │
│  │  ┌──────────────────┐  ┌──────────────────┐                      │   │
│  │  │    (A)  5         │  │    (B)  10        │                      │   │
│  │  └──────────────────┘  └──────────────────┘                      │   │
│  │  ┌──────────────────┐  ┌──────────────────┐                      │   │
│  │  │    (C)  0         │  │    (D)  Error     │                      │   │
│  │  └──────────────────┘  └──────────────────┘                      │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: ████░░░░░░░░ 12/90 modules    Streak: 7 days   Ready: 46%  │
└──────────────────────────────────────────────────────────────────────────┘
```

**After selecting correct answer (A):**

```
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  ✅ CORRECT!                                  Question 1 of 6    │   │
│  │                                                       Score: 1/1 │   │
│  │  ┌─────────────────────────────────────────────────────────┐     │   │
│  │  │  ✓ Answer: 5                                            │     │   │
│  │  │                                                         │     │   │
│  │  │  WHY: b = a copies the struct. b.X = 10 only changes   │     │   │
│  │  │  the copy (b). The original (a) stays at X = 5.        │     │   │
│  │  │                                                         │     │   │
│  │  │  Remember: "Struct Stays Separate" (S-S-S)             │     │   │
│  │  └─────────────────────────────────────────────────────────┘     │   │
│  │                                                                   │   │
│  │  WHY THE OTHERS ARE WRONG:                                        │   │
│  │  (B) 10 — would be true for a CLASS, not a struct                │   │
│  │  (C) 0  — default value, but a.X was assigned to 5               │   │
│  │  (D) Error — this code compiles fine                              │   │
│  │                                                                   │   │
│  │                                        [ Next Question → ]       │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
```

**After selecting wrong answer:**

```
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  ✗ INCORRECT                                  Question 1 of 6    │   │
│  │                                                       Score: 0/1 │   │
│  │  ┌─────────────────────────────────────────────────────────┐     │   │
│  │  │  Your answer: (B) 10                                    │     │   │
│  │  │  Correct answer: (A) 5                                  │     │   │
│  │  │                                                         │     │   │
│  │  │  WHY: This is a STRUCT, not a class. When you write     │     │   │
│  │  │  b = a, it creates a completely separate copy.          │     │   │
│  │  │  Changing b.X does NOT affect a.X.                      │     │   │
│  │  │                                                         │     │   │
│  │  │  If this were a CLASS, then yes — b.X = 10 would        │     │   │
│  │  │  also change a.X (shared reference).                    │     │   │
│  │  │                                                         │     │   │
│  │  │  Remember: "Photocopy vs Google Doc"                    │     │   │
│  │  └─────────────────────────────────────────────────────────┘     │   │
│  │                                                                   │   │
│  │  [ Review Step 2 (Visual) ]  [ Review Step 4 (Memory Anchors) ] │   │
│  │                                                                   │   │
│  │                                        [ Next Question → ]       │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
```

**Other exercise type — Spot the Bug:**

```
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  STEP 5 — EXERCISES                    Question 3 of 6           │   │
│  │  ── SPOT THE BUG ───────────────────────────────────────────     │   │
│  │                                                                   │   │
│  │  This code doesn't work as expected. Why?                        │   │
│  │                                                                   │   │
│  │  ┌────────────────────────────────────────────────────────┐      │   │
│  │  │  struct Enemy { public int Health; }                    │      │   │
│  │  │                                                        │      │   │
│  │  │  List<Enemy> enemies = new() { new Enemy { Health=100 }│      │   │
│  │  │  };                                                    │      │   │
│  │  │                                                        │      │   │
│  │  │  enemies[0].Health -= 25;  // Take 25 damage           │      │   │
│  │  │                                                        │      │   │
│  │  │  Console.WriteLine(enemies[0].Health);                  │      │   │
│  │  │  // Expected: 75   Actual: ???                          │      │   │
│  │  └────────────────────────────────────────────────────────┘      │   │
│  │                                                                   │   │
│  │  What's the bug?                                                  │   │
│  │                                                                   │   │
│  │  (A) List<T> doesn't support structs                              │   │
│  │  (B) enemies[0] returns a COPY, so the change is lost            │   │
│  │  (C) You can't subtract from a struct field                       │   │
│  │  (D) The struct needs a constructor                               │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
```

**Exercise complete — summary screen:**

```
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  EXERCISE RESULTS                          Struct vs Class       │   │
│  │                                                                   │   │
│  │  Score: 5/6 (83%)                            ✅ PASSED           │   │
│  │  ████████████████████░░░░                     (need 80%+)        │   │
│  │                                                                   │   │
│  │  ┌─────────────────────────────────────────────────────────┐     │   │
│  │  │  ✅ Q1  Predict the Output          Correct             │     │   │
│  │  │  ✅ Q2  True or False               Correct             │     │   │
│  │  │  ✅ Q3  Spot the Bug               Correct             │     │   │
│  │  │  ✗ Q4  Fill the Gap               Wrong               │     │   │
│  │  │  ✅ Q5  Pick the Right One          Correct             │     │   │
│  │  │  ✅ Q6  What Happens If             Correct             │     │   │
│  │  └─────────────────────────────────────────────────────────┘     │   │
│  │                                                                   │   │
│  │  Missed: Q4 — Review the "when to use" section in Step 2        │   │
│  │                                                                   │   │
│  │  [ Retry Exercises ]         [ Continue to Step 6 → ]           │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
```

---

## Page 9: Module Detail — Step 6 (Interview Rehearsal)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ◀ Back to Modules    C# Fundamentals > Module 2 of 7                   │
│                                                                          │
│  ┌──── STEP PROGRESS ────────────────────────────────────────────┐      │
│  │  ✓ Step 1    ✓ Step 2    ✓ Step 3    ✓ Step 4    ✓ Step 5    │      │
│  │                                                     [●] Step 6│      │
│  └───────────────────────────────────────────────────────────────┘      │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  STEP 6 — INTERVIEW REHEARSAL                                     │   │
│  │  Pretend you're in the interview. Can you answer this?           │   │
│  │                                                                   │   │
│  │  ┌─────────────────────────────────────────────────────────┐     │   │
│  │  │                                                         │     │   │
│  │  │  INTERVIEWER:                                           │     │   │
│  │  │  "What's the difference between struct and class        │     │   │
│  │  │   in C#?"                                               │     │   │
│  │  │                                                         │     │   │
│  │  └─────────────────────────────────────────────────────────┘     │   │
│  │                                                                   │   │
│  │  STRUCTURE YOUR ANSWER IN THIS ORDER:                             │   │
│  │  ┌───┬────────────────────────────────────────────────────┐      │   │
│  │  │ 1 │ Start with one-liner (value type vs reference)     │      │   │
│  │  ├───┼────────────────────────────────────────────────────┤      │   │
│  │  │ 2 │ Mention stack vs heap allocation                   │      │   │
│  │  ├───┼────────────────────────────────────────────────────┤      │   │
│  │  │ 3 │ Explain copy vs shared reference behavior          │      │   │
│  │  ├───┼────────────────────────────────────────────────────┤      │   │
│  │  │ 4 │ Use the photocopy vs Google Doc analogy            │      │   │
│  │  ├───┼────────────────────────────────────────────────────┤      │   │
│  │  │ 5 │ Say when you'd choose struct vs class              │      │   │
│  │  ├───┼────────────────────────────────────────────────────┤      │   │
│  │  │ 6 │ Mention the mutable struct gotcha (shows depth)    │      │   │
│  │  └───┴────────────────────────────────────────────────────┘      │   │
│  │                                                                   │   │
│  │  KEY POINTS — Check what you'd mention:                           │   │
│  │  ☐ Value type vs Reference type                                   │   │
│  │  ☐ Stack vs Heap allocation                                       │   │
│  │  ☐ Copy semantics vs Reference semantics                          │   │
│  │  ☐ Inheritance (class yes, struct no)                             │   │
│  │  ☐ Nullability (class nullable, struct not)                       │   │
│  │  ☐ When to use each                                               │   │
│  │  ☐ Performance considerations                                     │   │
│  │                                                                   │   │
│  │  [ Show Model Answer ▼ ]                                         │   │
│  │                                                                   │   │
│  │  ── COMMON FOLLOW-UP QUESTIONS ─────────────────────────────     │   │
│  │                                                                   │   │
│  │  → "Can a struct implement an interface?"                         │   │
│  │  → "What is boxing? When does it happen with structs?"            │   │
│  │  → "Have you used readonly struct or ref struct?"                 │   │
│  │  → "What's the 16-byte guideline for structs?"                   │   │
│  │                                                                   │   │
│  │  ── HOW CONFIDENT ARE YOU? ──────────────────────────────────    │   │
│  │                                                                   │   │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐             │   │
│  │  │  CONFIDENT   │ │  NOT SURE    │ │  NOT READY   │             │   │
│  │  │     ✅        │ │     🟡        │ │     ❌        │             │   │
│  │  │  Mark done    │ │ Review in    │ │ Restart from │             │   │
│  │  │  & move on    │ │ 3 days       │ │ Step 1       │             │   │
│  │  └──────────────┘ └──────────────┘ └──────────────┘             │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: ████░░░░░░░░ 12/90 modules    Streak: 7 days   Ready: 46%  │
└──────────────────────────────────────────────────────────────────────────┘
```

**After clicking "Show Model Answer":**

```
│  │  ┌─────────────────────────────────────────────────────────┐     │   │
│  │  │  MODEL ANSWER:                                          │     │   │
│  │  │                                                         │     │   │
│  │  │  "The main difference is that struct is a value type    │     │   │
│  │  │  typically allocated on the stack, while class is a     │     │   │
│  │  │  reference type allocated on the heap.                  │     │   │
│  │  │                                                         │     │   │
│  │  │  When you assign a struct to another variable, it       │     │   │
│  │  │  creates a complete copy — like photocopying a          │     │   │
│  │  │  document. With a class, both variables point to        │     │   │
│  │  │  the same object — like sharing a Google Doc link.      │     │   │
│  │  │                                                         │     │   │
│  │  │  I'd use a struct for small, immutable data types       │     │   │
│  │  │  under 16 bytes, like coordinates or money amounts.     │     │   │
│  │  │  Classes are better for complex objects that need       │     │   │
│  │  │  inheritance or null support.                           │     │   │
│  │  │                                                         │     │   │
│  │  │  One gotcha — mutable structs can cause subtle bugs     │     │   │
│  │  │  because modifications happen on copies, not the        │     │   │
│  │  │  original."                                             │     │   │
│  │  │                                                         │     │   │
│  │  └─────────────────────────────────────────────────────────┘     │   │
```

---

## Page 10: Module Complete

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │                     ✅ MODULE COMPLETE!                           │   │
│  │                                                                   │   │
│  │                     Struct vs Class                                │   │
│  │                     Module 2 of 90                                 │   │
│  │                                                                   │   │
│  │  ┌─────────────────────────────────────────────────────────┐     │   │
│  │  │  Exercise Score:  5/6 (83%)                             │     │   │
│  │  │  Confidence:      ✅ Confident                          │     │   │
│  │  │  Time Spent:      14 minutes                            │     │   │
│  │  │  Status:          Completed                             │     │   │
│  │  │  Next Review:     In 3 days (Jun 4)                     │     │   │
│  │  └─────────────────────────────────────────────────────────┘     │   │
│  │                                                                   │   │
│  │  NEXT MODULE UNLOCKED:                                            │   │
│  │  ┌─────────────────────────────────────────────────────────┐     │   │
│  │  │  📖 Module 3: Boxing / Unboxing                        │     │   │
│  │  │  "What happens when a struct is treated as an object?"  │     │   │
│  │  │                                          [Start → ]    │     │   │
│  │  └─────────────────────────────────────────────────────────┘     │   │
│  │                                                                   │   │
│  │  [ ◀ Back to Track ]          [ View All Tracks ]                │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: █████░░░░░░░ 13/90 modules    Streak: 7 days   Ready: 48%  │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Page 11: Interview Question Bank

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  INTERVIEW QUESTION BANK                                                │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │  🔍 Search questions...                                          │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─ FILTERS ────────────────────────────────────────────────────────┐   │
│  │  Topic:  [All ▼]   Level: [Mid ▼]   Type: [All ▼]   [🔀Random] │   │
│  │  [C#] [ASP.NET] [EF Core] [SQL] [Angular] [Architecture]        │   │
│  │  [⭐ Bookmarked Only]                                            │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  Showing 156 questions                                                  │
│                                                                          │
│  ┌─── Q1 ───────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  C# · Mid · Conceptual · ★★★☆☆                    🔖 Bookmark   │   │
│  │  🔥 Asked frequently                                             │   │
│  │                                                                   │   │
│  │  "What's the difference between struct and class in C#?"         │   │
│  │                                                                   │   │
│  │  [ Show Answer ▼ ]              📚 Learn Module: Struct vs Class │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── Q2 ───────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  ASP.NET · Mid · Conceptual · ★★★★☆                 🔖 Bookmark │   │
│  │  🔥 Asked frequently                                             │   │
│  │                                                                   │   │
│  │  "Explain the difference between AddSingleton, AddScoped,        │   │
│  │   and AddTransient."                                              │   │
│  │                                                                   │   │
│  │  [ Show Answer ▼ ]              📚 Learn Module: DI Lifetimes    │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── Q3 ───────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  SQL · Mid · Code-based · ★★★☆☆                                 │   │
│  │                                                                   │   │
│  │  "What's the difference between WHERE and HAVING?"               │   │
│  │                                                                   │   │
│  │  [ Show Answer ▼ ]              📚 Learn Module: SQL Basics      │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  (more questions...)                                                     │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: █████░░░░░░░ 13/90 modules    Streak: 7 days   Ready: 48%  │
└──────────────────────────────────────────────────────────────────────────┘
```

**After clicking "Show Answer" on Q1:**

```
│  ┌─── Q1 (EXPANDED) ────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  C# · Mid · Conceptual · ★★★☆☆                    ⭐ Bookmarked │   │
│  │                                                                   │   │
│  │  "What's the difference between struct and class in C#?"         │   │
│  │                                                                   │   │
│  │  ── IDEAL ANSWER ────────────────────────────────────────────    │   │
│  │  "Struct is a value type on the stack, class is a reference      │   │
│  │  type on the heap. Assigning a struct copies it; assigning       │   │
│  │  a class shares a reference. Structs can't be null or           │   │
│  │  inherited. Use structs for small, immutable data."              │   │
│  │                                                                   │   │
│  │  ── KEY POINTS (must mention) ───────────────────────────────    │   │
│  │  ✓ Value type vs reference type                                   │   │
│  │  ✓ Stack vs heap                                                  │   │
│  │  ✓ Copy vs reference semantics                                    │   │
│  │  ✓ When to use each                                               │   │
│  │                                                                   │   │
│  │  ── INTERVIEWER'S INTENT ────────────────────────────────────    │   │
│  │  Testing: fundamental C# knowledge, memory model awareness       │   │
│  │                                                                   │   │
│  │  ── RED FLAGS (avoid these) ─────────────────────────────────    │   │
│  │  ✗ "Structs are always on the stack" (not when boxed)            │   │
│  │  ✗ Can't explain the practical difference                         │   │
│  │  ✗ No awareness of when to choose one over the other              │   │
│  │                                                                   │   │
│  │  ── FOLLOW-UP QUESTIONS ─────────────────────────────────────    │   │
│  │  → "What is boxing?"                                              │   │
│  │  → "Can a struct implement an interface?"                         │   │
│  │  → "What's a readonly struct?"                                    │   │
│  │                                                                   │   │
│  │  [ Hide Answer ▲ ]              📚 Learn Module: Struct vs Class │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
```

---

## Page 12: Mock Interview — Setup

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│                      MOCK INTERVIEW                                      │
│              Simulate a real interview experience.                       │
│                                                                          │
│  ┌─── SETUP ────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  Level:                                                           │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐                       │   │
│  │  │  Junior   │  │ [Mid]    │  │  Senior  │                       │   │
│  │  └──────────┘  └──────────┘  └──────────┘                       │   │
│  │                                                                   │   │
│  │  Topics (pick 1-3 or All):                                        │   │
│  │  [✓ C#] [✓ ASP.NET] [  SQL ] [ Angular] [  EF Core]             │   │
│  │  [  Architecture ] [  Design Patterns ]                          │   │
│  │                                                                   │   │
│  │  Interview Type:                                                  │   │
│  │  ┌──────────────────┐  ┌──────────────────┐                      │   │
│  │  │ Technical Screen │  │ [Deep Dive]      │                      │   │
│  │  │ 10 rapid Qs      │  │ 5-6 detailed Qs  │                      │   │
│  │  └──────────────────┘  └──────────────────┘                      │   │
│  │  ┌──────────────────┐                                            │   │
│  │  │ Full Loop        │                                            │   │
│  │  │ All rounds       │                                            │   │
│  │  └──────────────────┘                                            │   │
│  │                                                                   │   │
│  │  Duration:                                                        │   │
│  │  ┌────────┐  ┌────────┐  ┌────────┐                              │   │
│  │  │ 15 min │  │[30 min]│  │ 45 min │                              │   │
│  │  └────────┘  └────────┘  └────────┘                              │   │
│  │                                                                   │   │
│  │                                                                   │   │
│  │              [ START INTERVIEW → ]                                │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── PAST INTERVIEWS ──────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  May 30  │ Deep Dive │ C#, ASP.NET │ 30 min │ 72/100 │ [Review] │   │
│  │  May 28  │ Screening │ C#          │ 15 min │ 85/100 │ [Review] │   │
│  │  May 25  │ Full Loop │ All         │ 45 min │ 61/100 │ [Review] │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: █████░░░░░░░ 13/90 modules    Streak: 7 days   Ready: 48%  │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Page 13: Mock Interview — In Progress

```
┌──────────────────────────────────────────────────────────────────────────┐
│  MOCK INTERVIEW IN PROGRESS              ⏱ 18:42 remaining     [End]   │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  Question 3 of 6                          Round: Core Technical         │
│  ███████████░░░░░░░░░░░░                  Topic: ASP.NET Core           │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  INTERVIEWER:                                        ⏱ Q: 3:15   │   │
│  │                                                                   │   │
│  │  "Explain the difference between AddSingleton,                    │   │
│  │   AddScoped, and AddTransient in ASP.NET Core                    │   │
│  │   dependency injection. When would you use each?"                │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  YOUR ANSWER:                                                            │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  Type your answer here as you would speak it in an               │   │
│  │  interview...                                                     │   │
│  │                                                                   │   │
│  │                                                                   │   │
│  │                                                                   │   │
│  │                                                                   │   │
│  │                                                                   │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  KEY POINTS (self-check after answering):                                │
│  ☐ Singleton — one instance for app lifetime                            │
│  ☐ Scoped — one instance per HTTP request                               │
│  ☐ Transient — new instance every time                                  │
│  ☐ When to use each                                                      │
│  ☐ DbContext should be scoped                                            │
│                                                                          │
│  ┌────────────────┐  ┌────────────────┐                                 │
│  │  SKIP (penalty) │  │ SUBMIT ANSWER →│                                 │
│  └────────────────┘  └────────────────┘                                 │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Page 14: Mock Interview — Scorecard

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│                    INTERVIEW SCORECARD                                    │
│                    Deep Dive · 30 min · C#, ASP.NET                     │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │      OVERALL SCORE                    VERDICT                     │   │
│  │     ┌───────────┐                 ┌──────────────┐               │   │
│  │     │           │                 │              │               │   │
│  │     │    72     │                 │  LEAN HIRE   │               │   │
│  │     │   /100    │                 │              │               │   │
│  │     │           │                 │ Almost there │               │   │
│  │     └───────────┘                 └──────────────┘               │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── PER-QUESTION BREAKDOWN ───────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  Q1  Struct vs Class          ████████████████░░  85%  ✅ Strong  │   │
│  │  Q2  async/await              ███████████░░░░░░░  60%  ⚠ Weak    │   │
│  │  Q3  DI Lifetimes             ██████████████████  95%  ✅ Strong  │   │
│  │  Q4  Middleware Pipeline      ██████████████░░░░  70%  ⚠ OK      │   │
│  │  Q5  IEnumerable vs IQuery    ████████░░░░░░░░░░  45%  ❌ Review  │   │
│  │  Q6  Design a caching layer   ██████████████░░░░  75%  ⚠ OK      │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── TIME MANAGEMENT ──────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  Q1: 3:20   Q2: 6:45 ⚠  Q3: 4:10   Q4: 5:30   Q5: 4:00        │   │
│  │  Q6: 6:15                                                        │   │
│  │                                                                   │   │
│  │  ⚠ Spent too long on Q2 — practice being more concise           │   │
│  │                                                                   │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── TOP 3 AREAS TO IMPROVE ──────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  1. IEnumerable vs IQueryable         [Go to Learn Module →]     │   │
│  │  2. async/await Internals             [Go to Learn Module →]     │   │
│  │  3. Middleware Pipeline               [Go to Learn Module →]     │   │
│  │                                                                   │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  [ Back to Mock Interview ]    [ Review Answers ]    [ Try Again ]      │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: █████░░░░░░░ 13/90 modules    Streak: 7 days   Ready: 48%  │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Page 15: Comparison Tables

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  COMPARISON TABLES                                                       │
│  Side-by-side differences interviewers always ask about.                │
│                                                                          │
│  ┌─ FILTER ─────────────────────────────────────────────────────────┐   │
│  │  [All] [C#] [ASP.NET] [EF Core] [SQL] [Angular] [Architecture] │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── struct vs class ──────────────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  ┌──────────────────┬──────────────────┐                         │   │
│  │  │     struct        │     class         │                         │   │
│  │  ├──────────────────┼──────────────────┤                         │   │
│  │  │ Value type        │ Reference type    │                         │   │
│  │  │ Stack             │ Heap              │                         │   │
│  │  │ Copies on assign  │ Shares reference  │                         │   │
│  │  │ No inheritance    │ Inheritance       │                         │   │
│  │  │ Not nullable      │ Nullable          │                         │   │
│  │  └──────────────────┴──────────────────┘                         │   │
│  │                                                                   │   │
│  │  Rule: "Post-it → struct. Full page → class."                    │   │
│  │                                                                   │   │
│  │  MINI-EXERCISE: "A coordinate pair for a 2D game engine          │   │
│  │  used in tight rendering loops. Struct or Class?"                │   │
│  │  [Struct]  [Class]                        📚 Learn Module        │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌─── IEnumerable vs IQueryable ────────────────────────────────────┐   │
│  │                                                                   │   │
│  │  ┌──────────────────┬──────────────────┐                         │   │
│  │  │  IEnumerable      │  IQueryable       │                         │   │
│  │  ├──────────────────┼──────────────────┤                         │   │
│  │  │ In-memory         │ Out-of-process    │                         │   │
│  │  │ LINQ-to-Objects   │ LINQ-to-SQL       │                         │   │
│  │  │ Loads all data    │ Builds expression  │                         │   │
│  │  │ No SQL generation │ Translates to SQL  │                         │   │
│  │  │ Filter in C#      │ Filter in DB       │                         │   │
│  │  └──────────────────┴──────────────────┘                         │   │
│  │                                                                   │   │
│  │  Rule: "Querying a database? IQueryable. Already in memory?      │   │
│  │  IEnumerable."                                                    │   │
│  │                                                                   │   │
│  │  MINI-EXERCISE: "You have a DbSet<Order> and need to filter      │   │
│  │  by date. Should the method return IEnumerable or IQueryable?"   │   │
│  │  [IEnumerable]  [IQueryable]              📚 Learn Module        │   │
│  │                                                                   │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  (more comparisons: AddSingleton vs AddScoped vs AddTransient,          │
│   string vs StringBuilder, abstract vs interface, etc.)                 │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: █████░░░░░░░ 13/90 modules    Streak: 7 days   Ready: 48%  │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Page 16: Cheat Sheets

```
┌──────────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                      Mid ▼  ☀  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  CHEAT SHEETS                           Last-day-before-interview ref.  │
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │              │  │              │  │              │                  │
│  │  C# Quick    │  │  async/await │  │  LINQ        │                  │
│  │  Reference   │  │  Patterns    │  │  Cheat Sheet │                  │
│  │              │  │              │  │              │                  │
│  │  [View] [PDF]│  │  [View] [PDF]│  │  [View] [PDF]│                  │
│  └──────────────┘  └──────────────┘  └──────────────┘                  │
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │              │  │              │  │              │                  │
│  │  EF Core     │  │  SQL Server  │  │  HTTP Status │                  │
│  │  Gotchas     │  │  Quick Ref   │  │  Codes       │                  │
│  │              │  │              │  │              │                  │
│  │  [View] [PDF]│  │  [View] [PDF]│  │  [View] [PDF]│                  │
│  └──────────────┘  └──────────────┘  └──────────────┘                  │
│                                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                  │
│  │              │  │              │  │              │                  │
│  │  Design      │  │  SOLID       │  │  Angular     │                  │
│  │  Patterns    │  │  Principles  │  │  CLI         │                  │
│  │              │  │              │  │              │                  │
│  │  [View] [PDF]│  │  [View] [PDF]│  │  [View] [PDF]│                  │
│  └──────────────┘  └──────────────┘  └──────────────┘                  │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  Progress: █████░░░░░░░ 13/90 modules    Streak: 7 days   Ready: 48%  │
└──────────────────────────────────────────────────────────────────────────┘
```

**After clicking "View" on a cheat sheet:**

```
│  ┌─── C# QUICK REFERENCE ───────────────────────────── [Print] [PDF]───┐│
│  │                                                                      ││
│  │  VALUE TYPES              REFERENCE TYPES                            ││
│  │  int, float, double       string, object, dynamic                    ││
│  │  bool, char, decimal      arrays, classes                            ││
│  │  struct, enum             delegates, interfaces                      ││
│  │                                                                      ││
│  │  ACCESS MODIFIERS                                                    ││
│  │  public         → everywhere                                        ││
│  │  private        → same class only                                    ││
│  │  protected      → same class + derived                               ││
│  │  internal       → same assembly                                      ││
│  │  protected internal → same assembly OR derived                       ││
│  │  private protected  → same assembly AND derived                      ││
│  │                                                                      ││
│  │  ASYNC PATTERNS                                                      ││
│  │  await Task.Run(...)          → offload CPU work                     ││
│  │  await Task.WhenAll(...)      → parallel async                       ││
│  │  await Task.WhenAny(...)      → first to complete                    ││
│  │  Never: async void            → except event handlers                ││
│  │  Never: .Result / .Wait()     → deadlock risk                        ││
│  │                                                                      ││
│  │  (continues with more sections...)                                   ││
│  └──────────────────────────────────────────────────────────────────────┘│
```

---

## Mobile Responsive Layout

```
┌────────────────────────────┐
│  ☰  InterviewCracker  Mid▼│
├────────────────────────────┤
│                            │
│  STRUCT vs CLASS           │
│  Step 2 of 6               │
│                            │
│  ● ● ● [●] ○ ○            │
│                            │
│  ┌────────────────────┐    │
│  │  Struct  │  Class   │    │
│  ├──────────┼─────────┤    │
│  │ Value    │ Ref     │    │
│  │ Stack    │ Heap    │    │
│  │ Copies   │ Shares  │    │
│  │ No null  │ Null OK │    │
│  └──────────┴─────────┘    │
│                            │
│  When to use:              │
│  Struct: small, immutable  │
│  Class: complex, inherit   │
│                            │
│  ┌────────────────────┐    │
│  │  Struct: a →copy→ b│    │
│  │  Class:  a →ref→ obj│    │
│  └────────────────────┘    │
│                            │
│  [ ◀ Back ]  [ Next → ]   │
│                            │
├────────────────────────────┤
│ ████░░░ 12/90  🔥7  48%   │
└────────────────────────────┘
```

---

## Page Navigation Summary

| # | Page | Route | From | To |
|---|------|-------|------|-----|
| 1 | Landing | `/` | — | Home (after level pick) |
| 2 | Home Dashboard | `/home` | Landing, any nav | Learn, Q Bank, Mock, Compare, Cheat |
| 3 | Learn Tracks | `/learn` | Home, nav | Module Detail |
| 4 | Module Step 1 | `/learn/:id/step/1` | Track list | Step 2 |
| 5 | Module Step 2 | `/learn/:id/step/2` | Step 1 | Step 3 |
| 6 | Module Step 3 | `/learn/:id/step/3` | Step 2 | Step 4 |
| 7 | Module Step 4 | `/learn/:id/step/4` | Step 3 | Step 5 |
| 8 | Module Step 5 | `/learn/:id/step/5` | Step 4 | Step 6 (if 80%+) |
| 9 | Module Step 6 | `/learn/:id/step/6` | Step 5 | Module Complete |
| 10 | Module Complete | `/learn/:id/complete` | Step 6 | Next module or Track list |
| 11 | Question Bank | `/questions` | Home, nav | Expanded Q, Learn Module |
| 12 | Mock Setup | `/mock` | Home, nav | Mock Session |
| 13 | Mock Session | `/mock/session` | Mock Setup | Scorecard |
| 14 | Scorecard | `/mock/scorecard/:id` | Mock Session | Learn Modules, Mock Setup |
| 15 | Comparisons | `/compare` | Home, nav | Learn Module |
| 16 | Cheat Sheets | `/cheatsheets` | Home, nav | — |

---

## Theme

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `#FFFFFF` | `#1A1A2E` |
| Card surface | `#F8F9FA` | `#16213E` |
| Primary | `#4361EE` | `#4CC9F0` |
| Success | `#2DC653` | `#2DC653` |
| Error | `#E63946` | `#FF6B6B` |
| Warning | `#F4A261` | `#F4A261` |
| Text primary | `#212529` | `#E8E8E8` |
| Text secondary | `#6C757D` | `#A0A0B0` |
| Code background | `#F1F3F5` | `#0D1117` |
| Font | Inter (UI), JetBrains Mono (code) | Same |
