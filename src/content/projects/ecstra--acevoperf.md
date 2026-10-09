---
repo: "ecstra/ACEvoPerf"
name: "ACEvoPerf"
description: "Fixes the VRAM crashes, missing icons and mushy textures in Assetto Corsa EVO."
readmeQualityOk: true
url: "https://github.com/ecstra/ACEvoPerf"
homepage: "https://www.overtake.gg/downloads/acevoperf.86467/"
language: "C++"
languages: ["C++"]
languagePcts: [88]
topics: ["assetto-corsa-evo", "cpp", "directstorage", "dll-proxy", "mod", "performance", "vram", "windows"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 4
createdAt: "2026-09-06T11:57:02Z"
lastCommitAt: "2026-10-09T10:50:21Z"
lastReleaseAt: "2026-10-08T17:16:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 60
maintainers: ["ecstra"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd454f1e34d8b07e42d81d368a14c2ed7b7447e3a60653cf81b568d12e0545c3/ecstra/ACEvoPerf"
---

<img
    width="760"
    alt="ACEvoPerf"
    src="assets/header.png" />

## Overview

A performance mod for Assetto Corsa EVO 0.9 and newer. You copy a few files into the game folder and that's it, no installer. The only game file it replaces is `dstorage.dll`.

Made on an RTX 3060 Laptop GPU with 6 GB. Players have also reported it working on RTX 2060, 3060 Ti, 3070 Ti, 3080, 4050 and 4060 cards, on a Radeon RX 6600, and on Linux through Proton.

## What it fixes

- Crashes at startup and on car or track changes
- Missing icons in the vehicle hub and menus
- Mushy road, tyre and ground textures
- Cards with more than 6 GB left with video memory unused (experimental)
- Your own car going blurry in races with AI
- Blurry trackside big screens
- Laggy menus
- Uneven frame pacing while driving
- Unnecessary texture streaming
- A memory leak growing with every track and menu you load

## What it adds

- NVIDIA Reflex
- Higher CPU and GPU priority
- A newer DirectStorage

What changed in each version is in the [changelog](https://github.com/ecstra/ACEvoPerf/blob/HEAD/CHANGELOG.md).

## Install

1. Close the game.
2. Download the zip from…
