---
repo: "SherlockChiang/Nethunter_for_KernelSU"
name: "Nethunter_for_KernelSU"
description: "Nethunter for KernelSU"
readmeQualityOk: true
url: "https://github.com/SherlockChiang/Nethunter_for_KernelSU"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [59, 35]
stars: 50
forks: 9
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2024-08-17T04:40:41Z"
lastCommitAt: "2026-10-23T09:32:59Z"
lastReleaseAt: "2026-04-29T09:19:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 31
maintainers: ["SherlockChiang", "Loukious"]
openGraphImageUrl: "https://opengraph.githubassets.com/55e628c00991099085f6a9fc246e26caa3cd83413db7a6bac744fa760ae9d16d/SherlockChiang/Nethunter_for_KernelSU"
---

# NetHunter for KernelSU

KernelSU module packaging Kali NetHunter applications, an arm64 Kali rootfs,
selected firmware, and NetHunter helper binaries. The primary test target is
Xiaomi 15. Code in this repository is adapted in part from the official Kali
NetHunter Magisk module and from
[poxiao676/Nethunter_KSU_Module](https://github.com/poxiao676/Nethunter_KSU_Module).

## Requirements

- An arm64 Android device running KernelSU.
- Installation through KernelSU Manager. Recovery flashing is not supported.
- A KernelSU mounting metamodule such as `meta-overlayfs` for the files under
  `system/` to be mounted. Without one, the APK and rootfs installation may
  work, but firmware and helper overlays will not.
- Enough free space under `/data` to stage a second rootfs during upgrades.

Xiaomi 15 is the maintained target. Other arm64 devices are experimental and
depend on their ROM, kernel configuration, KernelSU version, and mounting
metamodule.

## Build Inputs

The large payloads are downloaded separately:

1. Run `python3 tools/sync_upstream.py` to fetch the locked APKs and rootfs.
2. For an offline/manual build, place all five APKs under `data/app/` and
   place…
