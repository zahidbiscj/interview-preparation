# 02 — Data Model & Schema (Question Bank)

> This is the **most important file**. Everything else (service, components) is built around this shape.
> Read this first, then `04-models.ts` has the exact TypeScript interfaces.

---

## The Hierarchy

```
Topic                 →  C#
  └── Subtopic         →  Fundamentals
        └── Question   →  "What is the CLR?"
              └── Answer (progressive: one-liner → key points → deep dive)
```

Three levels of grouping, then the question, then a **layered answer** so a "silly"
question and a "hard" question both fit the same shape — easy ones just fill fewer fields.

---

## ⭐ How the files are organized (RECOMMENDED)

**One JSON file per Topic + one small index file.** Not one giant file.

```
src/assets/data/
├── topics.json            ← index: list of topics (drives the sidebar)
└── questions/
    ├── csharp.json        ← all C# subtopics + questions
    ├── sql.json
    ├── angular.json
    ├── aspnet.json
    └── ...                ← add a new file when you add a new topic
```

**Why this over one big `questions.json`:**

| Concern | One big file | Per-topic files ✅ |
|--------|--------------|--------------------|
| You add questions weekly | Scroll a 5,000-line file | Open just `csharp.json` |
| App load speed | Loads everything upfront | Lazy-load each topic on click |
| Mistake risk | One bad comma breaks the whole bank | One bad comma breaks one topic |
| Git diffs | Huge, noisy | Small, per-topic |

> **Simple alternative:** if you'd rather start dead-simple, you *can* put everything in one
> `questions.json` (same `topics[]` shape below, just inlined). It works fine up to a few
> hundred questions. The per-topic split is a 10-minute change later. The schema below is
> identical either way — only the file boundary changes.

---

## File 1 — `topics.json` (the index)

Drives the left sidebar. Tiny. You edit this only when adding a **new topic**.

```json
{
  "topics": [
    { "id": "csharp",  "name": "C#",          "icon": "🔷", "file": "csharp.json",  "order": 1 },
    { "id": "aspnet",  "name": "ASP.NET Core", "icon": "🌐", "file": "aspnet.json",  "order": 2 },
    { "id": "sql",     "name": "SQL Server",   "icon": "🗄️", "file": "sql.json",     "order": 3 },
    { "id": "angular", "name": "Angular",      "icon": "🅰️", "file": "angular.json", "order": 4 }
  ]
}
```

Subtopic names are **not** duplicated here — they come from the topic file when it loads.
That keeps this index stable and avoids editing two places.

---

## File 2 — `csharp.json` (a topic file)

```json
{
  "topicId": "csharp",
  "topicName": "C#",
  "subtopics": [
    {
      "subtopicId": "fundamentals",
      "subtopicName": "Fundamentals",
      "order": 1,
      "questions": [
        {
          "id": "csharp-fund-001",
          "q": "What is the CLR?",
          "level": "junior",
          "type": "conceptual",
          "freq": "high",
          "tags": ["clr", "runtime", "execution"],
          "answer": {
            "oneLiner": "The CLR (Common Language Runtime) is .NET's virtual machine — it JIT-compiles IL to native code and manages memory, type safety, and garbage collection at runtime.",
            "keyPoints": [
              "Runs **IL (Intermediate Language)** produced by the C# compiler, JIT-compiling it to native machine code",
              "Provides **automatic memory management** via the garbage collector",
              "Enforces **type safety** and code-access security",
              "Is **language-agnostic** — C#, F#, and VB.NET all compile to the same IL the CLR executes"
            ],
            "detail": "When you build a C# project, the compiler does **not** produce machine code directly. It produces **IL** plus metadata, packaged in an assembly (.dll/.exe). At runtime the CLR loads that assembly and the **JIT compiler** turns IL into native code for the current CPU, on demand, the first time each method runs. The CLR also owns the **managed heap** and the **garbage collector**, so you don't free memory manually.\n\nThink of the layers: your C# → IL (compiler) → native code (CLR's JIT) → CPU.",
            "code": {
              "lang": "text",
              "snippet": "C# source  ──(csc compiler)──►  IL + metadata (.dll)\n                                      │\n                              (CLR loads it)\n                                      │\n                              JIT compiles IL ──► native code ──► CPU",
              "note": "The CLR is the box in the middle — it turns portable IL into native code and runs it."
            },
            "analogy": "The CLR is to .NET what the JVM is to Java — a managed runtime that runs portable bytecode and handles memory for you.",
            "followUps": [
              "What's the difference between managed and unmanaged code?",
              "What is IL, and why not compile straight to native code?",
              "What is the difference between the CLR, the CTS, and the CLS?"
            ],
            "redFlags": [
              "Calling the CLR 'the .NET framework' or 'the SDK' — it's specifically the runtime/execution engine",
              "Saying C# compiles directly to machine code"
            ]
          }
        },

        {
          "id": "csharp-fund-002",
          "q": "What is the difference between a struct and a class?",
          "level": "mid",
          "type": "comparison",
          "freq": "high",
          "tags": ["struct", "class", "value-type", "reference-type"],
          "answer": {
            "oneLiner": "A struct is a value type stored (usually) on the stack that copies on assignment; a class is a reference type on the heap that shares a reference on assignment.",
            "keyPoints": [
              "Struct = value type, Class = reference type",
              "Assigning a struct copies it; assigning a class copies the reference (both point to one object)",
              "Structs can't be null (unless `Nullable<T>`) and can't be inherited",
              "Use structs for small, short-lived, immutable data (< ~16 bytes)"
            ],
            "code": {
              "lang": "csharp",
              "snippet": "struct P { public int X; }\nP a = new() { X = 1 };\nP b = a;      // copy\nb.X = 99;\n// a.X is still 1",
              "note": "Struct assignment makes an independent copy. A class would share the object."
            },
            "analogy": "Struct = photocopy (your original is untouched). Class = shared Google Doc (everyone edits the same one).",
            "followUps": [
              "What is boxing and when does it happen?",
              "What's a `readonly struct`?",
              "Why are mutable structs considered dangerous?"
            ],
            "redFlags": ["Saying structs are *always* on the stack (not when boxed or as a field of a class)"]
          }
        },

        {
          "id": "csharp-fund-003",
          "q": "What does the `var` keyword do?",
          "level": "junior",
          "type": "conceptual",
          "freq": "medium",
          "tags": ["var", "type-inference"],
          "answer": {
            "oneLiner": "`var` lets the compiler infer the variable's type from the right-hand side at compile time — it's still strongly typed, not dynamic."
          }
        }
      ]
    },

    {
      "subtopicId": "oop",
      "subtopicName": "OOP",
      "order": 2,
      "questions": [
        {
          "id": "csharp-oop-001",
          "q": "What is the difference between an abstract class and an interface?",
          "level": "mid",
          "type": "comparison",
          "freq": "high",
          "tags": ["abstract", "interface", "oop"],
          "answer": {
            "oneLiner": "An abstract class can hold state and partial implementation and is single-inheritance; an interface is a contract a class implements, and a class can implement many.",
            "keyPoints": [
              "A class can inherit **one** abstract class but implement **many** interfaces",
              "Abstract classes can have fields, constructors, and implemented methods; interfaces traditionally only declare members (default methods exist since C# 8)",
              "Use an abstract class for an 'is-a' base with shared code; an interface for a capability ('can-do')"
            ],
            "followUps": [
              "When would you pick one over the other?",
              "What are default interface methods (C# 8)?"
            ]
          }
        }
      ]
    }
  ]
}
```

---

## Field reference

### Question

| Field | Required | Type | Notes |
|-------|----------|------|-------|
| `id` | ✅ | string | Stable, unique. Convention: `{topic}-{subtopic}-{seq}` → `csharp-fund-001` |
| `q` | ✅ | string | The question text |
| `level` | – | `"junior" \| "mid" \| "senior"` | Optional and **ignored by the UI** (levels were dropped). Safe to omit. |
| `type` | – | `"conceptual" \| "code" \| "comparison" \| "scenario" \| "design" \| "behavioral"` | Optional. Drives the type filter / badge |
| `freq` | – | `"high" \| "medium" \| "low"` | How often it's asked. `high` → 🔥 badge |
| `tags` | – | string[] | Free-text tags, used by search |
| `answer` | ✅ | object | See below |

### Answer (progressive — fill only what the question needs)

| Field | Required | Type | Shown when |
|-------|----------|------|-----------|
| `oneLiner` | ✅ | string (markdown) | First expand — the memorize-this answer |
| `keyPoints` | – | string[] (markdown) | "Show full answer" |
| `detail` | – | string (markdown) | "Show full answer" — the teach-from-basics explanation |
| `code` | – | `{ lang, snippet, note? }` | "Show full answer" |
| `analogy` | – | string (markdown) | "Show full answer" |
| `followUps` | – | string[] | "Show full answer" |
| `redFlags` | – | string[] | "Show full answer" |
| `related` | – | string[] (question ids) | "Show full answer" |

> **Silly/simple question** → just `oneLiner` (see `csharp-fund-003`).
> **Hard question** → fill the rest. The UI hides any field you leave out, so there are no empty boxes.

`oneLiner`, `keyPoints`, `detail`, and `analogy` are rendered as **Markdown** (bold, lists, inline code).
`code.snippet` is rendered in a syntax-highlighted code block using `code.lang`.

---

## ⭐ How to add a new question (your weekly workflow)

1. Pick the topic file, e.g. `src/assets/data/questions/csharp.json`.
2. Find the right `subtopic` (or add a new subtopic object).
3. Copy this template into that subtopic's `questions` array:

```json
{
  "id": "csharp-fund-00X",
  "q": "",
  "level": "junior",
  "type": "conceptual",
  "freq": "medium",
  "tags": [],
  "answer": {
    "oneLiner": ""
  }
}
```

4. Fill `q` and `oneLiner` (minimum). Add `keyPoints` / `detail` / `code` when you want depth.
5. Bump the `id` sequence number. Done — **no code changes, no rebuild of logic.**

### Adding a brand-new topic
1. Create `src/assets/data/questions/<topic>.json` with the topic-file shape above.
2. Add one line to `topics.json`. That's it.

### Keeping JSON valid
- Edit in VS Code — it flags trailing commas and unclosed brackets instantly.
- Optionally add the JSON Schema in `04-models.ts` notes for editor autocomplete.
- Each topic file is independent, so a typo can only break that one topic.

---

## What's intentionally NOT here (yet)

- No progress/score/spaced-repetition fields on questions — that belongs in `localStorage`, keyed by `id`, not in the content files. Keeps content clean and shareable.
- Bookmarks are stored in `localStorage` as a `Set<id>`, not in the JSON.
