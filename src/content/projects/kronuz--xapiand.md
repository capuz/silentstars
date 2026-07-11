---
repo: "Kronuz/Xapiand"
name: "Xapiand"
description: "Xapiand: A RESTful Search Engine"
readmeQualityOk: true
url: "https://github.com/Kronuz/Xapiand"
homepage: "https://kronuz.github.io/Xapiand"
language: "C++"
languages: ["C++"]
languagePcts: [78]
topics: ["search", "search-engine", "indexing", "c-plus-plus", "elasticsearch"]
stars: 361
forks: 33
openIssues: 16
closedIssues: 14
watchers: 18
contributors: 6
recentReleases: 7
createdAt: "2015-02-23T16:37:09Z"
lastCommitAt: "2026-07-11T05:56:26Z"
lastReleaseAt: "2026-07-11T03:57:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "release_machine"]
healthScore: 89
undervaluedScore: 39
maintainers: ["Kronuz"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2f5eac2dde5270fb670fa5a33782c613c8a68e597530be4f3d920170774a59c/Kronuz/Xapiand"
---

# Xapiand

## A RESTful Search Engine

Xapiand is *A Modern Highly Available Distributed RESTful Search and Storage
Engine built for the Cloud and with Data Locality in mind*. It takes JSON
(or MessagePack) documents and indexes them efficiently for later retrieval.

Official site is at [https://kronuz.github.io/Xapiand](https://kronuz.github.io/Xapiand)

---

## What it is

A single C++20 binary that gives you, out of the box:

- A **RESTful HTTP API** over a schemaless document store (JSON or MessagePack in, JSON/MessagePack out).
- **Full-text search**, built on a customized in-tree fork of [Xapian](https://xapian.org/).
- **Geospatial** indexing and queries via a Hierarchical Triangular Mesh (HTM): points, circles, polygons, and collections become numeric range queries on the sphere.
- **Range and numeric** queries through order-preserving ("sortable") value encoding.
- **Aggregations** in the Elasticsearch style (buckets + metrics), computed as a match-spy and mergeable across shards.
- **Clustering**: per-shard primary election over Raft, with asynchronous, pull-based replication between nodes.
- **Durable storage**: a Haystack-inspired append-only volume format with an…
