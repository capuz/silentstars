---
repo: "akfaiz/carryover"
name: "carryover"
description: " Game launcher that syncs your saves across PCs and Steam Deck using your own cloud storage. Go + Fyne + rclone."
readmeQualityOk: true
url: "https://github.com/akfaiz/carryover"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["cloud-sync", "fyne", "game-launcher", "game-saves", "golang", "rclone", "save-manager", "save-sync", "steam-deck"]
stars: 16
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-11-10T07:01:53Z"
lastCommitAt: "2026-11-15T08:26:20Z"
lastReleaseAt: "2026-11-14T23:18:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["akfaiz"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1452316888/63a16552-a799-4ec5-8f25-f9af960bef5a"
---

A game launcher for Windows and Linux / Steam Deck that keeps your save games in sync through your own cloud
storage. Carryover pulls the latest saves before you play and pushes them when you quit, from its own launcher or
from Steam, including Game Mode.

Cloud storage: Google Drive, Dropbox, OneDrive, WebDAV (Nextcloud, ownCloud, NAS), SFTP and SMB.
[rclone](https://github.com/rclone/rclone) is built in, so there is nothing else to install.

## Screenshots

## Features

- **Per-device save paths** — one game, one cloud copy; each device maps it to its own folder
  (`{appdata}/GameA` on Windows, `{proton:shortcut}/AppData/Roaming/GameA` on a Steam Deck).
- **Save locations suggested** — known save folders for ~21,000 games, translated for each device, including
  Proton, Heroic, Lutris and Bottles prefixes on Linux.
- **Play from the launcher or from Steam** — "Add to Steam" creates a shortcut that syncs around every session,
  even in Game Mode, with prompts that work on a controller.
- **Controller support** — added to Steam itself, the whole app works with a gamepad in Game Mode: the D-pad
  moves between games and buttons, A presses, B goes back, and text fields open Steam's…
