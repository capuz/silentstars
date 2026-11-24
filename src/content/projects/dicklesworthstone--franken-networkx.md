---
repo: "Dicklesworthstone/franken_networkx"
name: "franken_networkx"
description: "Rust-backed, memory-safe NetworkX-compatible graph library: a pip-installable drop-in surface (or wired in as a networkx>=3.0 backend) with deterministic graph semantics, differential conformance against NetworkX, and RaptorQ-backed durability."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_networkx"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [70, 30]
topics: ["benchmarking", "clean-room", "conformance-testing", "deterministic", "graph-algorithms", "memory-safe", "networkx", "raptorq", "rust", "differential-testing"]
stars: 27
forks: 7
openIssues: 2
closedIssues: 7
watchers: 2
contributors: 2
recentReleases: 3
createdAt: "2026-02-13T20:09:55Z"
lastCommitAt: "2026-11-24T01:54:53Z"
lastReleaseAt: "2026-11-21T16:25:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 57
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1157430632/f989a09f-e18b-4db2-b65a-3f835c0accd8"
---

# FrankenNetworkX

**FrankenNetworkX is a Rust-backed NetworkX-compatible graph library with a measured, incomplete drop-in surface.** Use it as a standalone library with the familiar NetworkX API, or wire it in as a `networkx>=3.0` backend so supported calls dispatch into Rust without call-site changes.

```bash
pip install franken-networkx
```

No Rust toolchain is needed: prebuilt ABI3 wheels are published on PyPI for Linux (`x86_64`, `aarch64`, `musllinux`), macOS (`x86_64`, `arm64`), and Windows (`x86_64`) for Python 3.10+. Source builds remain available for developers modifying Rust internals (see [Development](#development)).

---

## TL;DR

### The Problem

NetworkX is the canonical Python graph library: rich, correct, comprehensive, and slow on anything that isn't toy-sized. Its pure-Python adjacency, Python-level inner loops, and per-call dict bookkeeping turn graph analytics over even modest graphs (10⁵–10⁶ nodes) into multi-minute affairs. Most "alternatives" pay for speed in compatibility: they expose a different API, change tie-break behavior, lose attribute fidelity, or drop entire algorithm families.
