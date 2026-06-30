---
repo: "CTR-tools/ctr-native"
name: "ctr-native"
description: "A Crash Team Racing Decompilation Project"
url: "https://github.com/CTR-tools/ctr-native"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 227
forks: 17
openIssues: 8
closedIssues: 10
watchers: 5
contributors: 11
recentReleases: 7
createdAt: "2026-05-16T22:07:46Z"
lastCommitAt: "2026-06-30T06:49:48Z"
lastReleaseAt: "2026-06-26T19:34:03Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 28
maintainers: ["aalhendi", "kkv0n", "FRDS"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5d2a12e7b62f1c30294f8b1d3b11044b5f145a089118e48ffaed1f4b0cc9b02/CTR-tools/ctr-native"
---

# CTR Native

A native PC port of Crash Team Racing (PS1, 1999), built on top of the [CTR-ModSDK](https://github.com/CTR-tools/CTR-ModSDK) decompilation project.

## Philosophy

- **No byte budget.** Game source lives in `game/` as our own copies. Edit freely.
- **No PSX toolchain.** Targets Windows and Linux with SDL3. No MIPS compiler needed.
- **Clean platform layer.** `main.c` owns process startup; host details stay in `platform/native_*`.
- **No build system nonsense.** Just `build.bat` / `build.sh`.
- **Fully static build.** Single executable, zero dependencies. SDL3 is compiled from vendored source and linked statically.

## Directory Layout

```
ctr_native/
  main.c              Entrypoint and native platform boundary
  platform/           Native-owned audio, input, memcard, CD, and PSX facade glue
  build.bat           Windows build (MinGW32)
  build.sh            Linux build
  README.md           This file
  game/               Our copies of all decompiled game source (943 files)
    game_unity.h      Ordered unity include chain for all game source files
  include/            Project headers (structs, globals, declarations, platform facade)
  externals/
    SDL/…
