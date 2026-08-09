---
repo: "lianluo-esign/ferrogate"
name: "ferrogate"
description: "Open-source AI gateway on Cloudflare Workers, in TypeScript: OpenAI/Anthropic-compatible chat with SSE streaming, Files + Batch APIs, provider routing with circuit breaking and failover, virtual API keys, per-tenant Durable Object storage, quotas/wallets/budgets, guardrails, response cache, MCP server, durable metering, contract-driven Admin API."
readmeQualityOk: true
url: "https://github.com/lianluo-esign/ferrogate"
homepage: "https://token4ai.cloud"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai", "aigateway", "reverse-proxy", "ai-gateway", "infrastructure", "ai-agent", "ai-tools", "api-gateway", "mcp-gateway", "agentic-gateway"]
stars: 21
forks: 3
openIssues: 3
closedIssues: 124
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-05-01T13:17:28Z"
lastCommitAt: "2026-08-09T04:47:31Z"
lastReleaseAt: "2026-08-07T07:17:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 55
maintainers: ["lianluo-esign"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe7f2b1c336a0df5a8eeb1a97bf6c86f7e94bff0d2c0d0f639458e5fdb905976/lianluo-esign/ferrogate"
discussionCount: 0
---

</p>

# FerroGate

**Language:** English | [简体中文](https://github.com/lianluo-esign/ferrogate/blob/HEAD/README.zh-CN.md)

FerroGate is an open-source AI gateway that runs entirely on Cloudflare
Workers. It is a control point for AI traffic: OpenAI-compatible and
Anthropic-native inference APIs, an OpenAI-compatible Files + Batch surface,
multi-vendor provider routing with canary and shadow rollouts, virtual API keys
with scopes and **per-tenant Durable Object isolation** (one SQLite-backed object
per tenant, addressed at runtime with no per-tenant deploy), policy and guardrail
screening, rate limits, quotas and prepaid wallets, durable token metering and
billing, an asset closed loop, an MCP server, agent runs, and a ~240-operation
admin API.

It is written in TypeScript end to end and deploys as a fleet of Workers backed
by D1, R2, KV, Durable Objects, Queues and Analytics Engine.

The project is developed as the open-source gateway foundation behind
[Token4AI Cloud](https://token4ai.cloud).

## Architecture at a glance

Six deployables live under `apps/`. Five are Workers; the sixth is a CLI binary.

| Deployable | Worker name | What it is |
|---|---|---|
| `apps/gateway` |…
