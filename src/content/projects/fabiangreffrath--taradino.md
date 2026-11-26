---
repo: "fabiangreffrath/taradino"
name: "taradino"
description: "SDL2-Port of Rise of the Triad"
readmeQualityOk: true
url: "https://github.com/fabiangreffrath/taradino"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 60
forks: 19
openIssues: 16
closedIssues: 31
watchers: 8
contributors: 16
recentReleases: 0
createdAt: "2021-11-22T06:57:13Z"
lastCommitAt: "2026-11-26T12:58:27Z"
lastReleaseAt: "2025-12-22T12:52:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 92
undervaluedScore: 36
maintainers: ["fabiangreffrath", "WindyCityJess"]
openGraphImageUrl: "https://opengraph.githubassets.com/14a22949eebe7d2079d56371cf783657c7e5c0d847a9bfc9ca04471ad90632d8/fabiangreffrath/taradino"
---

# Taradino

This is a port of Apogee's 3D action title Rise of the Triad, originally
released in 1994. This port duplicates the functionality of the original
game on modern operating systems, including Linux, Windows, and macOS.

Portability fixes include support for 64-bit and big-endian systems.

This port makes use of the Simple Direct Media Layer, or SDL, and an additional
library named SDL_mixer.
Optional OPL3/AdLib music synthesis is supported by using libADLMIDI.

## Features

- A single executable handles both the shareware and the registered version of
  the game; the version is detected at runtime from the game data found.
- The game renders at 320x200 or 640x400, both with aspect ratio correction.
  The user interface (status bar, messages, crosshair, ...) scales with the
  resolution.
- Optional OPL3/AdLib music synthesis using the DMXOPL bank when built with
  libADLMIDI.

## Game Data

Taradino requires the data files of the original game. It looks for
`darkwar.wad` (registered version) first and falls back to `huntbgin.wad`
(shareware version). If neither is found, the game exits with an error.
