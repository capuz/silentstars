---
repo: "PlanetDogeCodes/EaglerXPaper"
name: "EaglerXPaper"
description: "A fork of EaglerXServer that allows native PaperMC compatability up to 26.x and adds some new, useful features"
readmeQualityOk: true
url: "https://github.com/PlanetDogeCodes/EaglerXPaper"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["eaglercraft", "eaglercraft-server", "eaglercraftlauncher", "eaglercraftx", "eagler", "eaglerxserver", "caddy", "minecraft", "nginx", "papermc"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-31T22:23:22Z"
lastCommitAt: "2026-08-12T01:19:42Z"
lastReleaseAt: "2026-08-09T18:17:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 58
maintainers: ["PlanetDogeCodes", "colbster937"]
openGraphImageUrl: "https://opengraph.githubassets.com/d90912c0ac79860e0c17399b19edfc8140a079488b379de4eaf1bd2b01738cf3/PlanetDogeCodes/EaglerXPaper"
---

# EaglerXPaper

> Paper 1.21.x port of [EaglerXServer](https://github.com/lax1dude/eaglerxserver) — run Eaglercraft (browser) clients on modern Paper servers.

EaglerXPaper is a fork of lax1dude's EaglerXServer that extends Bukkit/Spigot/Paper support from 1.12.2–1.17 up to **1.21.x** (Paper 26.x). It lets Eaglercraft browser clients connect to a modern Paper server alongside vanilla Java Edition players, using the same dual-stack architecture as the original plugin.

**This is largely the same project as EaglerXServer** — it only changes a few minor things to ensure 1.17+ compatibility, plus adds a couple of small features. All credit for the actual plugin goes to lax1dude.

Based on EaglerXServer **v1.1.1** (includes the LimboAPI compression fix, reduced default WebSocket frame size, empty ByteBuf handshake fix, and RateLimiterLocking ternary fix from upstream).

## Compatibility

| Platform | Version Range | Status |
|----------|--------------|--------|
| **Paper** | 1.12.2 – 1.21.11+ | ✅ Fully supported |
| **Spigot** | 1.12.2 – 1.21.x | ⚠️ Should work (uses NMS reflection fallback) |
| **Folia** | Any | ❌ Not supported |
| **BungeeCord** | 1.21+ | ✅ Use upstream EaglerXServer…
