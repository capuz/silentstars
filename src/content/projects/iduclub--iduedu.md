---
repo: "IDUclub/IduEdu"
name: "IduEdu"
description: "Creation and manipulation of city networks from OpenStreetMap."
readmeQualityOk: true
url: "https://github.com/IDUclub/IduEdu"
homepage: "https://iduclub.github.io/IduEdu"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["drive", "graphs", "networks", "pedestrian", "public-transport", "pypi-package", "python", "matrix", "open-source", "openstreetmap"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 4
recentReleases: 5
createdAt: "2024-07-15T19:42:43Z"
lastCommitAt: "2026-11-05T11:24:05Z"
lastReleaseAt: "2026-11-05T11:24:07Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 87
undervaluedScore: 59
maintainers: ["DDonnyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/b551579a46d8c4d777086e44a5bdf9194b079062d389ac1857c7584ab1a1b8fd/IDUclub/IduEdu"
---

# IduEdu

**IduEdu** is an open-source Python toolkit for building and analyzing multimodal city networks from
OpenStreetMap and local GTFS Schedule data. It downloads OSM data via Overpass, reads GTFS feeds, builds
drive, walk, public-transport and intermodal networks, and stores them as `UrbanGraph` objects backed by
GeoDataFrame node and edge tables.

## Benchmark snapshot

The benchmark below isolates city-scale pedestrian graph construction, comparing IduEdu's tabular
`UrbanGraph` representation with OSMnx's widely used NetworkX-backed workflow on the same area of
interest for each city. Both simplification modes are shown because `simplify` changes the trade-off
between graph-construction time and the size of the resulting graph.

Across these repeated B1 runs, IduEdu built pedestrian graphs in about **6.6-10.0x less time** without
simplification and **3.9-6.7x less time** with simplification enabled. The resulting geospatial graph
object had a **10-12x lower deterministic representation-size estimate**. Edge-row counts are shown as
a representation detail:
`UrbanGraph` can keep bidirectional walking edges as one row with a direction flag, while NetworkX-style
directed…
