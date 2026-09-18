---
repo: "rjwalters/loom"
name: "loom"
description: "Agent Orchestration"
readmeQualityOk: true
url: "https://github.com/rjwalters/loom"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [52, 43]
stars: 14
forks: 10
openIssues: 57
closedIssues: 3705
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-10-11T00:47:32Z"
lastCommitAt: "2026-09-18T14:03:17Z"
lastReleaseAt: "2026-04-21T10:40:29Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 74
maintainers: ["loom-fleet-dispatch[bot]", "turian", "rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/7eca9cb8547711745b1b6efc64a9347aefbaf5e91b84e6fdde108608c1eb9ad2/rjwalters/loom"
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
