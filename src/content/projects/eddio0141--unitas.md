---
repo: "Eddio0141/UniTAS"
name: "UniTAS"
description: "Tool that lets you TAS unity games"
readmeQualityOk: true
url: "https://github.com/Eddio0141/UniTAS"
language: "C#"
languages: ["C#"]
languagePcts: [82]
topics: ["tool-assisted-speedrun", "unity", "bepinex", "csharp", "tas"]
stars: 40
forks: 6
openIssues: 93
closedIssues: 143
watchers: 2
contributors: 4
recentReleases: 2
createdAt: "2022-09-12T02:29:24Z"
lastCommitAt: "2026-07-04T22:18:47Z"
lastReleaseAt: "2026-06-13T19:09:05Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 56
maintainers: ["Eddio0141", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/911f6a1d0cb6dcf77c82aedaaf3f70b7d7c934b0f60b2025742db19398ab5f8d/Eddio0141/UniTAS"
fundingLinks: ["KO_FI:https://ko-fi.com/yuu0141"]
discussionCount: 3
---

# UniTAS

A tool that lets you TAS unity games

- The tool doesn't bypass anti cheat or anything, USE AT YOUR OWN RISK!
- The tool is early in development, TASes made in earlier versions may not work in later versions
- This is a [BepInEx 5] mod

# TASing in UniTAS

Currently, you write a script in lua to control the game rather than recording inputs in game

This is planned to change to a more traditional emulator-like workflow, with frame advancing support later on

To get the hang of it, check the tutorial [here](https://github.com/Eddio0141/UniTAS/wiki/TAS-Movie-Script-Tutorial) and
if stuck on anything, the [wiki](https://github.com/Eddio0141/UniTAS/wiki) should help you out, otherwise you can ask on
discord or GitHub discussions

# What games work

- Currently, anything that [BepInEx 5] supports, ranging from unity 3 to latest, and games that use Mono and not IL2CPP
- Check [compatibility-list](docs/compatibility-list.md) for tested games
- Any games using [rewired input system](https://guavaman.com/projects/rewired/) has limited support as of now, games
  using this may not work correctly

# How to install

## Thunderstore

I have packaged UniTAS for some games on…
