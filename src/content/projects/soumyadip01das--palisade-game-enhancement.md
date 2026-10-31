---
repo: "Soumyadip01Das/palisade-game-enhancement"
name: "palisade-game-enhancement"
description: "palisade: Multi-game enhancement for ARK, Conan, Palworld, Minecraft, Valheim and more"
readmeQualityOk: true
url: "https://github.com/Soumyadip01Das/palisade-game-enhancement"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["7-days-to-die", "ark-survival-ascended", "conan-exiles", "dedicated-server", "docker", "enshrouded", "game-server", "icarus", "minecraft", "nestjs"]
stars: 58
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-24T10:08:44Z"
lastCommitAt: "2026-10-31T19:01:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 30
maintainers: ["github-actions[bot]", "Soumyadip01Das"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e2878f053b2803d56dc859c8ff6f6b74b214d4ae7d0c1fffb52cede8da1547b/Soumyadip01Das/palisade-game-enhancement"
---

# Palisade — Multi-Game Server Enhancer for Windows 10/11

---

Palisade is a self-hosted, Docker-based control plane for game dedicated servers, built Unraid-first but ready to run on any Linux box with Docker. One lean manager container spawns and supervises a container per game server, driving every setting through schema-driven forms and handling mods, backups, schedules, player administration, and even your router's port-forwards. It ships first-class support for ARK: Survival Ascended and Evolved, Conan Exiles, Palworld, Minecraft Java and Bedrock, Icarus, Valheim, 7 Days to Die, Enshrouded, Project Zomboid, V Rising, and more. The manager stays a control plane only — no game runtime inside it — so each server runs on a proven community image while Palisade injects config, watches logs, and speaks RCON, telnet, and query protocols.

## Features

- **One manager, one container per game.** Palisade runs lean as a control plane and spawns a dedicated container for every server you add — create, install, start, done. Per-game readiness detection means you're not guessing when the server is actually joinable.

- **Crash watchdog + RAM guard.** A crashed server tells you *why* it…
