---
repo: "zachisit/july-backtester"
name: "july-backtester"
description: "Python backtesting engine for US equity strategies. Monte Carlo stress testing, Walk-Forward Analysis, intraday support, regime heatmaps, PDF tearsheets, and ML-ready trade feature export. Five data providers — free with Yahoo Finance, no API key required."
url: "https://github.com/zachisit/july-backtester"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["algorithmic-trading", "backtesting", "equity", "machine-learning", "monte-carlo", "open-source", "python", "quantitative-finance", "strategies", "trading"]
stars: 8
forks: 2
openIssues: 48
closedIssues: 47
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-03-01T16:17:31Z"
lastCommitAt: "2026-06-24T00:20:57Z"
lastReleaseAt: "2026-05-23T03:11:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 56
maintainers: ["zachisit", "shardul0701"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fc47493f3327fd5a7e0318c1a6dd56e563d7b9319cbb047e88ffa0ce8a335a3/zachisit/july-backtester"
---

# July Backtester

> A professional-grade Python engine for stress-testing US equity strategies with Monte Carlo simulation and Walk-Forward Analysis.

![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-blue?logo=python&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

---

Tests trading strategies against full historical US equity data, runs 1,000-path Monte Carlo simulation and Walk-Forward Analysis to separate genuine edges from curve-fitting, and produces a summary table with Sharpe, Calmar, Win Rate, MC Score, WFA Verdict, and SPY/QQQ outperformance. Detailed PDF tearsheets include equity curves, drawdown plots, R-Multiple histograms, and VIX regime heatmaps.

**Intraday support**: Backtest on hourly (1H, 4H), 5-minute, 15-minute, or 30-minute bars with automatic metrics annualization (Sharpe, Sortino, HTB fees).

Supports Polygon, Norgate, Yahoo Finance, local CSV, and local Parquet. Free to run against Yahoo Finance with no API key.

Full reference: [docs/README_full.md](docs/README_full.md)

---

## Installation

```bash
git clone https://github.com/zachisit/july-backtester.git
cd july-backtester
python -m venv venv
source…
