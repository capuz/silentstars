---
repo: "DaemonEngine/Daemon"
name: "Daemon"
description: "Daemon Game Engine — Maintained multiplatform 3D game engine tailored for first-person shooters, delivering 25 years of modernization after id Tech 3. Historically based on ioquake3, Wolf:ET and XreaL with its own features and improvements. Maintained by Dæmon Developers for the Unvanquished project."
readmeQualityOk: true
url: "https://github.com/DaemonEngine/Daemon"
homepage: "https://unvanquished.net"
language: "C++"
languages: ["C++"]
languagePcts: [80]
topics: ["quake-engine", "c-plus-plus", "game-engine", "game-development", "opengl", "openal", "bsp", "glsl", "idtech3", "xreal"]
stars: 393
forks: 75
openIssues: 213
closedIssues: 384
watchers: 16
contributors: 57
recentReleases: 0
createdAt: "2015-03-13T03:57:34Z"
lastCommitAt: "2026-10-09T10:50:12Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 88
undervaluedScore: 32
maintainers: ["illwieckz", "slipher", "DolceTriade"]
openGraphImageUrl: "https://opengraph.githubassets.com/458dedac3953c446987038a7b497d7ffad21158a057150e7cb5f12f118d700b8/DaemonEngine/Daemon"
---

# Dæmon Game Engine

Dæmon is the standalone game engine that powers the multiplayer first person shooter [Unvanquished](https://unvanquished.net).

ℹ️ We provide ready-to-use downloads for the Unvanquished game on the [Unvanquished download page](https://unvanquished.net/download/), builds of the Dæmon engine are included.

ℹ️ The Unvanquished game logic source code can be found there: [github.com/Unvanquished/Unvanquished](https://github.com/Unvanquished/Unvanquished).

## Workspace requirements

To fetch and build Dæmon, you'll need:
`git`,
`cmake`,
and a C++14 compiler.

The following are actively supported:
`gcc` ≥ 9,
`clang` ≥ 11,
Visual Studio/MSVC (at least Visual Studio 2019).

## Dependencies

Required:
`zlib`,
`libgmp`,
`libnettle`,
`libcurl`,
`SDL2`,
`GLEW`,
`libpng`,
`libjpeg` ≥ 8,
`libwebp` ≥ 0.2.0,
`Freetype`,
`OpenAL`,
`libogg`,
`libvorbis`,
`libopus`,
`libopusfile`.

Optional:
`ncurses`.

### MSYS2

MSYS2 is the recommended way to build using MinGW on a Windows host.

Required packages for 64-bit: `mingw-w64-x86_64-gcc`, `mingw-w64-x86_64-cmake`, `make`  
Required packages for 32-bit: `mingw-w64-i686-gcc`, `mingw-w64-i686-cmake`, `make`

## Downloading the sources…
