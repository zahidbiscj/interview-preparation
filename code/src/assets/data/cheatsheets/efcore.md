# EF Core Cheat Sheet

EF Core is a lightweight, cross-platform ORM that maps .NET objects to relational database tables via a `DbContext`.

---

## Must-Know One-Liners

- `DbContext` = unit of work + identity map + change tracker.
- `SaveChanges()` wraps all pending changes in a single transaction.
- Migrations = version control for your database schema.
- EF Core translates LINQ to SQL — but only what the provider supports.
- `AsNoTracking()` = read-only query, no change-tracker overhead.
- Value objects use **owned entity types** (`OwnsOne`/`OwnsMany`).
- Shadow properties live in the model but not in the CLR class.

---

## IEnumerable vs IQueryable

| | `IEnumerable<T>` | `IQueryable<T>` |
|---|---|---|
| **Where query runs** | In-memory (C# process) | Database (SQL) |
| **Deferred execution** | Yes — iterates on `foreach`/`.ToList()` | Yes — SQL sent on materialisation |
| **Filtering** | Pulls all rows, filters after | Translates `Where` to `WHERE` clause |
| **Use when** | In-memory collections, already loaded data | EF Core queries — always prefer until materialised |
| **Risk** | Loads entire table into memory | Untranslatable methods throw or silently evaluate client-side |

---

## Loading Strategies

| Strategy | How | Triggered |
|---|---|---|
| **Eager** | `.Include()` / `.ThenInclude()` | Same query, JOIN in SQL |
| **Lazy** | Virtual nav props + proxy | First access of nav property (extra round-trip) |
| **Explicit** | `context.Entry(e).Collection(x => x.Items).Load()` | Manual, on demand |

```csharp
// Eager loading
var orders = context.Orders
    .Include(o => o.Customer)
    .ThenInclude(c => c.Address)
    .ToList();

// Explicit loading
context.Entry(order).Collection(o => o.Items).Load();
```

**Lazy loading** requires `UseLazyLoadingProxies()` and `virtual` nav props — easy to forget and cause N+1.

---

## The N+1 Problem

**What it is:** 1 query fetches N parent rows; then N individual queries fetch each child collection — N+1 total round-trips.

```csharp
// BAD — N+1: 1 query for orders + 1 per order for items
foreach (var order in context.Orders.ToList())
    Console.WriteLine(order.Items.Count); // lazy load fires here

// GOOD — single JOIN
var orders = context.Orders.Include(o => o.Items).ToList();
```

**Fix:** Use eager loading (`Include`) or explicit loading in bulk. Avoid lazy loading in loops.

---

## Performance Tips

| Tip | Why / How |
|---|---|
| `AsNoTracking()` | Skips change tracker — 2–3× faster for read-only queries |
| **Projection with `Select`** | Only fetch columns you need; avoids loading entire entity |
| **Split queries** | `.AsSplitQuery()` — replaces cartesian-product JOIN with separate queries for large collections |
| **Compiled queries** | `EF.CompileQuery(...)` — caches query compilation overhead for hot paths |
| **Batch with `ExecuteUpdate`/`ExecuteDelete`** | EF Core 7+ — set/delete rows without loading entities |

```csharp
// AsNoTracking + projection
var names = context.Customers
    .AsNoTracking()
    .Select(c => new { c.Id, c.Name })
    .ToList();

// Compiled query
private static readonly Func<AppDbContext, int, Customer?> GetById =
    EF.CompileQuery((AppDbContext db, int id) => db.Customers.FirstOrDefault(c => c.Id == id));
```

---

## DbContext

- **Scoped lifetime** — one per HTTP request in ASP.NET Core; matches a unit of work.
- **Not thread-safe** — never share across threads; never inject as singleton.
- **Change tracker** — tracks entity state (`Added`, `Modified`, `Deleted`, `Unchanged`); `SaveChanges()` generates SQL from diffs.
- **Unit of work** — batch multiple repo operations into one `SaveChanges()` call / transaction.
- Dispose it — `using` or DI container handles it; long-lived contexts accumulate stale state and memory.

---

## Migrations

```bash
# Create a migration
dotnet ef migrations add <MigrationName>

# Apply to database
dotnet ef database update
```

- Each migration has `Up()` (apply) and `Down()` (rollback).
- **Common pitfalls:**
  - Renaming a column generates drop+add (data loss) — use `MigrationBuilder.RenameColumn` explicitly.
  - Never edit a migration that's already applied in production.
  - Check generated SQL with `dotnet ef migrations script` before deploying.
  - Missing `__EFMigrationsHistory` table = EF can't track applied migrations.

---

## Common Gotchas

| Gotcha | Detail |
|---|---|
| **Client-side evaluation** | EF silently pulls data into memory if it can't translate LINQ — check logs; throws in EF Core 3+ for top-level projections |
| **Tracking everything** | Default: all entities tracked; forgetting `AsNoTracking()` on reads wastes memory |
| **Long-lived DbContext** | Accumulates tracked entities, stale data, memory leaks — always scope tightly |
| **Lazy loading in serialisation** | Serialising a nav prop triggers lazy load → N+1 or infinite loops (circular refs) |
| **Null nav properties** | Not loaded nav props are `null` — check before access or always use `Include` |
| **Concurrency** | No optimistic concurrency by default — add `[ConcurrencyCheck]` or `rowversion` token |

---

## Quick-Recall Checklist

- [ ] Always `AsNoTracking()` on read-only queries.
- [ ] Use `Include`/`ThenInclude` to avoid N+1.
- [ ] Project with `Select` — don't fetch full entities when you need 2 columns.
- [ ] Keep `DbContext` scoped; never singleton.
- [ ] Check migration SQL before deploying to prod.
- [ ] Use `AsSplitQuery()` for multi-collection includes.
- [ ] Enable query logging in dev to catch untranslated expressions.
- [ ] Use `ExecuteUpdate`/`ExecuteDelete` for bulk ops (EF Core 7+).
- [ ] Add concurrency tokens on any entity with optimistic concurrency needs.
- [ ] Dispose `DbContext` — let DI or `using` handle it.
