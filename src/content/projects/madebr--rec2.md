---
repo: "madebr/rec2"
name: "rec2"
description: "Carmageddon 2, revisited"
readmeQualityOk: true
url: "https://github.com/madebr/rec2"
language: "C"
languages: ["C"]
languagePcts: [99]
stars: 57
forks: 7
openIssues: 0
closedIssues: 2
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2022-07-04T17:15:58Z"
lastCommitAt: "2026-11-01T22:59:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 52
maintainers: ["ApexWorm", "Harmalarm"]
openGraphImageUrl: "https://opengraph.githubassets.com/95d4a714adde31cee663ab77c8034f62aaa6f7e505f7de73e7d7ca04d49f1b72/madebr/rec2"
discussionCount: 0
---

# Carmageddon 2, revisited

This project attempts to document 1998's Carmageddon 2 by writing equivalent C code.

When enough functions have been replaced, it should become possible to not need the retail binary anymore and let the game run on modern non-Windows systems.

## Status

## Requirements

- Carmageddon 2: this project needs the original game data function
- MSVC 5 SP3

## Build requirements

- 32-bit x86 compiler:
  - MSVC 11.0 (Visual Studio 97 SP3) compiler for matching build, or
  - a modern MinGW or MSVC toolchain
- DirectX SDK: we need `dinput` and `dxguid`.
  - MinGW provides these libraries out-of-the box
  - MSVC does not ship with a *DirectX SDK*: this [time-period correct version on archive.org](https://archive.org/details/MicrosoftDirectX7SDK) works perfect.
- [libtiff](http://www.libtiff.org/): this library is used to convert tiff images to BRender pixelmaps

## Goals

- Exact same behavior as the original
- Matching binary
- Every single commit should compile and work: this enables `git-bisect` to search for regressions

## License

rec2 is licensed under the [MPL-2.0 (Mozilla Public License 2.0)](https://www.mozilla.org/en-US/MPL/)

## Credits

- The…
