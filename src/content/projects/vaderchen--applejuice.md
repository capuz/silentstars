---
repo: "VaderChen/AppleJuice"
name: "AppleJuice"
description: "Windows compatibility layer and native launcher for Apple Silicon Macs. Statically links AppleJuiceKernel for x86/x64 execution and maps Windows APIs to macOS and Metal."
originalDescription: "Windows compatibility layer and native launcher for Apple Silicon Macs. Statically links AppleJuiceKernel for x86/x64 execution and maps Windows APIs to macOS and Metal."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/VaderChen/AppleJuice"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-21T01:43:40Z"
lastCommitAt: "2026-11-22T02:12:20Z"
lastReleaseAt: "2026-11-12T07:15:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["VaderChen"]
openGraphImageUrl: "https://opengraph.githubassets.com/20d63e76b43af91cbbd334875e0832abd3f5ee3d34eaa7e8c5aadabb9af82c21/VaderChen/AppleJuice"
---

# AppleJuice

[Traditional Chinese](https://github.com/VaderChen/AppleJuice/blob/HEAD/README.md) · [English](https://github.com/VaderChen/AppleJuice/blob/HEAD/README.en.md) · [Japanese](https://github.com/VaderChen/AppleJuice/blob/HEAD/README.ja.md) · [Korean](https://github.com/VaderChen/AppleJuice/blob/HEAD/README.ko.md)

A compatibility project for running Windows programs on Apple Silicon Macs, including the **Win64 Launcher** graphical launcher and the **x64arm** command-line program. AppleJuice provides PE/DLL loading and Windows compatibility services, and connects windows, graphics, audio, and input to native macOS interfaces and Metal.

The minimum system for release builds is **Apple Silicon, macOS 13.0**. Frame interpolation additionally requires **macOS 26 or later** and a supported device; when this condition is not met, interpolation is disabled. Normal program execution, MetalFX upscaling, and spatial audio mixing do not require an upgrade to macOS 27.
