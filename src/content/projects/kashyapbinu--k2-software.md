---
repo: "kashyapbinu/K2-Software"
name: "K2-Software"
description: "K2 Aerospace - rocket simulation platform (6DOF, aero, propulsion, structures, CFD/FEM, PyQt6 UI)"
url: "https://github.com/kashyapbinu/K2-Software"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-06-09T06:21:22Z"
lastCommitAt: "2026-07-03T12:40:40Z"
lastReleaseAt: "2026-07-03T09:07:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: ["kashyapbinu"]
openGraphImageUrl: "https://opengraph.githubassets.com/6aff6b8b057409198de1adf46d67a6512a74c28d99d98593274927a446139f21/kashyapbinu/K2-Software"
---

# K2 Aerospace — Rocket Simulation Platform

Integrated aerospace digital twin for high-power and experimental rockets: 6DOF
flight simulation, aerodynamics, propulsion / internal ballistics, structures,
recovery, CFD and FEM tooling, with a PyQt6 desktop UI.

## Modules

| Package | Purpose |
|---|---|
| `physics/` | Aerodynamics (Barrowman port), propulsion, internal ballistics, structures, drag tables |
| `core/` | Simulation engine (6DOF), integrators (RK4 / RK45 Dormand-Prince), Monte Carlo, optimization, DOE |
| `environment/` | ISA atmosphere, wind, turbulence, weather profiles |
| `dynamics/` | Flutter (NACA TN-4197 + p-k), aeroelastic, vibration |
| `recovery/` | Drogue / main chute, descent dynamics, deployment logic |
| `avionics/` | Flight computer, sensors, Kalman state estimation, telemetry |
| `cfd/` | SU2 / meshing interface, boundary layer, shock detection, sweeps |
| `structures/` | FEM interface (CalculiX), thermal, pressure mapping, reporting |
| `vehicle/` | Component model, builder, mass/inertia |
| `ui/` | PyQt6 workspaces (design, sim, aero, propulsion, structures, dynamics, Monte Carlo, results) |
| `visualization/` | 3D viewer, mission visualizer |

##…
