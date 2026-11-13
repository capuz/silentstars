---
repo: "flisk-sh/flisk"
name: "flisk"
description: "The local runtime your AI coding agent can start, check and fix. One command runs your multi-service app from a Compose file or plain commands, and an MCP server gives Claude Code, Cursor and Codex its health, logs and controls. MIT, no account."
readmeQualityOk: true
url: "https://github.com/flisk-sh/flisk"
homepage: "https://flisk.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [55]
topics: ["tilt", "developer-experience", "developer-tools", "local-development", "docker-compose", "ai-agents", "mcp", "flisk", "claude-code", "mcp-server"]
stars: 45
forks: 87
openIssues: 707
closedIssues: 1132
watchers: 4
contributors: 85
recentReleases: 10
createdAt: "2026-09-19T11:44:49Z"
lastCommitAt: "2026-11-13T18:36:15Z"
lastReleaseAt: "2026-10-09T16:46:46Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine", "community_hub", "fork_magnet"]
healthScore: 92
undervaluedScore: 52
maintainers: ["odykyi", "kburym", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1377087398/9f214ea3-9ddf-474e-8e26-52c9cd6c7cd6"
fundingLinks: ["GITHUB:https://github.com/flisk-sh"]
discussionCount: 88
---

# Flisk: local development for multi-service apps, started with one command

**[What is Flisk?](#what-is-flisk) · [Key features](#key-features) · [Quick start](#quick-start) · [Commands](#commands) · [Configuration](#configuration) · [With your AI agent](#use-flisk-with-your-ai-agent) · [FAQ](#faq) · [Docs](#docs)**

## What is Flisk?

Flisk is a command-line tool for local development. It runs every part of your app (API, website, workers, AI agents, database) on your computer with one command. Docker is optional: a small app runs as plain local processes, and a bigger one gets containers, one address in front of every part and live reload on Docker and Tilt. Have a `docker-compose.yml`? `flisk import` reads it. Otherwise describe each part in a small `service.json`; for the Docker path Flisk writes the Dockerfiles, the Compose file and the Tiltfile from it, and keeps them in sync. An MCP server lets your AI agent run it too. It does not deploy: production stays with your own tools.

Try it first. One command, nothing to install except Node.js 22.12+, and no Docker needed:

```bash
npx @flisk-sh/flisk@latest demo
```

With Docker running and Tilt installed, that starts the full…
