---
repo: "opengeos/terrio"
name: "terrio"
description: "Pure-Rust geospatial raster and vector data I/O"
readmeQualityOk: true
url: "https://github.com/opengeos/terrio"
homepage: "https://terrio.opengeos.org"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [75, 23]
topics: ["geospatial", "gis", "rust", "rust-lang"]
stars: 217
forks: 30
openIssues: 14
closedIssues: 71
watchers: 4
contributors: 15
recentReleases: 9
createdAt: "2026-10-14T11:56:51Z"
lastCommitAt: "2026-10-31T19:01:55Z"
lastReleaseAt: "2026-10-24T04:22:18Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 34
maintainers: ["giswqs", "dependabot[bot]", "gpt-cmdr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1418833813/5f45c7ea-ac06-40c0-bfe3-9292aa0a465f"
discussionCount: 8
---

# terrio

Pure-Rust geospatial raster, vector and point cloud data I/O.

Documentation: <https://terrio.opengeos.org>

terrio aims to read, write, convert and reproject the geospatial formats most workflows use, without
C dependencies, so that it builds anywhere Rust does, including WebAssembly.

**Status:** early development. Reading, writing and converting work; the processing operations are
in progress. See [ROADMAP.md](https://github.com/opengeos/terrio/blob/HEAD/ROADMAP.md).

terrio builds on the pure-Rust format libraries of
[whitebox_next_gen](https://github.com/jblindsay/whitebox_next_gen) (`wbraster`, `wbvector`,
`wbprojection`) and adds format detection, remote and archived inputs, a GeoTIFF reader built on the
[`tiff`](https://crates.io/crates/tiff) crate, fixes for what the format libraries miss, and
GDAL-style operations. terrio runs without installing GDAL, but it is not independent of GDAL: its
commands and options follow GDAL's, many of its algorithms and drivers are ports of GDAL, PROJ and
PDAL code, and its results are tested against them (see [Acknowledgements](#acknowledgements)).

Coordinate transformations match GDAL's: terrio carries the EPSG CRSs with the…
