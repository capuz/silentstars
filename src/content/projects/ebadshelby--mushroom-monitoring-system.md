---
repo: "EbadShelby/mushroom-monitoring-system"
name: "mushroom-monitoring-system"
description: "IoT-Based Environmental Monitoring System for Oyster Mushroom Cultivation in BS Agriculture, Cotabato State University"
readmeQualityOk: true
url: "https://github.com/EbadShelby/mushroom-monitoring-system"
language: "Vue"
languages: ["Vue", "PHP"]
languagePcts: [63, 29]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-20T23:53:53Z"
lastCommitAt: "2026-11-14T10:47:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 44
maintainers: ["EbadShelby", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d87f8dcc947e4d4e3ccd9ed628d45af3b73e0d98a2bacf006c2356f57269a798/EbadShelby/mushroom-monitoring-system"
---

# IoT-Based Environmental Monitoring System for Oyster Mushroom Cultivation

An IoT system designed for monitoring and automating the cultivation environment of Gray Oyster Mushrooms (_Pleurotus ostreatus_). This system was developed for Cotabato State University — BS Agriculture Program.

The system uses an ESP32 microcontroller to collect environmental data from various sensors (temperature, humidity, CO2, light, and soil moisture) and automatically controls actuators (humidifier, grow light) based on specific thresholds. The data is sent to a Laravel backend, where it is stored in MySQL for historical tracking and pushed to a Firebase Realtime Database for live dashboard monitoring built with Vue.js.

## Preview

## System Architecture

```
ESP32 (sensors + actuators)
        │
        │ HTTP POST /api/sensor-data every 30 seconds
        ▼
Laravel API (SINGLE entry point — all data flows through here)
        │
        ├── Save to MySQL (permanent storage)
        └── Push latest values to Firebase (real-time dashboard)
                │
                ▼
        Vue.js Dashboard (via Inertia.js)
                │
                ├── Live sensor cards ← Firebase…
