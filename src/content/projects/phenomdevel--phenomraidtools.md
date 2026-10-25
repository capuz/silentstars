---
repo: "PhenomDevel/PhenomRaidTools"
name: "PhenomRaidTools"
description: "World of Warcraft Addon: You can define personal triggers based on encounter events to send messages to your raid team. Available triggers are timers, rotations, health-, and power percentages."
readmeQualityOk: true
url: "https://github.com/PhenomDevel/PhenomRaidTools"
language: "Lua"
languages: ["Lua"]
languagePcts: [94]
topics: ["warcraft-addon", "addon"]
stars: 6
forks: 4
openIssues: 0
closedIssues: 40
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2020-04-28T09:04:33Z"
lastCommitAt: "2026-10-25T22:10:36Z"
lastReleaseAt: "2020-05-12T11:30:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 69
maintainers: ["PhenomDevel"]
openGraphImageUrl: "https://opengraph.githubassets.com/56d604c7d51660616f871ecc5b88a32da1b2da2c9c0905c460fe6d107092312f/PhenomDevel/PhenomRaidTools"
---

# PhenomRaidTools

**Plan per boss which player sees which message when; the raid lead syncs the plan before the pull.**

The raid lead plans each boss on a timeline. Before the pull the plan goes to
the group, and every player runs it locally and sees only the messages meant
for them. Since Midnight (also WoW: Forever) addons get no combat log, no boss
health or power and can't message the group during encounters, so everything
counts from the pull. Use it next to your boss mod (DBM, BigWigs) and WeakAuras.

## Supported versions

| Client | Interface |
| --- | --- |
| WoW: Forever | 16001 |
| Retail | 120105 (12.1.5) and 120107 (12.1.7 PTR) |

Classic Era, Wrath Classic and other clients are not supported.

## Installation

1. Install it with the [CurseForge](https://www.curseforge.com/projects/381654)
   or [Wago](https://addons.wago.io/addons/nQN57KBw) app, or download the zip
   from [GitHub releases](https://github.com/PhenomDevel/PhenomRaidTools/releases/latest).
2. Manual install: extract `PhenomRaidTools` into
   `World of Warcraft/<client>/Interface/AddOns/`.
3. Log in and type `/prt`. A short guide asks for your role (raid lead,
   player or both) and lets you place the…
