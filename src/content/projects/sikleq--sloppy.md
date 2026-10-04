---
repo: "sikleq/Sloppy"
name: "Sloppy"
description: "Dota Enhanced Patch Reader and Materials"
readmeQualityOk: true
url: "https://github.com/sikleq/Sloppy"
homepage: "https://sikleq.github.io/Sloppy/"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 9
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-07T14:27:17Z"
lastCommitAt: "2026-10-04T10:02:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["sikleq"]
openGraphImageUrl: "https://opengraph.githubassets.com/054f746064a43dd7ef0ef93b453544d082b0899fc2fb0c7468623996015a7c69/sikleq/Sloppy"
---

# Dota 2 Enhanced Patch Reader and Materials

A static site that turns Valve's raw Dota 2 patch notes into a readable, filterable changelog, plus a set of
reference tables built from the game's own files. Every change is tagged (BUFF / NERF / REWORK / NEW / DEL / MISC /
QoL), every numeric delta is computed as a percentage, every per-level formula unfolds into a per-level table.

**Live site:** <https://sikleq.github.io/Sloppy/>

## What it does differently from dota2.com/patches

- **Direction at a glance.** Each row shows a coloured `+12% BUFF` / `-9% NERF` badge derived from the numbers — no
  arithmetic required. Rows the notes word ambiguously are checked against the game files of both patches.
- **Per-level scaling unfolded.** Formula rows (`14% + 1% per level`) expand into a full table by level.
- **Before → after cards.** Reworked abilities, facets and item abilities side by side, as in the game's tooltips
  (cast range, mana, cooldown in a header strip); item stats and recipes as before → after cards with their prices.
- **Filter by tag.** Click a chip to surface only BUFF, NERF, DEL, … rows across the page.
- **Every hero, item and unit on its own page** — all its…
