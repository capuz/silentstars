---
repo: "jaakla/open-gis"
name: "open-gis"
description: "AI Skills for Free and Open Source GIS (geographical information systems) tools"
readmeQualityOk: true
url: "https://github.com/jaakla/open-gis"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-skill", "gis", "open-source"]
stars: 67
forks: 11
openIssues: 3
closedIssues: 3
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-05-03T15:43:36Z"
lastCommitAt: "2026-08-28T12:13:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 25
maintainers: ["jaakla", "kirkeN"]
openGraphImageUrl: "https://opengraph.githubassets.com/e82483267b364f11746066fb9cf1163bfbc27eaa9125422409931420c2b0f9bf/jaakla/open-gis"
---

# open-gis

**Geospatial questions →  reproducible, validated GIS analysis project (with very nice interactive map).**

Install:
```bash
npx skills add jaakla/open-gis -g
```

Open-gis gives your favorite AI agent: Claude Code, Codex, Cursor, OpenCode, and 50+ other agents a production workflow from **authoritative data discovery** through analysis to interactive web and GIS deliverables. Material workflows become inspectable and repeatable well-defined projects in a `yaml` file with pinned sources, explicit assumptions and CRS choices, deterministic processing, isolated overrides, machine-readable validation, and surfaced provenance.

It is open-first and cloud-native by default, built on shoulders of the awesome Open GIS stack: STAC for discovery; GeoParquet, COG, and PMTiles for storage and delivery; DuckDB and PostGIS for compute; and QGIS, MapLibre, and Martin for presentation. It also uses GDAL/OGR, GeoPandas, xarray/rioxarray, PDAL, routing engines, spatial SQL, and pragmatic hosted services when scale or reliability requires them.

## What's in this repo

- [SKILL.md](https://github.com/jaakla/open-gis/blob/HEAD/SKILL.md) — the skill entry point: triggers, global defaults,…
