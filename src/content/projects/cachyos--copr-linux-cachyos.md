---
repo: "CachyOS/copr-linux-cachyos"
name: "copr-linux-cachyos"
description: "CachyOS Packages for Fedora"
readmeQualityOk: true
url: "https://github.com/CachyOS/copr-linux-cachyos"
homepage: "https://copr.fedorainfracloud.org/coprs/bieszczaders/kernel-cachyos"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["cachyos", "copr", "kernel", "optimized"]
stars: 314
forks: 32
openIssues: 10
closedIssues: 54
watchers: 8
contributors: 22
recentReleases: 0
createdAt: "2024-07-22T13:39:15Z"
lastCommitAt: "2026-07-30T06:07:15Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 94
undervaluedScore: 39
maintainers: ["sirlucjan", "andersrh", "TrixieUA"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0db20c00889936ea794825d7523c8dec43cde0ad9bf5592ec4c9103d20c1e31/CachyOS/copr-linux-cachyos"
---

<br/>
  <h1 align="center">CachyOS COPR Repository for Fedora</h1>
</div>

This repository is maintained by [@andersrh](https://github.com/andersrh) and [@TrixieUA](https://github.com/TrixieUA).

- [Kernels](#-kernels)
  - [Features](#-features)
  - [Installation Instructions](#%EF%B8%8F-installation-instructions)
    - [Default Kernel](#default-kernel)
- [Addons](#-addons)
  - [CachyOS-Settings](#cachyos-settings)
  - [scx-scheds](#scx-scheds)
  - [scx-manager](#scx-manager)
  - [ananicy-cpp](#ananicy-cpp)

# 🐧 Kernels

We offer a variety of CachyOS kernels ported to Fedora:
- `kernel-cachyos` - 1000 Hz kernel with BORE scheduler
- `kernel-cachyos-lts` - LTS kernel with BORE scheduler
- `kernel-cachyos-rt` - Real-time kernel with BORE scheduler
- `kernel-cachyos-server` - 300 Hz kernel with default EEVDF scheduler

For Fedora Workstation and Silverblue we recommend `kernel-cachyos` and for Fedora Server, Cloud and CoreOS we recommend `kernel-cachyos-server`. The LTS and Real-time kernels are for special use cases (think embedded systems) and are not recommended unless your application requires them.

## 📢 Announcement 2026/02/23
**We have removed the support for prebuilt Nvidia…
