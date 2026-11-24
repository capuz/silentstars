---
repo: "nefarius/HydraHook"
name: "HydraHook"
description: "DirectX API-hooking framework"
readmeQualityOk: true
url: "https://github.com/nefarius/HydraHook"
homepage: "https://discord.nefarius.at"
language: "C++"
languages: ["C++"]
languagePcts: [82]
topics: ["windows", "directx-9", "directx-10", "directx-11", "api-hooking", "dll-injection", "games", "overlay", "directx-12"]
stars: 345
forks: 58
openIssues: 1
closedIssues: 20
watchers: 18
contributors: 5
recentReleases: 1
createdAt: "2015-12-07T22:39:36Z"
lastCommitAt: "2026-11-24T02:00:03Z"
lastReleaseAt: "2026-11-23T15:45:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 41
maintainers: ["nefarius", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/47583783/35560f81-305b-44fa-9ea9-211ce085f519"
fundingLinks: ["PATREON:https://patreon.com/nefarius", "CUSTOM:https://paypal.me/NefariusMaximus"]
---

# <img src="https://raw.githubusercontent.com/nefarius/HydraHook/HEAD/assets/HydraHook_128x128.png" align="left" /> HydraHook

API-Hooking and rendering framework for DirectX-based games.

## About

`HydraHook` consists of a self-contained library (DLL) which exposes a minimalistic API for rendering custom content in foreign processes eliminating the need for in-depth knowledge about Direct3D and API-hooking. The most common use-case might be drawing custom overlays on top of your games. The framework takes care about pesky tasks like detecting the DirectX version the game was built for.

> **Caution**
>
> Use caution when injecting HydraHook into any game protected by anti-cheat software. API hooking and DLL injection are commonly detected by anti-cheat systems and may result in permanent bans from online services. Use only with games you own and in environments where such use is permitted.

> **Note**
>
> The authors of this project do not condone the use of HydraHook in cheating software. The project's motivation has been curiosity and education entirely.
