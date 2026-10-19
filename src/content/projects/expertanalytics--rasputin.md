---
repo: "expertanalytics/rasputin"
name: "rasputin"
description: "Raster DEM to TIN tools"
readmeQualityOk: true
url: "https://github.com/expertanalytics/rasputin"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [64, 35]
topics: ["raster", "cgal", "triangulation", "raster-dem"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 4
watchers: 9
contributors: 12
recentReleases: 0
createdAt: "2018-10-26T13:55:58Z"
lastCommitAt: "2026-10-19T09:13:36Z"
lastReleaseAt: "2019-12-16T09:53:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 66
maintainers: ["skavhaug"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2c2059cb3339e8431fb093f6efb19e0550596a5d6e566c12ab1b8f765cebf1a/expertanalytics/rasputin"
---

# Rasputin

Rasputin turns a digital elevation model (DEM) into a triangulated irregular
network (TIN): a triangle mesh of the terrain that uses few triangles where the
ground is smooth and many where it is rough, and never strays from the DEM by
more than a height tolerance you choose.

*The Bygdin catchment (305 km²) at a 10 m tolerance, each triangle coloured by
its CORINE land-cover class. Elevation © Kartverket (CC BY 4.0); land cover
© European Union, Copernicus Land Monitoring Service 2018, EEA. How it was made:
`docs/benchmarks/2026-09-29/bygdin-landcover.md`.*

## What it does

- **DEM in, mesh out.** One GeoTIFF, several, or a directory of tiles
  (Kartverket's DTM10, for example), stitched into one grid.
- **DEMs from the network.** `rasputin fetch glo30 --domain X` copies the
  Copernicus GLO-30 tiles a mesh of that domain reads into a tile cache, so
  `rasputin mesh --dem glo30` then runs offline; `anadem-v1` (South America)
  likewise.
- **Lakes and land cover from the network.**
  `rasputin fetch nve-lakes --bbox XMIN YMIN XMAX YMAX` copies the lake
  polygons of NVE's lake database (Innsjødatabasen) meeting the box, and
  `rasputin fetch clc2018 --bbox ...` the…
