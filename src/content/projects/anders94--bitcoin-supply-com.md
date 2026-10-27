---
repo: "anders94/bitcoin-supply.com"
name: "bitcoin-supply.com"
description: "We're tracking provably lost bitcoin at https://bitcoin-supply.com"
readmeQualityOk: true
url: "https://github.com/anders94/bitcoin-supply.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["bitcoin"]
stars: 16
forks: 4
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-11-09T21:53:09Z"
lastCommitAt: "2026-10-27T12:40:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 54
maintainers: ["anders94", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/37a6038ff560bf5e9bac6eba900f0cea9cf462e56814eff293373ec7a4623581/anders94/bitcoin-supply.com"
---

# bitcoin supply explorer v2

A Bitcoin supply explorer that answers: *"If you believe coins are lost after X years of dormancy, how much bitcoin is actually circulating?"*

The interface presents a spectrum from **everything out of circulation** (absurdly inclusive — every UTXO) to **nothing out of circulation** (trustfully inclusive — even provably unspendable coins might somehow be claimed). A separate quantum slider shows how much BTC a rational attacker could capture by targeting the largest exposed-pubkey outputs first.

---

## Architecture

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js 22+ / TypeScript |
| Bitcoin data | Bitcoin Core JSON-RPC verbosity=3 + ZMQ |
| Database | PostgreSQL 16+ (partitioned UTXO table) |
| Cache | Redis 7+ |
| Web framework | Express + Pug (SSR) |
| Frontend | Vanilla TypeScript via esbuild |
| Sliders | noUiSlider |
| Charts | Chart.js v4 |

### Why verbosity=3 directly

`getblock(hash, 3)` returns a single JSON response with full decoded inputs (including `prevout.value` and `prevout.scriptPubKey` for every input) and outputs. This eliminates the need for a separate UTXO lookup during ingestion — Bitcoin Core handles it.…
