---
repo: "wangyu-/NC2000"
name: "NC2000"
description: "NC2000/1020Emu, a 6502-based retro computer emulator.  (文曲星NC2000/1020模拟器)"
readmeQualityOk: true
url: "https://github.com/wangyu-/NC2000"
language: "C++"
languages: ["C++", "C"]
languagePcts: [57, 42]
topics: ["emulator"]
stars: 213
forks: 29
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-07-03T04:35:53Z"
lastCommitAt: "2026-11-09T04:35:24Z"
lastReleaseAt: "2026-05-23T01:10:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 29
maintainers: ["wangyu-"]
openGraphImageUrl: "https://opengraph.githubassets.com/60feb2694f6b75afe7cc8e649c8b148a2bcd0a6e5441983e3b8d8d38ae4b0ae0/wangyu-/NC2000"
---

# NC2000/1020Emu
Retro device wqx nc2000/nc2600/nc1020 emulator, which emulates a 6502 SoC and peripherals. The emulator runs firmware dumped from physical device.

Cross-platform, supports running on windows/linux/mac.

nc2000/nc2600 is a series of 6502-based portable computer:
[image source](https://www.bilibili.com/video/BV1EW411C77i)

The device has following hardware:

* 5MHZ 6502 CPU, integrated inside SPDC1024 SoC    (implemented in `cpu.cpp` and `cpu.h`)
* 512K x 8 Bit Nor Flash with Bus Flash interface, named SPR4096 (`nor.cpp` `nor.h`)
* 32M x 8 Bit NAND Flash Memory, supplied by either Samsung or Toshiba (`nand.cpp` and `nand.h`)
* 24K internal ram, 32K external ram, 4k addition ram built inside SPR4096  (`ram.cpp` and `ram.h`)
* 00h~03Fh as special registers of SoC, also called IO Ports (`io.cpp` `io.h`)
* memory mapping from 0000h~FFFFh controlled by `00h` as "bank switch", `0Ah[0:3]` as "BIOS bank switch", `0Ah[8]` as "ROM/RAM select", `0D[0:1]` as "volume select", `0D[2]` as "ramb select" (`mem.cpp` `mem.h`)
* 160*80 LCD with SPLD803A as LCD driver (`display.cpp` and `display.h`)
* SPDS104A DSP with speaker (`sound.cpp` and `sound.h` and `dsp` folder)
* QWERT…
