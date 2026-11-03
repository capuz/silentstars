---
repo: "dogo/oslib"
name: "oslib"
description: "OldSchool Library (OSLib), a 2D graphics library for the PSP."
readmeQualityOk: true
url: "https://github.com/dogo/oslib"
homepage: "http://dogo.github.io/oslib/"
language: "C"
languages: ["C"]
languagePcts: [91]
topics: ["oldschool-library", "psp", "graphic-library", "oslib"]
stars: 55
forks: 13
openIssues: 0
closedIssues: 18
watchers: 5
contributors: 6
recentReleases: 0
createdAt: "2012-03-01T04:33:10Z"
lastCommitAt: "2026-11-03T12:48:09Z"
lastReleaseAt: "2025-08-30T10:43:37Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 57
maintainers: ["dogo"]
openGraphImageUrl: "https://opengraph.githubassets.com/087ae7606bba6f809b3882f44102f4184c2037476643217bec6d7a00494e77e2/dogo/oslib"
---

# OldSchool Library (OSLib)

## Overview

OldSchool Library (OSLib) is a lightweight and versatile C++ library designed to provide functionality and tools commonly used in classic game development and retro programming projects. It bridges the gap between modern and old-school development environments, making it easier to create and manage applications with a nostalgic touch.

## Features

- **Graphics and Rendering:** Basic graphics functions and rendering capabilities for 2D game development.
- **Input Handling:** Manage keyboard, mouse, and gamepad inputs for interactive applications.
- **Sound Management:** Simple sound and music playback functionalities.
- **Utility Functions:** A collection of utility functions for handling files, strings, and more.
- **Cross-Platform Support:** Compatible with multiple platforms, including Windows, macOS, and Linux.

## Building

### Library

**Makefile:**
```bash
make
make install
```

**CMake:**
```bash
cmake --preset psp
cmake --build --preset psp -j
cmake --install build
```

### Samples

Each sample can be built standalone from its own directory using the same commands above.

To build all samples at once from the `samples/` directory:…
