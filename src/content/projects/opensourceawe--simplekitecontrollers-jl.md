---
repo: "OpenSourceAWE/SimpleKiteControllers.jl"
name: "SimpleKiteControllers.jl"
description: "Controllers for parking, flying figures of eight and more for airborne wind energy systems."
readmeQualityOk: true
url: "https://github.com/OpenSourceAWE/SimpleKiteControllers.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [86]
topics: ["airborne", "airborne-wind-energy", "control", "kite"]
stars: 5
forks: 0
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-06-29T18:54:39Z"
lastCommitAt: "2026-08-18T04:08:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 69
maintainers: ["ufechner7"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aef8ee005d6bb295151632c396153a17de135ae93475b038be6a66052df0d64/OpenSourceAWE/SimpleKiteControllers.jl"
---

# SimpleKiteControllers

## Introduction
This package provides:
- a path following figure of eight controller
- a reel-out controller that produces power by reeling out and flying figures of eight
- a parking controller, that keeps the nose of the kite pointing into the wind and thus keeps it in a steady state airborne as long as there is sufficient wind
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
- the curvature feasibility check `check_pattern_feasible` (with `min_turn_radius`,
  `path_min_radius`, `path_radius_profile`) — a pattern tighter than the kite's minimum
  turn radius cannot…
