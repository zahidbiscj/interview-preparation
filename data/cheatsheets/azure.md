# Azure & Cloud Integration — Cheatsheet

> 63 questions across 4 subtopics: Functions & Logic Apps · Messaging & Events · Integration Patterns · Cloud, Security & Containers.

## Compute & Workflow (Functions & Logic Apps)
- **Azure Functions** — serverless, event-driven; **one trigger** per function + input/output **bindings**. *Use for: glue code, APIs, scheduled jobs, event handlers.*
- **Trigger vs binding** — trigger fires the function (only one); bindings move data in/out declaratively (many).
- **Plans** — Consumption (pay-per-use, scales to zero, cold starts, 5–10 min) · Premium (pre-warmed, no cold start, VNET, unlimited) · Dedicated (reuse App Service capacity).
- **Cold start** = latency when a scaled-to-zero instance spins up. Reduce: Premium/min instances, trim deps, no heavy static init, keep-warm ping.
- **Durable Functions** — stateful orchestration in code (chaining, fan-out/fan-in, async HTTP, human-in-loop). Orchestrator must be **deterministic** (no DateTime.Now/random/IO — put those in activities); state persisted via task hub.
- **Logic Apps** — low-code visual workflows, 300+ connectors; **workflow** = trigger + ordered actions. Tiers: Consumption (per-action) · Standard (single-tenant, VNET).
- **Connectors** — built-in (in-process) · managed (call APIs) · Premium (SAP/enterprise) · custom (your REST API).
- **Logic Apps errors** — per-action retry policy (none/fixed/exponential) + Scopes with run-after for try/catch; Terminate to fail cleanly.
- **Slow-step diagnosis** — App Insights end-to-end transaction shows dependency timings (SQL command text + duration); drill SQL with Query Store / plans / DMVs.

## Messaging & Events
- **Service Bus** — enterprise broker; queues + topics; sessions, DLQ, dup detection, transactions, **at-least-once**. *Use for: reliable commands/work.*
- **Queue** (point-to-point, competing consumers) vs **Topic** (pub/sub, N subscriptions with filters).
- **DLQ** — sub-queue for poison/undeliverable messages (max delivery count or expiry); alert on depth.
- **PeekLock** (default, safe: lock→process→Complete; crash = redeliver) vs **ReceiveAndDelete** (fast, at-most-once, may lose).
- **Duplicate detection** — discards repeat MessageId within a window (producer side only — still make consumers idempotent).
- **Sessions** — FIFO ordering per SessionId, locked to one consumer (trades parallelism for order).
- **Event Grid** — lightweight event routing, **push**, high fan-out, cheap, retry + DLQ, webhook validation handshake. *Use for: reactive "something happened".*
- **Event Hub** — high-throughput streaming/telemetry ingestion, partitions + replay, consumer offsets. *Use for: big data / IoT.*
- **Sync vs async** — sync (HTTP) blocks, tight coupling, cascading failures; async (queues/events) decouples, resilient, eventual consistency.

## Integration Patterns
- **Request-Reply** — ReplyTo + CorrelationId match response over async transport.
- **Pub-Sub / Fan-out** — one event → many subscribers/workers; fan-in aggregates results (Durable Functions).
- **Queue-based load leveling** — buffer bursts, drain at own pace, autoscale consumers on queue depth.
- **Retry** — exponential back-off + jitter; only transient/idempotent ops; Polly in .NET.
- **Circuit breaker** — Closed → Open → Half-Open; fail fast on a dead dependency (vs retry, which keeps trying).
- **Bulkhead** — isolate resources (thread pools/connections) so one failure can't sink everything.
- **Saga** — distributed txn as local txns + compensations (orchestration = central coordinator vs choreography = events). Eventual consistency, not ACID.
- **Outbox** — atomically write DB + outgoing message in one txn, then relay publishes; guarantees no message loss.
- **Idempotency** — track message/idempotency key; upsert not insert; pair with broker dup detection.
- **CQRS** — separate read/write models; reads use denormalized projections; often + event sourcing.
- **Correlation ID** — generated at edge, propagated via headers/message properties across all hops for tracing.

## Cloud, Security & Containers
- **IaaS / PaaS / SaaS** — VMs / managed runtime / finished app (less you manage going up).
- **Scalability** (handle more load: up vs out) vs **High availability** (stay up via redundancy, SLA) vs **Fault tolerance** (keep working correctly through failure).
- **Managed Identity** — Entra ID identity, no stored credentials; system-assigned (per resource) vs user-assigned (shared); access via RBAC.
- **Key Vault** — secrets, keys, certs; access via managed identity + RBAC; versioning, soft-delete, audit.
- **OAuth2** — authorization → scoped access tokens. Auth Code + PKCE for apps/SPA; Client Credentials for service-to-service. OIDC adds the ID token.
- **JWT** — signed `header.payload.signature` with claims (iss/aud/exp/sub/scopes); verified with issuer key, no DB call; **encoded not encrypted**.
- **Access token** (sent to API, scopes) vs **ID token** (who the user is — for the client, never the API) vs **refresh token** (silently renews access).
- **MSAL** — library that acquires/caches Entra ID tokens; app registration = client ID + redirect + scopes.
- **RBAC** — role definition + assignment + scope (mgmt group → subscription → RG → resource, inherits down); least privilege.
- **Docker** — portable image; consistent runs, shares OS kernel (lightweight vs VMs), per-microservice.
- **Kubernetes (AKS)** — orchestrates containers (schedule/scale/self-heal); **pod** = smallest unit; Deployment manages replicas, Service exposes them.
- **Proxy** (client-side, outbound) vs **Reverse proxy** (server-side: LB/TLS/routing — the API gateway role; Nginx/App Gateway/APIM).
- **APIM** — managed API gateway: auth, rate limiting, caching, transformation, versioning, dev portal; behavior via **policies** (inbound/backend/outbound/on-error).
- **Secure APIs** — validate-jwt + Entra ID, subscription keys, IP filter, HTTPS, rate limit, managed identity to backend, secrets in Key Vault.
- **CI/CD for Functions** — build (restore/test/package) → deploy to staging slot → smoke test → swap (zero-downtime, easy rollback); config from Key Vault; SP/OIDC + gated approvals.
- **Monitoring** — App Insights end-to-end transactions + distributed tracing, propagate correlation IDs (incl. message properties), KQL in Log Analytics, alert on failures/latency/queue length/DLQ depth.

---

## Decision: Service Bus vs Event Grid vs Event Hub
| | Service Bus | Event Grid | Event Hub |
|---|---|---|---|
| Purpose | Reliable messaging/commands | Event routing/notifications | Stream ingestion |
| Model | Pull (queue/topic) | Push (pub/sub) | Stream + consumer offsets |
| Throughput | Moderate | High fan-out | Very high |
| Features | Sessions, DLQ, dup detection, txns | Filters, retries, DLQ, webhook validation | Replay, partitions |
| Use when | Ordered, transactional work | React to discrete events | Telemetry/IoT/big data |

## Decision: Logic Apps vs Functions
| | Logic Apps | Functions |
|---|---|---|
| Style | Low-code visual | Code-first |
| Best at | Connector-based integration | Custom logic / compute |
| Connectors | 300+ built-in | Write your own (bindings) |
| Billing | Per action | Per execution |
| Use when | Glue SaaS systems fast | Need full control/performance |

*Common combo: Logic App orchestrates, calls a Function for the heavy/custom logic.*

## Decision: Queue vs Topic (Service Bus)
| | Queue | Topic |
|---|---|---|
| Delivery | Point-to-point (1 receiver) | Pub/sub (N subscriptions) |
| Pattern | Competing consumers / work | Fan-out / broadcast |
| Filtering | n/a | Per-subscription rules/filters |
| Use when | Distribute work | Multiple independent reactions |

---

## Quick-recall checklist
- **One trigger per function**; bindings = declarative I/O (many).
- **Consumption** = scale-to-zero + cold starts; **Premium** = pre-warmed + VNET.
- **Durable orchestrator must be deterministic** — no DateTime.Now/random/IO.
- **Logic Apps** for connector integration; **Functions** for custom code.
- **PeekLock** is the safe default; **ReceiveAndDelete** can lose messages.
- **Sessions** = ordering per key; **DLQ** = poison/undeliverable.
- **Event Grid = react** (push) · **Service Bus = process reliably** (pull) · **Event Hub = stream**.
- **At-least-once everywhere** → consumers must be **idempotent**.
- **Outbox** = atomic DB + publish; **Saga** = local txns + compensations.
- **Retry** (transient/idempotent + back-off + jitter) + **circuit breaker** (fail fast) + **bulkhead** (isolate).
- **Correlation ID** on every hop for end-to-end tracing.
- **Managed identity + Key Vault** → no secrets in code/config.
- **OAuth2 = authorization**; access token → API, ID token → client; JWT is **encoded not encrypted**.
- **APIM** = reverse-proxy gateway; behavior via **policies**.
- **CI/CD**: deploy to **staging slot → swap** for zero-downtime.
