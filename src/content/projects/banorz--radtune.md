---
repo: "banorz/radtune"
name: "radtune"
description: "A lightweight command-line tool to tune AMD GPU parameters using the AMD ADLX SDK. It allows for quick overclocking, undervolting, and power limit adjustments, as well as loading tuning profiles from XML files.."
readmeQualityOk: true
url: "https://github.com/banorz/radtune"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 14
forks: 2
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2025-12-23T14:50:55Z"
lastCommitAt: "2026-09-04T08:07:52Z"
lastReleaseAt: "2026-09-04T08:10:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 54
maintainers: ["banorz", "StuxxyOfficial"]
openGraphImageUrl: "https://opengraph.githubassets.com/d45f1c608016a7140d4c7fa02066b128181902f97bcdef278c278f62b7696c32/banorz/radtune"
---

# RadTune (ADLX)

A lightweight command-line tool to tune AMD GPU parameters using the AMD ADLX SDK. It allows for quick overclocking, undervolting, and power limit adjustments, as well as loading tuning profiles from XML files.

## Features

- **Query GPU Info**: List all detected AMD GPUs, their VRAM size, type, and current tuning settings.
- **Manual Tuning**: 
  - **GFX**: Set Min/Max Core Frequency (MHz) and Voltage (mV).
  - **VRAM**: Set Max Memory Frequency (MHz).
  - **Power**: Adjust Power Limit percentage.
  - **Fan**: Toggle Zero RPM mode.
- **XML Profile Support**: Load and apply custom tuning profiles (`.xml`) exported from AMD Software: Adrenalin Edition, with specialized mapping for undervolting and power limits.
- **Modern ADLX Integration**: Uses the latest ADLX SDK for compatibility with RDNA 2 (Navi 2x) and RDNA 3 (Navi 3x) architectures.

## Prerequisites

- **Windows 10/11**
- **AMD Radeon GPU** (Navi 2x/3x recommended for full feature support).
- **AMD ADLX SDK** — vendored as a pinned git submodule in `adlx_sdk/` (ADLX V1.4). Fetch it with `git submodule update --init` (see below).
- **CMake** (v3.10+)
- **Visual Studio 2022** (with C++ development…
