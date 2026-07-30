---
repo: "KakkoiDev/tmux-worktree"
name: "tmux-worktree"
description: " Native tmux for parallel workflows. AI agents, code reviews, tests. Each task gets its own worktree and session."
readmeQualityOk: true
url: "https://github.com/KakkoiDev/tmux-worktree"
language: "Shell"
languages: ["Shell"]
languagePcts: [94]
stars: 24
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-08T00:10:37Z"
lastCommitAt: "2026-07-30T06:04:21Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 31
maintainers: ["KakkoiDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a193e8402c0250dc96e39e8c3ec99eb82291571769e84d478577658109d9b43/KakkoiDev/tmux-worktree"
discussionCount: 0
---

# tmux-worktree

> `lib/` is vendored from [tmux-toolkit](https://github.com/KakkoiDev/tmux-toolkit)
> via `git subtree`; do not edit it in place, CI fails on drift. If you are an agent
> picking up in-flight work on this plugin, start at
> [tmux-toolkit `docs/RESUME.md`](https://github.com/KakkoiDev/tmux-toolkit/blob/main/docs/RESUME.md).

> **Beta:** This plugin is under active development. Configuration options and behavior may change.

Native tmux for parallel workflows. AI agents, code reviews, tests. Each task gets its own worktree and session.

</a><br>

## Quick Start

**Install with [TPM](https://github.com/tmux-plugins/tpm):**

```bash
# Add to ~/.tmux.conf
set -g @plugin 'KakkoiDev/tmux-worktree'
```

Press `prefix + I` to install, then `prefix + W` to open the menu.

## Workflows

### Start working on a feature

```
prefix + W  →  Add  →  select "feature/login"
```

Creates a worktree at `~/.tmux-worktree/myproject/feature/login` and opens a new tmux session.

### Review a colleague's PR

```
prefix + W  →  Add  →  Fetch remote  →  select "[remote] origin/fix-bug-123"
```

Fetches latest branches, creates a local tracking branch with its own worktree.

### Switch…
