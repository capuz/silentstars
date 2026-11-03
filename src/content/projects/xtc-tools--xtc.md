---
repo: "xtc-tools/xtc"
name: "xtc"
description: "XTC is a domain specific dataflow graph compiler featuring operational DSL, scheduling DSL, multiple backends and autotuning."
readmeQualityOk: true
url: "https://github.com/xtc-tools/xtc"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 11
forks: 11
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 8
recentReleases: 3
createdAt: "2025-12-24T10:09:46Z"
lastCommitAt: "2026-11-03T11:14:44Z"
lastReleaseAt: "2026-09-17T15:56:13Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 78
maintainers: ["guillon", "liamsemeria", "yadej"]
openGraphImageUrl: "https://opengraph.githubassets.com/97d3eb02b70079c41ece86c47e35c5af51339679416dee2faa0c50a6ba2e894b/xtc-tools/xtc"
---

# XTC

## Links

Refer to documentation at https://xtc-tools.github.io/xtc

Refer to tutorials [here](https://github.com/xtc-tools/xtc/blob/HEAD/docs/tutorials) and to additionnal developers documentation [here](https://github.com/xtc-tools/xtc/blob/HEAD/docs/develop).

## Overview

XTC is a domain-specific dataflow graph compiler for linear algebra operations. It provides:
- **Operational DSL**: Define computation graphs with tensors and operators
- **Scheduling DSL**: High-level transformations (tiling, parallelization, vectorization, etc.)
- **Multiple backends**: MLIR (linalg + transform), TVM (Tensor IR), JIR (INRIA internal)
- **Autotuning**: Definition and exploration of the optimization space

## Build & Development

### Installation

If needed, install uv following the instructions [here](https://docs.astral.sh/uv/).

Debian-like x86_64 or aarch64 Linux distributions (Python: 3.10 to 3.14 inclusive):
```bash
sudo apt install python3 python3-dev build-essential libomp5 binutils binutils-aarch64-linux-gnu binutils-x86-64-linux-gnu
sudo apt install libpfm4-dev # Optional: interface to Linux perf counters
sudo sysctl kernel.perf_event_paranoid=1 # Optional: give access to…
