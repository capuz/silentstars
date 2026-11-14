---
repo: "honua-io/honua-sdk-js"
name: "honua-sdk-js"
description: "TypeScript geospatial SDK: one protocol-neutral contract over GeoServices REST, OGC API, STAC, WMS/WMTS/WFS, and OData — MapLibre-first runtime, GIS widget-migration codemod, and a platform-free MCP server."
readmeQualityOk: true
url: "https://github.com/honua-io/honua-sdk-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["geojson", "geospatial", "gis", "javascript", "mcp", "npm", "react", "sdk", "typescript", "honua"]
stars: 5
forks: 1
openIssues: 73
closedIssues: 732
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-03T15:37:52Z"
lastCommitAt: "2026-11-14T10:42:28Z"
lastReleaseAt: "2026-05-11T06:01:34Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 66
maintainers: ["mikemcdougall", "honua-io-bot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1171771524/4d212580-7f19-4f81-9608-1a2a86234f02"
---

# Honua JS SDK

> **Native application path:** [gRPC for live data and edits; PMTiles, GeoParquet and COG through the CDN](https://github.com/honua-io/honua-sdk-js/blob/HEAD/docs/native-data-paths.md). Start there for browser gRPC-Web setup, signed private URLs and regeneration after changes. OGC API and GeoServices REST examples below are compatibility workflows.

> **MapLibre renders the map. Honua connects, queries, explains, and mounts the data.**

`@honua/sdk-js` is the integration layer for the open map stack: typed clients for the
protocols your data already speaks (Esri GeoServices, OGC API Features / Tiles / Maps /
Processes, STAC, WMS, WMTS, WFS 2.0, OData v4), a one-call data→map bridge and MapLibre
runtime, provider-pluggable geocoding and routing, and a drop-in ArcGIS compatibility
layer with a codemod. MapLibre is the stable renderer path; the optional Cesium scene
surface is beta on `@honua/app-platform`, and Kepler.gl integration is experimental.

## Native application data

Use `HonuaClient` with explicit `transport: "grpc-web"` for live feature queries.
Follow the [native data guide](https://github.com/honua-io/honua-sdk-js/blob/HEAD/docs/native-data-paths.md)…
