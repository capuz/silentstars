---
repo: "againrom/againrom-engine"
name: "againrom-engine"
description: "Open source Rage of Mages engine implementation"
readmeQualityOk: true
url: "https://github.com/againrom/againrom-engine"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 19
forks: 2
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 0
recentReleases: 10
createdAt: "2026-10-07T12:49:50Z"
lastCommitAt: "2026-10-31T00:00:00Z"
lastReleaseAt: "2026-10-09T15:02:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/1987a80fe2b6a4f39fff5f4a6951c9b4a9c2659eed6d32e2762baecc25c09c57/againrom/againrom-engine"
discussionCount: 0
---

# AgainROM

AgainROM is a new engine for **Rage of Mages** (Allods, 1998). You play the
original game's campaign with your own copy of the game, on Windows, macOS or
Linux.

It ships no game files. It reads the maps, graphics, sounds, music and movies
from the files of a Rage of Mages copy that you already own. Both the English
and the Russian releases work.

The game is a work in progress. The campaign, towns, shops, the tavern,
battles, spells, movies and saving all run. Some details still differ from the
original. Each known difference is listed in `docs/divergences/`.

## What you need

- 64-bit Windows, macOS on Intel or Apple Silicon, or Linux x86_64. See
  [Install on Linux](#install-on-linux) for its system libraries.
- The game files of Rage of Mages, English or Russian, from a Windows install
  or the CD. The game is sold digitally, for example on GOG.

AgainROM only reads the game files. It never changes them.

## Game files

AgainROM reads these files from one game folder:

| file | what it gives |
|---|---|
| `main.res`, `graphics.res`, `scenario.res`, `world.res`, `movies.res` | the game itself; without any one of them AgainROM does not start |
| `sfx.res` | sounds |…
