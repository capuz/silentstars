---
repo: "mouseos/xnu_device_benesse_a04br3"
name: "xnu_device_benesse_a04br3"
description: "WIP / 作業中: Board and reproducible boot image sources for TAB-A04-BR3 (MT8167). Experimental; watchdog boot loop, OS boot incomplete."
readmeQualityOk: true
url: "https://github.com/mouseos/xnu_device_benesse_a04br3"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-19T09:16:24Z"
lastCommitAt: "2026-10-21T21:15:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["mouseos"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd8127414ec312f7ab90c6cd389a61804ce127fa0f2c4dfa0087d143a8d4c03e/mouseos/xnu_device_benesse_a04br3"
---

> **Work in progress / 作業中:** Experimental XNU port for Benesse TAB-A04-BR3 (MT8167). XNU entry has been observed, but the device currently watchdog-reboots; a working OS is not available.

# TAB-A04-BR3 XNU device sources

This repository contains board source, MTK boot packaging, raw source-kernel
payload generation and GPT layout generation. The current stage targets entry
into a source-built XNU kernel. Initial kernel entry has been observed on
hardware; the previous image then faulted after MMU enable. This revision
corrects the 39-bit virtual layout and still needs hardware verification.

## Repository roles

* [Kernel](https://github.com/mouseos/xnu_kernel_benesse_a04br3): copied Apple
  XNU source plus A04BR3 CPU target and a macOS/Xcode build entry point.
* [Boot shim](https://github.com/mouseos/xnu_bootshim_benesse_a04br3): LK entry,
  exception vectors and UART diagnostics, built for Cortex-A35.
* This repository: DTS, board configuration, MTK/Android image construction,
  build scripts and packaging tests.

All three repositories are public and under active development. This stage
can be reproduced using their contents. The diagnostic does not use kernel-repository…
