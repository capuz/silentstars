---
repo: "younghyopark/aioflexiv"
name: "aioflexiv"
description: "A Python library for controlling Flexiv robots using the official flexivrdk package as the robot interface, with MuJoCo models for kinematics/dynamics, based on asyncio."
readmeQualityOk: true
url: "https://github.com/younghyopark/aioflexiv"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-10T13:15:46Z"
lastCommitAt: "2026-10-21T17:26:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 22
maintainers: ["younghyopark"]
openGraphImageUrl: "https://opengraph.githubassets.com/7808bdd8919dd272b30252f2c0e5d4ef9c7403aea54a52dbb21140fb61650246/younghyopark/aioflexiv"
---

# aioflexiv

**aioflexiv** is an experimental asyncio-based Python library for controlling
Flexiv robots from a Python-owned real-time torque loop. It combines
**`flexivrdk`** for Flexiv robot access, a small **`pybind11`** shim for RT
joint-torque mode, and **`Ruckig`** for smooth joint-space trajectory
generation.

The library is designed for research workflows that need direct torque control,
joint impedance control, operational-space control, and minimal ceremony around
async Python experiments.

If you want the same kind of Python control workflow for a Franka FR3 robot,
check out [aiofranka](https://github.com/Improbable-AI/aiofranka).

This is a hardware-control experiment. Keep clear of the robot, verify your
limits, and be ready to stop the robot before running any command or script.

## Installation

Install from PyPI:

```bash
pip install aioflexiv
```

Or install this repository for development:

```bash
git clone https://github.com/Improbable-AI/aioflexiv.git
cd aioflexiv
pip install -e .
```

The install pulls `flexivrdk==1.9.1`, `mujoco`, `numpy`, and `ruckig`, builds the
`pybind11` RT shim from source, and installs the `aioflexiv` console command.
PyPI releases are…
