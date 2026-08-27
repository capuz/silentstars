---
repo: "MobilityDB/MobilityDuck"
name: "MobilityDuck"
description: "MobilityDuck is a DuckDB extension for manipulating temporal and spatiotemporal data based on MobilityDB."
readmeQualityOk: true
url: "https://github.com/MobilityDB/MobilityDuck"
language: "C++"
languages: ["C++"]
languagePcts: [91]
topics: ["columnar", "duckdb", "meos", "mobilitydb", "moving-features", "sql", "temporal-data", "trajectory"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2024-01-15T11:22:47Z"
lastCommitAt: "2026-08-27T14:19:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 82
maintainers: ["estebanzimanyi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a849fde78fb92a70f6a3e79d2235e879edf03a0cef176533a8135eaa59466b4/MobilityDB/MobilityDuck"
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
