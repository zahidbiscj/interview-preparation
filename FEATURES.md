# InterviewCracker - Full Stack .NET Interview Preparation App

> Angular static site | GitHub Pages via GitHub Actions | Zero backend — all data in JSON files

---

## Core Concept

**Learn it → Exercise it → Prove you know it.**

Every topic follows the same loop: read a concise explanation, then immediately do exercises that force you to apply what you just read. No passive reading. If you can't get the exercise right, you don't know it yet.

Pick your level (Junior / Mid / Senior) — the app adjusts the depth of explanations AND the difficulty of exercises.

---

## Role Levels

| Level | What Changes |
|-------|-------------|
| **Junior** | Fundamentals, syntax, "what is it?", basic code exercises |
| **Mid** | Internals, "how does it work under the hood?", debugging exercises, architecture awareness |
| **Senior** | Trade-offs, "when NOT to use it?", system design, decision-making exercises |

---

## Features

### 1. Step-by-Step Guided Learning Modules (The Core)

The heart of the app. Each topic is a **module** with **6 guided steps** — you go through them in order. No skipping ahead. Each step builds on the previous one.

---

#### The 6-Step Learning Flow (every module follows this)

```
Step 1: The One-Liner       → Memorize the interview-ready definition
Step 2: Visual Breakdown    → Understand through comparison tables & diagrams
Step 3: Code Example        → See it in real code
Step 4: Memory Anchors      → Mnemonics, analogies, & tricks to never forget
Step 5: Exercises            → Prove you understood (predict output, spot bug, etc.)
Step 6: Interview Rehearsal  → Practice answering the actual interview question
```

---

#### Step 1: The One-Liner (Memorize This)

A single sentence that answers the interview question. This is what you say first.

```
┌──────────────────────────────────────────────────────────────┐
│  💬 "What's the difference between struct and class?"       │
│                                                              │
│  YOUR ONE-LINER:                                             │
│  "Struct is a value type stored on the stack that copies     │
│   on assignment. Class is a reference type stored on the     │
│   heap that shares a reference on assignment."               │
│                                                              │
│  ⭐ Memorize this. Say it out loud 3 times.                 │
│                                                              │
│                              [ Got it → Step 2 ]            │
└──────────────────────────────────────────────────────────────┘
```

The one-liner is highlighted, copy-friendly, and the candidate is prompted to **say it out loud** before moving on.

---

#### Step 2: Visual Breakdown (Understand It)

Side-by-side comparison tables, diagrams, and bullet points. No walls of text.

```
┌──────────────────────────────────────────────────────────────┐
│  STRUCT vs CLASS — Key Differences                          │
│                                                              │
│  ┌─────────────────┬─────────────────┐                      │
│  │     Struct       │     Class       │                      │
│  ├─────────────────┼─────────────────┤                      │
│  │ Value type       │ Reference type  │                      │
│  │ Stack (usually)  │ Heap            │                      │
│  │ Copied on assign │ Reference shared│                      │
│  │ No inheritance   │ Supports inherit│                      │
│  │ Can't be null    │ Can be null     │                      │
│  │ No destructor    │ Has finalizer   │                      │
│  │ Default ctor only│ Custom ctors    │                      │
│  └─────────────────┴─────────────────┘                      │
│                                                              │
│  When to use STRUCT:          When to use CLASS:             │
│  ✓ Small data (<16 bytes)     ✓ Complex objects              │
│  ✓ Immutable data             ✓ Need inheritance             │
│  ✓ Short-lived                ✓ Need null                    │
│  ✓ Tight loops (perf)         ✓ Shared references            │
│                                                              │
│  VISUAL — What happens on assignment:                        │
│                                                              │
│  Struct:  a ──copy──→ b     (two separate boxes)            │
│  Class:   a ──ref───→ [obj] ←──ref── b  (same box)         │
│                                                              │
│                              [ Got it → Step 3 ]            │
└──────────────────────────────────────────────────────────────┘
```

Level-specific depth:
- **Junior** — see the table + "when to use" only
- **Mid** — adds: stack vs heap internals, boxing cost, default struct behavior
- **Senior** — adds: `readonly struct`, `ref struct`, `Span<T>` implications, performance benchmarks

---

#### Step 3: Code Example (See It Work)

Minimal, focused code that demonstrates the **key behavior** — not a textbook dump.

```csharp
// STRUCT — copies on assignment
struct Point { public int X; public int Y; }

Point a = new Point { X = 1, Y = 2 };
Point b = a;        // b is a COPY of a
b.X = 99;
Console.WriteLine(a.X);  // prints 1 (a is unchanged)

// CLASS — shares reference
class Person { public string Name; }

Person p1 = new Person { Name = "Alice" };
Person p2 = p1;      // p2 points to SAME object
p2.Name = "Bob";
Console.WriteLine(p1.Name);  // prints "Bob" (same object!)
```

Each code example has **inline annotations** explaining what happens at each line. Candidate reads the code, traces it mentally, then moves on.

---

#### Step 4: Memory Anchors (Never Forget It)

Mnemonics, analogies, and tricks designed to make the concept **stick in your brain**.

```
┌──────────────────────────────────────────────────────────────┐
│  🧠 MEMORY ANCHORS — Struct vs Class                        │
│                                                              │
│  ANALOGY:                                                    │
│  Struct = Photocopy. You give someone a photocopy of a       │
│  document. They write on it — your original is untouched.    │
│  Class = Shared Google Doc. You share a link. They edit it   │
│  — you see the same changes.                                 │
│                                                              │
│  MNEMONIC:                                                   │
│  "Struct Stays Separate, Class Connects"                     │
│  S-S-S = Struct, Stack, Separate copy                        │
│  C-C-C = Class, (heap) Connected, shared reference           │
│                                                              │
│  RULE OF THUMB:                                              │
│  "If it fits in a post-it note → struct.                     │
│   If it needs a whole page → class."                         │
│                                                              │
│  GOTCHA TO REMEMBER:                                         │
│  "Mutable struct = hidden bug factory"                       │
│  → Modifying a struct in a list modifies a COPY,             │
│    not the original. This trips up everyone.                 │
│                                                              │
│  INTERVIEW TRICK:                                            │
│  When asked "struct vs class" — START with value vs ref,     │
│  then mention stack vs heap, then give the photocopy         │
│  analogy. Interviewers love analogies.                       │
│                                                              │
│                              [ Got it → Step 5 ]            │
└──────────────────────────────────────────────────────────────┘
```

Memory anchor types used across all modules:
| Type | Purpose | Example |
|------|---------|---------|
| **Analogy** | Map to a real-world concept you already know | "Struct = Photocopy, Class = Google Doc" |
| **Mnemonic** | Short phrase to recall key facts | "S-S-S: Struct, Stack, Separate" |
| **Rule of Thumb** | Quick decision rule for interviews | "Post-it = struct, Full page = class" |
| **Gotcha** | The one trap everyone falls into | "Mutable struct in a list = copy bug" |
| **Interview Trick** | How to structure your answer to impress | "Start with X, then mention Y, then give analogy" |

---

#### Step 5: Exercises (Prove You Know It)

Now you prove it. Multiple exercise types, randomized:

| Exercise Type | What It Tests | Example |
|--------------|---------------|---------|
| **Predict the Output** | Can you trace the code mentally? | `S a = new(); a.X = 5; S b = a; b.X = 10; Print(a.X);` → ? |
| **Spot the Bug** | Can you catch the trap? | Mutable struct in a List — why doesn't the update persist? |
| **Pick the Right One** | Can you make the right design choice? | "Immutable coordinate pair in a game loop — struct or class?" |
| **Fill the Gap** | Can you recall the syntax/keyword? | `___ Point { public int X; public int Y; }` |
| **True or False + Why** | Do you know the details? | "Structs can implement interfaces" → True — but explain WHY |
| **What Happens If** | Can you predict edge cases? | "What if you pass a struct to a method without `ref`?" |
| **Match the Concept** | Can you connect related ideas? | Match: "Copies on assign" → Struct, "Can be null" → Class |

**Scoring per exercise:**
- Correct → green checkmark + brief "why" reinforcement
- Wrong → red cross + **full explanation** + link back to Step 2/3/4
- Must score **80%+** to unlock next module (encourages mastery, not skipping)

---

#### Step 6: Interview Rehearsal (Say The Answer)

The actual interview question appears. Candidate sees:

```
┌──────────────────────────────────────────────────────────────┐
│  🎤 INTERVIEW REHEARSAL                                     │
│                                                              │
│  Interviewer asks:                                           │
│  "What's the difference between struct and class in C#?"     │
│                                                              │
│  Structure your answer like this:                            │
│  ┌────────────────────────────────────────────────────┐      │
│  │ 1. Start with one-liner (value vs reference)       │      │
│  │ 2. Mention stack vs heap                           │      │
│  │ 3. Give the copy vs reference behavior             │      │
│  │ 4. Use an analogy (photocopy vs Google Doc)        │      │
│  │ 5. Say when you'd choose each                      │      │
│  │ 6. Mention the gotcha (mutable struct trap)        │      │
│  └────────────────────────────────────────────────────┘      │
│                                                              │
│  KEY POINTS CHECKLIST (tick what you'd mention):             │
│  □ Value type vs Reference type                              │
│  □ Stack vs Heap allocation                                  │
│  □ Copy semantics vs Reference semantics                     │
│  □ Inheritance (class yes, struct no)                        │
│  □ Nullability                                               │
│  □ When to use each                                          │
│  □ Performance considerations                                │
│                                                              │
│  [ Show Model Answer ]    [ Mark as Confident ✓ ]           │
│                                                              │
│  COMMON FOLLOW-UPS:                                          │
│  → "Can a struct implement an interface?"                    │
│  → "What is boxing? When does it happen with structs?"       │
│  → "Have you used readonly struct or ref struct?"            │
│  → "What's the 16-byte guideline?"                          │
└──────────────────────────────────────────────────────────────┘
```

Candidate self-evaluates: **"Could I say this confidently in an interview?"**
- Yes → module marked as **Confident** (green)
- Not sure → module marked as **Review Later** (yellow)
- No → sent back to Step 1 with a **focused review** flag

---

#### Module List (each follows all 6 steps above)

| Track | Modules (in recommended order) |
|-------|-------------------------------|
| **C# Fundamentals** | 1. Value vs Reference Types → 2. Struct vs Class → 3. Boxing/Unboxing → 4. String vs StringBuilder → 5. Nullable Types → 6. Enums Deep Dive → 7. Type Casting (is/as/explicit/implicit) |
| **C# OOP** | 8. Abstract vs Interface → 9. Virtual vs Override vs New → 10. Sealed Classes → 11. Access Modifiers → 12. Static vs Instance → 13. Partial Classes |
| **C# Collections** | 14. Array vs List vs Dictionary → 15. IEnumerable vs ICollection vs IList → 16. Stack/Queue/HashSet → 17. Concurrent Collections |
| **C# Advanced** | 18. Delegates & Events → 19. Generics & Constraints → 20. async/await Internals → 21. LINQ Under the Hood → 22. IEnumerable vs IQueryable → 23. Span & Memory → 24. Reflection |
| **C# Memory** | 25. Stack vs Heap → 26. Garbage Collection (Gen 0/1/2) → 27. IDisposable & Using → 28. Finalize vs Dispose → 29. Memory Leaks in .NET |
| **ASP.NET Core** | 30. Request Pipeline & Middleware → 31. DI Lifetimes → 32. Filters (Action/Exception/Result) → 33. Routing & Endpoints → 34. Model Binding & Validation → 35. Configuration & Options Pattern |
| **ASP.NET Auth** | 36. JWT How It Works → 37. OAuth 2.0 Flow → 38. Cookie vs Token Auth → 39. Identity & Claims |
| **EF Core** | 40. DbContext & Change Tracking → 41. Loading Strategies → 42. N+1 Problem → 43. Migrations → 44. Raw SQL vs LINQ → 45. Performance Tuning |
| **SQL Server** | 46. JOIN Types → 47. Indexes Deep Dive → 48. Transactions & Isolation Levels → 49. CTEs & Temp Tables → 50. Window Functions → 51. Execution Plans → 52. Stored Procs vs Inline SQL |
| **Angular** | 53. Change Detection → 54. Component Lifecycle → 55. Signals vs RxJS → 56. Standalone Components → 57. Lazy Loading & Routes → 58. Route Guards & Resolvers → 59. Pipes & Directives |
| **TypeScript** | 60. Generics → 61. Utility Types → 62. Type Guards & Narrowing → 63. Decorators → 64. Strict Mode & Config |
| **Architecture** | 65. SRP → 66. OCP → 67. LSP → 68. ISP → 69. DIP → 70. Repository Pattern → 71. Unit of Work → 72. CQRS → 73. Clean Architecture → 74. Vertical Slice |
| **Design Patterns** | 75. Singleton → 76. Factory → 77. Strategy → 78. Observer → 79. Decorator → 80. Mediator |
| **System Design** | 81. Caching Strategies → 82. Load Balancing → 83. Message Queues → 84. Rate Limiting → 85. Database Sharding → 86. API Gateway |
| **Testing** | 87. Unit Testing (xUnit) → 88. Mocking (Moq) → 89. Integration Testing → 90. Test Pyramid |

**~90 modules total.** Each takes 10-20 minutes. Doing 3-5 per day = **interview ready in 3-4 weeks.**

---

#### Module Dependency Map

Modules are ordered so each one builds on the previous:

```
Value vs Ref Types
  └── Struct vs Class
       └── Boxing/Unboxing
            └── String vs StringBuilder
  └── Stack vs Heap
       └── Garbage Collection
            └── IDisposable & Using

Abstract vs Interface
  └── Virtual vs Override vs New
       └── Sealed Classes

Delegates & Events
  └── LINQ Under the Hood
       └── IEnumerable vs IQueryable
            └── EF Core Loading Strategies
                 └── N+1 Problem

async/await Internals
  └── Task.Run vs async
       └── ASP.NET Middleware Pipeline

DI Lifetimes (Singleton/Scoped/Transient)
  └── ASP.NET Request Pipeline
       └── EF Core DbContext Lifetime
```

The app **enforces this order** — you can't jump to N+1 Problem without understanding IQueryable first. But you can start any track independently (C# vs SQL vs Angular).

---

#### Memorization System (Built Into Every Module)

| Technique | How It's Used | When |
|-----------|--------------|------|
| **One-liner drill** | Memorize the interview-ready sentence. App shows the question, you recall the one-liner. | Step 1 |
| **Visual anchors** | Comparison tables and diagrams that burn into visual memory | Step 2 |
| **Code tracing** | Mentally run code line-by-line — builds procedural memory | Step 3 |
| **Mnemonics & analogies** | "S-S-S: Struct, Stack, Separate" — catchy phrases that stick | Step 4 |
| **Active recall exercises** | Don't re-read — retrieve from memory. The #1 proven study method | Step 5 |
| **Structured answer templates** | Know WHAT to say and in WHAT ORDER for each question | Step 6 |
| **Spaced review** | Dashboard reminds you to revisit modules after 1 day, 3 days, 7 days, 14 days | Dashboard |
| **Confidence marking** | Self-rate: Confident / Review / Not Ready. App resurfaces "Not Ready" modules | Step 6 |
| **Quick recall cards** | On the dashboard: random one-liner pops up → can you explain it in 10 seconds? | Dashboard |

---

### 2. Interview Question Bank

A searchable library of **real interview questions** organized by topic and level.

**Every question includes:**
- The question itself
- **Ideal answer** — concise, structured, what the interviewer wants to hear
- **Key points checklist** — the 3-5 things you MUST mention
- **Follow-up questions** — what they ask next if you answer well
- **Red flags** — answers that get you rejected
- **Interviewer's intent** — what skill they're actually testing

**Question types:**
| Type | Example |
|------|---------|
| **Conceptual** | "What's the difference between `AddScoped` and `AddTransient`?" |
| **Scenario** | "Your API response time jumped from 200ms to 3s. Walk me through debugging." |
| **Code-based** | "What does this code output? What's the bug?" |
| **Design** | "How would you design a notification system?" |
| **Behavioral** | "Tell me about a time you shipped something you weren't proud of." |

**Filters:**
- By topic (C#, ASP.NET, SQL, Angular, etc.)
- By level (Junior / Mid / Senior)
- By type (Conceptual / Scenario / Code / Design / Behavioral)
- Bookmarks — save questions you want to revisit
- "Random" — surprise me with a question

**Linked to Learn & Exercise:**
Each question links back to the relevant Learn module. Don't know the answer? One click takes you to the concept explanation + exercises.

---

### 3. Mock Interview Simulator

A timed, structured mock interview that pulls from the Question Bank.

**Setup:**
- Pick level + topics + duration (15 / 30 / 45 min)
- Pick type: Technical Screening | Deep Dive | Full Loop

**Flow:**
1. Warm-up (1-2 easy questions)
2. Core technical (3-5 medium questions)
3. Deep dive (1-2 hard follow-ups)
4. System design scenario (Mid+ only)
5. Behavioral (1-2 STAR questions)

**Rules:**
- Per-question timer + overall timer
- Can't go back (like a real interview)
- Text input for your answer (self-evaluate against key points)
- "Skip" allowed but recorded

**Scorecard after completion:**
- Overall score out of 100
- Per-topic breakdown
- Key points you hit vs missed
- Time management analysis
- Top 3 areas to review (links to Learn modules)
- History of all mock interviews with trend chart

---

### 4. Progress Dashboard

- **Module completion** — which Learn & Exercise modules you've finished
- **Exercise accuracy** — % correct per topic, per exercise type
- **Weak area radar chart** — visual map of strong vs weak topics
- **Readiness score** — overall interview readiness based on your level
- **Streak tracker** — consecutive days practiced
- **Mock interview history** — scores over time
- **Suggested next action** — "You're weak on async/await → do this module"
- All data in `localStorage` — export/import as JSON backup

---

### 5. Comparison Tables

Side-by-side comparisons interviewers love to ask about. Each comparison includes a "when to use which" rule of thumb.

- `struct` vs `class`
- `abstract class` vs `interface`
- `IEnumerable` vs `IQueryable`
- `Task.Run` vs `Task.Factory.StartNew` vs `new Task`
- `AddSingleton` vs `AddScoped` vs `AddTransient`
- `string` vs `StringBuilder`
- `var` vs `dynamic` vs `object`
- `==` vs `.Equals()` vs `ReferenceEquals()`
- `async void` vs `async Task`
- Lazy vs Eager vs Explicit loading (EF)
- Clustered vs Non-Clustered Index
- `WHERE` vs `HAVING`
- `INNER JOIN` vs `LEFT JOIN` vs `CROSS JOIN`
- REST vs gRPC vs GraphQL
- `Subject` vs `BehaviorSubject` vs `ReplaySubject`
- `OnPush` vs `Default` change detection
- Monolith vs Microservices
- Vertical Slice vs Clean Architecture

Each comparison has a **mini-exercise** at the bottom: "Given this scenario, which would you choose?"

---

### 6. Cheat Sheets

One-page quick reference per topic. Designed for **last-day-before-interview** revision.

- C# keywords & tricks
- async/await patterns
- LINQ cheat sheet
- EF Core gotchas & commands
- SQL quick ref (JOINs visual, indexes, isolation levels)
- HTTP status codes (grouped, with when-to-use)
- Design patterns (name + one-liner + when to use)
- SOLID principles (one C# example each)
- Angular CLI commands
- Git commands for interviews

Printable layout. No fluff.

---

### 7. Concept Deep Dives

For the 30-40 most critical concepts, a structured deep dive:

```
What is it?         → One sentence. Your interview elevator pitch.
How does it work?   → 2-3 sentences. The real explanation.
Code example        → Minimal, runnable.
Junior depth        → Know the definition + basic usage.
Mid depth           → Know the internals + when NOT to use it.
Senior depth        → Know the trade-offs + real-world war stories.
Common follow-ups   → What the interviewer asks next.
Common mistakes     → What most candidates get wrong.
```

**Connected:** each deep dive links to its Learn & Exercise module + related Question Bank entries.

---

## Technical Architecture

```
interview-cracker/
├── src/
│   ├── app/
│   │   ├── core/                    # Services, guards, interceptors
│   │   ├── shared/                  # Reusable components, pipes
│   │   ├── features/
│   │   │   ├── home/                # Landing + level selection
│   │   │   ├── learn/               # Learn & Exercise modules
│   │   │   ├── question-bank/       # Searchable question library
│   │   │   ├── mock-interview/      # Interview simulator
│   │   │   ├── dashboard/           # Progress tracking
│   │   │   ├── comparisons/         # Side-by-side tables
│   │   │   ├── cheatsheets/         # Quick reference
│   │   │   └── deep-dives/          # Concept explanations
│   │   └── data/                    # JSON files per topic
│   │       ├── modules/             # Learn content + exercises
│   │       ├── questions/           # Interview question bank
│   │       └── comparisons/         # Comparison data
│   ├── assets/
│   └── environments/
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions → GitHub Pages
├── angular.json
└── package.json
```

**Tech choices:**
- Angular 19+ with standalone components
- Angular Signals for state
- Lazy loading per feature
- All content in JSON files (no backend)
- localStorage for progress
- Responsive + dark/light theme

---

## Build Priority

| Phase | What | Why |
|-------|------|-----|
| **Phase 1** | Level selector + 6-step Learn modules (C# fundamentals: struct vs class, value vs ref, string vs StringBuilder) with memorization anchors | Core loop — the 6 steps are the entire product. Get this right first. |
| **Phase 2** | Question Bank + more Learn modules (OOP, DI, async/await, collections) | Browse real questions, link them back to learning modules |
| **Phase 3** | Progress Dashboard + spaced review reminders | Track what you know, resurface what you forgot |
| **Phase 4** | Mock Interview Simulator | Full timed simulation pulling from question bank |
| **Phase 5** | Comparisons + Cheat Sheets + Deep Dives | Quick reference + last-day revision material |

---

## The Flow (How a Candidate Uses This)

```
1. Select level: Junior / Mid / Senior
                    │
2. Pick a track (e.g., "C# Fundamentals")
                    │
3. Start first module (e.g., "Value vs Reference Types")
   │
   ├── Step 1: Read the one-liner → memorize it
   ├── Step 2: Study the visual breakdown → understand it
   ├── Step 3: Trace the code example → see it work
   ├── Step 4: Learn memory anchors → never forget it
   │           (mnemonic, analogy, gotcha, interview trick)
   ├── Step 5: Do exercises → prove you know it
   │           (predict output, spot bug, fill gap, true/false)
   │           Score 80%+ to unlock next module
   └── Step 6: Interview rehearsal → practice the real answer
               Self-rate: Confident / Review / Not Ready
                    │
4. Module complete → next module unlocks
   │
   ├── Confident? → move forward
   ├── Not sure? → flagged for spaced review (1d, 3d, 7d, 14d)
   └── Not ready? → loop back to Step 1
                    │
5. Question Bank (anytime)
   │
   ├── Browse real interview questions by topic
   ├── See ideal answer + key points + follow-ups
   ├── Don't know an answer? → one click to Learn module
   └── Bookmark for mock interview prep
                    │
6. Mock Interview (when ready)
   │
   ├── Timed simulation
   ├── Scorecard with per-topic breakdown
   └── Weak areas → links back to Learn modules
                    │
7. Dashboard
   │
   ├── Modules completed / total
   ├── Spaced review reminders (modules due for revisit)
   ├── Quick recall cards (random one-liner → can you explain?)
   ├── Weak area radar chart
   └── "Interview ready" or "Focus on these 3 modules"
```
