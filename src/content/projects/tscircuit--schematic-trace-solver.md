---
repo: "tscircuit/schematic-trace-solver"
name: "schematic-trace-solver"
description: "A schematic trace routing and net label placement algorithm with Minimum Spanning Tree"
readmeQualityOk: true
url: "https://github.com/tscircuit/schematic-trace-solver"
homepage: "https://schematic-trace-solver.vercel.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["tscircuit"]
stars: 13
forks: 310
openIssues: 42
closedIssues: 31
watchers: 2
contributors: 18
recentReleases: 0
createdAt: "2025-08-23T21:17:52Z"
lastCommitAt: "2026-09-07T08:34:46Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 77
undervaluedScore: 76
maintainers: ["actions-user", "mohan-bee", "MustafaMulla29"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6dca1f75ced2be513b86dd2b34c1d99dd9c05dd382b89e59316c9e2f9b10e5b/tscircuit/schematic-trace-solver"
---

# Schematic Trace Solver

Solve for the correct positions and routing for schematic traces and net labels. For use inside [@tscircuit/core](https://github.com/tscircuit/core)

[Online Playground](https://schematic-trace-solver.vercel.app) ・ [tscircuit](https://github.com/tscircuit/tscircuit) ・ [@tscircuit/core](https://github.com/tscircuit/core)

## Overview

The Schematic Trace Solver is a pipeline that figures out how to route schematic traces
and place net labels for a given schematic layout.

Chips are defined by their center point, width, and height and pins.

You then pass in direct connections and net connections. Direct connections are
explicit pin-to-pin connections. When there's a direct connection between two
pins, there is guaranteed to be a routed trace between them.

Net connections will not be routed, net labels are placed instead.

The solver first constructs minimum spanning tree to determine what pin-pairs
to draw via the `MspConnectionPairSolver`. If there are two pins A and B that both connect to C, this phase will
determine how to route traces to minimize overlap or crossings. e.g. we may
decide to route a trace from A to B, then B to C OR we may decide to…
