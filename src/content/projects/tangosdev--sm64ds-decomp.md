---
repo: "tangosdev/sm64ds-decomp"
name: "sm64ds-decomp"
description: "From-scratch, byte-matching decompilation of Super Mario 64 DS (sm64ds decomp) into C, with a live progress atlas and matching tools."
readmeQualityOk: true
url: "https://github.com/tangosdev/sm64ds-decomp"
homepage: "https://github.com/tangosdev/tangOS"
language: "C"
languages: ["C", "C++"]
languagePcts: [43, 39]
topics: ["decomp", "decompilation", "matching-decompilation", "mwccarm", "nintendo-ds", "reverse-engineering", "sm64ds", "super-mario-64-ds", "ai", "claude-code"]
stars: 131
forks: 15
openIssues: 4
closedIssues: 7
watchers: 7
contributors: 17
recentReleases: 0
createdAt: "2026-06-14T00:45:48Z"
lastCommitAt: "2026-08-25T04:09:00Z"
status: "thriving"
tags: ["funded"]
healthScore: 93
undervaluedScore: 30
maintainers: ["andrewboudreau", "github-actions[bot]", "tangosdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdfd11e0b1263e13b335bcdfd5e5f63a373080cbd69911a18a2d0f0fb5c161b2/tangosdev/sm64ds-decomp"
fundingLinks: ["GITHUB:https://github.com/tangosdev", "PATREON:https://patreon.com/the_tango"]
discussionCount: 1
---

# Super Mario 64 DS Decompilation (sm64ds-decomp)

[discord]: https://discord.gg/YpReERF4e3
[discord-badge]: https://img.shields.io/discord/1520811338568569112?color=7289DA&logo=discord&logoColor=ffffff

> **Looking for the PC port?** [Download it here.](https://tangos.dev/downloads)

A from-scratch decompilation (decomp) of **Super Mario 64 DS** into matching C.

This repo holds source code and tooling. It contains no ROM and no Nintendo assets.
Everything here runs against a cartridge dump you supply yourself, which stays on your
machine and is git-ignored.

New here? Start with **[CONTRIBUTING.md](https://github.com/tangosdev/sm64ds-decomp/blob/HEAD/CONTRIBUTING.md)**, coordinate work in
**[CLAIMS.md](https://github.com/tangosdev/sm64ds-decomp/blob/HEAD/CLAIMS.md)**, and if you review or merge PRs read **[MERGE.md](https://github.com/tangosdev/sm64ds-decomp/blob/HEAD/MERGE.md)**.

## Progress

```
Functions  ██████████████████████████████  98.5%   11,230 / 11,401
Code size  ████████████████████████████░░  94.6%   2,116,772 / 2,238,108 bytes
```

Every arm-mode function in the game, drawn as a treemap. Each rectangle is one
function sized by its byte count, green for matched and…
