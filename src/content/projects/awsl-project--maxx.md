---
repo: "awsl-project/maxx"
name: "maxx"
description: "A proxy server for ai tools"
readmeQualityOk: true
url: "https://github.com/awsl-project/maxx"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [66, 32]
stars: 61
forks: 24
openIssues: 1
closedIssues: 90
watchers: 1
contributors: 23
recentReleases: 0
createdAt: "2026-01-11T03:49:24Z"
lastCommitAt: "2026-10-21T08:48:44Z"
lastReleaseAt: "2026-01-12T13:33:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 47
maintainers: ["awsldev", "Bowl42"]
openGraphImageUrl: "https://opengraph.githubassets.com/f506d00fb2ead855239ab030b8b2ea25c97fb9ed3c230804dcb09892f5954b3f/awsl-project/maxx"
---

English | <a href="README_CN.md">简体中文</a>

  Multi-provider AI proxy with a built-in admin UI, routing, and usage tracking.

## Features

- **Protocol Compatibility**: Claude, OpenAI, Gemini, and Codex API formats
- **AI Tool Friendly**: Works with Claude Code, Codex CLI, and other coding agents
- **Provider Types**: Custom relay, Antigravity (Google), Kiro (AWS)
- **Routing**: Priority-based and weighted-random routing strategies
- **Databases**: SQLite (default), MySQL, PostgreSQL
- **Usage & Billing**: Request logs + nano-dollar pricing with multipliers
- **Pricing Catalog**: Versioned, tiered, and cache pricing support
- **Admin UI**: Multi-language Web UI with real-time WebSocket updates
- **Profiling**: Built-in pprof support
- **Backup**: Import/export configuration

## Quick Start

Maxx supports three deployment methods:

| Method | Description | Best For |
|--------|-------------|----------|
| **Docker** | Containerized deployment | Server/production |
| **Desktop App** | Native application with GUI | Personal use |
| **Local Build** | Build from source | Development |

### Docker (Recommended for Server)

```bash
docker compose up -d
```

The service will run at…
