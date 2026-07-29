---
repo: "rjwalters/loom"
name: "loom"
description: "Agent Orchestration"
readmeQualityOk: true
url: "https://github.com/rjwalters/loom"
language: "Rust"
languages: ["Rust", "Shell", "Python"]
languagePcts: [41, 33, 22]
stars: 12
forks: 10
openIssues: 43
closedIssues: 2079
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-10-11T00:47:32Z"
lastCommitAt: "2026-07-29T06:14:58Z"
lastReleaseAt: "2026-04-21T10:40:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 72
maintainers: ["rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6d72c00544115ebc204257bcb95e1f43f92629e5a58c0530c22a0b78c060a9c/rjwalters/loom"
discussionCount: 3
---

# Loom

**AI-powered development orchestration using your forge as the coordination layer.**

Loom spawns AI agents that claim issues, implement features, review PRs, and merge code -- all coordinated through labels. Your only job: write issues, review PRs, merge what you like.

**Supported Forges**: GitHub | Gitea — Loom auto-detects your forge from the git remote URL. A ForgeClient abstraction layer makes the workflow identical regardless of forge.

## Quick Start

```bash
# Clone and install to your repository
git clone https://github.com/rjwalters/loom
cd loom
./install.sh /path/to/your/repo

# Start autonomous development on a single issue from Claude Code
cd /path/to/your/repo
# In Claude Code:
/loom:sweep 42
```

For multiple issues in one session, pass them all to sweep:

```bash
# In Claude Code:
/loom:sweep 42 43 44          # waves of parallel builders
/loom:sweep all               # the whole open backlog
```

For continuous multi-account batches, run the `loom-daemon` (Tier 2) and enqueue with `mcp__loom__dispatch_sweep` — one detached, token-rotated sweep per issue.

## How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│…
