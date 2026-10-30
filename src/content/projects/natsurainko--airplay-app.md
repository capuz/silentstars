---
repo: "natsurainko/Airplay.App"
name: "Airplay.App"
description: "An AirPlay receiver that supports multiple devices connected simultaneously, supports real-time audio streaming, screen mirroring, and supports two-way control"
originalDescription: "An AirPlay receiver that supports multiple devices connected simultaneously, supports real-time audio streaming, screen mirroring, and supports two-way control"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/natsurainko/Airplay.App"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["airplay", "airplay-receiver", "alac", "smtc"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-09-21T12:18:50Z"
lastCommitAt: "2026-10-30T10:20:40Z"
lastReleaseAt: "2026-10-29T10:12:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["natsurainko"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4e1bba3474f8030b6042ac0f8ec8c0891e0c63a4a426947ee4958a8cab4d956/natsurainko/Airplay.App"
---

## AirPlay Windows App
A receiver for AirPlay that supports multiple devices connected at the same time, supports real-time audio streaming and screen mirroring, and supports bidirectional control.  
Built with dotnet 10 and the WinUI 3 framework, with good performance.

For the core functionality implementation, see the [AirPlay.Core2](https://github.com/natsurainko/AirPlay.Core2) project.  

### Features

+ [x] Supports multiple devices connected to the AirPlay receiver at the same time
+ [x] Supports audio streaming from multiple devices in ALAC, AAC, and AAC-ELD formats
+ [x] Supports screen mirroring streams from multiple devices in H.264 format
+ [x] Supports adjusting mirroring stream resolution (1080p / 1440p / 2160p) and maximum frame rate (30 / 60 / 120 FPS) [requires target device support]
+ [x] Supports system media transport controls (Smtc) to reverse-control audio connections
+ [x] Supports the global shortcut `Windows + Alt + A` to quickly open the device control panel

### Screenshots

### Maintenance and Updates

The FFmpeg native DLLs in `AirPlay.App/Libraries` must match the version required by the FFmpeg.AutoGen bindings and the application architecture. When…
