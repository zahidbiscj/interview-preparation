# Testing Cheat Sheet (.NET + Frontend)

Covers 29 questions across 3 subtopics: **Test Fundamentals (11)**, **.NET Testing (11)**, **Frontend & E2E (7)**.

## Test Pyramid
```
        /\        E2E         few    slow   real user journeys
       /--\       Integration some   wiring, DB, HTTP
      /----\      Unit        many   fast   isolated logic
```
- Wide base of fast unit tests; thin tip of E2E. Scope/speed go down, cost/flakiness go up.
- Avoid the "ice-cream cone" (mostly manual/E2E). Testing *trophy* = heavier integration layer (frontend).

## Subtopic Recap

### 1. Test Fundamentals
- **Unit vs Integration vs E2E** – isolated piece / real collaborators / whole system as a user.
- **Mocking** – swap real deps for controllable fakes; needs a seam (interface + DI).
- **Test pyramid** – many unit, fewer integration, few E2E.
- **AAA** – Arrange / Act (one call) / Assert; equals Given-When-Then.
- **Unit-testing business logic** – extract pure logic, inject deps, cover happy + edges + errors, `[Theory]`.
- **Naming** – `Method_Scenario_Expected`; names = living docs.
- **Meaningful coverage + mutation testing** – coverage ≠ quality; Stryker.NET = mutation score.
- **TDD** – red → green → refactor; design tool, not dogma; skip for spikes/UI.
- **Contract testing / Pact** – consumer contract verified by provider; cheap vs full integration; broker in CI.
- **Flaky tests** – timing/shared state/order/external; fix root cause, don't blind-retry.
- **Good unit test = FIRST** – Fast, Isolated, Repeatable, Self-validating, Timely.

### 2. .NET Testing
- **xUnit vs NUnit vs MSTest** – xUnit default (new instance/test, no `[SetUp]`, ctor + `IDisposable`, fixtures for shared setup).
- **Moq / NSubstitute** – `Setup(...).ReturnsAsync(...)`, `Verify(...)`; `It.IsAny<T>()` / `Arg.Any<T>()`; members must be virtual/interface.
- **FluentAssertions** – `Should().Be(x)`; `BeEquivalentTo` = structural; clearer failure messages.
- **WebApplicationFactory + HttpClient** – in-memory full pipeline; override DB via `WithWebHostBuilder`; `IClassFixture`.
- **TestServer / in-memory** – in-process, no real port; powers WebApplicationFactory; won't catch transport/TLS bugs.
- **Mock vs fake vs stub** – verify interaction / working impl / canned data; mock only when interaction *is* the behavior.
- **Async testing** – `async Task`, `await`; never `.Result`/`.Wait()`; `ThrowAsync<T>`; never `async void`.
- **Asserting exceptions** – pass a delegate; `Assert.Throws<T>` / `Should().Throw<T>().WithMessage(...)`; async variants await.
- **AutoFixture / Bogus** – auto-fill anonymous objects / realistic fakes; pin fields the assertion needs.
- **Coverage tooling** – Coverlet (`--collect "XPlat Code Coverage"`) → ReportGenerator HTML; line vs branch; exclude generated code.
- **Coverage gate in CI** – threshold fails build; prefer diff coverage; pair with mutation score.

### 3. Frontend & E2E
- **Jest + React Testing Library** – render, query by role/text, assert user-visible; `getBy`/`queryBy`/`findBy`.
- **user-event** – `setup()` then `await user.click()/type()`; full event sequence; preferred over `fireEvent`.
- **Playwright vs Cypress** – Playwright cross-browser + multi-tab + parallel; Cypress great DX/time-travel; both auto-wait.
- **Snapshot testing** – catches accidental markup change; keep small; don't rubber-stamp `--updateSnapshot`.
- **Storybook** – components in isolation as stories; play functions + Chromatic; complements, not replaces, unit tests.
- **Load testing (k6 / Azure Load Testing)** – VUs, ramp-up, duration; thresholds = pass/fail; prod-like env.
- **Test types in CI** – lint+unit → integration → small E2E on deployed env; fail fast, parallelize.

## What to Mock vs Not
| Mock it | Don't mock it |
|---|---|
| External I/O: DB, HTTP, queues, file system | The class under test |
| Time, randomness, GUIDs (inject abstractions) | Pure logic / value objects / DTOs |
| Slow or non-deterministic dependencies | Types you don't own (wrap, then mock the wrapper) |

Over-mocking → brittle tests that assert calls, not behavior.

## Tools Table (purpose → tool)
| Purpose | Tool |
|---|---|
| .NET test framework | xUnit (or NUnit / MSTest) |
| Mocking | Moq, NSubstitute |
| Readable assertions | FluentAssertions |
| API integration tests | WebApplicationFactory + HttpClient (TestServer) |
| Test data generation | AutoFixture, Bogus |
| Coverage | Coverlet + ReportGenerator |
| Mutation testing | Stryker.NET |
| Contract testing | Pact (+ broker) |
| React component tests | Jest + React Testing Library |
| User interaction sim | user-event |
| Browser E2E | Playwright, Cypress |
| Component isolation / visual | Storybook (+ Chromatic) |
| Load testing | k6, Azure Load Testing |

## Quick-Recall Checklist
- [ ] Test = **FIRST**: Fast · Isolated · Repeatable · Self-validating · Timely.
- [ ] Structure with **AAA**; name `Method_Scenario_Expected`.
- [ ] Pyramid: many unit → some integration → few E2E; never invert it.
- [ ] Mock external I/O + time/randomness; never the SUT or pure logic.
- [ ] Test double: stub (data) vs fake (working impl) vs mock (interaction).
- [ ] Async: `async Task` + `await`; never `.Result` or `async void`.
- [ ] Exceptions: pass a delegate; assert type **and** details; async → `ThrowAsync`.
- [ ] Coverage ≠ quality → check branches + mutation score (Stryker.NET).
- [ ] Flaky? Fix root cause (wait on conditions, isolate state) — don't blind-retry.
- [ ] .NET integration: WebApplicationFactory + HttpClient, override DB.
- [ ] Frontend: query by role/text; `await` user-event; `findBy` for async.
- [ ] E2E: rely on auto-wait, not sleeps; Playwright for cross-browser/multi-tab.
- [ ] CI order: lint+unit → integration → E2E on deployed env; fail fast, parallelize.
- [ ] TDD = red → green → refactor (design tool, not dogma).
