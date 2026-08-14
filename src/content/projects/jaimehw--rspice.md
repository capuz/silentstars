---
repo: "JaimeHW/RSpice"
name: "RSpice"
description: "Modern Analog and Mixed-Signal Electronic Circuit Simulator that runs on on the desktop and in the browser"
readmeQualityOk: true
url: "https://github.com/JaimeHW/RSpice"
homepage: "https://rspice.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["circuit", "circuits", "electrical-engineering", "electronics", "hardware", "rust", "simulation", "simulator", "engineering", "eda"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-16T23:25:33Z"
lastCommitAt: "2026-08-14T05:16:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 45
maintainers: ["MikeyPar", "JaimeHW"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bdad2a2690dfa9ee317e0246da8d53164fee8feaf4406533112300dd6597be9/JaimeHW/RSpice"
---

# RSpice

**An analog and mixed-signal circuit simulator written in Rust.**

SPICE netlists, measured continuously against ngspice and Xyce, with a CLI, a
desktop IDE, Python and WebAssembly bindings, and a Verilog-A compiler.

[Quick start](#quick-start) · [Analyses](#analyses) · [Devices](#devices) ·
[Dialect](#netlist-dialect) · [Interfaces](#interfaces) ·
[Validation](#validation) · [Status](#status)

</div>

---

RSpice assembles modified-nodal-analysis systems and solves them with a damped
Newton iteration — merit-based line search, gmin and source stepping,
pseudo-transient and arc-length continuation — under an adaptive-timestep
transient loop with local-truncation-error control. Real-valued factorization
uses an in-tree KLU-class sparse solver whose stored pivots make refactorization
on a frozen sparsity pattern cheap; [faer](https://crates.io/crates/faer) backs
the complex solves for AC-family analyses.

Where physics is unported, RSpice raises a typed error naming the parameter or
mode selector rather than falling back to an approximation. A model card that
would silently produce plausible but wrong currents fails closed instead.

## Quick start

The toolchain is pinned…
