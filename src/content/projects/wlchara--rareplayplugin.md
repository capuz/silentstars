---
repo: "WLChara/RAReplayPlugin"
name: "RAReplayPlugin"
description: "open source replay plugin for Red Alert 2 Yuri's Revenge ."
originalDescription: "open source replay plugin for Red Alert 2 Yuri's Revenge ."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/WLChara/RAReplayPlugin"
language: "C++"
languages: ["C++"]
languagePcts: [85]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-01T13:05:02Z"
lastCommitAt: "2026-11-24T13:29:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 35
maintainers: ["WLChara"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd1b2be9742b4eeb68e7009790770b91fd7b33c38da64720873dd91affcf1f50/WLChara/RAReplayPlugin"
---

# RAReplayPlugin

Replay recording and playback plugin for Red Alert 2: Yuri's Revenge.

The plugin is loaded into the game via Syringe. During a match, it records player commands. During playback, it replays the entire match frame by frame inside the game and overlays a viewing interface on the screen. Replay files use the `.yrrep` extension. This repository contains the plugin source code, offline tests, debugging tools, and a C# class library for launcher integration. It does not include game files, a complete client, or prebuilt binaries.

## Features

**Recording**

- Supports skirmish and multiplayer matches.
- Records player commands, as well as local input side effects that affect simulation results (for example, the hint animation for move commands). Single-player matches also record game speed changes made mid-match.
- Replays are written to disk as they are recorded. Incomplete replays left by abnormal exits can still be played back to the last complete frame.
- Replays are compressed in blocks, and each block has a checksum. Completed replays also have an overall hash.

**Playback**
