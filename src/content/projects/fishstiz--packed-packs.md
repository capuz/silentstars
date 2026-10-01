---
repo: "fishstiz/packed_packs"
name: "packed_packs"
description: "Minecraft mod to easily organize data and resource packs into profiles"
readmeQualityOk: true
url: "https://github.com/fishstiz/packed_packs"
homepage: "https://modrinth.com/mod/packed-packs"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 7
openIssues: 9
closedIssues: 55
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-29T21:08:30Z"
lastCommitAt: "2026-10-01T10:24:09Z"
lastReleaseAt: "2025-05-14T11:12:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 97
maintainers: ["fishstiz", "iceban"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c31c17d30e85ccd7aff73d6da05bfcc184551f2ba2c166ebbaf501d058c20da/fishstiz/packed_packs"
---

# 📦 Packed Packs

Pack resource and data packs into profiles with multiple selection, drag and drop, and extended mouse and keyboard
controls.

## ✨ Features

- Save and load custom profiles.
- Select multiple packs at once.
- Drag and drop selection between columns.
- Context Menus.
- [Additional Folders](#additional-folders).
- [Folder Packs](#folder-packs).
- Search by title.
- Filter out incompatible packs.
- Sort alphabetically or by last updated.
- [Mouse](#mouse-controls) and [keyboard](#keyboard-controls) controls.
- [Configuration](#configuration).
- [Developer Mode](#developer-mode).
- [Java API](#java-api).
- Explicit [compatibility](#compatibility) with certain mods.
- History (undo and redo).

<details>
<summary><b>📂 Additional Folders</b></summary>

- Add extra folders for pack discovery.
- Configure in `config/packed_packs/config.json` by adding paths under the `additionalFolders` array inside
  `resourcepacks` or
  `datapacks`.
- If the array doesn’t exist, create it manually or open and close the Packed Packs screen to update the config.
- Paths can be absolute or relative to the game directory.
- Correctly added folders appear as a context menu option under…
