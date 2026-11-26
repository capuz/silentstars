---
repo: "paiml/aprender"
name: "aprender"
description: "Next Generation Machine Learning, Statistics and Deep Learning in PURE Rust"
readmeQualityOk: true
url: "https://github.com/paiml/aprender"
homepage: "https://paiml.github.io/aprender/"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
topics: ["deep-learning", "ml", "models", "rust", "statistics", "sovereign-ai", "paiml-monorepo"]
stars: 143
forks: 26
openIssues: 65
closedIssues: 3675
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-11-18T09:42:05Z"
lastCommitAt: "2026-11-26T22:32:54Z"
lastReleaseAt: "2025-11-27T16:04:01Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 46
maintainers: ["noahgift", "paiml-fleet[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d023c4b2e882939917e23c02283411224bf8b91acaf0ed9a1982f510560b6cfb/paiml/aprender"
---

---
schema_version: "1.0"
kind: library
entrypoints: [crates/aprender-contracts-cli]
contract_count: 1837
---

## Quick Start

Pre-built and ready to use (Linux x86_64/aarch64 only today — other platforms fall
through to `cargo install` below):

```text
curl -LsSf https://paiml.com/apr/install.sh | sh
```

To read the script before it runs, download it with `curl -LsSf https://paiml.com/apr/install.sh -o install.sh`, review it, then run `sh install.sh`. The installer is POSIX `sh` and checks the downloaded release archive against its published `.sha256` before installing.

Compile and build:

```text
cargo install aprender                    # CPU ONLY - no GPU backend is compiled in
cargo install aprender --features cuda    # NVIDIA GPU acceleration
cargo install aprender --features full    # everything (training, visualization, zram)
apr pull hf://Qwen/Qwen2.5-Coder-0.5B-Instruct
apr list
apr run ~/.cache/pacha/models/1e3be9285aea6923.safetensors "2+2?"
```

full log of output
