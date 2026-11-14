---
repo: "nicksenap/grove"
name: "grove"
description: "Git worktree workspace orchestrator. One command creates a workspace folder with worktrees from multiple repos on the same branch."
readmeQualityOk: true
url: "https://github.com/nicksenap/grove"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cli", "developer-tools", "git", "git-worktree", "monorepo", "multi-repo", "productivity", "workspace", "golang", "polyrepos"]
stars: 99
forks: 13
openIssues: 5
closedIssues: 21
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2026-02-24T09:44:08Z"
lastCommitAt: "2026-11-14T22:03:00Z"
lastReleaseAt: "2026-02-24T18:32:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 37
maintainers: ["nicksong-z", "nicksenap", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1165557248/2afdb88e-1b9c-44cd-ac72-28d8390ae1da"
---

## Why?

Monorepos solve cross-project work, but not everyone has one. You've got separate repos, separate CI, separate deploys — and that's fine until you need to work across them.

One feature across three services means `git worktree add` three times, tracking three branches, jumping between three directories, cleaning up three worktrees when you're done. It's annoying.

Grove gives you the multi-repo worktree workflow that monorepos get for free. One command creates a workspace with every repo on the same branch, and `gw status` shows all of them in one table.

## Getting Started

Grove is a single static binary with no dependencies. It requires `git` on `PATH`.

### 1. Install Grove

Pick **any one** of the following methods:

**Homebrew** (macOS / Linux)

```bash
brew install nicksenap/grove/grove
```

**Install script** (macOS / Linux, no Homebrew needed)

```bash
curl -fsSL https://raw.githubusercontent.com/nicksenap/grove/master/scripts/install.sh | sh
```

Verifies the release checksum and installs to `/usr/local/bin` (or `~/.local/bin` if that is not writable). Override with `GW_INSTALL_DIR` and `GW_VERSION`.

**Go install** (if you already have a Go toolchain)

```bash…
