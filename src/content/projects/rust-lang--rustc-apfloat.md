---
repo: "rust-lang/rustc_apfloat"
name: "rustc_apfloat"
description: "Rust port of C++ llvm::APFloat library"
readmeQualityOk: true
url: "https://github.com/rust-lang/rustc_apfloat"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 23
forks: 16
openIssues: 6
closedIssues: 3
watchers: 17
contributors: 67
recentReleases: 0
createdAt: "2022-11-14T02:36:43Z"
lastCommitAt: "2026-09-07T08:35:06Z"
lastReleaseAt: "2025-06-11T01:47:00Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 69
undervaluedScore: 31
maintainers: ["tgross35", "eduardosm"]
openGraphImageUrl: "https://opengraph.githubassets.com/01175e497fa1c0fbb6a3262f4b70997288a82043970d3cf3517ee689e4d32d4c/rust-lang/rustc_apfloat"
---

# `rustc_apfloat`<br><sub>(Rust port of the C++ `llvm::APFloat` "softfloat" library)</sub>

## History

LLVM's `APFloat` (aka `llvm::APFloat`) software floating-point (or "softfloat")
library was first ported to Rust (and named `rustc_apfloat`) back in 2017,
in the Rust pull request [`rust-lang/rust#43554`](https://github.com/rust-lang/rust/pull/43554),
as part of an effort to expand Rust compile-time capabilities without sacrificing
determinism (and therefore soundness, if the type-system was involved).

<sub>Note: while using the original C++ `llvm::APFloat` directly would've been an option,
certain high-level API design differences made in the Rust port, without behavioral impact
(C++ raw pointers and dynamic allocations vs Rust generics, traits and `#![no_std]`),
made the Rust port more appealing from a determinism standpoint (mostly thanks to
lacking all 3 of: `unsafe` code, host floating-point use, `std` access - and only
allocating to handle the arbitrary precision needed for conversions to/from decimal),
*even though there was a chance it had correctness issues unique to it*.</sub>

However, that port had a fatal flaw: it was added to the `rust-lang/rust` repository…
