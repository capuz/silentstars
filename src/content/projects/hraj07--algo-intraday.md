---
repo: "HRaj07/algo-intraday"
name: "algo-intraday"
description: "Automated intraday paper trading bot running on GitHub Actions - NSE India (ORB + VWAP + EMA strategies)"
readmeQualityOk: true
url: "https://github.com/HRaj07/algo-intraday"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-08T00:04:17Z"
lastCommitAt: "2026-11-09T03:31:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["HRaj07"]
openGraphImageUrl: "https://opengraph.githubassets.com/76104e65022315e5e30b1e1dec3b74299fe34c4cb60c9590b0dfb199ebf7e3e2/HRaj07/algo-intraday"
discussionCount: 0
---

# AlgoTrade India — an intraday bot that measures itself honestly

**A free, serverless NSE intraday trading bot that runs entirely on GitHub
Actions — and publishes every trade, every rejected signal and every losing
experiment in the repo.** No server, no laptop, no broker. Paper money only.

Most trading-bot repos show you a backtest. This one shows you what happened
after: v1 lost ₹11,317 because its research charged ₹50 a trade and reality
charged ₹421; v2's whole premise turned out to be negative *before* costs; the
current 0.6% scalping setup is down ₹22,761 after 37 trades. Each result is
measured, written down, and turned into a test so it cannot quietly come back.

### What you get

- **Runs itself.** A scan every 15 minutes in NSE hours, a research job every
  Saturday, a walk-forward re-fit every Sunday — all on free GitHub Actions.
- **A real cost model.** Brokerage, STT, exchange and SEBI fees, stamp duty, GST
  and slippage are charged on every simulated fill, from one file shared by the backtest and the
  live engine, so the two cannot disagree again.
- **Self-tuning that cannot cheat.** The weekly walk-forward may only move the
  three entry thresholds inside…
