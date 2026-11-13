---
repo: "againrom/againrom-engine"
name: "againrom-engine"
description: "Open source Rage of Mages engine implementation"
readmeQualityOk: true
url: "https://github.com/againrom/againrom-engine"
homepage: "https://againrom.com/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai-assisted-development", "allods", "cross-platform", "ebitengine", "game-engine", "game-preservation", "game-reimplementation", "golang", "map-editor", "modding"]
stars: 21
forks: 1
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 0
recentReleases: 10
createdAt: "2026-10-07T12:49:50Z"
lastCommitAt: "2026-11-13T00:00:00Z"
lastReleaseAt: "2026-10-09T15:02:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6fab1a9797d55512ba46007d0b70886ad2f2ee4640b161a29c043d0f9e2cfe74/againrom/againrom-engine"
discussionCount: 0
---

# AgainROM

AgainROM is a new engine for **Rage of Mages** (Allods, 1998) and **Rage of
Mages II: Necromancer**. You play the original campaign with your own copy of
the game, on Windows, macOS or Linux.

It ships no game files. It reads the maps, graphics, sounds, music and movies
from the files of a copy that you already own. The English and the Russian
releases of both games work.

The campaign, towns, shops, the tavern, battles, spells, movies and saving all
run, but the game is a work in progress. Each known difference from the
original is listed in `docs/divergences/`.

## What you need

- 64-bit Windows, macOS on Intel or Apple Silicon, or Linux x86_64. See
  [Install on Linux](#install-on-linux) for its system libraries.
- The game files of Rage of Mages, English or Russian, from a Windows install
  or the CD, or of Rage of Mages II (see [Rage of Mages II](#rage-of-mages-ii)).
  Each game needs its own lawful copy. They are sold digitally, for example on
  GOG.

AgainROM only reads the game files. It never changes them.

## Game files of Rage of Mages

AgainROM reads these files from one game folder:

| file | what it gives |
|---|---|
| `main.res`, `graphics.res`,…
