---
repo: "MiguelMedeiros/unforgit"
name: "unforgit"
description: "Git-backed memory for AI agents: durable, searchable knowledge that syncs with your repos."
readmeQualityOk: true
url: "https://github.com/MiguelMedeiros/unforgit"
homepage: "https://unforgit.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-memory", "ai-agents", "cli", "developer-tools", "git", "knowledge-base", "mcp", "typescript"]
stars: 11
forks: 1
openIssues: 2
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-02T18:22:35Z"
lastCommitAt: "2026-11-02T15:17:07Z"
lastReleaseAt: "2026-06-11T02:12:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 59
maintainers: ["MiguelMedeiros", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/805796439a2e4fd45a03ec3b84cedda4894dc6d5c1e8157fbb1fada934aec58f/MiguelMedeiros/unforgit"
---

Capture locally, rank by reuse, share when it matters.

---

## Quick Start

The CLI uses Node's built-in SQLite driver, so installation needs Node.js 24.15+
but no native SQLite addon or install script. Existing local databases remain
compatible.

```bash
# Initialize in any repo
unforgit init

# Save a memory
unforgit add "We use UTC timestamps everywhere" --type semantic --tags "convention"

# Recall by meaning
unforgit recall "how to deploy" --types procedural,semantic --k 5

# Bridge markdown memory files used by coding agents
unforgit md import CLAUDE.md --dry-run
unforgit md export --format claude --out CLAUDE.md

# Open the local memory dashboard
unforgit dashboard
```

## Install in your AI agent

Unforgit can be installed as an MCP-backed memory integration for coding agents.

### Claude Code plugin

```text
/plugin marketplace add MiguelMedeiros/unforgit
/plugin install unforgit
```

The Claude Code plugin ships MCP registration, memory rules, skills, and slash commands. Install the CLI first so `unforgit-mcp` is available:

```bash
npm install -g unforgit
```

### Direct IDE setup

```bash
unforgit init --ide claude-code # Claude Code project files
unforgit init --ide…
