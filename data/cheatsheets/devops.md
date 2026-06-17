# DevOps & Git Cheat Sheet

Git is a distributed VCS; DevOps wraps it in pipelines, branching contracts, and deployment automation.

Two subtopics below: **Git & Version Control** (11 Qs) and **CI/CD** (7 Qs).

---

## Subtopic 1 — Git & Version Control

| # | Question | Recall hook |
|---|---|---|
| 001 | pull vs fetch | fetch = download only; pull = fetch + merge/rebase |
| 002 | merge vs rebase | merge keeps history + merge commit; rebase = linear, rewrites SHAs; never rebase shared |
| 003 | resolve merge conflicts | status → edit `<<< === >>>` → add → continue; `--abort` to bail |
| 004 | branching strategy | Git Flow (versioned), GitHub Flow (SaaS PRs), Trunk-Based (flags + CI) |
| 005 | reset vs revert | reset moves pointer (local); revert = new inverse commit (safe on shared) |
| 006 | fast-forward merge | no divergence → pointer slides; `--no-ff` forces commit, `--ff-only` guards |
| 007 | git stash | shelve WIP; pop removes, apply keeps; `-u` for untracked |
| 008 | git cherry-pick | apply one commit's diff (new SHA); backport fixes |
| 009 | squash commits | `rebase -i` or 'Squash and merge'; clean history, loses granularity |
| 010 | HEAD / detached HEAD | HEAD → current commit (via branch); detached = points at SHA, commits orphaned |
| 011 | undo a pushed commit | `git revert` (safe); never reset + force-push shared; rotate leaked secrets |

### reset modes vs revert

| Mode | Moves HEAD | Index | Working Tree | Use When |
|---|---|---|---|---|
| `reset --soft` | Yes | No | No | Re-commit; changes stay staged |
| `reset --mixed` (default) | Yes | Yes (unstaged) | No | Undo commit, keep changes to edit |
| `reset --hard` | Yes | Yes | Yes | **Discard** — destructive (reflog to recover) |
| `revert` | New commit | Yes | Yes | **Undo a pushed commit safely** |

### Branching strategies

| Strategy | One-liner |
|---|---|
| **Git Flow** | Long-lived develop/release/hotfix; versioned, scheduled releases |
| **GitHub Flow** | main always deployable; branch → PR → merge → deploy |
| **Trunk-Based** | Tiny short-lived branches to main + feature flags; true CI/DORA favourite |

---

## Subtopic 2 — CI/CD

| # | Question | Recall hook |
|---|---|---|
| 001 | What is CI/CD | CI = build+test; Delivery = releasable (manual gate); Deployment = auto to prod |
| 002 | build artifact / promotion | immutable versioned output; build once, deploy many; config injected at deploy |
| 003 | blue-green vs canary | blue-green = instant flip + rollback (2x infra); canary = % traffic ramp + monitor |
| 004 | manage secrets | vault + Managed Identity/OIDC; never in source; mask, rotate, gitleaks |
| 005 | .NET + Angular pipeline | parallel jobs, OIDC auth, staging auto + prod approval, same artifact |
| 006 | environment promotion | dev → staging → prod; same artifact, staging prod-like, gates between |
| 007 | rollback strategy | slot swap / `rollout undo` / re-deploy prev; expand-contract DB; feature flags |

### Pipeline stages
`Source → Build → Unit Test → Code Analysis → Integration Test → Artifact Publish → Deploy (staging) → Smoke Test → Deploy (prod)`

### Deployment patterns

| Pattern | How | When |
|---|---|---|
| **Blue-Green** | Two identical envs; flip router instantly; instant rollback | Zero-downtime, easy rollback |
| **Canary** | Small % traffic to new version, ramp if healthy | Limit blast radius, real-traffic validation |
| **Rolling** | Replace instances one-by-one | Simple, no extra infra, slower rollback |

> Both blue-green and canary run two versions at once → keep DB/API **backward-compatible** (expand/contract).

---

## Common Git Commands

| Task | Command |
|---|---|
| Fetch only (safe) | `git fetch origin` |
| Inspect incoming | `git log HEAD..origin/main --oneline` |
| Pull with rebase | `git pull --rebase origin main` |
| Prune dead remote refs | `git fetch --prune` |
| Merge (force commit) | `git merge --no-ff feature/x` |
| Merge (FF-only guard) | `git merge --ff-only feature/x` |
| Rebase onto main | `git rebase main` |
| Interactive squash | `git rebase -i HEAD~3` |
| Abort merge / rebase | `git merge --abort` / `git rebase --abort` |
| Undo commit, keep staged | `git reset --soft HEAD~1` |
| Undo commit, discard (destructive) | `git reset --hard HEAD~1` |
| Undo a pushed commit (safe) | `git revert <SHA>` |
| Revert a merge commit | `git revert -m 1 <merge-SHA>` |
| Recover lost commit | `git reflog` → `git checkout -b rescue <SHA>` |
| Stash WIP (incl. untracked) | `git stash push -u -m "msg"` |
| Restore stash | `git stash pop` / `git stash apply` |
| Cherry-pick a commit | `git cherry-pick <SHA>` |
| Save detached-HEAD work | `git checkout -b new-branch` |
| Fix last commit message | `git commit --amend -m "msg"` (pre-push only) |
| Safe force push | `git push --force-with-lease` |
| Visual history | `git log --oneline --graph --all` |

---

## Quick-Recall Checklist

- [ ] `fetch` before rebase; `pull` for clean fast-forward syncs
- [ ] Never `rebase` (or squash on) a branch others have pulled — rewrites shared history
- [ ] Prefer `revert` over `reset --hard` + force-push on pushed commits
- [ ] `reset --soft` keeps staged, `--mixed` keeps unstaged, `--hard` discards
- [ ] `reflog` rescues lost commits (~30 days)
- [ ] Detached-HEAD commits are orphaned — branch first to keep them
- [ ] `stash` excludes untracked unless `-u`; pop removes, apply keeps
- [ ] Squash noise commits before merging PRs; keep granular history for big features
- [ ] Git Flow = versioned releases; GitHub Flow/Trunk-Based = high cadence (need flags)
- [ ] CI = auto build+test; Delivery = releasable; Deployment = auto to prod
- [ ] Build once, deploy many — promote the **same immutable artifact**; inject config at deploy
- [ ] Blue-green = instant cutover + rollback; canary = gradual traffic shift + monitoring
- [ ] Keep DB changes backward-compatible (expand/contract) for safe rollback
- [ ] Secrets in a vault via Managed Identity/OIDC; rotate on leak; never in source
- [ ] Rollback = slot swap / `kubectl rollout undo` / re-deploy prev artifact; feature flags = instant off
