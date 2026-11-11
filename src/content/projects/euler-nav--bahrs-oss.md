---
repo: "euler-nav/bahrs-oss"
name: "bahrs-oss"
description: "EULER-NAV BAHRS Open Source Software"
readmeQualityOk: true
url: "https://github.com/euler-nav/bahrs-oss"
homepage: "https://euler-nav.com/bahrs"
language: "C"
languages: ["C"]
languagePcts: [94]
stars: 24
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-08-27T07:46:56Z"
lastCommitAt: "2026-11-11T10:51:53Z"
lastReleaseAt: "2026-05-29T13:47:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 58
undervaluedScore: 27
maintainers: ["fbaklanov"]
openGraphImageUrl: "https://opengraph.githubassets.com/94ea61f462130f60463ee6f23b1ac35e8e32adc2ab6439447c4d83d8394e95d1/euler-nav/bahrs-oss"
---

# EULER-NAV BAHRS software

This repository contains software for the [EULER-NAV BAHRS](https://euler-nav.com/bahrs), a baro-inertial attitude and heading reference system. The device provides attitude, height, vertical speed, angular rates and specific force over RS-232 and CAN, using redundant inertial, pressure and magnetic sensors.

The repository includes firmware for BAHRS hardware revisions 2 and 3, a PC replay tool, log evaluation and calibration scripts, configuration tools and software architecture documentation. The sensor fusion algorithm is supplied as precompiled libraries. Source code of the sensor fusion library is planned for publication
mid December 2026.

## Get the repository

The repository and its tools target **Windows 10/11**. Install [Git for Windows](https://git-scm.com/download/win), which includes Git LFS. Then, in PowerShell or Command Prompt, clone to a short path such as `C:\Work\bahrs-oss`:

```bat
git config --global core.longpaths true
git lfs install
git clone --recurse-submodules https://github.com/euler-nav/bahrs-oss.git C:\Work\bahrs-oss
cd C:\Work\bahrs-oss
git lfs pull
```

The short path and `core.longpaths` avoid "file name too long"…
