---
repo: "samualtnorman/voltorb-flip"
name: "voltorb-flip"
description: "Visually accurate recreation of VOLTORB Flip game from Pokemon HeartGold and SoulSilver written in TypeScript."
readmeQualityOk: true
url: "https://github.com/samualtnorman/voltorb-flip"
homepage: "https://samual.uk/voltorb-flip/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["voltorbflip", "voltorb", "picross", "minesweeper", "pokemon", "tile", "typescript"]
stars: 15
forks: 2
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-05-21T23:55:27Z"
lastCommitAt: "2026-07-28T14:56:39Z"
lastReleaseAt: "2021-02-16T11:27:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 27
maintainers: ["Maxwelldoug"]
openGraphImageUrl: "https://opengraph.githubassets.com/13e97ae5763e9eae1bfead7116c9a6b57aefe55699b3c80b2196cb8a781b8212/samualtnorman/voltorb-flip"
---

See [the demo](https://samual.uk/voltorb-flip/) on [my website](https://samual.uk/).

# Voltorb Flip
This is an open source faithful recreation of VOLTORB Flip from Pokémon HeartGold and SoulSilver written in typescript (a superset of javascript). None of the code is commented (sorry) but I'm open to pull requests if you have a bug fix or feature. Thanks.

# Features
## Levels
Levels are fully supported as they appear in the original game. If the player successfully finds all 2s and 3s, they advance one level, and if the player turns over a voltorb before flipping at least the current level number of tiles, they are dropped back to level 1, other wise they stay on the current level

Winning 5 levels in a row will also take the player straight to level 8 just like the original game.

## Memos
The memo menu is opened and closed by pressing the Open/Close Memo button. Selecting or unselecting a memo in the memo menu highlights or unhighlights that memo on the currently selected tile.

There are two features related to memos that do not appear in the original game however that were added for convenience. The first feature is that when only 1 memo is selected on a tile, a big version…
