---
repo: "dougchansan/pkmn-colosseum"
name: "pkmn-colosseum"
description: "ai decompilation project for pokemon colosseum"
url: "https://github.com/dougchansan/pkmn-colosseum"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 6
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-30T07:04:39Z"
lastCommitAt: "2026-06-24T00:20:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["dougchansan"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a0a5ac35b3dba1f0baf68b54a09fd3ff4d41120d8d38f7b0ad8019eb3fb4c56/dougchansan/pkmn-colosseum"
---

# Pokémon Colosseum decompilation (GC6E01 / GPXE01)

A work-in-progress matching decompilation of the GameCube game **Pokémon
Colosseum** (NTSC-U: `GC6E01`). The goal is byte-identical reproduction of the
original `main.dol` from C source, using the same Metrowerks CodeWarrior
compiler that Genius Sonority used in 2003.

## Status

| Metric | Value |
|---|---|
| Function match | ~61.7% (4,194 / 6,800 functions) |
| Code match | ~38.7% (524,340 / 1,354,848 matched code bytes) |

Last measured 2026-06-22 with `python tools/gen_decomp_report.py -o report.json`
against the local ROM-extracted target/base objects, after a full `compile_check
--all` rebuild and removing four duplicate measurement units that had double-counted
real TUs (gs_field_world / gs_title were counted twice; gs_render_w2 / pokemon_boss2
were 94-95% copies of gs_render / pokemon). De-duplication lowered the headline
~2.4pts (functions) / ~5pts (code) but the number is now honest and locally
reproducible. The numbers are regenerated locally — public CI
cannot hold the ROM-derived target objects, so `.github/workflows/progress.yml`
only gates compilation until the private build container is published. (Note:
the…
