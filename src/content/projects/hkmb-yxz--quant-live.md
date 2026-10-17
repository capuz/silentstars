---
repo: "hkmb-yxz/quant-live"
name: "quant-live"
description: "Quant live monitoring console: AI hotspots / backtesting / factors / options scanning + email push"
originalDescription: "量化实时监控台：AI 热点/回测/因子/期权扫描+邮件推送"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hkmb-yxz/quant-live"
language: "Python"
languages: ["Python"]
languagePcts: [69]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-16T14:38:59Z"
lastCommitAt: "2026-10-17T07:59:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 47
maintainers: ["bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/baa38b9cd5c63f125128e7e3569b6edc4ee78fbfc7e94c0c6988cdd552c45b4d/hkmb-yxz/quant-live"
---

# Quant Live Monitoring Console (quant-live)

A **free, 24/7 accessible, self-running daily review and improvement** US-stock quantitative real-time web system, running on GitHub Actions + GitHub Pages:

- 🔥 **AI real-time financial hotspots**: aggregates RSS hot news from Yahoo Finance / CNBC / MarketWatch / WSJ / Benzinga, scores keyword heat, and uses the DeepSeek API for batch Chinese summaries plus sentiment / impact / sector interpretation (every 15 minutes). The daily review automatically verifies **whether actual volatility exceeds the instrument's average daily volatility**, and marks it as a “world-class hotspot”
- 📊 **Real-time backtest profitability analysis**: moving average crossover / RSI mean reversion / momentum / Donchian breakout are automatically backtested on the watchlist, with **in-sample (historical) / out-of-sample (recent) segmented testing + overfitting detection**. Parameter grids are automatically selected by out-of-sample Sharpe ratio. Targets: **win rate ≥60%, profit/loss ratio >2, Sharpe >2** (configurable), with pass markers in the output
- 🧬 **Real-time quantitative factor mining**: 16 factors × about 50 US stocks, weekly cross-sectional RankIC…
