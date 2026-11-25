---
repo: "mingminghh611/UL10nForge"
name: "UL10nForge"
description: "Unity game localization workshop"
originalDescription: "unity游戏本地化工坊"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mingminghh611/UL10nForge"
language: "Python"
languages: ["Python"]
languagePcts: [72]
stars: 8
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-08-03T05:57:52Z"
lastCommitAt: "2026-11-25T13:21:59Z"
lastReleaseAt: "2026-09-11T05:23:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 20
maintainers: ["mingminghh611"]
openGraphImageUrl: "https://opengraph.githubassets.com/f63d930dc9ea517248553257415e558907b7832f7a0cb3e7a34062a149df680b/mingminghh611/UL10nForge"
---

# UL10nForge · Unity Game Localization Tool

**Localize your Unity game with mature hooks and AI translation, without modifying any original game files**

Static UI pre-translated · Dialogue translated live as you play · Press `Alt+L` in-game to edit translations on the spot · Supports local offline and online APIs · One-click packaging of offline patches for sharing

---

## How It Works: Why Is It Safe?

Traditional Unity localization usually requires unpacking, rewriting game asset files, and repacking them. This is not only tedious, but also prone to black screens, font garbling, and corrupted saves, and everything becomes invalid after a game update.

**UL10nForge uses a "display-layer hook" approach that never touches the original game files**, directly integrating and automatically configuring the two most mature open-source components in the Unity community:

- **Plugin loader**: `BepInEx 5 / 6` (automatically detects Mono / IL2CPP, 32-bit / 64-bit, and Unity version; IL2CPP 64-bit can also switch to `MelonLoader` with one click)
- **Text interception and replacement engine**: `XUnity.AutoTranslator (XUAT)`
