---
repo: "contextgeneric/cgp"
name: "cgp"
description: "Context-Generic Programming: modular programming paradigm for Rust"
readmeQualityOk: true
url: "https://github.com/contextgeneric/cgp"
homepage: "https://contextgeneric.dev/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["functional-programming", "modular-programming", "rust"]
stars: 251
forks: 11
openIssues: 20
closedIssues: 12
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2023-09-27T19:09:24Z"
lastCommitAt: "2026-11-07T22:51:49Z"
lastReleaseAt: "2026-02-28T21:38:39Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 81
undervaluedScore: 27
maintainers: ["soareschen"]
openGraphImageUrl: "https://opengraph.githubassets.com/0141d8c267234797cf614a854ce3cd621dc2437be3579774e9a8ee182194f33c/contextgeneric/cgp"
discussionCount: 9
---

# Context-Generic Programming (CGP) for Rust

**A language extension for Rust, with pluggable trait implementations at compile-time.**

Still ordinary Rust: a library on the stable toolchain, with provider selection resolved at compile
time, adopted one trait at a time. Beyond interchangeable implementations, CGP adds abstract types
chosen by each context, so error and runtime types need not be separate parameters through every
layer. It also supports extensible records and variants, and composable handlers.

**[Website](https://contextgeneric.dev/) · [Quickstart](https://contextgeneric.dev/docs/quickstart) · [Tutorials](https://contextgeneric.dev/docs/tutorials/hello) · [Reference](https://contextgeneric.dev/docs/reference/) · [crates.io](https://crates.io/crates/cgp) · [API docs](https://docs.rs/cgp)**

> [!IMPORTANT]
> This repository describes **v0.8.0**, which is **not compatible** with v0.7.0, because v0.8.0 changes and removes syntax that v0.7.0 used. **All documentation in this repository describes v0.8.0 only.** For v0.7.0, refer to its published crate documentation instead.

## Install

```bash
cargo add cgp
```

Then bring everything into scope with a single import:…
