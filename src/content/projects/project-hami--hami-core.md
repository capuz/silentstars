---
repo: "Project-HAMi/HAMi-core"
name: "HAMi-core"
description: "A transparent, in-container GPU resource controller that enforces memory and compute limits by intercepting CUDA calls without application or driver changes."
readmeQualityOk: true
url: "https://github.com/Project-HAMi/HAMi-core"
homepage: "https://project-hami.io"
language: "C"
languages: ["C"]
languagePcts: [93]
topics: ["containers", "cuda", "cuda-hook", "gpu", "gpu-sharing", "gpu-virtualization"]
stars: 347
forks: 218
openIssues: 2
closedIssues: 129
watchers: 6
contributors: 62
recentReleases: 0
createdAt: "2024-01-23T09:36:22Z"
lastCommitAt: "2026-11-09T04:35:38Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 44
maintainers: ["moezdil", "hami-robot[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/942f0e5841a7cb3963cd457c96a0f7a270e9c1753df49cd2ea4f757a583b1ae6/Project-HAMi/HAMi-core"
---

# HAMi-core: Hook library for CUDA Environments

English | [中文](https://github.com/Project-HAMi/HAMi-core/blob/HEAD/README_CN.md) | [日本語](https://github.com/Project-HAMi/HAMi-core/blob/HEAD/README_JA.md)

HAMi-core is the in-container GPU resource controller. It intercepts CUDA calls to enforce per-container device memory limits and compute utilization limits, without requiring changes to the application or the driver. It has been adopted by [HAMi](https://github.com/Project-HAMi/HAMi) and [volcano](https://github.com/volcano-sh/devices). For the overall HAMi architecture and how HAMi-core fits into it, see the [HAMi project](https://github.com/Project-HAMi/HAMi).

- [Features](#features)
- [How it works](#how-it-works)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
- [Docker](#docker)
- [Logging](#logging)
- [Testing](#testing)
- [Repository layout](#repository-layout)
- [Contributing](#contributing)

## Features

- **Device memory virtualization.** Each container sees and is held to its own memory limit, per device.
- **Compute limiting.** SM utilization is limited with a self-implemented time-sharing scheme.
- **Real-time utilization…
