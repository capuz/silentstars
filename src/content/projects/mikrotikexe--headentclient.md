---
repo: "MikrotikExe/headentclient"
name: "headentclient"
description: "Android client for Tvheadend — live TV, EPG, DVR and radio, for Android TV boxes and phones. Kotlin / Jetpack Compose."
readmeQualityOk: true
url: "https://github.com/MikrotikExe/headentclient"
homepage: "https://headentclient.com"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["android", "android-tv", "dvr", "epg", "htsp", "iptv", "jetpack-compose", "kotlin", "libvlc", "live-tv"]
stars: 33
forks: 7
openIssues: 21
closedIssues: 11
watchers: 3
contributors: 4
recentReleases: 5
createdAt: "2026-06-14T11:09:42Z"
lastCommitAt: "2026-10-31T09:54:10Z"
lastReleaseAt: "2026-09-15T12:35:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 86
undervaluedScore: 43
maintainers: ["MikrotikExe", "pimzand", "jpstotz"]
openGraphImageUrl: "https://opengraph.githubassets.com/54eba83b085ec534a4d4a37c9e44e0a67ec7138ab43061056f5865f638e0bd86/MikrotikExe/headentclient"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/headent-client"]
---

# Headent Client

Android client for [Tvheadend](https://tvheadend.org/) — live TV, EPG, recordings (DVR)
and radio, built for **Android TV boxes and phones**. Written in Kotlin Multiplatform with
Jetpack Compose and libVLC.

> **Disclaimer:** Headent Client is an independent client application and is **not** an
> official product of the Tvheadend project. The app contains **no** TV channels or
> media content — it only connects to a Tvheadend server that **you** have access to and
> configure yourself. A running Tvheadend server and valid credentials are required.

## Features

- Live TV from your Tvheadend server (HTTP and HTSP)
- EPG grid (TV guide) with fast scrolling and instant now/next from cache
- **Recording (DVR):** schedule and cancel from the guide, a programme detail or
  the player; stop running recordings and delete finished ones from the archive
- **Recording indicators:** badges for recording / recorded / scheduled, and a red
  dot on channels currently being recorded
- **DVR profile per server** — choose which recording profile the server uses,
  or leave it to the server
- Recording playback with resume and a categorized archive
- Seeking inside recordings and…
