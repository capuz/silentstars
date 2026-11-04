---
repo: "cttt-des/AI-BackpackBattles"
name: "AI-BackpackBattles"
description: "A plugin for AI decisions for the game Backpack Battles. (In progress)"
originalDescription: "A plugin for AI decisions for the game Backpack Battles. (In progress)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cttt-des/AI-BackpackBattles"
language: "GDScript"
languages: ["GDScript", "Python"]
languagePcts: [50, 49]
stars: 10
forks: 1
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 6
createdAt: "2026-07-26T14:31:16Z"
lastCommitAt: "2026-11-04T11:26:21Z"
lastReleaseAt: "2026-10-30T11:48:34Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 60
undervaluedScore: 44
maintainers: ["cttt-des"]
openGraphImageUrl: "https://opengraph.githubassets.com/04be8583a696b30594fbfdca6c00bbaa760112a02e0f50e097cfcd3c808ec41f/cttt-des/AI-BackpackBattles"
---

# Backpack Battles AI (背包乱斗 AI)

An external toolkit for the game Backpack Battles (背包乱斗): **battle log exporter** (read-only game memory → battle reports in the same format as the game), **battle simulator** (combat simulation based on reverse-engineered ground truth), and **external AI** (automated play). It does not modify any game files.

## ⚠️ Known Issues (Read Before Use)

The simulator does not yet fully match the game. The following **known issues** currently exist:

1. **Dragon Knight (黏黏龙骑士) cooldown fast-forward has positive-feedback amplification.**
   The mechanism itself has been reproduced 1:1 from the source code (each time an item on the board activates, DK's cooldown advances by 15%), and the linked loops for Twine (60% chain activation) and Chili (heat acceleration) have also been restored. However, the simulator's random number sequence differs from the game's, so small differences in the loop bonuses are amplified exponentially (measured: DK's attack interval decays to 0.02s, while the ground truth is stable at 0.35s+). Full convergence requires frame-by-frame alignment with the game's rng sequence.

2. **Some item effects still deviate.**
   The behavior of…
