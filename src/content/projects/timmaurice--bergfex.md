---
repo: "timmaurice/bergfex"
name: "bergfex"
description: "Home Assistant integration for Bergfex snow reports and ski resort data, with a bundled Lovelace card."
readmeQualityOk: true
url: "https://github.com/timmaurice/bergfex"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [65, 33]
topics: ["hacs-integration", "integration", "bergfex", "home-assistant", "hacs", "lovelace-card", "ski", "snow"]
stars: 20
forks: 3
openIssues: 2
closedIssues: 17
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-10-29T17:24:52Z"
lastCommitAt: "2026-11-03T10:51:47Z"
lastReleaseAt: "2026-03-15T11:16:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 62
maintainers: ["timmaurice", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/87f408c225b803b46981995a9c4374d6063ccb6017be5d47ac0e23437483874d/timmaurice/bergfex"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/timmaurice"]
---

# Bergfex Snow Report Integration for Home Assistant

This custom integration for Home Assistant fetches snow reports and ski resort data directly from [Bergfex](https://www.bergfex.com). Since Bergfex does not provide a public API, this component scrapes the data from their website. It includes a bundled Lovelace card for visualising resort conditions at a glance.

## Features

### Integration

- **Multi-language Support**: Use Bergfex in your preferred language. Now supporting **18 languages** with full keyword parsing and translation for sensor data.
- **Localized Setup**: The configuration flow is translated into **major languages** (German, English, French, Italian, Spanish, Dutch, Polish, Danish).
- **Dynamic Domain Mapping**: Automatically uses the correct Bergfex domain (e.g., .at, .com, .fr, .it) based on your language selection.
- **Enhanced Localization**: Data values (like "Powder", "Open", "Moderate") are automatically translated into your selected language.
- **Multi-Country Support**: Select ski areas from various European countries including Austria, Germany, Switzerland, Italy, France, Slovenia, Czech Republic, Poland, and Slovakia.
- **Webhook Support**: Send…
