---
repo: "mwkorver/deckgl-s3-cog-s1m"
name: "deckgl-s3-cog-s1m"
description: "Client-side COG rendering and serverless GeoParquet spatial indexing — NAIP imagery draped on USGS 3DEP 1-m terrain in the browser (deck.gl + DuckDB + Lambda)"
readmeQualityOk: true
url: "https://github.com/mwkorver/deckgl-s3-cog-s1m"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [56, 21]
topics: ["3dep", "aws-lambda", "cloud-optimized-geotiff", "deck-gl", "duckdb", "geoparquet", "geospatial", "maplibre", "naip", "serverless"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-27T03:51:16Z"
lastCommitAt: "2026-07-25T06:00:57Z"
lastReleaseAt: "2026-07-23T04:44:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 50
maintainers: ["mwkorver"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1281892969/13672344-1b4a-485c-ab13-d34dbcc0499b"
---

# deckgl-s3-cog-s1m

A browser that streams federal aerial imagery (USDA NAIP) and 1-meter USGS terrain (3DEP S1M) straight from public S3 as Cloud-Optimized GeoTIFFs, draping the imagery over 3D terrain on the client GPU with deck.gl — no tile server, no terrain server, no rendering backend.
Spatial discovery is serverless too: in-process DuckDB queries a Hive-partitioned GeoParquet index on S3, so there is no always-on PostGIS or Elasticsearch behind the search.

*NAIP aerial imagery draped over the USGS 3DEP Seamless 1-meter DEM, rendered client-side in the browser directly from Cloud-Optimized GeoTIFFs.*

## Run it in 60 seconds

```bash
git clone --recurse-submodules https://github.com/mwkorver/deckgl-s3-cog-s1m.git
cd deckgl-s3-cog-s1m
make run        # builds and serves everything in Docker (needs Docker only)
```

Then open **http://localhost:8089/viewer/**. The viewer and basemap load straight away; imagery, footprint search, and 3D terrain need AWS credentials (`~/.aws` plus `AWS_PROFILE` in `app/.env`, which `make run` creates from the example). Run `make` on its own to see the other targets (`test`, `lint`, `deps`, …). Full setup, tests, and AWS deployment are in…
