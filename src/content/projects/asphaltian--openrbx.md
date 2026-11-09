---
repo: "Asphaltian/OpenRBX"
name: "OpenRBX"
description: "A decompilation and future source port of Roblox (December 2007)"
readmeQualityOk: true
url: "https://github.com/Asphaltian/OpenRBX"
language: "C++"
languages: ["C++", "C", "HTML"]
languagePcts: [46, 25, 24]
topics: ["reverse-engineering", "roblox", "decompilation", "cpp", "win32"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-31T09:50:09Z"
lastCommitAt: "2026-11-09T03:28:34Z"
lastReleaseAt: "2026-11-09T03:29:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 48
maintainers: ["Asphaltian"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ef324ca824f0f02d1002de9c516082c91d99829254574e1ff5fb9fc57b8d04b/Asphaltian/OpenRBX"
---

# OpenRBX

[Discord](https://discord.gg/2JcBQFxVPv) | [Contributing](https://github.com/Asphaltian/OpenRBX/blob/HEAD/CONTRIBUTING.md)

This is a decompilation of Roblox as it was released in December 2007. We're writing the source back until Visual C++ compiles it into the same binaries, instruction for instruction, and the end goal is a codebase we can build on.

We follow the conventions and tooling of the [LEGO Racers decompilation](https://github.com/isledecomp/racers).

Keep in mind that this code reproduces the original release as it was, bugs included. It only builds for 32-bit Windows.

## Progress

All but ~140 of the Roblox functions in `WebService.dll` from RBXGS, the game server, compile to the same instructions as the original.

The client, `Roblox.exe`, is currently being worked on. Both binaries were built from the same engine libraries, so a little over a third of it already matches.

## Building

You will need:

* Visual C++ 8.0 SP1. [MSVC800-SP1](https://github.com/Asphaltian/MSVC800-SP1) is a portable copy that doesn't need installing. This is the compiler the original was built with, and no other version produces the same code.
* [CMake](https://cmake.org/),…
