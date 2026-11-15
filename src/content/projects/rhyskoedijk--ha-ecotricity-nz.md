---
repo: "rhyskoedijk/ha-ecotricity-nz"
name: "ha-ecotricity-nz"
description: "Unofficial Home Assistant integration for Ecotricity NZ: plan prices, time-of-use periods and half-hourly usage, with Energy dashboard statistics."
readmeQualityOk: true
url: "https://github.com/rhyskoedijk/ha-ecotricity-nz"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ecotricity", "electricity", "energy", "energy-monitoring", "hacs", "hacs-integration", "home-assistant", "home-assistant-custom-component", "home-assistant-integration", "homeassistant"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-10-11T09:29:17Z"
lastCommitAt: "2026-11-15T08:28:42Z"
lastReleaseAt: "2026-10-21T09:53:26Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 38
maintainers: ["rhyskoedijk", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/73c6d401c18b75cfd018d4fdfac22d3f63455d6b80b043f8a30e1ee9ffa7345b/rhyskoedijk/ha-ecotricity-nz"
---

# Ecotricity NZ for Home Assistant

A custom integration for [Ecotricity NZ](https://ecotricity.co.nz) customers. Bring your plan's prices, time-of-use periods, consumption, and billing data into Home Assistant.

This is a community integration and isn't affiliated with Ecotricity NZ. The Ecotricity name and logo belong to Ecotricity NZ and are used only to identify the service.

## Features

- **Current price sensors**: the import and export prices you're paying right now. Each price is broken down into supplier, network and levy rates in the sensor's attributes, for finer-grained reporting.
- **Time-of-use period sensors**: the current TOU period, today's windows, and when the period or price next changes. Use them in your automations and utility meter helpers to make the most of the cheaper hours.
- **Pricing season sensors**: the current Ecotricity and network pricing season, and when the next season starts. Prices can change throughout the year, especially between summer and winter.
- **Current time-of-use chart image**: Ecotricity's current pricing chart as an image, to show on your dashboards.
- **Usage history**: hourly import, export and carbon savings statistics, exactly…
