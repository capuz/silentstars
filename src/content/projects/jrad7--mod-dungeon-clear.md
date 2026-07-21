---
repo: "jrad7/mod-dungeon-clear"
name: "mod-dungeon-clear"
description: "A module for AzerothCore's playerbots to help them clear dungeons."
readmeQualityOk: true
url: "https://github.com/jrad7/mod-dungeon-clear"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["azerothcore-module", "azerothcore", "playerbots"]
stars: 36
forks: 9
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-28T22:01:39Z"
lastCommitAt: "2026-07-21T06:10:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 40
maintainers: ["jrad7"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3484a7395523d2a829b76169abdfb058d0820f23345c32ff50ea1e303f94153/jrad7/mod-dungeon-clear"
---

# mod-dungeon-clear

Autonomous dungeon-clearing mode for **mod-playerbots** tank bots, packaged as a
drop-in AzerothCore module. A tank bot drives the party from boss to boss,
clearing trash, pathing the layout, pausing for loot, resting between fights, and
handling doors and scripted events along the way. You deal damage and let the
tank run the dungeon.

Routes are generated on the fly from the live navigation mesh, with no waypoints
or hardcoded paths, so the clear works in any instance. It runs against a
**stock, unmodified mod-playerbots** checkout with no playerbots source edits.

> ## Use the companion addon
>
> [**mod-dungeon-clear-addon**](https://github.com/jrad7/mod-dungeon-clear-addon)
> is the recommended way to drive a clear: a movable in-game panel with On, Off,
> Skip, and Pause buttons, a live status readout, a per-boss list, and a settings
> panel for live tuning. The `dc` chat keywords and `.dc` commands still work, but
> the addon is easier to use.

## What it does

While enabled, the tank bot handles a run end to end:

- **Routing** from boss to boss over the live navmesh, including long corridors,
  doors, and multi-wing maps.
- **Pulling trash** on the way…
