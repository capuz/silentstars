---
repo: "prop11/PZO-Launcher"
name: "PZO-Launcher"
description: "Project Zomboid Optimised Launcher"
readmeQualityOk: true
url: "https://github.com/prop11/PZO-Launcher"
language: "Java"
languages: ["Java"]
languagePcts: [84]
stars: 47
forks: 1
openIssues: 9
closedIssues: 47
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-27T23:59:18Z"
lastCommitAt: "2026-11-11T19:46:35Z"
lastReleaseAt: "2026-08-30T16:39:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 41
maintainers: ["prop11"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dede5be9a538abded9ce3be5eafaec0d5cda5f4302f5ce8814a95857f4e4fc1/prop11/PZO-Launcher"
---

# Multi-Threading for Project Zomboid is Here!

### Project Zomboid Optimizer (PZO)
**Parallel entity culling | AVX2 SIMD math | Zero-stutter chunk streaming**

---

A lightweight JVM runtime agent (`-javaagent`) and native AVX2 SIMD acceleration engine for **Project Zomboid (Build 42 & Build 41)** across **Windows, Linux / Steam Deck, macOS, and Dedicated Servers**.

Instead of replacing game classes on disk or relying on decompiled class overrides, PZO hooks the JVM at startup and patches game bytecode in memory to fix engine bottlenecks in rendering, chunk loading and horde updates. `projectzomboid.jar` and the game's own class files are never modified; the installer adds `PZOptimEngine.jar` and the native library to the game folder and updates the launcher JSON (`ProjectZomboid64.json`) so the game loads them.

| | |
|---|---|
| **Steam Workshop** | [Project Zomboid Optimiser (Item 3787481250)](https://steamcommunity.com/sharedfiles/filedetails/?id=3787481250) |
| **Wiki & Guides** | [Official PZO Wiki](https://github.com/prop11/PZO-Launcher/wiki) • [Manual Linux](https://github.com/prop11/PZO-Launcher/wiki/Manual-Linux-Installation) • [Zomdroid…
