---
repo: "QuEraComputing/tsim"
name: "tsim"
description: "Fast universal quantum circuit sampler for QEC"
readmeQualityOk: true
url: "https://github.com/QuEraComputing/tsim"
homepage: "https://tsim.mintlify.app/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "quantum", "quantum-circuit", "quantum-error-correction", "quantum-simulation", "simulation", "quera-computing", "stabilizer-rank-decomposition"]
stars: 130
forks: 40
openIssues: 8
closedIssues: 54
watchers: 1
contributors: 17
recentReleases: 0
createdAt: "2025-11-07T15:59:41Z"
lastCommitAt: "2026-11-04T08:03:59Z"
lastReleaseAt: "2026-07-21T22:17:23Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 46
maintainers: ["rafaelha", "dependabot[bot]", "shalini9894"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d9adcfee9ccc77d44d41b85fc1934ce6767f84d59ab306c33dea31fcfba6d61/QuEraComputing/tsim"
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

The default sampling strategy runs on the CPU. To run the stabilizer-rank strategies on an NVIDIA GPU,
install the JAX CUDA extra:
```bash
pip install "bloqade-tsim[cuda13]"   # or bloqade-tsim[cuda12]
```

## Quick Start
An introductory tutorial is available [here](https://github.com/QuEraComputing/tsim/blob/HEAD/docs/demos/encoding_demo.ipynb). Please also refer to the [documentation](https://tsim.mintlify.app/).

For many existing scripts, replacing `stim` with `tsim` should just work. Tsim mirrors the Stim API and supports all [Stim instructions](https://github.com/quantumlib/Stim/wiki/Stim-v1.13-Gate-Reference), plus the [non-Clifford instructions](#supported-instructions) listed below.

```python
import tsim

c = tsim.Circuit(
    """
    RX 0
    R…
