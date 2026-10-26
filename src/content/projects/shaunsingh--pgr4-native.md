---
repo: "shaunsingh/pgr4-native"
name: "pgr4-native"
description: "Native Direct3D 12 renderer for the Project Gotham Racing 4 static recompilation"
readmeQualityOk: true
url: "https://github.com/shaunsingh/pgr4-native"
language: "C++"
languages: ["C++"]
languagePcts: [80]
stars: 43
forks: 0
openIssues: 14
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 2
createdAt: "2026-10-21T20:58:15Z"
lastCommitAt: "2026-10-26T18:06:09Z"
lastReleaseAt: "2026-10-25T01:55:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 72
undervaluedScore: 31
maintainers: ["shaunsingh"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa1eac669d524036bbcfb85608754003cc61524757ee62d40b5c980b5f2939a3/shaunsingh/pgr4-native"
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
