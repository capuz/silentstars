---
repo: "blaksmatic/market-lens"
name: "market-lens"
description: "Trader operating system for US equities: scanners, benchmarking, daily advisory, paper trading, portfolio state, and dashboard publishing."
readmeQualityOk: true
url: "https://github.com/blaksmatic/market-lens"
homepage: "https://blaksmatic.com"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-09T09:07:52Z"
lastCommitAt: "2026-07-09T20:45:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["blaksmatic"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7167623a9c4cd58484975a9a01b70cefb9cc869bcb9a81a98f8194e3004b922/blaksmatic/market-lens"
discussionCount: 1
---

English | [Simplified Chinese](https://github.com/blaksmatic/market-lens/blob/HEAD/docs/README_CN.md)

# Market-Lens

Market-Lens is a trader operating system for US equities. It brings market
data, strategy scanners, benchmarking, portfolio simulation, daily advisory
workflows, paper-trading execution, and dashboard publishing into one
production-focused system for running a disciplined trading process.

The CLI remains the main interface today, but it is not the product boundary.
Market-Lens is being built toward a full daily operating layer for a trader:
research ideas, promote scanners, generate decisions, apply trades, track
portfolio state, and publish the record from one codebase.

Live dashboard: [blaksmatic.com](https://blaksmatic.com), updated after market
close.

Primary market: US equities. China A-shares are available only as a research
path (`--market china`) for scan and backtest workflows. See
[docs/markets/china.md](https://github.com/blaksmatic/market-lens/blob/HEAD/docs/markets/china.md) and
[docs/benchmarks/china_v1.md](https://github.com/blaksmatic/market-lens/blob/HEAD/docs/benchmarks/china_v1.md).

## Goal

Market-Lens answers the daily operating question…
