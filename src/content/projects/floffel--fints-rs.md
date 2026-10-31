---
repo: "floffel/fints-rs"
name: "fints-rs"
description: "Native Rust FinTS 3.0 PinTan client for German online banking"
readmeQualityOk: true
url: "https://github.com/floffel/fints-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 7
forks: 9
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-06T17:55:57Z"
lastCommitAt: "2026-10-31T09:53:57Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 57
undervaluedScore: 28
maintainers: ["floffel"]
openGraphImageUrl: "https://opengraph.githubassets.com/0381db3fc3127446e4b1c152b2377cf0aca46b68ebd3130f9704a370495e43fc/floffel/fints-rs"
---

# fints-rs

A pure Rust implementation of the **FinTS 3.0** (formerly HBCI) banking protocol for German online banking.

## Features

- Full FinTS 3.0 PinTan implementation (two-step and decoupled TAN)
- Typestate protocol layer — invalid dialog state transitions are **compile-time errors**
- Bank-specific workflows (DKB, generic FinTS banks)
- Built-in registry of 1700+ German banks with FinTS endpoints (updated 20.05.2026)
- Account balance, transaction history (MT940), and securities/depot holdings
- CLI client for interactive banking from the terminal
- Mock server for integration testing
- Debug & audit tooling for protocol inspection

## Installation

### As a library

Add to your `Cargo.toml`:

```toml
[dependencies]
fints-rs = "0.2"
```

The crate is published as `fints-rs` on crates.io but the library name is `fints`, so all imports use `use fints::...`.

### CLI client

```bash
cargo install fints-rs --features cli
```

This installs the `fints-client` binary.

## Library Usage

### Quick start — DKB

```rust
use fints::{dkb, Account, UserId, Pin, ProductId};

#[tokio::main]
async fn main() -> fints::Result<()> {
    // Step 1: Connect and get TAN challenge
    let…
