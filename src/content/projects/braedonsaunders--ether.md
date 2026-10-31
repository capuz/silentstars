---
repo: "braedonsaunders/ether"
name: "ether"
description: "A Plex Media Server that holds no media: the TMDB catalogue, streamed on demand from your Real-Debrid and other debrid accounts or Usenet, in the official Plex apps."
readmeQualityOk: true
url: "https://github.com/braedonsaunders/ether"
language: "Go"
languages: ["Go"]
languagePcts: [82]
stars: 122
forks: 15
openIssues: 11
closedIssues: 47
watchers: 2
contributors: 10
recentReleases: 10
createdAt: "2026-10-19T13:30:06Z"
lastCommitAt: "2026-10-31T07:45:35Z"
lastReleaseAt: "2026-10-22T02:25:24Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 35
maintainers: ["braedonsaunders", "alfablac", "FarkasLabs"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1425661971/ce916028-ae9c-486f-a04d-a212a882cf0f"
---

Press <b>Play</b> on a title in any official Plex app. Ether resolves the best release across <b>your Usenet providers</b> and <b>your debrid accounts</b>, health-checks it, and streams the exact byte ranges the player asks for.

---

## Why Ether exists

A typical automated Plex setup is built from several excellent projects—Sonarr, Radarr, Prowlarr, SABnzbd, Overseerr, Kometa, Tautulli and more—each of them very good at its job. Wiring them together still means download clients, path mappings, webhooks and, for debrid users, FUSE/WebDAV mounts that Plex Media Server has to scan. A new title still has to download, unpack and be scanned before anyone can press Play.

Ether takes a different approach to the on-demand case. Instead of presenting files for Plex Media Server to scan, **Ether speaks the PMS protocol itself.** It talks directly to official Plex clients (Apple TV, iOS, Android TV, Shield, Fire TV, Roku, Smart TVs, Web) and backs the library with the live TMDB catalogue and an on-demand byte-range streaming engine.

When you open Plex, **the catalogue is already there.** When you press **Play**, Ether resolves, health-checks, and streams the bytes on the fly. When you…
