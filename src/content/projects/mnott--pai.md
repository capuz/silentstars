---
repo: "mnott/PAI"
name: "PAI"
description: "Personal AI Infrastructure"
readmeQualityOk: true
url: "https://github.com/mnott/PAI"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 50
forks: 7
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-26T10:18:16Z"
lastCommitAt: "2026-09-20T08:45:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 59
undervaluedScore: 29
maintainers: ["mnott"]
openGraphImageUrl: "https://opengraph.githubassets.com/8908724414d11a807f5c9be5411ba39669ee9b91267aa139e750dc7cd0e50864/mnott/PAI"
fundingLinks: ["GITHUB:https://github.com/mnott"]
---

# PAI Knowledge OS

Claude Code has a memory problem. Every new session starts cold — no idea what you built yesterday, what decisions you made, or where you left off. PAI fixes this.

Install PAI and Claude remembers. Ask it what you were working on. Ask it to find that conversation about the database schema. Ask it to pick up exactly where the last session ended. It knows.

## Quick Start

Tell Claude Code:

> Clone https://github.com/mnott/PAI and set it up for me

Or install with a single command:

```bash
npx @tekmidian/pai install
```

Or manually:

### 1. Install

```bash
git clone https://github.com/mnott/PAI
cd PAI
bun install
bun run build
```

### 2. Run the setup wizard

```bash
pai setup
```

The wizard walks you through: storage mode (SQLite or PostgreSQL), project directories, Obsidian vault path, MCP server registration, CLAUDE.md template, and daemon configuration. It's idempotent — safe to re-run anytime.

### 3. Start the daemon

```bash
pai daemon start
```

The daemon runs in the background via launchd, indexing your sessions and serving the MCP tools. It starts automatically on login.

### 4. Verify

```bash
pai daemon status    # should show "running"
pai…
