---
repo: "PianoEthan/Orbit"
name: "Orbit"
description: "Orbit : Optimized Reincarnation of BiliTerminal"
originalDescription: "Orbit : Optimized Reincarnation of BiliTerminal"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/PianoEthan/Orbit"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [85]
stars: 27
forks: 6
openIssues: 5
closedIssues: 10
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-06-27T13:41:31Z"
lastCommitAt: "2026-11-15T11:23:59Z"
lastReleaseAt: "2026-07-08T11:25:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 40
maintainers: ["PianoEthan", "youshen2", "HaichuanWang1"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c84b9612d4f8210b326ff589badb6fa62dc84fc33d134a55b10f678e9efa11d/PianoEthan/Orbit"
---

> [!NOTE]
> **Multi-module architecture and multi-platform adaptation**
>
> This project has been refactored into a "unified core + multi-platform UI" architecture:
> - `:core`: a cross-platform business core that carries low-level interface capabilities such as account credentials, WBI signing, user center data, feeds, search, and audio/video parsing, with no platform UI dependencies;
> - `:wear`: a client UI and haptic extension designed specifically for Wear OS watches, using Wear Material 3;
> - `:vision`: a client adapted for phones, tablets, and large TV screens (Orbit Vision), using standard Material 3 Expressive design and supporting both D-pad remote control and nine-key input.

A Wear OS rewrite of BiliTerminal.

## Introduction

Orbit is a third-party Bilibili client that runs on Wear OS smartwatches. It draws on some of BiliTerminal's API call patterns and UI design.

It is built with Jetpack Compose + Wear Material 3, and the network layer has been refactored to Retrofit + OkHttp, making it more modern than the original project.

Most basic features are already implemented, such as watching videos, browsing danmaku, posting comments, viewing feeds, watching live…
