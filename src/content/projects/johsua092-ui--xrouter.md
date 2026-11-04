---
repo: "johsua092-ui/xrouter"
name: "xrouter"
description: "X Router - Ultra-Lightweight, High-Performance AI Routing Gateway in Go (~25MB RAM)"
readmeQualityOk: true
url: "https://github.com/johsua092-ui/xrouter"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-21T13:27:11Z"
lastCommitAt: "2026-11-04T02:58:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["johsua092-ui"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8fd210b7e0a597afd079e77188cf312c7abd23c763cd58f700af9ca8442729e/johsua092-ui/xrouter"
---

---

## ⚡ Overview

**X Router** is an ultra-lightweight, high-performance AI routing gateway running on **Node.js 26 (ESM)** with an embedded Next.js 14.2 dashboard, currently in transition toward a planned **Hybrid Go Core** architecture (see [Migration Plan](https://github.com/johsua092-ui/xrouter/blob/HEAD/docs/ROADMAP_GO_MIGRATION.md)).

It consolidates 40+ upstream AI providers (Claude, OpenAI, Antigravity, DeepSeek, River AI, OpenCode, Kilo, Grok, Gemini, and custom nodes) behind unified OpenAI and Anthropic-compatible wire surfaces with high-efficiency Node.js concurrency, zero-CGO SQLite WAL persistence, automated dead-account pruning, and integrated Telegram Bot Remote Control.

---

## 🏛️ Architecture

```text
 ┌────────────────────────────────────────────────────────────────────────┐
 │                           CLIENT INGRESS                               │
 │   OpenAI SDK / cURL                    Claude Code / Anthropic SDK     │
 │   POST /v1/chat/completions            POST /v1/messages               │
 └──────────────────┬─────────────────────────────────┬───────────────────┘
                    │                                 │
                    ▼…
