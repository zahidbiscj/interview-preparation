# JavaScript & React — Cheatsheet

## Types & Values
- **Dynamic typing** — check with `typeof`. Returns `number | string | boolean | undefined | object | function | symbol | bigint`.
- **`typeof null === 'object'`** (legacy bug). **`Array.isArray()`** for arrays.
- **NaN** — "Not a Number", `typeof NaN === 'number'`, `NaN !== NaN` → use **`Number.isNaN()`**.
- **null vs undefined** — `undefined` = unassigned (by JS); `null` = intentional empty (by you). `null == undefined` true, `===` false.
- **Falsy:** `0`, `''`, `null`, `undefined`, `NaN`, `false`. Everything else truthy (`[]` and `{}` are truthy!).

## Variables & Scope
- **var** = function-scoped, hoisted to `undefined`, redeclarable. **let/const** = block-scoped, **TDZ**, no redeclare. **const** = no reassign (contents still mutable).
- Default to **const** → **let** → avoid **var**.

## Hoisting
- `var` → hoisted, value `undefined` before its line.
- `function foo(){}` → fully hoisted, callable before its line.
- `let` / `const` → hoisted but in **Temporal Dead Zone** → ReferenceError if used early.

## `this`
- **Regular function** — bound by call-site (object before the dot; undefined/global if plain call). Changeable via `call/apply/bind`.
- **Arrow function** — no own `this`, inherits from enclosing (lexical) scope. Use for callbacks.

## Functions
- **Higher-order** — takes/returns functions (`map`, `filter`, `reduce`, closure factories).
- **Pure** — same input → same output, no side effects. Testable, cacheable.
- **Closure** — inner function remembers outer-scope variables after the outer returns (privacy, counters).

## Objects
- **Create:** literal `{}`, `new Constructor()`, `class`, `Object.create(proto)`, factory fn.
- **Iterate:** `Object.keys/values/entries`, `for...in` (incl. inherited — guard `hasOwnProperty`).
- **`prototype`** = blueprint on a constructor; **`__proto__`** = instance's link to its prototype. `inst.__proto__ === Fn.prototype`.
- **Shallow copy** (`{...o}`, `Object.assign`, `slice`) shares nested refs. **Deep copy** = `structuredClone(o)` (or `JSON.parse(JSON.stringify(o))`, drops fns/Dates).

## ES6+
- **Template literals** — `` `Hi ${x}` ``, multi-line, tagged templates.
- **Spread** `...` expands; **destructuring** unpacks; **rest** collects (`[head, ...tail]`).
- **Strict mode** — `'use strict';` (modules/classes are strict by default). Blocks accidental globals; `this` undefined in plain calls.

## Async & Event Loop
- **Single-threaded** — one call stack. Async I/O handled by the runtime; **Web Workers** = real parallel threads (no DOM, message passing).
- **Order:** all sync → drain **microtasks** (promises, `await` continuations, `queueMicrotask`) → one **macrotask** (setTimeout, I/O, events) → repeat.
- **Callback → Promise → Observable:** callbacks nest; promises = 1 future value (`.then`/`async-await`); observables = stream of N values, lazy, cancellable (RxJS).
- **Offline:** Service Worker caching + IndexedDB + Background Sync (PWA); detect with `navigator.onLine`.

## React
- **Virtual DOM** — in-memory tree, diffed (reconciliation) against previous render; only minimal real-DOM updates applied. Declarative + component-based.
- **Keys** — stable, unique per list item (not array index for reorderable lists).
- **useMemo** — caches a computed VALUE, recomputes when deps change. (`useCallback` = useMemo for functions.)
- **useRef** — mutable `.current` box, persists across renders, **no re-render** on change. DOM access + mutable values.
- **useMemo vs useRef** — useMemo recomputes by dependencies; useRef just remembers, you mutate manually.
- **Context API** — share data to deep children without prop drilling (`createContext` → `Provider` → `useContext`). Best for theme/auth/locale; consumers re-render on value change.
- **Sharing data** — props (down), callbacks (up), lift state (siblings), Context/Redux (global).
- **AOT vs JIT** — AOT compiles at build (fast start, smaller); JIT at runtime. Mainly Angular; React ships pre-transpiled JSX.

## Gotchas

| Topic | Gotcha |
|---|---|
| Hoisting | `var`→`undefined`; function→callable; `let`/`const`→TDZ ReferenceError |
| `this` | Regular = call-site; arrow = lexical (outer) scope |
| `==` vs `===` | `==` coerces (`0 == ''` true); always prefer `===` |
| Event loop | Sync → microtasks (promises) → macrotask (setTimeout 0). `console.log(5); setTimeout(()=>log(2),0)` → **5 then 2** |
| Shallow vs deep | Spread/assign share nested refs; use `structuredClone` for deep |
| Closures in loops | `var` in a loop shares one binding → use `let` per-iteration |
| Sparse array | `a[40]=40` → `a.length === 41` (max index + 1, holes = undefined) |
| const | Locks the binding, not the value — object contents still mutate |
