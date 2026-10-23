---
repo: "94fsckbzfd-ux/quant-etf-strategy"
name: "quant-etf-strategy"
description: "V8.7 Cross-Asset ETF Momentum Rotation Strategy - Automated Signal Generation System"
originalDescription: "V8.7 跨资产ETF动量轮动策略 - 自动化信号生成系统"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/94fsckbzfd-ux/quant-etf-strategy"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 11
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-11T04:58:14Z"
lastCommitAt: "2026-10-23T12:05:10Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 78
undervaluedScore: 39
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/532e80a1ec9263bd17571ead334a583af33bf82b6f13f436eb5188e294d69faf/94fsckbzfd-ux/quant-etf-strategy"
---

# 📈 V8.8 Cross-Asset ETF Momentum Rotation Strategy

> Rotates once every 18 days. Executed manually, no broker API required.

## System Overview

This system rotates across 10 global risk ETFs and 2 safe-haven ETFs, based on a composite score of the 18-day RSRS momentum indicator and the 3-month momentum factor. It automatically generates trading signals every Friday at 14:45.

### V8.8 Version Updates

| Update | Description |
|--------|------|
| RSRS formula fix | r³/std_x → rolling OLS slope z-score; the 0.0 threshold now has statistical meaning |
| Composite two-factor score | RSRS z-score × 0.5 + 3-month momentum z-score × 0.5 |
| Volatility parity weighting | Replaces equal weighting; positions allocated by inverse realized volatility |
| Push notification upgrade | Email notifications → WeChat PushPlus push |

## File Descriptions

| File | Description |
|------|------|
| `v8_live_signal.py` | Main strategy engine, responsible for data retrieval, signal calculation, and order generation |
| `v8_live_config.py` | Strategy configuration file, containing all adjustable parameters |
| `portfolio_state.json` | Account position state file, automatically updated after each run |…
