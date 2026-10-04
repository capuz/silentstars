---
repo: "atframework/atsf4g-co"
name: "atsf4g-co"
description: "service framework for game server using libatbus, libatapp, libcopp and etc."
readmeQualityOk: true
url: "https://github.com/atframework/atsf4g-co"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 82
forks: 27
openIssues: 1
closedIssues: 315
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2016-03-14T03:12:08Z"
lastCommitAt: "2026-10-04T10:01:42Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 51
maintainers: ["owent", "yousongyang", "MinunFl"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ecf4e7a108fd85dd115a822080685b9af764dcb14fcaf0e47607f3fa0c6cd8d/atframework/atsf4g-co"
---

# atsf4g-co

[English](https://github.com/atframework/atsf4g-co/blob/HEAD/README.md) | [简体中文](https://github.com/atframework/atsf4g-co/blob/HEAD/README.zh-CN.md)

**atsf4g-co** (AT Service Framework for Game - Coroutine) is a game server framework built on libatbus,
libatapp, libcopp, and other atframework libraries. Project code requires **C++14** and supports
**Windows, Linux, and macOS**.

It supports **C++20 standard coroutines** and **traditional stackful coroutines**, switched with
`PROJECT_SERVER_FRAME_USE_STD_COROUTINE`. Business code using framework coroutine APIs needs no changes.
The C++20 backend needs a standard coroutine toolchain; check third-party version/toolchain requirements separately.

Infrastructure includes atgateway, atproxy, service discovery, Redis access, router caches, and OpenTelemetry.
Reusable components and services include **DTMQ, distributed transactions, leaderboards, friends, matchmaking,
and teams**. **Orbit is a Dedicated Server (DS) management solution for Unreal Engine (UE).**

## Quick Start

Full documentation: [English site](https://atframe.work/en/) · [local…
