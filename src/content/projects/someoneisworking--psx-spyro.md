---
repo: "SomeoneIsWorking/psx-spyro"
name: "psx-spyro"
description: "Native PC port of Spyro the Dragon (PS1), built on the psxport static-recompilation framework. Supply your own disc."
readmeQualityOk: true
url: "https://github.com/SomeoneIsWorking/psx-spyro"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-07-28T10:57:07Z"
lastCommitAt: "2026-11-17T14:45:59Z"
lastReleaseAt: "2026-11-15T19:05:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["SomeoneIsWorking"]
openGraphImageUrl: "https://opengraph.githubassets.com/7df84cd8d226bdc859475223aa012144c8315423c73a903d1c4e5c93d4353c6b/SomeoneIsWorking/psx-spyro"
---

# SpyroEngine — Spyro 1, 2 and 3

A native PC port of the PlayStation Spyro trilogy: Spyro the Dragon, Spyro 2: Ripto's Rage! and
Spyro: Year of the Dragon. One program opens on an in-window title picker and runs any of the three
from your own discs. It adds widescreen that draws more of the world, 60 fps by interpolation over
the original 30 fps logic, and Start/Cross skips for logos, fades and transitions.

Work in progress: every title reaches gameplay, but none is complete. Status per feature is in
[`docs/project-state.md`](https://github.com/SomeoneIsWorking/psx-spyro/blob/HEAD/docs/project-state.md).

## Screenshots

Captured from the port at 16:9 with 60 fps interpolation on.

### Spyro the Dragon

*The title-screen flyby at half speed: the original (left) changes every other frame; the
interpolated side (right) changes every frame, halfway between.*

### Spyro 2: Ripto's Rage!

*The intro at half speed, original left, interpolated right.*

### Spyro: Year of the Dragon

*The Insomniac intro at half speed, original left, interpolated right.*

## Features

- **Widescreen (16:9, 21:9).** The game's own culls are widened, so the extra columns show terrain,
  objects and sky…
