---
repo: "FelisPimeja/osm-simple3d-editor"
name: "osm-simple3d-editor"
description: "Browser-based 3D building editor for OpenStreetMap (Simple 3D Buildings): MapLibre + three.js, no backend"
readmeQualityOk: true
url: "https://github.com/FelisPimeja/osm-simple3d-editor"
homepage: "https://felispimeja.github.io/osm-simple3d-editor/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["3d-buildings", "gis", "maplibre-gl-js", "mapping", "openstreetmap", "osm-editor", "threejs", "typescript", "vite", "webgl"]
stars: 21
forks: 1
openIssues: 7
closedIssues: 14
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-10-07T09:28:28Z"
lastCommitAt: "2026-11-05T11:16:44Z"
lastReleaseAt: "2026-10-25T18:54:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 49
maintainers: ["FelisPimeja"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7434965152ab2e18e4e9bd1c4c94af9866fe4f0f821715ee2bc92ac7b88ccd0/FelisPimeja/osm-simple3d-editor"
discussionCount: 1
---

# OSM Simple 3D Editor

**English** · [Русский](https://github.com/FelisPimeja/osm-simple3d-editor/blob/HEAD/README.ru.md)

A browser-based 3D building editor for OpenStreetMap, following the [Simple 3D Buildings](https://wiki.openstreetmap.org/wiki/Simple_3D_Buildings) tagging scheme.
It also works with OpenHistoricalMap and OpenGeofiction.

Open the editor: https://felispimeja.github.io/osm-simple3d-editor/

Usage statistics (changesets, users, edited keys; updated daily): https://felispimeja.github.io/osm-simple3d-stats/

## Features

- 3D view of buildings and building parts on a MapLibre map, with roofs (flat, pyramidal, gabled, hipped and more).
- Tag panel for `height`, `min_height`, `building:levels`, `building:min_level`, `roof:*` and colours, with undo/redo and a before/after diff.
- Single-building mode: open one building in its own scene and edit its parts.
- Geometry tools: draw polygons, split, extrude and move, with SketchUp-like snapping and guides.
- `type=building` relations: create them and manage their members.
- Indoor floor plans following the [Simple Indoor Tagging](https://wiki.openstreetmap.org/wiki/Simple_Indoor_Tagging) scheme: view levels in 3D and draw…
