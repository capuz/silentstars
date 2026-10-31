---
repo: "Open-X-Humanoid/BICMap"
name: "BICMap"
description: "A WebGL-based robotics map visualization SDK for SLAM maps, point clouds, 3D models, and robot navigation."
originalDescription: "A WebGL-based robotics map visualization SDK for SLAM maps, point clouds, 3D models, and robot navigation."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Open-X-Humanoid/BICMap"
homepage: "https://bicmap.x-humanoid-cloud.com"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [54, 45]
topics: ["3d-visualization", "geojson", "humanoid-robot", "indoor-outdoor", "maplibre", "mapping", "path-planning", "point-cloud", "robot-map", "robotics"]
stars: 94
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-06-29T06:53:48Z"
lastCommitAt: "2026-10-31T07:42:46Z"
lastReleaseAt: "2026-09-10T10:41:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 18
maintainers: ["HouserHao", "Bret0226", "yinwensong"]
openGraphImageUrl: "https://opengraph.githubassets.com/a071a9c4182c0fccee07fb1d707fd6b9fb166e890f556ce028d406989d4522f2/Open-X-Humanoid/BICMap"
---

BicMap (`@x-humanoid-cloud/bic-map`) is a WebGL-based map rendering library that adds robotics-oriented wrappers on top of [MapLibre GL](https://maplibre.org) + [Three.js](https://threejs.org) + [Turf](https://turfjs.org). It provides out-of-the-box capabilities such as **indoor SLAM maps, outdoor tile/high-precision maps, point clouds, 3D models, POI annotation, drawing tools, path planning, and robot orchestration**.

BicMap maps **data** (GeoJSON / point clouds / robot poses) to a set of composable **layers and overlays**. Developers can quickly build integrated indoor and outdoor visualization scenes through the unified `bicMap` singleton, without dealing with the underlying engine's loading, coordinate conversion, and resource hosting details.

Core features:

* Integrated indoor and outdoor: SLAM raster maps, tile base maps, high-precision maps, 2D and 3D point clouds, and 3D models rendered in the same scene
* Rich overlays: direction markers, batch POIs, robot markers, rectangles/polygons/circles/polylines/wide line segments
* Interactive drawing: drawing and editing of rectangles, polygons, polylines, circles, and traversable areas
* Robot capabilities: pose following,…
