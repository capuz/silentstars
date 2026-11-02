---
repo: "TheRealestNwah/sotc-decomp"
name: "sotc-decomp"
description: "Matching decompilation of Shadow of the Colossus (PS2, NTSC-U) aiming for a native PC port"
readmeQualityOk: true
url: "https://github.com/TheRealestNwah/sotc-decomp"
language: "C"
languages: ["C"]
languagePcts: [90]
topics: ["decompilation", "matching-decomp", "mips", "pc-port", "playstation-2", "ps2", "python", "reverse-engineering", "shadow-of-the-colossus", "splat"]
stars: 32
forks: 0
openIssues: 24
closedIssues: 1151
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2026-10-13T01:44:44Z"
lastCommitAt: "2026-11-02T13:38:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 100
undervaluedScore: 39
maintainers: ["TheRealestNwah", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/64ae4bbf692349667bf89ac84ce053b49b4addfbe208c48c07c0d027f74eca8a/TheRealestNwah/sotc-decomp"
---

# Shadow of the Colossus Decompilation

A work-in-progress matching decompilation of **Shadow of the Colossus** (PlayStation 2, NTSC-U, `SCUS-97472`), with the long-term goal of a Native port to PC.

The aim is C source that compiles back to a byte-identical copy of the Original game files. Once every function in the Game code is a Matched function, the code can be ported to run natively on PC.

## Status

- The Loader `SCUS_974.72` (1,038 functions) splits with [splat](https://github.com/ethteck/splat) and **rebuilds byte-for-byte** from assembly (`ninja check` passes).
- Almost all Game code is in the three Game modules (`KERNEL.XFF`, `MANAGER.XFF`, `GAMECORE.XFF`; custom `xff2` format, see [docs/xff2.md](https://github.com/TheRealestNwah/sotc-decomp/blob/HEAD/docs/xff2.md)). All three rebuild byte-for-byte, including headers and tables. The original table-layout and loader metadata still come from the Original files.
- Compiler identified: Sony `ee-gcc` 2.96, `-O2 -G0` (see [docs/findings.md](https://github.com/TheRealestNwah/sotc-decomp/blob/HEAD/docs/findings.md)).
- Matched functions are in `src/xff/` and are spliced into the Game modules; the full build still matches. The…
