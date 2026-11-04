---
repo: "xyproto/tinyhat"
name: "tinyhat"
description: "Linux distro based on archlinux32 and Arch Linux for retro gamedev, for playing DOS and SNES games, for demoscene dev, for old x86 PCs with less than 1G RAM. Fits on a 1G memory stick. Uses less than 100M RAM after boot. Also has the goal of lowering the threshold for getting into programming in C, Assembly and Lua."
readmeQualityOk: true
url: "https://github.com/xyproto/tinyhat"
homepage: "https://roboticoverlords.org/tinyhat/"
language: "Shell"
languages: ["Shell", "C"]
languagePcts: [60, 27]
topics: ["demoscene", "gamedev", "linux", "linux-distribution", "linux-distro", "retrogamedev", "retrogaming", "game-development", "linux-custom-image", "liveboot"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-10-06T16:55:55Z"
lastCommitAt: "2026-11-04T11:27:16Z"
lastReleaseAt: "2026-11-03T00:03:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 49
maintainers: ["xyproto"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b4e4e9907b713fa6fc1e6c796712564791b4d9aefd918ed00daed14bff1e510/xyproto/tinyhat"
---

# Tiny Hat

This is a Linux distro based on Arch Linux and [archlinux32](https://archlinux32.org/), with a few custom packages on top.

This `README.md` file, design choices and package selection is human made. AI tooling has been used for creating the Makefile, adding test scripts, debugging why some program fails to start etc.

Time consuming testing on real hardware has been done by a human (me).

### Goals

The goals for this distro are:

* Use less than 100M of memory after booting.
* Use around 500M of disk space (currently uses a bit more, but still usable on a 1GB USB stick).
* Use modern libraries, frameworks and protocols (SDL3, Wayland).
* To be possible to use on a 32-bit or 64-bit x86 machine with little ram and disk space, for:
  * Retro gaming (ScummVM, DosBox-X and ZSNES).
  * Playing whichever DOS games are on the first harddrive, after booting from an USB stick.
  * Creating graphics / pixel art (LibreSprite).
  * Creating music / tracking (Fast Tracker II / ft2-clone).
  * Programming in C with SDL3 and/or Raylib and/or fluidsynth, with tab completion in Orbiton.
  * Debugging with gdb and Orbiton.
  * Programming in Assembly with nasm.
  * Programming for SNES…
