---
repo: "tesseract-robotics/tesseract_nanobind"
name: "tesseract_nanobind"
description: "Tesseract python binding leveraging nanobind"
readmeQualityOk: true
url: "https://github.com/tesseract-robotics/tesseract_nanobind"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 19
forks: 8
openIssues: 2
closedIssues: 229
watchers: 2
contributors: 11
recentReleases: 2
createdAt: "2025-12-05T14:08:35Z"
lastCommitAt: "2026-11-11T19:44:16Z"
lastReleaseAt: "2026-11-06T15:40:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 69
maintainers: ["jf---"]
openGraphImageUrl: "https://opengraph.githubassets.com/e655c6b017e0c8afb62913c4e6ad978fe55a58272c7187617640fc680f3170cc/tesseract-robotics/tesseract_nanobind"
discussionCount: 1
---

# Tesseract Python (nanobind)

> **Note:** This is a friendly fork of [tesseract_python](https://github.com/tesseract-robotics/tesseract_python) that replaces SWIG bindings with modern [nanobind](https://github.com/wjakob/nanobind) bindings.

Python bindings for [Tesseract](https://github.com/tesseract-robotics/tesseract) robotics motion planning using [nanobind](https://github.com/wjakob/nanobind).

## Documentation

Maintained in `/docs` and published to https://tesseract-robotics.github.io/tesseract_nanobind/

## Features

- Scene loading and management (URDF, SRDF, meshes)
- Collision checking (Bullet, FCL)
- Kinematics (KDL, OPW, UR)
- Motion planning (OMPL, Descartes, TrajOpt, TrajOpt IFOPT, simple planners)
- Constraints written in Python for the online SQP solver (`trajopt_ifopt.python_constraints`)
- Time parameterization (TOTG, ISP, constant TCP speed, Ruckig)
- Task composition and pipelines
- Pythonic high-level API

For an overview of Tesseract's architecture and features, see [this presentation on Vimeo](https://vimeo.com/649656119)

## Test suite

3900+ pytest tests in `tests/`, mirroring the module layout (`collision`, `kinematics`, `task_composer`, `trajopt_sqp`,…
