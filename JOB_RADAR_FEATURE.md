# PrepDeck — Job Radar Feature & Job-Source Research

> Companion feature to PrepDeck (Angular interview-prep app).
> Goal: stop manually searching jobs. Auto-aggregate **remote / Malaysia / Dhaka** .NET roles,
> AI-rank them against the user's profile (Senior .NET / Azure integration, 6+ yrs), and link each
> job's skill gaps back to the study decks.
> Constraints: **free, no backend**, GitHub Actions + Firebase Hosting.

---

## 1. The Feature: "Job Radar" (a second tab in PrepDeck)

**Standout differentiator:** it closes the loop between *finding a job* and *prepping for its interview*.
Each job's required stack is matched to PrepDeck decks → a posting becomes a targeted study plan
("This role needs Durable Functions + APIM → review these 2 decks before applying").

### What it does
1. **Auto-aggregated live feed** — remote-first, plus Malaysia & Dhaka, refreshed every few hours.
2. **AI match score** — % fit vs profile, skills you have vs gaps.
3. **Skill-gap → deck link** — the killer tie-in to PrepDeck.
4. **HR Post Parser** — paste any LinkedIn/WhatsApp/Telegram HR blurb → AI extracts role, stack,
   location, remote?, contact, deadline → adds to board. (Legal way to "fetch from HR posts".)
5. **Smart filters** — Remote-only / MY / Dhaka / stack / seniority.
6. **Application tracker** — Saved → Applied → Interview → Closed kanban (localStorage).
7. **Daily digest** — "5 new jobs match you today".

### Where AI genuinely helps
| Task | What AI does |
|---|---|
| Normalize messy posts | Free-text HR post → structured fields |
| Match & rank | Score job vs profile, one-line "why you fit" |
| Skill extraction | Pull required stack, map to PrepDeck decks |
| Dedup | Merge same job across multiple sources |
| Red-flag detection | Flag underpay / vague remote claims |
| Tailored note | "Emphasize your Service Bus + Saga experience" |

---

## 2. Free Architecture (no backend)

```
GitHub Actions  (cron, every ~6h)
   ├─ fetch from free APIs/RSS (see §3)
   ├─ normalize + dedupe
   ├─ score vs profile
   │     • rule-based keyword scoring        → $0
   │     • OR Claude API (Haiku) enrichment  → a few cents/mo
   └─ commit  /assets/data/jobs.json
         → Firebase Hosting (static)
              → Angular "Job Radar" reads JSON  (no CORS, no backend)
```

Why this works: the browser can't legally scrape sites or call most APIs (CORS). A scheduled
GitHub Action acts as a free serverless aggregator and writes a static JSON the app reads.

---

## 3. Verified Job Sources (tested June 2026)

### A. Free APIs — confirmed working, no auth required

| Source | Endpoint | Filters | Rate Limit | Notes |
|---|---|---|---|---|
| **Himalayas** | `https://himalayas.app/jobs/api` (browse) `https://himalayas.app/jobs/api/search` (search) | keyword, country, seniority, employment type, timezone | Max **20 jobs/request** (reduced March 2025); higher limits on request | Best free remote API. Data refreshes every 24h. |
| **Remotive** | `https://remotive.com/api/remote-jobs` | category (`software-development`), company_name, search, limit | ~2 req/min; ~4 req/day recommended | Jobs delayed 24h for attribution; **no location filter** for MY/BD |
| **Jobicy** | `https://jobicy.com/api/v2/remote-jobs` | count (1–100), geo (`apac`, `emea`, `usa`, …), industry, tag | Poll max once per hour | `apac` geo = AU, JP, PH, SG, TH, VN — **NOT Malaysia or Bangladesh** |
| **RemoteOK** | `https://remoteok.com/api` or `/remote-dev-jobs.json` | Path-based: `/remote-dev-jobs.json`, `/remote-dotnet-jobs.json`, etc. | Not documented | **`?tags=` query param does NOT filter** — use path-based slugs only |
| **Arbeitnow** | `https://www.arbeitnow.com/api/job-board-api` | remote toggle, visa_sponsorship, tags, location, posted-since | Generous | Europe-focused + remote; **no Malaysia or Bangladesh coverage** |
| **JSearch (RapidAPI)** | `https://jsearch.p.rapidapi.com/search` | query, location, remote_jobs_only, employment_types, date_posted | **200 req/month free** | Aggregates Google for Jobs; **use this for Malaysia + Bangladesh** (set location param) |

### B. Free RSS Feeds — confirmed live

| Feed | URL | Notes |
|---|---|---|
| **We Work Remotely — All** | `https://weworkremotely.com/remote-jobs.rss` | Active June 2026; 11 category feeds available |
| **We Work Remotely — Back-End** | `https://weworkremotely.com/categories/remote-back-end-programming-jobs.rss` | Most relevant for .NET backend |
| **We Work Remotely — Full-Stack** | `https://weworkremotely.com/categories/remote-full-stack-programming-jobs.rss` | |
| **Remotive — Software Dev** | `https://remotive.com/remote-jobs/feed/software-development` | 30 category feeds available; `/feed` (no slug) returns **404** |
| **Himalayas RSS** | `https://himalayas.app/jobs/rss` | Up to 100 most recent; no server-side params — filter client-side |
| **Jobicy RSS** | `https://jobicy.com/feed/job_feed?search_region=apac&search_keywords=dotnet` | **URL is `/feed/job_feed`** — NOT `/?feed=job_feed` (outdated docs) |

### C. Malaysia 🇲🇾 — honest picture

| Source | Status | Notes |
|---|---|---|
| **JSearch (RapidAPI)** | ✅ Works | Set `location=Malaysia`; free 200 req/month |
| **Jobstreet (my.jobstreet.com)** | ❌ No free API | Only via Apify scraper ($2/1000 results, paid) |
| **Indeed Malaysia** | ❌ No API | Indeed shut down job feed in 2025 |
| **Adzuna** | ❌ Malaysia NOT supported | Only 12 countries: gb, us, de, fr, au, nz, ca, in, pl, br, at, za — **MY is not one of them** |
| **Hiredly / 9cv9** | ❌ No documented API | Manual / paste only |
| **Himalayas** | ✅ Partial | Has country filter; some MY-hiring companies post there |

### D. Dhaka / Bangladesh 🇧🇩 — honest picture

| Source | Status | Notes |
|---|---|---|
| **JSearch (RapidAPI)** | ✅ Works | Set `location=Bangladesh` or `location=Dhaka`; best free option |
| **Himalayas** | ✅ Partial | Filter by country=Bangladesh; some remote roles include BD |
| **BDjobs (bdjobs.com)** | ❌ No API | No public API or RSS; only unmaintained Selenium scrapers (last updated 2021) |
| **BD Tech Jobs (bdtechjobs.com)** | ❌ No API | 174+ tech jobs on site; no documented API or RSS |
| **Crossover** | ✅ Browse only | Remote US-company roles; no API but listed on Remotive/Himalayas |

### E. Dead / wrong endpoints to avoid

| Claim | Reality |
|---|---|
| Adzuna `https://api.adzuna.com/v1/api/jobs/my/search` | Malaysia (`my`) is NOT a supported country code — returns 404 |
| RemoteOK `?tags=dotnet` query param | Does NOT filter results — use path `/remote-dotnet-jobs.json` instead |
| Remotive `https://remotive.com/feed` | Returns 404 — use `/remote-jobs/feed/software-development` |
| Jobicy `https://jobicy.com/?feed=job_feed` | Wrong URL — use `https://jobicy.com/feed/job_feed` |

---

## 4. Realistic Plan: what to integrate first

**Phase 1 (free, automated)** — GitHub Action pulls:
- **Himalayas API** (search endpoint, keyword=".net")
- **Remotive API** (category=software-development)
- **Jobicy API** (geo=apac, tag=dotnet)
- **RemoteOK** (`/remote-dev-jobs.json` path)
- **We Work Remotely RSS** (back-end + full-stack feeds)
- **JSearch (RapidAPI)** — 200 free req/month split between location=Malaysia and location=Bangladesh queries

→ Outputs `jobs.json`. Rule-based .NET keyword matching. Covers most remote + some MY + BD roles.

**Phase 2 (paste-based)** — **HR Post Parser** for Jobstreet / LinkedIn / BDjobs / WhatsApp posts
that have no API. This is how MY + Dhaka local roles get in legally.

**Phase 3 (optional AI)** — add a Claude API key (Haiku) in the Action for real ranking, red-flag
detection, and tailored notes. ~cents/month at this volume.

> Note: the **Max subscription cannot be used programmatically** — AI enrichment needs a separate
> (cheap) Claude API key. Everything else is $0.

---

## 5. Honest Limitations
- **No live Jobstreet/Indeed Malaysia feed** — no free API; covered by HR-Post Parser.
- **No live BDjobs feed** — same reason; HR-Post Parser is the workaround.
- **Adzuna has no Malaysia endpoint** — it was listed in earlier research but does not exist.
- **Jobicy APAC region excludes Malaysia and Bangladesh** — use JSearch instead.
- **Truly $0 path = rule-based matching.** AI ranking/parsing needs a paid API key (cheap).
- **JSearch free tier = 200 req/month** — budget carefully (e.g. 1 search/day = 30 req/month).

---

## Sources (verified June 2026)
- Himalayas Remote Jobs API — https://himalayas.app/api
- Remotive API — https://remotive.com/api/remote-jobs
- Jobicy API — https://jobicy.com/api/v2/remote-jobs
- RemoteOK API — https://remoteok.com/api
- Arbeitnow Job Board API — https://www.arbeitnow.com/blog/job-board-api
- JSearch (OpenWeb Ninja / RapidAPI) — https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch
- We Work Remotely RSS — https://weworkremotely.com/remote-jobs.rss
- Adzuna API docs (countries supported) — https://developer.adzuna.com/docs/search
