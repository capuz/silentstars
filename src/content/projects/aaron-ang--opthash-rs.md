---
repo: "aaron-ang/opthash-rs"
name: "opthash-rs"
description: "Optimal open-addressing hash maps (Elastic Hashing & Funnel Hashing) in Rust, with Python bindings."
readmeQualityOk: true
url: "https://github.com/aaron-ang/opthash-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["data-structures", "elastic-hashing", "funnel-hashing", "hashmap", "open-addressing", "pyo3", "python", "rust"]
stars: 18
forks: 1
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-02-17T06:03:14Z"
lastCommitAt: "2026-10-25T02:47:50Z"
lastReleaseAt: "2026-10-23T20:36:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 51
maintainers: ["aaron-ang", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/182b10d9c0f01d84ee2a9df2c186e9773b525ef809e97b7676996b4f4c6a8f7c/aaron-ang/opthash-rs"
---

# opthash

opthash provides Rust hash maps and sets based on **Elastic Hashing** and
**Funnel Hashing**, two open-addressing algorithms introduced in
[_Optimal Bounds for Open Addressing Without Reordering_](https://arxiv.org/abs/2501.02305).
It turns the paper's fixed-table constructions into familiar collection APIs
that can be used in real programs.

> [!IMPORTANT]
> opthash is experimental. It is intended for evaluating and improving these
> algorithms, not as a drop-in performance replacement for `std::HashMap` or
> `hashbrown`. Benchmark and test it against your own workload before adopting
> it in production.

## Features

- `ElasticHashMap`, `ElasticHashSet`, `FunnelHashMap`, and `FunnelHashSet`
- Familiar map, set, entry, iterator, and collection APIs
- Paper-faithful placement during normal fixed-size operation
- Configurable spare capacity, hashers, and allocators
- `no_std` support with `alloc`
- Optional Python bindings with typed map and set APIs

## Quick start

Add opthash to a Rust project:

```bash
cargo add opthash
```

Both algorithms expose the same core collection APIs:

```rust
use opthash::{ElasticHashMap, FunnelHashSet};

let mut scores =…
