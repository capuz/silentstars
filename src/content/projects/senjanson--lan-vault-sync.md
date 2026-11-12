---
repo: "senjanson/lan-vault-sync"
name: "lan-vault-sync"
description: "Real-time, conflict-free Obsidian vault sync over LAN — Yjs CRDT merging, P2P WebSocket, auto-discovery, no cloud, no server, no subscription."
readmeQualityOk: true
url: "https://github.com/senjanson/lan-vault-sync"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 8
forks: 3
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-29T15:01:47Z"
lastCommitAt: "2026-11-12T11:43:27Z"
lastReleaseAt: "2026-04-02T11:43:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 47
maintainers: ["claude", "senjanson"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3404840191b2b43012532f1d9e84697581ef9e46c396259fe3dc5e9910229a1/senjanson/lan-vault-sync"
---

# LAN Vault Sync — Obsidian Plugin

> Real-time, conflict-free vault synchronization across your local network — no cloud, no server, no subscription.

Edit on your Mac and see changes appear instantly on your iPhone. All traffic stays on your LAN.

---

## Why LAN Vault Sync?

Most sync solutions route your notes through a third-party server. LAN Vault Sync is different:

- **Zero cloud** — data never leaves your local network
- **Zero configuration** — devices discover each other automatically via UDP broadcast
- **Zero conflicts** (for text) — Yjs CRDT merges concurrent edits at the character level, the same technology that powers Google Docs-style collaboration
- **Zero subscription** — fully open source and free forever

---

## Features

| Feature | Details |
|---|---|
| **Real-time sync** | File changes pushed to all peers within seconds via WebSocket |
| **CRDT text merge** | Markdown / text files merged automatically at character level using [Yjs](https://github.com/yjs/yjs) — no conflicts, no data loss |
| **Binary file sync** | Images, PDFs, and other attachments synced via SHA-256 hash comparison |
| **Auto-discovery** | Devices find each other via UDP broadcast — zero…
