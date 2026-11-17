---
repo: "sgerstl/fm1-ipad"
name: "fm1-ipad"
description: "Lupe: an iPad companion for the M-VAVE FM-1, running on Skiff and SLOOP firmware. GPL-3.0."
readmeQualityOk: true
url: "https://github.com/sgerstl/fm1-ipad"
language: "C"
languages: ["C", "Swift"]
languagePcts: [44, 35]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 4
createdAt: "2026-10-30T19:20:58Z"
lastCommitAt: "2026-11-17T12:20:51Z"
lastReleaseAt: "2026-11-16T13:45:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 42
maintainers: ["sgerstl"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7e16794d32599c715efe9262d66a08e29f9782ec58408b79172720f4b98e902/sgerstl/fm1-ipad"
---

# Lupe (fm1-ipad)

An app for the M-VAVE FM-1 running [Skiff](https://github.com/illuminus5/skiff), on iPad, iPhone and Android phones. The two work as one instrument. The FM-1 makes the sound, stores the patterns and plays them. The app is a bigger window onto it: it shows all six tracks, edits them, shapes sounds, records samples, and arranges each track's patterns into a song. On a phone the same jobs come one screen at a time.

It's a work in progress. I test it with my own FM-1, an iPad, a Pixel 7 and a Pixel 10 Pro.

Lupe began on [SLOOP](https://github.com/isod89/sloop-fm1) and spoke both firmwares until 2026-11-15, when it became Skiff-only. The last SLOOP state is the tag `sloop-archive-2026-11-15`; `design/archive/sloop.md` lists what went.

## What you need

- An FM-1 on Skiff 2.5.1 or 2.6, and a USB-C cable from it to the phone or iPad
- **Android:** a phone on Android 13 or later with a USB-C port
- **iPad:** iPadOS 18 or later. The layout is drawn for a 13-inch iPad in landscape and scaled to fit smaller ones
- **iPhone:** iOS 18 or later, used in landscape. An iPhone 15 or later plugs straight into the FM-1; an older one needs Apple's Lightning to USB camera adapter…
