---
repo: "jkoehler11/stargate-alliance-decomp"
name: "stargate-alliance-decomp"
description: "Decompilation of the Stargate SG-1: The Alliance Xbox prototype (2005-12-15): UnrealScript, native symbol map and a bootable rebuild. No game data included."
readmeQualityOk: true
url: "https://github.com/jkoehler11/stargate-alliance-decomp"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["decompilation", "reverse-engineering", "stargate", "unreal-engine-2", "xbox"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-23T00:24:00Z"
lastCommitAt: "2026-11-19T05:04:13Z"
lastReleaseAt: "2026-10-25T02:43:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["jkoehler11"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d5afc17aaac3aa7a207499266671785097c47f6674a65d99dcba00f9c9c45af/jkoehler11/stargate-alliance-decomp"
---

# Stargate SG-1: The Alliance — decompilation

  UnrealScript decompilation, native symbol map and a bootable script rebuild.

> **Important**
>
> **Bring your own dump.** This repository contains no game data: no Xbox executable, no `.u` packages, no
> maps, no textures, no audio, no assets of any kind, and no code taken from the game. You need your own
> copy of the prototype release. Everything here is tooling, documentation and code written from scratch.

## What this is

*Stargate SG-1: The Alliance* is a first/third-person shooter by Perception Studios (Sydney) that was
cancelled in 2006. Two builds survive: a PC-derived build and this Xbox prototype, dated 2005-12-15, dumped
from an Xbox Debug Kit and released by CVLT OF OSIRIS through [Hidden Palace](https://hiddenpalace.org/Stargate_SG-1:_The_Alliance_(Dec_15,_2005_prototype))
on 2019-05-06.

The game runs on a Perception-modified Unreal Engine 2.5 (their internal engine fork is "Warfare" — the
shipped config files still carry `SetupWarfareXbox.int` and friends). Like most Unreal-era titles, most game
logic lives in UnrealScript compiled into `.u` packages, sitting on top of a native engine.
