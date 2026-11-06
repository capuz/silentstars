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
stars: 59
forks: 1
openIssues: 320
closedIssues: 1827
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-01-24T03:12:01Z"
lastCommitAt: "2026-11-06T02:17:16Z"
lastReleaseAt: "2026-10-30T10:13:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 47
maintainers: ["mizzy"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc76765412458ac6e2150ea830ddfbb0181e896ca078ee76378d9fba1df77665/carina-rs/carina"
---

# Carina

**Carina** represents the keel of *Argo Navis*:
the structural backbone that quietly supports everything above it.

> [!CAUTION]
> This is an experimental project. The DSL syntax, APIs, and features are subject to change without notice.

A strongly typed infrastructure management tool written in Rust.

## Features

- **Custom DSL**: Simple, expressive syntax for defining infrastructure
- **Effects as Values**: Side effects are represented as data structures, not immediately executed
- **Strong Typing**: Catch configuration errors during validation against provider schemas
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
