---
repo: "yigitabi5444/supercon26-badge-os"
name: "supercon26-badge-os"
description: "badge os: home screen and apps for the Supercon 2026 Billboard Badge (ESP-IDF)"
readmeQualityOk: true
url: "https://github.com/yigitabi5444/supercon26-badge-os"
language: "C"
languages: ["C"]
languagePcts: [89]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-11-06T21:54:36Z"
lastCommitAt: "2026-11-09T00:54:11Z"
lastReleaseAt: "2026-11-08T19:50:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 58
maintainers: ["yigitabi5444", "jbmorch"]
openGraphImageUrl: "https://opengraph.githubassets.com/02f22224c5b107ba604686ddd0f98992c00bf98ea259022ff295bb1706f6866b/yigitabi5444/supercon26-badge-os"
---

# badge os

A small operating system for the Hackaday Supercon 2026 "Billboard Badge" (ESP32-S3 with 8 MB PSRAM and a 9.7"
960x672 black/white/red e-paper), written in C on ESP-IDF. The badge boots to an iOS-style home screen of app icons.
Apps take over the badge; hold MENU + and MENU - together to get back home.

## Features
- **Home screen**: 8 app icons per page, OS version bottom right.
- **Calm e-paper frames**: about 0.27 s per frame (3.5-4 frames/s), only the pixels that change move, nothing
  flashes. A custom waveform for the panel's two Pervasive Displays B1 controllers.
- **Top bar on every screen**: what each button does right now, printed beside the button; app name, username,
  OS version and battery in the middle.
- **Online update**: pulls the latest GitHub release over Wi-Fi (OTA, with rollback if the new version doesn't
  boot).
- **Badge-to-badge update**: one badge flashes its own firmware onto another over a USB-C cable (USB host mode).
- **Ranging**: badges find each other with ESP-NOW and measure their distance with Wi-Fi FTM (802.11mc round-trip
  time), on every screen. Each badge shares its measurements, so every badge learns the distances between the…
