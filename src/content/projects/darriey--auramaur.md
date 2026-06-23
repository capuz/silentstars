---
repo: "DarriEy/Auramaur"
name: "Auramaur"
description: "Autonomous prediction market trading bot — Polymarket & Kalshi"
url: "https://github.com/DarriEy/Auramaur"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 10
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-09T19:24:26Z"
lastCommitAt: "2026-06-23T23:28:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 68
maintainers: ["DarriEy"]
openGraphImageUrl: "https://opengraph.githubassets.com/932a6c44d4a51900eb9b91857c3872e602411178ae68862bc5467cd645683cc2/DarriEy/Auramaur"
---

# Auramaur

An autonomous trading bot for prediction markets (Polymarket and Kalshi),
built in six days by a hydrologist using Claude Code.

It makes (small) money.

## What it does

Connects to Polymarket and Kalshi. Scans markets, gathers news from RSS / web
search / Reddit / NewsAPI / FRED / Manifold / Metaculus, asks Claude to
estimate the probability of each outcome, compares against the market price,
and trades when there's edge after fees.

- **NLP analysis** with calibrated probability estimation (Platt scaling on
  resolution feedback) and adversarial second opinions
- **Risk management** with 15 independent checks per trade, geometric Kelly
  position sizing, drawdown limits, and category exposure caps
- **Multi-exchange** order routing with per-exchange fee adjustment
- **Position reconciliation** against on-chain CLOB trade history
- **Resolution tracking** that closes the loop into the calibration system

## Safety constraints (hard-coded)

1. Paper trading is the default. Live orders require **all three gates**:
   `AURAMAUR_LIVE=true`, `execution.live=true`, and per-order `dry_run=False`.
2. A `KILL_SWITCH` file in the working directory halts all trading.
3. Every…
