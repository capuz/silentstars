---
repo: "geolens-io/geolens"
name: "geolens"
description: "Self-hosted geospatial data catalog with semantic search (pgvector), OGC/STAC APIs, and map builder. Built on FastAPI, PostGIS, React, and MapLibre."
readmeQualityOk: true
url: "https://github.com/geolens-io/geolens"
homepage: "https://getgeolens.com"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [69, 29]
topics: ["cloud-optimized-geotiff", "data-catalog", "fastapi", "geojson", "geospatial", "gis", "maplibre", "ogc-api", "pgvector", "postgis"]
stars: 281
forks: 41
openIssues: 43
closedIssues: 1060
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2026-03-22T00:11:06Z"
lastCommitAt: "2026-10-25T02:27:10Z"
lastReleaseAt: "2026-07-10T17:06:26Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 99
undervaluedScore: 31
maintainers: ["ishiland", "Nitjsefnie", "swastiktawate"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1188344746/f3b134b0-6ac0-4fc6-8428-b76dbdb4bb4b"
discussionCount: 6
---

[English](https://github.com/geolens-io/geolens/blob/HEAD/README.md) · [Español](https://github.com/geolens-io/geolens/blob/HEAD/README.es.md) · [Français](https://github.com/geolens-io/geolens/blob/HEAD/README.fr.md) · [Deutsch](https://github.com/geolens-io/geolens/blob/HEAD/README.de.md) · [简体中文](https://github.com/geolens-io/geolens/blob/HEAD/README.zh.md)

GeoLens is for teams whose spatial data is spread across file shares, PostGIS databases, web
services and STAC catalogs. It puts that data in one searchable catalog, records where each
dataset came from and checks whether the source is still current. Teams build and share maps in
the browser, and QGIS, scripts and AI agents read the same data through OGC API and STAC. It runs
on your own servers with Docker Compose, sends no telemetry and is licensed under Apache 2.0.

The [demo](https://demo.getgeolens.com) needs no install or account; sign in with Google, GitHub
or Microsoft to use the map builder. Demo data may be wiped at any time.

## A closer look

## How it fits together

```mermaid
flowchart LR
    subgraph IN ["Bring data in"]
      F["Files<br/>GeoPackage · Shapefile · GeoParquet<br/>GeoTIFF · COPC · 3D Tiles"]…
