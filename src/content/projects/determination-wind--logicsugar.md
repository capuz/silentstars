---
repo: "DeterMination-Wind/LogicSugar"
name: "LogicSugar"
description: "A user-friendly Mindustry logic editor mod with readable for, while, and switch blocks, indentation, folding, and vanilla-compatible output."
readmeQualityOk: true
url: "https://github.com/DeterMination-Wind/LogicSugar"
homepage: "https://qm.qq.com/q/wkddSGW1J8"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["mindustry", "mindustry-mod", "mindustry-mod-v7-v8"]
stars: 18
forks: 2
openIssues: 1
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-26T17:45:06Z"
lastCommitAt: "2026-09-30T09:57:03Z"
lastReleaseAt: "2026-08-10T07:06:17Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 56
maintainers: ["DeterMination-Wind", "AdvinxCNN", "GXFQE"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b7d6f873d8ad1645fa88e7d777963c08becc03160aabeb77d2ea5fe47c5a91d/DeterMination-Wind/LogicSugar"
---

# Logic Sugar

<h1 align="center">
</h1>

[中文](https://github.com/DeterMination-Wind/LogicSugar/blob/HEAD/README_zh.md) | [English](https://github.com/DeterMination-Wind/LogicSugar/blob/HEAD/README.md)

> Turn Mlog into a high-level language.

Logic Sugar is tailored for players who are familiar with high-level languages such as Python and C++.

By wrapping basic mlog operations, Logic Sugar implements many features such as `for` and `Func`. Based on linked memory metadata, it can also create high-level data structures such as `vector` and `map`, and provides C++ STL-like built-in functions (`sort`, etc.) for structures such as `vector`.

Logic Sugar supports multiplayer, which means you can also efficiently understand the code of other players who use Logic Sugar.

Everything is aimed at making mlog editing more efficient.

## Features

### Structured Control Flow

Write common control flow as blocks; on save, everything compiles to plain vanilla mlog.

| Construct | Syntax | Description |
| --- | --- | --- |
| Branching | `if`, `elif`, `else` | Write conditionals as blocks. |
| Loops | `for`, `while` | Write loops as blocks. |
| Loop control | `break`, `continue` | Break out of…
