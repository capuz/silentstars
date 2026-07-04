---
repo: "YanCheng-go/my-focal-ai"
name: "my-focal-ai"
description: "Personal news intelligence — aggregate AI content from curated sources, score with LLM, serve your own dashboard"
readmeQualityOk: true
url: "https://github.com/YanCheng-go/my-focal-ai"
homepage: "https://myfocalai.vercel.app"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [55, 32]
topics: ["ai", "fastapi", "llm", "news-aggregator", "ollama", "python", "rss", "vercel"]
stars: 11
forks: 0
openIssues: 25
closedIssues: 68
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-07T00:25:28Z"
lastCommitAt: "2026-07-04T23:14:22Z"
lastReleaseAt: "2026-03-22T12:17:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["github-actions[bot]", "YanCheng-go"]
openGraphImageUrl: "https://opengraph.githubassets.com/7add6d77f39b1becd646dbde757dfd3e6f8a15ac0aeadd177f46d6946e80e08c/YanCheng-go/my-focal-ai"
---

# MyFocalAI

Personal news intelligence system that aggregates AI content from curated sources (RSS, YouTube, Twitter, arXiv, events, GitHub trending, AI tools trending, agent skills), scores relevance using LLM, and serves a web dashboard. Runs locally with Ollama (free) or deployed to Vercel with Claude API scoring.

| Feeds | Admin |
|-------|-------|
|  |  |

## Quick Start

```bash
git clone https://github.com/YanCheng-go/my-focal-ai.git
cd my-focal-ai
./start.sh              # installs deps, starts RSSHub + Ollama, launches dashboard
```

Open http://localhost:8000 — you're done.

```bash
./start.sh --no-score   # skip Ollama (just fetch + display)
./start.sh stop         # stop all services
```

**Prerequisites:** [uv](https://docs.astral.sh/uv/getting-started/installation/) and [Docker](https://docs.docker.com/get-docker/). Optionally [Ollama](https://ollama.ai) for LLM scoring.

## Deployment Modes

| Mode | Stack | Description |
|------|-------|-------------|
| **Local** | SQLite + Ollama + FastAPI | Full-featured, runs on your machine |
| **Online Public** | Vercel + GitHub Actions | Static read-only dashboard, no backend needed |
| **Online Login** | Supabase + Vercel…
