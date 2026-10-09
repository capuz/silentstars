---
repo: "houseme/rustfs-mimalloc"
name: "rustfs-mimalloc"
description: "A Rust wrapper over Microsoft's MiMalloc memory allocator"
readmeQualityOk: true
url: "https://github.com/houseme/rustfs-mimalloc"
homepage: "https://houseme.github.io/rustfs-mimalloc/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["allocator", "memory", "mimalloc", "rust", "rustfs", "s3", "rustfs-mimalloc"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-22T10:52:56Z"
lastCommitAt: "2026-10-09T10:50:41Z"
lastReleaseAt: "2026-09-22T12:28:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 75
maintainers: ["houseme", "dependabot[bot]", "podsvirov"]
openGraphImageUrl: "https://opengraph.githubassets.com/81ab9a8033e2b6dbfcbd53cef4a7e56b37d691c7c4329502b05150618304be9e/houseme/rustfs-mimalloc"
fundingLinks: ["LIBERAPAY:https://liberapay.com/houseme", "CUSTOM:https://paypal.me/houseme"]
---

# rustfs-mimalloc

High-performance [mimalloc](https://github.com/microsoft/mimalloc) V3 global allocator for Rust.

## Overview

`rustfs-mimalloc` provides safe, ergonomic Rust bindings to Microsoft's mimalloc V3 memory allocator (post-v3.5.4 interim, commit `a28efddd`). Drop-in replacement for the system allocator with excellent multi-threaded performance.

### Why this crate?

- **V3 only** — exclusively targets mimalloc V3, no multi-version complexity
- **Always aligned** — uses `mi_malloc_aligned` for all allocations, preventing [alignment bugs](https://github.com/purpleprotocol/mimalloc_rust/issues/87)
- **Zero indirection** — `#[inline(always)]` hot path, no intermediate function calls
- **Cross-platform** — Linux, macOS, Windows, ARM, RISC-V, musl
- **Comprehensive API** — stats, options, heap/arena management
- **Issue-informed** — addresses [40+ known issues](https://github.com/purpleprotocol/mimalloc_rust/issues) from the reference implementation

## Quick Start

```toml
[dependencies]
rustfs-mimalloc = "0.6.0"
```

```rust
use rustfs_mimalloc::MiMalloc;

#[global_allocator]
static GLOBAL: MiMalloc = MiMalloc;

fn main() {
    let v = vec![1, 2, 3, 4, 5];…
