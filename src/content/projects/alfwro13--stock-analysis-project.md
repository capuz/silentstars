---
repo: "alfwro13/Stock_Analysis_Project"
name: "Stock_Analysis_Project"
description: "A self-hosted Quantamental Portfolio Dashboard that uses your Ghostfolio instance as the master source for all ticker data. It automatically syncs your holdings and enriches them with deep algorithmic momentum, fundamental analysis, and XGBoost/RandomForest machine learning predictions. And many more other features."
url: "https://github.com/alfwro13/Stock_Analysis_Project"
language: "Python"
languages: ["Python"]
languagePcts: [69]
topics: ["algorithmic-trading", "fastapi", "fundamental-analysis", "ghostfolio", "ghostfolio-plugin", "home-assistant", "plotly", "portfolio-tracker", "python3", "quantamental"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-10T04:31:41Z"
lastCommitAt: "2026-07-03T12:38:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["alfwro13"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfc105c2e73a5304500d63181bc194b882c13cd5d223e7406fc7001d17bddf78/alfwro13/Stock_Analysis_Project"
---

# **📈 Quantamental Portfolio Dashboard**

Self-hosted web application that merges **Quantitative Analysis** (algorithmic momentum, trend-following, candlestick patterns) with **Fundamental Analysis** (valuation, balance sheet health, and market sentiment), enhanced by **Machine Learning** and **Institutional Tail-Risk Management**.

Designed for Linux environments, this system pulls live holdings from your [Ghostfolio](https://ghostfol.io/) instance, scrapes multi-dimensional market data via Yahoo Finance, and generates an interactive dashboard using FastAPI and Plotly.

Please note that this is a hobby project not an investment platform.

## **✨ Core Features**

* **Ensemble Machine Learning Prediction Engine:** Utilizes a soft-voting classifier (XGBoost + Random Forest) trained on historical vectorized features to calculate the probability (0-100%) of an asset returning >3% over the next 10 trading days (entry at T+1 close, exit at T+10 close).
* **Entry & Exit Zone Analysis:** Three complementary methods computed during the daily quant scan and displayed on the stock detail page and portfolio/watchlist tables: (1) **Volume Profile** — a 180-day volume-at-price histogram…
