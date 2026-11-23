---
repo: "acwright/6502-CRT"
name: "6502-CRT"
description: "A 6502 assembly language cartridge template for the AC6502"
readmeQualityOk: true
url: "https://github.com/acwright/6502-CRT"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [78]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-01T05:47:42Z"
lastCommitAt: "2026-11-23T12:24:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 35
maintainers: ["acwright"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0e6fc01d221e1f4354349b80c7ffc48a683d8a74f156c5ae62a6f2eb9a8bdb3/acwright/6502-CRT"
---

6502-CRT
========

A 6502 assembly language cartridge template for the [AC6502](https://github.com/acwright/6502-ACE) family of computer systems.

> 📖 **Guide:** [AC6502 Documentation](https://acwright.github.io/6502-DOCS/) — the user's and programmer's guide for the whole family.
> This template is walked through end to end in [Writing a cartridge](https://acwright.github.io/6502-DOCS/assembly/cartridges).

## Overview

Cartridges for this system overlay the ROM address space from `$C000–$FFFF`, replacing the BASIC interpreter, Wozmon, the CPU vectors and, on BIOS 1.x, the Monitor with custom code. The Kernal remains accessible underneath — `$A000–$B7FF` plus the character set at `$B800–$BFFF` on BIOS 1.x, all of `$A000–$BFFF` on BIOS 2.x — providing hardware initialization, character I/O, video, sound, storage, and other system services through a stable jump table.

The template builds two ways from the same source: `make` for any ACE on BIOS 1.x with a TMS9918A, and `make VDP=1` for an ACE converted to a [6502-PICOVDP](https://github.com/acwright/6502-PICOVDP) on BIOS 2.x. See [Building for the 6502-PICOVDP](#building-for-the-6502-picovdp).
