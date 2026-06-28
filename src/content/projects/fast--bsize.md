---
repo: "fast/bsize"
name: "bsize"
description: "Semantic wrappers for byte size representations"
url: "https://github.com/fast/bsize"
homepage: "https://docs.rs/bsize"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["bytes", "format", "parser", "rust-lang", "size"]
stars: 16
forks: 0
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-07T15:50:37Z"
lastCommitAt: "2026-06-28T06:59:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 34
maintainers: ["tisonkun"]
openGraphImageUrl: "https://opengraph.githubassets.com/332d42c63b8d33c57ae003475e09144d33ab0edadd1a9676358b5d2f01ce2b6f/fast/bsize"
discussionCount: 0
---

# BSize

[crates-badge]: https://img.shields.io/crates/v/bsize.svg
[crates-url]: https://crates.io/crates/bsize
[docs-badge]: https://img.shields.io/docsrs/bsize
[docs-url]: https://docs.rs/bsize
[msrv-badge]: https://img.shields.io/badge/MSRV-1.85-green?logo=rust
[license-badge]: https://img.shields.io/crates/l/bsize
[license-url]: LICENSE
[actions-badge]: https://github.com/fast/bsize/workflows/CI/badge.svg
[actions-url]: https://github.com/fast/bsize/actions?query=workflow%3ACI

This crate provides multiple semantic wrappers and utilities for byte size representations.

## Features

* `#![no_std]`-capable, no heap allocation, and no runtime dependencies by default.
* `ByteSize<T>` wrappers over supported unsigned integer base types, with `BSize` as the `usize` alias and `BSize8`, `BSize16`, `BSize32`, and `BSize64` aliases for fixed-width base types.
* `FromStr` impl for `ByteSize`, allowing for parsing string size representations like "1.5 KiB" and "521 TB".
* `Display` impl for `ByteSize`, allowing for formatting byte sizes as human-readable strings in both binary (e.g., "1.5 MiB") and decimal (e.g., "1.5 MB") styles.
* Optional `serde` support for binary and human-readable…
