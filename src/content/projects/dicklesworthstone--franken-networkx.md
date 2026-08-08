---
repo: "Dicklesworthstone/franken_networkx"
name: "franken_networkx"
description: "Memory-safe clean-room Rust reimplementation of NetworkX with deterministic graph semantics, differential conformance, and RaptorQ-backed durability."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_networkx"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [66, 33]
topics: ["benchmarking", "clean-room", "conformance-testing", "deterministic", "graph-algorithms", "memory-safe", "networkx", "raptorq", "rust", "differential-testing"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2026-02-13T20:09:55Z"
lastCommitAt: "2026-08-08T04:34:10Z"
lastReleaseAt: "2026-06-21T08:25:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1157430632/f989a09f-e18b-4db2-b65a-3f835c0accd8"
---

# FrankenNetworkX

</div>

</div>

**FrankenNetworkX is a Rust-backed NetworkX-compatible graph library with a measured, incomplete drop-in surface.** Use it as a standalone library with the familiar NetworkX API, or wire it in as a `networkx>=3.0` backend so supported calls dispatch into Rust without call-site changes.

```bash
pip install franken-networkx
```

No Rust toolchain required. Pre-built wheels are provided for Linux, macOS, and Windows (Python 3.10+, ABI3).

---

## TL;DR

### The Problem

NetworkX is the canonical Python graph library: rich, correct, comprehensive, and slow on anything that isn't toy-sized. Its pure-Python adjacency, Python-level inner loops, and per-call dict bookkeeping turn graph analytics over even modest graphs (10⁵–10⁶ nodes) into multi-minute affairs. Most "alternatives" pay for speed in compatibility: they expose a different API, change tie-break behavior, lose attribute fidelity, or drop entire algorithm families.

### The Solution

FrankenNetworkX is a Rust port of NetworkX that treats **observable behavior** as a hard constraint. Graph mutation semantics, iteration order, tie-break choices, exception classes, error message wording, and…
