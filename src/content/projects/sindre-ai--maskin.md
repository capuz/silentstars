---
repo: "sindre-ai/maskin"
name: "maskin"
description: "AI run the shop. Humans set direction, agents execute."
readmeQualityOk: true
url: "https://github.com/sindre-ai/maskin"
homepage: "https://sindre.ai"
language: "TypeScript"
languages: ["TypeScript", "Swift"]
languagePcts: [63, 29]
topics: ["ai", "ai-agent", "ai-agents", "growth", "marketing", "product", "sales"]
stars: 7
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-25T09:17:43Z"
lastCommitAt: "2026-10-25T09:01:48Z"
lastReleaseAt: "2026-06-22T12:21:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 47
maintainers: ["sindre-maskin[bot]", "magnusnoeddegaard", "mrkrumhausen"]
openGraphImageUrl: "https://opengraph.githubassets.com/b00e8a8f92f9494b16c04a97b50e5196d44be07db85bd3c6135525c39f090509/sindre-ai/maskin"
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
