---
repo: "psdwizzard/Eternal-Darkness---Decompile"
name: "Eternal-Darkness---Decompile"
description: "Matching decompilation of Eternal Darkness: Sanity's Requiem (GEDE01) — dtk/objdiff pipeline"
readmeQualityOk: true
url: "https://github.com/psdwizzard/Eternal-Darkness---Decompile"
language: "C"
languages: ["C"]
languagePcts: [88]
stars: 12
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-07-21T18:22:40Z"
lastCommitAt: "2026-09-13T08:29:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/411e0cd5b62b2f92335b742b813a864a813175ac9691f1a58b193329a92e71ba/psdwizzard/Eternal-Darkness---Decompile"
---

# Eternal Darkness: Sanity's Requiem matching decompilation

This repository targets the US GameCube release **GEDE01, revision 0**. The architectural goal is a byte-identical matching decompilation; the practical goal is a durable, source-driven modding platform built on that matching foundation.

The repository contains no game image, extracted executable, asset, proprietary SDK source, or Metrowerks binary. You must supply a legally obtained matching disc image locally.

## Verified baseline

- Disc: GEDE01, disc 0, revision 0; Redump SHA-1 `2bebaa7a17d69057f8c02fe00349b558abc30ff6`
- `main.dol`: 3,156,384 bytes; SHA-1 `ea24b6af954876ce072562ff39cdb4c81d32be1f`
- Entry point: `0x80005308`
- Modules: no REL, RSO, alternate DOL, ELF, map, or symbol file was found in a complete 1,680-file scan
- Toolchain: Metrowerks CodeWarrior confirmed; linker family narrowed to GC 1.0-2.6; exact patch versions and flags are not yet proven

## Bootstrap

From this directory on Linux:

```sh
python3 tools/bootstrap.py
python3 tools/ingest_disc.py --image /path/to/your/GEDE01-rev0.rvz
python3 configure.py
.tools/bin/ninja
```

`bootstrap.py` downloads hash-pinned DTK 1.8.3, Ninja 1.13.2, wibo…
