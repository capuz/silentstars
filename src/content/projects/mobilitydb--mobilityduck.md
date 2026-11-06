---
repo: "MobilityDB/MobilityDuck"
name: "MobilityDuck"
description: "MobilityDuck is a DuckDB extension for manipulating temporal and spatiotemporal data based on MobilityDB."
readmeQualityOk: true
url: "https://github.com/MobilityDB/MobilityDuck"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["columnar", "duckdb", "meos", "mobilitydb", "moving-features", "sql", "temporal-data", "trajectory"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2024-01-15T11:22:47Z"
lastCommitAt: "2026-11-06T11:24:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 82
maintainers: ["estebanzimanyi"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae059c87b774a476666782f38083d2dfb1aa7c288a016397aec7342c78db7b70/MobilityDB/MobilityDuck"
---

MobilityDuck
===============

[MEOS (Mobility Engine, Open Source)](https://www.libmeos.org/) is a C library that enables the manipulation of
temporal and spatiotemporal data based on [MobilityDB](https://mobilitydb.com/)'s data types and functions.

MobilityDuck is a binding for [DuckDB](https://duckdb.org/) built on top of MEOS.

The MobilityDB project is developed by the Computer & Decision Engineering Department of the [Université libre de Bruxelles](https://www.ulb.be/) (ULB) under the direction of [Prof. Esteban Zimányi](http://cs.ulb.ac.be/members/esteban/). ULB is an OGC Associate Member and member of the OGC Moving Feature Standard Working Group ([MF-SWG](https://www.ogc.org/projects/groups/movfeatswg)).

This repository is based on https://github.com/duckdb/extension-template.

With MobilityDuck, users can use these data types and functions directly in DuckDB queries.

A small number of MobilityDB SQL surface elements have no direct equivalent in
MobilityDuck because of properties of DuckDB's parser, type system, or
extension model. These cases — and the named-function workarounds where one
exists — are documented in…
