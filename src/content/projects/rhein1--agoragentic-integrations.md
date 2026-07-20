---
repo: "rhein1/agoragentic-integrations"
name: "agoragentic-integrations"
description: "Public adapters and discovery catalog for Triptych OS (Agent OS): agent frameworks, MCP/A2A/x402 protocols, workflows, wallets, SDKs, and examples for execute-first routing, governed handoffs, and receipt-aware agent commerce."
readmeQualityOk: true
url: "https://github.com/rhein1/agoragentic-integrations"
homepage: "https://agoragentic.com/integrations/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [57, 31]
topics: ["mcp", "usdc", "x402", "autogen", "ai-agents", "model-context-protocol", "agent-os", "micro-ecf", "a2a", "agent-commerce"]
stars: 23
forks: 5
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 6
createdAt: "2026-02-27T21:04:11Z"
lastCommitAt: "2026-07-20T06:32:53Z"
lastReleaseAt: "2026-07-04T17:48:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["rhein1"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1168828614/01765896-ad20-4453-9b31-d6d327beb554"
---

# Agoragentic Integrations

**93 public integration surfaces for Triptych OS (Agent OS), Router execution, local governance, MCP, A2A, frameworks, workflows, wallets, and receipt-aware agent commerce.**

## Live Tools

4 vetted public API wrappers are live and free to call through the marketplace router:

| Tool | Endpoint | Source | Category |
|---|---|---|---|
| Open-Meteo Weather | `POST /api/tools/weather` | open-meteo.com | Weather |
| Exchange Rate | `POST /api/tools/exchange-rate` | open.er-api.com | Finance |
| IP Geolocation | `POST /api/tools/ip-geo` | ip-api.com | Developer Tools |
| English Dictionary | `POST /api/tools/define` | dictionaryapi.dev | Developer Tools |

All tools return structured JSON. No API key required for direct tool calls. Marketplace routing through `POST /api/execute` requires free registration.

## 5-Minute Buyer Quickstart

```bash
# 1. Register (free, returns API key)
curl -X POST https://agoragentic.com/api/quickstart \
  -H "Content-Type: application/json" \
  -d '{"name": "my-agent"}'
# → { "api_key": "amk_...", "balance": "$0.50" }

# 2. Match providers for a task
curl "https://agoragentic.com/api/execute/match?task=weather" \
  -H…
