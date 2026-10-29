---
repo: "gccammelli/pandy"
name: "pandy"
description: "Bambu Handy features for printers in LAN-only mode, with optional Home Assistant support."
readmeQualityOk: true
url: "https://github.com/gccammelli/pandy"
homepage: "https://buymeacoffee.com/cammelli"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["3d-printing", "android", "bambu-lab", "compose-multiplatform", "home-assistant", "ios", "kotlin-multiplatform", "lan", "bambu-handy"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-17T07:33:59Z"
lastCommitAt: "2026-10-29T10:36:39Z"
lastReleaseAt: "2026-10-21T20:23:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 76
undervaluedScore: 49
maintainers: ["gccammelli"]
openGraphImageUrl: "https://opengraph.githubassets.com/d209e5d78182a642cda277d45eadb11f3bb2af8174794c41ca53c4618a5594e6/gccammelli/pandy"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/cammelli"]
---

# Pandy

**An unofficial companion app for Bambu printers in LAN-only mode.**

Pandy was built from scratch for people who keep their Bambu printer in LAN-only mode but still want useful printer
features. It talks directly to the printer on the local network, without sending printer control through
Bambu's cloud.

These are dark-mode screens from the built-in demo printer, which lets you explore the app without a printer:

## Features

- Printer status, progress, temperatures, fans, light, speed, motion controls and HMS messages
- Pause, stop and skip controls, plus AMS and filament controls
- Print files, thumbnails, history, reprints and timelapses
- Android: alerts when a print finishes, fails or needs attention, even with the screen off (Pandy stays connected in the background; turn it off in Settings). iOS can't watch in the background, so it has no alerts
- MakerWorld browsing, and printing its models with [Pandy Slicer](https://github.com/gccammelli/pandy-slicer) (a Home Assistant add-on that Pandy reaches through Home Assistant, or a Docker container; [how](https://github.com/gccammelli/pandy/blob/HEAD/docs/slicer.md))
- Light and dark themes, with a built-in demo printer…
