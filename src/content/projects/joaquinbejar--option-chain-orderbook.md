---
repo: "joaquinbejar/Option-Chain-OrderBook"
name: "Option-Chain-OrderBook"
description: "A high-performance Rust library for options market making infrastructure, providing a complete Option Chain Order Book system built on top of OrderBook-rs, PriceLevel, and OptionStratLib."
url: "https://github.com/joaquinbejar/Option-Chain-OrderBook"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["finance", "market-making", "option-pricing", "options", "options-trading", "orderbook", "trading"]
stars: 25
forks: 8
openIssues: 1
closedIssues: 45
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2025-12-22T16:00:09Z"
lastCommitAt: "2026-06-27T00:36:25Z"
lastReleaseAt: "2026-06-26T06:13:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 50
maintainers: ["joaquinbejar"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e7d0ff6e934d1f76ec7efc45486415bc72db0fcf425134ea6b673dd29a731fc/joaquinbejar/Option-Chain-OrderBook"
---

## Option Chain Order Book - Options Market Making Infrastructure

A high-performance Rust library for options market making infrastructure,
providing a complete Option Chain Order Book system built on top of
[OrderBook-rs](https://crates.io/crates/orderbook-rs),
[PriceLevel](https://crates.io/crates/pricelevel), and
[OptionStratLib](https://crates.io/crates/optionstratlib).

### Key Features

- **Lock-Free Architecture**: Built on OrderBook-rs's lock-free data structures
  for maximum throughput in high-frequency trading scenarios.

- **Hierarchical Order Book Structure**: Multi-level organization from
  underlying assets down to individual option contracts.

- **Multi-Expiration Option Chain Management**: Handle hundreds of options
  across multiple strikes and expirations simultaneously.

- **Real-Time Order Book per Option**: Individual order books for each option
  contract with full depth, powered by OrderBook-rs.

- **Thread-Safe Concurrent Access**: Uses `SkipMap` for lock-free concurrent
  access to order books across multiple threads.

- **OptionStratLib Integration**: Use Greeks calculation, `ExpirationDate`,
  `OptionStyle`, and pricing models directly from…
