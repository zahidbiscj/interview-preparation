# DevOps & Git Cheat Sheet

Git is a distributed VCS; DevOps wraps it in pipelines, branching contracts, and deployment automation.

---

## Must-Know One-Liners

| Concept | Answer |
|---|---|
| What is a commit? | Immutable snapshot of the index with a SHA-1 hash and parent pointer |
| HEAD | Pointer to the current branch tip (or a detached commit) |
| Index / staging area | Buffer between working tree and next commit |
| Fast-forward merge | No divergence — Git just moves the branch pointer forward |
| Detached HEAD | HEAD points to a commit, not a branch — new commits are orphaned unless you branch |
| `origin` | Default alias for the remote repository URL |

---

## git pull vs git fetch

| | `git fetch` | `git pull` |
|---|---|---|
| What it does | Downloads remote refs, **does not touch working tree** | `fetch` + `merge` (or `--rebase`) in one step |
| When to use | Before rebasing; inspect first with `git log origin/main` | Quick sync when your branch is clean and fast-forward is safe |
| Risk | None | Can create an unwanted merge commit on dirty branches |

---

## Merge vs Rebase

| | `git merge` | `git rebase` |
|---|---|---|
| History | Preserves full branch history; adds merge commit | Linear — replays commits on top of target |
| When to use | Integrating feature into `main`; shared/public branches | Cleaning up a local feature branch before PR |
| **Golden rule** | Safe on public branches | **Never rebase shared/public branches** |
| Conflict point | Once, at merge commit | At each replayed commit |

```bash
git merge feature/login          # merge into current branch
git rebase main                  # replay current branch on top of main
git rebase -i HEAD~3             # interactive: squash/reorder last 3 commits
```

---

## Conflict Resolution — Steps

1. `git status` — identify conflicted files (`both modified`)
2. Open file — resolve between `<<<<<<< HEAD`, `=======`, `>>>>>>> branch`
3. `git add <file>` — mark resolved
4. `git commit` (merge) **or** `git rebase --continue` (rebase)
5. Abort at any point: `git merge --abort` / `git rebase --abort`

---

## reset vs revert

| Mode | Moves HEAD | Changes Index | Changes Working Tree | Use When |
|---|---|---|---|---|
| `git reset --soft SHA` | Yes | No | No | Re-commit differently; changes stay staged |
| `git reset --mixed SHA` | Yes | Yes (unstaged) | No | Undo commit, keep changes to edit |
| `git reset --hard SHA` | Yes | Yes | Yes | **Discard completely** — destructive |
| `git revert SHA` | New commit | Yes | Yes | **Undo a pushed commit safely** — history preserved |

> Rule: `reset` rewrites history (local only); `revert` appends an undo commit (safe for remotes).

---

## Handy Git Commands

```bash
# Stash
git stash                        # save WIP
git stash pop                    # restore latest stash
git stash list                   # see all stashes

# Cherry-pick
git cherry-pick <SHA>            # apply a single commit to current branch

# Squash (via interactive rebase)
git rebase -i HEAD~N             # mark N-1 commits as 'squash' or 's'

# Undo a pushed commit (safe)
git revert <SHA>                 # creates inverse commit
git push                         # push the revert

# Undo last local commit (keep changes)
git reset --soft HEAD~1

# Fix last commit message
git commit --amend -m "new msg"  # only if not yet pushed

# See what changed
git log --oneline --graph --all
git diff main...feature/x        # diff since branch point
```

---

## Branching Strategies

| Strategy | One-liner |
|---|---|
| **Git Flow** | Long-lived `develop` + `release` branches; rigid; suits versioned software with scheduled releases |
| **GitHub Flow** | `main` is always deployable; short-lived feature branches → PR → merge → deploy immediately |
| **Trunk-Based Development** | Everyone commits to `main` (or very short-lived branches); requires feature flags; enables true CI |

---

## CI/CD

| Term | Definition |
|---|---|
| **Continuous Integration (CI)** | Auto-build + test on every push; catches integration bugs early |
| **Continuous Delivery (CD)** | Every passing build is *releasable* to production; deployment is a manual trigger |
| **Continuous Deployment** | Every passing build is *automatically deployed* to production — no human gate |

### Typical Pipeline Stages
`Source → Build → Unit Test → Code Analysis → Integration Test → Artifact Publish → Deploy (staging) → Smoke Test → Deploy (prod)`

### Deployment Patterns

| Pattern | How it works | When to use |
|---|---|---|
| **Blue-Green** | Two identical envs; switch router from blue→green instantly; instant rollback | Zero-downtime releases; easy rollback needed |
| **Canary** | Route small % of traffic to new version; ramp up if healthy | Reduce blast radius; validate with real traffic gradually |
| **Rolling** | Replace instances one-by-one | Simple; no extra infra but rollback is slower |

---

## Quick-Recall Checklist

- [ ] `fetch` before rebase, `pull` for fast merges
- [ ] Never `rebase` a branch others have checked out
- [ ] Prefer `revert` over `reset --hard` on pushed commits
- [ ] Squash noise commits before merging PRs
- [ ] CI = build+test automatically; CD = releasable; Continuous Deployment = auto to prod
- [ ] Blue-green = instant cutover + rollback; canary = gradual traffic shift
- [ ] Git Flow for versioned releases; trunk-based for high-cadence teams
- [ ] `git log --oneline --graph --all` is your visual sanity check
