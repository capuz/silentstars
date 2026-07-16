---
repo: "star-ga/mind"
name: "mind"
description: "The native language for intelligent systems - Machine Intelligence Native Design"
readmeQualityOk: true
url: "https://github.com/star-ga/mind"
homepage: "https://mindlang.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["ai-language", "autodiff", "compiler", "deep-learning", "gpu-computing", "machine-learning", "mlir", "parallel-computing", "programming-language", "systems-programming"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-06T12:20:01Z"
lastCommitAt: "2026-07-16T05:58:09Z"
lastReleaseAt: "2026-02-07T09:24:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 68
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/73f1c748489282bcfc2df2b7b1e39e4107baea44e92bc802628118344efbfc6d/star-ga/mind"
discussionCount: 6
---

</p>

# MIND — Machine Intelligence Native Design

## Install

```sh
curl -sSL https://mindlang.dev/install.sh | sh
```

Pre-built binaries for Linux, macOS, and Windows — no Rust toolchain required.
See [`docs/install.md`](https://github.com/star-ga/mind/blob/HEAD/docs/install.md) for all install options including manual download, checksum verification, and build from source.

## Overview

**MIND** is a deterministic compiler: its deterministic-integer and Q16.16 fixed-point lowering produces output that is bit-identical across CPU substrates (x86-`avx2` == ARM-`neon`), with a signed evidence chain embedded in the artifact itself. Scalar IEEE-754 `float64` now compiles on the strict deterministic path — run-to-run bit-identical, and verified byte-identical across x86_64 (`avx2`) and ARM64 (`neon`) on real hardware (2026-07-05). Vector-reduction, transcendental, and GPU float determinism are on the roadmap.

It is also a Rust-first language and runtime for building intelligent systems with auditable foundations. It blends declarative tensor algebra, static shape inference, automatic differentiation, and MLIR/LLVM lowering in a compact toolchain that scales from research prototypes…
