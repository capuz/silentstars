---
repo: "Snapmaker/u1-klipper"
name: "u1-klipper"
description: "klipper firmware for Snapmaker U1"
readmeQualityOk: true
url: "https://github.com/Snapmaker/u1-klipper"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 84
forks: 29
openIssues: 7
closedIssues: 0
watchers: 6
contributors: 4
recentReleases: 0
createdAt: "2026-03-26T12:44:02Z"
lastCommitAt: "2026-11-04T02:56:47Z"
status: "thriving"
tags: ["funded"]
healthScore: 51
undervaluedScore: 8
maintainers: ["zhangquanyi"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bb57ea1b04d7554d0b77c60368d12aea2fffd184ffb486be73b27089d737589/Snapmaker/u1-klipper"
fundingLinks: ["KO_FI:https://ko-fi.com/koconnor", "CUSTOM:https://www.klipper3d.org/Sponsors.html#klipper-developers"]
---

#  Klipper for Snapmaker U1

This is a project developed based on [Klipper](https://www.klipper3d.org/) specifically for Snapmaker U1.

Klipper is a 3d-Printer firmware. It combines the power of a general purpose computer with one or more micro-controllers. See the [features document](https://www.klipper3d.org/Features.html) for more information on why you should use Klipper.

Klipper is Free Software. See the [license](https://github.com/Snapmaker/u1-klipper/blob/HEAD/COPYING) or read the [documentation](https://www.klipper3d.org/Overview.html).

## Development

### Host Software

#### Prepare the Cross-compiler

A portion of the host-side code is written in C language and is located in the directory klippy/chelper. To enable this part of the code to run on the main chip of U1, it needs to be compiled using the cross-compiler for the U1 main chip.

The cross-compiler on the U1 host uses aarch64-none-linux-gnu, and its version number is 12.3.rel1. You can download it [here](https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads). Find the link for the corresponding compilation platform and then download and install it.

#### Compile chelper

Taking the x86_64 Linux…
