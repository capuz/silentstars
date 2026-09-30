---
repo: "AlgoVaultLabs/crypto-quant-signal-mcp"
name: "crypto-quant-signal-mcp"
description: "AI trading brain for crypto perps — composite signals, funding rate arb scanning, and market regime detection via MCP"
readmeQualityOk: true
url: "https://github.com/AlgoVaultLabs/crypto-quant-signal-mcp"
homepage: "https://algovault.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [56]
topics: ["ai-agents", "base", "crypto", "defi", "funding-rate", "mcp", "model-context-protocol", "perpetual-futures", "trading", "trading-signals"]
stars: 10
forks: 5
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-04T16:28:44Z"
lastCommitAt: "2026-09-30T09:48:21Z"
lastReleaseAt: "2026-05-30T16:02:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_hub"]
healthScore: 98
undervaluedScore: 61
maintainers: ["AlgoVaultFi"]
openGraphImageUrl: "https://opengraph.githubassets.com/5402e06c0b6b02909519a7db0db241cf2d2793ef029b4d148771057925937972/AlgoVaultLabs/crypto-quant-signal-mcp"
discussionCount: 50
---

</a>
</p>

<h1 align="center">crypto-quant-signal-mcp</h1>

  <strong>AlgoVault is the brain layer for AI trading agents — one MCP call returns verdict, confidence, and regime across major crypto perpetual venues.</strong>
</p>

</p>

  <strong>200 free calls/month, 100/day. Start in 30 seconds.</strong>
</p>

</p>

</p>

---

## Quick start (30 seconds)

No code. No API key. No install. The server speaks Streamable HTTP at `https://api.algovault.com/mcp` — any [Model Context Protocol](https://github.com/modelcontextprotocol) client connects directly.

**1. Add the connector.** In Claude → Settings → Connectors → Add custom connector:

| Field | Value |
|---|---|
| Name | `Crypto Quant Signal` |
| URL | `https://api.algovault.com/mcp` |

**2. Ask for a call.** In plain language:

> "Get me a trade call for ETH on the 4h timeframe"

Your Claude now has a quant analyst built in. Prefer local? Run `npx -y crypto-quant-signal-mcp`.

> Running locally on npm 12+? npm v12 disables dependency install scripts by default. AlgoVault's optional local SQLite mode uses the native `better-sqlite3` module — if you install it into a project, run `npm approve-scripts` (or `npm install…
