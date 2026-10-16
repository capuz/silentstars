---
repo: "delta-io/delta-kernel-rs"
name: "delta-kernel-rs"
description: "A native Delta implementation for integration with any query engine"
readmeQualityOk: true
url: "https://github.com/delta-io/delta-kernel-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 368
forks: 229
openIssues: 484
closedIssues: 513
watchers: 9
contributors: 113
recentReleases: 0
createdAt: "2023-05-22T22:25:23Z"
lastCommitAt: "2026-10-16T08:09:39Z"
status: "thriving"
tags: ["needs_contributors", "community_hub", "fork_magnet"]
healthScore: 88
undervaluedScore: 38
maintainers: ["emkornfield", "jtuglu1", "rliao147"]
openGraphImageUrl: "https://opengraph.githubassets.com/8279af84cc6fef213ab3daff201465d54c5feb9380f40567a29ec574825bad43/delta-io/delta-kernel-rs"
discussionCount: 113
---

# Delta Kernel (rust) &emsp; [![build-status]][actions] [![latest-version]][crates.io] [![docs]][docs.rs] 

[build-status]: https://img.shields.io/github/actions/workflow/status/delta-io/delta-kernel-rs/build.yml?branch=main
[actions]: https://github.com/delta-io/delta-kernel-rs/actions/workflows/build.yml?query=branch%3Amain
[latest-version]: https://img.shields.io/crates/v/delta_kernel.svg
[crates.io]: https://crates.io/crates/delta\_kernel
[rustc-version-1.85+]: https://img.shields.io/badge/rustc-1.85+-lightgray.svg
[rustc]: https://blog.rust-lang.org/2025/02/20/Rust-1.85.0/
[docs]: https://img.shields.io/docsrs/delta_kernel
[docs.rs]: https://docs.rs/delta_kernel/latest/delta_kernel/

Delta-kernel-rs is an experimental [Delta][delta] implementation focused on interoperability with a
wide range of query engines. It currently supports reads and (experimental) writes. Only blind
appends are currently supported in the write path.

The Delta Kernel project is a Rust and C library for building Delta connectors that can read and
write Delta tables without needing to understand the Delta [protocol details][delta-protocol]. This
is the Rust/C equivalent of [Java Delta…
