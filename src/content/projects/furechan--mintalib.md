---
repo: "furechan/mintalib"
name: "mintalib"
description: "Minimal Technical Analysis Library for Python"
readmeQualityOk: true
url: "https://github.com/furechan/mintalib"
homepage: "https://furechan.github.io/mintalib/"
language: "Python"
languages: ["Python", "Cython"]
languagePcts: [62, 38]
topics: ["indicators", "technical-analysis", "cython", "python", "pandas", "finance", "numpy", "time-series", "polars"]
stars: 15
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-07-28T18:20:47Z"
lastCommitAt: "2026-08-31T10:00:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 74
maintainers: ["furechan"]
openGraphImageUrl: "https://opengraph.githubassets.com/afbf26b6e8d057dd296a083f09de30a47b46c7756abdc196843a10b8e18935e3/furechan/mintalib"
---

# Minimal Technical Analysis Library for Python

This package offers a curated list of technical analysis indicators implemented in `Cython` for optimal performance. The library is built around `numpy` arrays and provides interfaces for `numpy`, `pandas` and `polars`.

> [!NOTE]
> This project is experimental and the interface can change.

> [!IMPORTANT]
> Function signatures have changed: multi-input functions no longer accept a `prices` DataFrame. Pass the required columns as separate arguments instead. For example, use `atr(prices["high"], prices["low"], prices["close"])`. See the indicator table below for the data inputs required by each function.

## Interfaces

Mintalib offers three dedicated interfaces for different workflows:

- **Functions** (`mintalib.functions`) — eager functions for NumPy arrays and pandas or polars series.
- **Indicators** (`mintalib.indicators`) — composable indicators for pandas-based workflows.
- **Expressions** (`mintalib.expressions`) — composable expression factories for polars-native workflows.

## Conventions

Indicators and Expressions expect prices DataFrames to have lowercase column names such as `open`, `high`, `low`, `close`, and…
