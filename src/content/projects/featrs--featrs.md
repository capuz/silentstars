---
repo: "featrs/featrs"
name: "featrs"
description: "A Polars-native feature engineering library for Rust."
readmeQualityOk: true
url: "https://github.com/featrs/featrs"
homepage: "https://crates.io/crates/featrs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["data-science", "feature-engineering", "machine-learning", "polars", "preprocessing", "rust", "scikit-learn"]
stars: 69
forks: 64
openIssues: 91
closedIssues: 87
watchers: 51
contributors: 14
recentReleases: 1
createdAt: "2026-07-06T14:00:53Z"
lastCommitAt: "2026-11-09T04:34:23Z"
lastReleaseAt: "2026-08-20T05:26:43Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 39
maintainers: ["DeathSurfing", "mikemikimike", "costajohnt"]
openGraphImageUrl: "https://opengraph.githubassets.com/118d16d0fb44cc58557fcd5a4f37bfb52da24c72dacccb476dfc3219595a37e1/featrs/featrs"
discussionCount: 1
---

# featrs

Feature engineering library for Rust, inspired by scikit-learn.

Built on [Polars](https://pola.rs) — all transformations operate natively on `DataFrame` and preserve column names.

> **Read the write-up:** why a feature engineering API designed for NumPy arrays
> changes when it moves to named Polars columns, and what `AutoScaler` decides
> per column, is at
> [adityavikram.dev/blog/featrs-scikit-learn-for-rust](https://adityavikram.dev/blog/featrs-scikit-learn-for-rust).

## Installation

```toml
[dependencies]
featrs = "0.5"
```

## Quick start

```rust
use featrs::prelude::*;

let mut scaler = StandardScaler::new();
scaler.fit(data.clone())?;
let scaled = scaler.transform(data)?;
```

## Features

| Category | Component | Description |
|---|---|---|
| **Scaling** | `StandardScaler` | Z-score normalization (mean 0, variance 1) |
| | `MinMaxScaler` | Scale to `[0, 1]` or custom range |
| | `RobustScaler` | Scale using median and IQR (outlier-robust) |
| | `MaxAbsScaler` | Scale by maximum absolute value; training values map to `[-1, 1]`, sparsity preserved |
| | `AutoScaler` | Pick the scaler per column from the column's own statistics (sparsity, outliers, skew,…
