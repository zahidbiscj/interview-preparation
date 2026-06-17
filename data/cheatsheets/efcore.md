# EF Core Cheat Sheet

Lightweight cross-platform ORM mapping .NET objects to relational tables via a `DbContext`. Covers 4 subtopics / 33 questions: **Querying & Performance**, **Loading & Change Tracking**, **Migrations & Modeling**, **Advanced**.

---

## Must-Know One-Liners

- `DbContext` = unit of work + identity map + change tracker; register **Scoped**.
- `SaveChanges()` wraps all pending changes in **one transaction** (all or nothing).
- `IQueryable` → SQL on the DB; `IEnumerable` → LINQ in memory. `AsEnumerable()` is the boundary.
- `AsNoTracking()` = read-only, no change-tracker snapshots (20–40% faster).
- EF Core 3.0+ **throws** on untranslatable LINQ (no silent client eval).
- N+1 = 1 query + 1 per child; fix with `Include` or a `Select` projection.
- Multiple collection Includes → Cartesian explosion → `AsSplitQuery()`.
- EF7+ `ExecuteUpdate`/`ExecuteDelete` = set-based, no tracking, no SaveChanges.
- Value objects → owned types (`OwnsOne`/`OwnsMany`); single hidden column → shadow property.

---

## 1. Querying & Performance

| Topic | Key point |
|---|---|
| **IEnumerable vs IQueryable** | IQueryable composes one SQL query; IEnumerable runs C# in memory. Don't leak IQueryable from repos. |
| **N+1** | Nav access in a loop fires per-row queries. Fix: `Include`/`ThenInclude` (JOIN) or `Select` DTO. |
| **AsNoTracking** | Skips snapshots, not the DB call. Use on GET/reports; `AsTracking()` to opt back in. |
| **Client vs server eval** | Server = SQL; client = .NET. 3.0 bans implicit client eval — use `AsEnumerable()` to opt in explicitly. |
| **Select projections** | `SELECT col1,col2` only; projected types are **untracked**; `Items.Count` → SQL COUNT subquery. |
| **Compiled queries** | `EF.CompileQuery` skips translation/lookup overhead — hot paths only (~2–3x); profile first. |
| **SQL logging** | `LogTo(...)`, `EnableSensitiveDataLogging()` (dev only), `TagWith("label")` to trace in prod. |
| **Raw SQL** | `FromSqlRaw`/`Interpolated` returns tracked entities; `ExecuteSqlRaw` = non-query. **Always parameterize.** |
| **Split queries** | One SELECT per collection — avoids Cartesian explosion; not one transaction by default. |

```csharp
// One SQL: WHERE + ORDER BY + projection, untracked
var dto = await ctx.Orders
    .AsNoTracking()
    .Where(o => o.Total > 100)
    .Select(o => new OrderDto { Id = o.Id, Items = o.Items.Count }) // COUNT in SQL
    .ToListAsync();

// Avoid N+1 + Cartesian explosion
var blogs = await ctx.Blogs
    .Include(b => b.Posts).Include(b => b.Tags)
    .AsSplitQuery().ToListAsync();
```

---

## 2. Loading & Change Tracking

| Topic | Key point |
|---|---|
| **Loading strategies** | Eager (`Include`, one JOIN) / Lazy (virtual + proxies, N+1-prone) / Explicit (`Entry().Collection().Load()`). |
| **DbContext lifecycle** | Scoped per request = unit of work. Not thread-safe; never Singleton. Background svc → `IServiceScopeFactory`. |
| **Change tracker** | Snapshots originals on load; `DetectChanges` diffs on save → only changed columns UPDATEd. O(n) over tracked. |
| **Add / Attach / Update** | Add=INSERT; Attach=Unchanged (no SQL); Update=all props Modified (full UPDATE, can wipe fields). |
| **Thread safety** | ChangeTracker + identity map + connection are single-threaded → parallel use corrupts/throws. Use `IDbContextFactory`. |
| **Identity resolution** | Same row = same instance via identity map; `FindAsync` checks tracker before DB (first-level cache). |
| **SaveChanges / UoW** | Minimal SQL in one transaction; span multiple with `BeginTransaction`; prefer `SaveChangesAsync`. |
| **Tracking vs no-tracking** | Tracking = savable + identity resolution + GC cost; no-tracking = faster reads, disconnected POCOs. |

```csharp
// Partial update: Attach + target only changed props
var p = new Product { Id = id };
ctx.Attach(p);
p.Price = newPrice;              // only Price marked Modified
await ctx.SaveChangesAsync();

// Parallel reads need separate contexts
await using var c1 = await factory.CreateDbContextAsync();
await using var c2 = await factory.CreateDbContextAsync();
```

---

## 3. Migrations & Modeling

| Topic | Key point |
|---|---|
| **Workflow** | `migrations add <Name>` (diffs snapshot → Up/Down) → `database update`. Tracked in `__EFMigrationsHistory`. |
| **Code-first vs DB-first** | Code-first: C# → migrations → DB (versioned). DB-first: `dbcontext scaffold` from existing schema. |
| **Seeding** | `HasData` (static, needs explicit PK, baked into migration) vs custom idempotent seeder (large/env-specific). |
| **Fluent API vs annotations** | Fluent does everything (composite keys, converters, owned types); keep entities clean. `ApplyConfigurationsFromAssembly`. |
| **Relationships** | 1:N `HasMany().WithOne().HasForeignKey()`; M:N `HasMany().WithMany()` (auto join) or explicit join entity for payload. `OnDelete(Restrict)` to break cascade cycles. |
| **Prod migrations** | `script --idempotent` as separate deploy step; not `MigrateAsync` at startup (races). Expand-contract for zero-downtime. |
| **Optimistic concurrency** | Token (`[ConcurrencyCheck]` / `.IsRowVersion()`) in WHERE; 0 rows → `DbUpdateConcurrencyException` → 409 + ETag. |
| **Up/Down** | Schema via MigrationBuilder; `Sql("...")` for data backfill/views/procs; Down reverses; `suppressTransaction` when needed. |
| **Owned types** | `OwnsOne`/`OwnsMany` = DDD value objects in owner's table; no DbSet, load with owner. |

```csharp
// Concurrency token
builder.Property(r => r.RowVersion).IsRowVersion();

// Migration: add NOT NULL safely
mb.AddColumn<bool>("IsVerified", "Users", nullable: false, defaultValue: false);
mb.Sql("UPDATE Users SET IsVerified = 1");   // backfill in same migration
```

---

## 4. Advanced

| Topic | Key point |
|---|---|
| **Shadow properties** | Column in model, no C# member; great for audit cols + conventional FKs. Access via `Entry().Property("X")`, query with `EF.Property<T>(e,"X")`. |
| **Soft delete** | `IsDeleted` + `HasQueryFilter(e => !e.IsDeleted)`; flip Deleted→Modified in SaveChanges; `IgnoreQueryFilters()` for admin. |
| **Bulk ops** | EF7+ `ExecuteUpdate`/`ExecuteDelete` (set-based, bypass tracker → stale entities); BulkExtensions/`SqlBulkCopy` for big inserts. |
| **Code/DB First vs Migrations** | Migrations is the *mechanism* for Code First, not a third approach. No EDMX in EF Core. |
| **Owned vs value object vs shadow** | Value object = DDD concept; owned entity = its EF mapping; shadow = single hidden column. |
| **Multi-SaveChanges transactions** | `BeginTransaction` + explicit commit, or `TransactionScope` (ambient). With retry strategy wrap in `CreateExecutionStrategy().ExecuteAsync`. |
| **AsSplitQuery vs single** | One collection → single fine; multiple → split avoids explosion but no snapshot consistency. |

```csharp
// EF7 set-based update — one SQL, no tracking
await ctx.Products.Where(p => p.CategoryId == 5)
    .ExecuteUpdateAsync(s => s.SetProperty(p => p.Price, p => p.Price * 1.1m));

// Soft delete filter
modelBuilder.Entity<Product>().HasQueryFilter(p => !p.IsDeleted);
```

---

## Common Gotchas

| Gotcha | Detail |
|---|---|
| **Untranslatable LINQ** | Custom C# in `Where` throws (3.0+). Filter in SQL, then `AsEnumerable()`. |
| **Update with partial DTO** | Marks all props Modified → can zero out missing fields. Prefer Attach + targeted props. |
| **Lazy load after dispose** | Serializing nav props after the scoped context is gone → N+1 or "context disposed". Project to DTO. |
| **MigrateAsync in prod** | Multi-pod race; use idempotent scripts. |
| **Rename = drop+add** | Data loss; hand-edit to `RenameColumn`. |
| **ExecuteUpdate staleness** | Bypasses tracker; reload or run before loading. |
| **Singleton/shared DbContext** | "A second operation was started…" + corruption. |

---

## Quick-Recall Checklist

- [ ] `AsNoTracking()` on read-only queries (or default the context to it).
- [ ] `Include`/`ThenInclude` or `Select` projection to kill N+1.
- [ ] `AsSplitQuery()` for multiple collection Includes (mind consistency).
- [ ] Project to DTOs — don't fetch full entities for 2 columns.
- [ ] Keep `DbContext` Scoped; `IDbContextFactory` for parallel/Blazor.
- [ ] Attach + target props for partial updates (not `Update` with partial DTO).
- [ ] Parameterize all raw SQL (`FromSqlInterpolated`).
- [ ] `ExecuteUpdate`/`ExecuteDelete` for bulk (EF7+); BulkExtensions for big inserts.
- [ ] Concurrency token (`rowversion`) on contended entities; handle `DbUpdateConcurrencyException`.
- [ ] Idempotent migration scripts in prod; review generated SQL (renames!).
- [ ] Fluent API in `IEntityTypeConfiguration<T>` + `ApplyConfigurationsFromAssembly`.
- [ ] Enable SQL logging in dev (`LogTo`, `TagWith`) to catch untranslated/slow queries.
