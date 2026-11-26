---
repo: "doesburg11/EvolvedCooperation"
name: "EvolvedCooperation"
description: "Exploring evolved cooperation in a multi-agent ecological environment."
readmeQualityOk: true
url: "https://github.com/doesburg11/EvolvedCooperation"
homepage: "https://humanbehaviorpatterns.org/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-based-modeling", "cellular-automata"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-09-25T20:32:27Z"
lastCommitAt: "2026-11-26T13:02:54Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 83
maintainers: ["doesburg11", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a063814a2f1aa4578d8b4f052ada99ec6aaddd5aa97470f29f357e941636eb04/doesburg11/EvolvedCooperation"
---

# EvolvedCooperation

A collection of agent-based models of how cooperation and altruism can evolve. The models use evolutionary
dynamics only (see [Cross-Repo Mapping](#cross-repo-mapping)); the one exception is the `kin_selection/learning`
follow-up, which tests learned helping.

## Main Achievements

As of 2026-11-22. Every result holds only for the model and settings it was run with; details, controls and
caveats are in each module's README or RESULTS file.

1. **A Python port of the Ethnocentrism model that passed its comparison with NetLogo, and evidence that
   ethnocentrism falls sharply when colour no longer tracks descent** (how often help is given hardly changes) ([`ecological_models/ethnocentrism/`](https://github.com/doesburg11/EvolvedCooperation/blob/HEAD/ecological_models/ethnocentrism/README.md),
   [RESULTS](https://github.com/doesburg11/EvolvedCooperation/blob/HEAD/ecological_models/ethnocentrism/RESULTS.md)). The port of the NetLogo model (Hammond & Axelrod 2006)
   showed no clear difference from NetLogo in any of 81 pre-registered experiment × metric comparisons. A numba
   version is 4-8× faster and replays every committed run bit for bit.
