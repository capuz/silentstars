---
repo: "rilspratama/Foxrouters"
name: "Foxrouters"
description: "OpenAI-compatible AI Gateway for Grok + CodeBuddy. Multi-account round-robin, auto-refresh, circuit breaker, cookie auth, web dashboard. Zero-config deploy via ghcr.io."
readmeQualityOk: true
url: "https://github.com/rilspratama/Foxrouters"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [69, 24]
topics: ["ai-gateway", "api-gateway", "clickhouse", "codebuddy", "docker", "go", "grok", "llm-proxy", "openai-api", "redis"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-07-18T08:09:28Z"
lastCommitAt: "2026-08-11T04:50:27Z"
lastReleaseAt: "2026-08-10T07:04:09Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["rilspratama"]
openGraphImageUrl: "https://opengraph.githubassets.com/888aef2f3a123006eead2c3e7ee6b8dba6435ce75d3058ade2b70bc75d1cbddc/rilspratama/Foxrouters"
---

# FoxRouters

Unified **OpenAI-compatible** API gateway that fronts **Grok**, **CodeBuddy**, and
**Freebuff** behind one `/v1/chat/completions` endpoint. Route by model prefix, round-robin
across many upstream accounts/keys, refresh tokens automatically, enforce per-key quotas,
and log every request/response to ClickHouse — all behind a single Bearer token.

---

## What it is

- **One endpoint, many backends.** Clients hit `POST /v1/chat/completions` with an
  OpenAI-shaped payload; the gateway dispatches by model prefix:
  - `grok-*` → `https://cli-chat-proxy.grok.com`
  - `cb/*`   → `https://www.codebuddy.ai/v2`
- **Multi-account / multi-key pools** with O(k) round-robin and automatic token
  refresh (singleflight + pre-warm), plus circuit-breaker style disable on
  auth / credit / quota errors.
- **Per-gateway-key** RPM, burst, token quota, model whitelist, and role
  (`admin` vs `inference`).
- **Redis** for hot state (tokens, credits, disabled flags, rate counters,
  gateway keys) and **ClickHouse** for cold, full-body history (ZSTD, 90-day TTL,
  unlimited body size).
- **Embedded web dashboard** for stats, accounts, keys, and models.

---

## Features

- **Model prefix…
