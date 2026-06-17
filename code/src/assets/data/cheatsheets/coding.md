# Coding & DSA Cheat Sheet

A compact pattern library for whiteboard / live-coding rounds. Most array/string problems reduce to one of: **two-pointer**, **hashing**, **voting**, **sliding window**, or a **classic math trick**. Pick the pattern, then state complexity before you code.

---

## Pattern Cheat Sheet

### Two-Pointer
Use when working from both ends of a sequence, or scanning a sorted array.
- **Reverse in place**: `left=0`, `right=n-1`, swap, move inward until they cross. O(n)/O(1).
- **Merge two sorted arrays**: one pointer per array, take the smaller front. O(m+n).
- Tuple swap in C#: `(a[i], a[j]) = (a[j], a[i]);`

### Hashing (counts / duplicates / lookups)
Trade O(n) space for O(1) average lookups.
- **Frequency**: `Dictionary<T,int>` -> `dict.TryGetValue(x, out c); dict[x]=c+1;`
- **Duplicates**: `HashSet<T>` -> `if (!seen.Add(x)) /* dup */`
- LINQ: `nums.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())`

### Boyer-Moore Majority Voting
For "appears more than n/k times" with O(1) space.
- **> n/2** -> one candidate, one counter; verify in a second pass.
- **> n/3** -> at most **two** candidates (3 winners would need > n votes). Track two (cand,count) pairs: match existing first, fill an empty slot next, else decrement both. Always **re-verify** counts in a second pass.

### Sliding Window
For contiguous subarray/substring problems (longest/shortest/sum/distinct).
- Expand `right`; when the window breaks a constraint, shrink from `left`.
- Keep a running aggregate (sum, or a count map) so each element enters/leaves once -> O(n).

### Sieve of Eratosthenes (primes up to n)
- Boolean array; for each prime `p`, cross out multiples starting at `p*p`.
- Loop `p` only to `sqrt(n)`. Time **O(n log log n)**, space O(n).

### Math tricks
- **Factorial trailing zeros**: count factors of 5 -> `n/5 + n/25 + n/125 + ...` Never compute n!.
- **Fibonacci**: iterate with two rolling vars `(a,b) = (b, a+b)` -> O(n)/O(1). Naive recursion is O(2^n).
- **Second largest**: single pass tracking `first` and `second`; init to `long.MinValue`.

---

## Complexity Reminders

| Operation | Time |
|---|---|
| Dictionary / HashSet add & lookup (avg) | O(1) |
| Sort (Array.Sort, List.Sort, ORDER BY) | O(n log n) |
| Linear scan / single pass | O(n) |
| Merge two sorted arrays | O(m + n) |
| Sieve of Eratosthenes | O(n log log n) |
| Trailing zeros / fast-doubling Fibonacci | O(log n) |
| Binary search (sorted) | O(log n) |
| Naive nested loops / pairwise | O(n^2) |

**Space**: in-place / two-pointer -> O(1); hashing -> O(n); recursion -> O(depth) stack.

---

## Linked Lists & Sorting

- **Best sort for a linked list = Merge Sort.** O(n log n), needs only sequential access, merges by **relinking nodes** (no random access). Quicksort/heapsort rely on O(1) indexing -> poor fit. Bottom-up merge sort reaches O(1) auxiliary space.
- **Singly**: forward only, least memory. **Doubly**: prev+next, O(1) bidirectional move/delete. **Circular**: tail -> head, natural round-robin cycling.
- **Browser back/forward navigation** -> doubly linked list (O(1) Back/Forward) or two stacks. **LRU cache** = doubly linked list + hash map for O(1) get/put.
- **Find middle / split**: slow + fast pointers (fast moves 2x).

---

## C# Quick Notes

- **Tuple vs List**: Tuple = fixed-size, heterogeneous (`(int, string)`, return multiple values); `List<T>` = dynamic, homogeneous, indexable/iterable.
- **Stack vs Heap**: stack = LIFO call frames + value-type locals + references, auto-freed on return; heap = reference-type objects, GC-managed. Boxing a value type allocates on the heap.
- Strings are **immutable** -> reverse/edit via `char[]` then `new string(c)`.
- `Split(null, StringSplitOptions.RemoveEmptyEntries)` splits on any whitespace and drops empties.

---

## SQL Coding Patterns

- **N-th highest salary**: `DENSE_RANK() OVER (ORDER BY Salary DESC)`, filter `rnk = N`. DENSE_RANK dedupes ties (no gaps); ROW_NUMBER/OFFSET don't.
- **2nd highest (subquery form)**: `SELECT MAX(Salary) FROM Employee WHERE Salary < (SELECT MAX(Salary) FROM Employee)` -> NULL-safe.
- **Correlated subquery**: inner query references the **outer row** (e.g. `WHERE e2.DeptId = e.DeptId`); re-evaluated per row. Often rewritable as a JOIN or window function for speed.
- **Self join**: join a table to itself with two aliases (`e` / `m`), `e.ManagerId = m.Id`; use **LEFT JOIN** to keep the manager-less top of the hierarchy.
- **Per-group ranking / averages**: add `PARTITION BY DepartmentId`.
