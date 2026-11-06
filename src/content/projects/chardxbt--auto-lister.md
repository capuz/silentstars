---
repo: "ChardXBT/auto-lister"
name: "auto-lister"
description: "Multi-account CS2 inventory manager that automates listings, pricing, sales tracking, and profit reporting."
readmeQualityOk: true
url: "https://github.com/ChardXBT/auto-lister"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-22T17:43:10Z"
lastCommitAt: "2026-11-06T13:19:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 52
maintainers: ["github-actions[bot]", "ChardXBT"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b565d9709abce9e21b5178c20f9fbfab91e0fed3401c1b6ebbcd7fac0f904f3/ChardXBT/auto-lister"
---

See https://github.com/ChardXBT/CS2-Marketplace-Trading-System for README.

Multi-account feature-gating, state ownership, validation, and failure semantics are documented in [PORTFOLIO_OPERATIONS.md](https://github.com/ChardXBT/auto-lister/blob/HEAD/PORTFOLIO_OPERATIONS.md). Missing/blank `AUTO_LISTER_ACCOUNTS` remains Main-only.

Operator guides (git-crypt encrypted): `DEV_LOG.md` (runbook), `TRADE_REVERSALS.md` (automatic reversal detection and recovery), `AUCTION_FALLBACK.md` (moving idle buy-now listings to auction).

Config Example:
        {
            "name": "",
            "asset_id": "",
            "reserve_price": ,
            "description": "",
            "cost": ,
            "marketplace": "",
            "decrease": 0,
            "lowest_sell": null
        }
