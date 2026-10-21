---
repo: "kevung/blunderDB"
name: "blunderDB"
description: "Backgammon blunder analysis: import your matches, search positions by structure and mistake, measure your play, study with spaced repetition — with an embedded evaluator"
readmeQualityOk: true
url: "https://github.com/kevung/blunderDB"
homepage: "https://kevung.github.io/blunderDB/"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [60, 26]
topics: ["backgammon", "blunder", "database", "gnubg", "go", "spaced-repetition", "svelte", "wails", "backgammon-analysis", "extreme-gammon"]
stars: 6
forks: 1
openIssues: 2
closedIssues: 612
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-04-20T20:48:51Z"
lastCommitAt: "2026-10-21T20:00:27Z"
lastReleaseAt: "2025-01-15T11:18:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 82
maintainers: ["kevung", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/097a96c200a53cd1bcf34c834da32c80be6a47aa2bf9acaa981e9e4b6e65cb32/kevung/blunderDB"
discussionCount: 9
---

# blunderDB

A backgammon blunder analysis tool. Import your matches from eXtreme Gammon, GnuBG and BGBlitz, store every position once, search them by structure and by mistake, measure your play, and study the positions you keep getting wrong — with an evaluator built in.

Documentation, in nine languages: <https://kevung.github.io/blunderDB/>

## Features

**A library of positions**

- **Import matches** from eXtreme Gammon (`.xg`, `.xgp`), GnuBG (`.sgf`), BGBlitz (`.bgf`) and Jellyfish (`.mat`), by file, by folder or by drag-and-drop. Positions are deduplicated across imports; imported analyses, comments, luck and XG flags travel with them.
- **Search** by checker structure (including an *except* structure), pip count, score, cube, dice, equity and error thresholds, contact/no-contact, comments, flags, player, match or tournament. Every filter has a command-line token, and filter sets can be saved as a library.
- **Collections and tournaments** to organise positions and matches; match navigation with the played move highlighted.
- **Export** a match to Jellyfish/GnuBG `.mat` to replay it in another program; export positions, or selected parts of a database.

**Measuring and…
