---
repo: "xyproto/zsnes"
name: "zsnes"
description: "A maintained fork of ZSNES, a Super Nintendo emulator. The original ZSNES project needs patches to build and is not maintained anymore."
readmeQualityOk: true
url: "https://github.com/xyproto/zsnes"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["linux", "emulator", "snes", "patched", "supernintendo", "zsnes", "lts", "sdl2", "alsa", "libao"]
stars: 255
forks: 32
openIssues: 5
closedIssues: 22
watchers: 13
contributors: 11
recentReleases: 1
createdAt: "2021-08-18T19:20:08Z"
lastCommitAt: "2026-08-29T10:21:38Z"
lastReleaseAt: "2026-07-23T00:51:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 96
undervaluedScore: 40
maintainers: ["xyproto", "acts-1631"]
openGraphImageUrl: "https://opengraph.githubassets.com/097dd170c7fc8f544f3829a0e335f7eec8a92571d5667e6197a3d322ed618175/xyproto/zsnes"
---

# ZSNES 2

The last release of [ZSNES](http://zsnes.sourceforge.net/) was around 18 years ago (2007-10-31). It requires heavy patching and tweaking of compilation flags to build and run on a modern Linux distro.

This is a fork of ZSNES that aims to solve this.

The tree is C11 throughout: no Assembly is left. On Linux, `make` produces a 32-bit x86 ELF executable and `make linux64` a 64-bit one. On

Goals and non-goals:

* Compiling ZSNES so that it works on 64-bit x86 is a goal (that has been reached).
* Supporting 32-bit platforms is not a goal, but pull requests are welcome.
* Porting the Assembly to C to support more platforms and CPUs was a long term goal, and is done.
* Supporting Windows and DOS are not goals.
* Supporting modern Linux distros (and FreeBSD and macOS, if possible) is a goal.
* To be like an LTS release of ZSNES is a goal.
* Improving the net-play code is a long term goal.

Pull requests that fixes inaccuracies with the emulation are welcome, as well as pull requests for regular bugs.

### Requirements

* `python3`, `sdl3`, `pipewire` (or `libao`), and a C compiler like `gcc` or Apple `clang`.
* `nasm` is only needed for the differential tests in `test/`,…
