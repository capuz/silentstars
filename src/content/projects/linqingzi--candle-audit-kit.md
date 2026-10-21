---
repo: "linqingzi/candle-audit-kit"
name: "candle-audit-kit"
description: "Offline OKX OHLCV checks: gaps, duplicates, CSV/native-JSON reconciliation and exact-decimal DuckDB/Parquet datasets. Includes a synthetic demo."
readmeQualityOk: true
url: "https://github.com/linqingzi/candle-audit-kit"
homepage: "https://linqingzi.github.io/candle-audit-kit/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["data-quality", "data-validation", "decimal", "duckdb", "offline", "ohlcv", "okx", "parquet", "python"]
stars: 1
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-10-21T12:47:27Z"
lastCommitAt: "2026-10-21T18:50:29Z"
lastReleaseAt: "2026-10-21T19:24:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 25
maintainers: ["linqingzi"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9ff61e6e8ea042ec5beec58900193cf18f82b926a2af083772ca8c869515592/linqingzi/candle-audit-kit"
promoted: true
---

# Candle Audit Kit

Audit OKX candle files offline: find gaps and duplicates, reconcile CSV with native JSON, and preserve exact decimal values in reproducible datasets.

For quantitative researchers and Python data engineers checking local OHLCV inputs before research or backtesting.

[繁體中文](https://github.com/linqingzi/candle-audit-kit/blob/HEAD/README.zh-TW.md) · [0.1.0rc2 candidate](https://github.com/linqingzi/candle-audit-kit/releases/tag/0.1.0rc2) · [MIT](https://github.com/linqingzi/candle-audit-kit/blob/HEAD/LICENSE) · [CI](https://github.com/linqingzi/candle-audit-kit/actions/workflows/ci.yml)

**Read first — no installation:** [Open the English sample report](https://linqingzi.github.io/candle-audit-kit/examples/synthetic-report.en.html) · [閱讀中文報告](https://linqingzi.github.io/candle-audit-kit/examples/synthetic-report.html) · [Preview and local trial guide](https://linqingzi.github.io/candle-audit-kit/).

The public preview displays a fixed synthetic example and has no file upload. Local commands run the actual checks on your machine.

**A real run, using invented data.** Eight hourly candles become two complete 4-hour bars. The report keeps `UNVERIFIED` and `UNKNOWN`…
