---
repo: "UsikianLevon/draw-libre"
name: "draw-libre"
description: "DrawLibre is a drawing library designed for use with maplibre-gl.js and mapbox-gl.js. It supports the creation of linestrings and polygons with a user-friendly interface."
readmeQualityOk: true
url: "https://github.com/UsikianLevon/draw-libre"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["mapbox-gl-js", "maplibre-gl-js", "draw", "drawing", "mapbox", "maplibre", "maps"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-07-25T08:09:50Z"
lastCommitAt: "2026-09-17T08:51:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 61
maintainers: ["UsikianLevon"]
openGraphImageUrl: "https://opengraph.githubassets.com/15c7891dead33c32d68802b1d4f829b3025ebb2e160259aa99878ace4e8def62/UsikianLevon/draw-libre"
---

# DrawLibre

A drawing tool for [MapLibre GL](https://maplibre.org/) and [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/) maps. Draw linestrings (open and closed) and polygons with undo/redo, geometry breaking, and full style customization.

Works with maplibre-gl v2–v6, mapbox-gl v1–v3, and all projections.

**React users:** check out [draw-libre-react](https://github.com/UsikianLevon/draw-libre-react).

## Features

- Draw linestrings and polygons
- Close open linestrings, break closed geometries
- Undo/redo
- Remove a point with the cross button that appears when you hover or tap it
- Manual or automatic midpoint generation
- Initialize from existing GeoJSON
- Customizable controls, labels, and layer styles
- Event-driven: subscribe to point add/remove/move, mode changes, save, etc.

### Point generation modes

**Manual** — click on a line segment to insert a point:

**Auto** — midpoints are generated between every two primary points:

## Installation

```bash
npm install draw-libre
```

## Quick start

```javascript
import * as maplibregl from "maplibre-gl";
import DrawLibre from "draw-libre";
import "draw-libre/dist/index.css";

const map = new maplibregl.Map({
  container:…
