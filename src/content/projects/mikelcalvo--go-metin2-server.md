---
repo: "MikelCalvo/go-metin2-server"
name: "go-metin2-server"
description: "[WIP] Clean-room Metin2 server emulator in Go, targeting TMP4-era client compatibility."
readmeQualityOk: true
url: "https://github.com/MikelCalvo/go-metin2-server"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "golang", "metin2", "metin2-server"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-17T08:53:12Z"
lastCommitAt: "2026-08-28T13:19:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["MikelCalvo"]
openGraphImageUrl: "https://opengraph.githubassets.com/6043284d0067f58dc19ce87dd7b17af4fd587ad97940f5426c92e6b3d2c05456/MikelCalvo/go-metin2-server"
---

# go-metin2-server

Clean-room Metin2 server emulator in Go, targeting TMP4-era client compatibility.

This project is a public rewrite built around project-owned protocol notes, small verified slices, and a gradual path from a stable boot flow to a real shared-world game server. Legacy trees and captures may be used only as external behavior oracles; this repository must not copy legacy source code.

## Current status

`go-metin2-server` is **pre-alpha**. It is not a playable legacy-compatible server yet, but it is well past the packet-experiment stage.

The current `main` branch owns:

- real `authd` and `gamed` daemon entrypoints,
- secure legacy handshake, auth/login, character selection, loading, and game-entry flows,
- a shared in-process world runtime with player visibility, movement, chat, transfer, reconnect, and static/non-player actor seams,
- broad bootstrap inventory, equipment, quickslot, item-use, ground-item, shop, exchange/refine, durable safebox, first host-only `MYSHOP` presentation, and reward slices,
- authored static actors, interactions, merchant catalogs, content bundles, spawn groups, and stationary practice-mob profiles,
- first…
