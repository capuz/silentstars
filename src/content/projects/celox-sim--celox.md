---
repo: "celox-sim/celox"
name: "celox"
description: "Celox HDL Simulator"
readmeQualityOk: true
url: "https://github.com/celox-sim/celox"
homepage: "https://celox-sim.github.io/celox/"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
stars: 10
forks: 1
openIssues: 76
closedIssues: 164
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-28T11:52:19Z"
lastCommitAt: "2026-10-25T09:00:43Z"
lastReleaseAt: "2026-03-02T18:23:44Z"
status: "thriving"
tags: []
healthScore: 93
undervaluedScore: 57
maintainers: ["tignear", "mergify[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c82a4e1fc1225fbf9642835953322f69ceda22d42497668830c69110a1dc36b5/celox-sim/celox"
---

# Celox

**A compiler-based RTL simulator for [Veryl](https://veryl-lang.org/) and a
synthesizable subset of SystemVerilog.**

Celox compiles an elaborated Veryl design into executable simulation kernels and
exposes the design through a type-safe TypeScript API. The same kernels can be
built from synthesizable SystemVerilog through the Rust API (see
[SystemVerilog support](https://celox-sim.github.io/celox/guide/systemverilog)). It is both a practical
way to test RTL with Vitest and an open testbed for exploring how RTL simulators
should be structured.

[Try the Playground](https://celox-sim.github.io/celox/playground/) ·
[Read the guide](https://celox-sim.github.io/celox/guide/introduction) ·
[Use the starter template](https://github.com/celox-sim/celox-template) ·
[Browse the API](https://celox-sim.github.io/celox/api/)

## Why Celox exists

Celox explores a simple question: what does a modern RTL simulator architecture
look like when compilation, scheduling, state representation, code generation,
and testbench integration are designed together?

The project makes those boundaries explicit:

- Veryl-specific analysis ends at a source-independent design representation.
-…
