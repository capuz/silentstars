---
repo: "kanekoshoyu/guilder"
name: "guilder"
description: "Guilder: Crypto Cross-Exchange Crate"
readmeQualityOk: true
url: "https://github.com/kanekoshoyu/guilder"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["cryptocurrency", "metaprogramming", "python", "rust", "trading"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-08-20T16:00:37Z"
lastCommitAt: "2026-09-27T09:28:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 59
maintainers: ["kanekoshoyu"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f22da695e1af42bdb9b3cafa9e3e314690bc4ae186606f051797f4358087cbb/kanekoshoyu/guilder"
---

# Guilder

Unopinionated multi-language cross-exchange crypto trading library in Rust.

## The idea

Every crypto exchange has a different API, but they all do the same things: get prices, place orders, stream market data. Guilder defines those operations as a shared set of traits in a YAML file, auto-generates the trait code, and lets exchange clients implement them. Strategies written against the traits work on any exchange with no changes.

## Crates

| Crate | Description | crates.io |
|---|---|---|
| [`guilder-abstraction`](https://github.com/kanekoshoyu/guilder/blob/HEAD/abstraction/target/rust/README.md) | Auto-generated trading traits, structs, and enums | [](https://crates.io/crates/guilder-abstraction) |
| [`guilder-core`](https://github.com/kanekoshoyu/guilder/blob/HEAD/core/README.md) | Reusable trading components — orderbook, currency pair, live engine | [](https://crates.io/crates/guilder-core) |
| [`guilder-client-hyperliquid`](https://github.com/kanekoshoyu/guilder/blob/HEAD/client/guilder-client-hyperliquid/README.md) | Hyperliquid exchange client | [](https://crates.io/crates/guilder-client-hyperliquid) |
|…
