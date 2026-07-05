---
repo: "Mezeporta/Erupe"
name: "Erupe"
description: "Open-source Monster Hunter Frontier Online server emulator in Go"
readmeQualityOk: true
url: "https://github.com/Mezeporta/Erupe"
homepage: "https://discord.gg/DnwcpXM488"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["monster-hunter", "monster-hunter-frontier", "server", "server-emulator", "postgresql", "golang", "capcom", "game-server", "go", "mhf"]
stars: 272
forks: 72
openIssues: 8
closedIssues: 57
watchers: 19
contributors: 22
recentReleases: 0
createdAt: "2022-03-24T02:24:33Z"
lastCommitAt: "2026-07-05T20:55:15Z"
lastReleaseAt: "2026-02-16T10:59:23Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 91
undervaluedScore: 31
maintainers: ["Houmgaor", "dependabot[bot]", "Brentdbr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/473428749/104d12ce-75cd-45e2-8465-904372224234"
---

# Erupe

Erupe is a community-maintained server emulator for Monster Hunter Frontier written in Go. It is a complete reverse-engineered solution to self-host a Monster Hunter Frontier server, using no code from Capcom.

## Quick Start

Pick one of two installation methods, then continue to [Quest & Scenario Files](#quest--scenario-files).

### Option A: Pre-compiled Binary

1. Download the latest release for your platform from [GitHub Releases](https://github.com/Mezeporta/Erupe/releases/latest):
   - `erupe-ce` for Linux
   - `erupe.exe` for Windows

2. Set up PostgreSQL and create a database:

   ```bash
   createdb -U postgres erupe
   ```

   Alternatively, when using pgAdmin4, right click the PostgreSQL version listed under "Servers" and click "Create", then name the database "erupe" and press Save.
   
   The server will automatically apply all schema migrations on first startup.

3. Copy and edit the config:

   ```bash
   cp config.example.json config.json
   # Edit config.json with your database credentials
   ```

   If you're using File Explorer or the likes, rename or create a copy of `config.example.json` titled `config.json` and fill it out with your database…
