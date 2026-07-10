---
repo: "Lqz13Th/extrema_infra"
name: "extrema_infra"
description: "A high-performance quantitative trading infrastructure built in Rust."
readmeQualityOk: true
url: "https://github.com/Lqz13Th/extrema_infra"
homepage: "https://crates.io/crates/extrema_infra"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["crypto", "exchange-api", "finance", "quant", "quantitative-trading", "trading-infra"]
stars: 241
forks: 41
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2025-09-01T06:36:32Z"
lastCommitAt: "2026-07-10T07:00:53Z"
lastReleaseAt: "2026-06-21T06:54:09Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 42
maintainers: ["Lqz13Th"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9e51b4e95b6a2f9c55a75a0aea4ec4bec81244038e27ce68e89577501a23f72/Lqz13Th/extrema_infra"
discussionCount: 6
---

# Extrema Infra

A quantitative trading environment built in Rust.

- Event-driven, channel-based, and designed for modular strategy execution across multiple exchanges.

- Maximizes runtime efficiency through **static dispatch** and promotes scalability with **Heterogeneous Lists (HList)** for strategy registration.

At its core: **One unified framework for multiple exchanges, multiple strategies, zero runtime boxing.**

---

## SOTA Usages

Explore state-of-the-art example usages, architecture walkthroughs, and community Q&A—no need to run it, just see how strategies and data flows are structured.

👉 **Join the discussion & explore examples:**  
[GitHub Discussions – SOTA Usages](https://github.com/Lqz13Th/extrema_infra/discussions)

---

## Key Features

- **Machine Learning Integration Across Languages**
  - Features can be sent via ZeroMQ to Python ML models (Torch, GBM, Transformer, etc.).
  - ONNX models can also run directly inside `extrema_infra` without an external Python service.
  - `AltTensor` is the common dense tensor payload for feature input and model output.
  - Predictions return asynchronously to Rust for signal generation and order execution.

- **Unified…
