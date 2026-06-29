---
repo: "BlockRunAI/blockrun-mcp"
name: "blockrun-mcp"
description: "Live data for AI agents — search, research, markets, crypto, X/Twitter. Pay-per-call via x402 micropayments."
url: "https://github.com/BlockRunAI/blockrun-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai", "claude-code", "llm", "mcp", "mcp-server", "x402"]
stars: 467
forks: 51
openIssues: 6
closedIssues: 1
watchers: 27
contributors: 3
recentReleases: 9
createdAt: "2026-01-12T07:37:08Z"
lastCommitAt: "2026-06-29T07:22:42Z"
lastReleaseAt: "2026-06-29T07:23:07Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 74
undervaluedScore: 22
maintainers: ["VickyXAI", "KillerQueen-Z", "xianzuyang9-blip"]
openGraphImageUrl: "https://opengraph.githubassets.com/d69b1a67bbb1c23fab84dade33983dfd90ba9c1992e5c684129bf56df71b0917/BlockRunAI/blockrun-mcp"
---

# BlockRun MCP

**Real-time data for Claude — markets, research, X/Twitter, crypto. No API keys. Pay per call.**

```bash
claude mcp add blockrun -s user -- npx -y @blockrun/mcp@latest
```

Wallet auto-created. Fund with $5 USDC. Ask Claude anything.

---

## Documentation

Full docs: **https://blockrun.ai/docs**

- MCP tools & setup: https://blockrun.ai/docs/mcp/blockrun-mcp
- All BlockRun SDKs & APIs: https://blockrun.ai/docs

---

## What changes

Before BlockRun, Claude can't answer:

- *"What's the current Polymarket probability that Bitcoin hits $100k this year?"*
- *"Find me the top 5 papers on RAG published in the last 30 days"*
- *"What are people saying about @sama on X right now?"*
- *"What's the 24h volume on the PEPE/ETH pair on Uniswap?"*

After BlockRun, it can. Each query costs fractions of a cent, billed from a local USDC wallet. No subscriptions. No API dashboards. No key rotation.

---

## Demo

> **User:** What's Polymarket saying about the Fed rate decision next month?

> **Claude:** According to Polymarket, the market currently puts a **73% probability** on the Fed holding rates steady at the May meeting, with 24% on a 25bp cut and 3% on a hike. Volume over…
