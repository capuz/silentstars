---
repo: "Dicklesworthstone/franken_numpy"
name: "franken_numpy"
description: "Memory-safe clean-room Rust reimplementation of NumPy with strict/hardened compatibility modes, deterministic stride calculus, differential conformance harnesses, and RaptorQ durability artifacts."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_numpy"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [48, 32]
topics: ["array-programming", "clean-room", "conformance-testing", "memory-safety", "numerical-computing", "numpy", "raptorq", "rust", "broadcasting", "ndarray"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T20:13:41Z"
lastCommitAt: "2026-07-04T22:18:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1157432826/4abee3bf-d0e4-4300-ae4e-e78e87696777"
---

# FrankenNumPy

  **A memory-safe, clean-room reimplementation of NumPy in Rust.**<br>
  100% of `numpy.__all__` (499/499) is reachable as `fnp_python.<name>`, structurally locked by a conformance test that fails CI on regression. Zero hand-written `unsafe` blocks across all 10 implementation crates (9 declare `#![forbid(unsafe_code)]`; `fnp-python` is opt-out only because PyO3 macros may expand to unsafe). 6,392 tests. Bit-exact PCG64DXSM RNG parity for explicit seeds; no-seed constructors source OS entropy like NumPy.

  
  
  
  -brightgreen)
  
  
  
</div>

---

## Table of Contents

- [The Problem](#the-problem) · [The Solution](#the-solution) · [Who This Is For](#who-this-is-for) · [Why FrankenNumPy?](#why-frankennumpy)
- [Quick Example](#quick-example) · [More Worked Examples](#more-worked-examples)
- [Design Philosophy](#design-philosophy) · [Installation](#installation) · [API Surface](#api-surface)
- [Architecture](#architecture) · [Workspace and Crate Map](#workspace-and-crate-map)
- [How It Works: Per-Crate Deep Dive](#how-it-works-per-crate-deep-dive)
  · [Dtype](#dtype-system-fnp-dtype) · [SCE](#stride-calculus-engine-fnp-ndarray) ·…
