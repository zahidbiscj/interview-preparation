# Job Radar — Feature Specification

> Second tab in PrepDeck. Goal: find .NET remote / Malaysia / Dhaka roles, apply, and
> know when HR actually responds — all from one screen.

---

## 1. What the Feature Does (User Perspective)

```
You open Job Radar →
  • See a ranked feed of .NET remote jobs (auto-pulled every 6h)
  • Paste an HR WhatsApp/LinkedIn blurb → it parses into a card automatically
  • Each card shows: match %, your skill gaps, which PrepDeck decks to review
  • You click Apply → card moves to "Applied" column
  • App tracks whether HR replied (email/LinkedIn ping detected or you mark manually)
  • If no reply in N days → app nudges you to follow up
```

---

## 2. Feature Breakdown

### 2.1 Auto Job Feed

| What | How |
|---|---|
| Sources | Himalayas, Remotive, Jobicy, RemoteOK, WWR RSS, JSearch (for MY + BD) |
| Refresh | GitHub Actions cron every 6h → writes `jobs.json` to Firebase Hosting |
| Filter | .NET keywords: `dotnet`, `asp.net`, `c#`, `.net core`, `azure`, `blazor` |
| Dedup | Hash on (company + title + location) — same job from 2 sources = 1 card |

### 2.2 AI Match Score

Each job card shows:
- **Match %** — how many required skills appear in your profile
- **You have:** Azure Service Bus, Durable Functions, APIM, EF Core, ...
- **You lack:** Terraform, Go, GraphQL (example gaps)
- **Prep now:** links to PrepDeck decks covering the gaps

Rule-based scoring is $0. Optional: Claude Haiku API for a one-line "why you fit" note (~cents/month).

### 2.3 HR Post Parser

Paste any raw HR blurb (LinkedIn post, WhatsApp forward, Telegram message) → the app
extracts structured fields:

```
Input:  "Urgent! Senior .NET Dev needed. 6+ yrs exp. Remote or KL office.
         Azure exp preferred. Salary RM 8k–12k. DM me or email hr@company.my"

Output: {
  title:      "Senior .NET Developer",
  company:    "Unknown (direct HR)",
  location:   "Remote / Kuala Lumpur, Malaysia",
  remote:     true,
  salary:     "RM 8,000–12,000 / month",
  stack:      [".NET", "Azure"],
  contact:    "hr@company.my",
  source:     "WhatsApp paste",
  deadline:   null,
  red_flags:  ["No company name disclosed"]
}
```

Extraction runs locally with a small prompt (Claude Haiku API) or a rule-based regex fallback
at $0.

### 2.4 Application Tracker (Kanban)

Four columns stored in `localStorage`:

```
[ Saved ] → [ Applied ] → [ HR Replied ] → [ Closed ]
```

Each card stores:
- Applied date
- Contact email / LinkedIn URL
- Expected reply window (default: 5 business days)
- Last follow-up date
- HR reply status: `pending | replied | ghosted | rejected | offer`

### 2.5 HR Response Verification

This is how you **know** whether HR responded:

#### Option A — Manual mark (always available, zero setup)
- You check your email / LinkedIn DMs
- Click "HR Replied" on the card → it moves to the Replied column
- App records reply date and calculates response time

#### Option B — Email scan via Gmail API (optional, free)
- User grants Gmail read-only OAuth scope once
- App checks inbox for emails from the contact address on the card
- If a matching email arrives → card auto-moves to "HR Replied"
- No server needed: Gmail API is callable directly from the browser

#### Option C — LinkedIn follow-up reminder (no API needed)
- App shows a banner: "No reply from hr@company.my in 5 days — follow up?"
- One-click copies a follow-up message template to clipboard
- You paste it into LinkedIn or email manually

---

## 3. HR Response Verification Flow (Step by Step)

```
Day 0  — You click Apply on a job card
           App records: applied_date = today, contact = hr@company.my
           Card moves to "Applied" column

Day 1–4 — App is silent (waiting window)

Day 5  — App shows nudge: "No reply yet from [Company]. Follow up?"
           You can: Mark as "Ghosted" | Send follow-up | Snooze 3 days

Day 5  — If Gmail API enabled:
           GitHub Actions (or browser poll) checks Gmail for email from contact
           Match found → card auto-moves to "HR Replied", records reply date

Day 8  — If still no reply:
           Status set to "Ghosted" automatically
           Removed from active tracking, moved to Closed

Any time — HR emails you:
           • Gmail API: auto-detected (if enabled)
           • Manual: you click "Replied" on card
           App records: reply_date, response_time_days, outcome
```

---

## 4. "Will I Get a Response?" — What the App Tells You

After you've tracked 10+ applications, the app shows:

| Metric | Example |
|---|---|
| Overall reply rate | 34% (12 of 35 applied) |
| Avg response time | 3.2 business days |
| Best-performing source | Himalayas (55% reply rate) |
| Lowest reply rate | LinkedIn cold apply (18%) |
| Ghosting rate by region | MY: 41% ghost · Remote-global: 28% ghost |

This tells you which channels and job types are worth your time.

---

## 5. Red-Flag Detection

Before you apply, the parser flags:

| Red flag | Example |
|---|---|
| No company name | "Anonymous employer" |
| Vague remote claim | "Hybrid considered" when you need full remote |
| Below-market salary | RM 4k for Senior .NET (market: RM 8k–15k) |
| Unrealistic stack | "Must know 12 frameworks + DevOps + ML" |
| No contact method | "Apply via form only" (hard to follow up) |

---

## 6. Technical Architecture

```
┌─────────────────────────────────────────────────────┐
│  GitHub Actions (cron, every 6h)                    │
│    ├─ fetch Himalayas + Remotive + Jobicy + WWR RSS │
│    ├─ fetch JSearch (Malaysia + Bangladesh)         │
│    ├─ dedupe + keyword score                        │
│    └─ commit → /assets/data/jobs.json               │
└──────────────────┬──────────────────────────────────┘
                   │ static JSON
┌──────────────────▼──────────────────────────────────┐
│  Firebase Hosting (free)                            │
│    └─ Angular app reads jobs.json (no CORS issues)  │
└──────────────────┬──────────────────────────────────┘
                   │
┌──────────────────▼──────────────────────────────────┐
│  Angular "Job Radar" tab                            │
│    ├─ Job Feed (ranked cards)                       │
│    ├─ HR Post Parser (paste → structured card)      │
│    ├─ Kanban tracker (localStorage)                 │
│    └─ Gmail API poll (optional, browser OAuth)      │
└─────────────────────────────────────────────────────┘
```

No backend. No monthly cost. Everything either runs in CI or in the browser.

---

## 7. Build Phases

### Phase 1 — Feed + Kanban (MVP, ~2 days)
- [ ] GitHub Action: pull Himalayas + Remotive + WWR RSS → `jobs.json`
- [ ] Angular: display job cards with keyword match %
- [ ] Kanban columns in localStorage
- [ ] Manual "Applied / Replied / Ghosted" buttons

### Phase 2 — HR Post Parser (~1 day)
- [ ] Paste box + Claude Haiku API call → structured JSON card
- [ ] Regex fallback (email, salary range, remote keyword) for $0 path

### Phase 3 — Gmail HR Reply Detection (~1 day)
- [ ] Gmail read-only OAuth in Angular
- [ ] Poll inbox for emails matching contact addresses in tracker
- [ ] Auto-update card status on match

### Phase 4 — AI Enrichment (optional)
- [ ] Match score one-liner ("Emphasize Service Bus experience")
- [ ] Red-flag scoring per posting
- [ ] Reply-rate stats dashboard

---

## 8. Constraints & Honest Limits

| Constraint | Impact |
|---|---|
| No Jobstreet / BDjobs API | HR Post Parser is the only way to get these in |
| JSearch = 200 free req/month | ~6 searches/day for MY + BD — plan queries carefully |
| Gmail API = browser OAuth | User must grant permission once; works without backend |
| AI features need Claude API key | Separate from Max subscription; Haiku is ~$0.01/day at this volume |
| Ghosting detection is heuristic | Only reliable if user enters correct contact email when applying |
