---
repo: "SunkenInTime/icarus"
name: "icarus"
description: "Valorant Strategy Creator"
readmeQualityOk: true
url: "https://github.com/SunkenInTime/icarus"
homepage: "https://icarusstrats.com/"
language: "Dart"
languages: ["Dart"]
languagePcts: [82]
topics: ["game-tools", "opensource", "valorant", "windows"]
stars: 95
forks: 20
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 6
recentReleases: 3
createdAt: "2024-11-17T20:32:05Z"
lastCommitAt: "2026-10-21T17:30:56Z"
lastReleaseAt: "2026-10-20T23:26:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["SunkenInTime"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb3f6eca455515f16d6ce1fd91c86be313f3e63826699c1d9479428af6a5e840/SunkenInTime/icarus"
---

# Icarus: Valorant Strategies & Line ups

Icarus is an interactive strategy creation tool for Valorant players. It focuses on a robust map drawing system that lets teams create, save, and iterate on strategies locally.

Download: [https://apps.microsoft.com/detail/9PBWHHZRQFW6?hl=en-us&gl=US&ocid=pdpshare](https://apps.microsoft.com/detail/9PBWHHZRQFW6?hl=en-us&gl=US&ocid=pdpshare)
Dev log: [https://youtu.be/dDn2rafvjMQ?si=mm1Sz-XrjvNQiRWE](https://youtu.be/dDn2rafvjMQ?si=mm1Sz-XrjvNQiRWE)

## Features

- Interactive map drawing and annotations
- Save, load, and organize strategies locally
- Agent and ability helpers
- Desktop-focused UX for planning sessions

## Tech Stack

- Flutter (Dart)
- Riverpod for state management
- Hive for local storage

## Architecture

- `lib/main.dart` bootstraps app startup, initializes Hive, and wires Riverpod.
- State lives in Riverpod notifiers under `lib/providers/`.
- Strategies, folders, and supporting data are stored in Hive boxes defined in `lib/const/hive_boxes.dart`.
- Hive adapters are generated from `lib/hive/hive_adapters.dart`.
- Core strategy workflow is coordinated by `lib/providers/strategy_provider.dart`.
- UI is composed from…
