---
repo: "HEP-PBSP/colibri"
name: "colibri"
description: "Colibri is an adaptable, open-source platform for flexible Parton Distribution Function (PDF) fitting. It is a reportengine app that performs PDF fits with any given parametrisation."
readmeQualityOk: true
url: "https://github.com/HEP-PBSP/colibri"
homepage: "https://hep-pbsp.github.io/colibri/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["bayesian-inference", "lhc", "particle-physics", "parton-distribution-functions", "jax", "quantum-chromodynamics"]
stars: 9
forks: 3
openIssues: 11
closedIssues: 117
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2023-03-31T09:13:53Z"
lastCommitAt: "2026-10-21T08:49:22Z"
lastReleaseAt: "2025-10-06T12:31:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 79
maintainers: ["vschutze-alt", "LucaMantani", "ecole41"]
openGraphImageUrl: "https://opengraph.githubassets.com/e890d07e16bc477acb2dc3dc0883ea8f527102b313ad6b02dfc7e35d297f2d61/HEP-PBSP/colibri"
---

Artwork by <a href="https://www.instagram.com/qftoons/" target="_blank">@qftoons</a>

# colibri

A reportengine app to perform PDF fits using arbitrary parametrisations.

---

## Table of Contents
- [Documentation](#documentation)
- [Features](#features)
- [Installation](#installation)
  - [1. Core Installation via Conda](#1-core-installation-via-conda)
  - [2. Core Installation via pip](#2-core-installation-via-pip)
  - [3. GPU (CUDA) JAX Support](#3-gpu-cuda-jax-support)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Documentation

Documentation regarding the usage and installation is available at <https://hep-pbsp.github.io/colibri/>

## Features
- Perform PDF fits using flexible parametrisations
- Support for JAX-based computations (CPU by default)
- Optional GPU (CUDA) support for accelerated JAX operations
- Command-line scripts for common workflows (`colibri`, `evolve_fit`, etc.)
- Integration with external PDF model repositories

---

## Installation

This section covers installing `colibri` in various ways.

### 1. Development Installation via Conda

You can install colibri easily by first cloning the repository and then using the…
