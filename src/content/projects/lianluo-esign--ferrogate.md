---
repo: "lianluo-esign/ferrogate"
name: "ferrogate"
description: "Open-source Rust/Pingora AI gateway and reverse proxy for self-hosted LLM traffic control: OpenAI-compatible Chat/Responses, provider routing/fallback, virtual API keys, policy and budgets, exact-match cache, MCP/tool execution, observability, Admin APIs/dashboard, cluster ops, and automatic HTTPS."
readmeQualityOk: true
url: "https://github.com/lianluo-esign/ferrogate"
homepage: "https://token4ai.cloud"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["ai", "aigateway", "reverse-proxy", "ai-gateway", "infrastructure", "ai-agent", "ai-tools", "api-gateway", "mcp-gateway", "rust"]
stars: 19
forks: 2
openIssues: 9
closedIssues: 211
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-05-01T13:17:28Z"
lastCommitAt: "2026-07-18T05:45:31Z"
lastReleaseAt: "2026-07-09T06:00:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["lianluo-esign"]
openGraphImageUrl: "https://opengraph.githubassets.com/81df4d019d29f93c6fe5c1a1e6a481c77928821dccc49dbfbf143a6caff85477/lianluo-esign/ferrogate"
---

# FerroGate

**Language:** English | [简体中文](https://github.com/lianluo-esign/ferrogate/blob/HEAD/README.zh-CN.md)

FerroGate is an open-source Rust API gateway and AI gateway built on
Cloudflare Pingora. It gives teams a self-hostable control point for AI traffic:
OpenAI-compatible APIs, multi-vendor provider routing, virtual API keys, policy
checks, token accounting settled against a standalone billing service,
MCP/tool execution, opt-in agent runs, isolated `agent-worker` execution,
observability, Admin APIs, cluster operations, and automatic HTTPS.

The project is developed as the open-source gateway foundation behind
[Token4AI Cloud](https://token4ai.cloud).

For the longer capability inventory and current implementation status, read the
[Product Overview](https://github.com/lianluo-esign/ferrogate/blob/HEAD/docs/product-overview.md).

## Highlights

- **OpenAI-compatible gateway:** `GET /v1/models`,
  `POST /v1/chat/completions`, and `POST /v1/responses`, including streaming
  SSE forwarding.
- **Provider orchestration:** OpenAI-compatible APIs, OpenAI, Azure OpenAI,
  OpenRouter, Anthropic, Gemini, and Grok/xAI with logical models and fallback
  routing. Ships a ready-to-run…
