---
repo: "portolan-sdi/portolan-cli"
name: "portolan-cli"
description: "A CLI tool for managing cloud-native geospatial data"
readmeQualityOk: true
url: "https://github.com/portolan-sdi/portolan-cli"
homepage: "https://portolan-sdi.github.io/portolan-cli/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 21
forks: 7
openIssues: 50
closedIssues: 334
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-01-14T09:43:59Z"
lastCommitAt: "2026-08-28T15:35:22Z"
lastReleaseAt: "2026-03-19T17:10:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 54
maintainers: ["nlebovits", "cayetanobv", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1134131118/63bee967-3e60-43f9-98de-a8dfe8b69812"
discussionCount: 18
---

# Portolan CLI

Portolan is an opinionated specification for serverless spatial data infrastructures.
It defines how publishers store, organize, document, and serve geospatial data as static files in their own storage.
Every Portolan catalog should offer a predictable, high-quality experience for publishers, people, and agents.

Portolan builds on existing standards instead of replacing them.
GeoParquet and PMTiles serve vector data, while COG serves raster data.
STAC provides a consistent catalog structure and index.
Required README and AGENTS.md files explain each catalog to people and agents.
The specification also covers operational details such as spatial ordering, bounding boxes, and CORS.

This repository contains the Portolan CLI, an implementation of the specification.
It helps publishers:

- Build [STAC](https://stacspec.org/en/) catalogs with [GeoParquet](https://geoparquet.org/) and [COG](https://cogeo.org/) assets.
- Extract ArcGIS, WFS, and Carto sources.
- Generate thumbnails, [PMTiles](https://docs.protomaps.com/pmtiles/), MapLibre styles, and STAC GeoParquet indexes.
- Track collection versions and checksums without a database.
- Validate catalog metadata,…
