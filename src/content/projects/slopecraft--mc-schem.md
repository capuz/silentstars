---
repo: "SlopeCraft/mc_schem"
name: "mc_schem"
description: "A rusty bridge between various Minecraft schematic formats."
readmeQualityOk: true
url: "https://github.com/SlopeCraft/mc_schem"
homepage: "https://crates.io/crates/mc_schem"
language: "Rust"
languages: ["Rust", "C++"]
languagePcts: [72, 26]
stars: 9
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 6
recentReleases: 1
createdAt: "2023-12-16T06:05:44Z"
lastCommitAt: "2026-10-27T12:39:13Z"
lastReleaseAt: "2026-10-24T07:06:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 83
maintainers: ["ToKiNoBug"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ba4ce58cfa4f93f1ddcb7d215015fbde1861254f11936ff6d73b7412a53e56c/SlopeCraft/mc_schem"
---

# mc_schem

A rust library to generate, load, manipulate and save minecraft schematic files.

## Supported formats

|         Format          |   Extension   | Load | Save |
|:-----------------------:|:-------------:|:----:|:----:|
|       Litematica        | `.litematica` |  √   |  √   |
|    Vanilla structure    |    `.nbt`     |  √   |  √   |
| WorldEdit schem (1.13+) |   `.schem`    |  √   |  √   |
| WorldEdit schem (1.12-) | `.schematic`  |  √   |      |

## Contents

1. `mc_schem` (rlib)

   The main rust lib
2. `mc_schem` (cdylib)

   C ffi for mc_schem
3. `mc_schem` C++ wrapper

   A header-only c++ wrapper based on C ffi of mc_schem
4. `schemtool` (executable)

   An executable to do various manipulations on schematics

## Build

1. Build with cargo directly (no c/c++ files)

   ```shell
   cargo build # debug
   cargo build --release #release
   ```

2. Build with cmake (with c/c++ files)

   ```shell
   mkdir build
   cmake -S . -B build -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=install
   cmake --build build --parallel
   cmake --install build
   ```

3. Use with cmake

    ```cmake
    find_package(mc_schem 1.3.2 CONFIG REQUIRED)…
