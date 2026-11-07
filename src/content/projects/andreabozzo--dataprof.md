---
repo: "AndreaBozzo/dataprof"
name: "dataprof"
description: "Data profiling and quality gates for CSV, JSON, Parquet and DataFrames. Rust core, Python API."
readmeQualityOk: true
url: "https://github.com/AndreaBozzo/dataprof"
homepage: "https://andreabozzo.github.io/dataprof/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [69, 30]
topics: ["rust", "data-quality", "python", "data-engineering", "csv", "json", "apache-arrow", "data-profiling", "pandas", "polars"]
stars: 33
forks: 27
openIssues: 112
closedIssues: 414
watchers: 0
contributors: 25
recentReleases: 0
createdAt: "2025-09-02T08:40:14Z"
lastCommitAt: "2026-11-07T13:54:56Z"
lastReleaseAt: "2025-09-20T11:15:59Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 69
maintainers: ["AndreaBozzo", "dependabot[bot]", "majidninja"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1048933441/ac95f16f-ca86-4f5b-b7b6-f46fdbf26bb8"
discussionCount: 6
---

[Website](https://andreabozzo.github.io/dataprof/) · [Getting started](https://github.com/AndreaBozzo/dataprof/blob/HEAD/docs/guides/getting-started.md) · [Python API](https://github.com/AndreaBozzo/dataprof/blob/HEAD/docs/python/README.md) · [Release notes](https://github.com/AndreaBozzo/dataprof/blob/HEAD/docs/release-notes.md)

dataprof profiles CSV, JSON, Parquet, DataFrames and Arrow tables in one call: types, nulls, distributions, patterns and a quality score. Then it can gate your pipeline on what it found. It runs locally, gives the same numbers for the same data whichever way you load it, and says "can't tell" instead of guessing.

A Rust library with a Python package on top. No server, no account, no network.

## Install

```bash
pip install dataprof          # or: uv pip install dataprof
```

Wheels for CPython 3.11 to 3.15 on Linux, macOS and Windows, with no Python dependencies.

## Profile a file

```python
import dataprof as dp

report = dp.profile("orders.csv")        # also .json, .jsonl, .parquet, DataFrames, dicts
print(report.rows, "rows,", report.columns, "columns, quality", report.quality_score)

amount = report["amount"]
print(amount.data_type, amount.mean,…
