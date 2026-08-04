---
repo: "MrGreenBoutiqueOffices/knx2home"
name: "knx2home"
description: "Convert KNX file to YAML code for Home Assistant"
readmeQualityOk: true
url: "https://github.com/MrGreenBoutiqueOffices/knx2home"
homepage: "https://knx2home.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["home-assistant", "knx", "nextjs", "hacktoberfest"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-09-16T16:03:33Z"
lastCommitAt: "2026-08-04T06:11:02Z"
lastReleaseAt: "2025-12-11T20:36:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 58
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/66e05865bc493cc2d87c5f7637eda14681a5aa1f13fcf084a141e0cb5fdad1e3/MrGreenBoutiqueOffices/knx2home"
---

# KNX2HOME Parser

This project is a **Next.js application** that converts KNX configuration files into **Home Assistant compatible YAML configuration**. It automatically detects entities (lights, switches, covers, sensors, …) and annotates them for direct use in Home Assistant.

## Key Features

- 🔍 **KNX Group Address Parsing**<br>
  Converts KNX addresses and DPTs into Home Assistant entities.
- ⚡ **Smart Heuristics**<br>
  Automatically guesses the correct entity type (light, switch, cover, sensor, …).
- 📝 **YAML Generator**<br>
  Produces valid Home Assistant configurations (`configuration.yaml` or packages).
- 🗂 **Aggregate View**<br>
  Combines related entities into logical sets (e.g., covers with state and position).
- 🎨 **Customizable Entities**<br>
  Allows manual adjustments and overrides for entity types and names.
- 🌍 **Next.js Frontend**<br>
  Web interface for uploading, previewing, and exporting configurations.
- 🔁 **Export/Import Configuration**<br>
   Save your parsed catalog plus manual overrides to a JSON file and load it later or share with colleagues; the snapshot button sits next to the reset/export controls in the workflow header and opens a…
