---
repo: "joaquinbejar/PriceLevel"
name: "PriceLevel"
description: "A high-performance, lock-free price level implementation for limit order books in Rust. This library provides the building blocks for creating efficient trading systems with support for multiple order types and concurrent access patterns."
readmeQualityOk: true
url: "https://github.com/joaquinbejar/PriceLevel"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["orderbook", "price-levels", "rust", "trading-servers"]
stars: 52
forks: 15
openIssues: 2
closedIssues: 98
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-28T07:33:55Z"
lastCommitAt: "2026-09-29T10:04:05Z"
lastReleaseAt: "2026-01-26T17:00:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 56
maintainers: ["joaquinbejar"]
openGraphImageUrl: "https://opengraph.githubassets.com/25b26341fa27f3ec6513d15eb196b40d17ed21c418dc752697f2771cc4bbc9b9/joaquinbejar/PriceLevel"
---

# PriceLevel

 A price level implementation for limit order books in Rust. A [`PriceLevel`] owns every order resting at one price: it matches an incoming taker against that queue in strict price-time order, tracks visible / hidden quantity counters, records execution statistics, and round-trips through checksum-protected snapshots. It is the building block an order book composes across prices, not a full order book.

 The crate is synchronous and built from lock-free components (a `crossbeam-skiplist` ordered index and atomic counters) plus a small number of documented locks. The complete public methods are **not** lock-free: see [Concurrency Model](#concurrency-model) for which method takes which lock.

 ## Features

 - Strict price-time (FIFO) matching at a single price, with deterministic trade emission
 - Support for diverse order types including standard limit orders, iceberg orders, post-only, fill-or-kill, and more
 - Thread-safe concurrent admissions, updates (cancel / resize) and reads alongside one logical matcher per level (see [Concurrency Model](#concurrency-model))
 - Lock-free ordered index (`crossbeam-skiplist`) and atomic quantity / statistics counters; order…
