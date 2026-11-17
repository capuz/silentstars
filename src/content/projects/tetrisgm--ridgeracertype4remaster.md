---
repo: "tetrisgm/RidgeRacerType4Remaster"
name: "RidgeRacerType4Remaster"
description: "R4: Ridge Racer Type 4 (USA) statically recompiled with psxrecomp + recomp-ui"
readmeQualityOk: true
url: "https://github.com/tetrisgm/RidgeRacerType4Remaster"
language: "C"
languages: ["C"]
languagePcts: [99]
stars: 17
forks: 2
openIssues: 7
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 2
createdAt: "2026-09-26T02:34:27Z"
lastCommitAt: "2026-11-17T12:15:07Z"
lastReleaseAt: "2026-10-24T08:49:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["tetrisgm", "mstan"]
openGraphImageUrl: "https://opengraph.githubassets.com/74fa7a2ec787f6a9082aede4523ac7f655f12c731702bcf432380b9545dacecc/tetrisgm/RidgeRacerType4Remaster"
---

# Ridge Racer Type 4 Remaster

R4: Ridge Racer Type 4 (USA, **SLUS-00797**), statically recompiled to a
native runtime using [psxrecomp](https://github.com/RetroPortingToolKit/psxrecomp)
and [our custom menu](https://github.com/tetrisgm/recomp-launcher).
Release qualification is in progress.

## Current status

Version 0.2.3 is being prepared for Windows x64, Linux x64 and macOS Apple
silicon. See [release notes](https://github.com/tetrisgm/RidgeRacerType4Remaster/blob/HEAD/RELEASE_NOTES.md) and
[current qualification status](https://github.com/tetrisgm/RidgeRacerType4Remaster/blob/HEAD/docs/HANDOFF.md) before publishing a build.

The custom R4 menu replaces the main menu and supported offline race pause.
**Start**, **Select/Back** or Esc opens it during a race.
It includes display settings, Modern/Classic controls, keyboard/gamepad bindings,
input devices, deadzones, mods and volume. Live settings apply immediately;
restart-only changes are saved and labelled. PGXP stays enabled.

Local multiplayer supports **two to four players** on one screen: horizontal
split for two, quadrants for three or four. Online play keeps a full-screen view
per player. The optional **Modern race HUD**…
