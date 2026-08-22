---
repo: "esphome/device-builder-frontend"
name: "device-builder-frontend"
description: "Frontend for the ESPHome Device Builder"
readmeQualityOk: true
url: "https://github.com/esphome/device-builder-frontend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 26
forks: 15
openIssues: 0
closedIssues: 262
watchers: 0
contributors: 29
recentReleases: 0
createdAt: "2026-03-03T14:29:38Z"
lastCommitAt: "2026-08-22T04:07:13Z"
lastReleaseAt: "2026-05-01T23:01:44Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 100
undervaluedScore: 49
maintainers: ["bdraco", "dependabot[bot]", "wouterpotters"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce8deb4964f3e664119116e752e38ed809dd2c496adb460e4e63a9e288565d79/esphome/device-builder-frontend"
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
