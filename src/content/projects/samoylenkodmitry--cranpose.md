---
repo: "samoylenkodmitry/Cranpose"
name: "Cranpose"
description: "Cranpose is a Jetpack Compose-inspired declarative Rust UI framework. https://crates.io/crates/cranpose"
readmeQualityOk: true
url: "https://github.com/samoylenkodmitry/Cranpose"
homepage: "https://samoylenkodmitry.github.io/Cranpose"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["jetpack-compose", "rust", "ui-framework"]
stars: 17
forks: 2
openIssues: 2
closedIssues: 38
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2025-10-08T07:46:35Z"
lastCommitAt: "2026-08-15T04:05:15Z"
lastReleaseAt: "2026-07-28T14:45:29Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 70
maintainers: ["samoylenkodmitry", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/88c6e6b5e1d142c8e93d6d35706313fa337d3cb7fe56b5c5c45445eae42fa347/samoylenkodmitry/Cranpose"
---

# Cranpose

Cranpose is a declarative UI framework for Rust, modelled on Jetpack Compose:
`#[composable]` functions, a slot-table runtime with fine-grained recomposition,
snapshot state, and a modifier-chain layout system. One Rust codebase targets
**desktop** (Linux, macOS, Windows), **Android** (including Wear OS),
**iOS**, and the **web** through WebAssembly, rendering through wgpu on all of
them.

**[Try the web demo in your browser](https://samoylenkodmitry.github.io/Cranpose/)** ·
[Releases](https://github.com/samoylenkodmitry/Cranpose/releases) ·
[crates.io](https://crates.io/crates/cranpose)

[v0.0.40.webm](https://github.com/user-attachments/assets/df50209b-abfd-426a-b79c-a51a9543b385)

> Pre-alpha. The API changes without deprecation cycles, and versions are not
> compatible with each other.

## Quick start

[`apps/isolated-demo`](https://github.com/samoylenkodmitry/Cranpose/blob/HEAD/apps/isolated-demo) is a complete starter project that
depends only on published crates — copy it rather than starting from scratch.

```bash
git clone https://github.com/samoylenkodmitry/cranpose.git
cd cranpose/apps/isolated-demo
cargo run --features desktop,renderer-wgpu
```

Or add the…
