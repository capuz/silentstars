---
repo: "joaquinbejar/PriceLevel"
name: "PriceLevel"
description: "A high-performance, lock-free price level implementation for limit order books in Rust. This library provides the building blocks for creating efficient trading systems with support for multiple order types and concurrent access patterns."
url: "https://github.com/joaquinbejar/PriceLevel"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 47
forks: 13
openIssues: 0
closedIssues: 42
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-28T07:33:55Z"
lastCommitAt: "2026-06-24T00:19:13Z"
lastReleaseAt: "2026-01-26T17:00:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["joaquinbejar"]
openGraphImageUrl: "https://opengraph.githubassets.com/83fbb5bf0ba2c0b644d9c27d721f00f79a353f0cbcce7228feb121d337a03462/joaquinbejar/PriceLevel"
---

# PriceLevel

 A high-performance, lock-free price level implementation for limit order books in Rust. This library provides the building blocks for creating efficient trading systems with support for multiple order types and concurrent access patterns.

 ## Features

 - Lock-free architecture for high-throughput trading applications
 - Support for diverse order types including standard limit orders, iceberg orders, post-only, fill-or-kill, and more
 - Thread-safe operations with atomic counters and lock-free data structures
 - Efficient order matching and execution logic
 - Designed with domain-driven principles for financial markets
 - Comprehensive test suite demonstrating concurrent usage scenarios
 - Built with crossbeam's lock-free data structures (`crossbeam-skiplist`)
 - Optimized statistics tracking for each price level
 - Memory-efficient implementations suitable for high-frequency trading systems

 Perfect for building matching engines, market data systems, algorithmic trading platforms, and financial exchanges where performance and correctness are critical.

 ## Supported Order Types

 The library provides comprehensive support for various order types used in modern…
