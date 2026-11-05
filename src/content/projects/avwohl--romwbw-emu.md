---
repo: "avwohl/romwbw_emu"
name: "romwbw_emu"
description: "A hardware-level Z80/CP/M emulator for Linux and macOS. It emulates the RomWBW HBIOS interface and switches banks in 512 KB of ROM and 512 KB of RAM. It boots CP/M from ROM and disk images."
readmeQualityOk: true
url: "https://github.com/avwohl/romwbw_emu"
homepage: "https://github.com/avwohl/romwbw_emu"
language: "C++"
languages: ["C++"]
languagePcts: [73]
topics: ["cpm", "emulator", "retro-computing", "romwbw", "webassembly", "z80", "hbios"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2025-12-13T04:15:39Z"
lastCommitAt: "2026-11-05T00:21:18Z"
lastReleaseAt: "2026-09-01T14:26:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 68
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4ec97a0cb9fcbc3ec23d2abd74ad51e0640e5d491388aef999766960e7d870f4/avwohl/romwbw_emu"
---

# RomWBW Emulator

A hardware-level Z80 emulator that boots RomWBW and CP/M from ROM and disk
images, on Linux, macOS and in the browser. It emulates the machine - 512 KB
ROM + 512 KB RAM with bank switching - and implements the
[RomWBW](https://github.com/wwarthen/RomWBW) HBIOS layer in C++.

**This program ships no ROM and no disk image.** Both are published at
[avwohl/romwbw_disks](https://github.com/avwohl/romwbw_disks) and fetched by
`tools/romwbw-get`, which checks every download against the SHA-256 the catalog
publishes - see [docs/CATALOG.md](https://github.com/avwohl/romwbw_emu/blob/HEAD/docs/CATALOG.md).

## Features

- **Memory:** 512 KB ROM + 512 KB RAM with 32 KB bank switching
- **HBIOS:** hardware abstraction layer implemented in C++
- **Disks:** ROM disk, RAM disk, and up to 16 file-backed hard disk images
- **Disk formats:** auto-detects hd1k and hd512, including 49 MB combo images
- **RomWBW releases:** boots any release the catalog publishes, from one
  binary, reading the version out of the ROM it loads
- **Operating systems:** CP/M 2.2, CP/M 3, ZSDOS, ZPM3, NZCOM and QPM, from the
  published disk images
- **Console:** raw mode, so every control character…
