---
repo: "JaimeHW/RSpice"
name: "RSpice"
description: "Modern Analog and Mixed-Signal Electronic Circuit Simulator that runs on on the desktop and in the browser https://rspice.app"
url: "https://github.com/JaimeHW/RSpice"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["circuit", "circuits", "electrical-engineering", "electronics", "hardware", "rust", "simulation", "simulator", "engineering", "eda"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-16T23:25:33Z"
lastCommitAt: "2026-06-27T00:36:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["JaimeHW"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee855f1b79e17fdae5fafa4a55eabc0b7d2ddf296a22a232e18129a847b985fc/JaimeHW/RSpice"
---

# RSpice

**An analog circuit simulator written in Rust.**

SPICE-compatible netlists, validated against ngspice — with a CLI, a desktop UI,
Python and WebAssembly bindings, and a Verilog-A compiler.

</div>

## Overview

RSpice simulates analog and mixed-signal circuits described as SPICE netlists. The engine assembles modified-nodal-analysis systems and solves them with a damped Newton iteration — merit-based line search, gmin and source stepping, pseudo-transient continuation — under an adaptive-timestep transient loop with local-truncation-error control. The real-valued path defaults to an in-tree KLU-class sparse solver, while [faer](https://crates.io/crates/faer) backs complex/AC-family sparse solves; AC sweeps and Monte Carlo runs parallelize across cores with rayon, and the hottest device-evaluation paths have optional SIMD batch implementations.

Around the engine sit a CLI built for batch runs and CI, a desktop application for schematic capture and waveform inspection, and Python and WebAssembly bindings; a Verilog-A compiler brings behavioral models to the runtimes where that pipeline is enabled.

## Status

RSpice is a young project under active development. The…
