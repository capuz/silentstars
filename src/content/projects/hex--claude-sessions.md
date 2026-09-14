---
repo: "hex/claude-sessions"
name: "claude-sessions"
description: "Session manager for Claude Code with automatic documentation and artifact tracking"
readmeQualityOk: true
url: "https://github.com/hex/claude-sessions"
language: "Shell"
languages: ["Shell"]
languagePcts: [85]
topics: ["claude-code", "cli", "developer-tools", "documentation", "session-manager", "workflow", "anthropic", "anthropic-claude", "claude", "claude-ai"]
stars: 40
forks: 5
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2025-11-24T08:19:11Z"
lastCommitAt: "2026-09-14T09:12:15Z"
lastReleaseAt: "2026-02-07T07:48:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["hex"]
openGraphImageUrl: "https://opengraph.githubassets.com/b83a1a83ef6b45efdc1fec869a8f83505c10b6adb4141961debb45fd313444de/hex/claude-sessions"
---

# cs - Claude Code Session Manager

A session manager for [Claude Code](https://github.com/anthropics/claude-code) that creates isolated workspaces with automatic documentation.

## Why cs?

Claude Code doesn't require a project. You can spin up an instance to debug an API, troubleshoot home automation, research a hardware problem, or explore any idea that comes to mind.

But conversations get lost. You discover key insights, create useful scripts, figure out a tricky configuration - then the session ends and it's gone.

**cs gives every task a home:**

```bash
cs debug-api          # Investigate that flaky endpoint
cs homeassistant      # Fix your smart home setup
cs router-config      # Document your network settings
cs research-llms      # Explore a topic, keep your notes
```

Each session is a persistent workspace - documentation and secrets that survive across conversations.

No git repo required. No project structure needed. Just a name for what you're working on.

## Features

### Session workspaces

- **Isolated session workspaces** - Each session has its own directory with structured documentation
- **Documentation templates** - Pre-configured markdown files for the…
