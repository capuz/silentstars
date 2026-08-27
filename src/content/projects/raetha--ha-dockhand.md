---
repo: "raetha/ha-dockhand"
name: "ha-dockhand"
description: "Dockhand Integration for Home Assistant"
readmeQualityOk: true
url: "https://github.com/raetha/ha-dockhand"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["docker", "dockhand", "hacs", "home-assistant", "integration", "custom-component", "homeassistant", "python", "hacs-integration", "hass-integration"]
stars: 32
forks: 4
openIssues: 3
closedIssues: 13
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-03-08T19:12:27Z"
lastCommitAt: "2026-08-27T14:26:00Z"
lastReleaseAt: "2026-05-20T02:12:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 32
maintainers: ["raetha", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e1d8931ba7509de76ecf5b660c17c7aaf48a6da9a7b694393c84668f7a7efea/raetha/ha-dockhand"
fundingLinks: ["GITHUB:https://github.com/raetha"]
---

# Dockhand for Home Assistant

Monitor and control your Docker environments through **[Dockhand](https://dockhand.pro)** — a modern Docker management UI. This integration exposes environments, containers, stacks, networks, images, volumes, and schedules as Home Assistant devices and entities, using the same API as the Dockhand web UI.

No cloud services are used. Supports **API token authentication** and works with Dockhand instances where authentication is disabled.

Want dashboard cards, not just entities? See **[ha-dockhand-cards](https://github.com/raetha/ha-dockhand-cards)** — Lovelace cards modeled on Dockhand's own UI (environment, environment overview, vulnerability, stack, and container cards), built on top of the entities this integration provides.

---

## Installation

### HACS (Recommended)

This integration is available in the default HACS catalog.

1. Open HACS in Home Assistant
2. Go to **Integrations**
3. Find **Dockhand** in the integration list and install it
4. Restart Home Assistant

### Manual

1. Copy the `custom_components/dockhand/` folder into `<HA config>/custom_components/dockhand/`
2. Restart Home Assistant

---

## Setup

1. Go to **Settings → Devices…
