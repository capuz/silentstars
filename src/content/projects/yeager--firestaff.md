---
repo: "yeager/firestaff"
name: "firestaff"
description: "🔥 Source-faithful Dungeon Master engine — DM1, CSB, DM2, DM Nexus and Theron's Quest on modern hardware. macOS, Windows, Linux, Steam Deck."
readmeQualityOk: true
url: "https://github.com/yeager/firestaff"
homepage: "https://github.com/yeager/firestaff/releases/latest"
language: "C"
languages: ["C"]
languagePcts: [90]
topics: ["c", "chaos-strikes-back", "cross-platform", "deterministic", "dungeon-master", "game-engine", "linux", "macos", "open-source", "preservation"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-04-20T09:05:45Z"
lastCommitAt: "2026-08-14T05:13:26Z"
lastReleaseAt: "2026-08-06T06:49:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 71
maintainers: ["yeager"]
openGraphImageUrl: "https://opengraph.githubassets.com/0389980288324daffeff688c6e5d3d97d10f9261c1eb11d0fa7d6182e767e754/yeager/firestaff"
fundingLinks: ["GITHUB:https://github.com/yeager"]
discussionCount: 0
---

# Firestaff

Firestaff is a clean-room engine for the Dungeon Master games. It reads the
original files you own, identifies each edition by its content hash and keeps
that data separate from the program.

Dungeon Master for PC DOS 3.4 and Dungeon Master II: Skullkeep are the current
playable routes when matching original media is supplied. DM1 also recognises
its native Atari ST container. Chaos Strikes Back starts from verified native
Amiga editions by default; Atari ST and FM Towns have their own native data
paths. CSB campaign, save and presentation parity, plus Nexus and Theron's
Quest runtime work, are still under active development.

</p>

## Current state

Dungeon Master for PC DOS 3.4 is the most complete route: startup, menus,
dungeon view, HUD, controls, combat and save handling use original data.

Firestaff detects real media and exposes only paths with a verified handoff; it
never borrows data from another edition to fill a gap. The detailed status is kept in
[project status](https://github.com/yeager/firestaff/blob/HEAD/docs/PROJECT_STATUS.md). The published documentation is
available at [yeager.github.io/firestaff](https://yeager.github.io/firestaff/).
The…
