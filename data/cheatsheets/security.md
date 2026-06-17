# Security (.NET Web/App) — Interview Cheat Sheet

Defense-in-depth: authenticate, authorize, validate, encrypt, and least-privilege everything. Never trust the client.

---

## Secure API Checklist (OWASP-style)

- [ ] AuthN + AuthZ on **every** endpoint — deny by default
- [ ] HTTPS everywhere + HSTS
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
| `Content-Security-Policy` | restrict sources | XSS, injection |
| `Strict-Transport-Security` | `max-age=…; includeSubDomains` | protocol downgrade |
| `X-Content-Type-Options` | `nosniff` | MIME sniffing |
| `X-Frame-Options` | `DENY` (or CSP `frame-ancestors`) | clickjacking |
| `Referrer-Policy` | `no-referrer` / `strict-origin` | referrer leakage |
| `Permissions-Policy` | feature allow-list | camera/geo abuse |

---

## Top Web Vulns — Fix in One Line

- **XSS** → context-aware output encoding + CSP; avoid `Html.Raw`.
- **CSRF** → antiforgery token + `SameSite=Lax/Strict` cookies.
- **SQL injection** → parameterize / `FromSqlInterpolated`; never `FromSqlRaw` + concat.
- **Over-posting** → input DTOs, `[BindNever]`.
- **Clickjacking** → `X-Frame-Options: DENY` / `frame-ancestors 'none'`.
- **CORS misconfig** → whitelist origins; never `AllowAnyOrigin()` + `AllowCredentials()`.

---

## OAuth 2.0 / OIDC Flow

- **OAuth 2.0** → authorization → **access token** ("can call this API").
- **OIDC** → identity layer on OAuth → **ID token** (JWT: who the user is).
- **Authorization Code + PKCE** → the standard flow for SPAs/mobile/native.
  - Client sends hashed `code_challenge`, later proves with `code_verifier`.
  - No client secret needed; replaces the deprecated **implicit** flow.

**JWT** = `header . payload(claims) . signature`. Payload is encoded, **not** encrypted.
Validate: signature, `iss`, `aud`, `exp`/`nbf`, signing key (JWKS). Reject `alg: none`.

---

## JWT vs Cookie Auth

| | JWT (Bearer) | Cookie |
|---|---|---|
| State | Stateless | Session-ish |
| Sent | `Authorization` header | Auto by browser |
| Best for | APIs, SPA, mobile, cross-domain | Server-rendered apps |
| CSRF risk | Low (header) | Yes → needs antiforgery |
| XSS risk | High if in `localStorage` | Low if `HttpOnly` |
| Revocation | Hard (short TTL + denylist) | Easy (drop session) |

**Hybrid (recommended):** short-lived JWT access token + refresh token in `HttpOnly`+`Secure` cookie, rotated on each use with reuse detection.

---

## AuthZ Models (ASP.NET Core)

- **RBAC** → `[Authorize(Roles = "Admin")]` (coarse).
- **Claims** → `RequireClaim("department", "HR")`.
- **Policy** → named, reusable, can add custom `IAuthorizationRequirement`. Prefer for anything non-trivial.

---

## Encryption & Hashing

- **Symmetric** (AES): one shared key, fast, bulk data.
- **Asymmetric** (RSA/ECC): public/private pair, key exchange + signatures. TLS uses both.
- **Hashing**: one-way, integrity/passwords; **encryption**: reversible with a key.
- **Passwords**: unique salt + slow adaptive hash (**bcrypt / PBKDF2 / Argon2**) — never MD5/SHA alone.
- **At rest** (TDE/disk/column) vs **in transit** (TLS 1.2+) — you need both.

---

## Secrets Rules

- Never in source control or plaintext `appsettings`.
- **Prod**: Azure Key Vault + **Managed Identity** (`DefaultAzureCredential`) — no stored creds.
- **Local**: `dotnet user-secrets`.
- **CI/CD**: secret variables, masked in logs.
- Committed a secret? **Rotate first**, then purge history + add scanning.

---

## Always-True Principles

- **Least privilege** — minimum access for every user/service/process.
- **Deny by default**, allow-list explicitly.
- **Validate server-side** — client validation is UX only.
- **Defense-in-depth** — WAF/headers complement, never replace, secure code.
