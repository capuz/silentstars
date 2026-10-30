---
repo: "CandleViewer/CandleViewer"
name: "CandleViewer"
description: "A modern, high-performance, open-source TradingView alternative"
readmeQualityOk: true
url: "https://github.com/CandleViewer/CandleViewer"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["candlestick", "charting", "fintech", "technical-analysis", "trading", "tradingview", "typescript", "webgl"]
stars: 8
forks: 3
openIssues: 1381
closedIssues: 1307
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-13T14:12:58Z"
lastCommitAt: "2026-10-30T10:34:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["basiltt"]
openGraphImageUrl: "https://opengraph.githubassets.com/45721f479d68844fe4b965a3753745d6bbd2bc8373732442d7b7ef0bc175c8dc/CandleViewer/CandleViewer"
discussionCount: 0
---

# CandleViewer

CandleViewer is a private, self-hosted trading terminal for one owner and a few account managers,
trading **Bybit v5 USDT linear perpetuals only**. A fully custom WebGL2 chart engine draws the
order-flow views a discretionary trader reads (footprint, volume and delta profiles, CVD, a DOM
liquidity heatmap, big trades, Deep Stats). Behind it sits a complete execution loop (order ticket,
chart and DOM trading, brackets, emulated OCO, iceberg, TWAP and chase, multi-account trade-group
fan-out), a rule engine, paper trading on Bybit demo, recording and deterministic replay, a journal,
and RBAC-gated owner and admin screens inside the same web app. It is built to move real money, so
its safety properties are numbered invariants in [`CONSTITUTION.md`](https://github.com/CandleViewer/CandleViewer/blob/HEAD/CONSTITUTION.md), enforced in
code and checked in CI. The project is pre-release: no release train has been cut yet (see Status
and roadmap below).

_SCR-020 workspace hosting a SCR-030 chart with the SCR-041 symbol and interval switcher open — E12-D04, frame 2 of board 01 (a merged design board, not a screenshot)._

## What it is, and what it is not

**It is** a…
