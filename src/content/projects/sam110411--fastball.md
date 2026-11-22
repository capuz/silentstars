---
repo: "sam110411/fastball"
name: "fastball"
description: "MLB The Show 26 Recompiled For PC"
readmeQualityOk: true
url: "https://github.com/sam110411/fastball"
language: "C"
languages: ["C"]
languagePcts: [85]
stars: 48
forks: 5
openIssues: 8
closedIssues: 10
watchers: 3
contributors: 5
recentReleases: 7
createdAt: "2026-11-15T04:09:30Z"
lastCommitAt: "2026-11-22T11:51:30Z"
lastReleaseAt: "2026-11-22T11:54:05Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 38
maintainers: ["sam110411", "987G", "elripalda"]
openGraphImageUrl: "https://opengraph.githubassets.com/923750c33c3c2a81c4d9a4671a01ec10b855c84cc9256e83bc14acaea8911863/sam110411/fastball"
discussionCount: 0
---

# Fastball: MLB The Show 26, native on Windows

Fastball is a native Windows port of MLB The Show 26 for Switch.

A static recompilation of **MLB The Show 26** (Nintendo Switch, version **1.0.20**; 1.0.15 also works) into a native Windows x86-64
program. The game's ARM64 code is translated to C ahead of time, compiled with clang, and linked against a small
host runtime that stands in for the Switch's operating system, GPU API and audio.

> **Fan project.** This project is not affiliated with, endorsed by, or connected to Sony Interactive Entertainment,
> San Diego Studio, MLB, or Nintendo. It contains no game code, game assets or keys. You must supply your own legally
> obtained copy of the game.

## Status

Playable offline. The game boots, the menus work, and Exhibition, Road to the Show and Franchise run at 60 fps on the
development machine (Ryzen 5 5600X, RTX 3060 Ti, Windows 11).

**Scope:** offline play only (exhibition, Road to the Show, Franchise, menus, local saves). Online play and Diamond
Dynasty are out of scope.
