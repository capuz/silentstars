---
repo: "CTalkobt/M65Compiler"
name: "M65Compiler"
description: "Mega65 Compiler Suite (ca45, cc45)"
readmeQualityOk: true
url: "https://github.com/CTalkobt/M65Compiler"
language: "C++"
languages: ["C++", "C"]
languagePcts: [52, 23]
stars: 24
forks: 1
openIssues: 16
closedIssues: 301
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-14T18:50:38Z"
lastCommitAt: "2026-10-29T21:04:30Z"
lastReleaseAt: "2026-10-16T20:40:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 48
maintainers: ["CTalkobt"]
openGraphImageUrl: "https://opengraph.githubassets.com/b826b682d62c327c0fe61db1e847c171e11a262d0db26d2f2246448488106002/CTalkobt/M65Compiler"
---

# Mega65 C Compiler Suite v1.1.0

Source, issues and releases: <https://github.com/CTalkobt/M65Compiler>

A modern development toolchain for the MEGA65 (45GS02) home computer. It consists of:

- **cc45** — C compiler (C source to assembly or `.o45` relocatable objects)
- **ca45** — 45GS02 assembler (assembly to binary or `.o45` relocatable objects)
- **ln45** — Linker (links `.o45` objects and `.lib` archives into flat binaries or PRG executables)
- **ar45** — Archiver (creates `.lib` static library archives from `.o45` objects)
- **tune45** — Music for the tune player: text (or MIDI) to data, play on the PC / in xemu / on a MEGA65, compose
- **dbg45** — Source-level debugger: a cc45 program in xemu by its C source (breakpoints, stepping, the stack, variables); VS Code through `--dap`
- **nm45** — Symbol lister for `.o45` / `.o65` object files (and ln45's `.ovl` overlay files)
- **objdump45** — Object file inspector and 45GS02 disassembler (objects, PRGs, binaries, `.ovl` files)
- **cp45** — C preprocessor (standalone)
- **disk45** — CBM disk, tape and archive image utility (D64/D71/D81/D65 and 20 more formats)
- **basic45** — BASIC 65 program generator (label-based source to a…
