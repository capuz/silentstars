---
repo: "drsnuggles8/OloEngineBase"
name: "OloEngineBase"
description: "A game engine based on Hazel"
url: "https://github.com/drsnuggles8/OloEngineBase"
language: "C++"
languages: ["C++"]
languagePcts: [93]
topics: ["cpp", "cmake", "game-engine"]
stars: 17
forks: 0
openIssues: 37
closedIssues: 77
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-12-15T12:01:06Z"
lastCommitAt: "2026-06-30T06:50:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "under_pressure"]
healthScore: 93
undervaluedScore: 61
maintainers: ["drsnuggles8"]
openGraphImageUrl: "https://opengraph.githubassets.com/d75972bb52e9cd4143ab07198b86b05eb55f20728bf50f7ee404ce4ff8b9aea8/drsnuggles8/OloEngineBase"
fundingLinks: ["GITHUB:https://github.com/drsnuggles8"]
---

# OloEngine

OloEngine is primarily an early-stage cross-platform (Windows and Linux) interactive application and rendering engine based on [Hazel](https://github.com/TheCherno/Hazel/).

## Screenshots

### 3D Physics Integration

### Animated Models

### PBR Material Rendering

## Getting Started

**Supported platforms:** Windows (Visual Studio 2026 via the default `msvc` preset; Visual Studio 2022 also supported via `scripts/Win-GenerateProjectVS2022.bat`), Linux (GCC 14+).
WSL can compile all targets and run OloServer, but OloEditor requires a native
OpenGL 4.6 GPU (WSL2's software renderer only supports OpenGL 4.5).

Requirements:
- Python 3.10+, with the 'jinja2' package installed (needed for building glad2)
- CMake 4.2+ (required by `CMakePresets.json`; the root `CMakeLists.txt` itself only requires 3.25, so plain `cmake -B build -G "Visual Studio 17 2022"` still works without presets)
- Vulkan SDK (for SPIR-V shader compilation)

You can clone the repository to a local destination using git:

`git clone https://github.com/drsnuggles8/OloEngineBase`

This project uses [CMake](https://cmake.org/download/) to build the project's solution files. The `scripts/` directory…
