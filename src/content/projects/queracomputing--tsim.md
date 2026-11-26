---
repo: "QuEraComputing/tsim"
name: "tsim"
description: "Fast universal quantum circuit sampler for QEC"
readmeQualityOk: true
url: "https://github.com/QuEraComputing/tsim"
homepage: "https://bloqade.quera.com/tsim"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "quantum", "quantum-circuit", "quantum-error-correction", "quantum-simulation", "simulation", "quera-computing", "stabilizer-rank-decomposition"]
stars: 138
forks: 41
openIssues: 10
closedIssues: 56
watchers: 1
contributors: 19
recentReleases: 2
createdAt: "2025-11-07T15:59:41Z"
lastCommitAt: "2026-11-26T23:28:46Z"
lastReleaseAt: "2026-11-12T23:13:51Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 50
maintainers: ["rafaelha", "dependabot[bot]", "mehmetniyazikayi"]
openGraphImageUrl: "https://opengraph.githubassets.com/fda0ad279f67c3b885b6f544c31f2053b4c61b7cd5ebaa3c98b331f105754997/QuEraComputing/tsim"
---

# Tsim

A fast sampler for noisy quantum circuits with non-Clifford gates, built on the ZX-calculus.
Tsim feels just like [Stim](https://github.com/quantumlib/Stim), but supports `T` gates, arbitrary rotations, and
other non-Clifford instructions.

## Installation

Tsim requires Python 3.11 or later. Install with pip:
```bash
pip install bloqade-tsim
```

Or with [uv](https://docs.astral.sh/uv/):

```bash
uv add bloqade-tsim
```

The default sampling strategy runs on the CPU, and on the GPU of an Apple-silicon Mac (no extra
needed). To run the stabilizer-rank strategies on an NVIDIA GPU, install the JAX CUDA extra:
```bash
pip install "bloqade-tsim[cuda13]"   # or bloqade-tsim[cuda12]
```
