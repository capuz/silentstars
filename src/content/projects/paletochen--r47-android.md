---
repo: "paletochen/r47_android"
name: "r47_android"
description: "Android Port of the Swissmicros R47 calculator"
readmeQualityOk: true
url: "https://github.com/paletochen/r47_android"
language: "C"
languages: ["C"]
languagePcts: [86]
stars: 13
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-25T23:48:22Z"
lastCommitAt: "2026-10-12T11:15:11Z"
lastReleaseAt: "2026-03-10T17:57:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 47
maintainers: ["paletochen"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d8d4977c6bfbf91f081978d679691aa804a2479a11af155df13636cfc806871/paletochen/r47_android"
---

# R47 Android Port: RPN Calculator

This repository provides a photographic Android port of the [SwissMicros C43/C47 project](https://gitlab.com/rpncalculators/c43.git). It runs the high-performance mathematical core of the C43 via a native JNI wrapper.

## 🎯 Features
- **Photographic Replica**: High-fidelity UI matching the physical hardware from SwissMicros (R47).
- **Native Performance**: Math engine runs in C via JNI for 100% parity with the hardware.
- **Modern Android Support**: Optimized for high-refresh screens and 16KB page sizes (Android 15+).
- **SAF Integration**: Full support for Android's Storage Access Framework for programs and state files.

## 🛠️ Linux Dependencies
To build the simulator or the Android APK on Linux (Ubuntu/Debian), you will need the following:

### 1. Build Tools & Math Libraries
```bash
sudo apt-get install git build-essential meson ninja-build libgmp-dev libgtk-3-dev libpulse-dev
```

**NOTE:** Please refer to the [Build instructions](https://gitlab.com/h2x/c47-wiki/-/wikis/Build-instructions) in the [C47-wiki](https://gitlab.com/h2x/c47-wiki/-/wikis/home) for further details on how to set up a development environment in Macos, Linux, Windows.…
