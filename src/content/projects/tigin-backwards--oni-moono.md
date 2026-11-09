---
repo: "tigin-backwards/oni-moono"
name: "oni-moono"
description: "Oxygen Not Included's Unity layer on the BRUTAL framework, .NET 10 CoreCLR. On a late-game colony the game runs at up to 13× the original's frame rate"
readmeQualityOk: true
url: "https://github.com/tigin-backwards/oni-moono"
language: "C#"
languages: ["C#"]
languagePcts: [90]
topics: ["brutal", "coreclr", "dotnet", "game-engine", "harmony", "klei", "modding", "oni", "oxygen-not-included", "performance"]
stars: 165
forks: 8
openIssues: 7
closedIssues: 48
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-16T00:50:02Z"
lastCommitAt: "2026-11-09T03:25:08Z"
lastReleaseAt: "2026-10-22T11:24:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 33
maintainers: ["tigin-backwards"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf059eaa9536ad20ca9e378bfc920d9fb70fa8a88085aaab1842f1e78bbcd1fb/tigin-backwards/oni-moono"
---

# Moono

[English](https://github.com/tigin-backwards/oni-moono/blob/HEAD/README.md) | [简体中文](https://github.com/tigin-backwards/oni-moono/blob/HEAD/README.zh-CN.md)

An unofficial, super fast, super sussy replacement for the Unity layer of Oxygen Not Included,
artisanally crafted by Claude. On a late-game colony the game runs at up to 13× the original's
frame rate ([Performance](#performance)).

I did this mostly for fun, to see how far Oxygen Not Included's performance can go on a modern
.NET runtime (CoreCLR). I've had the idea for a while, but none of the existing C# renderers
sparked joy. When [BRUTAL](https://github.com/ahwootech/BRUTAL) went open source, it seemed like
a good excuse to try a sexy new toy.

Moono runs Klei's original DLLs, patched at load where Mono and .NET
[differ](https://github.com/tigin-backwards/oni-moono/blob/HEAD/docs/ARCHITECTURE.md). Everything they need from Unity is reimplemented here.

## Setup

You need your own copy of the game on Steam, on Linux or Windows (no macOS). Epic Games Store
and WeGame (China) are not currently supported. Because this replaces
the engine rather than patching the game, it can't ship as an ordinary Harmony mod.…
