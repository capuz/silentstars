---
repo: "DaanZunnenberg/Aletheia"
name: "Aletheia"
description: "A Deribit options trading framework that finds mispriced crypto options by comparing market-implied probabilities against historical statistical forecasts. Automatically flags overvalued tail risk and skew to structure delta-neutral option spreads."
readmeQualityOk: true
url: "https://github.com/DaanZunnenberg/Aletheia"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["breeden-litzenberger", "deribit-api", "option-trading", "quantitative-finance", "statistical-aribtrage", "volatility-arbitrage"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-07T11:15:21Z"
lastCommitAt: "2026-08-31T09:58:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 36
maintainers: ["DaanZunnenberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7f8fbefdabfa5beb0653b1faaa59d723d54dc5068e9c24d45473e0d872f20db/DaanZunnenberg/Aletheia"
---

# Aletheia

A market-making framework for Deribit perpetuals.

The core idea: quote both sides continuously, capture the spread, and manage
the resulting inventory risk with an Avellaneda--Stoikov quoting model,
skewing the reservation price against inventory and widening the spread when
either volatility or adverse selection risk rises.

## Architecture

```
deribit/          — async WebSocket + REST connectors (native aiohttp)
data/             — market state normalisation (Deribit → internal types)
config/           — settings and secrets (dry_run, testnet, API keys)
utils/            — dependency-free helpers (logger)
core/             — private submodule: the model itself
main.py           — test entry point
```

`core/` is a private git submodule ([aletheia-core](https://github.com/DaanZunnenberg/aletheia-core))
and is not included in this public repository. It contains:

- `core/market_state.py` — `MarketState` domain model (top-of-book, mark/index price, funding)
- `core/models/quoting.py` — Avellaneda-Stoikov reservation price, optimal spread, fill-intensity calibration
- `core/models/volatility.py` — realised volatility estimator (EWMA of squared log returns)
-…
