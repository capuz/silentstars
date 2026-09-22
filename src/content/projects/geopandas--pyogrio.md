---
repo: "geopandas/pyogrio"
name: "pyogrio"
description: "Vectorized vector I/O using OGR"
readmeQualityOk: true
url: "https://github.com/geopandas/pyogrio"
homepage: "https://pyogrio.readthedocs.io"
language: "Python"
languages: ["Python", "Cython"]
languagePcts: [70, 29]
stars: 337
forks: 38
openIssues: 73
closedIssues: 183
watchers: 10
contributors: 25
recentReleases: 0
createdAt: "2020-03-27T22:34:24Z"
lastCommitAt: "2026-09-22T08:45:40Z"
lastReleaseAt: "2023-01-27T04:42:54Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 86
undervaluedScore: 30
maintainers: ["jorisvandenbossche", "theroggy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9db24463bf39723ee051c9055ecbdd14548aa180ee07c50887247ca5ca6b8378/geopandas/pyogrio"
fundingLinks: ["GITHUB:https://github.com/numfocus", "OPEN_COLLECTIVE:https://opencollective.com/geopandas", "CUSTOM:https://numfocus.org/donate-for-geopandas"]
---

# pyogrio - bulk-oriented spatial vector file I/O using GDAL/OGR

Pyogrio provides fast, bulk-oriented read and write access to 
[GDAL/OGR](https://gdal.org/en/latest/drivers/vector/index.html) vector data
sources, such as ESRI Shapefile, GeoPackage, GeoJSON, and several others.
Vector data sources typically have geometries, such as points, lines, or
polygons, and associated records with potentially many columns worth of data.

The typical use is to read or write these data sources to/from
[GeoPandas](https://github.com/geopandas/geopandas) `GeoDataFrames`. Because
the geometry column is optional, reading or writing only non-spatial data is
also possible. Hence, GeoPackage attribute tables, DBF files, or CSV files are
also supported.

Pyogrio is fast because it uses pre-compiled bindings for GDAL/OGR to read and
write the data records in bulk. This approach avoids multiple steps of
converting to and from Python data types within Python, so performance becomes
primarily limited by the underlying I/O speed of data source drivers in
GDAL/OGR.

We have seen \>5-100x speedups reading files and \>5-20x speedups writing files
compared to using row-per-row approaches (e.g. Fiona).

Read…
