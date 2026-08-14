---
repo: "carina-rs/carina"
name: "carina"
description: "A strongly typed infrastructure management tool"
readmeQualityOk: true
url: "https://github.com/carina-rs/carina"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["aws", "carina", "infrastructure-as-code", "rust"]
stars: 53
forks: 1
openIssues: 314
closedIssues: 1550
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-24T03:12:01Z"
lastCommitAt: "2026-08-14T05:16:49Z"
lastReleaseAt: "2026-04-13T11:39:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 36
maintainers: ["mizzy"]
openGraphImageUrl: "https://opengraph.githubassets.com/27f5cdd0af9b46588d51b3b9c9e69dc231fd654a1d67a9826fa59b312f157b1d/carina-rs/carina"
---

</p>

# Carina

**Carina** represents the keel of *Argo Navis*:
the structural backbone that quietly supports everything above it.

> [!CAUTION]
> This is an experimental project. The DSL syntax, APIs, and features are subject to change without notice.

A strongly typed infrastructure management tool written in Rust.

## Features

- **Custom DSL**: Simple, expressive syntax for defining infrastructure
- **Effects as Values**: Side effects are represented as data structures, not immediately executed
- **Strong Typing**: Catch configuration errors at parse time with schema validation
- **Data Sources**: Reference existing infrastructure without managing its lifecycle
- **Provider Architecture**: Extensible provider system for multi-cloud support
- **Modules**: Reusable infrastructure components with typed inputs/outputs
- **State Management**: Remote state storage with locking (S3 backend)
- **LSP Support**: Editor integration with completion, diagnostics, and syntax highlighting
- **Terraform-like Workflow**: Familiar `validate`, `plan`, `apply`, `destroy` commands

## Installation

```bash
git submodule update --init --recursive  # WIT definitions (carina-plugin-wit)
cargo build…
