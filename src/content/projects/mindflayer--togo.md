---
repo: "mindflayer/togo"
name: "togo"
description: "ToGo - Python bindings for TG (Geometry library for C - Fast point-in-polygon)"
url: "https://github.com/mindflayer/togo"
language: "Python"
languages: ["Python", "Cython"]
languagePcts: [62, 37]
stars: 9
forks: 3
openIssues: 2
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-20T09:26:06Z"
lastCommitAt: "2026-06-30T06:51:34Z"
lastReleaseAt: "2025-12-10T06:24:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 48
maintainers: ["mindflayer", "drnextgis"]
openGraphImageUrl: "https://opengraph.githubassets.com/4112167679daea9fc07afad995c31658d51423f4743baba18b106229f927ae8d/mindflayer/togo"
---

Python bindings for [TG](https://github.com/tidwall/tg)
(Geometry library for C - Fast point-in-polygon)

ToGo is a high-performance Python library for computational geometry, providing a Cython wrapper around the above-mentioned C library.

Note on pronunciation: "ToGo" is pronounced like the country Togo ("TOH-go"), not like "to go".

The main goal is to offer a Pythonic, object-oriented, fast and memory-efficient library for geometric operations, including spatial predicates, format conversions, and spatial indexing. ToGo's API is flexible and allows you to reason in either TG concepts (if you're familiar with the TG library) or Shapely conventions (the de facto standard for geospatial work in Python)—whichever fits your workflow best.

See [SHAPELY_API.md](SHAPELY_API.md) for more details on Shapely compatibility.
See the "Error Behavior vs Shapely" section in `SHAPELY_API.md` for overlay and predicate
compatibility notes.
See [CHANGELOG.md](./CHANGELOG.md) for version-by-version release notes.

## Installation

```bash
pip install togo
```

## Features

- Fast and efficient geometric operations
- Support for standard geometry types: Point, Line, Ring, Polygon, and their…
