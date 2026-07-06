---
repo: "paiml/aprender"
name: "aprender"
description: "Next Generation Machine Learning, Statistics and Deep Learning in PURE Rust"
readmeQualityOk: true
url: "https://github.com/paiml/aprender"
homepage: "https://paiml.github.io/aprender/"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [77, 22]
topics: ["deep-learning", "ml", "models", "rust", "statistics", "sovereign-ai", "paiml-monorepo"]
stars: 104
forks: 20
openIssues: 0
closedIssues: 693
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-11-18T09:42:05Z"
lastCommitAt: "2026-07-06T06:32:13Z"
lastReleaseAt: "2025-11-27T16:04:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 39
maintainers: ["noahgift", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/01a30c1a277d585ac0e2fec1782461ee91b7d861321c7b201e6a170619020bc3/paiml/aprender"
---

</p>

  </a>
  </a>
  </a>
  </a>
</p>

## Quick Start

```bash
cargo install aprender                    # CPU + wgpu (default)
cargo install aprender --features cuda    # NVIDIA GPU acceleration
cargo install aprender --features full    # everything (training, visualization, zram)

apr pull qwen2.5-coder-1.5b
apr run qwen2.5-coder-1.5b "What is 2+2?"
```

For release notes see [GitHub Releases](https://github.com/paiml/aprender/releases).

## What is Aprender?

A complete ML framework in pure Rust. One `cargo install`, one `apr` binary,
the full model lifecycle — inference, training, quantization, profiling,
publishing — all backed by YAML provable contracts that fail CI on drift.

### At HEAD

| Metric | Count | Source of truth |
|-------:|------:|---|
| Workspace crates | **82** workspace crates | `ls crates/` |
| Provable contracts | **1331** provable contracts | `find contracts/ -name '*.yaml'` |
| CLI commands | **103** CLI commands | `apr --help` |
| Book CLI chapters | **103** chapters | `ls book/src/cli/*.md` (parity with CLI) |
| Book lib chapters | **69** chapters | `ls book/src/lib/*.md` (parity with `pub mod`) |

These numbers are enforced by…
