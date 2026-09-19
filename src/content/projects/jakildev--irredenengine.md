---
repo: "jakildev/IrredenEngine"
name: "IrredenEngine"
description: "The Irreden Engine"
readmeQualityOk: true
url: "https://github.com/jakildev/IrredenEngine"
language: "C++"
languages: ["C++", "Shell"]
languagePcts: [51, 21]
stars: 8
forks: 0
openIssues: 92
closedIssues: 1562
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-10-11T18:57:10Z"
lastCommitAt: "2026-09-19T01:17:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 72
maintainers: ["jakildev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/703711376/f1637357-db4a-4eb1-8e1c-18a9e04e92af"
fundingLinks: ["PATREON:https://patreon.com/jakildev"]
discussionCount: 2
---

# Irreden Engine

## About
The Irreden Engine is an isometric "pixelatable" voxel content and game engine.

Created by and maintained by [jakildev](https://github.com/jakildev).

## Build
- Windows: CMake, OpenGL backend by default.
- macOS: CMake, Metal backend by default.

### Prerequisites
-   CMake 3.28+
-   A C++23 compiler toolchain
-   Git
-   Platform runtime prerequisites:
    -   Windows: OpenGL-capable hardware/toolchain
    -   macOS: Xcode Command Line Tools, plus full Xcode if you want Metal shader precompilation via `xcrun metal`

### Instructions
-   Clone the repository.
-   Configure CMake.
-   Build all targets.
-   Launch a demo creation.

### macOS quick start

1. Bootstrap dependencies:
```
./scripts/bootstrap_macos.sh
```
2. Configure:
```
cmake --preset macos-debug
```
3. Build:
```
cmake --build --preset macos-build-all
```
4. Optional quality/test targets:
```
cmake --build --preset macos-format-check
cmake --build --preset macos-lint
cmake --build --preset macos-tests
ctest --preset macos-default-tests
```

Notes:
-   The bootstrap script installs `ffmpeg`, `pkg-config`, `llvm`, and `qt@5` so video recording and the EasyProfiler GUI can work locally.
-…
