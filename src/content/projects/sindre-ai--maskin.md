---
repo: "sindre-ai/maskin"
name: "maskin"
description: "AI run the shop. Humans set direction, agents execute."
url: "https://github.com/sindre-ai/maskin"
homepage: "https://sindre.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai", "ai-agent", "ai-agents", "growth", "marketing", "product", "sales"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 1
createdAt: "2026-03-25T09:17:43Z"
lastCommitAt: "2026-06-23T06:42:21Z"
lastReleaseAt: "2026-06-22T12:21:46Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 57
maintainers: ["magnusnoeddegaard", "sindre-maskin[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad3b8931ab24b1563aba2769241f33c8826bae822f45e16e6c43409f47a6ae6c/sindre-ai/maskin"
discussionCount: 0
---

# Maskin

An open-source workspace where AI agents run product development autonomously. Humans set direction, agents execute.

## What is this?

- **Open-source workspace** where AI agents run product development end-to-end
- **Core pipeline:** Insights (signals from users, data, market) -> Bets (hypotheses to validate) -> Tasks (concrete work items) -> Feedback Loop
- **Agents are first-class citizens** -- they create insights, propose bets, break down tasks, and execute. Humans course-correct
- **Everything is an API** -- UI and agents use the same endpoints. No special agent interface, no separate human interface
- **Unified object model** -- insights, bets, and tasks are all "objects" with the same schema, connected by relationships

## Prerequisites

- **Node.js ≥ 20**
- **pnpm 9.15.0** (`npm install -g pnpm@9.15.0`)
- **Docker + Docker Compose** — must be installed and running. `pnpm dev` / `pnpm dev:win` boot PostgreSQL + SeaweedFS via `docker-compose`, so the app cannot start without Docker. Docker Desktop (macOS/Windows) bundles Compose; on Linux install `docker-compose-plugin`.

## Quick Start

### 🚀 Zero-click setup (from Claude Code)

Paste this single prompt into…
