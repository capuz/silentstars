---
repo: "BMingSY/isaac-lan"
name: "isaac-lan"
description: "A LAN co-op extension for The Binding of Isaac: Repentance+ supporting 2–4 players, with split-room exploration, mod loading, and reconnection after disconnects."
originalDescription: "《以撒的结合：忏悔＋》2–4 人局域网联机扩展，支持分房探索、Mod 加载与断线重连。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/BMingSY/isaac-lan"
language: "Lua"
languages: ["Lua", "C++", "Python"]
languagePcts: [50, 29, 20]
topics: ["co-op", "lan", "mod", "multiplayer", "the-binding-of-isaac", "windows", "repentance-plus"]
stars: 19
forks: 0
openIssues: 7
closedIssues: 39
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-10-07T18:18:38Z"
lastCommitAt: "2026-10-25T09:01:42Z"
lastReleaseAt: "2026-10-24T03:55:31Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 47
maintainers: ["BMingSY"]
openGraphImageUrl: "https://opengraph.githubassets.com/47023246a8d8df83faa3d89ba808216371e3f3ec8372fefaa4e3006e565dfc3e/BMingSY/isaac-lan"
discussionCount: 1
---

# Isaac LAN

LAN co-op extension for The Binding of Isaac: Repentance+, supporting 2–4 players, for the Windows version **v1.9.7.17.J460**.

## Features

- Shared floors: explore and fight in split rooms, and join teammates' rooms at any time to regroup.
- Allows loading other mods, while keeping the original multiplayer UI and the official online entry point.
- The minimap shows player positions, supports ping display, and reconnects after disconnects.

## Installation

1. Extract the full installation package and run `Install.cmd`.
2. Keep the game closed, then select `isaac-ng.exe` in the game directory.
3. Launch the game normally from Steam, select a save slot, and go to **Online → LAN Co-op**.

All players must use the same game version and the same LAN co-op extension.

### Linux／Steam Deck (Proton)

Requires the Windows version J460 and Proton 11.0-2 or later.

Set `ISAAC_GAME_DIRECTORY` to the game's install location, then run:

```sh
python3 install.py --game-directory "$ISAAC_GAME_DIRECTORY"
```

Set the Steam launch option to:

```text
WINEDLLOVERRIDES="winmm=n,b" %command%
```

When upgrading, run the install command again from the new package. To uninstall, use the…
