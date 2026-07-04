---
repo: "ajokela/ballistics-engine"
name: "ballistics-engine"
description: "High-performance ballistics trajectory engine"
readmeQualityOk: true
url: "https://github.com/ajokela/ballistics-engine"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ammunition", "ballistics", "external-ballistics", "firearms", "physics", "reloading", "rust", "shooting", "simulation", "trajectory"]
stars: 32
forks: 8
openIssues: 2
closedIssues: 2
watchers: 4
contributors: 1
recentReleases: 9
createdAt: "2025-08-13T03:29:51Z"
lastCommitAt: "2026-07-04T22:18:57Z"
lastReleaseAt: "2026-06-21T19:38:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 54
maintainers: ["ajokela", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c01543053e80acf6823b1f4de9e6eeab0a68dfef17b6564d707e93e4c6fefc0/ajokela/ballistics-engine"
---

# Ballistics Engine

A high-performance ballistics trajectory calculation engine with comprehensive physics modeling, automatic zeroing, and statistical analysis capabilities.

**Project Website:** [https://ballistics.rs/](https://ballistics.rs/)

## Features

- **Full 3D Trajectory Integration** - Six-state ballistic modeling with adaptive RK45 and fixed-step RK4 integration methods
- **Advanced Drag Models** - Support for G1, G7, and custom drag curves with automatic transonic corrections
- **Automatic Zeroing** - Calculate sight adjustments and apply zero angles automatically
- **Unit Conversion** - Seamless switching between Imperial (default) and Metric units
- **BC Segmentation** - Velocity-dependent ballistic coefficient modeling with automatic estimation
- **Atmospheric Modeling** - Temperature, pressure, humidity, and altitude effects with ICAO standard atmosphere
- **Wind Effects** - 3D wind calculations with altitude-dependent wind shear modeling and **downrange-segmented wind** (`--wind-segment SPEED:ANGLE:DIST`, repeatable — model wind that varies along the path, e.g. muzzle plus downrange sensor readings)
- **Monte Carlo Simulations** - Statistical analysis with…
