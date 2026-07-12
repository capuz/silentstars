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
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-17T08:53:12Z"
lastCommitAt: "2026-07-12T04:58:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["MikelCalvo"]
openGraphImageUrl: "https://opengraph.githubassets.com/02a29c824e956b179fa437e46ed5244f6a33ecf1afacda041293c299b4381da3/MikelCalvo/go-metin2-server"
---

# go-metin2-server

Clean-room Metin2 server emulator in Go, targeting TMP4-era client compatibility.

This repository is a public rewrite built around owned protocol documentation, small verified slices, and a gradual path from a stable boot flow to a real shared-world game server. It intentionally avoids copying legacy source code: legacy trees and captures are treated only as external behavior oracles.

## Status at a glance

`go-metin2-server` is **pre-alpha**. It is not a playable legacy-compatible server yet, but it is also no longer just a packet experiment. The repository currently has:

- real `authd` and `gamed` daemon entrypoints,
- a secure legacy handshake and login/select/game boot path,
- a shared in-process world runtime,
- protocol codecs and fixtures for the owned packet families,
- real-client-oriented integration tests around movement, visibility, chat, items, shops, combat, death, restart, and respawn slices,
- local operator/debug endpoints for runtime inspection and controlled bootstrap actions.

Current repository shape from the latest scan:

- Go version: `1.26`
- Go packages: 38
- Go files: 122
- Go test files: 67
- Markdown docs: 115
- protocol docs…
