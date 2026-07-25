---
repo: "zrack/gex-terminal"
name: "gex-terminal"
description: "Open-source terminal UI for intraday gamma exposure, market-structure levels, and replayable options research."
readmeQualityOk: true
url: "https://github.com/zrack/gex-terminal"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["futures", "gamma-exposure", "gex", "market-data", "options", "python", "quant", "terminal-ui", "textual", "black-scholes"]
stars: 8
forks: 1
openIssues: 2
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-30T04:59:00Z"
lastCommitAt: "2026-07-25T06:01:25Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 79
undervaluedScore: 34
maintainers: ["szeitner", "zrack"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e801dd6675bdc8bbfd947148334cd1f2ef2585bac43de23cadfaf4ac8c79e08/zrack/gex-terminal"
discussionCount: 1
---

# gex-terminal

Intraday Gamma Exposure (GEX) imbalance tracking in a terminal UI.

An asynchronous, high-performance command-line dashboard for tracking real-time
dealer options hedging pressure in index futures such as **ES** and **NQ**. The
terminal uses cumulative intraday session volume as a proxy for changing open
interest, then translates live option-chain activity into strike-level gamma
exposure, imbalance, and structural market zones.

The goal is to isolate hidden institutional support, resistance, and volatility
acceleration boundaries at terminal speed, without the overhead of a browser UI.

Design target:

> This project is intended for market research and engineering experimentation.
> It is not financial advice.

## Why This Project Exists

`gex-terminal` is an open-source GEX research terminal for traders and developers
who want a local, explainable workflow instead of a closed market-structure
dashboard. The project is designed around:

- **Open-source model development**: contributors can inspect the assumptions,
  improve the math, and compare results against replayable sessions.
- **Local-first credential handling**: API keys and market-data credentials stay…
