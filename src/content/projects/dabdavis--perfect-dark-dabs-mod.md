---
repo: "DabDavis/perfect-dark-dabs-mod"
name: "perfect-dark-dabs-mod"
description: "Perfect Dark PC port fork: jump, combat roll, melee combos, third person, 80 simulants, spectator camera, screenshots and video recording. Bring your own ROM."
readmeQualityOk: true
url: "https://github.com/DabDavis/perfect-dark-dabs-mod"
language: "C"
languages: ["C"]
languagePcts: [86]
topics: ["decompilation", "fps", "game-mod", "n64", "opengl", "perfect-dark", "sdl2"]
stars: 114
forks: 4
openIssues: 26
closedIssues: 9
watchers: 6
contributors: 35
recentReleases: 10
createdAt: "2026-09-01T09:08:12Z"
lastCommitAt: "2026-09-19T01:16:30Z"
lastReleaseAt: "2026-09-06T14:32:54Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 75
undervaluedScore: 29
maintainers: ["DabDavis"]
openGraphImageUrl: "https://opengraph.githubassets.com/e520a93703a5d2b180c7ffa19cb762062c7a09221e4897bae1b17aef12fef896/DabDavis/perfect-dark-dabs-mod"
---

# Dab's Mod

**[Download](https://github.com/DabDavis/perfect-dark-dabs-mod/releases/latest)**
— Windows, Linux and macOS. You supply the ROM; see [You need a ROM](#you-need-a-rom).
There is also a [rolling dev build](https://github.com/DabDavis/perfect-dark-dabs-mod/releases/tag/dabs-mod-dev)
of the newest commit, if you want fixes before they reach a release.

A fork of the [Perfect Dark PC port](https://github.com/perfect-dark-pc-port/perfect_dark),
which is itself a port of the [Perfect Dark decompilation](https://github.com/n64decomp/perfect_dark).

It adds movement the N64 game never had — jump, a combat roll, melee combos, a
third person camera — raises the Combat Simulator simulant cap from 8 to 80,
keeps bodies lying where they fell, and gives you a free-flying spectator
camera, a screenshot key and a video recorder for watching the results.

Everything here is engine-side and lives in the executable. No custom levels or
assets are bundled, and none are needed - but mods drop in, see [Mods](#mods).

## You need a ROM

This is an executable, not a game. It reads every texture, model, level and line
of dialogue out of a Perfect Dark ROM at startup, and ships with none of…
