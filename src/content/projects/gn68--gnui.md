---
repo: "GN68/GNUI"
name: "GNUI"
description: "a general purpose UI Library for the Minecraft Figura mod & LÖVE 2D"
readmeQualityOk: true
url: "https://github.com/GN68/GNUI"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2023-12-10T18:50:07Z"
lastCommitAt: "2026-11-03T11:14:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 52
undervaluedScore: 61
maintainers: ["GN68", "JoeAndreRoja"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aa2a681c8a1feda25855a8848c270c106111e960aea64845a18b2ef4247b972/GN68/GNUI"
---

# GNUI

> [!CAUTION]
> There are absolutely no instructions yet on how to properly set this up. this message will disappear once there is, meaning its ready for public testing.

**GNUI** is a modular, framework-agnostic UI library built for **LÖVE** and **Figura**.
It is designed to separate layout logic, styling, and rendering into clean, interchangeable layers.

> [!NOTE]
> GNUI is a personal hobby project of mine! Development is slow and happens in my free time.  
> and no, I dont use generative AI on my projects, and I have not and will not give permission to anyone to use my projects as training data

---

## Philosophy

GNUI is built around one core idea:  
Separate layout, style, and rendering.

This allows for

- Multiple rendering backends
- Framework-specific integrations
- Reusable layout + styling logic
- Cleaner internal architecture!!

GNUI is split into **three main module types**:

- **GNUI-Core**
- **GNUI-Shared**
- **GNUI-Renderer**

Each module has a clear responsibility.

# Architecture Overview

```c
GNUI-Core  <---->  GNUI-Shared  <---->  GNUI-Renderer
       |                 |                  |
Layout + Input   Styling + Theme     Framework Rendering
```…
