---
repo: "hardwood-hq/hardwood"
name: "hardwood"
description: "A fast minimal dependency implementation of Apache Parquet"
readmeQualityOk: true
url: "https://github.com/hardwood-hq/hardwood"
homepage: "https://hardwood.dev/"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["apache-parquet", "columnar-format", "performance", "parquet", "parquet-tools", "hardwood"]
stars: 373
forks: 89
openIssues: 247
closedIssues: 471
watchers: 4
contributors: 42
recentReleases: 3
createdAt: "2026-01-04T22:25:12Z"
lastCommitAt: "2026-09-14T09:12:29Z"
lastReleaseAt: "2026-08-31T16:10:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 92
undervaluedScore: 34
maintainers: ["gunnarmorling", "kogupta", "MovinduJay"]
openGraphImageUrl: "https://opengraph.githubassets.com/23a45a2bf0027e1beea6cf9e9cfdc8ff9056b47ed974e09b13d783d9a2118e0f/hardwood-hq/hardwood"
discussionCount: 2
---

</p>

# Hardwood

_A reader and writer for the Apache Parquet file format, optimized for minimal dependencies and great performance.
Available as a Java library and a [command-line tool](https://hardwood.dev/latest/reference/cli/)._

Hardwood gives applications fast and efficient support for reading and writing Parquet, without pulling in Hadoop, Avro, or the wider [parquet-java](https://github.com/apache/parquet-java) dependency tree.
It is built to be:

* **Light-weight**: Zero transitive dependencies beyond optional compression libraries (Snappy, ZSTD, LZ4, Brotli)
* **Fast**: Hardwood aims to be the fastest Parquet reader and writer for the JVM — see the [read benchmarks](https://github.com/hardwood-hq/hardwood/blob/HEAD/PERFORMANCE.md)
* **Complete**: Read and write support for flat and nested schemas, every logical type, every primitive type in current use, and the encodings and codecs in current use, with new format additions tracked as they land
* **Scalable**: Hardwood is multi-threaded at the core, pages are decoded in parallel, with cross-file prefetching for multi-file reads
* **Embeddable**: The Hardwood library can be used in GraalVM native binaries; WASM support…
