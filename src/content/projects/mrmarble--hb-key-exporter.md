---
repo: "MrMarble/hb-key-exporter"
name: "hb-key-exporter"
description: "Userscript for managing HumbleBundle keys"
readmeQualityOk: true
url: "https://github.com/MrMarble/hb-key-exporter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["export", "humblebundle", "keys", "userscript", "manager", "bulk"]
stars: 19
forks: 4
openIssues: 3
closedIssues: 9
watchers: 2
contributors: 4
recentReleases: 1
createdAt: "2025-05-05T20:34:30Z"
lastCommitAt: "2026-09-11T08:16:02Z"
lastReleaseAt: "2026-07-02T21:50:12Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 57
maintainers: ["dependabot[bot]", "MrMarble", "AlexanderTheGrey"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/978335447/f396ee5e-2268-4e1b-8d95-190398962e8c"
fundingLinks: ["GITHUB:https://github.com/MrMarble", "KO_FI:https://ko-fi.com/mrmarble", "CUSTOM:https://paypal.me/mrmarble"]
---

# Humble Bundle Key Exporter

Userscript to assist in key management for Humble Bundle games.

## Features

- Easily view and copy keys
- Advanced filtering options
- Export in various formats:
  - CSV (all data)
  - ASF (`<name><TAB><key>`)
  - TXT (`<key>`)
- Reveal hidden keys
- Create Gift links
- Show purchase dates for owned Steam games
- Bulk claim keys!

## Installation

1. Install [Violentmonkey](https://violentmonkey.github.io/) or similar browser extension.
2. Get the [latest version](https://github.com/MrMarble/hb-key-exporter/releases/latest/download/hb-key-exporter.user.js) from the releases page.
3. Done

## Usage

Go to Humble Bundle [keys page](https://www.humblebundle.com/home/keys), open the collapsible menu by clicking on the `Advanced Exporter` button at the top of the main section.

> [!NOTE]
> You need to be signed in to Steam for some of the features to work, such as showing purchase dates and claiming keys.

## Contributing

### Build

The toolchain is pinned in `mise.toml` (Node 24, pnpm 10). With
[mise](https://mise.jdx.dev/) installed, `mise install` provisions both;
otherwise use [pnpm](https://pnpm.io/) with Node >= 20.18.0.

```bash
pnpm install
pnpm…
