---
repo: "ihsoft/TimberbornMods"
name: "TimberbornMods"
description: "Mods for Timberborn game"
readmeQualityOk: true
url: "https://github.com/ihsoft/TimberbornMods"
language: "C#"
languages: ["C#"]
languagePcts: [89]
stars: 11
forks: 5
openIssues: 5
closedIssues: 114
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-06-24T09:11:03Z"
lastCommitAt: "2026-08-03T06:42:54Z"
lastReleaseAt: "2023-08-28T05:21:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 76
maintainers: ["ihsoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b41033aed9f27b9735cc586cbef0d1daae61a5256fe685794fc347c200853f1/ihsoft/TimberbornMods"
---

# TimberbornMods

This repository contains the C# projects and shared Unity project used to build Timberborn mods.

## Setup with an AI agent

Point your agent at this repository and ask:

> Bootstrap this TimberbornMods checkout. Follow `AGENTS.md` and
> `docs/timberborn-new-repository-bootstrap-for-ai-agents.md`, complete everything you can, and tell me which steps
> require my input.

## Manual setup

1. Install the .NET SDK selected by `global.json`. Ensure that your IDE uses a compatible MSBuild toolset.
2. Create the local `_GAME!`, `_WORKSHOP!`, `_MODS!`, and `_LOGS!` links, plus `Dependencies/GameRoot` and
   `Dependencies/Workshop`. Their targets are described in the
   [bootstrap guide](https://github.com/ihsoft/TimberbornMods/blob/HEAD/docs/timberborn-new-repository-bootstrap-for-ai-agents.md) and
   [dependency setup](https://github.com/ihsoft/TimberbornMods/blob/HEAD/Dependencies/README.md).
3. Install the Unity Editor version from `ModsUnityProject/ProjectSettings/ProjectVersion.txt` with Windows and Mac
   Build Support. Sign in to Unity Hub and make sure the Editor license is active.
4. Follow the official [Unity…
