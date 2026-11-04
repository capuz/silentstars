---
repo: "MasatoMakino/threejs-position-util"
name: "threejs-position-util"
description: "measuring geometry positions for three.js"
readmeQualityOk: true
url: "https://github.com/MasatoMakino/threejs-position-util"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 6
forks: 2
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-10-07T01:02:58Z"
lastCommitAt: "2026-11-04T02:58:32Z"
lastReleaseAt: "2024-02-05T08:22:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 65
maintainers: ["MasatoMakino", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4c744a4ae8b1b29d2934a9c2245d35c78644b67633c9faec85fe31780a07d2f/MasatoMakino/threejs-position-util"
---

# threejs-position-util

> Convert 3D Three.js world coordinates to 2D screen positions for UI overlays

## Demo

View the [Demo page](https://masatomakino.github.io/threejs-position-util/demo/) and open the browser console.

```
Vector3
x: 960
y: 540
z: 0
```

threejs-position-util converts a 3D geometry position to 2D screen coordinates (CSS pixels; origin at top-left), ideal for positioning HTML UI elements over 3D objects.

## Use Cases

- UI Overlays: Position tooltips, labels, or info panels above 3D models
- HUD Elements: Create heads-up displays that follow 3D objects
- Interactive Markers: Place clickable HTML buttons over specific 3D locations
- Data Visualization: Add 2D charts or text that correspond to 3D data points

## Getting Started

### Install

```bash
npm install @masatomakino/threejs-position-util --save-dev
```

### Import

Import the named exports from the package root:

```js
import { 
  get2DPosition, 
  get2DPositionWithMesh,
  getGeometryCenterInWorld,
  getGeometryCenterInLocal
} from "@masatomakino/threejs-position-util";
```

This package is ESM-only; CommonJS require() is not supported.

### Primary Functions

The main purpose of this library is to…
