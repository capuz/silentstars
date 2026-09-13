---
repo: "cvet/fonline"
name: "fonline"
description: "FOnline Engine is a flexible cross-platform isometric game engine"
readmeQualityOk: true
url: "https://github.com/cvet/fonline"
homepage: "https://fonline.ru"
language: "C++"
languages: ["C++"]
languagePcts: [87]
topics: ["fonline", "fallout", "fallout-online", "engine", "game-engine", "isometric", "cross-platform", "mmorpg", "c-plus-plus", "fonline-engine"]
stars: 338
forks: 69
openIssues: 0
closedIssues: 0
watchers: 35
contributors: 12
recentReleases: 0
createdAt: "2018-10-30T19:34:24Z"
lastCommitAt: "2026-09-13T08:29:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 36
maintainers: ["cvet"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/155445149/05a04700-9d61-11ea-9883-2a46ef9186bd"
---

# FOnline Engine

**FOnline** is an open-source (MIT) C++20 engine for building online multiplayer RPGs in the classic isometric style of Fallout 1/2/Tactics and Arcanum. One codebase gives you the authoritative server, the game client, the map editor, the content pipeline, and packaging for desktop, mobile, and the browser — you bring the game: content, scripts, and rules live in your own repository that embeds the engine.

In continuous development since 2006, the engine powers community multiplayer RPGs; a current example is [Last Frontier](https://lastfrontier.ru/), a post-apocalyptic MMO built on it.

## Why FOnline?

- **Multiplayer first.** Not a single-player engine with networking bolted on: an authoritative server, replicated entity state, and client/server separation are the core design, all the way down to the entity model.
- **Complete vertical.** Server, client, mapper, editor, resource baker, script compiler, test runner, auto-updater — all built from the same sources by one CMake pipeline.
- **Engine/game split that stays clean.** The engine is a reusable submodule; your game owns content, scripts, configuration, branding, and release policy. Engine updates don't…
