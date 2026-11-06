---
repo: "retrocodes12/nebula-player"
name: "nebula-player"
description: "Nebula — a streaming player for the TV, the desktop and the phone. Shared web/webOS player, site and sync service; Android and Windows live in sibling repos"
readmeQualityOk: true
url: "https://github.com/retrocodes12/nebula-player"
homepage: "https://play.rifflehq.in"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [77, 22]
topics: ["player", "streaming", "dash", "lg-tv", "shaka-player", "webos"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-15T15:37:45Z"
lastCommitAt: "2026-11-06T11:03:58Z"
lastReleaseAt: "2026-07-17T12:51:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 52
maintainers: ["retrocodes12"]
openGraphImageUrl: "https://opengraph.githubassets.com/a01e7ed727c414826b2c4fbb4eec287396e06a3d6e92cb196e045b0ab0e4ecee/retrocodes12/nebula-player"
---

# Nebula

A streaming player for the TV, the desktop and the phone. Add your add-on, browse its
catalogs, press play. Encrypted streams are decrypted on the device itself — no proxy server
in the middle.

**Site and downloads:** https://play.rifflehq.in · **Web player:** https://play.rifflehq.in/player/

| Surface | Repo | How it ships |
|---|---|---|
| Web player + LG webOS TV app | this repo | `docs/player/` (static) · webOS `.ipk` via the Homebrew Channel feed `docs/apps.json` |
| Windows + Linux | [nebula-desktop](https://github.com/retrocodes12/nebula-desktop) | Electron; `Nebula-Setup.exe` / `Nebula-Portable.exe` · `Nebula.AppImage` / `Nebula.deb` |
| Android phone + TV | [nebula-android](https://github.com/retrocodes12/nebula-android) | Kotlin / Compose / Media3; `Nebula.apk` |

The web, webOS and desktop builds run one shared player (`webos-player/index.html`); Android is
a native app with the same screens.

## What it does

- **Add-ons.** Point it at an add-on and its catalogs, title pages, streams and subtitles show up.
  Several add-ons combine into one row of streams, labelled by resolution, size and language.
- **Playback.** Adaptive and encrypted streams play…
