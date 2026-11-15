---
repo: "HctrRB/pokeemerald-vita-3ds"
name: "pokeemerald-vita-3ds"
description: "Native PS Vita port of pokeemerald with Emerald 3DS features (no ROM included)"
readmeQualityOk: true
url: "https://github.com/HctrRB/pokeemerald-vita-3ds"
language: "C"
languages: ["C"]
languagePcts: [73]
stars: 17
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-11-07T11:48:03Z"
lastCommitAt: "2026-11-15T11:23:07Z"
lastReleaseAt: "2026-11-14T16:42:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 20
maintainers: ["HctrRB"]
openGraphImageUrl: "https://opengraph.githubassets.com/839cb9857fea1d992fec65e3fd3efb7c2e8ebad648c4c4457e6444c89d6c0d65/HctrRB/pokeemerald-vita-3ds"
---

# Pokémon Emerald Vita 3DS

Unofficial native PS Vita port of Pokémon Emerald, built from the
[pret/pokeemerald](https://github.com/pret/pokeemerald) decompilation. It is not an emulator:
the game's C code is compiled for the Vita's ARM CPU, and a platform layer supplies what the GBA
hardware did. On top of it, the port brings the features of
[Emerald 3DS](https://github.com/ZallaxDev/emerald-3ds) to the Vita with vitaGL:

- a 3D voxel overworld built live from the game's maps, with sun, shadows, day/night and weather;
- 3D battles on a stage taken from the map where the battle starts;
- a new touch interface over the 3D world that replaces the GBA menus and boxes, with five
  menu themes;
- HGSS follower Pokémon, an accelerated clock, time-based encounters and optional QoL extras.

The full list is under [Features](#features).

> **AI-assisted project.** The code, build scripts and documentation were written with an AI
> coding assistant (Claude Code, by Anthropic) under the supervision of HctrRB, who sets the
> direction, reviews the changes and tests every build on a real PS Vita.

> **Legal notice.** Pokémon and Pokémon Emerald are © Nintendo, Creatures Inc. and GAME FREAK…
