---
repo: "usetrmnl/trmnl-home-assistant"
name: "trmnl-home-assistant"
description: "Add-ons and plugins for Home Assistant designed for TRMNL e-ink displays."
readmeQualityOk: true
url: "https://github.com/usetrmnl/trmnl-home-assistant"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 194
forks: 20
openIssues: 2
closedIssues: 62
watchers: 5
contributors: 16
recentReleases: 0
createdAt: "2025-12-27T19:15:03Z"
lastCommitAt: "2026-11-19T11:00:16Z"
lastReleaseAt: "2026-01-09T15:50:14Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 37
maintainers: ["ikraamg", "BartSchuurmans", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/651c6216d77a1d0a9bb77a6a014cc248cf3e572cd868ac99e63fef1d18bd2f60/usetrmnl/trmnl-home-assistant"
---

# TRMNL HA

Send Home Assistant dashboard screenshots to your TRMNL e-ink display with advanced dithering optimized for e-paper screens.

**Note:** This app can capture screenshots from **any website**, not just Home Assistant dashboards. See [Standalone Mode](https://github.com/usetrmnl/trmnl-home-assistant/blob/main/trmnl-ha/DOCS.md#standalone-mode) for detailed setup.

## Features

- **E-ink optimized dithering** - Floyd-Steinberg and Ordered algorithms for crisp e-paper rendering
- **TRMNL webhook integration** - Automatic dashboard uploads to TRMNL devices
- **Fetch URL (pull mode)** - Direct URL for on-demand screenshots, works with ESPHome and custom e-ink setups
- **Scheduled captures** - Cron-based automation with Web UI management
- **Device presets** - Pre-configured settings for 24+ popular e-ink displays
- **Crash recovery** - Automatic browser recovery and process supervision
- **High performance** - Powered by Bun runtime for fast startup and low memory
