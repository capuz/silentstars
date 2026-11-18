---
repo: "nebius/slurm-deb-packages"
name: "slurm-deb-packages"
description: "Slurm debian packages"
readmeQualityOk: true
url: "https://github.com/nebius/slurm-deb-packages"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [95]
stars: 16
forks: 12
openIssues: 1
closedIssues: 7
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2024-06-04T13:43:41Z"
lastCommitAt: "2026-11-18T12:06:44Z"
lastReleaseAt: "2024-08-28T12:31:34Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 74
maintainers: ["asteny", "dependabot[bot]", "itechdima"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4c5f497b2d21477ba70e6a13af7b6a674b58c9f0fc5d2270418eb4fd6b56702/nebius/slurm-deb-packages"
---

# Slurm Debian Package Builder

This repository automates the process of building Debian packages for [Slurm](https://www.schedmd.com/slurm/why-slurm/) and [NVIDIA NCCL](https://github.com/NVIDIA/nccl). It also builds binary files for running [NCCL tests](https://github.com/NVIDIA/nccl-tests).

Slurm is built using default options, with support for some additional libraries, such as [OpenPMIx (v5)](https://github.com/openpmix/openpmix).

The `Build slurm packages` workflow builds the maintained upstream Slurm release
and the current Nebius Slurm release from one build matrix. The exact versions
are listed in the matrices of
[`slurm_packages.yml`](https://github.com/nebius/slurm-deb-packages/blob/HEAD/.github/workflows/slurm_packages.yml). The Nebius source
comes from the [Nebius Slurm fork](https://github.com/nebius/slurm) and uses an
immutable release of the form `slurm-<major>-<minor>-<micro>-nebius-<N>`.
