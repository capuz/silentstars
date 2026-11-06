---
repo: "ixoo/gemini-pda-mainline"
name: "gemini-pda-mainline"
description: "Upstream-first Linux enablement for the Planet Computers Gemini PDA (MediaTek MT6797/MT6797X)."
readmeQualityOk: true
url: "https://github.com/ixoo/gemini-pda-mainline"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [66, 26]
topics: ["arm64", "devicetree", "embedded-linux", "gemini-pda", "linux-kernel", "mainline-linux", "mediatek", "mt6797", "planet-computers"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 30
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-11T18:09:42Z"
lastCommitAt: "2026-11-06T02:44:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 52
maintainers: ["ixoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/dffdf1f1c73855d2f431cc974645f3f6f8deb773425722cf3f384fac44cf4951/ixoo/gemini-pda-mainline"
discussionCount: 3
---

# Gemini PDA Mainline

Upstream-first Linux enablement for the Planet Computers Gemini PDA.

> [!CAUTION]
> **v1 ships as it is, and you use it entirely at your own risk.** It can corrupt your data,
> cost you your recovery path or damage your device. It has had limited testing, on one unit.
> There is no warranty ([MIT licence](https://github.com/ixoo/gemini-pda-mainline/blob/HEAD/LICENSE)) and no promise of support.

> [!WARNING]
> This is an early hardware-enablement project, not a custom ROM or a
> daily-driver image. An incorrect image, partition write, clock, regulator, or
> memory-map change can corrupt data or damage hardware. Preserve a known-good
> recovery path, back up device-specific data, and never experiment on the
> preloader, NVRAM, or partition table.

## Mission

Make the Gemini PDA a first-class mainline Linux device: bootable with an
ordinary upstream-derived arm64 kernel, described by upstream Device Tree,
usable through standard Linux subsystems, and maintainable without a permanent
vendor-kernel fork.

The intended end state is distribution-owned kernel updates, not a
repository-owned ROM:

```text
MediaTek BootROM
  -> retained low-level firmware while…
