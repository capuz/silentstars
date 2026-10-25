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
openIssues: 72
closedIssues: 221
watchers: 0
contributors: 91
recentReleases: 1
createdAt: "2026-04-01T12:18:01Z"
lastCommitAt: "2026-10-25T09:01:13Z"
lastReleaseAt: "2026-08-25T18:21:52Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 72
maintainers: ["Miracle656", "Nwapu-TrustJah", "sparkysolutions10-pixel"]
openGraphImageUrl: "https://opengraph.githubassets.com/096fd73a273ea16055da406b743f43e7be3ebb274e98acd8a35adaeda21b2220/Divinity-Labs/Lens"
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
