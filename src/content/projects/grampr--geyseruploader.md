---
repo: "grampr/geyseruploader"
name: "geyseruploader"
description: "Automatically updates Geyser and Floodgate for you."
originalDescription: "Geysermcとfloodgateを自動アップデートしてくれます。"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/grampr/geyseruploader"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 0
closedIssues: 9
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2025-08-19T09:04:17Z"
lastCommitAt: "2026-11-20T12:19:45Z"
lastReleaseAt: "2026-10-28T13:12:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 55
maintainers: ["grampr", "Lehrules"]
openGraphImageUrl: "https://opengraph.githubassets.com/c10c0233b61ce16e16f9d99f518e68e360459e50a7e2fc2f15d3d9a9b63ed024/grampr/geyseruploader"
---

# GeyserUpdater

Auto-update plugin for GeyserMC / Floodgate / ViaVersion / ViaBackwards / ViaRewind (1.3.0). Supports Spigot (Paper, etc.), BungeeCord, and Velocity.

Features
- Fetches the latest stable versions of GeyserMC and Floodgate from Jenkins / the download API and overwrites the existing JARs in the plugins directory
- Automatically updates the stable version of ViaVersion / ViaBackwards / ViaRewind that matches the running environment, individually (optional)
- Fetches the latest version of MCXboxBroadcast (Modrinth) and places it in Geyser's extensions folder (optional)
- Automatic update checks
  - On server startup
  - At a specified interval (e.g., every 12 hours)
  - When a player with a specified permission logs in (can be turned ON/OFF)
- Manual command: /geyserupdate (permission: geyserupdater.admin)
- Configuration for language, messages, targets, interval, and restart command
- Restart countdown after an update, and remaining-seconds notifications sent to all online players
