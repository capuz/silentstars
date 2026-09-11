---
repo: "RaphaelIT7/gmod-holylib"
name: "gmod-holylib"
description: "A library that contains many functions and some optimizations and bug fixes for gmod. Discord (https://discord.gg/J99RqftEtn)"
readmeQualityOk: true
url: "https://github.com/RaphaelIT7/gmod-holylib"
language: "Rich Text Format"
languages: ["Rich Text Format", "C++", "C"]
languagePcts: [42, 34, 21]
topics: ["garrysmod", "gmod", "gmod-plugin"]
stars: 166
forks: 37
openIssues: 19
closedIssues: 109
watchers: 10
contributors: 17
recentReleases: 0
createdAt: "2024-06-28T22:02:36Z"
lastCommitAt: "2026-09-11T08:14:51Z"
lastReleaseAt: "2025-04-29T20:40:25Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded", "community_hub"]
healthScore: 94
undervaluedScore: 43
maintainers: ["RaphaelIT7", "Avrena", "ShiroKSH"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8d876d66028c27d9182aca0d8690639893e9764a1d38aa14c3df56b03aff467/RaphaelIT7/gmod-holylib"
fundingLinks: ["GITHUB:https://github.com/RaphaelIT7"]
discussionCount: 23
---

# Holylib

A library that contains some functions and optimizations for gmod.<br>
If you need any function, make an issue for it, and I'll look into it.<br>
When HolyLib was installed correctly, the variable `_HOLYLIB` should be set to `true` in Lua. (NOTE: This was **added** in the upcoming `0.8` release)<br>

## Windows & Linux
Linux 32 is the main targeted platform, with Linux 64x being the second target.<br>
On Linux the focus lies on the dedicated servers, not Linux clients.<br>

On Windows things are different.
There the Windows **client** is targeted, not dedicated server builds.<br>
Windows does not have the main attention, though it still is supported.<br>
Does anyone even use windows srcds for actual servers?<br>

> [!NOTE]
> I'm not actively testing windows, so if I accidentally broke it, open a issue since I most likely didn't know about it.<br>

## How to Install (Linux 32x)
1. Download the `ghostinj.dll`, `holyliblinux.vdf` and `gmsv_holylib_linux.so` from the latest release.<br>
2. Put the `ghostinj.dll` into the main directory where `srcds_linux` is located.<br>
3. Put the `holylib_linux.vdf` into the `garrysmod/addons/` directory.<br>
4. Put the…
