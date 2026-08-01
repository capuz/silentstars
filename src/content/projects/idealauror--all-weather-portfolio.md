---
repo: "IdealAuror/all-weather-portfolio"
name: "all-weather-portfolio"
description: " Bridgewater All Weather Strategy (China Edition) — Risk Parity backtesting with real A-share equity, bond & commodity ETF data"
readmeQualityOk: true
url: "https://github.com/IdealAuror/all-weather-portfolio"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["a-share", "all-weather", "asset-allocation", "backtesting", "bridgewater", "china-stock-market", "etf", "monte-carlo", "portfolio-management", "python"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-22T16:46:46Z"
lastCommitAt: "2026-08-01T06:14:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 49
maintainers: ["IdealAuror"]
openGraphImageUrl: "https://opengraph.githubassets.com/75aeff6c09fc28cb0ddf915fbd3c66b750a1d18864cdfbab0b42f6efc7f21782/IdealAuror/all-weather-portfolio"
---

# Bridgewater All-Weather Portfolio · China Edition

</div>

**English** | [中文](https://github.com/IdealAuror/all-weather-portfolio/blob/HEAD/README-zh.md)

</div>

A risk-parity backtesting framework based on real China A-share/bond/commodity ETF data, covering **2005–2026 (~21 years of full bull-bear cycles)** with **3 deployable strategies**, each supporting 3-4 cash tiers (100% / 85% / 70% / Dynamic), totaling 11 backtests.

Online docs: [https://idealauror.github.io/all-weather-portfolio/](https://idealauror.github.io/all-weather-portfolio/)

## Strategy Quick Reference

| Strategy | Style | CAGR | Vol | Max DD | Sharpe | One-liner |
|----------|:-----:|:----:|:---:|:------:|:-----:|-----------|
| **V3-B Conservative(20d)** | Conservative Enhanced | **8.26%** | 3.62% | **-5.31%** | **1.81** | Inverse vol 20d + nonferr(75d) + HS300 AND dip |
| **V3-B Risk Parity(20d)** | Academic | 8.95% | 4.90% | -5.68% | 1.48 | 4-bucket equal HRP + nonferr/gold/sp500/hs300 trends + dip + target vol |
| **V3c Multi-Asset** | All-Weather | **9.29%** | 4.60% | -6.28% | 1.65 | 6-asset inverse vol 20d + nonferr/gold/sp500 trend(75d) + HS300 AND dip |

> V3-B RP 4 trend filters: nonferr(75d) +…
