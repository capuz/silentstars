---
repo: "twaldin/trade-up-bot"
name: "trade-up-bot"
description: "Finds profitable trade-up contracts using real marketplace listings in CS2"
readmeQualityOk: true
url: "https://github.com/twaldin/trade-up-bot"
homepage: "https://tradeupbot.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["counter-strike", "cs2", "cs2-skins", "marketplace", "nextjs", "postgresql", "redis", "seo", "steam", "trade-up"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 56
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-16T17:10:50Z"
lastCommitAt: "2026-10-07T10:30:22Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 69
maintainers: ["twaldin", "cursoragent"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1183503381/665c6697-3af4-4493-8cc7-4df2e73f2cf7"
---

# CS2 Trade-Up Bot

Real-time CS2 trade-up contract analyzer. Continuously discovers profitable trade-ups across all 6 rarity tiers by combining live market data from CSFloat, DMarket, and Skinport with a time-bounded discovery engine that evaluates thousands of listing combinations per cycle.

**Live at [tradeupbot.app](https://tradeupbot.app)**

## How Trade-Up Contracts Work

CS2 trade-up contracts let you trade 10 skins of one rarity for 1 skin of the next rarity tier. The output float (condition value) is deterministic:

```
outputFloat = outputMin + avg(normalizedInputFloats) * (outputMax - outputMin)
```

The only randomness is *which* output skin you get, weighted by how many collections are represented in the inputs. This means profitability is calculable — if you know the input prices, output prices at the resulting float, and the probability distribution across possible outputs, you can compute exact expected value.

The bot automates this: it fetches real market listings, tests input combinations at specific float targets near condition boundaries (where price jumps are largest), and identifies trade-ups where EV exceeds cost.

## Features

**Discovery Engine** —…
