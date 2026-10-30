---
repo: "CEAD-group/py-opw-kinematics"
name: "py-opw-kinematics"
description: "Python bindings for a Rust implementation of inverse and forward kinematic solutions for six-axis industrial robots with a parallel base and spherical wrist."
readmeQualityOk: true
url: "https://github.com/CEAD-group/py-opw-kinematics"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [64, 36]
stars: 8
forks: 3
openIssues: 2
closedIssues: 8
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-09-27T08:25:25Z"
lastCommitAt: "2026-10-30T10:23:07Z"
lastReleaseAt: "2026-01-09T15:45:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 50
maintainers: ["tdamsma"]
openGraphImageUrl: "https://opengraph.githubassets.com/79dc889c996acd0da46917464ba16e07f11eafe6f9483af8f4c5236e3664a50e/CEAD-group/py-opw-kinematics"
---

# py-opw-kinematics

**py-opw-kinematics** is a Python wrapper for the [rs-opw-kinematics](https://github.com/bourumir-wyngs/rs-opw-kinematics) library, providing an interface for solving inverse and forward kinematics of six-axis industrial robots with a parallel base and spherical wrist. Designed for convenience and performance, this wrapper is suitable for robotics simulation, control, and trajectory planning directly from Python.

## Key Features

- **scipy Integration**: Uses `scipy.spatial.transform.RigidTransform` for poses, giving you access to all rotation representations (Euler, quaternions, rotation vectors) and SLERP interpolation.
- **High Performance**: Capable of batch operations for maximum efficiency. For example, 100,000 inverse kinematic solutions can be computed in just 0.4 seconds.
- **Full Rust Integration**: Uses Rust for the core kinematic calculations, offering speed and robustness while allowing access through Python.
- **Singularity Handling**: Manages kinematic singularities such as J5 = 0 or 180.

## Scope

### Goals

- Inverse kinematics (single and batch)
- Batch IK considers previous state to find closest solution
- Forward kinematics outputs all…
