---
repo: "opengeospatial/developer-website"
name: "developer-website"
description: "OGC Developer Website"
readmeQualityOk: true
url: "https://github.com/opengeospatial/developer-website"
homepage: "https://developer.ogc.org/"
language: "HTML"
languages: ["HTML", "Pug"]
languagePcts: [36, 32]
topics: ["developer", "encodings", "ogc", "ogcapi", "openapi"]
stars: 7
forks: 2
openIssues: 2
closedIssues: 16
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2020-11-30T13:24:04Z"
lastCommitAt: "2026-11-25T13:20:58Z"
lastReleaseAt: "2025-07-08T17:06:15Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 75
maintainers: ["doublebyte1", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/90f06ff13cb5e2e48944cc93a7550d48d7d1ae75070fe1eca954c5f9bedbe940/opengeospatial/developer-website"
---

# OGC Developer Site

OGC Developer website built with **Pug** templates, **SCSS**, and static asset bundling.

## Prerequisites

- **Node.js** >= 18.x
- **npm** (comes with Node.js)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Build the site
npm run build

# 3. Serve the built site (port 3000)
npm run serve
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm install` | Install all dependencies |
| `npm run build` | Clean the `dist/` folder and build the site |
| `npm run serve` | Serve the built site on `localhost:3000` |
| `npm run watch` | Watch mode — rebuild on file changes (`.pug`, `.scss`, assets, JS) |
