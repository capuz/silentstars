---
repo: "BlitterStudio/zz9000-firmware"
name: "zz9000-firmware"
description: "ZYNQ FPGA and ZZ9000OS ARM firmware for the ZZ9000 graphics/coprocessor card (BlitterStudio fork)"
readmeQualityOk: true
url: "https://github.com/BlitterStudio/zz9000-firmware"
language: "C"
languages: ["C"]
languagePcts: [90]
stars: 21
forks: 1
openIssues: 4
closedIssues: 24
watchers: 5
contributors: 9
recentReleases: 3
createdAt: "2026-04-20T19:41:37Z"
lastCommitAt: "2026-08-29T10:21:18Z"
lastReleaseAt: "2026-08-17T10:16:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 47
maintainers: ["midwan"]
openGraphImageUrl: "https://opengraph.githubassets.com/3457d4f5ad232f3191147464adde8d293ef922fb6cd9aa33fbd73e87225ff69c/BlitterStudio/zz9000-firmware"
fundingLinks: ["GITHUB:https://github.com/midwan", "KO_FI:https://ko-fi.com/midwan"]
---

# ZZ9000 Firmware

FPGA logic and bare-metal ARM firmware for the MNT ZZ9000 Zorro II/III
graphics and coprocessor card.

This repository contains the Zorro bus interface, video formatter,
scanline generator, AXI plumbing, boot image layout, and `ZZ9000OS`
firmware that runs on the Zynq-7020 ARM core. The matching Amiga-side
drivers and tools live in
[BlitterStudio/zz9000-drivers](https://github.com/BlitterStudio/zz9000-drivers).

> **Fork notice:** this is the BlitterStudio firmware fork, maintained by
> Dimitris Panokostas / midwan. It continues the original MNT ZZ9000
> firmware sources, but is not affiliated with, endorsed by, or supported
> by MNT Research GmbH. Hardware support questions belong with MNT;
> firmware issues for this fork belong in this repository.
>
> Original upstream: <https://source.mnt.re/amiga/zz9000-firmware>

## What Changed Since the Original MNT Firmware

The original MNT project established the ZZ9000 hardware and its core Amiga
support. This independent BlitterStudio fork continues from those pre-fork
sources and turns the card into a broader, easier-to-use graphics and
coprocessor platform. These are the highest-value differences for an owner:

|…
