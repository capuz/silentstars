---
repo: "shadow3aaa/DaatLocus"
name: "DaatLocus"
description: "An agent runtime."
url: "https://github.com/shadow3aaa/DaatLocus"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["agent", "agent-framework", "ai", "ai-agent", "llm", "daat-locus"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-03-10T15:08:35Z"
lastCommitAt: "2026-06-27T06:22:41Z"
lastReleaseAt: "2026-06-21T16:06:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["shadow3aaa", "logic10492"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5d0f74f96ce50d02d6a3feed9ca96172bc30af3ae38324043d6ff03d1354122/shadow3aaa/DaatLocus"
---

# Daat Locus

</p>

</div>

[readme-cn-badge]: https://img.shields.io/badge/README-简体中文-blue.svg?style=for-the-badge
[readme-cn-url]: README_zh-CN.md
[crates-badge]: https://img.shields.io/crates/v/daat-locus?style=for-the-badge
[crates-url]: https://crates.io/crates/daat-locus
[ci-badge]: https://img.shields.io/github/actions/workflow/status/shadow3aaa/DaatLocus/ci.yml?style=for-the-badge&label=CI
[ci-url]: https://github.com/shadow3aaa/DaatLocus/actions/workflows/ci.yml
[license-badge]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge
[license-url]: LICENSE

## What Is This?

Daat Locus is a long-running local agent runtime.

## Quick Start

The recommended install path is `cargo-binstall`, which installs the prebuilt
GitHub Release binary for your platform.

For now daat-locus is only tested on Windows and MacOS, but Linux should work as well.

```bash
cargo install cargo-binstall
cargo binstall daat-locus

# OR use cargo install directly, which builds from source and requires Bun
cargo install

daat-locus
```

On first launch, Daat Locus opens an interactive setup flow.

### Source Builds

Source builds require Bun because `build.rs` builds and…
