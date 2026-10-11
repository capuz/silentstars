---
repo: "Muvon/octofs"
name: "octofs"
description: "Rust MCP server giving AI agents filesystem superpowers: view, edit, batch-edit, shell and workdir tools with hash-verified line ids, gitignore-aware search, and transparent SSH/SFTP"
readmeQualityOk: true
url: "https://github.com/Muvon/octofs"
homepage: "https://octomind.run/product/octofs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ai", "ai-agents", "claude", "cli", "command-line-utilities", "cursor", "developer-tools", "filesystem", "llm", "mcp"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-15T16:37:28Z"
lastCommitAt: "2026-10-11T10:14:32Z"
lastReleaseAt: "2026-05-13T19:08:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["donk8r"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4921d3f9b3a352ce75ecaa8b7432d6ddc942ccfefec8f2fd99636f4aedccdad/Muvon/octofs"
---

# 🐙 Octofs

**Give your AI assistant filesystem superpowers**

*Standalone Rust binary that exposes filesystem tools over the Model Context Protocol. Built on `rmcp` 3.x, `tokio`, and `axum`.*

[Installation](#installation) · [Quick Start](#quick-start) · [Features](#features) · [Tools Reference](#mcp-tools-reference) · [Docs](https://github.com/Muvon/octofs/blob/HEAD/doc/tools.md) · [Architecture](#architecture) · [Changelog](https://github.com/Muvon/octofs/blob/HEAD/CHANGELOG.md)

MCP Registry: [`io.github.Muvon/octofs`](https://registry.modelcontextprotocol.io)

---

## Why Octofs?

Your AI coding assistant (Cursor, Claude, Windsurf, etc.) is smart — but it's **blind to your filesystem**. Octofs bridges that gap, giving your AI:

- **Eyes** — Read files, search content, explore directories
- **Hands** — Create, edit, batch-modify files atomically
- **Context** — Execute commands, manage working directories
- **Reach** — Transparent SSH/SFTP: every file tool accepts `ssh://` URLs

```
┌─────────────────────────────────────────────────────────────┐
│  You: "Refactor all error handling to use anyhow::Context" │
├─────────────────────────────────────────────────────────────┤
│  AI…
