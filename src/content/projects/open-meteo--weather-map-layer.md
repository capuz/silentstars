---
repo: "open-meteo/weather-map-layer"
name: "weather-map-layer"
description: "Weather Map Layer for MapLibre/Mapbox GL JS powered by Open-Meteo OMfiles"
readmeQualityOk: true
url: "https://github.com/open-meteo/weather-map-layer"
homepage: "https://maps.open-meteo.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["leaflet", "mapbox", "maplibre", "open-meteo", "openlayers", "weather", "weather-map", "cesium"]
stars: 51
forks: 13
openIssues: 11
closedIssues: 95
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2025-10-10T09:33:31Z"
lastCommitAt: "2026-10-07T10:31:32Z"
lastReleaseAt: "2025-12-22T14:27:41Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 54
maintainers: ["vincentvdwal", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/391f1683fe37d9a81848cbc70cbb01f20d30644f3aae01f197c530f315d9cd78/open-meteo/weather-map-layer"
---

# Open-Meteo Weather Map Layer

> **⚠️ Notice**
> This package is still under construction and is not yet fully production-ready.
> API changes may occur and some features might be incomplete.

## Overview

This repository serves as a demonstration of the **Open-Meteo File Protocol** (`om://`) with Mapbox / MapLibre GL JS. The `om://` scheme is a custom [MapLibre protocol](https://maplibre.org/maplibre-gl-js/docs/API/functions/addProtocol/) registered via `addProtocol`. The `.om` files are hosted on an S3 bucket and can be accessed directly through the protocol handler.

The core weather data generation and API is hosted in the [open-meteo/open-meteo](https://github.com/open-meteo/open-meteo) repository.

An interactive demo is available at [maps.open-meteo.com](https://maps.open-meteo.com/).

## Installation

### Node

```bash
npm install @openmeteo/weather-map-layer
```

```ts
// ...
import { omProtocol } from '@openmeteo/weather-map-layer';

// Standard MapLibre GL JS setup
// ...

maplibregl.addProtocol('om', omProtocol);

const omUrl = `https://openmeteo.s3.amazonaws.com/data_spatial/dwd_icon/latest.json?variable=temperature_2m`;

map.on('load', () => {…
