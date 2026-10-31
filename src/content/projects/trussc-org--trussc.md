---
repo: "TrussC-org/TrussC"
name: "TrussC"
description: "TrussC main repository"
readmeQualityOk: true
url: "https://github.com/TrussC-org/TrussC"
homepage: "https://discord.gg/7MRRny56VQ"
language: "C++"
languages: ["C++", "C"]
languagePcts: [55, 37]
topics: ["sokol", "trussc", "creative-coding", "framework", "direct3d", "metal", "opengl", "wasm"]
stars: 60
forks: 7
openIssues: 125
closedIssues: 341
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-12-14T17:06:43Z"
lastCommitAt: "2026-10-31T15:38:16Z"
lastReleaseAt: "2026-03-25T15:38:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 47
maintainers: ["tettou771"]
openGraphImageUrl: "https://opengraph.githubassets.com/3826af1ff86a57ec38844dde517aad4c680d523f2364de36d0e78ffd063b71e8/TrussC-org/TrussC"
---

# TrussC

A lightweight creative coding framework based on sokol.
Inspired by openFrameworks, implemented simply with modern C++.

## Features

- **Lightweight**: Minimal dependencies, built on sokol
- **Header-only**: Most features are header-only
- **C++20**: Leverages modern C++ features
- **Cross-platform**: macOS 14+ (Metal), Windows (D3D11), Linux (OpenGL), Raspberry Pi (GLES3), Web (WebGPU), Android (GLES3)
- **oF-like API**: Familiar design for openFrameworks users

## Quick Start

**-> See [GET_STARTED.md](https://github.com/TrussC-org/TrussC/blob/HEAD/docs/GET_STARTED.md) to get up and running!**

### Using Project Generator (Recommended)

Build it once from `tools/` (run `tools/build_mac.command`, `tools/build_linux.sh`, or `tools/build_win.bat`) to create projects via GUI.
Supports VSCode, Cursor, Xcode, and Visual Studio.

### Command Line Build

```bash
# Build an example
cd examples/graphics/graphicsExample
cmake --preset macos      # or: windows, linux, web
cmake --build build-macos --parallel

# Run (macOS)
./bin/graphicsExample.app/Contents/MacOS/graphicsExample
```

### Minimal Code

```cpp
#include "TrussC.h"
using namespace std;
using namespace tc;

class…
