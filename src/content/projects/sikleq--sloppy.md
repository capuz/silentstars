---
repo: "sikleq/Sloppy"
name: "Sloppy"
description: "Dota Enhanced Patch Reader and Materials"
readmeQualityOk: true
url: "https://github.com/sikleq/Sloppy"
homepage: "https://sikleq.github.io/Sloppy/"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 10
forks: 4
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-07T14:27:17Z"
lastCommitAt: "2026-10-23T09:32:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["sikleq", "pophilpo"]
openGraphImageUrl: "https://opengraph.githubassets.com/785cf9c47e5c18a01e348ec82c3111e46a6549d28c8d54733159c323758470da/sikleq/Sloppy"
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
