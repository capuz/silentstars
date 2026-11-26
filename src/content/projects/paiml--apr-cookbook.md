---
repo: "paiml/apr-cookbook"
name: "apr-cookbook"
description: "Examples of .apr format models"
readmeQualityOk: true
url: "https://github.com/paiml/apr-cookbook"
homepage: "https://paiml.github.io/apr-cookbook/"
language: "Rust"
languages: ["Rust"]
languagePcts: [59]
topics: ["data", "llm", "machine", "machinelearning", "ml", "models", "rust", "science", "slm", "machinelearning-rust"]
stars: 5
forks: 3
openIssues: 28
closedIssues: 207
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-12-02T14:09:44Z"
lastCommitAt: "2026-11-26T22:36:12Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 79
undervaluedScore: 61
maintainers: ["noahgift", "paiml-fleet[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c648cf07d092cade89696c2e20f20db7b19d0084639d12b4dbc2b730e86346ab/paiml/apr-cookbook"
---

---

## What is apr-cookbook?

341 executable examples across 25 categories covering the full ML
model lifecycle in pure Rust: creation, bundling, format conversion,
training, optimization, inference, serving, monitoring, and deployment
-- all built on the APR v2 model format with LZ4/ZSTD compression,
Int4/Int8 quantization, and Ed25519 signatures.

Every example compiles, runs, and includes unit tests. Device fallback
is automatic: GPU -> SIMD -> Scalar.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Examples](#examples)
- [APR v2 Format](#apr-v2-format)
- [Quality](#quality)
- [Sovereign AI Stack](#sovereign-ai-stack)
- [Live Demos](#live-demos)
- [Documentation](#documentation)
- [License](#license)

## Installation

```bash
git clone https://github.com/paiml/apr-cookbook.git
cd apr-cookbook
cargo build --examples
cargo test --all-features
```

Requires Rust 1.89+ (`rustup update stable`).
