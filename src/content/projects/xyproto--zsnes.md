---
repo: "xyproto/zsnes"
name: "zsnes"
description: "Classic Super Nintendo emulator"
readmeQualityOk: true
url: "https://github.com/xyproto/zsnes"
language: "C"
languages: ["C"]
languagePcts: [86]
topics: ["linux", "emulator", "snes", "patched", "supernintendo", "zsnes", "lts", "sdl2", "alsa", "libao"]
stars: 256
forks: 32
openIssues: 5
closedIssues: 22
watchers: 14
contributors: 11
recentReleases: 1
createdAt: "2021-08-18T19:20:08Z"
lastCommitAt: "2026-09-01T08:47:17Z"
lastReleaseAt: "2026-07-23T00:51:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 96
undervaluedScore: 40
maintainers: ["xyproto"]
openGraphImageUrl: "https://opengraph.githubassets.com/d00014ca3d06378f150e24ed0736e4460f04fe0216bffcae59415d5cd46b68df/xyproto/zsnes"
---

# ZSNES 2

The last release of [ZSNES 1](http://zsnes.sourceforge.net/) was over 18 years ago (2007-10-31). It requires heavy patching and tweaking of compilation flags to build and run on a modern Linux distro. Most of it was written in 32-bit x86 Assembly, with MMX instructions.

This is a fork that aims to solve this.

Goals and non-goals:

* Compiling ZSNES so that it works on 64-bit x86 is a goal (that has been reached).
* Porting the Assembly to C11 is a goal (that has been reached).
* Supporting modern Linux distros (and FreeBSD and macOS, if possible) is a goal.
* Supporting multiple CPUs and platforms is a goal (that has been reached).
* Supporting DOS is not a goal.
* Supporting Windows is not a goal, but a "nice to have".
* Improving the net-play code is a long term goal.
* To be like an LTS release of ZSNES is a goal.

All of the old Assembly code has been ported to C11.

Pull requests that fixes inaccuracies with the emulation are welcome, as well as pull requests for regular bugs.

### Requirements

* `python3`, `sdl3`, `pipewire` (or `libao`), and a C compiler like `gcc` or `clang`.
* `nasm` is only needed for testing.

Tested on Arch Linux, Fedora and Debian 12 on…
