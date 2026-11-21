---
repo: "water-rs/nami"
name: "nami"
description: "A powerful, lightweight reactive framework."
readmeQualityOk: true
url: "https://github.com/water-rs/nami"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 8
closedIssues: 21
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2025-06-15T18:36:08Z"
lastCommitAt: "2026-11-21T11:39:57Z"
lastReleaseAt: "2026-08-27T14:52:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 78
maintainers: ["lexoliu", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b04d071aeb24c5240d9e99ebe4c625371076135f6cc180241d83db28b420baac/water-rs/nami"
---

# Nami

A powerful, lightweight reactive framework for Rust.

- `no_std` with `alloc`
- Consistent `Signal` trait across computed values
- Ergonomic two-way `Binding<T>` with helpers
- Composition primitives: `map`, `zip`, `cached`, `debounce`, `throttle`, `utils::{add,max,min}`
- Typed watcher context with metadata
- Optional derive macros

## Quick Start

```rust
use nami::{binding, Binding, Signal};

// Create mutable reactive state with automatic type conversion
let mut counter: Binding<i32> = binding(0);
let mut message: Binding<String> = binding("hello");  // &str -> String conversion

// Derive a new computation from it
let doubled = nami::map::map(counter.clone(), |n: i32| n * 2);

// Take a snapshot: an untracked, one-off read of the current value
assert_eq!(counter.snapshot(), 0);
assert_eq!(doubled.snapshot(), 0);

// Update the source and observe derived changes
counter.set(3);
assert_eq!(doubled.snapshot(), 6);

// set_from() also accepts Into<T> for ergonomic updates
message.set_from("world");  // &str works directly!
```

## The `Signal` Trait

All reactive values implement a single trait:
