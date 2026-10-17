---
repo: "openstreetmap-polska/openaedmap-backend"
name: "openaedmap-backend"
description: "❤️ Backend powering OpenAEDMap.org — an OpenStreetMap's life-saving AED map"
readmeQualityOk: true
url: "https://github.com/openstreetmap-polska/openaedmap-backend"
homepage: "https://OpenAEDMap.org"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["aed", "defibrillator", "mapbox-vector-tile", "openstreetmap", "overpass-api", "python", "emergency", "geojson", "gis", "public-health"]
stars: 12
forks: 1
openIssues: 2
closedIssues: 9
watchers: 6
contributors: 10
recentReleases: 0
createdAt: "2022-08-21T12:26:13Z"
lastCommitAt: "2026-10-17T07:59:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 58
maintainers: ["Zaczero"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e2c93e91cbbf098971e40ad4e51af3be63dbffa46af1210e8215f4539c130da/openstreetmap-polska/openaedmap-backend"
---

# OpenAEDMap Backend 🌍❤️

Ever wanted to be a superhero?
OpenAEDMap gives you that chance.
By pinpointing AED locations via OpenStreetMap, we equip you with the power to save lives.
Save a life today by visiting [OpenAEDMap.org](https://openaedmap.org).

**🔧 This repository hosts the backend code.**

For frontend implementations, please see [openaedmap-frontend](https://github.com/openstreetmap-polska/openaedmap-frontend).

### 🌟 Core Features

- **Automated OSM Updates:** Downloads data and updates from OpenStreetMap.
- **AED Information:** Serve comprehensive details about specific AED locations.
- **Vector Tiles:** Create and serve vector tiles for map rendering.
- **Regional GeoJSON:** Generate downloadable GeoJSON files by region.
- **Photo Integration:** Allows uploading and viewing of photos of individual AEDs.

### 🌐 Deployed Instances

- **Production:** [openaedmap.org](https://openaedmap.org)
- **Development:** [dev.openaedmap.org](https://dev.openaedmap.org), automatically deployed after main passes CI.

## 🛠️ Local Development

### Getting Started

Before you jump in, make sure to install the [❄️ Nix](https://nixos.org/download) package manager.
It's your shortcut…
