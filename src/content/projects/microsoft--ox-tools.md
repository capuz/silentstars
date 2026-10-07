---
repo: "microsoft/ox-tools"
name: "ox-tools"
description: "Collection of CI tools for Rust Workflows"
readmeQualityOk: true
url: "https://github.com/microsoft/ox-tools"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 19
forks: 6
openIssues: 2
closedIssues: 16
watchers: 0
contributors: 4264
recentReleases: 4
createdAt: "2026-03-10T18:22:33Z"
lastCommitAt: "2026-10-07T10:30:41Z"
lastReleaseAt: "2026-08-05T15:19:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 57
maintainers: ["martin-kolinek", "Vaiz", "wukchung"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e334e9383bb0c0fe941463dd04a0d7c78df34db01f0a03ee1f18d9cd3a05457/microsoft/ox-tools"
---

# The Oxidizer Tools Project

This repository contains a set of tools  that help you build robust highly scalable services in Rust.

- [Crates](#crates)
- [About this Repo](#about-this-repo)
    - [Adding New Crates](#adding-new-crates)
    - [Publishing Crates](#publishing-crates)
    - [Documenting Crates](#documenting-crates)
    - [CI Workflows](#ci-workflows)
    - [Pull Request Gates](#pull-request-gates)
    - [Tool Versions](#tool-versions)
  - [Trademarks](#trademarks)

## Crates

These are the crates built out of this repo:

- [`cargo-anvil`](https://github.com/microsoft/ox-tools/blob/HEAD/crates/cargo-anvil/README.md) - Opinionated, unified Rust build and cloud-workflow scaffolding for GitHub Actions and Azure DevOps
- [`cargo-aprz`](https://github.com/microsoft/ox-tools/blob/HEAD/crates/cargo-aprz/README.md) - A cargo subcommand that appraises the quality of Rust dependencies
- [`cargo-coverage-gate`](https://github.com/microsoft/ox-tools/blob/HEAD/crates/cargo-coverage-gate/README.md) - A cargo subcommand that gates pull requests on per-package line coverage measured by cargo-llvm-cov
-…
