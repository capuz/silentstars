---
repo: "t3dotgg/lust-lang"
name: "lust-lang"
description: "lust: a Rust-subset compiler with an incremental daemon (fast dev checks for ts-rust)"
readmeQualityOk: true
url: "https://github.com/t3dotgg/lust-lang"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 50
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-10-15T12:32:49Z"
lastCommitAt: "2026-10-22T08:51:27Z"
lastReleaseAt: "2026-10-17T22:11:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 30
maintainers: ["t3dotgg"]
openGraphImageUrl: "https://opengraph.githubassets.com/69297c32cc97c993f418b8525a544d9c9fe7191af88957589719ea855372a266/t3dotgg/lust-lang"
---

# lust-lang

Lust is an experiment. It asks one question: how fast can `check` and `build` of real Rust code get if the compiler supports only a subset of Rust, keeps a warm daemon, and gives up LLVM in dev builds?

To test this, lust compiles a subset of Rust. Every program lust accepts must be valid Rust (rustc 1.99, edition 2024), and it must give the same output as the `rustc` build. When lust cannot match rustc, it rejects the program with an error code. That rule makes `rustc` a free test oracle, and it gives lust programs a release path: Cargo builds the release binary from the same source.

**Status: early, but it compiles one real project.** About 250k lines of Rust and C in `src/`, plus 44k lines of std and adapter source in `library/`. It has a real type checker, trait solver, and borrow checker, and it reads Cargo workspaces. It checks and builds [ts-rust](https://github.com/pingdotgg/ts-rust) v0.7.0, a Rust port of the TypeScript compiler, with a small set of rewrites. In the 2026-10-17 census, `lust check` passes 18 of 18 targets and `lust build` builds 11 of 11 bins. The lust-built bins give the same stdout, stderr, exit code, and written files as the Cargo-built…
