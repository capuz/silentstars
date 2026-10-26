---
repo: "freenet/river"
name: "river"
description: "Group chat with no backend"
readmeQualityOk: true
url: "https://github.com/freenet/river"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["decentralized", "freenet", "group-chat"]
stars: 307
forks: 33
openIssues: 134
closedIssues: 230
watchers: 7
contributors: 11
recentReleases: 0
createdAt: "2024-08-13T19:59:40Z"
lastCommitAt: "2026-10-26T03:02:04Z"
lastReleaseAt: "2025-12-25T23:24:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 36
maintainers: ["sanity", "glesage", "HostFat"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/842164962/a6d47aaa-7d5c-400c-aee6-772e60a2f7e8"
---

# River: group chat with no backend

River is a group chat app whose backend is a global peer-to-peer network instead of cloud servers.
Nobody runs a server for River, and nobody self-hosts: every room lives on Freenet, a network
made up of the computers of the people who run it. Because the network
caches and serves each room from nodes near whoever's asking, a busy room gets *more* capacity as it
gets more popular, the opposite of the server model where traffic is a bill someone has to pay.

## Contents

- [Wait, no backend?](#wait-no-backend)
- [How it works](#how-it-works)
- [Why not Matrix, Discord, or Signal?](#why-not-matrix-discord-or-signal)
- [Features](#features)
- [Getting Started](#getting-started)
- [Command-line client (optional)](#command-line-client-optional)
- [Building from source](#building-from-source)
- [Access Control](#access-control)
- [Privacy Model](#privacy-model)
- [Architecture](#architecture)
- [License](#license)

## Wait, no backend?

Most apps you use are shaped like this:

```
your browser  ──▶  servers you operate  ──▶  a database you operate
```

River is shaped like this:

```
your browser  ──▶  Freenet, a global peer-to-peer network…
