---
repo: "omphteliba/ha-speidel-braumeister"
name: "ha-speidel-braumeister"
description: "Integrate Speidel Braumeister into Home Assistant"
readmeQualityOk: true
url: "https://github.com/omphteliba/ha-speidel-braumeister"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["beer", "home-automation", "homebrewing"]
stars: 7
forks: 2
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-05-14T21:04:07Z"
lastCommitAt: "2026-10-31T09:53:04Z"
lastReleaseAt: "2026-03-03T10:08:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 52
maintainers: ["omphteliba", "DanielP-1337"]
openGraphImageUrl: "https://opengraph.githubassets.com/acaeac10acfbe7ea68731bb02c2c54372a00496643b3bf27be7ca896d38e5ac5/omphteliba/ha-speidel-braumeister"
---

# Speidel Braumeister Home Assistant Integration for Firmware V1.1.27 Sep 12 2018

A Home Assistant integration for Speidel Braumeister brewing systems via the My Speidel Cloud API. This integration allows you to monitor your Braumeister brewing process with real-time data and recipe information. It only works for Speidel Braumeister before the 2021 models at the moment.

## Features

### Sensors

| Sensor | Description |
|--------|-------------|
| Connection Status | Shows the connection status: `online`, `offline`, or `invalid_uuid` |
| Temperature | Current temperature reading from the Braumeister |
| Target Temperature | The target temperature for the current phase |
| Pump Status | Current pump state (Ein/Aus - German for On/Off) |
| Heating Status | Current heating element state (Ein/Aus) |
| Process Status | Current brewing process status (running, idle, etc.) |
| Current Phase | Current brewing phase as reported by the device in German (e.g. Einmaischen = mash-in, Rast = rest, Kochen = boil) |
| Remaining Time | Estimated remaining time for the current phase |
| Brew Name | Name of the current brew/recipe |
| Device Type | Braumeister model (e.g., "Braumeister 20 Liter") |…
