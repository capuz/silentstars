---
repo: "breuerpeter/nexus"
name: "nexus"
description: "Flight stack simulation with Newton"
readmeQualityOk: true
url: "https://github.com/breuerpeter/nexus"
homepage: "https://breuerpeter.github.io/nexus/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["drone", "openusd", "px4", "robotics", "simulation", "isaac-sim", "newton-physics", "nvidia-warp", "robot-learning", "drones"]
stars: 5
forks: 0
openIssues: 104
closedIssues: 159
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-17T19:27:43Z"
lastCommitAt: "2026-11-26T11:58:26Z"
lastReleaseAt: "2026-11-04T15:13:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 90
undervaluedScore: 61
maintainers: ["breuerpeter", "nexus-uav-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a21cef01242f88425122beed4dc214f2fecff713afcbc0360134da9d70a1736/breuerpeter/nexus"
---

Built on [Newton](https://github.com/newton-physics/newton), [Warp](https://github.com/NVIDIA/warp)
and [OpenUSD](https://openusd.org/), nexus lets you develop drone subsystems and test them as part of
the full flight stack.

## What nexus adds to Newton

- **One deterministic loop.** Each tick runs the sensors, the flight stack and Newton's step, always in
  that order. On a GPU the tick replays as CUDA graphs. On CPU a flight with the Proportional Integral
  Derivative (PID) controller repeats bit for bit, which a CI gate checks.
  [Execution](https://breuerpeter.github.io/nexus/design/execution/)
- **Components you can swap.** Sensors, estimators, guidance, controllers, and force elements fill
  fixed roles under one contract. Write your own, declare it in the vehicle's
  Universal Scene Description (USD) file beside Newton's physics, and the loop runs it as it runs the
  shipped ones.
  [Your own component](https://breuerpeter.github.io/nexus/guide/your-own-component/)
- **PX4 in lockstep.** PX4 Software In The Loop (SITL) flies the vehicle in MAVLink lockstep with the
  loop. QGroundControl and offboard scripts connect through the run's links.
