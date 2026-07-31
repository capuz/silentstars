---
repo: "acwright/6502-BIOS"
name: "6502-BIOS"
description: "BIOS ROM for the A.C. Wright 6502 project"
readmeQualityOk: true
url: "https://github.com/acwright/6502-BIOS"
language: "Assembly"
languages: ["Assembly", "JavaScript"]
languagePcts: [67, 26]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-03-04T06:18:49Z"
lastCommitAt: "2026-07-31T06:28:02Z"
lastReleaseAt: "2026-07-28T15:13:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 46
maintainers: ["acwright"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a15291cbd8dde900d1396ef46dccfdec48ebd4d2a5c0591c360447c0358dbdd/acwright/6502-BIOS"
---

6502-BIOS
=========

## Overview

BIOS is the firmware ROM for the [A.C. Wright 6502](https://github.com/acwright/6502-ACE) family of computer systems. It occupies the upper 32KB of the address space (`$8000–$FFFF`) and provides everything the machine needs to go from power-on to a usable computing environment.

The CPU is a **WDC 65C02S**. That is the Rockwell instruction set — including the bit-addressed `RMB`/`SMB`/`BBR`/`BBS` — plus WDC's `WAI` and `STP`. Building the ROM therefore needs cc65's `W65C02` setting, not its narrower `65C02`; `BIOS.asm` asserts this and fails the build with a reason if it is narrowed.

### Boot Sequence

The A.C. Wright 6502 family of computer systems is a modular design where every I/O card is optional. On reset, the Kernal probes each I/O slot to discover which hardware is installed and records the results in a single bitmask byte at `HW_PRESENT` (`$030D`). Only detected hardware is initialised — missing cards are silently skipped and never cause a hang.

The probe-and-boot sequence is:

1. **Clear `HW_PRESENT`** — all bits start at zero
2. **Probe each I/O slot** — RAM (read-back), RTC (NVRAM read-back), CompactFlash (BSY/RDY with timeout),…
