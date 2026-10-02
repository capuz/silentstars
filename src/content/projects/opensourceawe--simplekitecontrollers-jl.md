---
repo: "OpenSourceAWE/SimpleKiteControllers.jl"
name: "SimpleKiteControllers.jl"
description: "Controllers for parking, flying figures of eight and power harvesting of airborne wind energy systems."
readmeQualityOk: true
url: "https://github.com/OpenSourceAWE/SimpleKiteControllers.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [97]
topics: ["airborne", "airborne-wind-energy", "control", "kite"]
stars: 7
forks: 1
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 6
recentReleases: 2
createdAt: "2025-06-29T18:54:39Z"
lastCommitAt: "2026-10-02T09:59:20Z"
lastReleaseAt: "2026-09-28T11:37:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 79
maintainers: ["ufechner7"]
openGraphImageUrl: "https://opengraph.githubassets.com/28d283776e9ad9e1e7a93046e064b172606ad1f12422ee61de742efc8866d4b3/OpenSourceAWE/SimpleKiteControllers.jl"
---

# SimpleKiteControllers

This package is part of Julia Kite Power Tools, which consists of the following packages:

SimpleKiteControllers also depends on [WinchControllers](https://github.com/OpenSourceAWE/WinchControllers.jl) and [AtmosphericModels](https://github.com/OpenSourceAWE/AtmosphericModels.jl).

## Introduction
This package provides:
- a path following figure of eight controller
- a reel-out controller that produces power by reeling out and flying figures of eight
- a client for the [AWETrim](https://github.com/awegroup/AWETrim) reelout flight-path optimizer

Planned:
- a controller for flying circles

## This package provides
- the figure-of-eight path-following guidance: the types `FigureEightController` and
  `FigureEightSettings` and the functions `figure_eight_path`, `calc_attractor`,
  `navigate_fig8`, `set_path_center!`, `path_tangent`
- the figure-of-eight inner loop: the types `CourseController` and
  `CourseControllerSettings`, driven by `calc_steering` and `set_phase!` — the
  heading/course PID, entry state machine and `rel_depower`, shared by all three
  `examples/simple_fig8*.jl` scripts
- the curvature feasibility check `check_pattern_feasible` (with…
