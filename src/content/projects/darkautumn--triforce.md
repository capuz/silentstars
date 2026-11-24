---
repo: "DarkAutumn/triforce"
name: "triforce"
description: "A deep learning agent for The Legend of Zelda (nes)"
readmeQualityOk: true
url: "https://github.com/DarkAutumn/triforce"
language: "Python"
languages: ["Python", "Rust", "Assembly"]
languagePcts: [45, 31, 23]
stars: 29
forks: 4
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-01-02T23:20:39Z"
lastCommitAt: "2026-11-24T01:54:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 61
maintainers: ["DarkAutumn"]
openGraphImageUrl: "https://opengraph.githubassets.com/678b166d114663c64d72e60ddb1139002dbc33cf03b80033cc358c5502f11900/DarkAutumn/triforce"
---

# Triforce: a deep learning agent for The Legend of Zelda (NES)

Triforce trains reinforcement learning agents to play *The Legend of Zelda* on the NES, from the start of the game to
Ganon and Zelda, on two routes through the first quest:

- **`d3first`, the main route (2.0.0.0; the owner's corrected order since round 36)**, the speedrunners' order: the
  wood sword until the magic sword, Dungeons 3, 4, 1, 2, 5, 7, the magic sword under a gravestone, Dungeons 6, 8
  and 9, by screen scrolls, recorder warps, two dock warps (the recorder played in the water beside a raft dock: the
  whirlwind carries Link over the dock and the game sets him down on a screen it never meant to, 0x55 to the meat
  under the Armos, 0x3f into the graveyard), the heart containers of heart rock, the ladder and the raft
  (`docs/routes/d3first.md`). The models play it from console power on to the end of the game.
