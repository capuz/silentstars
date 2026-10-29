---
repo: "PommeMC/Client"
name: "Client"
description: "High-performance Minecraft: Rust Edition client written from scratch in Rust and Vulkan. Joins vanilla servers 1.20–26.3."
readmeQualityOk: true
url: "https://github.com/PommeMC/Client"
homepage: "https://discord.gg/ucBA55bHPR"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["game-engine", "gamedev", "minecraft", "minecraft-client", "minecraft-java", "rust", "tauri", "voxel", "vulkan"]
stars: 247
forks: 33
openIssues: 22
closedIssues: 58
watchers: 3
contributors: 14
recentReleases: 2
createdAt: "2026-03-08T20:34:31Z"
lastCommitAt: "2026-10-29T21:24:09Z"
lastReleaseAt: "2026-08-09T19:07:31Z"
status: "thriving"
tags: ["needs_contributors", "funded"]
healthScore: 94
undervaluedScore: 34
maintainers: ["Purdze", "dependabot[bot]", "ChronosWS"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1176258839/5983dbd5-3a67-4ba3-bd2c-305dcea97e3f"
fundingLinks: ["GITHUB:https://github.com/Purdze"]
---

---

Pomme contains no Mojang code, and joins vanilla servers from 1.20 through 26.3.

## Download

Get Pomme from the [latest release](https://github.com/PommeMC/Client/releases/latest):

- **Windows x64**: `pomme-client-windows-x64-setup.exe`
- **macOS (Apple Silicon)**: `pomme-client-macos-arm64.dmg`, then drag Pomme to Applications
- **Linux x64**: `pomme-client-linux-x64-gnu.AppImage`

It signs you in with your Microsoft account and keeps itself up to date. You
need to own Minecraft: Java Edition. The builds aren't signed yet, so the first
launch needs one extra step, described in the release notes.

Early Android and iOS builds build from source: see [BUILDING.md](https://github.com/PommeMC/Client/blob/HEAD/BUILDING.md).

## Why Pomme?

- **No JVM**: a native binary, so there's no Java to install or tune.
- **Vanilla behaviour**: physics, rendering, menus and networking are ported line
  by line from the decompiled game, and checked against it.
- **Tested against real servers**: scripted [in-game tests](https://github.com/PommeMC/Client/blob/HEAD/tests/ingame/README.md)
  run the client against a vanilla 26.2 server and screenshot the results.
- **Many versions, one…
