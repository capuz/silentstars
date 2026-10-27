---
repo: "shaunsingh/pgr4-native"
name: "pgr4-native"
description: "Native Direct3D 12 renderer for the Project Gotham Racing 4 static recompilation"
readmeQualityOk: true
url: "https://github.com/shaunsingh/pgr4-native"
language: "C++"
languages: ["C++"]
languagePcts: [80]
stars: 52
forks: 0
openIssues: 13
closedIssues: 3
watchers: 4
contributors: 2
recentReleases: 4
createdAt: "2026-10-21T20:58:15Z"
lastCommitAt: "2026-10-27T12:35:37Z"
lastReleaseAt: "2026-10-26T21:37:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 74
undervaluedScore: 32
maintainers: ["shaunsingh"]
openGraphImageUrl: "https://opengraph.githubassets.com/156f44b1b0e71e955dad47713ac0b84c4e7432d25ab342129bbb0dfc2b49ff17/shaunsingh/pgr4-native"
discussionCount: 0
---

# pgr4-native

A native Direct3D 12 renderer for a static recompilation of Project Gotham Racing 4 (Title
Update #2), built on the [ReXGlue](https://github.com/rexglue/rexglue-sdk) SDK with fixes from
[Xenia Canary](https://github.com/xenia-canary/xenia-canary). It builds on the core work of
[safzanpirani/pgr4-native](https://github.com/safzanpirani/pgr4-native), which grew out of
[MTR-PGR4](https://github.com/MissingThePixel/MTR-PGR4) and, before it,
[PGR4-Recomp](https://github.com/beatrixzy/PGR4-Recomp)

## Building and running

Most people should grab the latest release from https://github.com/shaunsingh/pgr4-native/releases,
the instructions below are for active development of the latest changes etc

The build runs on Linux and cross-compiles the Windows executables with clang-cl. They run under
Proton, or on Windows. You need your own PGR4 disc, extracted, and Title Update #2, either as its
package or as its two files. The disc is region-free and the PAL one matches the NTSC one file for
file, so either works, and `--user_language` picks the language. This repository contains no game
data, and the C++ that the build generates from the game's executables must not be…
