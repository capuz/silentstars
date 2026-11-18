---
repo: "juju35/ha-system-hub"
name: "ha-system-hub"
description: "Home Assistant admin hub in one sidebar panel: System Monitor, Home Assistant's Docker containers, Marketplace updates, Integration Watchdog, batteries, Git Sync, failed automations and orphaned entities, as optional modules, with their Lovelace cards."
readmeQualityOk: true
url: "https://github.com/juju35/ha-system-hub"
homepage: "https://juju35.github.io/homeassistant-projects/projects/ha-system-hub/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [66, 34]
topics: ["containers", "docker", "home-assistant", "home-assistant-integration", "home-assistant-panel", "marketplace", "monitoring", "supervisor", "system-monitor", "watchdog"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-11-10T19:32:16Z"
lastCommitAt: "2026-11-18T12:04:22Z"
lastReleaseAt: "2026-11-11T12:54:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["juju35", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3fe7b97ee662f63c5efcb1f6f1ea321ceba1169f44666101af802576698d500/juju35/ha-system-hub"
---

# ha-system-hub

Home Assistant integration that brings the care of your Home Assistant system together in one configurable admin panel: system resources, Home Assistant's own containers, Marketplace updates, the integration watchdog, battery levels, Git sync of your configuration and orphaned entities. Each feature is a module you can turn on or off.

> System Hub replaces [ha-system-monitor-card](https://github.com/juju35/ha-system-monitor-card), [ha-marketplace-refresh](https://github.com/juju35/ha-marketplace-refresh), [ha-integration-watchdog](https://github.com/juju35/ha-integration-watchdog), [ha-battery-monitor](https://github.com/juju35/ha-battery-monitor), [ha-git-sync](https://github.com/juju35/ha-git-sync) and [ha-orphan-entities](https://github.com/juju35/ha-orphan-entities): see [Migrating](#migrating) to move over.

The hero of the Status tab scores the home's health out of 100 — `100` minus a weight for every area to watch — with the ring, the emblem and the count in the tone of the worst area:
