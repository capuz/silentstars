---
repo: "basjoo-io/basjoo"
name: "basjoo"
description: "The Fundamental Math Basis for Autonomous Driving Vehicles and Robotics."
readmeQualityOk: true
url: "https://github.com/basjoo-io/basjoo"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-07-11T06:30:38Z"
lastCommitAt: "2026-10-13T10:55:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 34
maintainers: ["houchen-li"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc9583dd2abfe780accbb729d659bffdd094d8b642c446a68f59216bc5f66041/basjoo-io/basjoo"
---

---

## Introduction

basjoo is a high-performance C++23 mathematical library purpose-built for **autonomous driving** and **robotics** applications. In these domains, engineers routinely need:

- **Spline-based path representation** — smoothly interpolating waypoints into drivable trajectories with curvature, tangent, and arc-length queries.
- **Convex optimization** — solving quadratic programs in real-time for trajectory smoothing, obstacle avoidance, and control allocation.
- **Motion planning models** — combining reference lines, time–arc-length mappings, and hard/soft constraints (borders, fences) to generate feasible, comfortable motions.
- **Efficient linear algebra** — fast vector/matrix operations (with optional BLAS/LAPACK and AVX-512 SIMD) as the computational foundation for all of the above.

basjoo provides all of these capabilities in a unified, header-mostly library with modern C++23 concepts and templates. Each component is a fine-grained CMake target (e.g., `basjoo::math_vec2`, `basjoo::cvxopm_osqp_solver`) so you can link only what you need.

## Module Overview

```
src/basjoo/
├── common/                         # basjoo::common — Utilities
│   ├── fsm.hpp
│…
