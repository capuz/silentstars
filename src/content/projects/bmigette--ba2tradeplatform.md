---
repo: "bmigette/BA2TradePlatform"
name: "BA2TradePlatform"
description: "BA2 Automated Trade platform: Automatic trading based on diverses strategies (mostly TradingAgents project for now), allowing customizable set of rules to enter / exit markets."
readmeQualityOk: true
url: "https://github.com/bmigette/BA2TradePlatform"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["ai", "trading", "trading-strategies"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-09-15T16:06:17Z"
lastCommitAt: "2026-09-18T14:02:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 63
maintainers: ["bmigette"]
openGraphImageUrl: "https://opengraph.githubassets.com/29308f8964a0ea81a225ec1421ac2ad0379fde0d7736e74209ffa0554846a83a/bmigette/BA2TradePlatform"
---

# BA2 Trade Platform

A self-contained Python monorepo for algorithmic trading, shipping **two platforms** over three shared installable packages (`ba2_common` / `ba2_providers` / `ba2_experts`):

- **ba2-trade** (repo root) — the live trader: NiceGUI web app running the expert fleet against a real/paper broker (Alpaca, TastyTrade, IBKR), with ruleset-driven trade actions (equity **and** options), risk management, order execution and performance analytics.
- **ba2-test** (`testplatform/`, aka **BA2ML**) — the backtest & ML platform: FastAPI + React app for dataset building, genetic-algorithm strategy optimization, deep-learning forecasting (12 PyTorch architectures) and point-in-time screening.

Both apps run the *same* expert/provider code, which is what makes a backtest predictive of live behaviour.

## � Screenshots

### Dashboard Overview

*Main dashboard showing account summary and position overview*

### AI Analysis Details

*Multi-agent AI analysis with detailed recommendations and technical indicators*

### Trade Recommendations

*AI-generated trading recommendations with confidence levels and action items*

### Recommendation History

*Historical view of all generated…
