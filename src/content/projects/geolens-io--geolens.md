---
repo: "geolens-io/geolens"
name: "geolens"
description: "Self-hosted geospatial data catalog with semantic search (pgvector), OGC/STAC APIs, and map builder. Built on FastAPI, PostGIS, React, and MapLibre."
readmeQualityOk: true
url: "https://github.com/geolens-io/geolens"
homepage: "https://getgeolens.com"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [64, 34]
topics: ["cloud-optimized-geotiff", "data-catalog", "fastapi", "geojson", "geospatial", "gis", "maplibre", "ogc-api", "pgvector", "postgis"]
stars: 187
forks: 24
openIssues: 18
closedIssues: 462
watchers: 4
contributors: 3
recentReleases: 10
createdAt: "2026-03-22T00:11:06Z"
lastCommitAt: "2026-08-17T03:53:22Z"
lastReleaseAt: "2026-07-10T17:06:26Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 99
undervaluedScore: 36
maintainers: ["ishiland", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1188344746/f3b134b0-6ac0-4fc6-8428-b76dbdb4bb4b"
discussionCount: 4
---

# GeoLens

[English](https://github.com/geolens-io/geolens/blob/HEAD/README.md) | [Español](https://github.com/geolens-io/geolens/blob/HEAD/README.es.md) | [Français](https://github.com/geolens-io/geolens/blob/HEAD/README.fr.md) | [Deutsch](https://github.com/geolens-io/geolens/blob/HEAD/README.de.md)

**Your team's self-hosted spatial data hub: searchable, mappable, and shareable in one place.**

GeoLens is an open-source spatial data hub for GIS and data teams: one place to find and work with data on infrastructure you control, with no telemetry. GeoLens itself phones home to nothing. (Features you opt into can make outbound calls: AI assist to your chosen OpenAI-compatible endpoint or Anthropic key, OAuth/OIDC sign-in, SMTP, basemap tiles, remote/S3 data sources, and off-site backups.) Upload files, create datasets in the browser, register tables already in GeoLens's own PostGIS database without copying them, import one-shot copies from WFS, ArcGIS FeatureServer, or OGC API Features, or reference remote STAC assets live. GeoLens records each dataset's origin, indexes catalog metadata with pg_trgm for fuzzy search out of the box (pgvector adds semantic ranking once you configure…
