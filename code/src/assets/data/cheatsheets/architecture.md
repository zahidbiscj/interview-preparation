# System Design & Architecture Cheat Sheet

Master reference for senior .NET/Azure engineers — scan before walking into the room.

---

## Must-Know One-Liners

- **Separation of concerns** — each layer/service owns one slice of behaviour, nothing else.
- **Depend on abstractions**, not concretions (DIP — the D in SOLID).
- **Design for failure** — assume every network call, disk, and dependency will fail eventually.
- **CAP theorem** — distributed systems can guarantee only two of: Consistency, Availability, Partition-tolerance. Pick your trade-off explicitly.
- **Eventual consistency** is acceptable for most read paths; choose strong consistency only where business rules demand it.
- **Premature optimisation** (including premature decomposition into microservices) is still evil.

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

**Dependency rule: arrows point inward only.** Infrastructure implements interfaces defined in Domain; Domain knows nothing about EF Core, Azure, or HTTP.

| Layer | Owns | Must NOT reference |
|---|---|---|
| Domain | Entities, value objects, domain events, repo interfaces | EF Core, ASP.NET, any framework |
| Application | Use cases, command/query handlers, DTOs, validators | Infrastructure details |
| Infrastructure | DbContext, external APIs, messaging | Application/Domain logic |
| API / UI | Controllers, minimal-API endpoints, Razor pages | Domain directly (go through Application) |

**Key benefit:** swap infrastructure (SQL → Cosmos, RabbitMQ → Service Bus) without touching domain logic. Testability is free because Domain/Application have zero framework dependencies.

---

## Repository + Unit of Work

**Repository** abstracts the persistence mechanism behind a collection-like interface (`IRepository<T>`). **Unit of Work** groups multiple repository operations into a single transaction (`SaveChangesAsync`).

**Why bother?**
- Testable use cases — swap real DB for in-memory fake.
- Single place to apply cross-cutting persistence concerns (soft-delete, audit fields).

**Common criticism with EF Core:**
> `DbContext` *is already* a Unit of Work and `DbSet<T>` *is already* a Repository. Wrapping them adds indirection without benefit unless you need provider-agnostic tests or truly intend to swap ORMs.

Pragmatic stance for interviews: *"I use the pattern at the Application layer boundary; inside the Infrastructure project I let DbContext play the UoW role directly."*

---

## CQRS

**Command Query Responsibility Segregation** — separate the write model (commands that mutate state) from the read model (queries that return data).

**When it helps:**
- Read/write load are asymmetric (10:1 reads → scale read side independently).
- Read model needs a different shape than the write model (denormalised views, projections).
- Event sourcing companion — commands produce events, read model is a projection.
- Large teams — command and query sides can evolve independently.

**When it's overkill:**
- CRUD apps with balanced read/write — two models means two code paths to maintain.
- Small teams/MVPs — the ceremony (handlers, mediator, two models) slows delivery.
- No clear performance or domain complexity justification.

In .NET: **MediatR** + **FluentValidation** is the idiomatic stack. Commands return `Unit` or a result id; queries return DTOs.

---

## Monolith vs Microservices

| Dimension | Monolith | Microservices |
|---|---|---|
| **Deployment** | Single artefact, simple CI/CD | Per-service pipelines, orchestration overhead |
| **Dev speed (early)** | Fast — no network, shared types | Slow — cross-service contracts, local orchestration |
| **Dev speed (scaled team)** | Slows — merge conflicts, coupling | Fast per team when bounded contexts are right |
| **Scaling** | Scale-out whole app | Scale hotspot services independently |
| **Reliability** | One process crash = full outage | Partial failures possible; resilience complexity rises |
| **Data** | Shared DB, easy transactions | Per-service DB, distributed transactions are hard |
| **Observability** | Simple logs/traces | Requires distributed tracing (OpenTelemetry), correlation IDs |
| **When to choose** | Greenfield, small team, unclear domain boundaries | Proven domain, independent scaling needs, multiple teams |

**Recommended path:** start modular monolith → extract services only when a specific scaling or team-autonomy need justifies it.

---

## Scalability & Resilience

**Horizontal vs vertical:**
- **Vertical** (scale-up) — bigger VM. Fast but has a ceiling and creates a single point of failure.
- **Horizontal** (scale-out) — more instances behind a load balancer. Requires stateless services; session state in Redis/cache, not in-process.

**Retry:** exponential back-off with jitter (`Polly` in .NET). Retry only on transient errors (5xx, timeout); never on 4xx.

**Circuit breaker:** after N consecutive failures, open the circuit (fail-fast) for a cooldown window, then half-open to probe recovery. Prevents cascade failure. `Polly.CircuitBreaker` or Resilience HTTP client in .NET 8.

**Idempotency:** design POST/PUT operations so repeating them produces the same result. Use client-supplied `Idempotency-Key` header; store processed keys with TTL. Critical for retry safety.

**Caching strategy:**

| Pattern | When |
|---|---|
| Cache-aside | General reads; app manages cache population |
| Write-through | Writes go to cache + DB together; read path always warm |
| Read-through | Cache layer fetches from DB on miss (e.g., Azure Cache for Redis) |
| CDN / output cache | Static or semi-static HTTP responses |

On Azure: **Azure Cache for Redis** for distributed cache; **Azure CDN / Front Door** for edge caching.

---

## Service Communication

**Synchronous (request/response):**
- **REST** — ubiquitous, human-readable, HTTP/1.1+. Use when simplicity and broad interoperability matter.
- **gRPC** — binary (Protobuf), strongly typed, HTTP/2 multiplexing. Use for internal service-to-service where latency and throughput matter.

**Asynchronous (fire-and-forget / event-driven):**
- **Queue** (Azure Service Bus, Storage Queue) — point-to-point, guaranteed at-least-once delivery, natural load levelling.
- **Event / pub-sub** (Azure Event Grid, Service Bus topics, Kafka) — one publisher, multiple independent consumers; loose coupling.

**API Gateway** (`Azure API Management`): single ingress for external clients. Handles auth (JWT validation), rate limiting, SSL termination, routing to downstream services, API versioning, and observability (metrics, logs).

**Rule of thumb:** prefer async when the caller does not need an immediate result or when the downstream service must be decoupled from caller availability.

---

## How to Answer a "Design X" Question — 5-Step Framework

1. **Requirements** — clarify functional (what the system does) and non-functional (scale, latency SLA, consistency, availability target). Ask: *"How many users / requests per second at peak?"*
2. **API contract** — sketch the key endpoints or events. Drives the conversation to concrete interactions before you dive into internals.
3. **Data model & storage** — choose storage type (relational, document, time-series, blob) and justify. Discuss schema at a high level; call out indexing needs.
4. **Scale & resilience** — identify bottlenecks (hot DB table, single queue consumer, stateful service). Apply horizontal scaling, caching, async messaging, circuit breakers as appropriate.
5. **Trade-offs** — every design choice has a cost. Name the trade-offs you accepted (eventual consistency vs complexity, microservices vs operational overhead) and what you would revisit given more time or changed constraints.

**Tip:** draw a box diagram early (even verbally) — components, arrows, and data stores. Interviewers reward structured thinking over exhaustive detail.

---

## Quick-Recall Checklist

- [ ] State the requirements before designing anything.
- [ ] Dependency rule: outer layers depend on inner; never the reverse.
- [ ] Repository pattern is optional on top of EF Core — justify if you add it.
- [ ] CQRS adds value only when read/write profiles diverge meaningfully.
- [ ] Stateless services = free horizontal scaling. Put state in Redis / DB.
- [ ] Retry + circuit breaker on every external call (`Polly` / `HttpResilienceHandler`).
- [ ] Make mutations idempotent; return `409 Conflict` on duplicate key, not 500.
- [ ] Use async messaging to decouple producers from consumer availability.
- [ ] API gateway for auth, rate-limiting, and single public ingress.
- [ ] Name your trade-offs explicitly — it signals senior-level thinking.
