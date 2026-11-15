---
repo: "slrmoon/j2me-funkey-rgnano"
name: "j2me-funkey-rgnano"
description: "phoneME-based J2ME runtime for FunKey S / RG Nano"
readmeQualityOk: true
url: "https://github.com/slrmoon/j2me-funkey-rgnano"
language: "C"
languages: ["C", "Java"]
languagePcts: [42, 36]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-14T13:38:22Z"
lastCommitAt: "2026-11-15T11:20:49Z"
lastReleaseAt: "2026-06-02T23:44:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 45
maintainers: ["claude", "slrmoon"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb46518e62036f04dbe6fad668ee8a0bf750a02aca4122bcf853c5b60fe9fddb/slrmoon/j2me-funkey-rgnano"
---

# phoneME J2ME for FunKey S / RG Nano

> If a specific game doesn't work, reach out on Telegram: [@slrmo0n](https://t.me/slrmo0n)

A Java ME runtime for the **FunKey S** and **Anbernic RG Nano** handhelds:
phone games (MIDP 2.0 / CLDC 1.1) and Japanese i-mode games (i-appli,
NTT DoCoMo DoJa), packed as one `pm.opk` with a game browser.

It is based on the phoneME VM from
<https://github.com/j2me-preservation/phoneME-GP2X-SDL>, with a new screen
scaler, sound engine, 3D renderer and DoJa runtime written for this device.
The same runtime also builds for desktop Linux, Windows and the browser
(see [Other platforms](#other-platforms)), mostly to test games and to play
them on a PC.

## Screenshots

### Launcher

### Games

### i-mode games

Rockman The Puzzle Battle, THE Battle Cats (にゃんこ大戦争), Bomberman '08,
Bio Miracle Bokutte Upa, Battle City, Flame Firefighter, Cafe Far Niente,
CR Evangelion 4 (pachinko), Tetra. See [i-mode games (i-appli)](#i-mode-games-i-appli).

## Installation (FunKey S / RG Nano)

1. Download `pm.opk` from the [latest release](https://github.com/slrmoon/j2me-funkey-rgnano/releases/latest)
2. Place it in the `emulators` folder on your FunKey/RG Nano SD card
3.…
