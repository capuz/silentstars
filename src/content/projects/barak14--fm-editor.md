---
repo: "barak14/fm-editor"
name: "fm-editor"
description: "Free open-source cross-platform real-time editor for FM24, FM26 and FM27"
readmeQualityOk: true
url: "https://github.com/barak14/fm-editor"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["football-manager", "football-manager-2024", "football-manager-2026", "football-manager-2027"]
stars: 19
forks: 6
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-10-30T01:52:22Z"
lastCommitAt: "2026-11-23T08:08:39Z"
lastReleaseAt: "2026-11-21T00:04:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["barak14", "ianderse", "Laurentiu-Andronache"]
openGraphImageUrl: "https://opengraph.githubassets.com/a40fe065411b166a336b47fbec173f96586e01cbf44705c25c9afbc640462d03/barak14/fm-editor"
---

# fm-editor

A real-time memory editor for **Football Manager 24, 26 and 27**. It attaches to a running
`fm.exe`, finds every player, staff member and club in the loaded save, and lets you browse
and edit them while the game runs. Every write goes through an undo stack.

It runs natively on **Windows** and on **Linux**, where it attaches to FM running under
Steam's Proton.

> **Back up your save before editing.** fm-editor writes directly into the game's memory.
> Edits become part of the save once FM saves the game. Use it on offline, single-player
> saves only.
