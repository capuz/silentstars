---
repo: "MetaHookSv/MetaHookSv"
name: "MetaHookSv"
description: "MetaHook (https://github.com/nagist/metahook) porting for SvEngine (GoldSrc engine modified by Sven-Coop), as a client-side modding framework."
readmeQualityOk: true
url: "https://github.com/MetaHookSv/MetaHookSv"
language: "Python"
languages: ["Python", "CMake"]
languagePcts: [57, 39]
topics: ["reverse-engineering", "game", "modding", "goldsrc", "svencoop"]
stars: 260
forks: 48
openIssues: 31
closedIssues: 811
watchers: 12
contributors: 12
recentReleases: 0
createdAt: "2021-01-20T05:18:50Z"
lastCommitAt: "2026-10-25T09:00:25Z"
lastReleaseAt: "2022-09-10T09:53:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 99
undervaluedScore: 40
maintainers: ["hzqst"]
openGraphImageUrl: "https://opengraph.githubassets.com/4da9e6a6681620cd8696b4e40e7c49d5ea5f9c0f41c25b9f1b43c97e92d6f5e2/MetaHookSv/MetaHookSv"
discussionCount: 14
---

# MetaHookSv

This is a porting of [MetaHook](https://github.com/nagist/metahook) for SvEngine (GoldSrc engine modified by Sven Co-op Team), as a client-side modding framework,

Mainly to keep you a good game experience in Sven Co-op or any other GoldSrc based games.

Most of plugins are still compatible with vanilla GoldSrc engine. please check each plugin's doc for plugin compatibility.

[中文README](https://github.com/MetaHookSv/MetaHookSv/blob/HEAD/README.zh-CN.md)

### Compatibility (metahook loader only)

|        Engine               |      |
|        ----                 | ---- |
| GoldSrc_blob   (3248~4554)  | √    |
| GoldSrc_legacy (< 6153)     | √    |
| GoldSrc_new    (8684 ~)     | √    |
| SvEngine       (8832 ~)     | √    |
| GoldSrc_HL25   (>= 9884)    | √    |

## Download

[GitHub Release](https://github.com/MetaHookSv/MetaHookSv/releases)

Download `MetaHookSv-windows-x86.7z`. It contains both normal and blob launchers.

SteamScreenshots, BetterSpray and UtilHTTPClient_SteamAPI share `SteamAPIBridge.dll`
under `metahook/dlls`. Its source is the `PluginLibs/SteamAPIBridge` submodule.
Keep this DLL when deploying these consumers; retain the game's own…
