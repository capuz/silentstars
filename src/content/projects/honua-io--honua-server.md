---
repo: "honua-io/honua-server"
name: "honua-server"
description: "Cloud-native multi-protocol geospatial server — GeoServices REST, OGC API, WMS/WFS/WMTS/WCS, STAC, OData v4, vector tiles, MCP, and gRPC, backed by PostGIS"
readmeQualityOk: true
url: "https://github.com/honua-io/honua-server"
language: "C#"
languages: ["C#"]
languagePcts: [91]
topics: ["arcgis", "dotnet", "geoservices", "geospatial", "gis", "grpc", "honua", "map-server", "mcp", "odata"]
stars: 5
forks: 2
openIssues: 276
closedIssues: 2066
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-17T19:16:29Z"
lastCommitAt: "2026-09-22T08:45:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 70
maintainers: ["mikemcdougall", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1118448533/d9201297-c476-4885-8048-b1f015685985"
discussionCount: 1
---

# Honua Server

**Cloud-native geospatial server.** One container exposes the same PostGIS-backed data through every major GIS protocol — GeoServices REST (FeatureServer, MapServer, ImageServer, Geometry, GPServer), OGC API (Features, Maps, Tiles, Coverages, Processes), classic OGC WMS/WFS/WMTS/WCS, STAC, OData v4, vector tiles (MVT/TileJSON), Terrain-RGB and elevation APIs, 3D Tiles, MCP for AI agents, and gRPC. Honua provides protocol-level compatibility for selected, operation-scoped Esri client workflows; support is bounded by the published [GeoServices parity matrix](https://github.com/honua-io/honua-server/blob/HEAD/docs/reference/compatibility/geoservices-parity.md) and [cross-client certification matrix](https://github.com/honua-io/honua-server/blob/HEAD/docs/gis/CROSS_CLIENT_CERTIFICATION_MATRIX.md). QGIS, MapLibre, Excel, and Power BI use the same layers — no ETL, no duplication, no GDAL toolchain to install.

## Status

Honua Server is open core under the [Elastic License 2.0](https://github.com/honua-io/honua-server/blob/HEAD/LICENSE). The GA-tier core (protocol surfaces, editing, imports, auth, operations) is production-ready and tracked under the v1.0 (GA) milestone.…
