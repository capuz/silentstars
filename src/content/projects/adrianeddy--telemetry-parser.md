---
repo: "AdrianEddy/telemetry-parser"
name: "telemetry-parser"
description: "A tool to parse real-time metadata embedded in video files or telemetry from other sources like Betaflight blackbox. Supported formats: Sony, GoPro GPMF, Insta360, Betaflight blackbox (csv and binary)"
readmeQualityOk: true
url: "https://github.com/AdrianEddy/telemetry-parser"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 319
forks: 49
openIssues: 2
closedIssues: 31
watchers: 8
contributors: 16
recentReleases: 0
createdAt: "2021-06-20T16:56:26Z"
lastCommitAt: "2026-11-01T10:44:40Z"
lastReleaseAt: "2023-01-18T16:01:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 30
maintainers: ["AdrianEddy", "OMG648", "bang-imvt"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6ee26be2765b8d5315c4ff0711347502ef56cef36264a30c96f18727a032c8a/AdrianEddy/telemetry-parser"
---

# telemetry-parser
A tool to parse real-time metadata embedded in video files or telemetry from other sources.

# Supported formats:
- [x] GoPro (HERO 5 and later)
- [x] Sony (a1, a7c, a7r V, a7 IV, a7s III, a9 II, a9 III, FX3, FX6, FX9, RX0 II, RX100 VII, ZV1, ZV-E10, ZV-E10 II, ZV-E1, a6700)
- [x] Insta360 (OneR, OneRS, SMO 4k, Go, GO2, GO3, GO3S, GOUltra, Caddx Peanut, Ace, Ace Pro, X5)
- [x] DJI (Avata, Avata 2, O3/O4 Air Unit, Action 2/4/5/6/Nano, Neo, Neo2)
- [x] XTRA (Edge, Edge Pro)
- [x] Blackmagic RAW (*.braw)
- [x] RED RAW (V-Raptor, KOMODO) (*.r3d)
- [x] MotionCam Pro RAW video (*.mcraw)
- [x] Canon (C50, C80, C400, R6 Mk3, R5 Mk2) (*.mp4, *.mov, *.mxf, *.crm)
- [x] Freefly (Ember)
- [x] Z CAM (E2-M4 Mk2, E2-S6 Mk2, E2-F6 Mk2, E2-F8 Mk2, E2-M4G Mk2, E2-S6G Mk2 and E2N Mk2) (*.mp4, *.mov, *.zraw)
- [x] Betaflight blackbox (*.bfl, *.bbl, *.csv)
- [x] ArduPilot logs (*.bin, *.log)
- [x] Gyroflow [.gcsv log](https://docs.gyroflow.xyz/app/technical-details/gcsv-format)
- [x] iOS apps: [`Sensor Logger`](https://apps.apple.com/us/app/sensor-logger/id1531582925), [`G-Field Recorder`](https://apps.apple.com/at/app/g-field-recorder/id1154585693),…
