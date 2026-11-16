---
repo: "valeria-org/bitwright"
name: "bitwright"
description: "Bit-vector expression simplifier for binary analysis and deobfuscation"
readmeQualityOk: true
url: "https://github.com/valeria-org/bitwright"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 63
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-23T15:19:51Z"
lastCommitAt: "2026-11-16T04:22:10Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 35
maintainers: ["claude", "bombaris34", "horse-server"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc8c536661418dcff2e04d0ffd85e47c5c10ceb88bacdbeb11c2134b55545917/valeria-org/bitwright"
---

# bitwright

A solver and simplifier for fixed-width bit-vector expressions, in Rust.

bitwright is for tools that reason about machine integers: binary analyzers, deobfuscators,
decompilers, lifters and compilers. It answers their questions at the level of words first
(facts, normal forms, and decision procedures for what obfuscators write) and falls back on a
circuit and a SAT search for the rest. It never guesses: a rewrite preserves the value of the
expression at every input, or it does not happen.

- [Quick start](#quick-start)
- [What you get](#what-you-get)
- [Benchmarks](#benchmarks)
- [Installation](#installation)
- [Command line](#command-line)
- [C, C++, Python and JavaScript](#c-c-python-and-javascript)
- [Documentation](#documentation)
- [Stability](#stability) · [Development](#development) · [License](#license)

## Quick start

```sh
cargo add bitwright
```

**Simplify.** Parse or build an expression, run an engine, read the result:

```rust
use bitwright::engine::Engine;
use bitwright::{Context, ParseOptions, Width};

fn main() -> Result<(), bitwright::Error> {
    let engine = Engine::standard();
    let mut cx = Context::new();
    let o =…
