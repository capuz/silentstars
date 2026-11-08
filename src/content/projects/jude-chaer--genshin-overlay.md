---
repo: "Jude-Chaer/genshin-overlay"
name: "genshin-overlay"
description: "Interactive map overlay for Genshin Impact"
readmeQualityOk: true
url: "https://github.com/Jude-Chaer/genshin-overlay"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 3
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-09-26T06:53:07Z"
lastCommitAt: "2026-11-08T10:41:53Z"
lastReleaseAt: "2026-10-02T17:47:03Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 57
maintainers: ["Jude-Chaer", "Mipppy"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdbdb30828e6b93713a1115e6d0b78489a09377fba780b15f1a1010c785872cf/Jude-Chaer/genshin-overlay"
---

# genshin-overlay

An interactive map overlay for Genshin Impact. Open the map in game and the markers you choose
show up right on it: chests, oculi, materials, bosses, whatever you are looking for. No alt-tabbing
to a website.

## Features

- **Snaps to the in-game map.** Press M and the overlay finds where the map is looking, in any
  region and on any underground layer.
- **Follows along.** Drag or zoom the map and the markers move with it.
- **Pick what to show.** Press Alt+`` ` `` to open the marker menu and choose categories.
- **Transparent and click-through.** The markers look like part of the game's own map.
- **Extensions.** Add your own panels and markers with Lua scripts.

## How it works

The overlay only reads the screen. It never touches the game's memory or files.

1. The game window is captured a few times per second.
2. The frame is matched against the official map art (SIFT features and a RANSAC fit with
   OpenCV). This gives the region, the underground layer, the spot the map is centred on and
   the zoom level.
3. While the map is open it keeps tracking with lighter matches. When nothing matches, the map is
   treated as closed and the markers are hidden.
4.…
