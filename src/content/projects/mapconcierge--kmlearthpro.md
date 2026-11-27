---
repo: "mapconcierge/KMLEarthPro"
name: "KMLEarthPro"
description: "Digital Earth Browser as an alternative to Google Earth Pro"
originalDescription: "Google Earth Pro の代替 Digital Earth Browser"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/mapconcierge/KMLEarthPro"
homepage: "https://mapconcierge.github.io/KMLEarthPro/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 14
forks: 0
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-15T01:45:27Z"
lastCommitAt: "2026-11-27T12:53:12Z"
lastReleaseAt: "2026-11-26T20:24:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 73
undervaluedScore: 39
maintainers: ["mapconcierge"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ff6e3d0318203d65c62bf8674a0d0bb302257bfaf8468c7f70a6e6210afd9f3/mapconcierge/KMLEarthPro"
---

# KML Earth Pro

Digital Earth Browser as an alternative to Google Earth Pro — OGC KML 2.3 compliant OSS Web application

**A Google Earth Pro alternative Digital Earth Browser — OGC KML 2.3 compliant OSS web application**

---

## Overview / 概要

KML Earth Pro is an OSS that achieves, in the browser, operability and KML compatibility equivalent to Google Earth Pro.

- **KML/KMZ support**: Loading, execution, and saving of the full OGC KML 2.3 specification
- **3D engine**: [Navara](https://navara.world/) (default) / [CesiumJS](https://cesium.com/) (switchable)
- **2D engine**: [MapLibre GL JS](https://maplibre.org/)
- **Static hosting**: Publishable for free from GitHub Pages (no required server or paid service)
- **License**: Apache-2.0

## Usage / 使い方

1. [Open KML Earth Pro](https://mapconcierge.github.io/KMLEarthPro/)
2. Drag and drop a KML/KMZ file, or load it from the left sidebar
3. Operate the globe (Google Earth Pro compatible controls)

## Local Development / ローカル開発

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Type check
pnpm typecheck

# Production build
pnpm build
```
