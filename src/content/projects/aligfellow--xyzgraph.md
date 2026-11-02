---
repo: "aligfellow/xyzgraph"
name: "xyzgraph"
description: "Fast and generalisable conversion of xyz Cartesian coordinates to a molecular graph across the *whole* periodic table."
readmeQualityOk: true
url: "https://github.com/aligfellow/xyzgraph"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["computational-chemistry", "molecular-graph", "compchem"]
stars: 22
forks: 3
openIssues: 3
closedIssues: 13
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-10-05T22:26:48Z"
lastCommitAt: "2026-11-02T11:37:00Z"
lastReleaseAt: "2026-04-15T23:12:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 40
maintainers: ["aligfellow", "JamesOBrien2"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fb00e30654d5c00f61cb903d51d997402ea4e0e3d0f11887677442dd9aeb8b3/aligfellow/xyzgraph"
---

# xyzgraph: Molecular Graph Construction from Cartesian Coordinates

**xyzgraph** is a Python toolkit for building molecular graphs (bond connectivity, bond orders, formal charges, and partial charges) directly from 3D atomic coordinates in XYZ format. It provides both **cheminformatics-based** and **quantum chemistry-based** (xTB) workflows.

---

## Table of Contents

1. [Key Features](#key-features)
2. [Installation](#installation)
3. [Quick Start](#quick-start)
4. [Methodology Overview](#methodology-overview)
5. [Workflow Comparison](#workflow-comparison)
6. [CLI Reference](#cli-reference)
7. [Python API](#python-api)
8. [Visualization](#visualization)
9. [Non-Covalent Interactions](#non-covalent-interactions)
10. [Limitations & Future Work](#limitations--future-work)
11. [Examples](#examples)
12. [References](#references)
13. [Contributing & Contact](#contributing--contact)

---

## Key Features

- **Distance-based initial bonding** using *consistent* van der Waals radii across *all elements* from Charry and Tkatchenko [[1]](https://doi.org/10.1021/acs.jctc.4c00784)
- **Four construction methods**:
  - `cheminf`: Pure cheminformatics with bond order optimization
  - `xtb`:…
