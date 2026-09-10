---
repo: "hypit-ai/hypitoken"
name: "hypitoken"
description: "Multi-tenant LLM API gateway for Claude and Codex — single Go binary, USD wallet, Alipay top-up, per-token caps, status-page health, fumadocs-style /docs."
readmeQualityOk: true
url: "https://github.com/hypit-ai/hypitoken"
homepage: "https://github.com/cashdiffusion/hypitoken"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [62, 33]
topics: ["alipay", "anthropic", "api-gateway", "claude", "codex", "go", "llm", "multi-tenant", "openai", "proxy"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-05-05T06:13:27Z"
lastCommitAt: "2026-09-10T08:21:39Z"
lastReleaseAt: "2026-05-06T07:31:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 51
maintainers: ["wjsoj"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2878ccc40ae4a670954aac53e14d1bf7a407a70e2a376d2ed13bcea5034b3bd/hypit-ai/hypitoken"
---

# HypiToken

> A multi-tenant LLM API gateway for **Claude** and **Codex** — one binary, real USD wallet, Alipay top-up, status-page health.

HypiToken is a self-hostable LLM gateway that fans out client requests across many upstream credentials (Anthropic OAuth + API keys, OpenAI / ChatGPT OAuth + API keys), bills users in real USD via an Alipay-funded wallet, and ships a complete operator console at the same URL — all in a single static Go binary.

It started life as a reverse proxy for personal credential pooling. The commercial SaaS layer adds per-user accounts, payments, pricing groups, and an operator panel — turning one binary into a self-serve API resale platform.

---

## Why

Anthropic and OpenAI subscription credentials are dramatically cheaper per token than pay-as-you-go API access — but a single account can't serve a team. HypiToken lets one operator pool credentials and resell access at a fair, transparent rate, with real-USD wallets billed against an RMB peg the operator controls.

```text
bill_usd = official_cost × (peg_rmb / live_cny) × group_multiplier
```

A `$0.10` Claude Sonnet call at the default tier (peg `¥2`, live rate `¥7.20`) bills **`$0.0278`** from…
