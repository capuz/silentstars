---
repo: "mauricristiano95-hub/F1_CE_PS3"
name: "F1_CE_PS3"
description: "Recompilation for modern system of Formula One Championship Edition (PS3)"
readmeQualityOk: true
url: "https://github.com/mauricristiano95-hub/F1_CE_PS3"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 105
forks: 9
openIssues: 1
closedIssues: 15
watchers: 3
contributors: 3
recentReleases: 10
createdAt: "2026-11-01T23:07:25Z"
lastCommitAt: "2026-11-27T12:54:04Z"
lastReleaseAt: "2026-11-22T12:59:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 36
maintainers: ["mauricristiano95-hub", "Vinisena16"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cdeecdf0040b39b77034c4535dcc17c491955042d67bed2a6fc8d7b2b8239fc/mauricristiano95-hub/F1_CE_PS3"
---

# F1 Championship Edition (PS3) – static recompilation

Join the Discord server: https://discord.gg/Ctr4k6HQ9

Translates the game's PPU executable (`EBOOT.elf`, PowerPC64/Cell) into C++ and links it with a
runtime that reimplements the PS3 kernel (LV2), the system libraries (HLE), the SPUs and the RSX
GPU, producing native x86-64 executables for Windows and Linux. Game data is never embedded: the
executable reads your own `PS3_GAME` folder at runtime.

## Layout

| Path | Content |
|------|---------|
| `tools/ps3elf.py` | ELF loader: segments, OPD, imports (NIDs resolved via `nid_names.txt`) |
| `tools/ppc.py` | PowerPC/AltiVec decoder |
| `tools/functions.py` | function discovery (OPD + call targets + import stubs) |
| `tools/recomp.py` | PPU → C++ translator, jump-table resolver, output in `generated/` |
| `tools/spu.py` | SPU decoder/disassembler (used to analyse the SPU code) |
| `tools/frames_to_png.py` | converts frame dumps (`frame_*.argb`) to PNG |
| `ghidra/scripts/ExportDecomp.java` | headless Ghidra export of pseudo-C for every function (`out/decomp/`) |
| `runtime/core.cpp`, `loader.cpp` | guest memory, threads, dispatch, crash diagnostics, ELF loading |
