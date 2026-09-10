---
repo: "rjwalters/loom"
name: "loom"
description: "Agent Orchestration"
readmeQualityOk: true
url: "https://github.com/rjwalters/loom"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [51, 43]
stars: 14
forks: 8
openIssues: 34
closedIssues: 3382
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-10-11T00:47:32Z"
lastCommitAt: "2026-09-10T08:19:35Z"
lastReleaseAt: "2026-04-21T10:40:29Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 71
maintainers: ["loom-fleet-dispatch[bot]", "rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/b102da63cbe1c124dfa03cfc4ebd3d2a3b63c383b3fd47b8e3dfd4f8d71c5c7b/rjwalters/loom"
discussionCount: 4
---

# Loom

**AI-powered development orchestration using your forge as the coordination layer.**

Loom spawns AI agents that claim issues, implement features, review PRs, and merge code -- all coordinated through labels. Your only job: write issues, review PRs, merge what you like.

**Supported Forges**: GitHub | Gitea — Loom auto-detects your forge from the git remote URL. A forge abstraction layer — `defaults/scripts/lib/forge-helpers.sh` for shell scripts, plus the Rust `loom-daemon/src/forge_*.rs` modules for the daemon — makes the workflow identical regardless of forge.

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

For continuous multi-account batches, run the `loom-daemon` (Tier 2) and enqueue with `mcp__loom__dispatch_sweep` — one detached,…
