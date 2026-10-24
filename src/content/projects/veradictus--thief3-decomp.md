---
repo: "Veradictus/Thief3-Decomp"
name: "Thief3-Decomp"
description: "Decompilation, modding, and map editing for Thief: Deadly Shadows."
readmeQualityOk: true
url: "https://github.com/Veradictus/Thief3-Decomp"
language: "C++"
languages: ["C++"]
languagePcts: [80]
stars: 7
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 4
createdAt: "2026-09-27T07:58:10Z"
lastCommitAt: "2026-10-24T08:07:26Z"
lastReleaseAt: "2026-10-23T10:20:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 48
maintainers: ["Veradictus", "Suddl3", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/de8b40c0c3ccb8fad35f733182f2c851c9499d20097079a6c90705528b29bebe/Veradictus/Thief3-Decomp"
---

# Thief: Deadly Shadows modding SDK

**T3SDK** is a modding SDK for **Thief: Deadly Shadows** (Ion Storm, 2004), PC.
It fixes the PC version's display problems, loads mods into your installed
copy of the game, and gives them access to the engine. The goal is mods as
large as multiplayer. It comes with a launcher, tools to edit maps in Godot,
and the workbench for a matching decompilation of the game.

**Documentation**: <https://veradictus.github.io/Thief3-Decomp/>, with the
player guide (settings, FAQ, troubleshooting), the mod author guide and its
cookbook, how the game works under the hood, the API reference, the decomp
handbook and the engineering notes (the same pages as in [docs/](https://github.com/Veradictus/Thief3-Decomp/blob/HEAD/docs/)).

**What do you want to do?**

- [Play with the fixes and mods](#quick-start): download the launcher, click Install, click Play.
- [Edit maps](#edit-maps): export a map to Godot, change it, put it back into the game.
- [Write a mod](#write-a-mod): a DLL with a small C API.
- [Help decompile the game](#reverse-engineering-workbench-and-matching-decompilation).

## Quick start

1. Own **Thief: Deadly Shadows on Steam** ([buy…
