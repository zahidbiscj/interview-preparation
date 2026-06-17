# Security (.NET Web/App) — Interview Cheat Sheet

Defense-in-depth: authenticate, authorize, validate, encrypt, and least-privilege everything. Never trust the client.

**Covers 30 questions across 3 subtopics:** Web & API Security (11), Auth & Identity (10), Data & Secrets (9).

---

## Quick-Recall Checklist (the 30-second sweep)

- [ ] **AuthN proves who; AuthZ proves what** — `UseAuthentication()` before `UseAuthorization()`.
- [ ] **Deny by default**, allow-list explicitly, validate server-side (client = UX only).
- [ ] **Parameterize SQL** (`FromSqlInterpolated`, never `FromSqlRaw` + concat).
- [ ] **Encode output + CSP** for XSS; **antiforgery + SameSite** for CSRF.
- [ ] **Bind to DTOs**, not entities (stop over-posting).
- [ ] **CORS whitelist** — never `AllowAnyOrigin()` + `AllowCredentials()`.
- [ ] **JWT**: validate signature/`iss`/`aud`/`exp`; reject `alg:none`; payload is encoded, not secret.
- [ ] **Passwords**: salted, slow, adaptive (bcrypt/PBKDF2/Argon2).
- [ ] **Secrets**: Key Vault + Managed Identity in prod; `user-secrets` locally; rotate-first if leaked.
- [ ] **Least privilege + short-lived tokens** everywhere.

---

## Secure API Checklist (OWASP-style)

- [ ] AuthN + AuthZ on **every** endpoint — deny by default
- [ ] HTTPS everywhere + HSTS (prod only)
- [ ] Validate all input server-side (allow-list)
- [ ] Output-encode to prevent XSS; antiforgery + SameSite for CSRF
- [ ] Parameterized queries / EF — never concatenate SQL
- [ ] Bind to DTOs, not entities (stop over-posting)
- [ ] CORS origin whitelist (never AnyOrigin + Credentials)
- [ ] Rate limiting / throttling; WAF at the edge
- [ ] Security headers (see table)
- [ ] Least-privilege DB account + secrets in Key Vault
- [ ] Patch dependencies; don't leak stack traces

---

## Security Headers

| Header | Value | Protects against |
|---|---|---|
| `Content-Security-Policy` | restrict sources (`frame-ancestors`, `script-src`) | XSS, injection, clickjacking |
| `Strict-Transport-Security` | `max-age=…; includeSubDomains` | protocol downgrade |
| `X-Content-Type-Options` | `nosniff` | MIME sniffing |
| `X-Frame-Options` | `DENY` / `SAMEORIGIN` (or CSP `frame-ancestors`) | clickjacking |
| `Referrer-Policy` | `no-referrer` / `strict-origin` | referrer leakage |
| `Permissions-Policy` | feature allow-list | camera/geo abuse |

> CSP is strongest but needs tuning — avoid blanket `unsafe-inline`. Keep HSTS to **prod only** (it pins HTTPS even on localhost).

---

## Top Web Vulns — Fix in One Line

- **XSS** → context-aware output encoding + CSP; avoid `Html.Raw`. DOM-XSS: sanitize client sinks, avoid `innerHTML`.
- **CSRF** → antiforgery token + `SameSite=Lax/Strict`; Bearer-header APIs are largely immune.
- **SQL injection** → parameterize / `FromSqlInterpolated`; never `FromSqlRaw` + concat; least-privilege DB caps damage.
- **Over-posting** → input DTOs, `[BindNever]`; map to entity explicitly.
- **Clickjacking** → `X-Frame-Options: DENY` / `frame-ancestors 'none'`.
- **CORS misconfig** → whitelist origins; never `AllowAnyOrigin()` + `AllowCredentials()`.
- **SSRF** → validate/allow-list outbound URLs; block internal/metadata ranges.

**OWASP Top 10 (current):** #1 Broken Access Control, Cryptographic Failures, Injection, Insecure Design, Security Misconfiguration, Vulnerable Components, Auth Failures, SSRF… It's prioritization/awareness, **not** an exhaustive checklist.

---

## OAuth 2.0 / OIDC / JWT

- **OAuth 2.0** → authorization → **access token** ("can call this API").
- **OIDC** → identity layer on OAuth → **ID token** (JWT: who the user is, `sub`/`email`).
- **Authorization Code + PKCE** → standard flow for SPAs/mobile/native.
  - Client sends hashed `code_challenge`, later proves with `code_verifier` → intercepted code is useless.
  - No client secret needed; replaces the deprecated **implicit** flow.

**JWT** = `header . payload(claims) . signature`. Payload is encoded, **not** encrypted.
Validate: signature, `iss`, `aud`, `exp`/`nbf`, signing key (JWKS). **Reject `alg: none`.**

**Revoking a stateless JWT:** can't truly invalidate → short TTL + revoke at refresh; denylist (`jti`) or per-user security stamp for forced logout; rotate signing key = global kill-switch.

---

## JWT vs Cookie Auth

| | JWT (Bearer) | Cookie |
|---|---|---|
| State | Stateless | Session-ish |
| Sent | `Authorization` header | Auto by browser |
| Best for | APIs, SPA, mobile, cross-domain | Server-rendered apps |
| CSRF risk | Low (header not auto-sent) | Yes → needs antiforgery |
| XSS risk | High if in `localStorage` | Low if `HttpOnly` |
| Revocation | Hard (short TTL + denylist) | Easy (drop session) |

**Hybrid (recommended):** short-lived JWT access token + **refresh token in `HttpOnly`+`Secure` cookie**, rotated each use with reuse detection (replayed old token → revoke the family).

---

## AuthZ Models (ASP.NET Core)

- **RBAC** → `[Authorize(Roles = "Admin")]` (coarse).
- **Claims** → `RequireClaim("department", "HR")`.
- **Policy** → named, reusable; add custom `IAuthorizationRequirement` for resource/relational rules. **Prefer for anything non-trivial.** (Roles are claims under the hood.)

---

## Identity Platform

- **ASP.NET Core Identity** → built-in membership (users, password hashing, lockout, 2FA, external logins), EF Core-backed. Good for first-party local accounts.
- **Entra ID (Azure AD)** → cloud IdP for OAuth/OIDC sign-in; use for SSO/federation/B2C.
- **Managed Identity** → passwordless Entra identity for an app/VM/service; platform rotates the credential → no secrets in code (`DefaultAzureCredential`). System-assigned (tied to one resource) vs user-assigned (shareable, standalone).

---

## Encryption & Hashing

- **Symmetric** (AES): one shared key, fast, bulk data. Pain point: key distribution.
- **Asymmetric** (RSA/ECC): public/private pair, key exchange + signatures. TLS uses **both** (asymmetric to agree a symmetric session key).
- **Hashing**: one-way, integrity/passwords; **encryption**: reversible with a key; **base64**: encoding, *not* security.
- **Passwords**: unique salt + slow adaptive hash (**bcrypt / PBKDF2 / Argon2**) — never MD5/SHA alone (too fast).
- **At rest** (TDE/disk/column) vs **in transit** (TLS 1.2+) — you need both; at-rest does **not** stop SQL injection.

---

## Data Handling

- **Multi-tenant isolation** (cost ↔ isolation): DB-per-tenant (strongest) → schema-per-tenant → shared schema + `TenantId`. Enforce the filter **centrally** (EF global query filter); set tenant server-side, never trust client `TenantId`.
- **PII / GDPR**: data minimization + purpose limitation, lawful basis, encrypt + restrict + log access, support access/erasure (right to be forgotten), ~72h breach notification. Pseudonymization (re-linkable) ≠ anonymization (not).

---

## Secrets Rules

- Never in source control or plaintext `appsettings`.
- **Prod**: Azure Key Vault + **Managed Identity** (`DefaultAzureCredential`) — no stored creds.
- **Local**: `dotnet user-secrets`.
- **CI/CD**: masked secret variables, never echoed.
- **Committed a secret?** **Rotate/revoke first** (assume leaked), then purge git history + add scanning/pre-commit hooks. Deleting the file ≠ safe (history + clones persist); private repo ≠ safe.

---

## Always-True Principles

- **Least privilege** — minimum access for every user/service/process; shrinks blast radius.
- **Deny by default**, allow-list explicitly.
- **Validate server-side** — client validation is UX only.
- **Defense-in-depth** — WAF/headers complement, never replace, secure code. (WAF won't stop business-logic abuse.)
