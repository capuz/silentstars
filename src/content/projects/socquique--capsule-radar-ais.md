---
repo: "socquique/capsule-radar-ais"
name: "capsule-radar-ais"
description: "Live AIS ship radar for the Waveshare ESP32-S3-Touch-AMOLED-1.75 — marine sibling of Capsule Radar. WSS feed from aisstream.io."
readmeQualityOk: true
url: "https://github.com/socquique/capsule-radar-ais"
language: "C"
languages: ["C"]
languagePcts: [95]
stars: 8
forks: 5
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-06-22T12:11:47Z"
lastCommitAt: "2026-09-22T08:46:13Z"
lastReleaseAt: "2026-06-24T18:58:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 51
undervaluedScore: 28
maintainers: ["socquique"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4c7f6cec45511651881dd627590bfdec6aad6c5bc00bb7741eda668a0fe6377/socquique/capsule-radar-ais"
---

# Capsule Radar — Marine 🚢

</p>

</p>

A live **AIS ship radar** for the **Waveshare ESP32-S3-Touch-AMOLED-1.75** — a round 466×466 AMOLED with capacitive touch. It pulls nearby **vessels** from a free online **AIS** feed over WiFi and plots them on a touch radar scope centered on your home, harbour, or a spot by a navigable river/canal — useful by the sea **and** inland. It's the **marine sibling of [Capsule Radar](https://github.com/socquique/capsule-radar)** (the live *aircraft* radar): same board, same look & feel, ships instead of planes.

| Phosphor | Orb | Amber CRT | Military |
|:--:|:--:|:--:|:--:|
|  |  |  |  |

<sub>Real AIS traffic around Dénia (a live snapshot from aisstream), rendered by the bundled desktop simulator — the device screen is round, so the square corners are off-panel.</sub>

## Features

- **Live vessel traffic** from [aisstream.io](https://aisstream.io) — a free, non-commercial **WebSocket** AIS feed pushed in real time. Memory-safe parser (JSON in PSRAM) with a hard vessel cap for busy harbours.
- **Ship glyphs rotated by course (COG)**, an animated sweep and a coastline map; **anchored/moored vessels** shown as quiet dots, moving ones as arrows,…
