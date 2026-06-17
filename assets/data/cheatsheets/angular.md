# Angular & Frontend Cheat-Sheet (v17–19, Standalone + Signals)

Angular is a TypeScript-first, opinionated SPA framework built around components, DI, RxJS, and (since v16) reactive signals.

---

## Must-Know One-Liners

- **Standalone components** (`standalone: true`) replace NgModules — import dependencies directly in `imports: []`.
- `inject()` replaces constructor injection anywhere in an injection context (component, directive, guard, factory).
- `signal()` / `computed()` / `effect()` are Angular's fine-grained reactivity primitives.
- `input()` / `output()` (v17.1+) replace `@Input()` / `@Output()` with signal-based equivalents.
- `@defer` (v17) lazy-loads a block of template with `@loading`, `@placeholder`, `@error` sub-blocks.
- `@if` / `@for` / `@switch` (v17 control flow) replace `*ngIf` / `*ngFor` — `@for` **requires** `track`.
- Tree-shakable providers: `providedIn: 'root'` on a service = singleton without a module.
- `HttpClient` is now provided via `provideHttpClient()` in `app.config.ts`, not `HttpClientModule`.

---

## Data Binding

| Type | Syntax | Direction |
|---|---|---|
| Interpolation | `{{ value }}` | Component → Template |
| Property binding | `[property]="expr"` | Component → DOM |
| Event binding | `(event)="handler($event)"` | DOM → Component |
| Two-way binding | `[(ngModel)]="prop"` | Both (requires `FormsModule`) |
| Signal input | `myVal = input<string>()` + `[myVal]="x"` | Parent → Child (signal) |

---

## Lifecycle Hooks (in order)

| Hook | Fires when |
|---|---|
| `ngOnChanges` | Before `ngOnInit` and on every `@Input` change (not for signals) |
| `ngOnInit` | Once, after first `ngOnChanges`; safe to call services |
| `ngDoCheck` | Every CD cycle — avoid heavy logic |
| `ngAfterContentInit` | After `<ng-content>` projection resolves (once) |
| `ngAfterContentChecked` | After every CD check of projected content |
| `ngAfterViewInit` | After component's view + children render (once); safe for `@ViewChild` |
| `ngAfterViewChecked` | After every CD check of the view |
| `ngOnDestroy` | Before component is removed — unsubscribe, complete subjects here |

---

## Promise vs Observable

| | Promise | Observable |
|---|---|---|
| Lazy? | No (eager) | Yes |
| Values | One | Zero to many |
| Cancellable? | No | Yes (`unsubscribe()`) |
| Operators | `.then()/.catch()` | Full RxJS pipeline |
| Use with `async` pipe | Yes (auto-unwrap) | Yes (preferred) |

### RxJS Flattening Operators

| Operator | Behaviour |
|---|---|
| `switchMap` | Cancels previous inner observable when a new outer value arrives — use for search/autocomplete |
| `mergeMap` | Runs all inner observables concurrently — use for parallel HTTP calls |
| `concatMap` | Queues inner observables; runs them one-by-one in order — use for sequential writes |
| `exhaustMap` | Ignores new outer values while an inner observable is active — use for login buttons |

---

## Change Detection

| Strategy | Behaviour |
|---|---|
| `Default` | Checks every component on every CD cycle (Zone.js-triggered) |
| `OnPush` | Only checks when: `@Input` reference changes, an event fires inside the component, `async` pipe emits, or `markForCheck()` is called |

- **Zone.js** monkey-patches async APIs (setTimeout, Promises, XHR) to trigger CD automatically.
- **Signals**: `signal()` updates trigger **targeted** re-renders without Zone.js; works seamlessly with `OnPush`.
- Run outside zone for perf: `NgZone.runOutsideAngular(() => { ... })`.
- `ChangeDetectorRef.detectChanges()` — trigger CD manually; `markForCheck()` — schedule check up the tree.

---

## Route Guards (functional style preferred in v15+)

```ts
export const authGuard: CanActivateFn = (route, state) => inject(AuthService).isLoggedIn();
```

| Guard | Interface / Fn type | Purpose |
|---|---|---|
| `canActivate` | `CanActivateFn` | Block route activation |
| `canActivateChild` | `CanActivateChildFn` | Block child route activation |
| `canDeactivate` | `CanDeactivateFn<T>` | Warn before leaving (unsaved changes) |
| `canMatch` | `CanMatchFn` | Decide whether a route config matches at all (replaces `canLoad`) |
| `resolve` | `ResolveFn<T>` | Pre-fetch data before component renders |

---

## Directives

### Structural (change DOM shape)
Prefix `*` is syntactic sugar for `<ng-template>`.

| Directive | Purpose |
|---|---|
| `@if` / `*ngIf` | Conditionally add/remove element |
| `@for` / `*ngFor` | Repeat element per collection item |
| `@switch` / `*ngSwitch` | Switch-case rendering |
| `*ngTemplateOutlet` | Stamp a template reference |

### Attribute (modify existing element)
| Directive | Purpose |
|---|---|
| `[ngClass]` | Add/remove CSS classes dynamically |
| `[ngStyle]` | Apply inline styles dynamically |
| `[routerLink]` | Declarative navigation |
| `[routerLinkActive]` | Add class when route is active |
| Custom | `@Directive({ selector: '[myDir]' })` + `inject(ElementRef)` |

---

## Common Gotchas

- **Memory leaks**: Always unsubscribe — use `takeUntilDestroyed()` (v16+) or `async` pipe instead of manual `subscribe()`.
- **OnPush + mutated arrays**: Mutating an array (`arr.push(x)`) won't trigger CD — always return a new reference (`[...arr, x]`).
- **Function calls in templates**: `{{ getVal() }}` re-runs every CD cycle — use a `computed()` signal, `pipe: pure`, or stored property instead.
- **`trackBy` / `track`**: Omitting it in `*ngFor` / `@for` causes full DOM re-creation on any list change.
- **`ExpressionChangedAfterItHasBeenCheckedError`**: Modifying state in `ngAfterViewInit` without `setTimeout` or `queueMicrotask`.
- **Zone-less apps**: `provideExperimentalZonelessChangeDetection()` (v18) — signals + `async` pipe only; no Zone.js.
- **Lazy-loaded routes**: Ensure `providers` in the lazy component/module don't duplicate root singletons.

---

## Quick-Recall Checklist

- [ ] Standalone component? `standalone: true`, `imports: [...]` in decorator
- [ ] Signal state? `signal()` + `computed()` + `effect()` (avoid side-effects in computed)
- [ ] HTTP calls? `provideHttpClient()`, `inject(HttpClient)`, unwrap with `async` pipe
- [ ] Route guard? Functional guard + `inject()` — no class needed
- [ ] Unsubscribing? `takeUntilDestroyed(destroyRef)` or `async` pipe
- [ ] Large list? `@for (item of items; track item.id)`
- [ ] Lazy template block? `@defer (on viewport)` with `@placeholder`
- [ ] OnPush component? Immutable updates only; pass observables/signals as inputs
- [ ] Perf profiling? Angular DevTools flame chart + `ng.profiler.timeChangeDetection()`
