# SQL Server Cheat Sheet

Microsoft's relational engine — T-SQL dialect, ACID-compliant, index-driven, with rich windowing and CTE support.

---

## Must-Know One-Liners

| Task | T-SQL |
|---|---|
| Row count fast | `SELECT SUM(row_count) FROM sys.dm_db_partition_stats WHERE object_id = OBJECT_ID('Orders') AND index_id < 2` |
| Last identity inserted | `SELECT SCOPE_IDENTITY()` |
| Top N rows | `SELECT TOP 10 * FROM Orders ORDER BY OrderDate DESC` |
| Conditional value | `SELECT IIF(Stock > 0, 'In Stock', 'Out') AS Status` |
| Null coalesce | `SELECT COALESCE(Phone, Mobile, 'N/A')` |
| String agg | `SELECT STRING_AGG(Name, ', ') FROM Tags` |
| Current user/db | `SELECT SUSER_NAME(), DB_NAME()` |
| Kill blocking | `KILL <spid>` |

---

## JOINs

```
Orders   Customers
 O1  ──►  C1
 O2  ──►  C2
 O3  (no match)
           C4 (no match)
```

| JOIN | Returns |
|---|---|
| `INNER JOIN` | Only matched rows (O1,C1 / O2,C2) |
| `LEFT JOIN` | All left + matched right; NULLs for unmatched right (O1,O2,O3) |
| `RIGHT JOIN` | All right + matched left; NULLs for unmatched left (O1,O2,C4) |
| `FULL OUTER JOIN` | All rows from both; NULLs where no match (O1,O2,O3,C4) |
| `CROSS JOIN` | Cartesian product — every combination |

```sql
-- LEFT JOIN example: all customers, even those with no orders
SELECT c.Name, o.OrderDate
FROM Customers c
LEFT JOIN Orders o ON o.CustomerId = c.Id
```

---

## Indexes

| | **Clustered** | **Non-Clustered** |
|---|---|---|
| Storage | Data rows **are** the index (B-tree leaf = actual row) | Separate structure; leaf stores key + row locator |
| Per table | **1 max** (usually PK) | Up to 999 |
| Read speed | Fast range scans on key | Fast point lookups; extra lookup if not covering |
| Write cost | Reorders data on insert/update | Cheaper than clustered on hot tables |

**Seek vs Scan**
- **Index Seek** — SQL can jump to matching rows via B-tree. Happens when predicate matches leading index key(s). *Want this.*
- **Index Scan** — reads entire index. Happens on non-SARGable predicates (`WHERE YEAR(OrderDate) = 2024`), missing index, or low selectivity.
- Make predicates SARGable: `WHERE OrderDate >= '2024-01-01'` not `WHERE CONVERT(varchar, OrderDate, 103) = '01/01/2024'`.

---

## DELETE vs TRUNCATE vs DROP

| | `DELETE` | `TRUNCATE` | `DROP` |
|---|---|---|---|
| Removes | Specific rows (or all) | All rows | Entire table object |
| WHERE clause | Yes | No | No |
| Logged | Fully (row-by-row) | Minimally (extent dealloc) | Minimally |
| Rollback | Yes | Yes (inside transaction) | Yes (inside transaction) |
| Triggers | Fires `DELETE` triggers | Does **not** fire triggers | No |
| Identity reset | No | **Yes** | N/A |
| FK constraints | Must satisfy | **Blocked** if FK exists | Must drop FK first |

---

## CTE vs Temp Table vs Table Variable

| | **CTE** | **#Temp Table** | **@Table Variable** |
|---|---|---|---|
| Scope | Current statement only | Session (local) or all sessions (global) | Current batch/SP |
| Persisted | No | Yes (tempdb) | No |
| Indexes | No (except inline) | Yes, including stats | Limited (no non-clustered until 2014+) |
| Best for | Readability, recursion | Large datasets, reuse across statements | Small sets, TVP params |
| Stats | None | SQL auto-creates | None → optimizer guesses 1 row |

**Local `#temp` vs Global `##temp`**
- `#temp` — visible only to current session/connection; auto-dropped on session end.
- `##temp` — visible to **all** sessions; dropped when last referencing session closes. Avoid in production.

---

## ACID + Isolation Levels

| Isolation Level | Dirty Read | Non-Repeatable Read | Phantom Read | Notes |
|---|---|---|---|---|
| `READ UNCOMMITTED` | Allowed | Allowed | Allowed | Fastest; use `NOLOCK` hint; data can be wrong |
| `READ COMMITTED` *(default)* | Prevented | Allowed | Allowed | Shared lock held only while reading |
| `REPEATABLE READ` | Prevented | Prevented | Allowed | Holds shared locks until transaction ends |
| `SNAPSHOT` | Prevented | Prevented | Prevented | Optimistic; reads row version from tempdb; no blocking |
| `SERIALIZABLE` | Prevented | Prevented | Prevented | Strictest; range locks; high deadlock risk |

```sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION
  -- work
COMMIT
```

---

## Handy Queries

**Nth Highest Salary**
```sql
WITH Ranked AS (
    SELECT Salary, ROW_NUMBER() OVER (ORDER BY Salary DESC) AS rn
    FROM Employees
)
SELECT Salary FROM Ranked WHERE rn = 3;  -- 3rd highest
```

**Find Duplicates**
```sql
SELECT Email, COUNT(*) AS cnt
FROM Users
GROUP BY Email
HAVING COUNT(*) > 1;
```

**WHERE vs HAVING**
```sql
-- WHERE filters rows BEFORE grouping
-- HAVING filters groups AFTER aggregation
SELECT DeptId, AVG(Salary) AS AvgSal
FROM Employees
WHERE IsActive = 1          -- filters rows first
GROUP BY DeptId
HAVING AVG(Salary) > 60000; -- filters groups
```

**Pagination**
```sql
SELECT * FROM Orders
ORDER BY OrderDate DESC
OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;  -- page 3, size 10
```

---

## Common Gotchas

- **Deadlocks** — two sessions hold locks the other needs. Fix: consistent lock order, short transactions, `READ COMMITTED SNAPSHOT`. Check `sys.dm_exec_requests` and deadlock graph in XE.
- **Missing index** — query plan shows "Missing Index" hint; but don't blindly add every suggested index (write overhead).
- **`SELECT *`** — breaks covering indexes, pulls unused columns, breaks views on schema change.
- **Implicit conversions** — `WHERE VarcharCol = 42` forces SQL to cast every row → scan. Always match data types.
- **`NOLOCK` lies** — can return duplicate or missing rows during page splits. Use Snapshot isolation instead.
- **NULL comparisons** — `NULL = NULL` is false; use `IS NULL` / `IS NOT NULL`. `NOT IN` with NULLs returns no rows.
- **Non-SARGable functions in WHERE** — wrapping a column in a function (`UPPER()`, `YEAR()`, `CONVERT()`) prevents index seek.
- **Implicit transactions** — `SET IMPLICIT_TRANSACTIONS ON` means every DML opens a transaction; easy to leave locks open.

---

## Question Map (what's in the bank)

**Queries & Indexing**
- DELETE vs TRUNCATE vs DROP · INNER/LEFT/RIGHT/FULL joins + anti-join
- Optimize a slow query / read a plan · CTE (incl. recursive) · #temp vs ##temp vs @table
- Triggers (AFTER/INSTEAD OF, INSERTED/DELETED) · clustered vs non-clustered index
- Nth highest salary (DENSE_RANK) · WHERE vs HAVING vs GROUP BY
- Window functions (ROW_NUMBER/RANK/DENSE_RANK) · covering index & Key Lookup
- Scan vs seek / SARGability · UNION vs UNION ALL · stored proc vs inline SQL

**Transactions & Design**
- ACID + XACT_ABORT · isolation levels & concurrency anomalies · deadlocks (1205) & prevention
- Normalization 1NF/2NF/3NF + denormalize · PK vs UNIQUE vs FK
- Clustered index physical storage / page splits · surrogate vs natural keys & scale · PK vs UNIQUE NULL/index

**Performance & Tuning**
- Parameter sniffing (RECOMPILE/OPTIMIZE FOR) · columnstore indexes
- Optimistic vs pessimistic locking (rowversion) · RCSI

---

## Quick-Recall Checklist

- [ ] Use `INNER JOIN` for matches only; `LEFT JOIN ... WHERE right IS NULL` = anti-join
- [ ] Prefer clustered index on PK; non-clustered on FK/filter columns; **index your FK columns**
- [ ] `TRUNCATE` resets identity & is minimally logged; `DELETE` is per-row, fires triggers; both roll back
- [ ] CTE = single-statement, inlined (not materialized); `#temp` has stats; `@table` assumes 1 row
- [ ] `DENSE_RANK` for Nth highest (ties); window funcs can't go in `WHERE` → wrap in CTE
- [ ] Default isolation `READ COMMITTED`; turn on **RCSI** to stop reader-writer blocking (versions in tempdb)
- [ ] Dirty / non-repeatable / phantom reads → know which level fixes each
- [ ] Deadlock = circular wait, victim gets **1205** → consistent lock order, short txns, retry
- [ ] `HAVING` filters after `GROUP BY`; `WHERE` before (no alias/aggregate in WHERE)
- [ ] Covering index (`INCLUDE`) kills the Key Lookup; key cols for seek/sort only
- [ ] Avoid `SELECT *`, implicit conversions, and non-SARGable predicates (function on column)
- [ ] Parameter sniffing: plan from first params → `OPTION (RECOMPILE)` / `OPTIMIZE FOR` / Query Store
- [ ] Columnstore = analytics/aggregation; rowstore = OLTP point lookups
- [ ] Optimistic = rowversion check (0 rows = conflict); pessimistic = `UPDLOCK`/`HOLDLOCK`
- [ ] `SCOPE_IDENTITY()` > `@@IDENTITY` (safe across triggers)
- [ ] Check execution plan for Index Scans, Key Lookups, and implicit conversion warnings
