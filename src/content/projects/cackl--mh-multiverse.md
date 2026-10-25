---
repo: "Cackl/MH-Multiverse"
name: "MH-Multiverse"
description: "MH Multiverse provides a single interface for launching Marvel Heroes Omega, managing a local MHServerEmu instance, and editing the server's data files & config. Built with Tauri 2, Svelte 5 and Rust"
readmeQualityOk: true
url: "https://github.com/Cackl/MH-Multiverse"
language: "Svelte"
languages: ["Svelte", "Rust"]
languagePcts: [57, 30]
topics: ["launcher", "marvel-heroes", "mmo", "mmorpg"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-04-06T23:02:53Z"
lastCommitAt: "2026-10-25T08:39:26Z"
lastReleaseAt: "2026-10-03T05:23:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 57
maintainers: ["Cackl"]
openGraphImageUrl: "https://opengraph.githubassets.com/37fbe33616536147a418bb269bd1b350189ddd7e0f05486e1e96aa01bd9b5217/Cackl/MH-Multiverse"
---

# MH Multiverse

A desktop launcher and server management tool for [MHServerEmu](https://github.com/Crypto137/MHServerEmu), the Marvel Heroes Omega server emulator. Built with Tauri 2, Svelte 5, and Rust.

---

## Overview

MH Multiverse provides a single interface for launching Marvel Heroes Omega, managing a local MHServerEmu instance, and editing the server's data files. It handles process lifecycle, profile management, config editing, live tuning, data patching, MTX store catalog editing, server updates, and backups.

The app is currently Windows-only and communicates with the server via stdin/stdout piping and direct file I/O against MHServerEmu's data directories.

---

## Features

### Game Launching
- Multi-server profile management with encrypted, OS-keychain-backed credentials and auto-login. Local profiles support both patched and unpatched clients
- Configurable launch flags (startup movies, motion comics, sound, resolution, robocopy, no-Steam, and more)
- Simplified flow for taking an `!account download` JSON backup and adding to a local MHServerEmu Account database

### Local Server Management
- Start/stop MHServerEmu with live log streaming and an interactive,…
