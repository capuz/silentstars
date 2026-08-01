---
repo: "celox-sim/celox"
name: "celox"
description: "Celox HDL Simulator"
readmeQualityOk: true
url: "https://github.com/celox-sim/celox"
homepage: "https://celox-sim.github.io/celox/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 10
forks: 1
openIssues: 24
closedIssues: 28
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T11:52:19Z"
lastCommitAt: "2026-08-01T05:59:02Z"
lastReleaseAt: "2026-03-02T18:23:44Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 90
undervaluedScore: 48
maintainers: ["tignear", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d64f93cc8196a809b5c0dd4c0c41edac4bdc7ee1dcadd6f1ad52aca4a47123bf/celox-sim/celox"
---

# Celox

JIT simulator for [Veryl HDL](https://veryl-lang.org/). Celox lowers Veryl
designs to native x86-64 machine code through a custom compiler pipeline.

## Performance

The following numbers are narrow kernel microbenchmarks. They demonstrate that
individual generated kernels can be competitive; they do not establish
whole-design performance:

| Benchmark | Celox (native) | Cranelift JIT | Verilator |
|---|---|---|---|
| counter_n1000 (sequential) | **245 ns/tick** | 395 ns/tick | 392 ns/tick |
| linear_sec_p6 (combinational) | **9.8 ns/eval** | 140 ns/eval | 19 ns/eval |

Celox has not yet produced a fast successful full Linux-boot result on the
pinned Heliodor gate. Project-wide performance remains an open engineering
target and is accepted only when the same-input full run executes the already
generated simulator no slower than synchronous `veryl-cc`. Code-generation
latency is measured separately; compile-only results, partial timing windows,
and projected times are not execution-performance results.

## Features

- **Native x86-64 Backend** — Experimental custom compiler pipeline (SIR → MIR → regalloc → x86-64) with SIR-level optimization (store coalescing,…
