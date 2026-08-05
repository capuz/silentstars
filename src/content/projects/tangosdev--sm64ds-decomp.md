---
repo: "tangosdev/sm64ds-decomp"
name: "sm64ds-decomp"
description: "From-scratch, byte-matching decompilation of Super Mario 64 DS (sm64ds decomp) into C, with a live progress atlas and matching tools."
readmeQualityOk: true
url: "https://github.com/tangosdev/sm64ds-decomp"
homepage: "https://github.com/tangosdev/tangOS"
language: "C"
languages: ["C", "C++"]
languagePcts: [59, 31]
topics: ["decomp", "decompilation", "matching-decompilation", "mwccarm", "nintendo-ds", "reverse-engineering", "sm64ds", "super-mario-64-ds", "ai", "claude-code"]
stars: 111
forks: 16
openIssues: 1
closedIssues: 5
watchers: 6
contributors: 16
recentReleases: 0
createdAt: "2026-06-14T00:45:48Z"
lastCommitAt: "2026-08-05T06:06:45Z"
status: "newborn"
tags: ["funded"]
healthScore: 97
undervaluedScore: 33
maintainers: ["github-actions[bot]", "andrewboudreau", "tangosdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/94a1f77dc47719659bb0acd63442c9e5b91d727019ff53adf123fb1aa85af334/tangosdev/sm64ds-decomp"
fundingLinks: ["GITHUB:https://github.com/tangosdev", "PATREON:https://patreon.com/the_tango"]
discussionCount: 1
---

# Super Mario 64 DS Decompilation (sm64ds-decomp)

[discord]: https://discord.gg/YpReERF4e3
[discord-badge]: https://img.shields.io/discord/1520811338568569112?color=7289DA&logo=discord&logoColor=ffffff

A from-scratch decompilation (decomp) of **Super Mario 64 DS** into matching C.

This repo holds source code and tooling. It contains no ROM and no Nintendo assets.
Everything here runs against a cartridge dump you supply yourself, which stays on your
machine and is git-ignored.

New here? Start with **[CONTRIBUTING.md](https://github.com/tangosdev/sm64ds-decomp/blob/HEAD/CONTRIBUTING.md)**, coordinate work in
**[CLAIMS.md](https://github.com/tangosdev/sm64ds-decomp/blob/HEAD/CLAIMS.md)**, and if you review or merge PRs read **[MERGE.md](https://github.com/tangosdev/sm64ds-decomp/blob/HEAD/MERGE.md)**.

## Progress

```
Functions  █████████████████████████████░  98.2%   11,138 / 11,347
Code size  ████████████████████████████░░  92.5%   2,044,840 / 2,211,124 bytes
```

Every arm-mode function in the game, drawn as a treemap. Each rectangle is one
function sized by its byte count, green for matched and gray for unmatched, grouped
by module.

For an interactive version where you can…
