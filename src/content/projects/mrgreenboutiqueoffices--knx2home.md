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
stars: 7
forks: 1
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-09-16T16:03:33Z"
lastCommitAt: "2026-10-15T08:32:01Z"
lastReleaseAt: "2025-12-11T20:36:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 71
maintainers: ["renovate[bot]", "klaasnicolaas"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8ef7ca5f7242b681425627a407ddb77ff00953a2e4404fa155a9600b9dd6994/MrGreenBoutiqueOffices/knx2home"
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
