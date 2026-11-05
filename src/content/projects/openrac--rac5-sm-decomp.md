---
repo: "OpenRAC/rac5-sm-decomp"
name: "rac5-sm-decomp"
description: "Matching decompilation workspace for Ratchet & Clank: Size Matters (PS2, USA SCUS-97615)"
readmeQualityOk: true
url: "https://github.com/OpenRAC/rac5-sm-decomp"
homepage: "https://openrac.dev/"
language: "C"
languages: ["C"]
languagePcts: [89]
topics: ["c", "decompilation", "game-preservation", "matching-decompilation", "mips", "playstation-2", "ps2", "ratchet-and-clank", "reverse-enginnering"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-10-15T15:30:13Z"
lastCommitAt: "2026-11-05T08:05:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 51
maintainers: ["llesieur99", "Lynder063"]
openGraphImageUrl: "https://opengraph.githubassets.com/52319377da1555736a776c1545e781eab71fb664c37f9df4105c89256441b392/OpenRAC/rac5-sm-decomp"
---

# Ratchet & Clank: Size Matters (PS2) Decompilation

A work-in-progress **matching decompilation** of *Ratchet & Clank: Size Matters* (High Impact Games, 2008) for the PlayStation 2, tracking both the North American release (`SCUS_976.15`, NTSC-U v1.00) and the European release (`SCES_550.19`, PAL v1.00), part of the **[OpenRAC](https://openrac.dev)** initiative.

The disc's programs are rebuilt from C and assembly until every byte equals retail:

| Program | Release | What it is | Size | SHA-256 of the retail file |
| --- | --- | --- | ---: | --- |
| `SCUS_976.15` | USA (v1.00) | Boot executable: engine core and level loader | 856,120 | `d8f1794a5b4f6bd7f70ca62ae11fb790d1c300c2a877ef1aef4c1855fd6575ac` |
| `SCES_550.19` | Europe (v1.00) | Boot executable: engine core and level loader | 856,888 | `2b33e2d66e144ceb63fd8348ba85f560abace4449c3109ee54719c9e3e462c1f` |
| `LVL/FRONTEND.REL` | Both | Front end (menus), SNR2 module | 2,052,794 / 1,794,103 | see [`config/levels/modules.tsv`](https://github.com/OpenRAC/rac5-sm-decomp/blob/HEAD/config/levels/modules.tsv) |
| `LVL/LEVEL_*.REL` | Both | 20 numbered level modules, SNR2 | 1,036,928 – 4,260,355 | see…
