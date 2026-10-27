---
repo: "mathieuletyrant/umbrel-community-app-store"
name: "umbrel-community-app-store"
description: "Umbrel community app store: 30+ self-hosted apps for the *arr media stack (Radarr/Sonarr companions, subtitles, transcoding, IPTV) plus MCP servers to drive them from AI assistants. Auto-updated by Renovate, every update verified on a real umbrelOS."
readmeQualityOk: true
url: "https://github.com/mathieuletyrant/umbrel-community-app-store"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [49, 48]
topics: ["umbrel", "umbrel-app-store", "umbrel-apps", "umbrel-community-app-store", "byparr", "cleanuparr", "cross-seed", "dispatcharr", "healarr", "plex"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-03T19:37:26Z"
lastCommitAt: "2026-10-27T12:39:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 47
maintainers: ["renovate[bot]", "mathieuletyrant"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbb986aa3e7e52d9317ed68962a5151130d74f4ce67dd74c4750ac5cdcc4fbf3/mathieuletyrant/umbrel-community-app-store"
---

# Mathieu's Umbrel App Store

A personal [Umbrel Community App Store](https://github.com/getumbrel/umbrel-apps),
focused on **self-hosted media apps** — the kind of tools that round out a
*arr / Plex / Jellyfin setup but aren't (yet) in the official Umbrel App Store.

Everything here is packaged for [umbrelOS](https://umbrel.com) and kept simple:
one folder per app, images pinned by digest, sensible defaults out of the box.

> 🤖 **This store is maintained with AI.** Most of the packaging, updates and
> fixes are written by an AI coding agent ([Claude Code](https://claude.com/claude-code)),
> under rules I set. See [How this store is maintained](#-how-this-store-is-maintained).

## 📦 Apps

| App | What it does |
| --- | --- |
| **arrglue** | **Wires the *arr stack together**: discovers every app on the Umbrel, reads their keys, checks routes, paths/hardlinks and each configured link by asking the apps themselves, then creates or repairs the links through their APIs (plan / apply, Terraform-style). Also a registry other tools can ask for URLs and keys. |
| **Healarr** | Scans your media library for **corrupt files** (ffprobe / MediaInfo / HandBrake), deletes them, and triggers a…
