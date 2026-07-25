---
repo: "tsun3doku/ParaMetal"
name: "ParaMetal"
description: "Realtime 3D heat transfer simulation"
readmeQualityOk: true
url: "https://github.com/tsun3doku/ParaMetal"
homepage: "https://parametal.com"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["computergraphics", "geometry-processing", "vulkan", "finite-element-analysis"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2024-11-05T01:34:29Z"
lastCommitAt: "2026-07-25T06:00:10Z"
lastReleaseAt: "2026-05-04T18:24:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 69
maintainers: ["tsun3doku"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/883449797/737be581-3773-42d8-8e20-fcf8d2003d1a"
discussionCount: 0
---

# ParaMetal

This project allows the visualization of heat transfer between two or more 3D closed surface geometry. The simulation is deterministic, transient and operates in realtime using stable pre-processing methods. 

The major pre-processing methods include an intrinsic remeshing operation that preserves the shape of the geometry and a meshless restricted voronoi diagram step that discretizes the volume of the surface boundary.

This project is a work in progress. Functionality, performance and physical accuracy will be continuously updated.

## Quick Start
1. Download the latest release from the [Releases](https://github.com/tsun3doku/ParaMetal/releases) page
2. Extract the zip file
3. Run parametal.exe

### System Requirements
- 64-bit Windows 10 or Windows 11
- NVIDIA GPU with CUDA compute capability 7.5 or newer
- Vulkan 1.3 or higher support ([Check GPU compatibility](https://vulkan.gpuinfo.org/))

The downloadable release includes the required CUDA and AMGX runtime libraries. Building ParaMetal from source additionally requires the development tools below.

### Source Build Prerequisites
- [CMake](https://cmake.org/download/)
- [Microsoft Visual C++ (MSVC) Build…
