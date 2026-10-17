---
repo: "rmeisler/sonicrpg"
name: "sonicrpg"
description: "Source for Sonic SatAM RPG (Love2D)"
readmeQualityOk: true
url: "https://github.com/rmeisler/sonicrpg"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 11
forks: 4
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2020-06-16T19:13:23Z"
lastCommitAt: "2026-10-17T07:59:01Z"
lastReleaseAt: "2026-09-11T09:51:50Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 59
maintainers: ["rmeisler"]
openGraphImageUrl: "https://opengraph.githubassets.com/853a746214abc38c1153c9b9aded9160d580dc3724bede0717dc6994453bf741/rmeisler/sonicrpg"
---

# Overview
Source for Sonic SatAM RPG, requires LÖVE v0.10.2

# Architecture
Custom framework built on Love2D's lua game engine, uses Tiled for level editing.

Primary concepts include:
- EventHandler:
  Base class for all things, allows you to add/remove dynamic event handling functions

- Scene:
  Manages logic on the scale of a game level/map
  
- SceneNode:
  An object within the scene that will be created/updated within the scope of that scene
  
- Action:
  A multi-frame behavior that can be composed together to declaratively describe behavior beyond the current moment
  
# Metadata Format
All game metadata (including playable characters, item definitions, map data, and saved games), are stored as lua scripts, which allow us to automatically inflate/deflate data and use lua script concepts like "idempotent file require" which allows us to efficiently dedupe data references by requiring lua data files in other lua data files.
