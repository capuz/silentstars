---
repo: "opengeos/maplibre-gl-swipe"
name: "maplibre-gl-swipe"
description: "A MapLibre plugin for swiping layers to compare them side by side."
url: "https://github.com/opengeos/maplibre-gl-swipe"
homepage: "http://opengeos.org/maplibre-gl-swipe"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["geospatial", "maplibre", "maplibre-gl-js", "mapping", "react", "typescript"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-01-13T01:55:10Z"
lastCommitAt: "2026-06-25T01:33:06Z"
lastReleaseAt: "2026-06-20T22:50:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 30
maintainers: ["giswqs", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5a4ad1a1e995f0dbbdecf04a0a56f5c936c96bd16d8e61b92a405284e629e4c/opengeos/maplibre-gl-swipe"
discussionCount: 1
---

# maplibre-gl-swipe

A MapLibre GL plugin for swiping layers to compare them side by side.

## Features

- **Draggable slider** - Interactive slider to compare layers
- **Vertical and horizontal orientation** - Compare left/right or top/bottom
- **Activate/deactivate toggle** - Temporarily disable swipe without removing the control
- **Programmatic API** - Set layers and position via code
- **Interactive GUI** - Panel to select layers for comparison
- **React support** - React wrapper component and hooks
- **TypeScript** - Full type definitions included
- **Customizable** - CSS classes for styling

## Installation

```bash
npm install maplibre-gl-swipe
```

## Quick Start

### Vanilla JavaScript

```typescript
import maplibregl from "maplibre-gl";
import { SwipeControl } from "maplibre-gl-swipe";
import "maplibre-gl-swipe/style.css";

const map = new maplibregl.Map({
  container: "map",
  style: "https://demotiles.maplibre.org/style.json",
  center: [-74.5, 40],
  zoom: 9,
});

map.on("load", () => {
  // Add your layers first...

  // Create swipe control
  const swipe = new SwipeControl({
    orientation: "vertical",
    position: 50,
    leftLayers: ["satellite-layer"],…
