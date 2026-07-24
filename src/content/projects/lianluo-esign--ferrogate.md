---
repo: "lianluo-esign/ferrogate"
name: "ferrogate"
description: "Open-source Rust/Pingora AI gateway and reverse proxy for self-hosted LLM traffic control: OpenAI-compatible Chat/Responses, provider routing/fallback, virtual API keys, policy and budgets, exact-match cache, MCP/tool execution, observability, Admin APIs/dashboard, cluster ops, and automatic HTTPS."
readmeQualityOk: true
url: "https://github.com/lianluo-esign/ferrogate"
homepage: "https://token4ai.cloud"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
topics: ["ai", "aigateway", "reverse-proxy", "ai-gateway", "infrastructure", "ai-agent", "ai-tools", "api-gateway", "mcp-gateway", "rust"]
stars: 20
forks: 3
openIssues: 83
closedIssues: 349
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-05-01T13:17:28Z"
lastCommitAt: "2026-07-24T06:11:22Z"
lastReleaseAt: "2026-07-19T04:46:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 54
maintainers: ["lianluo-esign"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1ff44c253dafef3daaf93d2b506cef63cb50330607ec167ac2f657560b70b22/lianluo-esign/ferrogate"
---

# FerroGate

**Language:** English | [简体中文](https://github.com/lianluo-esign/ferrogate/blob/HEAD/README.zh-CN.md)

FerroGate is an open-source Rust API gateway and AI gateway built on
Cloudflare Pingora. It gives teams a self-hostable control point for AI traffic:
OpenAI-compatible and Anthropic-native APIs, multi-vendor provider routing,
virtual API keys, policy checks, token accounting settled against a standalone
billing service, MCP/tool execution, opt-in agent runs and schedules, isolated
`agent-worker` execution (managed or self-hosted over verified mTLS), a hosted
asset closed loop for agent-consumable artifacts and static sites,
observability, Admin APIs, cluster operations, and automatic HTTPS.

The project is developed as the open-source gateway foundation behind
[Token4AI Cloud](https://token4ai.cloud).

For the longer capability inventory and current implementation status, read the
[Product Overview](https://github.com/lianluo-esign/ferrogate/blob/HEAD/docs/product-overview.md).

## Highlights

- **Multi-protocol inference gateway:** `GET /v1/models`,
  `POST /v1/chat/completions`, `POST /v1/responses`, Anthropic-native
  `POST /v1/messages`, `POST /v1/embeddings`, and…
