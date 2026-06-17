# C# & .NET Cheat Sheet

C# is a statically-typed, managed, multi-paradigm language running on the .NET CLR with automatic memory management via a generational garbage collector.

---

## Must-Know One-Liners

- **Value type**: stored on the stack (or inline in containing type); copied on assignment. Examples: `int`, `bool`, `struct`, `enum`.
- **Reference type**: heap-allocated; variable holds a pointer. Examples: `class`, `string`, `array`, `delegate`.
- **Boxing**: wrapping a value type in `object` — allocates on heap. **Unboxing**: explicit cast back. Both are costly in hot paths.
- **`sealed`**: prevents inheritance. Enables JIT devirtualisation — minor perf win.
- **`readonly`**: field can only be assigned in declaration or constructor.
- **`const`**: compile-time constant; baked into call-site IL — changing it requires recompilation of consumers.
- **`delegate`**: type-safe function pointer. `Func<T,TResult>` / `Action<T>` are generic built-in delegates.
- **`event`**: a delegate field with `add`/`remove` accessors; subscribers can't clear each other.
- **`yield return`**: turns a method into a state machine; elements produced lazily.
- **`async/await`**: syntactic sugar over `Task`; continuation scheduled on captured `SynchronizationContext` by default.
- **Covariance (`out`)**: `IEnumerable<Derived>` usable as `IEnumerable<Base>`. **Contravariance (`in`)**: reverse.
- **`Span<T>`**: stack-allocated slice over contiguous memory — zero heap allocation, no GC pressure.

---

## Key Comparison Tables

### Struct vs Class

| | `struct` | `class` |
|---|---|---|
| Type | Value | Reference |
| Allocation | Stack / inline | Heap |
| Inheritance | No (can implement interfaces) | Yes |
| Default `null` | No | Yes |
| Copy semantics | Full copy | Pointer copy |
| Best for | Small, immutable data (Point, Money) | Identity-based objects |

### Value Type vs Reference Type

| | Value | Reference |
|---|---|---|
| Storage | Stack / inline | Heap |
| Assignment | Copies value | Copies reference |
| `null` by default | No (`Nullable<T>` opt-in) | Yes |
| GC pressure | None | Yes |

### `IEnumerable<T>` vs `IQueryable<T>`

| | `IEnumerable<T>` | `IQueryable<T>` |
|---|---|---|
| Execution | In-process (LINQ to Objects) | Translated (SQL, etc.) |
| Expression tree | No | Yes (`Expression<Func<T>>`) |
| Where runs | Client (after fetch) | Server (DB filter) |
| Use when | In-memory collections | ORMs / remote data sources |

### `Task` vs `Thread`

| | `Task` | `Thread` |
|---|---|---|
| Abstraction | High (TPL / thread pool) | Low (OS thread) |
| Cost | Cheap (pool reuse) | Expensive (~1 MB stack) |
| Return value | `Task<T>` | None natively |
| Cancellation | `CancellationToken` | `Thread.Interrupt` / flag |
| Prefer | Almost always | Long-running CPU work only |

### Abstract Class vs Interface

| | `abstract class` | `interface` |
|---|---|---|
| Multiple inheritance | No | Yes (multiple interfaces) |
| State / fields | Yes | No (default impls only since C# 8) |
| Access modifiers | Yes | Public by default |
| Constructor | Yes | No |
| Use when | Shared base behaviour | Contract / capability |

---

## The SOLID Principles

- **S** — Single Responsibility: a class has one reason to change.
- **O** — Open/Closed: open for extension, closed for modification (use inheritance/composition).
- **L** — Liskov Substitution: subtypes must be substitutable for their base type without breaking correctness.
- **I** — Interface Segregation: prefer many small, focused interfaces over one fat interface.
- **D** — Dependency Inversion: depend on abstractions, not concretions; inject dependencies.

---

## Common Gotchas / Traps

- **Boxing in generics**: `List<int>` avoids boxing; `ArrayList` (non-generic) boxes every element.
- **Mutable structs**: mutating a struct returned from a property silently mutates a *copy* — original unchanged.
- **Async deadlock with `.Result` / `.Wait()`**: blocking on a `Task` in a context with a single-threaded `SynchronizationContext` (ASP.NET classic, WinForms) causes deadlock because the continuation can't resume. Fix: `ConfigureAwait(false)` or go `async` all the way.
- **Captured variables in closures**: loop variable captured by reference — all lambdas see the *final* value. Fix: copy to a local inside the loop.
- **`string` is immutable reference type**: comparing with `==` works because `string` overrides `==` to compare content, not reference.
- **`IDisposable` & finalizer**: always implement both if holding unmanaged resources; call `GC.SuppressFinalize(this)` in `Dispose()`.
- **`Task` is not a thread**: `await` does not block; it registers a continuation and returns the thread to the pool.
- **`static` constructor**: runs once per type, lazily, on first use — thread-safe by CLR guarantee.

---

## "Say This in the Interview" — Golden Lines

**1. What is the difference between `==` and `.Equals()`?**
> "`==` is a compile-time operator — for reference types it compares references unless overloaded (e.g., `string`). `.Equals()` is a virtual method — override it to define value equality. Always override both together with `GetHashCode()`."

**2. Explain `async`/`await`.**
> "It's compiler-generated state machine sugar. `await` suspends the method, releases the thread back to the pool, and resumes on a continuation — typically on the captured `SynchronizationContext`. No thread is blocked during the await."

**3. Value types vs reference types — which lives on the stack?**
> "Value types *often* live on the stack, but correctness matters more than memory model: a value-type field on a class lives on the heap inside the object. The key distinction is *copy semantics*, not stack vs heap."

**4. What is the garbage collector doing?**
> "The CLR GC is a generational, compacting, mark-and-sweep collector. Short-lived objects (Gen 0) are collected cheaply and frequently. Survivors promote to Gen 1, then Gen 2. Large objects (>85 KB) go to the LOH, which is rarely compacted."

**5. When would you use an `interface` over an `abstract class`?**
> "Interface when you want a pure contract that unrelated types can implement (multiple inheritance of behaviour). Abstract class when you have shared implementation or state that subclasses should inherit — and a single, clear hierarchy."

---

## Quick-Recall Checklist

- [ ] Difference between `ref`, `out`, and `in` parameters
- [ ] What `IDisposable` is for and the dispose pattern
- [ ] How `yield return` creates a lazy iterator
- [ ] What `Expression<Func<T>>` is and why EF uses it instead of `Func<T>`
- [ ] `lock` keyword and Monitor under the hood; when to use `Interlocked` instead
- [ ] Difference between `Task.Run`, `Task.Factory.StartNew`, and `async` method
- [ ] Covariance vs contravariance with `IEnumerable<out T>` / `Action<in T>`
- [ ] When `ConfigureAwait(false)` matters and when it doesn't (ASP.NET Core)
- [ ] What `record` gives you vs `class` (value equality, `with` expressions, immutability)
- [ ] Generics constraints: `where T : class`, `new()`, `IComparable<T>`
- [ ] How events prevent subscribers from invoking or clearing each other
- [ ] Gen 0 / Gen 1 / Gen 2 GC collection and what promotes an object

---

## 🔮 Predict-the-Output Cheat Sheet (Gotchas)

Memorize these one-line rules — they cover most C# trick questions:

| Trap | Rule to say in the interview |
|------|------------------------------|
| **Virtual call in constructor** | Base ctor runs first; a virtual call dispatches to the derived override *before* its fields are initialized → often a `NullReferenceException`. Never call virtual methods from a ctor. |
| **`new` vs `override`** | `override` = runtime dispatch (object's real type). `new` = *hiding*, resolved by the **declared** (reference) type at compile time. |
| **Non-virtual method via base reference** | Static/early binding — the **declared** type's method is called, not the runtime type's. |
| **Property hiding** | Properties hidden with `new` follow the reference type, not the object type. |
| **Struct vs class assignment** | Struct copies on assignment (independent); class copies the reference (shared object). |
| **Closure over `for` variable** | All lambdas share one `i` → prints the final value. `foreach` variable is per-iteration (C# 5+). |
| **LINQ deferred execution** | `Select`/`Where` run when enumerated. `.ToList()`/`.ToArray()` force immediate execution. |
| **Boxing** | Each box is a new heap object; `==` on `object` is reference equality; `.Equals` is value equality. |
| **String interning** | Compile-time constant concatenation is folded + interned (same ref); runtime concat is a new object. |
| **Integer overflow** | Default is `unchecked` → wraps silently. Use `checked { }` to throw `OverflowException`. |
| **Multicast `Func`** | Only the **last** subscriber's return value is kept; an exception mid-chain stops the rest. |
| **Explicit `(int)` cast** | Truncates toward zero — does not round. |
| **`async`/`await` order** | Code runs synchronously up to the first real `await`; the continuation resumes afterward. |
| **Static init order** | Static field initializers run in textual order **before** the static constructor body. |

> **Interview tip:** when given a snippet, first identify the **declared type vs runtime type**, then ask "is this member `virtual`/`override` or hidden with `new`?" — that single distinction explains most of these.
