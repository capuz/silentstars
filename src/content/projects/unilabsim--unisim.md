---
repo: "unilabsim/unisim"
name: "unisim"
description: "Unified physics backend contracts and adapters for UniLab and engine benchmarks"
readmeQualityOk: true
url: "https://github.com/unilabsim/unisim"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 14
forks: 6
openIssues: 19
closedIssues: 89
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-01T17:37:57Z"
lastCommitAt: "2026-09-24T08:42:39Z"
lastReleaseAt: "2026-09-19T06:11:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 58
maintainers: ["TATP-233", "lemon-star608"]
openGraphImageUrl: "https://opengraph.githubassets.com/60ede944a3af356e14cc7e77fd65c1c94c767d70b16747f288a479571136a5fa/unilabsim/unisim"
---

# UniSim

[English](https://github.com/unilabsim/unisim/blob/HEAD/README.md) | [中文](https://github.com/unilabsim/unisim/blob/HEAD/README_zh.md)

UniSim provides backend-neutral physics contracts and optional engine adapters for robot learning and simulation. The PyPI distribution is `unisim-core`; the Python import namespace is `unisim`.

A single `SimBackend` contract covers state access, control, reset, and domain-randomization boundaries, so the same task code can use MuJoCo, Motrix, Drake, MJWarp, Genesis, Newton, SuperDex, IsaacGym, or IsaacSim without engine-specific branches. The base install depends only on NumPy; every engine SDK is an optional extra loaded lazily, and importing `unisim` never imports an engine.

## Relationship to UniLab

UniSim is the extracted, backend-neutral physics layer used by UniLab. UniLab retains Hydra configuration, task/env/manager lifecycle, robot assets, RL training, checkpoints, and sim2sim policy I/O; UniSim owns the physics contract, adapter lifecycle and state translation, optional-runtime diagnostics, and the shared subprocess IPC layer. There is exactly one production implementation of each backend, owned by this repository. UniLab…
