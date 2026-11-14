---
repo: "haqweti/auto-play-anime-senku"
name: "auto-play-anime-senku"
description: "Script for the senku.one site: smart automatic episode transition, playlist, audio synchronization, and extended player functionality."
originalDescription: "Скрипт для сайта senku.one: умный автопереход серий, плейлист, синхронизация звука и расширенный функционал плеера."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/haqweti/auto-play-anime-senku"
homepage: "https://senku.one"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [50, 50]
topics: ["anime", "autoplay", "browser-extension", "playlist", "senku", "tampermonkey", "userscript", "video-player"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-11-11T13:08:24Z"
lastCommitAt: "2026-11-14T10:48:59Z"
lastReleaseAt: "2026-11-14T10:19:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 63
maintainers: ["haqweti", "Ra9ge"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1453993343/18de4d7f-227c-4d1a-9fd4-6c6a831cf4d6"
discussionCount: 1
---

**🇷🇺 Russian** | [🇬🇧 English](https://github.com/haqweti/auto-play-anime-senku/blob/HEAD/README.en.md)

  &nbsp;&nbsp;
  &nbsp;&nbsp;
  
  &nbsp;&nbsp;
  &nbsp;&nbsp;

  A script that extends the standard player's functionality: adds <b>automatic episode transition</b>, a <b>smart playlist</b>, and makes controls as comfortable as possible.

> [!IMPORTANT]
> To use the script, you need to install a manager extension: **Tampermonkey** (Chrome, Firefox, Edge) or **OrangeMonkey**. Without it, the script cannot run in the browser.

---

## Main features

| Module | Description |
| :--- | :--- |
| **Auto-transition** | When an episode ends, the script automatically finds and starts the next one. Player freezes are handled automatically. |
| **Playlist** | A slide-out panel for creating a queue from seasons or other titles. Supports loading posters and titles. |
| **Smart search** | The algorithm relies on links and episode numbers in the DOM tree, which allows it to find episodes even in titles with complex structures. |
| **Pause fix** | Protection against a site bug where the video reset to the beginning when pause was pressed. |
| **Stable audio** | The volume slider in the…
