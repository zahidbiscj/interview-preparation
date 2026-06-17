# ASP.NET Core & Web API — Interview Cheat Sheet

Cross-platform, high-performance framework for HTTP APIs, web apps, and microservices on the unified .NET runtime. 48 coaching cards across 6 subtopics — each with a mock dialogue and follow-up Q&A.

---

## Subtopic Map (what to drill)

| # | Subtopic | Covers |
|---|---|---|
| 1 | **Middleware & Pipeline** | pipeline/onion model, Use/Run/Map, Kestrel, Program.cs, custom middleware, ordering, short-circuit |
| 2 | **Dependency Injection** | lifetimes, why DI, captive dependency, register/resolve, constructor injection, keyed services (.NET 8), the container |
| 3 | **Web API & REST** | REST constraints, PUT vs PATCH, global exceptions, AuthN vs AuthZ, JWT flow, versioning, idempotency, model binding |
| 4 | **Security & Filters** | JWT+OAuth, filters vs middleware, filter types, action results, CORS, role vs policy auth, refresh tokens |
| 5 | **Realtime & Performance** | rate limiting, SignalR, stateless REST, 4xx/5xx, parallelism+throttle, async deadlocks, refresh-token storage, IActionResult vs ActionResult<T>, filter vs middleware order, resource vs action filter |
| 6 | **Advanced** | minimal vs controllers, endpoint filters, IExceptionHandler (.NET 8), health checks, BackgroundService, output vs response caching, Blazor modes, over-posting, sync vs async |

---

## Must-Know One-Liners

- **Middleware** runs in registration order; **order is critical**. Onion model: before `next()` = inbound, after = outbound.
- **Short-circuit** = write a response and don't call `next()` (auth reject, cache hit, rate limit).
- `Use` (pass-through) vs `Run` (terminal) vs `Map` (branch on path).
- **Lifetimes**: Singleton (whole app) / Scoped (per request, e.g. DbContext) / Transient (every resolve).
- **Captive dependency** = Scoped/Transient captured inside a Singleton → fix with `IServiceScopeFactory`.
- `Program.cs` (minimal hosting, .NET 6+): register services *before* `Build()`, configure pipeline *after*.
- **AuthN** = who you are (builds `ClaimsPrincipal`); **AuthZ** = what you can do. `UseAuthentication` before `UseAuthorization`.
- **JWT** = `header.payload.signature`, signed not encrypted, stateless. Short access token + revocable refresh token.
- `IActionResult` (any HTTP result) vs `ActionResult<T>` (typed body, better Swagger).
- **Filters** see action/ModelState/result; **middleware** doesn't. `[Authorize]` = authorization filter (runs early).
- **PUT** = full replace, idempotent; **PATCH** = partial, not guaranteed idempotent.
- Global errors: `UseExceptionHandler` or `IExceptionHandler` (.NET 8) → RFC 7807 `ProblemDetails`.
- **Async** helps I/O throughput/scalability, not single-request speed; never block with `.Result`/`.Wait()`.

---

## DI Lifetimes

| Lifetime | Created | Destroyed | Use case | Pitfall |
|---|---|---|---|---|
| **Singleton** | Once at startup/first use | App shutdown | Config, caches, clocks | Must be thread-safe; don't capture Scoped |
| **Scoped** | Once per HTTP request | End of request | `DbContext`, unit-of-work | Don't use in singletons/background services directly |
| **Transient** | Every resolve | When consumer disposed | Cheap stateless helpers | Waste if it holds resources |

---

## Middleware Pipeline Order (wrong order = bugs)

```
UseExceptionHandler / UseDeveloperExceptionPage   ← first, wraps everything
UseHsts / UseHttpsRedirection
UseStaticFiles
UseRouting
UseCors                                            ← after routing, before authz
UseAuthentication                                  ← before Authorization
UseAuthorization
MapControllers / MapGet ...                         ← endpoints
```

### Use vs Run vs Map

| Method | Behaviour |
|---|---|
| `Use` | Pass-through; can short-circuit by not calling `next()` |
| `Run` | Terminal — never calls next |
| `Map` / `MapWhen` | Branch into a sub-pipeline on path/predicate; doesn't rejoin |

> Custom middleware = class with `InvokeAsync(HttpContext)` + ctor `RequestDelegate next`. It's a **singleton** → inject scoped services as `InvokeAsync` **parameters**, not in the constructor.

---

## REST Quick Reference

| Verb | Semantic | Idempotent | Safe |
|---|---|---|---|
| `GET` | Read | Yes | Yes |
| `POST` | Create/trigger | No | No |
| `PUT` | Full replace | Yes | No |
| `PATCH` | Partial update | No* | No |
| `DELETE` | Remove | Yes | No |

\*PATCH idempotent only if designed so. Make POST retry-safe with an **idempotency key**.

### Status Codes

| Code | When |
|---|---|
| `200` / `201` / `204` | OK / Created (+Location) / No content (DELETE) |
| `400` / `401` / `403` / `404` / `409` | Bad input / unauthenticated / forbidden / not found / conflict |
| `429` | Rate limit exceeded (+ `Retry-After`) |
| `500` | Unhandled server error — never leak stack traces |

**4xx = client's fault, 5xx = server's fault.** 401 (no identity) ≠ 403 (identity, no permission).

---

## Auth — JWT Flow (4 steps)

1. Client POSTs credentials to `/auth/login`.
2. Server validates, signs JWT (`header.payload.signature`), returns it.
3. Client sends `Authorization: Bearer <token>` each request.
4. `UseAuthentication` validates signature + expiry → `UseAuthorization` checks roles/policies.

- **JWT** = token *format*; **OAuth 2.0** = authorization *flow*; **OIDC** = adds authentication on OAuth.
- **Refresh token**: short access token + longer revocable refresh; store in **httpOnly secure cookie** (never localStorage — XSS); **rotate** on use.
- **Role-based** (`[Authorize(Roles="Admin")]`) vs **policy-based** (requirement + handler) — policies scale to complex rules.

---

## Filters vs Middleware

| | Middleware | Filters |
|---|---|---|
| Scope | Whole HTTP pipeline (static files too) | Only when MVC routing matches |
| Sees | `HttpContext` | Action, args, `ModelState`, result |
| Use for | Logging, CORS, compression, exceptions | Validation, caching, model-aware logic |

**Filter order:** Authorization → Resource (wraps binding, good for caching) → Action (after binding) → Exception → Result.
**Order overall:** middleware → routing → authorization filter → resource → binding → action filter → action.
Minimal-API equivalent of filters = **endpoint filters** (.NET 7; read args via `ctx.GetArgument<T>`).

---

## Performance & Realtime Notes

- **Rate limiting** (.NET 7+): fixed window (bursty at edges), sliding window (smooths), token bucket (controlled bursts), concurrency → returns **429**.
- **SignalR**: server push; transports WebSockets → SSE → long polling; scale out needs a **backplane** (Redis/Azure SignalR).
- **Parallelism**: `Task.WhenAll` for concurrency, but **throttle** with `SemaphoreSlim` / `Parallel.ForEachAsync(MaxDegreeOfParallelism)`. `Parallel.For` = CPU-bound only.
- **Async deadlock**: `.Result`/`.Wait()` + captured context. ASP.NET Core has no SynchronizationContext, but blocking still starves the thread pool. Use `ConfigureAwait(false)` in libraries.
- **Output caching** (.NET 7, server-side, tag eviction) vs **response caching** (header-driven, clients may ignore).
- **Health checks**: `/health`; liveness (restart if dead) vs readiness (withhold traffic). Check DB/Redis/broker.
- **BackgroundService**: singleton — use `IServiceScopeFactory` for scoped DbContext; honor `CancellationToken`.

---

## Common Gotchas

1. **Captive dependency** — Scoped/Transient inside a Singleton → stale DbContext, leaks. Fix: `IServiceScopeFactory`.
2. **Middleware ordering** — `UseAuthentication` after `UseAuthorization` → always 401. `UseRouting` before CORS/authz.
3. **Wrong status codes** — 200 on create (use 201), 500 on missing record (use 404), 200 with an error body.
4. **`async void`** — never in middleware/controllers; exceptions are unobservable. Use `async Task`.
5. **Scoped in constructor of singleton/middleware/BackgroundService** — captive dependency.
6. **Missing `[ApiController]`** — no auto-400 on invalid `ModelState`.
7. **Over-posting** — binding requests to EF entities lets clients set `IsAdmin`/`Price`. Bind to DTOs.
8. **Blocking on async** — `.Result`/`.Wait()` → thread-pool starvation.

---

## Quick-Recall Checklist

- [ ] Pipeline order memorised (exception → HTTPS → static → routing → CORS → authn → authz → endpoints)
- [ ] Singleton vs Scoped vs Transient + the captive dependency trap and fix
- [ ] `Use` / `Run` / `Map` differences; what short-circuiting means
- [ ] Custom middleware is a singleton → scoped services via `InvokeAsync` params
- [ ] AuthN vs AuthZ; correct middleware order; AuthN builds `ClaimsPrincipal`
- [ ] JWT flow (login → sign → Bearer → validate); signed not encrypted; refresh token in httpOnly cookie + rotation
- [ ] JWT (format) vs OAuth (flow) vs OIDC (auth); role vs policy authorization
- [ ] Filters vs middleware boundary; filter order; `[Authorize]` = authorization filter; resource vs action filter
- [ ] HTTP status codes: 201/204/400/401/403/404/409/429/500; 4xx vs 5xx; 401 vs 403
- [ ] PUT (full, idempotent) vs PATCH (partial); idempotency + idempotency keys
- [ ] Global exceptions via `UseExceptionHandler` / `IExceptionHandler` (.NET 8) → `ProblemDetails`
- [ ] `IActionResult` vs `ActionResult<T>` (Swagger); `[ApiController]` auto-validation; over-posting → DTOs
- [ ] Async helps I/O throughput not speed; never `.Result`/`.Wait()`; deadlock + `ConfigureAwait(false)`
- [ ] Rate limiting algorithms + 429; SignalR transports + backplane; throttled parallelism
- [ ] Minimal vs controllers; endpoint filters; health checks (liveness vs readiness); BackgroundService scoping
- [ ] Output vs response caching; keyed services (.NET 8); Blazor Server vs WASM vs SSR render modes
