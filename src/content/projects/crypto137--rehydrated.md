---
repo: "Crypto137/Rehydrated"
name: "Rehydrated"
description: "ReXGlue based recompilation project for the vanilla version of Diablo 3"
readmeQualityOk: true
url: "https://github.com/Crypto137/Rehydrated"
language: "C++"
languages: ["C++", "C"]
languagePcts: [67, 31]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-09T13:07:21Z"
lastCommitAt: "2026-10-31T15:59:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["Crypto137"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7412e43656947f12987671d8d60979867aae5cbef0ecf95a43db886b31c0c62/Crypto137/Rehydrated"
---

# Rehydrated

Rehydrated is a ReXGlue based recompilation project for the vanilla version of Diablo 3 (C1.0.0.17339). This targets the vanilla version specifically, and not later Ultimate Evil Edition releases that include the Reaper of Souls expansion.

This project is intended for local use only. You also need a legally acquired copy of the game to run it.

Currently in early experimental state: the game runs and is playable as a basic recomp. Right now the main development focus is a proxy mode to allow PC clients to connect to the Xbox 360 server. The proxy mode works with game version 1.0.8.16603 and requires [Rehydrated.Bnet](https://github.com/Crypto137/Rehydrated.Bnet) to route the PC client to a local server.

## Building

This is still at the proof-of-concept stage, so expect some tinkering to get it to run. Requires ReXGlue 0.10.0 and all of its dependencies.

- Put ReXGlue in `Rehydrated/thirdparty/rexglue-sdk`.

- Put `Default.xex` and the `CPKs` folder in `Rehydrated/assets`. These need to be extracted from a vanilla US disc image of Diablo 3 for Xbox 360 (MD5 `3360CCDA2970F81AD75DE8EC02D2AE1E`).

- Open the folder in VS 2022 and build (or use your other preferred…
