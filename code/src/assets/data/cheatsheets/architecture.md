# System Design & Architecture Cheat Sheet

Master reference for senior .NET/Azure engineers — scan before walking into the room.
Mirrors `data/questions/architecture.json` (48 questions across 4 subtopics).

---

## Must-Know One-Liners

- **Separation of concerns** — each layer/service owns one slice of behaviour, nothing else.
- **Depend on abstractions**, not concretions (DIP — the D in SOLID).
- **Design for failure** — assume every network call, disk, and dependency will fail eventually.
- **CAP theorem** — pick two of Consistency, Availability, Partition-tolerance; choose your trade-off explicitly.
- **Eventual consistency** is fine for most read paths; reserve strong consistency for rules that demand it.
- **Premature optimisation** (including premature microservices) is still evil — start with a modular monolith.
- **Name your trade-offs out loud** — it signals senior-level thinking.

---

## Subtopic Map (what's in the bank)

### 1. Architecture Patterns (`patterns`, 14 Qs)
Clean/Onion architecture & dependency rule · Repository pattern (+ EF criticism) · Unit of Work · CQRS · Monolith vs microservices · Scalability & resilience (retry, circuit breaker) · API Gateway & service comms · CORS · N-Tier vs Clean · Mediator / MediatR · DDD core concepts · SAGA vs 2PC · Sync vs async comms · Idempotency.

### 2. Real-World Scenarios (`realworld`, 9 Qs)
Deciding architecture (ADRs) · STAR technical challenge · Framing a perf improvement · Production incident process · Debugging a 200ms→3s regression · Designing a notification system · Choosing a caching strategy · Production memory leak · Scaling a read-heavy API.

### 3. Advanced Patterns (`patterns-advanced`, 9 Qs)
DDD building blocks · Event sourcing vs CRUD · Cache-aside/write-through/write-behind · Modular monolith vs monolith vs microservices · Multi-tenancy (DB-per-tenant vs shared schema) · API backward compatibility · Bulkhead pattern · Vertical vs horizontal scaling · Zero-downtime deployment.

### 4. Design Patterns — GoF & Enterprise (`design-patterns`, 16 Qs)
Singleton (thread-safe / DI-as-singleton) · Factory Method vs Abstract Factory · Builder · Prototype · Adapter · Facade · Decorator (vs inheritance) · Proxy · Strategy (replace if/switch) · Observer (events / IObservable) · Mediator (MediatR) · Command · Template Method · Chain of Responsibility · Dependency Injection as a pattern · Options pattern.

---

## Clean / Onion Architecture

```
[ UI / API ]
    ↓
[ Application (use cases, CQRS handlers, DTOs) ]
    ↓
[ Domain (entities, value objects, domain events, interfaces) ]
    ↑
[ Infrastructure (EF Core, HTTP clients, blob storage, message bus) ]
```

**Dependency rule: arrows point inward only.** Inner layers define interfaces; Infrastructure implements them. Domain knows nothing about EF Core, Azure, or HTTP.

| Layer | Owns | Must NOT reference |
|---|---|---|
| Domain | Entities, value objects, domain events, repo interfaces | EF Core, ASP.NET, any framework |
| Application | Use cases, command/query handlers, DTOs, validators | Infrastructure details |
| Infrastructure | DbContext, external APIs, messaging | Application/Domain logic |
| API / UI | Controllers, minimal-API endpoints | Domain directly (go through Application) |

**Payoff:** swap infrastructure (SQL → Cosmos, RabbitMQ → Service Bus) and test domain in milliseconds — zero framework deps.

---

## Repository + Unit of Work

- **Repository** = collection-like interface over persistence. **Unit of Work** = group changes into one transaction.
- **EF Core criticism:** `DbContext` *is already* a UoW and `DbSet<T>` *is already* a Repository — wrapping adds leaky indirection unless you need provider-agnostic tests or strict Clean boundaries.
- Prefer **specific** repos (`IOrderRepository`) over generic `IRepository<T>` exposing `IQueryable` (leaks EF).
- **Commit once at the use-case boundary** — never `SaveChanges` per repository call (partial commits).
- Register `DbContext` as **Scoped** (not thread-safe; not Singleton).

---

## CQRS

Separate the **write model** (commands that mutate, full domain validation) from the **read model** (queries that project straight to DTOs, can bypass domain/aggregates).

| When it helps | When it's overkill |
|---|---|
| Reads dwarf writes (scale read side independently) | Simple CRUD with balanced load |
| Read shape ≠ write shape (denormalised projections) | Small team / MVP — ceremony slows delivery |
| Event-sourcing companion | No perf or domain-complexity justification |
| Large teams evolving sides independently | — |

.NET stack: **MediatR** + **FluentValidation** pipeline behaviour. Separate read store ⇒ **eventual consistency** (update via write events). MediatR ≠ CQRS — it only *facilitates* it.

---

## Monolith vs Microservices

| Dimension | Monolith | Microservices |
|---|---|---|
| Deployment | Single artefact, simple CI/CD | Per-service pipelines, orchestration overhead |
| Dev speed (early) | Fast — no network, shared types | Slow — contracts, local orchestration |
| Dev speed (scaled team) | Slows — coupling, merge conflicts | Fast per team with right bounded contexts |
| Scaling | Scale-out whole app | Scale hotspot services independently |
| Reliability | One crash = full outage | Partial failure; resilience complexity rises |
| Data | Shared DB, ACID easy | Per-service DB, **distributed txns hard (SAGA)** |
| Observability | Simple logs/traces | Needs distributed tracing + correlation IDs |
| Choose when | Greenfield, small team, unclear boundaries | Proven domain, independent scale, multiple teams |

**Path:** modular monolith → extract a service only when a specific scaling/team-autonomy need proves itself. A **modular monolith** ≠ big ball of mud — it enforces clean module boundaries with in-process calls.

---

## Scalability & Resilience

- **Vertical** (scale-up): bigger box; simple, no code change, but hard ceiling + SPOF.
- **Horizontal** (scale-out): more instances behind LB; needs **stateless** services — session/cache in **Redis**, not in-process.
- **Retry:** exponential back-off **+ jitter** (Polly / .NET 8 resilience handler). Transient errors only (5xx/timeout), never 4xx.
- **Circuit breaker:** Closed → Open (fail fast after N) → Half-Open (probe). Stops cascades.
- **Ordering:** timeout **wraps** circuit breaker **wraps** retry — innermost runs first.
- **Bulkhead:** isolate a resource pool per dependency so one slow call can't exhaust everything (complements breaker + timeout).
- **Idempotency:** client `Idempotency-Key`; store result keyed by it (Redis `SET NX` for races) with TTL. GET/PUT/DELETE idempotent by spec; POST is not.

### Read-heavy scaling ladder (cheapest first)
CDN → response/output cache → IMemoryCache → Redis → DB **read replica** (mind replication lag) → horizontal API scale → pre-materialised read model.

---

## Caching Strategies

| Pattern | How it works | Trade-off |
|---|---|---|
| **Cache-aside** (default) | App loads on miss, stores, returns; invalidate on write | Simple, lazy; brief staleness, app owns invalidation |
| **Write-through** | Write cache + DB together | Strong consistency, warm reads; slower writes |
| **Write-behind** | Write cache now, flush to DB async | Fast writes; **data loss on crash** without durability |
| **Read-through** | Cache layer fetches from DB on miss | Transparent to app; needs cache-managed loading |
| **CDN / output cache** | Edge-cache HTTP responses | Great for static/public; no per-user data |

Pick layer by **freshness + access pattern + sharing**. **Define invalidation before adding any cache.** Don't cache always-fresh data (financial totals) — optimise the query. Never cache user data under a shared key. Prevent **stampede** with a per-key lock or stale-while-revalidate. Azure: **Cache for Redis** (distributed), **Front Door/CDN** (edge).

---

## Distributed Transactions: SAGA vs 2PC

| | Two-Phase Commit (2PC) | SAGA |
|---|---|---|
| Consistency | Strong, immediate | Eventual |
| Mechanism | Coordinator locks all resources, then commits | Chain of local txns; events trigger next step |
| Failure handling | Rollback via coordinator | **Compensating transactions** undo prior steps |
| Coupling/locks | Distributed lock + coordinator bottleneck | No distributed lock |
| Fit for microservices | Poor (availability hit) | Good (default) |

**Idempotency is mandatory** — retries replay messages, so every step + compensation must dedupe (processed message ID). **Choreography** (events, no coordinator) vs **Orchestration** (central controller, e.g. Azure Durable Functions). Dual-write problem on "save + publish" ⇒ **Transactional Outbox** or CDC.

---

## Service Communication

- **Sync** — REST (ubiquitous, human-readable) or **gRPC** (binary/Protobuf, HTTP/2, internal low-latency). Use when caller needs an answer now; couples availability, stacks latency across hops.
- **Async** — **Queue** (Service Bus/Storage Queue: point-to-point, at-least-once, load-levelling) or **Topic/pub-sub** (Service Bus topics, Event Grid, Kafka: loose coupling, fan-out). Always use a **DLQ** for poison messages; sessions for ordering.
- **API Gateway** (Azure APIM / App Gateway / YARP): single ingress — routing, JWT validation, rate limiting, SSL, aggregation. It's a SPOF → run redundant. **BFF** = gateway per client type. **Gateway** = north-south; **service mesh** = east-west (mTLS).
- **CORS** governs browser→server only (never server→server / broker consumers). `AddCors` + `UseCors` *before* auth; explicit origins, never `AllowAnyOrigin()` with credentials.

---

## DDD Building Blocks

- **Entity** — identity + lifecycle (persists as attributes change).
- **Value Object** — immutable, equality by value (Money, Address).
- **Aggregate Root** — single entry point enforcing invariants; reference other aggregates **by ID**; keep small.
- **Bounded Context** — boundary where one model/language stays consistent; often one per microservice.
- **Ubiquitous Language** — same terms in code, tests, conversation. **Domain Events** dispatched after `SaveChanges` (via MediatR).
- **Anti-Corruption Layer** — translates an external model so it doesn't leak into yours.
- Best for **complex domains**, not CRUD.

---

## Event Sourcing vs CRUD

| | CRUD | Event Sourcing |
|---|---|---|
| Storage | Current state, overwritten | Append-only event log = source of truth |
| History | Lost on update | Full audit + time-travel |
| State | Read directly | Rebuilt by replaying events (use **snapshots**) |
| Schema change | Migrate table | **Version + upcast** events |
| Cost | Low | Steep learning curve, replay cost |

Pairs naturally with CQRS (events feed projections) but **doesn't require** it.

---

## Deployment, Multi-Tenancy & API Evolution

- **Zero-downtime:** rolling (batch replace), **blue-green** (two envs, instant rollback), **canary** (small % first, watch metrics), **feature flags** (ship dark, release ≠ deploy). All need **backward-compatible DB migrations** via **expand/contract**.
- **Multi-tenancy** (isolation ↔ cost): DB-per-tenant (best isolation, costly) → schema-per-tenant (middle) → shared schema + `TenantId` (cheapest/densest, **enforce EF global query filters** to stop leakage; handle noisy neighbours).
- **API backward compat:** additive changes are safe; **tolerant reader** ignores unknown fields; version (v1/v2) only for real breaks; deprecate with Sunset headers + migration window before removal.

---

## Design Patterns (GoF & Enterprise) — Quick Map

### Creational (how objects are made)

| Pattern | Intent (one line) | .NET reality / when |
|---|---|---|
| **Singleton** | Exactly one instance, global access | Prefer `AddSingleton<T>()` (injectable, testable) over static. Hand-rolled: `Lazy<T>` for thread-safe init. Must be thread-safe. |
| **Factory Method** | Create **one** product, defer the concrete choice | `Create(channel)` returns the right `INotification`. In DI: keyed services / `Func<T>`. |
| **Abstract Factory** | Create a **family** of related products that stay consistent | `IUiFactory` → matching dark/light button + checkbox. |
| **Builder** | Assemble a complex object step-by-step (fluent) | `WebApplication.CreateBuilder`, `StringBuilder`; use over telescoping ctors / when steps need validation. |
| **Prototype** | Create by **cloning** a configured instance | Records `with` expression (shallow!); deep-clone mutable members explicitly. |

### Structural (how objects are composed)

| Pattern | Intent | Key distinction / .NET use |
|---|---|---|
| **Adapter** | Convert one interface into the one the client expects | Wrap a vendor SDK (Stripe) behind your `IPaymentGateway`; lives in Infrastructure. |
| **Facade** | One simple entry point over a complex subsystem | `CheckoutFacade.PlaceOrderAsync` hides inventory/payment/shipping. **Simplifies** (vs Adapter = converts). |
| **Decorator** | Wrap to **add behaviour**, same interface | Caching/logging/retry wrappers; Scrutor `.Decorate<T>()`; MediatR behaviours. Beats inheritance (composes at runtime, no class explosion). |
| **Proxy** | Stand-in that **controls access** | EF lazy-loading proxies (N+1!), gRPC/HTTP clients, virtual/protection/remote/caching. **Controls access** (vs Decorator = adds behaviour). |

### Behavioral (how objects interact)

| Pattern | Intent | .NET use / note |
|---|---|---|
| **Strategy** | Interchangeable algorithms behind one interface | **Replaces the growing if/switch** (payment providers, pricing). Select via keyed DI / dictionary. Open/Closed. |
| **Observer** | One-to-many auto-notification | C# `event` (built-in); `IObservable<T>`/Rx for streams; MediatR `INotification`. Watch the lapsed-listener leak (`-=`). |
| **Mediator** | Components talk through a hub, not each other | **MediatR** `Send` → handler; pipeline behaviours for cross-cutting. MediatR ≠ CQRS. |
| **Command** | Encapsulate a request as an object | Enables queue/log/retry/undo. MediatR commands, WPF `ICommand`, job payloads. (vs Strategy = swap algorithm.) |
| **Template Method** | Fix the algorithm skeleton, override the steps | Import/ETL pipelines via inheritance + hook methods. Inheritance (compile-time) vs Strategy (composition, runtime). |
| **Chain of Responsibility** | Pass request along handlers until one handles it | **ASP.NET Core middleware** (`next()` / short-circuit), MediatR behaviours, `DelegatingHandler`, approval flows. |

### Enterprise / .NET

| Pattern | Intent | Note |
|---|---|---|
| **Repository + Unit of Work** | Collection-like data abstraction + atomic commit | `DbContext` *is* UoW, `DbSet` *is* a repo — often redundant on EF Core (see `patterns` Qs). |
| **CQRS** | Separate read model from write model | Reads bypass domain → DTO; writes run full validation (see `patterns` Qs). |
| **Dependency Injection** | Supply dependencies from outside (DIP in practice) | A pattern, not just the container. Lifetimes: Transient/Scoped/Singleton. Avoid captive deps (Scoped in Singleton) & Service Locator. |
| **Options pattern** | Bind config to validated, strongly-typed classes | `IOptions` (snapshot) / `IOptionsSnapshot` (per-request) / `IOptionsMonitor` (live). `ValidateOnStart()` to fail fast vs raw `IConfiguration`. |

**Pairs interviewers love to contrast:** Factory Method vs Abstract Factory (one vs family) · Adapter vs Facade (convert vs simplify) · Decorator vs Proxy (add behaviour vs control access) · Strategy vs Command (swap algorithm vs encapsulate request) · Strategy vs Template Method (composition/runtime vs inheritance/compile-time).

---

## How to Answer a "Design X" Question — 5-Step Framework

1. **Requirements** — functional + NFRs (scale, latency SLA, consistency, availability). Ask "RPS at peak? read/write ratio?"
2. **API contract** — sketch key endpoints/events first.
3. **Data model & storage** — pick store (relational/document/blob/time-series) and justify; call out indexing.
4. **Scale & resilience** — find bottlenecks; apply caching, horizontal scaling, async messaging, circuit breakers.
5. **Trade-offs** — name what you accepted (eventual consistency, ops overhead) and what you'd revisit.

**Tip:** draw a box diagram early — components, arrows, data stores. Structured thinking beats exhaustive detail.

---

## Quick-Recall Checklist

- [ ] State requirements/NFRs before designing anything.
- [ ] Dependency rule: outer depends on inner, never the reverse; interfaces live in inner layers.
- [ ] Repository is optional on top of EF Core — justify it; return DTOs/specifics, not `IQueryable`.
- [ ] Commit once at the use-case boundary; `DbContext` is Scoped.
- [ ] CQRS only when read/write profiles diverge; separate read store ⇒ eventual consistency.
- [ ] Start modular monolith; extract services only with a proven need.
- [ ] Stateless services = free horizontal scaling; state in Redis/DB.
- [ ] Retry (backoff + jitter) + circuit breaker + timeout (+ bulkhead) on external calls.
- [ ] Make mutations idempotent (`Idempotency-Key`, Redis `SET NX`, TTL); return 409 on duplicate, not 500.
- [ ] Distributed txn ⇒ SAGA + compensations, not 2PC; idempotent steps; outbox for dual-write.
- [ ] Async messaging to decouple availability; always a DLQ.
- [ ] API gateway for auth/rate-limit/ingress; CORS for browsers only, explicit origins.
- [ ] Define cache invalidation before caching; never cache user data under a shared key.
- [ ] Incident: detect → mitigate (roll back first) → root-cause → prevent (blameless post-mortem).
- [ ] Perf: baseline → profile (don't guess) → fix with trade-off → measure (p95).
- [ ] Backward-compatible DB migrations (expand/contract) for zero-downtime deploys.
- [ ] Name your trade-offs explicitly.
