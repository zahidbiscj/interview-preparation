# JavaScript & React — Cheatsheet

> Covers 39 questions across **JS Fundamentals**, **Async & Event Loop**, **React**. Each question card now ships a 6-turn mock dialogue + 3–5 follow-up Q&As.

## Quick-Recall Checklist
- [ ] `typeof` returns `number/string/boolean/undefined/object/function/symbol/bigint`; `typeof null==='object'`; arrays → `Array.isArray()`.
- [ ] `NaN !== NaN` → test with `Number.isNaN()` (not global `isNaN`); `typeof NaN==='number'`.
- [ ] Hoisting: `var`→`undefined`; `function`→callable; `let`/`const`→TDZ ReferenceError.
- [ ] `var`=function-scoped/redeclarable; `let`/`const`=block-scoped/TDZ; `const` locks binding not value. Default `const`.
- [ ] `null` (intentional empty) vs `undefined` (unassigned). `null==undefined` true, `===` false.
- [ ] `this`: regular = call-site; arrow = lexical (ignores `call/apply/bind`).
- [ ] Closure = inner fn remembers outer scope after return (privacy, counters). var-in-loop → use `let`.
- [ ] Coercion: `+` concats with string, other math → number. Falsy: `0 '' null undefined NaN false`.
- [ ] Shallow copy (`{...o}`, `Object.assign`, `slice`) shares nested refs; deep = `structuredClone`.
- [ ] `prototype` (on constructors) vs `__proto__` (instance link). `inst.__proto__===Fn.prototype`.
- [ ] Object create: literal / `new` / `class` / `Object.create` / factory. Iterate: `Object.entries`, `for...in` (+`hasOwnProperty`).
- [ ] Spread expands (shallow), destructuring unpacks, rest collects. Strict mode = `'use strict'` (default in modules/classes).
- [ ] Pure fn = same input→same output, no side effects (basis of reducers/memo).
- [ ] Memory leaks = forgotten timers/listeners, detached DOM, stray globals; clean up + `WeakMap`.
- [ ] localStorage persists / sessionStorage per-tab; strings only (`JSON.stringify`), ~5–10MB, not sent to server.
- [ ] Event loop: all sync → drain **microtasks** (promise `.then`, `await`, `queueMicrotask`) → one **macrotask** (`setTimeout`, I/O, UI) → repeat.
- [ ] JS single-threaded; runtime handles I/O; **Web Workers** = real threads (no DOM, `postMessage`).
- [ ] Callbacks (nest) → Promises (1 value, not cancellable) → Observables (N values, lazy, cancellable, RxJS).
- [ ] Offline = Service Worker cache + IndexedDB + Background Sync; detect via `navigator.onLine`.
- [ ] React: Virtual DOM + reconciliation (O(n) heuristic); diff applies minimal real-DOM updates.
- [ ] Keys = stable/unique per list item (never array index for reorderable lists).
- [ ] `useMemo` caches a VALUE by deps (`useCallback`=fn version); `useRef` = mutable `.current`, no re-render.
- [ ] Context shares to deep children (theme/auth/locale); consumers re-render on value change → split for hot state.
- [ ] Share data: props (down), callbacks (up), lift state (siblings), Context/Redux (global).
- [ ] AOT (build-time, fast start) vs JIT (runtime) — mainly Angular; React ships pre-transpiled JSX.
- [ ] Skip direct DOM in React except focus/scroll/measure/media/3rd-party → reach via `useRef`.

## Code-Trace Outputs (memorize)
| Snippet | Output | Why |
|---|---|---|
| `log(A); setTimeout(B,0); Promise.then(C); log(D)` | **A, D, C, B** | sync → microtask → macrotask |
| `setTimeout(()=>log(2),0); log(5)` | **5, 2** | sync beats macrotask |
| `Start; setTimeout(Timeout,0); Promise.then(Promise); End` | **Start, End, Promise, Timeout** | micro before macro |
| `var a=20; Abc(); fn{var a=10; log(a)}` | **10** | fn hoisted + scoped shadowing |
| `a=[..10..]; a[40]=40; a.length` | **41** | length = max index + 1 (sparse) |
| `[1,2,3,4].filter(n=>n%2).map(n=>n*10)` | **[10, 30]** | chaining via returned arrays |

## Gotchas
| Topic | Gotcha |
|---|---|
| Hoisting | `var`→`undefined`; function→callable; `let`/`const`→TDZ ReferenceError |
| `this` | Regular = call-site; arrow = lexical; arrow ignores `bind` |
| `==` vs `===` | `==` coerces (`0 == ''` true); always prefer `===` |
| `typeof null` | Returns `'object'` (legacy bug) |
| NaN | `NaN === NaN` is false; use `Number.isNaN`, avoid global `isNaN` (coerces) |
| Shallow vs deep | Spread/assign share nested refs; use `structuredClone` |
| Closures in loops | `var` shares one binding → use `let` per iteration |
| Sparse array | `a[40]=40` → `length 41`, holes read `undefined` |
| const | Locks the binding, not the value — contents still mutate |
| JSON deep-copy | Drops functions, `undefined`, Dates, symbols |
| `for...in` | Walks inherited keys — guard with `hasOwnProperty` |
| Context | Every consumer re-renders on value change — split hot contexts |
| List keys | Array index as key breaks on reorder/insert (wrong node reuse) |
| useMemo/useRef | Neither re-renders on change; useMemo recomputes by deps, useRef is manual |
