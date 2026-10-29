---
repo: "iory/scikit-robot"
name: "scikit-robot"
description: "A Flexible Framework for Robot visualization and programming in Python"
readmeQualityOk: true
url: "https://github.com/iory/scikit-robot"
homepage: "https://scikit-robot.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["robot", "kinematics", "ros", "visualization", "flexible-framework", "python", "robot-control", "motion-planning", "path-planning", "path-planner"]
stars: 173
forks: 36
openIssues: 2
closedIssues: 32
watchers: 6
contributors: 17
recentReleases: 10
createdAt: "2019-02-26T00:05:52Z"
lastCommitAt: "2026-10-29T21:24:52Z"
lastReleaseAt: "2026-09-10T16:37:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 97
undervaluedScore: 50
maintainers: ["iory", "antonsoo", "mmporong"]
openGraphImageUrl: "https://opengraph.githubassets.com/a94853fecfe03f03a92f64f77b9a4de6fe598578282d7192c34115c03e4e0f99/iory/scikit-robot"
---

# scikit-robot: A Flexible Framework for Robot visualization and programming in Python

Scikit-Robot is a lightweight pure-Python library for robotic kinematics,
motion planning, visualization and control.

https://github.com/user-attachments/assets/1dad1a4d-ba59-4ec0-93b0-96c8718c9e8f

## Installation

### Quick Install with uv (Recommended)

[uv](https://docs.astral.sh/uv/) is a fast Python package manager. Create a virtual environment and install scikit-robot:

```bash
uv venv
source .venv/bin/activate  # Linux/macOS
# .venv\Scripts\activate   # Windows
uv pip install scikit-robot
```

Or with all optional dependencies:

```bash
uv pip install "scikit-robot[all]"
```

### Install with pip

You may need to install some dependencies by apt-get install:
```bash
sudo apt-get update
sudo apt-get install libspatialindex-dev freeglut3-dev libsuitesparse-dev libblas-dev liblapack-dev
```

Then,
```bash
pip install scikit-robot
```

If you would like to use `Pybullet Interface`, `open3d` and `fast-simplification` for mesh simplification,

```bash
pip install scikit-robot[all]
```

## Command Line Tools

Scikit-robot provides a unified command-line interface through the `skr` command,…
