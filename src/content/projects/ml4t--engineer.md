---
repo: "ml4t/engineer"
name: "engineer"
description: "Feature engineering, labeling, alternative bars, and leakage-safe datasets for financial ML."
readmeQualityOk: true
url: "https://github.com/ml4t/engineer"
homepage: "https://www.ml4trading.io/docs/engineer/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["algorithmic-trading", "feature-engineering", "finance", "financial-ml", "labeling", "machine-learning-for-trading", "microstructure", "ml4t", "python", "quantitative-finance"]
stars: 30
forks: 20
openIssues: 0
closedIssues: 35
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-11-15T16:47:41Z"
lastCommitAt: "2026-11-02T15:17:08Z"
lastReleaseAt: "2026-05-05T15:46:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 66
maintainers: ["stefan-jansen", "dependabot[bot]", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/c204f978825a211563c20fa29f1b26d11d44241bddd69d3136ea5b57c243fdfb/ml4t/engineer"
---

# ml4t-engineer

Feature engineering, labeling, alternative bars, and leakage-safe datasets for
financial ML.

`ml4t-engineer` provides 120 registry features across 11 categories, path-dependent
and fixed-horizon labeling, activity-based bar sampling, and train-only preprocessing.
The core interface uses Polars DataFrames.

## Installation

Development source supports Python 3.12, 3.13, 3.14, and 3.15 on Linux, macOS, and Windows.
Python 3.15 support and the calendar API used below are intended for the 0.2 release.
Release 0.1.6 supports Python 3.12-3.14; use its
[version-matched quick start](https://github.com/ml4t/engineer/tree/v0.1.6#quick-start)
instead of passing the new `calendar` argument to that release.

```bash
pip install ml4t-engineer
```

Until 0.2 is available from PyPI, run the examples below from a
[source checkout](#development) with `uv sync --no-dev`, using that environment's Python.

The quick start uses only core dependencies. Optional extras provide TA-Lib validation,
DuckDB and PyArrow storage, market calendars, visualization, statistics, and ML tools:

```bash
pip install "ml4t-engineer[ta]"
pip install "ml4t-engineer[store]"
pip install…
