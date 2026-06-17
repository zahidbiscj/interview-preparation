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

---

## Question-Bank Map (what to drill, by subtopic)

### 1. Components & Basics (12)
- Component = class + `@Component` (template/styles/logic); selector = custom tag; tree rooted at `AppComponent`.
- Directives: structural (`*ngIf`/`*ngFor`, `*`→`<ng-template>`) vs attribute (`ngClass`); v17 `@if`/`@for`/`@switch`.
- Compiler: **AOT** (build-time, prod default) vs **JIT** (browser, dev); **Ivy** engine (v9+, locality, tree-shaking).
- Lifecycle: `ngOnChanges` → `ngOnInit` → `ngAfterViewInit` → `ngOnDestroy` (fetch in init, clean up in destroy).
- DOM: real/incremental DOM via Ivy — **no virtual DOM**.
- Architecture: component-based + hierarchical DI, loosely MVVM; full framework.
- Lazy loading: `loadComponent`/`loadChildren`; own injector scope; smaller initial bundle.
- Standalone vs NgModule: own `imports`, `bootstrapApplication`, default in v17.
- Service + DI: `@Injectable({providedIn:'root'})` singleton; `inject()`; hierarchical injector.
- CLI: `ng new/serve/generate/build/test/update`; esbuild `application` builder (v17+).
- Smart (container) vs dumb (presentational) components; dumb + OnPush.
- `@ViewChild` (own template) vs `@ContentChild` (projected); ready in AfterInit; signal `viewChild()`.

### 2. Data Binding & Reactivity (9)
- 4 bindings: `{{ }}`, `[prop]`, `(event)`, `[(ngModel)]` (= property + event).
- Promise (eager, 1, not cancellable) vs Observable (lazy, 0–N, cancellable, operators).
- `@Input`/`@Output` (+`EventEmitter`); signal `input()`/`output()` (v17.1).
- Reactive forms (TS model, typed v14+) vs template-driven (`ngModel`, simple).
- RxJS: lazy streams, `.pipe()` operators, subscription; prefer `async` pipe.
- Memory leaks: `async` pipe / `takeUntilDestroyed()` / `destroy$` + `takeUntil`.
- Subjects: Subject / BehaviorSubject (current value) / ReplaySubject(n) / AsyncSubject (last on complete); expose `asObservable()`.
- Hot vs cold: cold = per-subscriber (HTTP), hot = shared (events); `shareReplay(1)` to dedupe+cache.
- Signals vs RxJS: signals for sync state (`computed`/`effect`), RxJS for async; bridge `toSignal`/`toObservable`.

### 3. Advanced Angular (20)
- Change detection: Zone.js → top-down check; **OnPush** (input ref / event / async emit / `markForCheck()`).
- Route guards: `CanActivate`/`CanDeactivate`/`CanActivateChild`/`Resolve`/`CanMatch`; functional + `UrlTree` redirect.
- Flattening: `switchMap` (cancel/search), `concatMap` (queue), `mergeMap` (parallel), `exhaustMap` (ignore/login).
- Signals internals: dependency tracking, `computed` lazy/memoised, push-pull, zoneless.
- `trackBy` / `track` (required in `@for`) → DOM reuse + child-state preservation.
- Pure (memoised, default) vs impure (every CD cycle, e.g. `async`) pipes.
- HTTP interceptors: `HttpInterceptorFn`, clone immutable req, auth/401/logging; order matters.
- `@defer` views: triggers (viewport/idle/interaction/hover/timer/when), `@placeholder`/`@loading`/`@error`, `prefetch`.
- Route resolvers: pre-fetch before activate; `EMPTY` cancels nav; UX trade-off vs skeleton.
- OnPush in practice: immutable updates (`[...arr]` not `push`); `markForCheck` for WebSocket pushes.
- Schematics: Tree transforms behind `ng generate/add/update`; atomic; migrations.
- Perf: profile first → OnPush/signals, lazy + `@defer`, `track`, pure pipes, trim bundle, SSR.
- ViewEncapsulation (Emulated/None/ShadowDom) vs `viewProviders` (DI scoping, not styles).
- Custom directive: `@Directive` + selector; structural = `TemplateRef` + `ViewContainerRef`.
- `@HostListener` (host events) / `@HostBinding` (host class/style/attr).
- Manual component: just a class + `@Component`; no CLI required.
- Scoped styles: Emulated default, `:host`, `:host-context`, avoid `::ng-deep`.
- Constructor = DI only (inputs undefined); react to inputs in `ngOnChanges`/`ngOnInit`.
- Component-level `providers` → one instance per component, destroyed with it.
- Preserve form data: shared service/store + `CanDeactivate` guard + storage.

### 4. React & Micro-frontends (4)
- Module Federation / micro-frontends: independent deploy, host loads remotes, `shared` deps.
- React virtual DOM + reconciliation vs Angular incremental DOM.
- `useMemo` (memoise value, ~`computed`) vs `useRef` (mutable `.current`, no re-render).
- React Context (`createContext`/Provider/`useContext`) solves prop drilling (~Angular service).
