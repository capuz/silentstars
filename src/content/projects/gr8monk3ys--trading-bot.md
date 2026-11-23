---
repo: "gr8monk3ys/trading-bot"
name: "trading-bot"
description: "Algorithmic trading research bot: backtests, strategy validation, and paper trading. No proven edge — not for real capital."
readmeQualityOk: true
url: "https://github.com/gr8monk3ys/trading-bot"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["algorithmic-trading", "automation", "finance", "python", "trading"]
stars: 8
forks: 1
openIssues: 5
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-17T07:30:36Z"
lastCommitAt: "2026-11-23T10:30:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 62
maintainers: ["gr8monk3ys", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a86c43eac60167b5a7fc16d2d674cfeb9cf167c58be831172ef0054d2ffdae6/gr8monk3ys/trading-bot"
---

# trading-bot

Over 2020–2024 the best validated strategy returned +17.6% (Sharpe 0.42) vs SPY +95.3% (0.75), both Sharpes at a 0% risk-free rate. It does not beat buy-and-hold.

An Alpaca paper-trading bot in async Python, built to answer one question: can a retail RSI/MACD/ADX momentum system be tuned to beat the market? The answer is no, and most of the engineering here went into making sure the answer was measured rather than assumed.

**Do not deploy real capital.** Paper only.

## The result

| 2020–2024, SPY/QQQ/IWM/EFA universe | Total return | Sharpe | Trades |
|---|---|---|---|
| Momentum strategy, gross-100 target | **+17.6%** | 0.42 (0.19 at rf=2%) | 26 (below the 50-trade significance bar) |
| SPY buy-and-hold | **+95.3%** | 0.75 | — |

Sharpe basis: the strategy's metrics subtract a 2% risk-free rate (`PerformanceMetrics(risk_free_rate=0.02)`); the SPY benchmark uses none. The artifacts report 0.19 vs 0.75, which mixes the two bases. On the same rf=0 basis it is 0.42 vs 0.75. Either way the strategy trails.
