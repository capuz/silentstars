---
repo: "aplaino/darksouls-mac"
name: "darksouls-mac"
description: "Dark Souls: Prepare to Die Edition running natively on Apple silicon Macs, via static recompilation (x86recomp). No game files included."
readmeQualityOk: true
url: "https://github.com/aplaino/darksouls-mac"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [40, 40]
topics: ["apple-silicon", "dark-souls", "macos", "metal", "reverse-engineering", "sdl3", "static-recompilation"]
stars: 5
forks: 0
openIssues: 6
closedIssues: 5
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-10T02:32:45Z"
lastCommitAt: "2026-11-12T05:42:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 17
maintainers: ["aplaino"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6ba2d1fbde9a2b666c629647f7c55f6ad944f1330276e54b833702a7f62b2e9/aplaino/darksouls-mac"
---

# darksouls-mac

**Dark Souls: Prepare to Die Edition, running natively on Apple silicon Macs.**

No emulator, no Wine, no virtual machine. The game's original 32-bit Windows
code is statically recompiled into native ARM64 code, and the Windows APIs it
calls (Direct3D 9, DirectInput, XInput, the C runtime, Games for Windows LIVE,
DirectSound, ...) are reimplemented on top of macOS, Metal and SDL3.

This repository contains **no game files**. You need your own copy of the
game; the build reads it from your disk and generates everything else.

### Which version of the game works

Only **1.0.2.0**, the last Games for Windows LIVE build, whose executable
is `DATA/DATA.exe` (the setup checks its SHA-256 and stops if it differs).
That is the version disc copies update to and the one Steam shipped before
GFWL was removed.

The version Steam serves today has GFWL removed and is a different
executable; it **does not work yet**. Support for it is tracked in
[#11](https://github.com/aplaino/darksouls-mac/issues/11).

## Status

Playable from start through the first areas:

- 30 fps, steady (the game's own cap), on an M-series Mac
- Metal renderer with higher-than-original quality: the 3D…
