---
repo: "Burakkylmz/llm-token-economics-lab"
name: "llm-token-economics-lab"
description: "An experiment-driven LLM engineering lab with 9 reproducible Python experiments exploring token economics, API costs, caching, context growth, latency, model routing, rate limits, concurrency, and batching using Groq."
readmeQualityOk: true
url: "https://github.com/Burakkylmz/llm-token-economics-lab"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["api-performance", "batch-processing", "concurrency", "context-window", "cost-optimization", "docker", "latency", "llm", "llm-engineering", "llm-inference"]
stars: 22
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-21T07:53:15Z"
lastCommitAt: "2026-11-17T14:36:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 42
maintainers: ["ipekgulsencelik"]
openGraphImageUrl: "https://opengraph.githubassets.com/4adc6a5f2d4ceb649a5fdbde09eaec8bc8a4cc5b3b043a22b712636783e5b716/Burakkylmz/llm-token-economics-lab"
---

# LLM Token Economics Lab

**A reproducible Python lab for understanding LLM token consumption, estimated API costs, and performance trade-offs.**

Explore 10 implemented experiments covering token accounting, context growth, caching, output control, model routing, streaming, rate limiting, concurrency, batching, and summarization. The repository includes a shared Python CLI, offline tests, GitHub Actions quality checks, and a **read-only Streamlit dashboard**.

**Live API provider:** Groq. **Lab07:** offline simulation with no provider requests.

> **Safe by default.** Running the dashboard, tests, or Lab07 does not send requests to Groq. Other labs require **both** `--live` on the CLI and `live_api_enabled = true` in a local config. Live calls can incur cost.

## Quick start — Docker (recommended)

Requirements: [Docker Desktop](https://www.docker.com/products/docker-desktop/) with Linux containers on Windows, or Docker Engine with the Compose plugin on Linux/macOS. **No local Python installation or API key is needed for this example.**

Open PowerShell or a terminal **in the repository root** (the folder containing `compose.yaml`).

```powershell
# Build both the existing CLI…
