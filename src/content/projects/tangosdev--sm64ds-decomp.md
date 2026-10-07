---
repo: "tangosdev/sm64ds-decomp"
name: "sm64ds-decomp"
description: "From-scratch, byte-matching decompilation of Super Mario 64 DS into C/C++, with a live progress atlas and matching tools."
readmeQualityOk: true
url: "https://github.com/tangosdev/sm64ds-decomp"
homepage: "https://tangos.dev"
language: "C++"
languages: ["C++", "Python", "C"]
languagePcts: [49, 28, 23]
topics: ["decomp", "decompilation", "matching-decompilation", "mwccarm", "nintendo-ds", "reverse-engineering", "sm64ds", "super-mario-64-ds", "ai", "claude-code"]
stars: 184
forks: 20
openIssues: 75
closedIssues: 58
watchers: 8
contributors: 18
recentReleases: 0
createdAt: "2026-06-14T00:45:48Z"
lastCommitAt: "2026-10-07T10:30:15Z"
status: "thriving"
tags: ["funded"]
healthScore: 89
undervaluedScore: 26
maintainers: ["lunavyqo", "github-actions[bot]", "andrewboudreau"]
openGraphImageUrl: "https://opengraph.githubassets.com/280572c3851bc4c5d1bd70a79cc3daefddb063f8d154c2aab866353d64faa795/tangosdev/sm64ds-decomp"
fundingLinks: ["GITHUB:https://github.com/tangosdev", "PATREON:https://patreon.com/the_tango"]
discussionCount: 1
---

# Super Mario 64 DS Decompilation

[discord]: https://discord.gg/YpReERF4e3
[discord-badge]: https://img.shields.io/discord/1520811338568569112?color=7289DA&logo=discord&logoColor=ffffff

> **Looking for the PC port?** [Download it here.](https://tangos.dev/downloads)

A decompilation of Super Mario 64 DS: C and C++ source that compiles back into the exact
bytes on the retail cartridge.

This repo holds source code and tooling. It contains no ROM and no Nintendo assets.
Everything here runs against a cartridge dump you supply yourself, which stays on your
machine and is git-ignored.

## Credits

A lot of people have put real time into this. Thank you to everyone below.

### Symbol names and reverse engineering

Over a thousand of the function and data names in this repo come from the SM64DS modding
community, along with much of what we know about the game's structs and actor system.

- **[SplattyDS](https://github.com/SplattyDS)**, for the symbol names and struct layouts in
  [DynamicAllocationDecomp](https://github.com/SplattyDS/DynamicAllocationDecomp) and
  [SM64DS-ASM-Reference](https://github.com/SplattyDS/SM64DS-ASM-Reference).
- **[Gota7](https://github.com/Gota7)**, for…
