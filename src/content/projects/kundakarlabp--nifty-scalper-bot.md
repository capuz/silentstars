---
repo: "kundakarlabp/nifty_scalper_bot"
name: "nifty_scalper_bot"
description: "Algo trading bot"
readmeQualityOk: true
url: "https://github.com/kundakarlabp/nifty_scalper_bot"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 6
forks: 6
openIssues: 34
closedIssues: 36
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-14T13:38:47Z"
lastCommitAt: "2026-10-31T09:54:01Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 90
undervaluedScore: 82
maintainers: ["kundakarlabp"]
openGraphImageUrl: "https://opengraph.githubassets.com/24a36d5626a9257df46f3e79e34bbb51bb2047729b26822d7cb2743234c8ff0a/kundakarlabp/nifty_scalper_bot"
---

# NIFTY Scalper Bot

Python-based intraday **NIFTY CE/PE option buying** system using Zerodha Kite market data and execution. NIFTY spot/futures provide market context, **not tradable instruments**.

> **Repository is the code/configuration source of truth.** AWS Lightsail runs a validated GitHub revision; host-local secrets and broker/account state are never committed. A merged commit is **not** proof of production activation—verify the deployed SHA and health separately.

## Trading lifecycle at a glance

```mermaid
flowchart TD
    A[Start / broker session] --> B[InstrumentManager: NIFTY option basket]
    B --> C[WebSocket FULL quotes / MarketDataManager]
    C --> D[CandleEngine + DataHub: valid, fresh context]
    D --> E{Readiness and underlying direction}
    E -->|not ready| F[No entry; reason-coded diagnostics]
    E -->|ready| G[StrategyManager + StrategyRunner]
    G --> H{Risk / margin / quote / execution checks}
    H -->|reject| F
    H -->|accept| I[RuntimeOrderManager: broker order]
    I --> J[Reconcile actual fills and exposure]
    J --> K[BoundBracketManager: protective SL/TP/trailing]
    K --> L[Exit, broker-flat proof, ledger and notification]
    L --> E…
