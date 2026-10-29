---
repo: "markwpearce/brighterscript-game-engine"
name: "brighterscript-game-engine"
description: "An object oriented game engine for the Roku"
readmeQualityOk: true
url: "https://github.com/markwpearce/brighterscript-game-engine"
homepage: "https://markwpearce.github.io/brighterscript-game-engine/"
language: "BrighterScript"
languages: ["BrighterScript"]
languagePcts: [98]
topics: ["roku", "game-development", "game-engine"]
stars: 11
forks: 7
openIssues: 20
closedIssues: 153
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2020-10-20T13:27:41Z"
lastCommitAt: "2026-10-29T14:07:11Z"
lastReleaseAt: "2026-10-08T13:57:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 89
maintainers: ["markwpearce"]
openGraphImageUrl: "https://opengraph.githubassets.com/dcb4e6545c0cb5a87e9bec98541470c28a610c6314959a6f4c750f20c920f814/markwpearce/brighterscript-game-engine"
---

# BrighterScript Game Engine

An object-oriented game engine **and 2D/3D drawing library** for Roku, written in [BrighterScript](https://github.com/rokucommunity/brighterscript).

Build a full game with entities, scenes, collisions, input, and UI - or just pull in the renderer to draw sprites, shapes, billboards, and wireframe/solid 3D models on top of your own Roku app. Same engine, use as much or as little of it as you need.

## Why BrighterScript Game Engine?

- **Object-oriented, like the engines you already know.** `GameEntity`, `GameScene`, and lifecycle hooks (`onCreate`, `onUpdate`, `onCollision`, `onDrawBegin`/`onDrawEnd`, ...) give you the same shape as Phaser, HaxeFlixel, GameMaker, or Unity - minus the visual editor.
- **A real 2D/3D renderer, not just sprite blitting.** Draw images, sprites, animations, shapes, text, and billboards, or render actual 3D models (loaded from `.stl`) with wireframe, solid, and shaded draw modes - all built on Roku's `roCompositor`/`Draw2D`, so it runs on real hardware.
- **Built-in collisions, input, UI, and debug tooling.** Circle/rectangle colliders, a retained-mode UI widget tree, and debug overlays (FPS, colliders, memory, GC stats)…
