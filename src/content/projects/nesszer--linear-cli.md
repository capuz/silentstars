---
repo: "nesszer/linear-cli"
name: "linear-cli"
description: "A powerful CLI for Linear.app built with Rust"
readmeQualityOk: true
url: "https://github.com/nesszer/linear-cli"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 123
forks: 17
openIssues: 0
closedIssues: 23
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2026-01-01T16:37:25Z"
lastCommitAt: "2026-07-24T06:08:24Z"
lastReleaseAt: "2026-01-16T11:24:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 26
maintainers: ["Finesssee", "hojinyoo", "nikicat"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4d5ed362d1406ebacf270ebb351edf847e0ddfeb01f701ec86ff8ef0b173516/nesszer/linear-cli"
---

# linear-cli

A fast, comprehensive command-line interface for [Linear](https://linear.app) built in Rust. Manage issues, projects, cycles, sprints, documents, and more -- entirely from your terminal.

## Installation

```bash
# Pre-built binary (fastest — no compilation)
cargo binstall linear-cli

# From crates.io (compiles from source)
cargo install linear-cli

# With OS keyring support (Keychain, Credential Manager, Secret Service)
cargo install linear-cli --features secure-storage

# From source
git clone https://github.com/Finesssee/linear-cli.git
cd linear-cli && cargo build --release
```

Pre-built binaries for Linux (x86_64, aarch64), macOS (x86_64, aarch64), and Windows (x86_64) are available at [GitHub Releases](https://github.com/Finesssee/linear-cli/releases). [cargo-binstall](https://github.com/cargo-bins/cargo-binstall) downloads these automatically.

## Updating

```bash
# Recommended: let the CLI update itself
linear-cli update

# Check without installing
linear-cli update --check

# Manual fallback when you want the Cargo path directly
cargo install linear-cli --force

# Manual fallback for keyring-enabled builds
cargo install linear-cli --force --features…
