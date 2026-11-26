---
repo: "paiml/forjar"
name: "forjar"
description: "Rust-native Infrastructure as Code — bare-metal first, BLAKE3 content-addressed state, deterministic provisioning"
readmeQualityOk: true
url: "https://github.com/paiml/forjar"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["paiml-active-tool"]
stars: 12
forks: 2
openIssues: 47
closedIssues: 616
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-16T14:59:10Z"
lastCommitAt: "2026-11-26T22:34:16Z"
lastReleaseAt: "2026-06-12T22:06:19Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 61
maintainers: ["noahgift", "paiml-fleet[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b94b64fe4ea445414672124d0acad71cfa3ace636aadf38d6e4a9a60710292a/paiml/forjar"
---

---

## Table of Contents

- [Features](#features)
- [Cargo features](#cargo-features)
- [Why Forjar](#why-forjar)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Content-Addressed Store](#content-addressed-store)
- [How It Works](#how-it-works)
- [Benchmarks](#benchmarks)
- [Falsifiable Claims](#falsifiable-claims)
- [Testing](#testing)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

---

**Latest: v1.6.1 — on [crates.io](https://crates.io/crates/forjar).** Install via `cargo install forjar`, a prebuilt binary, or from source.

Forjar is a single-binary IaC tool written in Rust. It manages bare-metal machines over SSH using YAML configs, BLAKE3 content-addressed state, and deterministic DAG execution. No cloud APIs, no runtime dependencies, no remote state backends.

```
forjar.yaml  →  parse  →  resolve DAG  →  plan  →  codegen  →  execute  →  BLAKE3 lock
```
