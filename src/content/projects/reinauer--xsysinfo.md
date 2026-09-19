---
repo: "reinauer/xSysInfo"
name: "xSysInfo"
description: "Extended System Information Utility for Classic Amiga Systems"
readmeQualityOk: true
url: "https://github.com/reinauer/xSysInfo"
language: "C"
languages: ["C"]
languagePcts: [85]
stars: 126
forks: 17
openIssues: 1
closedIssues: 30
watchers: 13
contributors: 11
recentReleases: 2
createdAt: "2025-12-11T00:58:07Z"
lastCommitAt: "2026-09-19T01:20:28Z"
lastReleaseAt: "2026-09-14T04:42:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 40
maintainers: ["reinauer", "big4billy", "codewiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/312a8989ed4fc633ab774668eafd2980286fcb22314cca05e391fd0924b3cce1/reinauer/xSysInfo"
discussionCount: 0
---

# xSysInfo

`xSysInfo` is a comprehensive system information utility designed for AmigaOS. It provides detailed insights into your Amiga system's hardware and software configuration, along with benchmarking capabilities.

**Note:** This program does not contain any code from the original AmigaOS SysInfo tool.

## Features

*   **Detailed Hardware Information**: Get in-depth reports on your CPU, memory, drives (including SCSI), expansion boards, and cache.
*   **Software Environment Overview**: View details about your AmigaOS software setup.
*   **Benchmarking**: Includes Dhrystone benchmarks to assess your system's performance.
*   **Graphical User Interface (GUI)**: User-friendly interface for easy navigation and information display.
*   **Printing Support**: Print out system reports for documentation or sharing (For now, the output is saved to a file in RAM:)
*   **Localization**: Supports multiple languages for its interface.

## Building `xSysInfo`

To build `xSysInfo`, you will need a GCC cross-compiler for m68k-amigaos (e.g., `m68k-amigaos-gcc`). The build process also requires `make`, `curl`, `md5sum`, `lha`, Python 3, `patch`, and `vasmm68k_mot` (VASM) to handle external…
