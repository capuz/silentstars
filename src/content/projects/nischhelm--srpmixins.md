---
repo: "Nischhelm/SRPMixins"
name: "SRPMixins"
description: "Fixes and Tweaks Scape and Run Parasites"
readmeQualityOk: true
url: "https://github.com/Nischhelm/SRPMixins"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 9
openIssues: 3
closedIssues: 10
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2024-09-16T19:29:04Z"
lastCommitAt: "2026-11-07T10:37:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 91
maintainers: ["Nischhelm", "Landon-9999", "Flankrat"]
openGraphImageUrl: "https://opengraph.githubassets.com/c460907d02c7291a6c72fe4ded0998bfd83915799c9b7f539e7340d6d211151e/Nischhelm/SRPMixins"
---

# SRPMixins

Tweaks and Fixes for SRParasites

Originally intended for SRParasites to work better with RLCraft

## Contents

### Dimension Multipliers
- Global Multipliers for Health, Armor, Damage and KB Resistance are set per dimension (default is 1x for overworld, 2x for nether+end, 4x for LC)
- Dimension specific drop chance for parasite parts
- Dimension specific mob cap multipliers

### Phase point tweaks/fixes
- Fixes the phase sometimes randomly resetting to 0 in single player
- Fixes killing parasites being able to reduce phase by underflowing the point limit, after which any action that increases points again will decrease phase
- Fixed Multiplayer Sleeping Penalty being counted per sleeping player
- Bloody Clock also shows the progress to next phase in %
- Each player can have their own phases, making late joins in multiplayer less bad
- As another option, phase mechanics can be applied to chunks instead of whole dimensions, making the infestation grow only where players stay for a while. Custom starting phases can be set per biome.
- Added phase limit from which on Adapted mobs despawning gives a point penalty
- Adds a minimum phase for parasitic biome spreading giving…
