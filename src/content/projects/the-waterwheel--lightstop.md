---
repo: "the-waterwheel/lightstop"
name: "lightstop"
description: "An offline Android reflected-light meter with RAW metering and Zone System tracking"
readmeQualityOk: true
url: "https://github.com/the-waterwheel/lightstop"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-08-11T14:24:58Z"
lastCommitAt: "2026-09-12T06:34:21Z"
lastReleaseAt: "2026-09-07T12:57:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 49
maintainers: ["the-waterwheel"]
openGraphImageUrl: "https://opengraph.githubassets.com/f05a288be8eeb6118aef0626c936a1b0ebb0afab96077c626ffc34cd1b44852d/the-waterwheel/lightstop"
---

# lightstop（光档）

English | [简体中文](https://github.com/the-waterwheel/lightstop/blob/HEAD/README_ZH.md)

lightstop is an Android reflected-light meter for manual exposure and film
photography. It uses Camera2 for the live preview, prefers `RAW_SENSOR` data,
measures Bayer samples in C++, and calculates EV100, aperture/shutter
relationships, and Zone System placement in Kotlin. When RAW is unavailable,
it automatically falls back to metering the ISP-processed preview.

The app does not request Internet or shared-storage access and does not include
analytics or advertising SDKs. It can save a user-requested parameter record in
app-private storage, including a viewfinder JPEG, optional DNG and compact RAW
metering grid, exposure data, notes, and an optional authorized location. Android or device-manufacturer
backup and transfer services can copy that private data according to the user's
system settings; the app and its developer do not upload or access those copies.

## Development approach

This project was created through a vibe coding workflow with AI assistance.
AI participated in design discussions, implementation, refactoring,
documentation, and test preparation. Release…
