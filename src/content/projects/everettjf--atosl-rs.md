---
repo: "everettjf/atosl-rs"
name: "atosl-rs"
description: "🦀️atos for linux by rust - A partial replacement for Apple's atos tool for converting addresses within a binary file to symbols."
readmeQualityOk: true
url: "https://github.com/everettjf/atosl-rs"
homepage: "https://everettjf.github.io/atosl-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["apple", "atos", "cli", "dsym", "ios", "macho", "macos", "rust", "rust-lang", "symbolization"]
stars: 88
forks: 20
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-12-31T23:40:41Z"
lastCommitAt: "2026-07-15T05:53:44Z"
lastReleaseAt: "2026-03-20T15:14:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 51
maintainers: ["everettjf", "claude", "nemzutkovic"]
openGraphImageUrl: "https://opengraph.githubassets.com/04b2891b4fee02f2196420b733824e9f2458477e9174f0e416a88d7c880fd3af/everettjf/atosl-rs"
---

# atosl-rs

*Read this in other languages: [简体中文](https://github.com/everettjf/atosl-rs/blob/HEAD/README.zh-CN.md).*

`atosl` is a Rust CLI and library for local symbolication. It resolves raw binary addresses into function names and source locations using DWARF when available and falls back to symbol tables when debug info is missing.

It is designed for cross-platform tooling, CI pipelines, crash-processing utilities, and developer workflows that need `atos`-style symbolication without depending on Apple's host environment.

📖 **Full documentation and tutorials:** <https://everettjf.github.io/atosl-rs/> (the source lives in [`docs/`](https://github.com/everettjf/atosl-rs/blob/HEAD/docs/)).

## Why this exists

Apple's `atos` is useful, but it is tightly coupled to Apple's runtime environment. `atosl` focuses on the parts teams usually need in build systems and tooling:

- A single local binary and embeddable Rust API
- Script-friendly output in `text`, `json`, `json-pretty`, and streaming `json-lines`
- DWARF-first resolution with symbol-table fallback
- Fat Mach-O slice selection by architecture or UUID
- Reproducible regression coverage for Apple-specific behavior

## Current…
