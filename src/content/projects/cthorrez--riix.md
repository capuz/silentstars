---
repo: "cthorrez/riix"
name: "riix"
description: "Open source implementations of rating systems"
url: "https://github.com/cthorrez/riix"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-01-08T20:25:00Z"
lastCommitAt: "2026-07-03T06:23:08Z"
lastReleaseAt: "2024-10-29T08:35:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["cthorrez"]
openGraphImageUrl: "https://opengraph.githubassets.com/439111e64c7b02487309566132e16b5e892c6b808a47ee1389d9ea3932d559f5/cthorrez/riix"
---

Open source implementations of online rating systems focusing on efficiency for offline experimentation

## When to use riix
This package is designed to accelerate experiments studying and comparing rating systems. In the scenario where you have paired comparison datasets with a known number of competitors and time range, riix exploits that information to achieve fast runtimes. It's **not** useful in the streaming case where new data with new competitors are coming in. It also only currently supports 1v1 competitions but future support for two team competitions is planned. (more than 2 teams is not)

> I have a large dataset of player matches for a game and want to determine which rating system out of Elo, Glicko, TrueSkill etc. gives the best predictive accuracy.

Use riix! 👍

> I want to incorporate skill based matchmaking into the game I am creating and want a package to compute ratings for players on the fly.

There are lots of other great python packages for that too! (just not riix)
* [openskill.py](https://github.com/OpenDebates/openskill.py) Multi-way competitions with [Weng-Lin](https://www.jmlr.org/papers/v12/weng11a.html) rating systems
*…
