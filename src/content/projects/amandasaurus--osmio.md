---
repo: "amandasaurus/osmio"
name: "osmio"
description: "Read & write OSM file formats"
readmeQualityOk: true
url: "https://github.com/amandasaurus/osmio"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["openstreetmap", "osm", "parsing", "pbf"]
stars: 24
forks: 9
openIssues: 2
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2017-02-05T18:16:25Z"
lastCommitAt: "2026-10-19T21:11:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 75
undervaluedScore: 51
maintainers: ["amandasaurus"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a81b59d8d66e3898e5ba65ad65d77b3a199d0390f58fea8a9751170dfdbffdc/amandasaurus/osmio"
---

# `osmio` Read and write OpenStreetMap file

The goal of this library is read and and write OpenStreetMap data files in pure Rust.

There is full read & write support for XML, OPL and read support for PBF file formats.

# Library

# Binaries

## `osmio-changeset-tags-to-sqlite`

Takes 2 arguments, a changeset file, and a filename for a SQLite database.
Creates a table `changeset`, with 2 columns, `changeset_id`, `other_tags` (a
JSON array of changeset tags).

# Copyright

Copyright MIT or Apache-2.0, 2017→2021 Amanda McCann <amanda@technomancy.org>
