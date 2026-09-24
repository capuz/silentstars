---
repo: "DIMINIRIMOTO/zapret-winws-ru"
name: "zapret-winws-ru"
description: "My personal version"
originalDescription: "Мой личный вариант"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/DIMINIRIMOTO/zapret-winws-ru"
homepage: "https://hyperion-cs.github.io/dpi-checkers/ru/tcp-16-20/"
language: "Batchfile"
languages: ["Batchfile"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-04-05T03:40:08Z"
lastCommitAt: "2026-09-24T08:41:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 80
maintainers: ["DIMINIRIMOTO"]
openGraphImageUrl: "https://opengraph.githubassets.com/f42baad736a444e8d751a65a6362de357e03c1089225da545e2571cf3126fe31/DIMINIRIMOTO/zapret-winws-ru"
---

# 🛡️ zapret-winws-ru

Utility for bypassing restrictions in Russia based on the original software [zapret-win-bundle](https://github.com/bol-van/zapret-win-bundle).

---

## 📂 File Overview

* **`preset_general*.bat`** — Quick launch, application installation to the system.
* **`zapret_manager.bat`** — Interactive manager for controlling all application features.
* **`zapret_fake_manager.bat`** — Tool for switching fake packet configurations (for Discord and online games).

---

## ⚙️ Game Filter Modes

* **`TCP/UDP`** — Full interception and operation on both protocols.
* **`TCP`** — Operation only with TCP traffic.
* **`UDP`** — Operation only with UDP traffic.

## 🗺️ IPset Filter Modes

* **`ENABLED`** — Filtering is applied strictly to addresses and domains from the application's built-in lists.
* **`DISABLED`** — Any preliminary address filtering is disabled.
* **`EMPTY`** — Experimental mode. Attempts to process all passing traffic 'on the fly' without lists.
* ⚠️ *Warning: may work unstably and break access to many websites or games. Use at your own risk!*

---

## 🚫 Known Conflicts and Dependencies

The program uses a system driver…
