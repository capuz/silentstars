---
repo: "sp00nznet/ps3recomp"
name: "ps3recomp"
description: "Static recompilation runtime libraries for PlayStation 3 titles. "
url: "https://github.com/sp00nznet/ps3recomp"
language: "C"
languages: ["C"]
languagePcts: [78]
stars: 167
forks: 12
openIssues: 1
closedIssues: 0
watchers: 7
contributors: 5
recentReleases: 0
createdAt: "2026-03-11T05:07:12Z"
lastCommitAt: "2026-06-26T21:30:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 21
maintainers: ["sp00nznet"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bd8192742956d11e42c5ebf5d774bd3022cd0ce41fdebc7795c0a1e064e7710/sp00nznet/ps3recomp"
---

# ps3recomp

### *Because the Cell processor deserves a second life*

> Static recompilation runtime libraries for PlayStation 3 titles.
> Turn PS3 binaries into native executables. No emulator required.

---

## What Is This?

**ps3recomp** is an open-source toolkit that provides the runtime libraries, system stubs, and analysis tools needed to **statically recompile PlayStation 3 games into native PC executables**.

Instead of interpreting or dynamically recompiling PowerPC/SPU instructions at runtime (what emulators like RPCS3 do brilliantly), we take the opposite approach: **translate everything ahead of time** into C/C++ that compiles with your favorite compiler on any modern platform.

This is the same philosophy behind:
- [N64Recomp](https://github.com/N64Recomp/N64Recomp) (N64 -> native)
- [UnleashedRecomp](https://github.com/hedge-dev/UnleashedRecomp) (Xbox 360 -> native)
- [PS2Recomp](https://github.com/ran-j/PS2Recomp) (PS2 -> native)
- [burnout3](https://github.com/sp00nznet/burnout3) (Original Xbox -> native)
- [360tools](https://github.com/sp00nznet/360tools) (Xbox 360 -> native)

...but for the PS3's glorious, terrifying **Cell Broadband Engine**.

## Why PS3?

The…
