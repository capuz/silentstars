---
repo: "pablospe/worktrunk-sync"
name: "worktrunk-sync"
description: "wt sync — rebase stacked worktree branches in dependency order"
readmeQualityOk: true
url: "https://github.com/pablospe/worktrunk-sync"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 21
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-04-10T22:20:25Z"
lastCommitAt: "2026-11-15T11:23:14Z"
lastReleaseAt: "2026-10-23T20:02:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 37
maintainers: ["pablospe", "zachbornheimer"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe4843ed246b9cd9bdcb7a93584ee34991f1d77d675174edb6b59ab8c551096e/pablospe/worktrunk-sync"
---

# wt-sync

Rebase stacked worktree branches in dependency order.

Works with any git worktrees — no special setup required. Can also be used as an external subcommand for [worktrunk](https://github.com/max-sixty/worktrunk) via `wt sync`.

## How it works

`wt sync` detects the branch dependency tree from git's commit graph by merge-base analysis (one `git rev-list` dump of the worktree tips, cut off at their common ancestor), then rebases each branch onto its parent in topological order.

All rebases use `--onto` with a stored fork-point, so parent branches that have been rewritten (rebased, amended, or force-pushed) are handled correctly — no duplicate commits or spurious conflicts.

### Persisted state

Two files are stored in `.git/wt/` (shared across all worktrees):

- **`stack`** — the dependency tree in [git-machete](https://github.com/VirtusLab/git-machete) compatible format, used for parent tracking and integration detection.
- **`stack-forkpoints`** — each branch's parent SHA at last sync, used as the `--onto` base for the next rebase.

Both files are auto-created and updated on every sync.

## Install

```bash
cargo install worktrunk-sync
```

The binary is named…
