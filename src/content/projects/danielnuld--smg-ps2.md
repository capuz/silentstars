---
repo: "danielnuld/smg-ps2"
name: "smg-ps2"
description: "Super Mario Galaxy fan port to the PlayStation 2, following the Petari decompilation. No Nintendo assets: the tools convert your own disc."
readmeQualityOk: true
url: "https://github.com/danielnuld/smg-ps2"
language: "C"
languages: ["C"]
languagePcts: [74]
stars: 16
forks: 0
openIssues: 9
closedIssues: 186
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-26T05:01:41Z"
lastCommitAt: "2026-11-07T13:55:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 45
maintainers: ["danielnuld"]
openGraphImageUrl: "https://opengraph.githubassets.com/552403fe5c47c6908013e230c53483651a6a60172c3a510e53a55c558a648031/danielnuld/smg-ps2"
---

# Super Mario Galaxy on PlayStation 2

A fan port of Super Mario Galaxy (Wii, 2007) to the PlayStation 2. The game logic is ported from
[Petari](https://github.com/SMGCommunity/Petari), the community decompilation, and runs on an engine written for the
PS2 (EE + VU1 + GS, IOP sound). The game's data is converted from **your own disc** by the tools in `tools/`;
this repository has no Nintendo code or assets, and none are distributed.

Research project. Not affiliated with or endorsed by Nintendo.

## Status (October 2026)

**Playable from the title screen to the ending, on PCSX2 and on a real PS2 (SCPH-75001).**

| Area | State |
|---|---|
| Galaxies | All 136 scenarios convert and load; zones stream from the disc (packs fit 10.4 MB of EE RAM) |
| Objects | ~96 % of the placed objects have their behaviour ported (90.5 % ported, 5.2 % need none); 0.9 % missing |
| Mario | Moves, power-ups (Bee, Fire, Boo, Spring, Ice, Rainbow), swimming, launch stars, Pull Stars, ledge hang (in progress) |
| Game flow | Title, file select (six files, Mii-style icons, copy / delete), Comet Observatory with its domes, galaxy map, star list, scenario select, pause menu, star return and results, miss /…
