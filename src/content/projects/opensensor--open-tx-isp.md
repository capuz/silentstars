---
repo: "opensensor/open-tx-isp"
name: "open-tx-isp"
description: "Open Source T-series ISP driver (t23, t31, t40 have working streams)"
readmeQualityOk: true
url: "https://github.com/opensensor/open-tx-isp"
language: "C"
languages: ["C"]
languagePcts: [95]
topics: ["camera-control", "isp"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2024-11-09T06:19:40Z"
lastCommitAt: "2026-08-28T14:34:07Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 67
maintainers: ["matteius"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2328113e7ba0d231450353c541ea133f9ceb33e8e1fbc33cb1d69f919b8ca2c/opensensor/open-tx-isp"
fundingLinks: ["GITHUB:https://github.com/matteius"]
discussionCount: 1
---

# Open-Source TX-ISP Drivers for Ingenic T20, T21, T23, T30, T31, T40, and T41

## Overview

This repository contains open-source reimplementations of the Ingenic TX-ISP
kernel drivers for T20, T21, T23, T30, T31, T40, and T41 cameras. The active
cross-SoC work includes device-tested T23, T30, T31, T40, and T41 drivers plus
the static T20 and T21 recovery baselines. T31 is organized as a modular driver.
T20, T21, T23, T30, T40, and T41 retain large recovered core sources, but their
modules now have separate adapters for shared facilities where applicable.

The project goal is **behavioral equivalence with the OEM driver** while
supporting both Ingenic's unmodified proprietary `libimp.so` and the fully
open [OpenIMP](https://github.com/opensensor/openimp) userspace stack.

This is not a greenfield camera pipeline. It is a reverse-engineering and compatibility effort that combines:

- open-source kernel-driver development
- OEM binary analysis
- `libimp.so` ABI compatibility work
- image-quality tuning and calibration recovery

## T31 / SC301IOT Image-Quality Checkpoint

[Download the 4:5 portrait version for social…
