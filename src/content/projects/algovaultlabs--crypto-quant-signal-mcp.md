---
repo: "AlgoVaultLabs/crypto-quant-signal-mcp"
name: "crypto-quant-signal-mcp"
description: "AI trading brain for crypto perps — composite signals, funding rate arb scanning, and market regime detection via MCP"
readmeQualityOk: true
url: "https://github.com/AlgoVaultLabs/crypto-quant-signal-mcp"
homepage: "https://algovault.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [53]
topics: ["ai-agents", "base", "crypto", "defi", "funding-rate", "mcp", "model-context-protocol", "perpetual-futures", "trading", "trading-signals"]
stars: 5
forks: 4
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 4
createdAt: "2026-04-04T16:28:44Z"
lastCommitAt: "2026-08-21T04:04:55Z"
lastReleaseAt: "2026-05-30T16:02:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_hub"]
healthScore: 87
undervaluedScore: 70
maintainers: ["AlgoVaultFi"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd33f02ec75c114445446a4d4b450a9cfbfbab064e8a31ae3cdd08a361e2733e/AlgoVaultLabs/crypto-quant-signal-mcp"
discussionCount: 31
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
