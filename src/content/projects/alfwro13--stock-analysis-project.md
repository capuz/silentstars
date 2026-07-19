---
repo: "alfwro13/Stock_Analysis_Project"
name: "Stock_Analysis_Project"
description: "A self-hosted Quantamental Portfolio Dashboard that merges quantitative analysis, fundamental analysis, and machine learning into one portfolio and risk-management tool. Combines algorithmic momentum scoring, XGBoost/RandomForest predictions, tail-risk analytics, and optional Ghostfolio sync. Many more features."
readmeQualityOk: true
url: "https://github.com/alfwro13/Stock_Analysis_Project"
language: "Python"
languages: ["Python"]
languagePcts: [71]
topics: ["algorithmic-trading", "fastapi", "fundamental-analysis", "ghostfolio", "home-assistant", "plotly", "portfolio-tracker", "python3", "quantamental", "technical-analysis"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-10T04:31:41Z"
lastCommitAt: "2026-07-19T06:12:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["alfwro13", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a592133e6724e13dac57a9ff19df89ab8b6e9e91c5bd957ab78333ae264d7fe/alfwro13/Stock_Analysis_Project"
---

# **📈 Quantamental Portfolio Dashboard**

Self-hosted web application that merges **Quantitative Analysis** (algorithmic momentum, trend-following, candlestick patterns) with **Fundamental Analysis** (valuation, balance sheet health, and market sentiment), enhanced by **Machine Learning** and **Institutional Tail-Risk Management**.

Designed for Linux environments, this system manages your portfolio through its own Built-in Accounts (native transaction ledger, no external tracker required), with optional live-sync support for a [Ghostfolio](https://ghostfol.io/) instance if you already run one. It scrapes multi-dimensional market data via Yahoo Finance and generates an interactive dashboard using FastAPI and Plotly.

Please note that this is a hobby project not an investment platform.

## **✨ Core Features**

* **Ensemble Machine Learning Prediction Engine:** Utilizes a soft-voting classifier (XGBoost + Random Forest) trained on historical vectorized features to calculate the probability (0-100%) of an asset returning >3% over the next 10 trading days (entry at T+1 close, exit at T+10 close).
* **Entry & Exit Zone Analysis:** Three complementary methods computed during the daily…
