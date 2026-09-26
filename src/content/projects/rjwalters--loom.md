---
repo: "rjwalters/loom"
name: "loom"
description: "Agent Orchestration"
readmeQualityOk: true
url: "https://github.com/rjwalters/loom"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [61, 34]
stars: 14
forks: 9
openIssues: 163
closedIssues: 4043
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-10-11T00:47:32Z"
lastCommitAt: "2026-09-26T08:47:29Z"
lastReleaseAt: "2026-04-21T10:40:29Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 73
maintainers: ["loom-fleet-dispatch[bot]", "turian", "rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a3472d25927978a6e4dd974f37c7c1afeca5b2c8b36fdeafd9e372cca81d800/rjwalters/loom"
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
