---
repo: "tonywxx/adaq"
name: "adaq"
description: "AdaQ (Ada Quant) is an AI-powered quantitative trading platform for equities and digital crypto assets."
readmeQualityOk: true
url: "https://github.com/tonywxx/adaq"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [76, 23]
topics: ["cryptotrade", "factor-analysis", "inverstment-market-platform", "quantitative-trading-tool", "stockmarket", "quant-trading-system", "qunatitative-finance", "quantitative-analysis", "quantitative-research"]
stars: 6
forks: 3
openIssues: 11
closedIssues: 178
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-08T02:23:46Z"
lastCommitAt: "2026-08-31T09:57:32Z"
lastReleaseAt: "2026-08-08T23:18:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 99
undervaluedScore: 70
maintainers: ["tonywxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf4dd3cf9486708c0a623530148aa5316bad7202f83f0bbffffb64af4399861d/tonywxx/adaq"
discussionCount: 1
---

# AdaQ

[English](https://github.com/tonywxx/adaq/blob/HEAD/README.md) | [简体中文](https://github.com/tonywxx/adaq/blob/HEAD/README.zh-CN.md)

> **AdaQ** (Ada Quant) is an AI-powered quantitative trading platform for equities and digital crypto assets.

AdaQ V1 is a local-first research, backtesting, and simulation desktop app. It does not execute real account orders; live trading is a separate future supervised, host-controlled milestone.

## Features

- **Local-first research, backtesting & simulation** — Reproducible local market-data research and backtesting. AdaQ V1 runs deterministic Spot simulation and never places real orders; live trading is a separate future milestone.
- **Immutable, auditable runs** — Every Backtest Run immutably binds a Market Data Snapshot, Component Lock, parameters, Indicator Plan, Execution Profile, engine version, and seed. Results persist locally with Target Decisions, simulated orders, fills, equity, fees, metrics, history, and charts, plus replay-grade provenance.
- **Sandboxed WebAssembly components** — Deterministic WASM Factor and Strategy Components under versioned Component ABIs (`adaq:factor@2.0.0`, `adaq:strategy@1.0.0`). Factor Components…
