---
repo: "ruddyscent/gmes"
name: "gmes"
description: "Python/C++ electromagnetic simulator for photonic devices using the finite-difference time-domain (FDTD) method."
readmeQualityOk: true
url: "https://github.com/ruddyscent/gmes"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["computational-electromagnetics", "cpp", "cython", "electromagnetic-simulation", "electromagnetics", "fdtd", "maxwell-equations", "optics", "photonics", "python"]
stars: 7
forks: 1
openIssues: 15
closedIssues: 69
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2016-07-02T08:49:48Z"
lastCommitAt: "2026-08-30T09:25:42Z"
lastReleaseAt: "2026-08-21T20:14:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "under_pressure"]
healthScore: 96
undervaluedScore: 78
maintainers: ["ruddyscent", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d952cb4a51a8e5d75c69fade28761c2c2c75c74ba3321c2c48aa35728d9d3b4/ruddyscent/gmes"
fundingLinks: ["GITHUB:https://github.com/ruddyscent"]
discussionCount: 0
---

# GMES

GMES (GIST Maxwell's Equations Solver) is a free electromagnetic simulator that solves Maxwell's equations with the explicit finite-difference time-domain (FDTD) method. It provides a Python interface backed by C++ and SWIG extensions for modeling photonic devices in one-, two-, and three-dimensional Cartesian domains.

> [!IMPORTANT]
> The current development line targets Python 3.14, C++23, NumPy 2, and SWIG 4. Python 2 and the former Distutils build are no longer supported.

## Features

- 1D, 2D, and 3D Cartesian FDTD simulations
- TE, TM, and TEM simulation classes
- Dielectric, Drude, Lorentz, critical-point, and related dispersive material models
- UPML and CPML absorbing boundary layers
- Point, continuous-wave, Gaussian, bandpass, and total-field/scattered-field sources
- Geometric primitives including blocks, spheres, cylinders, cones, ellipsoids, and shells
- Bloch-periodic simulations with complex-valued fields
- Optional MPI-based parallel execution
- Field visualization and HDF5 output utilities

## Requirements

- Python 3.14 or newer (the tested 0.10.0 release target is Python 3.14)
- A C++23 compiler and standard library
- SWIG 4
- NumPy 2.3 or newer
-…
