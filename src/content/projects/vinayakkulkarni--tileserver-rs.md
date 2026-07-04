---
repo: "vinayakkulkarni/tileserver-rs"
name: "tileserver-rs"
description: "High-performance Rust tile server for PMTiles, MBTiles, PostGIS, and Cloud Optimized GeoTIFFs"
url: "https://github.com/vinayakkulkarni/tileserver-rs"
homepage: "https://tileserver.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
topics: ["gis", "maplibre-gl-js", "openmaptiles", "raster-map", "raster-tiles", "rust", "tileserver", "vector-tiles", "maplibre-rs", "tileserver-rs"]
stars: 44
forks: 3
openIssues: 9
closedIssues: 45
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-01-10T06:07:55Z"
lastCommitAt: "2026-07-04T06:12:18Z"
lastReleaseAt: "2026-01-09T11:35:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 56
maintainers: ["dependabot[bot]", "vinayakkulkarni", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/46c68fc8f3119f7a66aab95ff7110229e9566c6351751252c6f89fd8759cd067/vinayakkulkarni/tileserver-rs"
---

# tileserver-rs 🦀

High-performance vector tile server built in Rust with a modern Nuxt 4 frontend.

## Features

- **PMTiles Support** - Serve tiles from local and remote PMTiles archives
- **MBTiles Support** - Serve tiles from SQLite-based MBTiles files
- **Native Raster Rendering** - Generate PNG/JPEG/WebP tiles using MapLibre Native (C++ FFI)
- **MLT (MapLibre Tiles)** - Serve and transcode MLT tiles with MLT↔MVT on-the-fly conversion (feature-gated)
- **PostgreSQL Out-DB Rasters** - Serve VRT/COG tiles via PostGIS functions with dynamic filtering
- **OGC API Features** - PostGIS tables as OGC-spec collections: read, filter with CQL2, transform CRS, write (CRUD), and introspect schemas
- **STAC Catalog Sources** - Serve COGs directly from any STAC API (static, dynamic per-tile bbox, multi-asset mosaic)
- **SFTP Sources** - Serve PMTiles straight over SSH (`sftp://` URLs) with key-based auth (feature-gated)
- **Static Map Images** - Create embeddable map screenshots (like Mapbox/Maptiler Static API)
- **Embeddable Maps & OG Images** - `/embed/{style}` iframe pages with postMessage API + `/og/{style}` social cards
- **Composite Tiles** - Merge multiple vector sources into one…
