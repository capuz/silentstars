---
repo: "KnivesDevilish/SR-Source"
name: "SR-Source"
description: "A high-performance recompilation of Sonic Riders: Zero Gravity (Wii) for native PC (Linux and Windows). Requires your own copy of the game."
readmeQualityOk: true
url: "https://github.com/KnivesDevilish/SR-Source"
language: "Shell"
languages: ["Shell", "CMake", "Python"]
languagePcts: [50, 25, 21]
stars: 38
forks: 0
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 9
createdAt: "2026-10-23T20:23:30Z"
lastCommitAt: "2026-11-22T02:09:55Z"
lastReleaseAt: "2026-11-21T21:30:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 42
maintainers: ["KnivesDevilish"]
openGraphImageUrl: "https://opengraph.githubassets.com/176c4900a94cdff687f9d3935b7c58f13d3ef3554a683a698fd15cdd477d5736/KnivesDevilish/SR-Source"
discussionCount: 0
---

Sonic Riders: Source

  Static recompilation of <i>Sonic Riders</i> (GameCube) and <i>Sonic Riders: Zero Gravity</i> (Wii). Formerly SR-ZGS.

A modern static recompilation project for **Sonic Riders** (Nintendo GameCube) and **Sonic Riders: Zero Gravity** (Nintendo Wii), both played from one launcher, **Riders Terminal**, with the long-term goal of delivering a high-performance native PC experience on Linux and Windows, with Android support as a future target.

The project uses **DolRecomp** to generate native code from the original PowerPC game executable and a modified fork of **ModernGekko**, a Dolphin-derived runtime, to provide the execution environment and GameCube and Wii hardware services. The fork also contains the SR-Source launcher and its Netplay lobby. Both games run the same way, through the same runtime, launcher and settings; Zero Gravity's code was recompiled first, and Sonic Riders' is next (see [Performance Notes](#performance-notes)).

Until 0.1.4 the project was **SR-ZGS** (Sonic Riders: Zero Gravity Source) and played Zero Gravity alone. From 0.2.0 it is **Sonic Riders: Source**: see [Updating from SR-ZGS](#updating-from-sr-zgs-01x).
