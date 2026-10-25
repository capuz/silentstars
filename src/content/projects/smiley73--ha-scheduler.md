---
repo: "Smiley73/ha-scheduler"
name: "ha-scheduler"
description: "Home Assistant Component to support seasonal schedules, like holiday lighting"
readmeQualityOk: true
url: "https://github.com/Smiley73/ha-scheduler"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "homeassistant", "homeassistant-integration", "scheduler", "seasonal"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-03T21:26:58Z"
lastCommitAt: "2026-10-25T22:10:39Z"
lastReleaseAt: "2026-02-26T22:48:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 76
maintainers: ["dependabot[bot]", "Smiley73", "frenck"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bcc3aff61ba4e488119a5f96b66759e42300379bd6b56b3c7cb8689babc8838/Smiley73/ha-scheduler"
---

A custom Home Assistant integration for **seasonal schedules** — think holiday lighting, seasonal thermostat settings, or anything that should follow the calendar. Define date ranges, recurring weeks, "nth weekday" rules, or real-world holidays, attach your own configuration (colors, temperatures, modes) to each schedule, and drive your automations from a single calendar entity that always knows what season it is.

## ✨ Features

- 🖱️ Easy configuration entirely through the UI
- 📅 Four flexible schedule types: date-based, week-based, nth-day, and holiday-backed
- 🗓️ Enhanced week-based schedules with optional day restrictions, country-specific week starts, and partial/full week types
- 🌍 Holiday import for 100+ countries with automatic pattern detection
- 📆 Calendar entity showing all active schedules as events
- 🧩 Optional YAML configuration per schedule for custom attributes
- ⚙️ Default configuration that applies to all schedules
- 🚦 Automatic overlap detection to prevent conflicting schedules

## 📦 Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Click on "Integrations"
3. Click the three dots in the top right corner
4. Select…
