---
repo: "Jebel-Quant/basanos"
name: "basanos"
description: "Implementing a first hurdle for expected returns"
readmeQualityOk: true
url: "https://github.com/Jebel-Quant/basanos"
homepage: "https://jebel-quant.github.io/basanos/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["feature-analysis", "portfolio-optimization", "quantitative-finance", "signals"]
stars: 18
forks: 2
openIssues: 3
closedIssues: 249
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-02T03:21:23Z"
lastCommitAt: "2026-08-19T04:08:48Z"
lastReleaseAt: "2026-03-21T08:19:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 50
maintainers: ["tschm", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/68095a94ab097d36e05064692a9c9fe2dacb2869bfdc80d217c5d182981583d1/Jebel-Quant/basanos"
---

# Basanos

**Correlation-aware portfolio optimization and analytics for Python.**

</div>

---

Basanos computes **correlation-adjusted risk positions** from price data and expected-return signals. It estimates time-varying EWMA correlations, applies shrinkage towards the identity matrix, and solves a normalized linear system per timestamp to produce stable, scale-invariant positions — implementing a first hurdle for expected returns.

## Table of Contents

- [Idea](#idea)
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Notebooks](#notebooks)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## Idea

Most systematic strategies produce a raw signal vector μ — one number per asset indicating how bullish or bearish the model is. Sizing each position in direct proportion to its signal ignores the fact that correlated assets will receive large, overlapping bets in the same direction, concentrating risk rather than diversifying it.

Basanos treats position sizing as a **linear system**:

```text
C · x = μ
```

where C is the (shrunk, time-varying) correlation matrix and μ is the signal. Solving for x inverts…
