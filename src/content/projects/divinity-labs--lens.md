---
repo: "Divinity-Labs/Lens"
name: "Lens"
description: "Unified Stellar price API — aggregates real-time SDEX trade prices and AMM pool spot prices into VWAP, OHLCV, and   best-route data. REST + GraphQL. Powered by TimescaleDB."
readmeQualityOk: true
url: "https://github.com/Divinity-Labs/Lens"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 6
forks: 126
openIssues: 108
closedIssues: 183
watchers: 0
contributors: 79
recentReleases: 1
createdAt: "2026-04-01T12:18:01Z"
lastCommitAt: "2026-10-23T08:47:29Z"
lastReleaseAt: "2026-08-25T18:21:52Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 70
maintainers: ["Miracle656", "sparkysolutions10-pixel", "AGWAM001"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ccdf7cd6bb20623d4070c67156597185b7e9cfca3c24b0b6edd82c8ca8e1e45/Divinity-Labs/Lens"
---

# Lens — Unified Stellar Price API

## Quickstart

### REST

```bash
curl http://localhost:3002/status
# {
#   "ok": true,
#   "network": "testnet",
#   "watchedPairs": ["XLM:native/USDC:GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN"],
#   "lastIndexedLedger": 53842917,  // illustrative — actual value depends on when /status is queried
#   "lastProcessedAt": "2026-05-07T18:45:11.220Z",  // illustrative — actual value depends on when /status is queried
#   "ingestLagSeconds": 4  // illustrative — actual value depends on when /status is queried
# }
#
# /status answers for one network — pass ?network=mainnet (or the
# x-network header) to check the mainnet indexer instead. ingestLagSeconds is
# null until that network has ingested, and lastIndexedLedger is null until
# its SDEX ingester has recorded a trade.
```

### GraphQL

```bash
curl -X POST http://localhost:3002/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ getPrice(assetA:\"XLM\", assetB:\"USDC\") { price assetA assetB pairKey bestRoute lastUpdated } }"}'
# {
#   "data": {
#     "getPrice": {
#       "price": 0.1245,
#       "assetA": "XLM",
#       "assetB": "USDC",
#       "pairKey":…
