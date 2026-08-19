---
repo: "ES40-Emu/es40"
name: "es40"
description: "AlphaServer ES40 emulator"
readmeQualityOk: true
url: "https://github.com/ES40-Emu/es40"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 110
forks: 21
openIssues: 9
closedIssues: 46
watchers: 18
contributors: 18
recentReleases: 1
createdAt: "2023-05-08T04:25:37Z"
lastCommitAt: "2026-08-19T04:05:00Z"
lastReleaseAt: "2026-06-11T23:05:05Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 96
undervaluedScore: 46
maintainers: ["gdwnldsKSC", "mvorl", "jbglaw"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/637627288/99adc8f5-deec-4cd3-b8ee-85e6c529214d"
discussionCount: 25
---

# DEC ES40 Simulator

es40 is free software. Please see the file COPYING for details.

For building and installation instructions please see below.

Windows 11 with VS2026 and X64 builds only is the main development environment.

Requires npcap for networking. Use "NN" builds if you do not need networking.

Latest VC redist may be required to run binaries, available here:  
https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist  
Latest 2017-2026 x64 redistributable is recommended.  
At minimum the version matching your build toolchain is needed.

For outdated documentation, please see the files in the doc subdirectory.

### Please use es40-cfg to generate a config the first time you use it to ensure you do not omit any required devices from the chipset.
### Reference src\es40.cfg for configuration values and explanations

# Live shot of X11 running on emulated S3 via SDL display!

------------------------------------------------------------------------

# Building Instructions for Windows

We'll need both npcap and SDL-3.4 for full featured es40 builds.

If you build only NS target configurations, then you do not need SDL.  
If you build only NN target…
