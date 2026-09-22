---
repo: "Shk0da/GoldenDragon"
name: "GoldenDragon"
description: "Trading Bot for Tinkoff Investing API"
originalDescription: "Trading Bot for Tinkoff Investing API"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Shk0da/GoldenDragon"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-02-10T17:02:59Z"
lastCommitAt: "2026-09-22T08:38:36Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 79
maintainers: ["Shk0da"]
openGraphImageUrl: "https://opengraph.githubassets.com/083aab3adbc017acbfd7f0ebb784c6db7c789591ce6575c6682efdc58a220c2d/Shk0da/GoldenDragon"
---

# GoldenDragon

Algorithmic trading system for **Tinkoff Investing** (MOEX). Implemented in Java 11 and uses gRPC API.

## Features

- Multi-threaded strategy engine with a pool per ticker
- Money management with adaptive sizing, risk manager, and kill switch
- Managed SL/TP algorithms (percentages, ATR, support/resistance levels)
- Cash parking: TMON@ (Tinkoff ETF)
- Historical data collection from Tinkoff
- Backtesting with realistic order execution simulation

## Strategies

| Strategy | Description |
|---|
| `UnifiedStrategy` | Main strategy with configurable mode-filter and managed SL/TP algorithms |

### Live-only strategies (not included in backtesting)

| Strategy | Description |
|---|---|
| `TradeCouncilStrategy` | AI strategy with LLM debates: 3 agents (Analyst, Trader, Risk Manager) discuss the trade, arbiter makes the final decision. Support/resistance levels based on significant price reversals (2+ touches). Works only in real-time, not tested through backtesting |

## Architecture

```
src/main/java/com/github/shk0da/goldendragon/
├── GoldenDragon.java          # entry point, strategy dispatcher
├── config/                   #…
```
