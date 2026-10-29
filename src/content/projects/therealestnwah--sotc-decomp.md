---
repo: "TheRealestNwah/sotc-decomp"
name: "sotc-decomp"
description: "Matching decompilation of Shadow of the Colossus (PS2, NTSC-U) aiming for a native PC port"
readmeQualityOk: true
url: "https://github.com/TheRealestNwah/sotc-decomp"
language: "C"
languages: ["C"]
languagePcts: [89]
topics: ["decompilation", "matching-decomp", "mips", "pc-port", "playstation-2", "ps2", "python", "reverse-engineering", "shadow-of-the-colossus", "splat"]
stars: 26
forks: 0
openIssues: 276
closedIssues: 847
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-10-13T01:44:44Z"
lastCommitAt: "2026-10-29T05:49:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 38
maintainers: ["TheRealestNwah"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc66fdb0f00e3397114117ef6e7fba4eca12d5c776f3e7730f4b219ea5403b55/TheRealestNwah/sotc-decomp"
---

# Shadow of the Colossus Decompilation

A work-in-progress decompilation of **Shadow of the Colossus** (PlayStation 2, NTSC-U, `SCUS-97472`), with the long-term goal of a native PC port.

The aim is C source that compiles back to a byte-identical copy of the original executable. Once that matches, the code can be ported to run natively on PC.

## Status

- The loader ELF `SCUS_974.72` (1,038 functions) splits with [splat](https://github.com/ethteck/splat) and **rebuilds byte-for-byte** from assembly (`ninja check` passes).
- The game code is in the three `.XFF` modules (`KERNEL`, `MANAGER`, `GAMECORE`; custom `xff2` format, see [docs/xff2.md](https://github.com/TheRealestNwah/sotc-decomp/blob/HEAD/docs/xff2.md)). All three rebuild byte-for-byte, including headers and tables. The original table-layout and loader metadata still come from the disc files.
- Compiler identified: Sony `ee-gcc` 2.96, `-O2 -G0` (see [docs/findings.md](https://github.com/TheRealestNwah/sotc-decomp/blob/HEAD/docs/findings.md)).
- Matching C is in `src/xff/` and is spliced into the modules; the full build still matches. The native PC port hasn't started.

| Stage | Done | Total | Progress |
| --- | ---: |…
