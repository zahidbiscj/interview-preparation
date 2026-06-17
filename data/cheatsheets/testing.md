# Testing Cheat Sheet (.NET + Frontend)

## Test Pyramid
```
        /\        E2E        few   slow   real user journeys
       /--\       Integration some  wiring, DB, HTTP
      /----\      Unit       many  fast   isolated logic
```
- Wide base of fast unit tests; thin tip of E2E.
- Avoid the "ice-cream cone" (mostly manual/E2E).

## AAA (Arrange-Act-Assert)
- **Arrange** – build inputs, mocks, system under test.
- **Act** – one call to the method being tested.
- **Assert** – verify result / state / interaction.
- Name tests `Method_Scenario_Expected` (e.g. `Withdraw_OverBalance_Throws`).

## Good Unit Test = FIRST
Fast · Isolated · Repeatable (deterministic) · Self-validating · Timely.
No clock, no network, no shared state, no run-order dependency.

## .NET Stack
- **Framework:** xUnit (default; new instance per test, `[Fact]`/`[Theory]`).
- **Mocking:** Moq / NSubstitute — `Setup(...).ReturnsAsync(...)`, `Verify(...)`.
- **Assertions:** FluentAssertions — `result.Should().Be(x)`, `BeEquivalentTo`.
- **Integration:** `WebApplicationFactory<Program>` + `HttpClient` (in-memory via TestServer).
- **Test data:** AutoFixture (anonymous objects), Bogus (realistic fakes).
- **Async:** `async Task` test, `await act.Should().ThrowAsync<T>()`; never `.Result`.
- **Coverage:** Coverlet (`--collect "XPlat Code Coverage"`) → ReportGenerator (HTML).
- **Quality:** Stryker.NET (mutation score), coverage gate in CI (prefer diff coverage).

## Frontend Stack
- **Unit/component:** Jest + React Testing Library (query by role/text).
- **Interactions:** `@testing-library/user-event` (async: `await user.click()`).
- **E2E:** Playwright (cross-browser, parallel) or Cypress (great DX).
- **Isolation/docs:** Storybook (component states, play functions).
- **Snapshot:** Jest snapshots — keep small; don't rubber-stamp `--updateSnapshot`.
- **Load:** k6 (scripted VUs + thresholds) / Azure Load Testing.

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
| API integration tests | WebApplicationFactory + HttpClient |
| Test data generation | AutoFixture, Bogus |
| Coverage | Coverlet + ReportGenerator |
| Mutation testing | Stryker.NET |
| Contract testing | Pact |
| React component tests | Jest + React Testing Library |
| User interaction sim | user-event |
| Browser E2E | Playwright, Cypress |
| Component isolation | Storybook |
| Load testing | k6, Azure Load Testing |

## Quick Wins / Red Flags
- Flaky test? Fix root cause (waits not `Sleep`, isolate state) — don't blind-retry.
- High line coverage ≠ good tests; check assertions / mutation score.
- TDD = red → green → refactor (design tool, not dogma).
- CI order: lint + unit → integration → E2E on a deployed env; fail fast, parallelize.
