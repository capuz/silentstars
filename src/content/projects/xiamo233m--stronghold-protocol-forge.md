---
repo: "XiaMo233M/Stronghold-Protocol-Forge"
name: "Stronghold-Protocol-Forge"
description: "A Stronghold Protocol editor based on Stronghold-Protocol"
originalDescription: "一个基于Stronghold-Protocol的卫戍协议编辑器"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/XiaMo233M/Stronghold-Protocol-Forge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
stars: 8
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-06T04:01:07Z"
lastCommitAt: "2026-10-13T10:57:06Z"
lastReleaseAt: "2026-10-06T21:26:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 46
maintainers: ["XiaMo233M"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc5392e1b2243625413e2319adc68e5fc0b8e4e0ecb341caa926b80a8b6576df/XiaMo233M/Stronghold-Protocol-Forge"
---

# Stronghold-Protocol-Forge · Stronghold Protocol Workshop Editor

An **unofficial fan recreation** of the Arknights seasonal auto-chess tower defense mode “Stronghold Protocol: Alliance”: playable instantly in the browser, solo or 1–4 player co-op.

This repository consists of three parts:

- **Forge Workshop Editor** (`editor/`, the main focus of this repository): a graphical tool that lives **outside the game** and is used to create its content (operators, maps, monsters, enemy waves, equipment, alliances, behavior-layer kits, voice lines), then export finished packs as a `.zip` to share with others. It has nine pages, is bilingual in Chinese and English, and **does not exist unless you run it**.
- **Mod layer** (`shared/workshop.js` etc.): the part of the engine that **packs can reach**. It is a **closed set** of 35 top-level keys, 9 UI slots, 6 server-side module purposes, 4 rewritable UI components, pack channels, calibration axes, **a 4-slot behavior switch**, asset sources, dynamic routing, announcement surfaces, trait-granted alliances, target hosts (`target`), and dependency and mutual-exclusion resolution between packs. **Packs can only consume channels that already…
