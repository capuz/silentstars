---
repo: "hildenborg/m68k-atari-dev"
name: "m68k-atari-dev"
description: "Atari 16/32 bit C/C++/ASM development and debugging toolchain."
readmeQualityOk: true
url: "https://github.com/hildenborg/m68k-atari-dev"
language: "C"
languages: ["C", "Assembly"]
languagePcts: [60, 22]
stars: 14
forks: 0
openIssues: 3
closedIssues: 16
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-20T12:12:36Z"
lastCommitAt: "2026-07-28T14:59:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 55
maintainers: ["hildenborg"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b0ccf3f77bf0264c0d25a1784c76ba1812795e488286262ebf4d55b9b21d407/hildenborg/m68k-atari-dev"
---

# m68k-atari-dev
A development system providing cross compiling and remote debugging for Atari TOS computers.  
NOTE: A [wiki have been started](https://github.com/hildenborg/m68k-atari-dev/wiki) that in time will replace most of this readme.  
NOTE2: There is a "stable" branch that is kept at an always working state. If you want to use that branch, then do `git checkout stable` after cloning the repository.  

## Key features:
* Standard C and C++ libraries using newlib "m68k-atari-elf".
* Aims to stay up to date with the latest gcc, newlib and binutils versions.
* TOS, AES, VDI and NVDI libraries.
* Elf to prg converter that keeps binary sections unchanged for symbol compatibility.
* A gdbserver specifically written from the ground up for Atari TOS computers.
* Editing, building and debugging can all be integrated in Visual Studio Code.

## Setup for Linux (Recommended! Tested on Ubuntu):
1. Open a terminal.
2. Enter: `sudo apt update`
3. Enter: `sudo apt install build-essential texinfo flex bison libgmp-dev libmpfr-dev libmpc-dev gdb-multiarch python3`
4. Enter: `git clone https://github.com/hildenborg/m68k-atari-dev.git` to download m68k-atari-dev.
5. Enter: `cd…
