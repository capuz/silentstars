---
repo: "deepentropy/ibx"
name: "ibx"
description: "Direct connection engine for Interactive Brokers in Rust. No Java Gateway required. Ultra-low-latency orders and market data. Rust + Python (PyO3)."
readmeQualityOk: true
url: "https://github.com/deepentropy/ibx"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["interactive-brokers", "low-latency", "market-data", "pyo3", "rust", "trading"]
stars: 186
forks: 30
openIssues: 46
closedIssues: 485
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-03-04T19:53:35Z"
lastCommitAt: "2026-10-17T07:59:15Z"
lastReleaseAt: "2026-07-17T22:54:26Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 95
undervaluedScore: 32
maintainers: ["deepentropy"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e57def373a9d4bb9331c5d6fd65780992e63d54ab7648d45adc26bc333bd45a/deepentropy/ibx"
---

---

📖 **Full documentation, recipes, and API reference:** [deepentropy.github.io/ibx](https://deepentropy.github.io/ibx/)

---

IBX connects directly to the broker's servers — without requiring the official Java Gateway. Built in Rust for ultra-low-latency, available as both a Rust library and a Python library via PyO3. Both expose an ibapi-compatible `EClient`/`Wrapper` API.

## Benchmarks

### Processing Latency (no network)

Internal engine processing measured in isolation (1M iterations, no network I/O). Compared to the Java Gateway's internal processing, measured in its running process.

#### Tick Reading (wire → strategy)

| Metric | Java Gateway | IBX (Rust) | Ratio |
|---|---|---|---|
| Latency | 2 ms | 340 ns | **5,900x** |

#### Order Sending (strategy → wire)

| Order Type | Java Gateway | IBX (Rust) | Ratio |
|---|---|---|---|
| Limit | 83 µs | 459 ns | **180x** |
| Market | 76 µs | 460 ns | **165x** |
| Cancel | 125 µs | 386 ns | **323x** |
| Modify | 86 µs | 470 ns | **183x** |

IBX eliminates the Java Gateway entirely — no JVM, no localhost hop, no garbage collection pauses. The strategy receives ticks and sends orders in-process.

## Rust Usage

Add to…
