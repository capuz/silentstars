---
repo: "esphome/device-builder-frontend"
name: "device-builder-frontend"
description: "Frontend for the ESPHome Device Builder"
readmeQualityOk: true
url: "https://github.com/esphome/device-builder-frontend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 28
forks: 20
openIssues: 8
closedIssues: 334
watchers: 0
contributors: 34
recentReleases: 0
createdAt: "2026-03-03T14:29:38Z"
lastCommitAt: "2026-09-28T10:06:41Z"
lastReleaseAt: "2026-05-01T23:01:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 99
undervaluedScore: 52
maintainers: ["bdraco", "dependabot[bot]", "tomaszduda23"]
openGraphImageUrl: "https://opengraph.githubassets.com/5675555409fb7a832da1fff8f2cf60f5269b868fe730fdaab0645f895a616653/esphome/device-builder-frontend"
fundingLinks: ["CUSTOM:https://www.openhomefoundation.org"]
---

# ESPHome Device Builder Dashboard — Frontend

A web-based dashboard for managing, configuring, and deploying ESPHome IoT device firmware. Built with Lit web components and TypeScript.

> **This repository contains the frontend source only.** The dashboard runs as part of the **[ESPHome Device Builder Dashboard](https://github.com/esphome/device-builder)**, which ships a prebuilt copy of this frontend bundled in. End users should follow the install / run instructions in the backend repo — there's nothing to deploy from here on its own.

## Screenshots

Configured devices in the table view, with the discovered-devices banner above:

Discovered devices expanded — each card surfaces the project metadata and offers a one-click "Take control" adoption flow:

Create-device wizard's board picker — searchable, filterable by chip family, with curated featured boards up front:

## Tech stack

- **[Lit](https://lit.dev/)** — Web components framework
- **TypeScript** — Strict mode throughout
- **[Rspack](https://rspack.dev/)** — Rust-based bundler
- **[Web Awesome](https://www.webawesome.com/)** — UI component library (Home Assistant variant)
- **[CodeMirror](https://codemirror.net/)** — YAML…
