---
repo: "Crank-Git/MTFWBuilder"
name: "MTFWBuilder"
description: "Meshtastic UF2/Bin Firmware Builder and userPrefs.jsonc Configuration GUI"
readmeQualityOk: true
url: "https://github.com/Crank-Git/MTFWBuilder"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [67, 24]
topics: ["firmware", "generator", "meshtastic"]
stars: 10
forks: 1
openIssues: 49
closedIssues: 31
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-05T21:39:30Z"
lastCommitAt: "2026-11-21T11:21:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 87
undervaluedScore: 59
maintainers: ["Crank-Git"]
openGraphImageUrl: "https://opengraph.githubassets.com/27c5568e24853ba9700f0b3feeaf01650da82c7e44a84f29c3feed45f8797b2b/Crank-Git/MTFWBuilder"
---

# MTFWBuilder

A self-hosted web application for generating Meshtastic device configurations and building custom firmware. Configure your device, bake settings into firmware, and download ready-to-flash binaries — all from one interface.

## Status

The v2 API under `/api/v1` exists. The pages still call v1 URLs, so the flow from the pages does not work end to end. Two planned features repair it:

- `build-pipeline-repair` (`docs/specs/features/06-build-pipeline-repair.md`)
- `frontend-htmx` (`docs/specs/features/07-frontend-htmx.md`)

In this README, "planned" marks a part that the code does not do yet. The spec in `docs/specs/` describes the planned project.

## What It Does

**MTFWBuilder is the only tool in the Meshtastic ecosystem that combines configuration generation with firmware compilation in a self-hosted package.**

- The official [Web Flasher](https://flasher.meshtastic.org/) flashes pre-built firmware
- The [Python CLI](https://github.com/meshtastic/Meshtastic-python) configures devices after flashing
- **MTFWBuilder bakes your config INTO the firmware before flashing**
