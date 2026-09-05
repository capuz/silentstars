---
repo: "tangosdev/sm64ds-decomp"
name: "sm64ds-decomp"
description: "From-scratch, byte-matching decompilation of Super Mario 64 DS (sm64ds decomp) into C, with a live progress atlas and matching tools."
readmeQualityOk: true
url: "https://github.com/tangosdev/sm64ds-decomp"
homepage: "https://github.com/tangosdev/tangOS"
language: "C++"
languages: ["C++", "C", "Python"]
languagePcts: [40, 37, 22]
topics: ["decomp", "decompilation", "matching-decompilation", "mwccarm", "nintendo-ds", "reverse-engineering", "sm64ds", "super-mario-64-ds", "ai", "claude-code"]
stars: 146
forks: 16
openIssues: 6
closedIssues: 10
watchers: 8
contributors: 17
recentReleases: 0
createdAt: "2026-06-14T00:45:48Z"
lastCommitAt: "2026-09-05T07:49:38Z"
status: "thriving"
tags: ["funded"]
healthScore: 92
undervaluedScore: 29
maintainers: ["andrewboudreau", "github-actions[bot]", "tangosdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2e0f26e0ad6d7a633a3d99df30fcdd578d16e77c96772586d24ee2169c29950/tangosdev/sm64ds-decomp"
fundingLinks: ["GITHUB:https://github.com/tangosdev", "PATREON:https://patreon.com/the_tango"]
discussionCount: 1
---

# Super Mario 64 DS Decompilation (sm64ds-decomp)

[discord]: https://discord.gg/YpReERF4e3
[discord-badge]: https://img.shields.io/discord/1520811338568569112?color=7289DA&logo=discord&logoColor=ffffff

> **Looking for the PC port?** [Download it here.](https://tangos.dev/downloads)

A from-scratch decompilation (decomp) of **Super Mario 64 DS**, written as a love
letter to the original EAD team: the goal is source that reads like it shipped in
2004 — idiomatic, period-accurate C++ — and that also compiles byte-identical to the
retail cartridge under the pinned compiler.

This repo holds source code and tooling. It contains no ROM and no Nintendo assets.
Everything here runs against a cartridge dump you supply yourself, which stays on your
machine and is git-ignored.

New here? Start with **[CONTRIBUTING.md](https://github.com/tangosdev/sm64ds-decomp/blob/HEAD/CONTRIBUTING.md)**, and if you review or
merge PRs read **[MERGE.md](https://github.com/tangosdev/sm64ds-decomp/blob/HEAD/MERGE.md)**.

## Progress

```
Functions  ██████████████████████████████  98.7%   11,253 / 11,402
Code size  ████████████████████████████░░  94.9%   2,123,736 / 2,238,108 bytes
```

Every arm-mode…
