# Azure & Cloud Integration — Cheatsheet

## Compute & Workflow
- **Azure Functions** — serverless, event-driven code; one trigger per function + input/output bindings. *Use for: glue code, APIs, scheduled jobs, event handlers.*
- **Durable Functions** — stateful orchestration in code (chaining, fan-out/fan-in, async HTTP, human-in-loop). Orchestrator must be **deterministic**. *Use for: long-running workflows.*
- **Logic Apps** — low-code visual workflows with 300+ connectors. *Use for: SaaS/system integration with little code.*
- **Cold start** = latency when a scaled-to-zero instance spins up. Reduce: Premium/min instances, smaller deps, keep-warm ping.

## Messaging & Events
- **Service Bus** — enterprise broker; queues + topics; sessions, DLQ, dup detection, transactions, at-least-once. *Use for: reliable commands/work.*
- **Event Grid** — lightweight event routing, push, high fan-out, cheap. *Use for: reactive "something happened" notifications.*
- **Event Hub** — high-throughput streaming/telemetry ingestion with replay. *Use for: big data / IoT streams.*
- **DLQ** — sub-queue for poison/undeliverable messages (max delivery count or expiry).
- **PeekLock** (default, safe, complete after success) vs **ReceiveAndDelete** (fast, may lose).

## Integration Patterns
- **Queue-based load leveling** — buffer bursts, drain at own pace.
- **Retry** — exponential back-off + jitter; only transient/idempotent ops.
- **Circuit breaker** — Closed → Open → Half-Open; fail fast on a dead dependency.
- **Bulkhead** — isolate resources so one failure can't sink everything.
- **Saga** — distributed txn as local txns + compensations (orchestration vs choreography).
- **Outbox** — atomically write DB + outgoing message; guarantees publish.
- **Idempotency** — track message/idempotency key; upsert not insert.
- **Correlation ID** — propagate one ID across all hops for tracing.

## Cloud, Security & Containers
- **IaaS / PaaS / SaaS** — VMs / managed runtime / finished app (less you manage going up).
- **Managed Identity** — Entra ID identity, no stored credentials; use with Key Vault/SQL/Storage via RBAC.
- **Key Vault** — secrets, keys, certs; access via managed identity + RBAC; rotation + audit.
- **OAuth2** — authorization → scoped access tokens (Auth Code+PKCE for apps, Client Credentials service-to-service).
- **JWT** — signed `header.payload.signature` with claims; encoded not encrypted.
- **Access token** (call API) vs **ID token** (who the user is — for the client, not the API).
- **MSAL** — library that acquires/caches Entra ID tokens for app auth.
- **Docker** — portable container image; consistent runs, lightweight, per-microservice.
- **Kubernetes (AKS)** — orchestrates containers (schedule/scale/self-heal); **pod** = smallest unit (1+ containers sharing net/storage).
- **Reverse proxy** — fronts servers (LB, TLS, routing); the API gateway role.
- **APIM** — managed API gateway: auth, rate limiting, caching, transformation, versioning, dev portal; behavior via **policies**.
- **Monitoring** — App Insights end-to-end transactions, distributed tracing, correlation IDs, KQL in Log Analytics, alerts on failures/latency/DLQ depth.

---

## Decision: Service Bus vs Event Grid vs Event Hub
| | Service Bus | Event Grid | Event Hub |
|---|---|---|---|
| Purpose | Reliable messaging/commands | Event routing/notifications | Stream ingestion |
| Model | Pull (queue/topic) | Push (pub/sub) | Stream + consumer offsets |
| Throughput | Moderate | High fan-out | Very high |
| Features | Sessions, DLQ, dup detection, txns | Filters, retries, DLQ | Replay, partitions |
| Use when | Ordered, transactional work | React to discrete events | Telemetry/IoT/big data |

## Decision: Logic Apps vs Functions
| | Logic Apps | Functions |
|---|---|---|
| Style | Low-code visual | Code-first |
| Best at | Connector-based integration | Custom logic / compute |
| Connectors | 300+ built-in | Write your own (bindings) |
| Billing | Per action | Per execution |
| Use when | Glue SaaS systems fast | Need full control/performance |

## Decision: Queue vs Topic (Service Bus)
| | Queue | Topic |
|---|---|---|
| Delivery | Point-to-point (1 receiver) | Pub/sub (N subscriptions) |
| Pattern | Competing consumers / work | Fan-out / broadcast |
| Filtering | n/a | Per-subscription rules/filters |
| Use when | Distribute work | Multiple independent reactions |
