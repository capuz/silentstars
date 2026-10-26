---
repo: "alfishe/unreal-ng"
name: "unreal-ng"
description: "A modern, scriptable, multi-instance ZX Spectrum/Pentagon emulator platform for developers, demosceners, reverse engineers, testing, visualization, and AI automation. Inspired by unreal speccy but went way far and beyond."
readmeQualityOk: true
url: "https://github.com/alfishe/unreal-ng"
language: "C++"
languages: ["C++"]
languagePcts: [77]
stars: 26
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2022-07-27T21:56:46Z"
lastCommitAt: "2026-10-26T18:06:34Z"
lastReleaseAt: "2026-10-11T23:49:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 58
maintainers: ["alfishe"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b7a833e321d2908cb3b80f0de598d0914fc30dde29fd0459d56830beb0de3b4/alfishe/unreal-ng"
---

Fully re-engineered Unreal Speccy emulator

Cross-platform emulation core:
- Windows 32-bit
- Windows 64-bit
- Linux 32/64-bit
- macOS 64-bit

Modular architecture:
- core - all emulation logic

Pre-requisites:
- CMake v3.16 or newer
- QT 6.x with 5.x compatibility installed if you want to use GUI

Submodules:
- Google Test
- Google Benchmark

# How to start:

    git clone --recurse-submodules https://github.com/alfishe/unreal-ng

or

    git clone https://github.com/alfishe/unreal-ng
    git submodule init
    git submodule update

Updates:

    git pull --recurse-submodules
    
# Build

## Linux / macOS

    mkdir build
    cd build
    cmake ..
    cmake --build . --parallel 12

/src /tests /benchmarks can be built separately same way

## Windows

CMake/MSBuild chain under windows behaves weirdly: it generates MSVC projects and always uses Debug configuration totally ignoring CMAKE_BUILD_TYPE value. So the only way to have control over build type - to use cmake --config parameter.
 
    --config Debug
    --config Release

The rest is similar to *nix:

    mkdir build
    cd build
    cmake ..
    cmake --build . --config Release

/src /tests /benchmarks can be built…
