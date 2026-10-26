---
repo: "AuroraWright/knife"
name: "knife"
description: "A Rust reimplementation of the engine of Tsukihime -A piece of blue glass moon- for Nintendo Switch"
readmeQualityOk: true
url: "https://github.com/AuroraWright/knife"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 16
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-23T16:24:19Z"
lastCommitAt: "2026-10-26T18:06:27Z"
lastReleaseAt: "2026-10-25T23:34:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 31
maintainers: ["AuroraWright"]
openGraphImageUrl: "https://opengraph.githubassets.com/6761890bcf8d1d5213093d9eaa8da30803d99d3aa10ae454335bd846afe22e17/AuroraWright/knife"
---

# knife

A Rust reimplementation of the engine of Tsukihime -A piece of blue glass moon- and Witch on the Holy Night for
Nintendo Switch. It plays the games from their Switch releases' data and aims to behave exactly like the
originals: it is heavily based on a decompilation of the original Switch executables, and its behaviour is
checked against the Switch games running in an emulator.

Both releases of Tsukihime are supported: the Japanese one and the overseas one (English, Simplified and
Traditional Chinese besides Japanese). So is the Switch release of Witch on the Holy Night (Japanese, English,
Simplified and Traditional Chinese). knife tells the games apart by their data.

knife is inspired by [shin](https://github.com/DCNick3/shin), DCNick3's reimplementation of the engine of
the Switch visual novels by Entergram, and shares some of its code.

[engine-writeup.md](https://github.com/AuroraWright/knife/blob/HEAD/engine-writeup.md) describes how the original engine works: the game data, the script
machine and its frame loop, text, the stage, sound, saves and the full instruction set, and what Witch on the
Holy Night does differently.

## Game data

knife needs the game data…
