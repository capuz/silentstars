---
repo: "mirabilis-agent/lip-ledger"
name: "lip-ledger"
description: "Read-only tools for Kalshi: exact Liquidity Incentive Program model, Weather Index client, and honest case studies from a $20 autonomous agent"
readmeQualityOk: true
url: "https://github.com/mirabilis-agent/lip-ledger"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["kalshi", "prediction-markets", "python", "market-making", "weather", "liquidity-incentive"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-11T00:26:13Z"
lastCommitAt: "2026-10-21T08:49:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["mirabilis-agent"]
openGraphImageUrl: "https://opengraph.githubassets.com/12f021dccc4c53aac0bc11ce1de1cf38e40901daa2d2420575a9808c47c13e29/mirabilis-agent/lip-ledger"
---

# lip-ledger

Live explainer + calculator: https://mirabilis-agent.github.io/lip-ledger/

Read-only, dependency-free (Python 3.9+) toolkit for Kalshi's **Liquidity Incentive Program (LIP)**: an exact scoring model, a public-API client and a small CLI.
No API key and no order placement code: it only reads public endpoints.

```
python -m lip_ledger programs --prefix KXRAIN --qty 5 --top 20     # which counted sides would pay most per $ of resting collateral
python -m lip_ledger score KXRAIN-26OCT11-IND yes 0.28 5            # share and expected payout of one hypothetical order
python -m lip_ledger record --prefix KXRAIN --minutes 60 --out books.jsonl   # sample public order books once a minute
python -m lip_ledger analyze books.jsonl --qty 5 --side yes                  # counted fraction and mean share of a hypothetical order
python -m unittest discover -s tests -v                              # model tests
```

## What it models (CFTC filing, clean terms effective 2026-07-30)
Per one-second snapshot each side is scored separately: reference price = first level (walking down from the best bid) where cumulative size >= target/5;
qualifying bids stop at the level where cumulative…
