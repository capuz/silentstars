---
repo: "chipster6502/MiSTer_monitor"
name: "MiSTer_monitor"
description: "MiSTer FPGA monitor for ESP32-based screens. Displays real-time game and systems artwork fetched from ScreenScraper, system stats, storage and network info."
readmeQualityOk: true
url: "https://github.com/chipster6502/MiSTer_monitor"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-04-02T00:56:17Z"
lastCommitAt: "2026-07-08T05:41:15Z"
lastReleaseAt: "2026-07-03T05:55:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["chipster6502"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3913c9054d8f603560a3fe8b53b147c3f90ab364caf1facce2833c4acf32ab3/chipster6502/MiSTer_monitor"
---

# MiSTer FPGA Monitor

A status monitor for the MiSTer FPGA platform. Displays the currently loaded
game artwork, system information, storage status, and network details in real time.

## Contents

- [Demo videos](#demo-videos)
- [Features](#features)
- [Supported Hardware](#supported-hardware)
- [Requirements](#requirements)
- [Installation](#installation)
- [3D-printable stand](#3d-printable-stand)
- [Architecture](#architecture)
- [M5Stack Tab5 screenshots](#m5stack-tab5-screenshots-1280x720)
- [Cheap Yellow Display screenshots](#28-cheap-yellow-display-cyd-screenshots-320x240)
- [To Do](#to-do)
- [License](#license)

## Demo videos

*Boot interface, loading an arcade game from the on-screen menu, and loading
console and computer games via the MiSTer Remote web application.*

*Navigating through the real-time system statistics screens.*

## Features

- Real-time game and core artwork display via ScreenScraper API
- Automatic game and system detection from OSD, MiSTer Remote web app and Super Attract Mode (SAM)
- Reliable game load detection using nanosecond-precision filesystem timestamps when loading cores and games through the on-screen menu (OSD)
- Automatic Arcade subsystem…
