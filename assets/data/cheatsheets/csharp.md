# C# & .NET Cheat Sheet

Statically-typed, managed, multi-paradigm language on the .NET CLR — JIT-compiled IL with a generational garbage collector. Covers: **OOP & SOLID · Memory & Types · Async & Threading · Advanced C# · Predict-the-Output · MVC & Misc**.

---

## Must-Know One-Liners

- **Value type** — holds data directly, copied on assignment (`int`, `bool`, `struct`, `enum`). **Reference type** — holds a pointer to a heap object (`class`, `string`, array, delegate).
- **Boxing** — wrap a value type in `object` (heap alloc); **unboxing** — cast back. Costly in hot paths; generics avoid it.
- **`virtual`/`override`** — runtime dispatch. **`new`** — hides (compile-time, declared type). C# methods are **non-virtual by default**.
- **`sealed`** — blocks inheritance/overriding; lets JIT devirtualize.
- **`const`** — compile-time, inlined into callers (versioning risk). **`readonly`** — set once in ctor, per instance. **`static readonly`** — one runtime value per type.
- **`delegate`** — type-safe function pointer. **`Action`** returns void, **`Func`** returns a value (last type arg), **`Predicate<T>`** ≈ `Func<T,bool>`. **`event`** wraps a delegate so subscribers can only `+=`/`-=`.
- **`yield return`** — lazy iterator state machine. **`async`/`await`** — compiler state machine; releases the thread during I/O.
- **Covariance (`out T`)** — `IEnumerable<Dog>` as `IEnumerable<Animal>`. **Contravariance (`in T`)** — reverse, for inputs.
- **`Span<T>`** — stack-only `ref struct`, zero-alloc view; **`Memory<T>`** — heap/async-friendly equivalent.
- **`record`** — value equality + `with` expression + concise positional syntax (DTOs/value objects).
- **DI lifetimes** — `Transient` (each resolve), `Scoped` (per request, e.g. `DbContext`), `Singleton` (whole app).

---

## Key Comparison Tables

### Struct vs Class
| | `struct` | `class` |
|---|---|---|
| Type | Value | Reference |
| Assignment | Full copy | Pointer copy |
| Inheritance | No (interfaces only) | Yes |
| `null` default | No (`Nullable<T>` opt-in) | Yes |
| Best for | Small immutable data | Identity-based objects |

### IEnumerable vs IQueryable
| | `IEnumerable<T>` | `IQueryable<T>` |
|---|---|---|
| Execution | In-memory (delegates) | Translated (expression tree → SQL) |
| `Where` runs | Client | Server/DB |
| Use when | In-memory collections | EF Core / remote sources |

### Task vs Thread vs ThreadPool
| | `Task` | `Thread` | `ThreadPool` |
|---|---|---|---|
| Level | High (TPL) | Raw OS thread | Reusable workers |
| Cost | Cheap | ~1MB stack | Pooled |
| Use | I/O `await`, CPU `Task.Run` | Long-running blocking | Short work items |

### Abstract Class vs Interface
| | `abstract class` | `interface` |
|---|---|---|
| Multiple | One base | Many |
| State/ctor | Yes | No (default methods since C# 8) |
| Use when | Shared state/code (Template Method) | Capability contract |

### Span vs Memory
| | `Span<T>` | `Memory<T>` |
|---|---|---|
| Storage | Stack-only (ref struct) | Heap-storable |
| Across `await`/fields | No | Yes |
| Use | Sync hot paths | Async boundary, then `.Span` |

---

## SOLID
- **S**ingle Responsibility — one reason to change.
- **O**pen/Closed — extend, don't modify.
- **L**iskov Substitution — subtypes substitutable for their base.
- **I**nterface Segregation — many small interfaces over one fat one.
- **D**ependency Inversion — depend on abstractions; inject `IRepo`, not `SqlRepo` (this is what ASP.NET Core DI enables).

---

## Async & Threading Essentials
- **What `await` does** — runs sync up to the await; if the task isn't done it **returns to the caller and releases the thread** to the pool, then a **continuation** (compiler state machine) resumes after I/O. Completed task → no thread hop (sync fast path).
- **Async ≠ multithreading** — it's **concurrency, not parallelism**. I/O-bound await uses *fewer* threads (none while waiting). CPU-bound → real parallelism via **`Task.Run`/`Parallel`/PLINQ**; `await` alone won't speed up CPU work.
- **Blocking is the enemy** — `.Result`/`.Wait()` holds a pool thread idle for the whole I/O → **thread-pool starvation** (pool grows only ~1 thread/500ms) → queued requests, latency spikes. Fix: await all the way.
- **Deadlock** — blocking with `.Result`/`.Wait()` on a thread with a `SynchronizationContext` (UI, classic ASP.NET) → continuation can't resume. Fix: **async all the way**; libraries use `ConfigureAwait(false)`. ASP.NET Core has no SyncContext.
- **Return types** — `Task`/`Task<T>` are awaitable + capture exceptions. **`async void`** only for event handlers (exceptions escape onto the context → can crash app). Else always `async Task`.
- **Exceptions** — stored on the Task, **rethrown (unwrapped) at the `await`** → normal `try/catch` works. `.Result`/`.Wait()` throw **`AggregateException`**. Never-awaited faulted task → `UnobservedTaskException`.
- **`Task.WhenAll`** — concurrent independent I/O (total ≈ slowest, not sum); throws first exception, holds all in `AggregateException`. **`WhenAny`** — first to finish; race vs `Task.Delay` for timeouts (or `.WaitAsync(TimeSpan)` on .NET 6+), then cancel the loser. Start tasks before awaiting.
- **Async in a loop** — `await` inside `foreach` = sequential (sum of calls). Collect tasks then `WhenAll` = concurrent — but **throttle** unbounded fan-out (`SemaphoreSlim(n)` or `Parallel.ForEachAsync` with `MaxDegreeOfParallelism`) to avoid rate-limits/connection exhaustion.
- **`ConfigureAwait(false)`** — skip the captured context. **ASP.NET Core: no-op** (no SyncContext) → don't add it. **Libraries: use it everywhere** (context-agnostic, avoids deadlocking callers). UI continuations must keep default (true).
- **`volatile`** — orders single field reads/writes; does NOT make `i++` atomic → use **`Interlocked`** (counters) or **`lock`** (multi-step).
- **`lock`/`Monitor`** (in-process, 1 thread) < **`Mutex`** (cross-process) ; **`SemaphoreSlim`** (N holders, awaitable — use instead of `lock` around `await`).
- **`ValueTask`** — struct, avoids `Task` alloc on synchronous/cache-hit paths; await once, never block. Default to `Task`.
- **`IAsyncEnumerable<T>`** — `await foreach` over async streams; produce with `async` + `yield return`, flow `[EnumeratorCancellation]` token.
- **`CancellationToken`** — cooperative; thread it everywhere; ASP.NET Core binds `HttpContext.RequestAborted`.

---

## Advanced C# Quick Hits
- **Generics** — reified (no Java erasure), no boxing for value types; constraints `where T : class, new(), IComparable<T>`.
- **LINQ** — lazy/deferred; `Where/Select/GroupBy/OrderBy`; `First` throws, `FirstOrDefault` returns default.
- **Pattern matching** — type/property/relational patterns, exhaustive switch expressions with `when` guards.
- **Records** — value equality, `with`, `record class` vs `record struct`.
- **`throw;`** preserves stack trace; **`throw ex;`** resets it (avoid).
- **Expression trees** — `Expression<Func<>>` is inspectable code → EF translates to SQL; `.Compile()` to run.
- **IOptions** — `IOptions` (singleton, once) · `IOptionsSnapshot` (scoped, per request) · `IOptionsMonitor` (singleton, live reload).
- **.NET** — Framework (legacy, Windows-only) → Core (cross-platform rewrite) → .NET 5+ (unified). **Native AOT** — native binary, fast startup, but limited reflection.

---

## MVC & Misc
- **MVC flow** — routing → controller action → calls model/services → passes model to view → renders. Keep logic out of controllers ("fat controller").
- **View data** — **ViewModel** (strongly-typed, preferred) · ViewData (dict) · ViewBag (dynamic wrapper) · **TempData** (survives one redirect, flash messages).
- **Razor Pages** vs MVC — Pages bundle `.cshtml` + `PageModel` (`OnGet`/`OnPost`); MVC suits APIs/complex routing.
- **`IActionResult`** — `View()`, `RedirectToAction()`, `Ok()`/`NotFound()`/`BadRequest()`, `Json()`, `File()`.
- **Model binding** — culture-sensitive date parsing fails silently → check `ModelState.IsValid`; send ISO 8601 (`yyyy-MM-dd`).

---

## Quick-Recall Checklist
- [ ] Four pillars; runtime vs compile-time polymorphism
- [ ] `virtual`/`override`/`new`/`sealed` and dispatch rules
- [ ] Value vs reference; struct vs class; boxing
- [ ] GC generations (0/1/2 + LOH); Server vs Workstation GC; Dispose vs finalizer
- [ ] `Span<T>` vs `Memory<T>`; why Span can't cross `await`
- [ ] `async`/`await` state machine; thread released at await; `.Result` deadlock + thread-pool starvation; `ConfigureAwait(false)` (library vs ASP.NET Core)
- [ ] async ≠ multithreading (concurrency vs parallelism; I/O vs CPU, `Task.Run`)
- [ ] `WhenAll` (parallel I/O) vs `WhenAny` (timeout/first); throttled fan-out in loops
- [ ] async exceptions: rethrown at await vs `AggregateException` from blocking
- [ ] `CancellationToken` end-to-end (`RequestAborted`, `ThrowIfCancellationRequested`)
- [ ] `async void` vs `async Task`; `ValueTask`; `IAsyncEnumerable`/`await foreach` streaming
- [ ] `volatile` vs `Interlocked` vs `lock`/`SemaphoreSlim`; race conditions
- [ ] Delegates/events/`Func`/`Action`/`Predicate`; multicast semantics
- [ ] Generics + constraints; covariance/contravariance
- [ ] LINQ deferred execution; `IEnumerable`/`IQueryable`/`IEnumerator`
- [ ] Records; pattern matching; `ref`/`out`/`in`; `const`/`readonly`
- [ ] `throw` vs `throw ex`; expression trees; IOptions trio
- [ ] DI lifetimes + captive dependency; MVC vs Razor Pages

---

## 🔮 Predict-the-Output Cheat Sheet (Gotchas)

Memorize these one-line rules — they cover most C# trick questions:

| Trap | Rule to say in the interview |
|------|------------------------------|
| **Virtual call in constructor** | Base ctor runs first; the virtual call dispatches to the derived override *before* its fields are set → often `NullReferenceException`. Never call virtual methods from a ctor. |
| **`new` vs `override`** | `override` = runtime dispatch (object's real type). `new` = *hiding*, resolved by the **declared** type at compile time. |
| **Non-virtual via base reference** | Static/early binding — the **declared** type's method runs, not the runtime type's. |
| **Property hiding** | Properties hidden with `new` follow the reference (declared) type, not the object type. |
| **Struct vs class assignment** | Struct copies (independent); class copies the reference (shared object). |
| **Closure over `for` variable** | All lambdas share one `i` → prints the final value (333). `foreach` variable is per-iteration (C# 5+). |
| **LINQ deferred execution** | `Select`/`Where` run when enumerated; `.ToList()` forces immediate execution and snapshots. |
| **Boxing equality** | Each box is a new heap object; `==` on `object` is reference equality; `.Equals` is value equality. |
| **String interning** | Compile-time constant concat is folded + interned (same ref); runtime concat is a new object. |
| **Integer overflow** | Default `unchecked` → wraps to `int.MinValue`. Use `checked { }` to throw `OverflowException`. |
| **Multicast `Func`** | Only the **last** subscriber's return value is kept; an exception mid-chain stops the rest. |
| **Explicit `(int)` cast** | Truncates toward zero — does not round. |
| **`??` chain** | Right-associative; returns the first non-null (`x ?? y ?? 99`). |
| **`async`/`await` order** | Runs synchronously up to the first real `await`; the continuation resumes afterward (1,2,4 then 3). |
| **`params` + `null`** | No args → empty array (`0`); explicit `null` → NRE on `.Length`. |
| **Static init order** | Static field initializers run in textual order **before** the static constructor body. |
| **Covariant assign** | `IEnumerable<Dog>` → `IEnumerable<Animal>` works; `List<Dog>` → `List<Animal>` does not (invariant). |

> **Interview tip:** for any snippet, first identify **declared type vs runtime type**, then ask "is this member `virtual`/`override` or hidden with `new`?" — that single distinction explains most of these.
