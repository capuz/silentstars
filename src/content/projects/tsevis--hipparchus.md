---
repo: "tsevis/Hipparchus"
name: "Hipparchus"
description: "Desktop vector cartography app for clean, editable SVG maps — from live OpenStreetMap, local OSM extracts, vector tiles, Natural Earth, Overture, terrain DEM, and VIIRS night lights."
readmeQualityOk: true
url: "https://github.com/tsevis/Hipparchus"
homepage: "https://github.com/tsevis/hipparchus"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["cartography", "maps", "openstreetmap", "overpass-api", "python", "shapely", "svg", "vector-graphics", "geospatial", "geotiff"]
stars: 18
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-04-10T16:58:28Z"
lastCommitAt: "2026-08-28T14:33:18Z"
lastReleaseAt: "2026-08-23T21:26:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 51
maintainers: ["tsevis"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e071e340af4bc5c51f8a0c83eafb6bdafee7c794ee30f7a035048ae7cb25fc1/tsevis/Hipparchus"
---

# Hipparchus

**Version 0.9.0**

**Hipparchus is an online desktop vector cartography app for creating clean, editable maps from OpenStreetMap data and exporting them as Illustrator-friendly SVG files.**

<table>
  <tr>
    <td width="50%"><img src="docs/assets/gallery-santorini-hypsometric.png" width="100%" alt="Santorini drawn as filled elevation bands with contours and summit heights, from real elevation data"></td>
    <td width="50%"><img src="docs/assets/gallery-san-francisco-terrain-atlas.png" width="100%" alt="San Francisco streets and place names drawn over real elevation"></td>
  </tr>
  <tr>
    <td align="center"><em>Santorini — real elevation, <code>Hypsometric Relief</code></em></td>
    <td align="center"><em>San Francisco — streets over real elevation</em></td>
  </tr>
</table>

## What's new in 0.9.0

**This is the release where a preset stops leaving layers to chance.** The
sixteen style tables are older than half the layers the app can draw, so the sea
floor, the sea marks, the isotherms, the surface currents, the borders, the ferry
routes, the relief shading and — on eleven of the sixteen presets — the contours
all fell through to `resolve_style`'s last resort.…
