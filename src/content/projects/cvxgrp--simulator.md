---
repo: "cvxgrp/simulator"
name: "simulator"
description: "Tool to support backtests"
readmeQualityOk: true
url: "https://github.com/cvxgrp/simulator"
homepage: "http://www.cvxgrp.org/simulator"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [72, 27]
stars: 53
forks: 4
openIssues: 1
closedIssues: 187
watchers: 3
contributors: 16
recentReleases: 0
createdAt: "2023-04-21T02:49:13Z"
lastCommitAt: "2026-09-19T02:47:07Z"
lastReleaseAt: "2023-05-04T23:33:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["tschm", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/669569a8c11630dcabc80bcffa43b58d37df5cff2f5737950c9c14b3d5c329c6/cvxgrp/simulator"
---

# 🔄 [cvxsimulator](https://www.cvxgrp.org/simulator)

A simple yet powerful simulator for investment strategies and portfolio backtesting.

Given a universe of $m$ assets we are given prices for each of them at
time $t_1, t_2, \ldots t_n$, e.g. we operate using an $n \times m$ matrix where
each column corresponds to a particular asset.

In a backtest we iterate in time (e.g. row by row) through the matrix and
allocate positions to all or some of the assets. This tool helps to
simplify the accounting. It keeps track of the available cash,
the profits achieved, etc.

## 📥 Installation

Install cvxsimulator via pip:

```bash
pip install cvxsimulator
```

## 📊 Creating Portfolios

The simulator is completely agnostic to the trading policy/strategy.
Our approach follows a rather common pattern:

- [Create the builder object](#create-the-builder-object)
- [Loop through time](#loop-through-time)
- [Build the portfolio](#build-the-portfolio)

We demonstrate these steps with simple example policies.
They are never good strategies, but are always valid ones.

### Create the builder object

The user defines a builder object by loading prices
and initializing the amount of cash used in an…
