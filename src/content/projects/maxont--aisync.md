---
repo: "MaxonT/aisync"
name: "aisync"
description: "aisync — advanced context management for all your AI coding tools: shared rules, a hash-chained journal, file claims and mid-session news for Claude Code, Codex and Cursor."
readmeQualityOk: true
url: "https://github.com/MaxonT/aisync"
homepage: "https://maxont.github.io/aisync/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-coordination", "agents", "agents-md", "ai-agents", "ai-coding", "ai-tools", "claude", "claude-code", "cli", "developer-tools"]
stars: 38
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-10-21T06:01:11Z"
lastCommitAt: "2026-11-12T05:40:17Z"
lastReleaseAt: "2026-11-12T05:43:38Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 42
maintainers: ["MaxonT", "cursoragent", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1427945033/65093308-b06e-4740-9360-344095bae5fe"
---

# aisync: Multi-Agent Context Management, Coordination & Observability

**One local hub for developers working with multiple AI coding agents: share the right context, coordinate concurrent work, and verify what happened.**

aisync is **agent-agnostic at its core**. It provides native hooks for Claude Code, Codex and Cursor, and exposes its hub to other agents through a CLI, MCP server, or shared instruction files. These three native integrations are **not** a limit on which agents can use aisync.

**English** · [中文](https://github.com/MaxonT/aisync/blob/HEAD/README.zh-CN.md) · [Website](https://maxont.github.io/aisync/) · [Demo status board](https://maxont.github.io/aisync/board/)

> [!NOTE]
> **Multiple coding agents should not have to work with isolated rules, conflicting file ownership, and disconnected histories.**
> aisync is a **local, verifiable hub** (`~/.ai-sync/`, a git repo) designed for multi-agent workflows:
>
> - **Context management:** share and 3-way-sync rules; load core context up front and inject relevant context on demand, including mid-session updates where hooks are available.
> - **Multi-agent coordination:** declare file claims, detect overlapping claims…
