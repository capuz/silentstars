---
repo: "rjwalters/loom"
name: "loom"
description: "Agent Orchestration"
readmeQualityOk: true
url: "https://github.com/rjwalters/loom"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [55, 35]
stars: 12
forks: 9
openIssues: 41
closedIssues: 2360
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-10-11T00:47:32Z"
lastCommitAt: "2026-08-01T06:16:13Z"
lastReleaseAt: "2026-04-21T10:40:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 71
maintainers: ["rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa44f1295d955d8c049d7030e8aa546e7ba08a23da92d37c13244e106807978e/rjwalters/loom"
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
