---
repo: "elitekaycy/qkt"
name: "qkt"
description: "Event-driven trading engine in Kotlin — write strategies in a SQL-like DSL, backtest deterministically, then run the same code live (MT5)."
readmeQualityOk: true
url: "https://github.com/elitekaycy/qkt"
homepage: "https://docs.tryqkt.com"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [88]
topics: ["algorithmic-trading", "backtesting", "bybit", "crypto-trading", "dsl", "event-driven", "forex", "kotlin", "mt5", "quant"]
stars: 8
forks: 0
openIssues: 2
closedIssues: 716
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-05-07T00:12:43Z"
lastCommitAt: "2026-11-22T11:32:34Z"
lastReleaseAt: "2026-05-07T12:48:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 57
maintainers: ["elitekaycy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1231417540/38f14267-dc01-4bfb-b14d-682f83127020"
fundingLinks: ["GITHUB:https://github.com/elitekaycy"]
---

## What it is

qkt is an event-driven trading engine in Kotlin. A strategy is a single `.qkt` file of symbols, indicators and
`WHEN ... THEN ...` rules. The same file, through the same pipeline, runs in backtest, on a paper broker and
live. Time, ids and randomness are injected, so identical inputs give identical trades.

```text
.qkt file ──▶ qkt ──▶ mt5-gateway ──────▶ MT5 brokers
                 ├──▶ qkt-venue-gateway ─▶ futures, options
                 ├──▶ qkt-guardrails      (risk halts)
                 └──▶ qkt-insights        (dashboard)
```

It trades CFDs, futures, perpetuals and options. Backtest and live differences are listed, not hidden, in the
[parity register](https://github.com/elitekaycy/qkt/blob/HEAD/docs/parity/backtest-vs-live.md).

## Quick start

Ten minutes from download to your first report, with no account. qkt fetches a month of real Bitcoin prices to
practise on.

**1. Install**

Download the Linux build from the [latest release](https://github.com/elitekaycy/qkt/releases/latest). It bundles
Java, so you need nothing else. Windows, Docker and source are in the [install guide](https://github.com/elitekaycy/qkt/blob/HEAD/docs/get-started/install.md).
