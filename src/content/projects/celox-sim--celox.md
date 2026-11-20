---
repo: "celox-sim/celox"
name: "celox"
description: "A compiler-based RTL simulator for Veryl and SystemVerilog."
readmeQualityOk: true
url: "https://github.com/celox-sim/celox"
homepage: "https://celox-sim.github.io/celox/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 10
forks: 1
openIssues: 123
closedIssues: 225
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-28T11:52:19Z"
lastCommitAt: "2026-11-20T12:19:37Z"
lastReleaseAt: "2026-03-02T18:23:44Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 59
maintainers: ["mergify[bot]", "tignear", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b03d89bd3402149897ba2601af125112fc831cc0ce72aa779fd1ff64fae43ab1/celox-sim/celox"
---

# Celox

**A compiler-based RTL simulator for [Veryl](https://veryl-lang.org/) and
SystemVerilog.**

Celox compiles elaborated Veryl and SystemVerilog designs into executable
simulation kernels. Veryl designs are exposed through a type-safe TypeScript
API; SystemVerilog (IEEE 1800-2023), including timed testbenches and designs
mixing both languages, is available through the Rust API (see
[SystemVerilog support](https://celox-sim.github.io/celox/guide/systemverilog)).
It is both a practical way to test RTL with Vitest and an open testbed for
exploring how RTL simulators should be structured.

[Try the Playground](https://celox-sim.github.io/celox/playground/) ·
[Read the guide](https://celox-sim.github.io/celox/guide/introduction) ·
[Use the starter template](https://github.com/celox-sim/celox-template) ·
[Browse the API](https://celox-sim.github.io/celox/api/)

## Why Celox exists

Celox explores a simple question: what does a modern RTL simulator architecture
look like when compilation, scheduling, state representation, code generation,
and testbench integration are designed together?

The project makes those boundaries explicit:
