---
repo: "lobu-ai/lobu"
name: "lobu"
description: "Build AI teammates programmatically"
readmeQualityOk: true
url: "https://github.com/lobu-ai/lobu"
homepage: "https://lobu.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agent", "chatbot", "clawdbot", "openclaw", "personal-assistant"]
stars: 173
forks: 23
openIssues: 16
closedIssues: 184
watchers: 0
contributors: 39
recentReleases: 0
createdAt: "2025-07-27T03:49:12Z"
lastCommitAt: "2026-07-05T20:55:32Z"
lastReleaseAt: "2026-02-20T04:51:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 41
maintainers: ["buremba", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ff76b4a5f36853eb1633e3f4812faf44b72c081d987f854333bc387c4abcb32/lobu-ai/lobu"
discussionCount: 0
---

# Lobu — Open-source backend for AI teammates

**Lobu** is open-source infrastructure for autonomous agents that **watch**, **remember**, and **act** where your team already works. Connect company tools, build living memory, and let agents run on schedules, in Slack threads, or over MCP — with sandboxed execution per user or channel and credentials agents never see.

Under the hood, workers run an [OpenClaw](https://openclaw.ai/)-style agent loop (bash, files, MCP tools, skills) inside an isolated sandbox per conversation. One Node process serves many agents and channels; shared memory and connectors live in Postgres (pgvector). Embed agents in your product, or give your team their own without running a separate instance per person.

https://github.com/user-attachments/assets/d72a9286-0325-4b8b-afc0-c1efe9c96f4e

## Two ways in

### 1. Full agent — Slack, Telegram, watchers, connectors

Scaffold and run locally with the CLI. Lobu boots as a single Node process with zero-config embedded Postgres by default (or bring your own — pgvector required — via `DATABASE_URL`). `lobu run` opens the web UI on `:8787` and can wire Slack via the hosted bot or your own app.

```bash
npx…
