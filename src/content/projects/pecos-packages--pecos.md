---
repo: "PECOS-packages/PECOS"
name: "PECOS"
description: "Software for exploring, developing, and evaluating quantum error-correction protocols."
url: "https://github.com/PECOS-packages/PECOS"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [72, 21]
topics: ["error-modeling", "nisq", "python", "qec", "quantum", "quantum-computer-simulator", "quantum-computing", "quantum-error-correction", "quantum-programming", "quantum-programming-language"]
stars: 56
forks: 11
openIssues: 21
closedIssues: 37
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2018-09-29T18:29:15Z"
lastCommitAt: "2026-06-28T06:55:02Z"
lastReleaseAt: "2024-02-01T19:47:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 50
maintainers: ["ciaranra", "dependabot[bot]", "qartik"]
openGraphImageUrl: "https://opengraph.githubassets.com/e90d4d2ff8998712c21637d431031045381d8a9c87e996dc81636557dda1ba1a/PECOS-packages/PECOS"
---

# 

[Installation](#installation) · [Quick Example](#quick-example) · [Documentation](#documentation) · [Rust](#for-rust-users) · [Citing](#citing)

**PECOS** (Performance Estimator of Codes On Surfaces) is a framework/library for exploring, developing, and evaluating quantum error correction protocols and hybrid quantum-classical programs.

Quantum error correcting since 2014. Fast simulators, from stabilizer to GPU. User-friendly Python API. Blazingly fast Rust core. Supported by Quantinuum.

## Installation

**Python:**
```bash
pip install quantum-pecos
```

**Rust:** Add to your `Cargo.toml`:
```toml
pecos = { version = "0.1", features = ["qasm"] }
```

For Julia or optional features (LLVM, CUDA), see the [Getting Started Guide](docs/user-guide/getting-started.md).

## Quick Example

Simulate a distance-3 repetition code with syndrome extraction using [Guppy](https://github.com/CQCL/guppylang), a pythonic quantum programming language:

```python
from pecos import Guppy, sim, state_vector, depolarizing_noise
from guppylang import guppy
from guppylang.std.quantum import qubit, cx, measure
from guppylang.std.builtins import array, result

@guppy
def repetition_code() -> None:…
