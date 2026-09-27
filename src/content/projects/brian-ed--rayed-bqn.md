---
repo: "Brian-ED/rayed-bqn"
name: "rayed-bqn"
description: "raylib with a bit of bacon spice!"
readmeQualityOk: true
url: "https://github.com/Brian-ED/rayed-bqn"
language: "BQN"
languages: ["BQN"]
languagePcts: [99]
topics: ["bqn", "raylib"]
stars: 53
forks: 10
openIssues: 11
closedIssues: 29
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2023-03-14T22:12:04Z"
lastCommitAt: "2026-09-27T09:27:55Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 89
undervaluedScore: 51
maintainers: ["Brian-ED", "cannadayr", "totallyuniquelily"]
openGraphImageUrl: "https://opengraph.githubassets.com/46efd9b1da404ca36237bdcd7f0129146e8fb79a12eb5c19bc2d4dd934a25dff/Brian-ED/rayed-bqn"
---

# Rayed BQN
Rayed BQN is a library made to write cross-platform applications using the [BQN programming language](https://mlochbaum.github.io/BQN/).
It inter-ops with [raylib](https://github.com/raysan5/raylib) via [FFI](https://mlochbaum.github.io/BQN/spec/system.html#foreign-function-interface-ffi), but changes a lot of raylib's functions to be more in-lined with BQN's syntax.

Breaking changes to any feature in rayed.bqn should be expected for now, as this library is very young and experimental.
`imports/raylib-bqn/raylib.bqn` from [raylib-bqn](https://github.com/Brian-ED/raylib-bqn) contains the bindings to raylib. Because of [c-header-to-bqn-ffi](https://github.com/Brian-ED/c-header-to-bqn-ffi) for parsing `raylib.h`, the binding is made automatically.

# Getting started
Rayed-bqn works on Windows, Linux and MacOS.
Make sure you've installed [git](https://git-scm.com/downloads) and CBQN on [Windows](https://github.com/vylsaz/cbqn-win-docker-build/releases), [Linux](https://github.com/dzaima/CBQN) or [MacOS](https://github.com/dzaima/CBQN). Rayed-bqn works with CBQN version 0.11.0, and hopefully >0.11.0 as well.

Make sure bqn is on `PATH`. To check, run `bqn` in the terminal,…
