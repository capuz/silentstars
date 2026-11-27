---
repo: "SergioHC95/Holographic-Entropy-Cone"
name: "Holographic-Entropy-Cone"
description: "Database and tooling for extremal elements of the Holographic Entropy Cone (HEC)"
readmeQualityOk: true
url: "https://github.com/SergioHC95/Holographic-Entropy-Cone"
homepage: "https://arxiv.org/abs/1903.09148"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-10T15:52:42Z"
lastCommitAt: "2026-11-27T16:25:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 75
maintainers: ["SergioHC95"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3975e01a02d2164d875bc18a8677d546d2d7286112c0ae8b810257bf6674328/SergioHC95/Holographic-Entropy-Cone"
---

# Holographic Entropy Cone

Exact facet inequalities, extreme rays, graph realizations and contraction
proofs for the holographic entropy cones. The facet and ray catalogues are
complete for $n\leq5$; the six-party catalogues are partial.

## Setup and checks

Python dependencies are locked in `uv.lock`. Native exact verification needs
GCC/Clang-compatible C++17 with unsigned 128-bit integers. CI covers Ubuntu 24.04
(x86-64) and macOS 26 (ARM64).

```bash
uv sync --locked --dev --python 3.13.14
uv run hec native build --directory .hec-native
export HEC_NATIVE_DIR="$PWD/.hec-native"
export HEC_CHECK_WORKERS=4
export HEC_RECONSTRUCTION_WORKING_BYTES=268435456

uv run hec storage audit
uv run hec storage history
uv run hec check database --root data
uv run hec check facets --root data
uv run hec check rays --root data
uv run hec check graphs --root data
uv run python -m unittest discover -s tests
uv run ruff check .
```
