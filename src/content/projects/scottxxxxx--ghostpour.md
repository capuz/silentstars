---
repo: "scottxxxxx/ghostpour"
name: "ghostpour"
description: "GhostPour — Open-source LLM API gateway with auth, multi-provider routing, and subscription-based access control. The invisible hand for your iOS app."
readmeQualityOk: true
url: "https://github.com/scottxxxxx/ghostpour"
homepage: "https://ghostpour.com"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["anthropic", "api-gateway", "fastapi", "llm", "llm-proxy", "openai", "python", "rate-limiting", "sign-in-with-apple", "ios"]
stars: 5
forks: 0
openIssues: 7
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-19T03:39:36Z"
lastCommitAt: "2026-11-01T10:44:41Z"
lastReleaseAt: "2026-03-21T18:37:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 50
maintainers: ["scottxxxxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/97b22f5df6043793faf5bb69911e23c3895806a2936af2e8bdac1d3202d53089/scottxxxxx/ghostpour"
---

# GhostPour

> *Formerly CloudZap. The pour you never see.*

Open-source LLM API gateway with authentication, multi-provider routing, subscription-based access control, and usage tracking.

GhostPour sits between your mobile/web app and LLM providers (OpenAI, Anthropic, Google Gemini, xAI, DeepSeek, Kimi, Qwen). It keeps API keys server-side, authenticates users via Sign in with Apple, enforces tier-based rate limits and token quotas, and logs all usage.

> **Note:** Environment variables still use the `CZ_` prefix and some internal identifiers retain the "cloudzap" name for backwards compatibility with deployed clients.

## Features

- **Multi-provider routing** — 8 LLM providers (OpenAI, Anthropic, Google Gemini, xAI, DeepSeek, Kimi, Qwen, OpenRouter) through a single `/v1/chat` endpoint with auto model selection
- **Sign in with Apple** — Verify Apple identity tokens, issue JWT access/refresh tokens
- **Subscription tiers** — 3 tiers (free / plus / pro) with monthly cost cap, per-tier default model, summary mode, and image limits
- **Real-time subscription state** — Apple Server Notifications V2 webhook + StoreKit 2 receipt verification
- **SSE streaming** for `/v1/chat` with…
