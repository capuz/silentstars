---
repo: "mitsevox/nflstreet2"
name: "nflstreet2"
description: "NFL Street 2 (GameCube, 2004) decompilation"
readmeQualityOk: true
url: "https://github.com/mitsevox/nflstreet2"
homepage: "https://mitsevox.github.io/games/nflstreet2/"
language: "C++"
languages: ["C++", "C"]
languagePcts: [61, 31]
topics: ["decompilation", "gamecube", "nflstreet2"]
stars: 9
forks: 2
openIssues: 513
closedIssues: 79
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-10-01T21:07:12Z"
lastCommitAt: "2026-11-22T02:10:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 44
maintainers: ["mitsevox", "adampreddy", "lifewillbeokay"]
openGraphImageUrl: "https://opengraph.githubassets.com/1939fb32b8b35bb7362fc8a271af98facbc5b3a3cea6cac21ff54559f09389e2/mitsevox/nflstreet2"
---

# NFL Street 2

A matching decompilation of **NFL Street 2** (GameCube, 2004). The goal is source that compiles back to a byte-identical copy of the original executable, with names, types and source structure supported by evidence.

## Targets

| Id | Region | Revision | Status | Original SHA-1 |
| --- | --- | --- | --- | --- |
| `GN7E69-rev0` | USA | 0 | active | `3561e946e9ff785b68692f87d2ba85d81fd2dcf4` |

`config/targets.json` is the registry; the target's inputs are in `config/GN7E69-rev0/`, described in its [README](https://github.com/mitsevox/nflstreet2/blob/HEAD/config/GN7E69-rev0/README.md).

## Building

You need your own copy of the game disc. Keep disc images and extracted files outside public Git. The tools support Python 3.9 or newer on Linux x86-64 and macOS ARM64 (macOS runs Wibo through Rosetta).
