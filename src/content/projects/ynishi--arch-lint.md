---
repo: "ynishi/arch-lint"
name: "arch-lint"
description: "Architecture linter for Rust: TOML-declared layer, scope and dependency rules, enforced in cargo test and CI"
readmeQualityOk: true
url: "https://github.com/ynishi/arch-lint"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["architecture", "cargo-subcommand", "clean-architecture", "linter", "rust", "static-analysis", "syn", "tree-sitter"]
stars: 7
forks: 0
openIssues: 6
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-14T06:56:45Z"
lastCommitAt: "2026-10-11T10:12:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 55
maintainers: ["ynishi"]
openGraphImageUrl: "https://opengraph.githubassets.com/3051d81087885b06593e5792397a74b2251f72fab4a50bbfd185b5592dd0bcdb/ynishi/arch-lint"
---

# arch-lint

Architecture linter for Rust projects and cross-language layer enforcement.

## What it is

arch-lint catches the architectural mistake a PR review already caught once,
every time it happens again. Declare layering, scope, and dependency rules
in `arch-lint.toml` — no Rust code required — or write a custom `Rule` when
TOML is not enough. Rules run inside `cargo test` via `arch_lint::check!()`,
from the `cargo arch-lint` CLI, or embedded through the `Session` SDK. A
dual engine covers Rust (`syn`) today and other languages (Tree-sitter,
Kotlin first) for cross-language layering.

## Install

- **CLI**: `cargo install --locked arch-lint-cli` — installs both `arch-lint`
  and `cargo-arch-lint` (so `cargo arch-lint ...` works too).
- **`cargo test` route**: `cargo add --dev arch-lint`, then add
  `arch_lint::check!();` to a test file (see Quick Start below).
- **Prebuilt binaries / `cargo binstall`**: not yet — tracked in #14.

## Quick Start (30 seconds)

```bash
cargo add --dev arch-lint
```

```rust
// tests/architecture.rs
arch_lint::check!();  // expands to a #[test] function
```

```bash
cargo install --locked arch-lint-cli
cargo arch-lint init
```

This creates…
