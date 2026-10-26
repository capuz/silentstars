---
repo: "juju35/ha-system-monitor-card"
name: "ha-system-monitor-card"
description: "Lovelace cards for Home Assistant to monitor the machine running Home Assistant (System Monitor integration)"
readmeQualityOk: true
url: "https://github.com/juju35/ha-system-monitor-card"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["home-assistant", "homeassistant", "lovelace", "lovelace-card", "lovelace-custom-card", "system-monitor"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-19T20:22:05Z"
lastCommitAt: "2026-10-26T02:58:49Z"
lastReleaseAt: "2026-10-21T15:39:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 45
maintainers: ["juju35", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c775c15aa9eb0c53f7bea20b6bc0ce91bd2e38dd5ec1da16e653f2a4f6ae1587/juju35/ha-system-monitor-card"
---

# ha-system-monitor-card

Lovelace cards for Home Assistant to monitor the machine running Home Assistant itself: CPU, RAM, disk, temperature, network, storage and processes at a glance.

The cards are built on top of the core [System Monitor integration](https://www.home-assistant.io/integrations/systemmonitor/): entities are **discovered automatically**, you don't have to pick them one by one, and it works whatever the language of your installation.

| System Monitor Card | System Monitor Mini Card | System Monitor Status Card |
|---|---|---|
|  |  |  |

## Features

- Three cards: a full **System Monitor Card**, a compact **System Monitor Mini Card** and a minimal **System Monitor Status Card** (versions, overall statuses and one HACS update button)
- **Zoom** on the status card: a button at the top right switches it to the full System Monitor card (same options) and back; a click anywhere outside the card brings it back too
- Automatic discovery of the System Monitor entities through the entity registry (any language)
- CPU, RAM, disk and CPU temperature gauges, uptime, load average and IP address
- Home Assistant Core and OS versions, with an orange badge when an update is…
