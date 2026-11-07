---
repo: "yennanliu/finance_data"
name: "finance_data"
description: "AI-gen/NotebookLLM U.S. stock reports  and a suite of tools for downloading, organizing, and managing SEC financial filings. | #AI"
readmeQualityOk: true
url: "https://github.com/yennanliu/finance_data"
homepage: "https://yennj12.js.org/finance_data"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["claude-code", "finance", "openai", "stock-market"]
stars: 5
forks: 8
openIssues: 8
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2025-11-16T00:46:55Z"
lastCommitAt: "2026-11-07T22:51:51Z"
lastReleaseAt: "2026-10-24T09:32:59Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 77
undervaluedScore: 89
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c496a767e2c5d0dbcc3ed95ed52fc6530e8e37577b9c5cc6e56f97ff2e8bfb07/yennanliu/finance_data"
discussionCount: 2
---

# Finance Data Research Hub

> AI 驅動的美股投資研究平台 — 基本面分析、技術分析、市場數據、SEC 文件，全部繁體中文。

**Live site:** [yennanliu.github.io/finance_data](https://yennanliu.github.io/finance_data/) (English + 繁體中文)

An automated research pipeline for US (and Taiwan) equities. Scheduled jobs fetch
market and SEC data, an LLM writes structured reports in Traditional Chinese, a
nightly audit checks every figure it can, and the results are published as a
static MkDocs site.

---

## Features

| | |
|---|---|
| **AI reports** | 12 analysis types. Fundamental and technical reports run daily; earnings-call, insider, 13F, valuation and more run on demand |
| **Checked figures** | Derived numbers (TTM, FCF, WACC, multiples) are computed in Python and quoted by the model. The §8.8 fair-value sum is recomputed and corrected after generation |
| **Market Data** | 10-year daily OHLCV plus SEC quarterly fundamentals per ticker: candles, drawdown, volatility, financial statements, valuation bands, DCF and reverse DCF. Downloadable as CSV / JSON |
| **Market news** | Daily per-ticker digest from Yahoo, RSS feeds and Perplexity Discover |
| **QA audit** | Nightly rule-based checks plus a cross-provider LLM review,…
