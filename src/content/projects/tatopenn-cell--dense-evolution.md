---
repo: "tatopenn-cell/Dense-Evolution"
name: "Dense-Evolution"
description: " NISQ Quantum Simulation toolkit-  JAX-Native."
readmeQualityOk: true
url: "https://github.com/tatopenn-cell/Dense-Evolution"
homepage: "https://tatopenn-cell.github.io/Dense-Evolution/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["hpc", "jax", "nisq", "python", "quantum-computing", "quantum-simulator", "statevector", "xla", "cuda-acceleration", "cupy"]
stars: 16
forks: 1
openIssues: 3
closedIssues: 12
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-05-22T19:59:53Z"
lastCommitAt: "2026-09-24T08:42:14Z"
lastReleaseAt: "2026-07-20T16:55:01Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 55
maintainers: ["tatopenn-cell", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/94f7946fbc525b5c50e40e5440a85c3ca52bdb78f9848f31134383d9bd6687f5/tatopenn-cell/Dense-Evolution"
discussionCount: 0
---

</p>

**A high-performance quantum simulation toolkit
Statevector/MPS engines with compilation, noise, VQE, QEC, chemistry, and agent-native tooling.**

---

## Table of Contents
- [What It Is](#-what-it-is)
- [Install](#-install)
- [Quick Start](#-quick-start)
- [Key Features](#-key-features)
- [Benchmarks](#-benchmarks)
- [Composer & MCP Server](#-composer--mcp-server)
- [Key Resources](#-key-resources)

## ▍ What It Is

Run up to 28 qubits in about 3 seconds, without crashing. **Dense Evolution** JIT-compiles statevector circuits through JAX XLA, automatically chunks and — past even that RAM ceiling — spills to disk when memory fills up, so a real simulation stays alive instead of OOM-ing.

📖 **[Full documentation, API reference, and worked examples →](https://tatopenn-cell.github.io/Dense-Evolution/)**

A local Streamlit dashboard and web-based Composer editor are also included — see [Composer & MCP Server](#-composer--mcp-server) below.

---

## ▍ Install

```bash
pip install dense-evolution  # JAX is a core dependency, installed by default

# full stack: GPU · dashboard · Qiskit/PennyLane interop
pip install dense-evolution[full]

# just the interop bridge
pip install…
