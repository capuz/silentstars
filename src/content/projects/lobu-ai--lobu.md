---
repo: "lobu-ai/lobu"
name: "lobu"
description: "Build AI teammates programmatically"
url: "https://github.com/lobu-ai/lobu"
homepage: "https://lobu.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agent", "chatbot", "clawdbot", "openclaw", "personal-assistant"]
stars: 171
forks: 23
openIssues: 14
closedIssues: 182
watchers: 0
contributors: 38
recentReleases: 0
createdAt: "2025-07-27T03:49:12Z"
lastCommitAt: "2026-06-28T03:11:18Z"
lastReleaseAt: "2026-02-20T04:51:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 41
maintainers: ["buremba"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecd0011888f906f69da0f81a6d7069696f921ef70eba8ebca9458426297ce478/lobu-ai/lobu"
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
