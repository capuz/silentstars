---
repo: "1kbgz/fsspec-data"
name: "fsspec-data"
description: "Python Filesystem interface for non-filesystem data sources"
readmeQualityOk: true
url: "https://github.com/1kbgz/fsspec-data"
homepage: "https://1kbgz.github.io/fsspec-data/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [52, 48]
topics: ["arrow", "csv", "data", "data-analysis", "filesystem", "fsspec", "parquet", "python"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2022-04-15T19:12:55Z"
lastCommitAt: "2026-11-06T02:44:27Z"
lastReleaseAt: "2026-10-28T04:03:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 74
maintainers: ["timkpaine", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e26de82147d01c5a65b919fe3fd36334cedd9b704e785f9d93134cc5086d597b/1kbgz/fsspec-data"
---

# fsspec-data

Convert tabular formats and reconcile Arrow schemas over fsspec.

`fsspec-data` plans schema mappings and executes them over Arrow record batches.
Codecs handle Arrow IPC, Parquet, CSV, and JSONL. A read-only chained filesystem
exposes converted files; a separate converter registry handles resources such as
Xarray datasets and Zarr stores.

## Start here

[Convert CSV identifiers to Parquet](https://github.com/1kbgz/fsspec-data/blob/HEAD/docs/tutorial.md) walks through planning,
batch iteration, and encoded output.

## How-to guides

For application work, [connect a batch producer or consumer](https://github.com/1kbgz/fsspec-data/blob/HEAD/docs/how-to-integrate.md),
[convert a file through an fsspec chain](https://github.com/1kbgz/fsspec-data/blob/HEAD/docs/how-to-chain-filesystems.md), or
[resolve schemas from files and registries](https://github.com/1kbgz/fsspec-data/blob/HEAD/docs/how-to-resolve-schemas.md).
[Convert Xarray and Zarr resources](https://github.com/1kbgz/fsspec-data/blob/HEAD/docs/how-to-convert-resources.md) covers native
resource routes and converter registration.

## Reference and explanation

The [interchange API…
