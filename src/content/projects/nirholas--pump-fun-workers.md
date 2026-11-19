---
repo: "nirholas/pump-fun-workers"
name: "pump-fun-workers"
description: "Cloudflare Worker serving read-only pump.fun token tools to AI agents over MCP Streamable HTTP."
readmeQualityOk: true
url: "https://github.com/nirholas/pump-fun-workers"
homepage: "https://github.com/nirholas/pump-fun-workers"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["model-context-protocol", "pumpfun", "solana", "typescript", "bonding-curve", "claude-code-plugin", "cloudflare-workers", "mcp-server"]
stars: 20
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-03-09T18:07:34Z"
lastCommitAt: "2026-11-19T04:58:13Z"
lastReleaseAt: "2026-11-10T22:32:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 82
undervaluedScore: 31
maintainers: ["nirholas"]
openGraphImageUrl: "https://opengraph.githubassets.com/f385f4313d577aedecc645b824ba42c7cab11f39eb1162ec66edaadd537d0641/nirholas/pump-fun-workers"
fundingLinks: ["CUSTOM:https://three.ws"]
discussionCount: 0
---

# Pump.fun MCP Server 

A Cloudflare Worker that implements the [MCP Streamable HTTP](https://modelcontextprotocol.io/specification/2025-06-18/basic/transports#streamable-http) transport for AI agents to read pump.fun data on Solana. It is stateless: every request is answered on its own, with no sessions.

## Tools (10 read-only tools)

| Tool | Description | Source |
|------|-------------|--------|
| `searchTokens` | Search tokens by name, symbol, or mint address | pump.fun API |
| `getTokenDetails` | Full details for a specific token | pump.fun API |
| `getBondingCurve` | Bonding curve read on-chain: reserves, spot price, market cap in SOL, exact graduation progress; for graduated coins, their PumpSwap pool | Solana RPC |
| `getTokenTrades` | Recent trade history (buys and sells), with `offset` pagination | pump.fun API |
| `getTrendingTokens` | Top tokens by market cap | pump.fun API |
| `getNewTokens` | Most recently launched tokens | pump.fun API |
| `getGraduatedTokens` | Graduated tokens among the 50 largest by market cap | pump.fun API |
| `getKingOfTheHill` | Highest market cap token still on its bonding curve | pump.fun API |
