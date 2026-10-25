---
repo: "ThePhrozenKeep/D2MOO"
name: "D2MOO"
description: " Reimplementation of the Diablo2 game coupled with patching facilities for modders. "
readmeQualityOk: true
url: "https://github.com/ThePhrozenKeep/D2MOO"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 194
forks: 60
openIssues: 19
closedIssues: 71
watchers: 13
contributors: 18
recentReleases: 0
createdAt: "2020-12-25T17:17:01Z"
lastCommitAt: "2026-10-25T22:11:48Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 42
maintainers: ["Mw95", "ResurrectedTrader", "ayeh00747"]
openGraphImageUrl: "https://opengraph.githubassets.com/2019b33c7c1de2cbed63202bd08f3edb50a89cf5a14e347b5d0cd69a611964b2/ThePhrozenKeep/D2MOO"
---

# D2MOO - Diablo II Method and Ordinal Overhaul

This project is a re-implementation of the Diablo2 game coupled with patching facilities for modders.
The aim is to provide the modding community with an easy tool to understand and patch the game.
To ensure that we stay as close as possible to the original game, we do not provide fixes for bugs (yet).

The game assets, main executable code and anything related to hacking or piracy is NOT endorsed by the authors, and as such we will not provide code related to such subjects.
The original game assets and binaries is required to use this project.

## How to build

### Dependencies

For the patching we rely on the [D2.Detours](https://github.com/Lectem/D2.Detours.git) project, which is included as a git submodule. (use the `git submodule update --init --recursive` command, or clone this project with `git clone --recursive`)
You will also need to install the [CMake](https://cmake.org) build system and Visual C++ (or any C++ compiler that can generate .DLLs on Windows) which are freely available.

### Build the project

The recommended way is to use CMake presets.
You can generate a VS solution (located in `out/build/VS20XX`) and build…
