---
repo: "opengeos/terrio"
name: "terrio"
description: "Pure-Rust geospatial raster and vector data I/O"
readmeQualityOk: true
url: "https://github.com/opengeos/terrio"
homepage: "https://terrio.dev"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [74, 24]
topics: ["geospatial", "gis", "rust", "rust-lang"]
stars: 329
forks: 48
openIssues: 25
closedIssues: 300
watchers: 6
contributors: 22
recentReleases: 10
createdAt: "2026-10-14T11:56:51Z"
lastCommitAt: "2026-11-23T10:17:28Z"
lastReleaseAt: "2026-10-31T21:56:34Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 98
undervaluedScore: 32
maintainers: ["pick2510", "nkarasiak", "gmoralessanchez"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1418833813/5f45c7ea-ac06-40c0-bfe3-9292aa0a465f"
discussionCount: 12
---

# terrio

Pure-Rust geospatial raster, vector and point cloud data I/O.

Documentation: <https://terrio.dev> · [Playground](https://terrio.dev/playground/) · [Notebooks](https://terrio.dev/notebooks/)

terrio reads, writes, converts and reprojects the geospatial formats most workflows use, without
C dependencies, so that it builds anywhere Rust does, including WebAssembly.

**Status:** early development. The API may change before 1.0. See [ROADMAP.md](https://github.com/opengeos/terrio/blob/HEAD/ROADMAP.md).

terrio builds on the pure-Rust format libraries of
[whitebox_next_gen](https://github.com/jblindsay/whitebox_next_gen) (`wbraster`, `wbvector`,
`wbprojection`) and adds format detection, remote and archived inputs, a GeoTIFF reader built on the
[`tiff`](https://crates.io/crates/tiff) crate, fixes for what the format libraries miss, and
GDAL-style operations. terrio runs without installing GDAL, but it is not independent of GDAL: its
commands and options follow GDAL's, many of its algorithms and drivers are ports of GDAL, PROJ and
PDAL code, and its results are tested against them (see [Acknowledgements](#acknowledgements)).
