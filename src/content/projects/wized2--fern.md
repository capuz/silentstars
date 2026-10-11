---
repo: "wized2/Fern"
name: "Fern"
description: "Fern — live system pulse for Android. Material 3 green resource monitor."
readmeQualityOk: true
url: "https://github.com/wized2/Fern"
homepage: "https://fern-blue.vercel.app"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [87]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-14T09:56:24Z"
lastCommitAt: "2026-10-11T10:15:03Z"
lastReleaseAt: "2026-09-15T10:13:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 56
maintainers: ["wized2", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/57e4ffbe89657c426a56abc42f4d7ca9ad587a8d298fc8a137b5ed0f89de7e0f/wized2/Fern"
---

# Fern

**Live system pulse for Android** — CPU, RAM, storage, battery, thermal, network, and hardware tests.

Material 3 · offline · no ads · small release APK (R8 + resource shrink).

## Features

| Metric | Source |
|--------|--------|
| **CPU %** | Multi-path `/proc/stat` dual-sample + cross-tick; loadavg fallback |
| **CPU detail** | Cores, current/max MHz, governor, ABI, chip, load 1/5/15 |
| **RAM** | Used / free / total + app heap + low-memory pressure |
| **Storage** | Internal `StatFs`; external when distinct |
| **Battery** | Level, charge, health, tech, °C, mV, mA, estimated watts |
| **Thermal** | `PowerManager` status (API 29+) + battery °C bar |
| **Network** | Type + live KB/s throughput |
| **Display** | Resolution, DPI, refresh Hz |
| **System** | Security patch, kernel, locale, timezone, sensor count |

### Tabs

- **Home** — live gauges, session averages, uptime, trends, thermal, refresh
- **Details** — processor, memory, power, display, peaks; share snapshot
- **Active Apps** — recent apps (optional Usage access); elevated per-app RAM/CPU
- **More** — Tests, Settings (alerts, theme, advanced), Sensors, Notch island, About

### Alerts

Optional CPU % and…
