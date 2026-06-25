---
repo: "Dicklesworthstone/franken_numpy"
name: "franken_numpy"
description: "Memory-safe clean-room Rust reimplementation of NumPy with strict/hardened compatibility modes, deterministic stride calculus, differential conformance harnesses, and RaptorQ durability artifacts."
url: "https://github.com/Dicklesworthstone/franken_numpy"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [45, 33]
topics: ["array-programming", "clean-room", "conformance-testing", "memory-safety", "numerical-computing", "numpy", "raptorq", "rust", "broadcasting", "ndarray"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-13T20:13:41Z"
lastCommitAt: "2026-06-25T02:07:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 48
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1157432826/4abee3bf-d0e4-4300-ae4e-e78e87696777"
---

# FrankenNumPy

  **A memory-safe, clean-room reimplementation of NumPy in Rust.**<br>
  100% of `numpy.__all__` (499/499) is reachable as `fnp_python.<name>`, structurally locked by a conformance test that fails CI on regression. Zero hand-written `unsafe` blocks across all 10 implementation crates (9 declare `#![forbid(unsafe_code)]`; `fnp-python` is opt-out only because PyO3 macros may expand to unsafe). 6,392 tests. Bit-exact PCG64DXSM RNG parity for explicit seeds; no-seed constructors source OS entropy like NumPy.

  ![Rust](https://img.shields.io/badge/Rust-nightly%202026--02--20-orange)
  ![Edition](https://img.shields.io/badge/edition-2024-blue)
  ![Tests](https://img.shields.io/badge/tests-6%2C392%20passing-brightgreen)
  ![Surface](https://img.shields.io/badge/numpy.__all__-499%2F499%20(100%25)-brightgreen)
  ![Unsafe](https://img.shields.io/badge/unsafe-0%20blocks-blue)
  ![CI Gates](https://img.shields.io/badge/CI%20gates-G1%E2%80%93G8-blueviolet)
  ![License](https://img.shields.io/badge/license-MIT%2BRider-green)
</div>

---

## Table of Contents

- [The Problem](#the-problem) · [The Solution](#the-solution) · [Who This Is For](#who-this-is-for) · [Why…
