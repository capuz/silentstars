---
repo: "nolan-archie/a165f_kernel"
name: "a165f_kernel"
description: "Kernel source for a165 devices"
readmeQualityOk: true
url: "https://github.com/nolan-archie/a165f_kernel"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 5
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-02-07T20:00:19Z"
lastCommitAt: "2026-07-05T20:18:18Z"
lastReleaseAt: "2026-05-05T13:00:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 67
maintainers: ["nolan-archie"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddc69928147a2c99dfe3bec405092f513dc1e47dd4b74ab752802d26b670c728/nolan-archie/a165f_kernel"
---

# Samsung Galaxy A16 Kernel

Custom kernel source and GitHub Actions build workflow for the Samsung Galaxy A16 LTE family, focused on the SM-A165F and compatible A15/A16 variants used by this tree.

This repository builds a Linux 5.10 Android kernel with SukiSU Ultra and SUSFS integration. The weekly workflow is the main supported build path: it checks out this source tree, downloads the toolchain, installs SukiSU Ultra, refreshes SUSFS from upstream, builds `boot.img`, and publishes release artifacts.

## Device Scope

Target devices declared in the AnyKernel package:

- `a16`
- `a165f`
- `a155f`
- `A165F`
- `A155F`

Primary target:

- Samsung Galaxy A16 LTE, SM-A165F
- MediaTek Helio G99 / MT6789 platform
- Android platform version used by the workflow: `13`
- Kernel tree: `kernel-5.10`

Do not flash this on an unsupported device or bootloader variant.

## Build Outputs

The weekly workflow publishes these artifacts when the build succeeds:

- `boot.img` - signed boot image
- `Image.gz` - compressed kernel image
- `SukiSU-Ultra-A165F-<version>.zip` - AnyKernel3 flashable package
- `SukiSU-Ultra-A165F-<version>.tar` - Odin-style archive containing `boot.img` and, when present,…
