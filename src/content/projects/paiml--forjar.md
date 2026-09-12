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
stars: 6
forks: 1
openIssues: 22
closedIssues: 228
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-16T14:59:10Z"
lastCommitAt: "2026-09-12T08:04:33Z"
lastReleaseAt: "2026-06-12T22:06:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 58
maintainers: ["noahgift"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c8489c885a8497fe90e146fe3e5877acdba5ca1605016d049a339059c1724bc/paiml/forjar"
---

</p>

</p>

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

## Features

- Declarative YAML-based infrastructure provisioning
- Incremental builds — content-hash staleness over declared `task_inputs`/`output_artifacts`, `forjar make <goal>` for make-style prerequisite closure, and `forjar import-makefile` to…
