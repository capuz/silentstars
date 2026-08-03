---
repo: "hasseily/SuperDuperDisplay"
name: "SuperDuperDisplay"
description: "Display engine for the Apple 2 network bus card"
readmeQualityOk: true
url: "https://github.com/hasseily/SuperDuperDisplay"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 5
forks: 4
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2023-04-29T07:36:16Z"
lastCommitAt: "2026-08-03T06:43:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["hasseily"]
openGraphImageUrl: "https://opengraph.githubassets.com/5eb6d82375c4b0cf331123298fa584b4801e95b4be9bafbe0efd42ea74c2f883/hasseily/SuperDuperDisplay"
---

# SuperDuperDisplay
Display engine for the Apple 2 network bus card "Appletini"

# Platform-specific Compilation
## Mac OS X (XCode)
Download the DMG from https://github.com/libsdl-org/SDL/releases/tag/release-2.30.5 and copy it into /Library/Frameworks.
## Windows (Visual Studio)
TODO...
## MSYS2/MINGW, Ubuntu 14.04.1 and Mac OS X (Makefile)
Use the included Makefile. Check the comments at the top.

# DONE
- Switch to the new USB protocol using the Appletini FPGA
- Implement support for the Mockingboard 6522s' interrupts

# TODO
- Fix the SSI263 Speech implementation and get new phoneme samples
- COL160 DHGR Video-7 mode?
- For non-border pixels, use 4 border color bits in VRAM to store Video-7 & EVE registers
- VidHD Text modes
