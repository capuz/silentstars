---
repo: "wingfoil-io/wingfoil"
name: "wingfoil"
description: "graph based stream processing framework"
readmeQualityOk: true
url: "https://github.com/wingfoil-io/wingfoil"
homepage: "https://www.wingfoil.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["algorithmic-trading", "backtesting", "data-pipelines", "event-driven", "pyo3", "python", "real-time-data", "rust", "stream-processing", "time-series"]
stars: 217
forks: 37
openIssues: 23
closedIssues: 123
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2025-09-16T20:36:21Z"
lastCommitAt: "2026-08-29T10:22:15Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 96
undervaluedScore: 40
maintainers: ["0-jake-0", "maxi-maxima", "k4its1t"]
openGraphImageUrl: "https://opengraph.githubassets.com/98b5859df9640d32858219cafc8e8176a40aa903b5793c4474aac8712830a3fe/wingfoil-io/wingfoil"
discussionCount: 6
---

# Wingfoil

Wingfoil is a [blazingly fast](https://github.com/wingfoil-io/wingfoil/blob/HEAD/crates/wingfoil/benches/) stream processing
engine for latency-critical systems: electronic trading, real-time decisioning
and streaming ML features.

Wire a graph of calculations once and Wingfoil runs it — interpreted, compiled
into a single monomorphized function, or as compiled islands inside an
interpreted graph. Backtest it over history, then run it live without changing
the wiring.

It ships with production-ready adapters covering tick stores, message buses,
market protocols and observability backends, so graphs plug into real data
sources and sinks in a line.

> **9.0 replaces the engine.** Coming from 8.x, start with the
> [release notes](https://github.com/wingfoil-io/wingfoil/blob/HEAD/docs/release-notes/9.0.0.md) and the
> [migration guide](https://github.com/wingfoil-io/wingfoil/blob/HEAD/docs/migration.md).

## Languages

Wire the graph in Rust or Python — the same engine underneath, the same
combinator surface — and stream it to a browser over the `web` adapter.

| | Install | Package | Docs | Source |
|---|---|---|---|---|
| **Rust** | `cargo add wingfoil` |…
