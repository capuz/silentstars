---
repo: "birkskyum/manby"
name: "manby"
description: "Builds vector tilesets from geographic features, like tippecanoe, several times faster"
readmeQualityOk: true
url: "https://github.com/birkskyum/manby"
homepage: "https://birkskyum.github.io/manby/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["geojson", "gis", "mbtiles", "pmtiles", "rust", "tippecanoe", "vector-tiles"]
stars: 40
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-11-05T21:54:55Z"
lastCommitAt: "2026-11-07T22:52:15Z"
lastReleaseAt: "2026-11-07T20:53:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 45
maintainers: ["birkskyum", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1447554327/fc4f39de-7978-4334-9fea-6155332b6ce9"
discussionCount: 1
---

# manby

manby builds vector tilesets from GeoJSON, FlatGeobuf, CSV, Geobuf, GeoParquet or Arrow features, and from DuckDB queries and data frames in Python and R. It makes the same tiles as [tippecanoe](https://github.com/felt/tippecanoe), in less memory, ten to eighteen times faster on a Mac and eight to fifteen times faster on Linux, more where tippecanoe's disk slows it down. `manby join` is tippecanoe's tile-join, two to thirty-five times faster.

The `manby` command takes tippecanoe's options:

```sh
manby -zg --drop-densest-as-needed -o places.pmtiles places.geojson
```

`pip install manby` installs it on macOS and Linux, with a Python module, and `uvx manby` runs it without installing. `brew install birkskyum/tap/manby` and `mise use -g github:birkskyum/manby` install the program alone from the [releases](https://github.com/birkskyum/manby/releases). `cargo install manby` builds it, with Rust 1.89 or later. The [site](https://birkskyum.github.io/manby/) has the guides.

From Python, a DuckDB query streams to manby in Arrow batches.

```python
import duckdb, manby

places = duckdb.sql("SELECT name, geometry FROM 'places.parquet' WHERE country = 'DE'")
manby.tile(places,…
