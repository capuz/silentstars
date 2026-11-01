---
repo: "ixoo/gemini-pda-mainline"
name: "gemini-pda-mainline"
description: "Upstream-first Linux enablement for the Planet Computers Gemini PDA (MediaTek MT6797/MT6797X)."
readmeQualityOk: true
url: "https://github.com/ixoo/gemini-pda-mainline"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [67, 26]
topics: ["arm64", "devicetree", "embedded-linux", "gemini-pda", "linux-kernel", "mainline-linux", "mediatek", "mt6797", "planet-computers"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 30
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-11T18:09:42Z"
lastCommitAt: "2026-11-01T10:44:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 53
maintainers: ["ixoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/06b72803ec7823f9bf1b21f2b188e1fa664f63b3692ac31cb42e2bd470c2fe3d/ixoo/gemini-pda-mainline"
discussionCount: 3
---

# Gemini PDA Mainline

Upstream-first Linux enablement for the Planet Computers Gemini PDA.

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
  -> retained low-level firmware while bring-up is in progress
  -> maintained bootloader or chainloader
  -> standard Linux Image + upstream DTB + initramfs
  -> ordinary distribution userspace
```

## Current status

The named Gemini boots local Linux 7.1.3 integration candidates through the
retained LK and non-primary `boot2`. Console, built-in keyboard, USB gadget…
