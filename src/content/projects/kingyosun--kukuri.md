---
repo: "KingYoSun/kukuri"
name: "kukuri"
description: "Monorepo for kukuri: a fully decentralized, topic-first social app (Tauri desktop) using iroh-gossip"
url: "https://github.com/KingYoSun/kukuri"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [66, 30]
topics: ["censorship-resistance", "decentralized", "desktop-app", "dht", "distributed-systems", "gossip-protocol", "iroh", "p2p", "peer-discovery", "peer-to-peer"]
stars: 6
forks: 3
openIssues: 3
closedIssues: 113
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2025-07-25T01:45:40Z"
lastCommitAt: "2026-07-03T12:22:39Z"
lastReleaseAt: "2026-06-15T12:01:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 89
maintainers: ["KingYoSun"]
openGraphImageUrl: "https://opengraph.githubassets.com/6abdb615cf550680f2dd2e9e1cc28b55391215bf78aeee141b18ba2a3ba75a66/KingYoSun/kukuri"
---

English | [日本語](./README.ja.md)

# kukuri

kukuri is a topic-first P2P social app and protocol. It keeps Nostr-derived identity and signed envelope semantics where they are useful, but its internal sync plane is built around separated `docs`, `blobs`, `hints`, and connectivity instead of a relay-first design.

## Builder Preview

- Current preview target: Windows installer via GitHub Releases.
- Linux remains source-run for now.
- Preview updates use the in-app `Settings -> Release` updater against `latest-preview.json`.
- Data safety, release runbook, and third-party notices are linked from `Settings -> Release`.
- If a preview build is unsigned, the GitHub Release notes call out the expected SmartScreen warning.
- Preview flow: launch the desktop app, let the preloaded community node reach `ready`, open a starter topic, post or reply, then send feedback.
- Preview quickstart: [docs/runbooks/mvp-user-quickstart.md](./docs/runbooks/mvp-user-quickstart.md)
- Troubleshooting: [docs/runbooks/mvp-troubleshooting.md](./docs/runbooks/mvp-troubleshooting.md)

## What To Try In 3 Minutes

1. Launch the app and wait for the preloaded community node to become `ready`.
2. Open one of the…
