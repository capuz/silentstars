---
repo: "braedonsaunders/ether"
name: "ether"
description: "A media server that holds no media. One install serves Plex, Jellyfin, Emby, Infuse, Swiftfin, Silo and Stremio apps, streaming the TMDB catalogue on demand from your debrid accounts or Usenet."
readmeQualityOk: true
url: "https://github.com/braedonsaunders/ether"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["debrid", "emby", "infuse", "jellyfin", "media-server", "plex", "real-debrid", "self-hosted", "stremio", "usenet"]
stars: 249
forks: 34
openIssues: 15
closedIssues: 260
watchers: 1
contributors: 21
recentReleases: 10
createdAt: "2026-10-19T13:30:06Z"
lastCommitAt: "2026-11-16T20:23:19Z"
lastReleaseAt: "2026-10-22T02:25:24Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 32
maintainers: ["braedonsaunders", "jmiller0", "drondeseries"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1425661971/7bc31392-9bad-4ab8-b45d-bcf69deaa5ae"
discussionCount: 19
---

Press <b>Play</b> on a title in Plex, Infuse, Swiftfin, Jellyfin, Emby, Silo, or Stremio. Ether resolves the best release across <b>your Usenet providers</b> and <b>your debrid accounts</b>, health-checks it, and streams the exact byte ranges the player asks for.

## Why Ether exists

A typical automated media setup is built from several separate projects: Sonarr, Radarr, Prowlarr, SABnzbd, Overseerr, Kometa, Tautulli, and debrid mount tools. Wiring them together means download clients, path mappings, webhooks, and FUSE or WebDAV mounts that a media server has to scan. A new title still has to download, unpack, and be indexed before anyone can press Play.

Ether takes a different approach to the on-demand case. Instead of presenting virtual files for another media server to scan, **Ether speaks your apps' own languages.** It is a Plex server to Plex apps, a Jellyfin server to Infuse, Swiftfin, and Findroid, an Emby server to Emby apps, and a Silo server to Silo, backed by the live TMDB catalogue and an on-demand byte-range streaming engine.

When you open your app, **the catalogue is already there.** When you press **Play**, Ether resolves, health-checks, and streams the bytes on…
