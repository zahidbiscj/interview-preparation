# ASP.NET Core & Web API — Interview Cheat Sheet

ASP.NET Core is a cross-platform, high-performance framework for building HTTP APIs, web apps, and microservices on top of the unified .NET runtime.

---

## Must-Know One-Liners

- **Middleware** runs in the order it's registered; **order matters critically**.
- `IActionResult` lets a controller return any HTTP response; `ActionResult<T>` adds type safety.
- `[ApiController]` auto-validates `ModelState` and infers `[FromBody]` — no manual checks needed.
- `IHttpContextAccessor` is the only way to access `HttpContext` outside a controller.
- `Program.cs` replaces `Startup.cs` in .NET 6+ (minimal hosting model).
- Routing is handled by `UseRouting()` + `UseEndpoints()` (or `MapControllers()` in minimal API).
- `AddScoped` per HTTP request = one instance per web request — the most common DI lifetime for web.
- Global exception handling: use `UseExceptionHandler` middleware or a custom `IExceptionHandler` (.NET 8+).
- `IOptions<T>`, `IOptionsSnapshot<T>`, `IOptionsMonitor<T>` — snapshot reloads per-request; monitor reloads live.
- Minimal APIs skip controllers entirely: `app.MapGet("/", () => "Hello")`.

---

## DI Lifetimes

| Lifetime | Created | Destroyed | Typical Use Case | Pitfall |
|---|---|---|---|---|
| **Singleton** | Once on first request / startup | App shutdown | Config, caches, `HttpClient` factory | Don't inject Scoped/Transient — captive dependency bug |
| **Scoped** | Once per HTTP request | End of request | `DbContext`, unit-of-work, per-request state | Don't use outside a request scope (e.g. background services) |
| **Transient** | Every time it's resolved | When consumer is disposed | Lightweight, stateless services | Memory/resource waste if the service holds resources |

---

## Middleware

### Pipeline Order (critical — wrong order = bugs)

```
UseExceptionHandler / UseDeveloperExceptionPage
UseHsts / UseHttpsRedirection
UseStaticFiles
UseRouting
UseCors
UseAuthentication      ← must come before Authorization
UseAuthorization
UseSession
MapControllers / MapGet ...
```

### Use vs Run vs Map

| Method | Behaviour |
|---|---|
| `Use` | Calls next middleware (pass-through); can short-circuit by NOT calling `next()` |
| `Run` | Terminal — never calls next; ends the pipeline |
| `Map` | Branches pipeline on path match; branch is its own pipeline |

### Custom Middleware (minimal snippet)

```csharp
public class TimingMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(HttpContext ctx)
    {
        var sw = Stopwatch.StartNew();
        await next(ctx);                          // call next in pipeline
        var ms = sw.ElapsedMilliseconds;
        ctx.Response.Headers["X-Elapsed-Ms"] = ms.ToString();
    }
}
// Register:
app.UseMiddleware<TimingMiddleware>();
```

---

## REST Quick Reference

### HTTP Verbs

| Verb | Semantic | Idempotent | Safe |
|---|---|---|---|
| `GET` | Read resource | Yes | Yes |
| `POST` | Create / trigger action | No | No |
| `PUT` | Full replace | Yes | No |
| `PATCH` | Partial update | No* | No |
| `DELETE` | Remove | Yes | No |

*PATCH is idempotent in practice only if designed to be.

### Common Status Codes

| Code | Meaning | When to use |
|---|---|---|
| `200 OK` | Success with body | GET, PUT, PATCH response |
| `201 Created` | Resource created | POST that creates; include `Location` header |
| `204 No Content` | Success, no body | DELETE, PUT when not returning body |
| `400 Bad Request` | Invalid input | Validation failure |
| `401 Unauthorized` | Not authenticated | Missing/invalid token |
| `403 Forbidden` | Authenticated but not allowed | Insufficient permissions |
| `404 Not Found` | Resource missing | GET/DELETE on unknown ID |
| `409 Conflict` | State conflict | Duplicate, optimistic concurrency |
| `422 Unprocessable` | Semantic validation fail | Business rule violation |
| `500 Internal Server Error` | Unhandled exception | Never expose details in prod |

### PUT vs PATCH

- **PUT** — replace the entire resource; client sends complete representation.
- **PATCH** — partial update; client sends only changed fields (often JSON Patch `RFC 6902` or just a partial body).

---

## Auth — JWT Flow in 4 Steps

1. **Client** sends credentials (username/password) to `/auth/login`.
2. **Server** validates, signs a JWT (`header.payload.signature`) with a secret/private key, returns it.
3. **Client** stores token (memory > `localStorage` for security) and sends it as `Authorization: Bearer <token>` on every subsequent request.
4. **Server** middleware (`UseAuthentication`) validates signature + expiry on every request; `UseAuthorization` checks claims/policies.

### Authentication vs Authorization

| | Authentication | Authorization |
|---|---|---|
| **Question** | Who are you? | What are you allowed to do? |
| **Middleware** | `UseAuthentication` | `UseAuthorization` |
| **ASP.NET concept** | `[Authorize]` (establishes identity) | `[Authorize(Policy="Admin")]` / roles / claims |

### Token Storage (know the trade-offs)

- **Memory** — most secure; lost on page refresh.
- **HttpOnly Cookie** — safe from XSS; needs CSRF protection.
- **`localStorage`** — convenient; vulnerable to XSS — avoid for sensitive apps.

---

## Filters vs Middleware

| | Middleware | Filters |
|---|---|---|
| **Scope** | Entire HTTP pipeline | MVC action execution only |
| **Runs on** | Every request (static files too) | Only when MVC routing matches |
| **Access to** | `HttpContext` | `ActionContext`, model binding, action result |
| **Use for** | Logging, auth, CORS, compression, exceptions | Validation, caching headers, action-specific auth, result shaping |
| **Types** | Single `InvokeAsync` | `IActionFilter`, `IResultFilter`, `IExceptionFilter`, `IAuthorizationFilter` |

**Rule of thumb:** Cross-cutting concerns for all requests → Middleware. MVC-specific logic tied to actions/results → Filters.

---

## Common Gotchas

1. **Captive dependency** — injecting a `Scoped` or `Transient` service into a `Singleton`. The short-lived service lives as long as the singleton → stale `DbContext`, connection leaks. Fix: inject `IServiceScopeFactory` and create a scope manually.

2. **Middleware ordering** — `UseAuthentication` after `UseAuthorization` means auth always fails with 401. Always auth before authZ. `UseRouting` must come before `UseCors`/`UseAuthorization`.

3. **Returning wrong status codes** — returning `200 OK` on creation (should be `201`), returning `400` for auth failures (should be `401`/`403`), swallowing exceptions and returning `200` with an error body.

4. **`async void`** — never use in middleware or controllers. Exceptions are unobservable. Use `async Task`.

5. **`HttpContext` in constructor** — `HttpContext` is request-scoped; it's `null` at construction time of a Singleton. Use `IHttpContextAccessor` and access it inside the method.

6. **Model validation ignored** — forgetting `[ApiController]` means `ModelState.IsValid` is never automatically checked; you must check it manually or use a filter.

7. **`DbContext` in background service** — `DbContext` is Scoped; `IHostedService` is Singleton. Must create a scope via `IServiceScopeFactory`.

---

## Quick-Recall Checklist

- [ ] Middleware pipeline order memorised (exception → HTTPS → static → routing → CORS → authn → authz → endpoints)
- [ ] Can explain Singleton vs Scoped vs Transient and the captive dependency trap
- [ ] Know `Use` / `Run` / `Map` differences
- [ ] Can sketch JWT flow (login → sign → Bearer header → validate)
- [ ] Know `Authentication` middleware vs `Authorization` middleware order
- [ ] Understand Filters vs Middleware decision boundary
- [ ] Know correct HTTP status codes for create (201), no body (204), unauth (401), forbidden (403), not found (404)
- [ ] Know PUT (full replace, idempotent) vs PATCH (partial, not guaranteed idempotent)
- [ ] Global exception handling via `UseExceptionHandler` or `IExceptionHandler` (.NET 8+)
- [ ] `[ApiController]` auto-validates ModelState and infers `[FromBody]`
