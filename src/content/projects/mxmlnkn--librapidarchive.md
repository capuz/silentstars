---
repo: "mxmlnkn/librapidarchive"
name: "librapidarchive"
description: "Fast parallel random access to bzip2 and gzip files in Python"
readmeQualityOk: true
url: "https://github.com/mxmlnkn/librapidarchive"
language: "C++"
languages: ["C++", "TeX"]
languagePcts: [67, 21]
topics: ["bzip2", "cpp", "cpp17-library", "decompression", "parallel", "python", "library", "gzip", "random-access", "cli"]
stars: 88
forks: 9
openIssues: 6
closedIssues: 14
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2019-12-01T12:54:46Z"
lastCommitAt: "2026-10-29T10:36:55Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 30
maintainers: ["mxmlnkn", "biocodz"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb2e7ef62c152b7f45ada070489a76abf34506dda1c8074b1877cb084b16e23e/mxmlnkn/librapidarchive"
---

# Parallel Random Access to bzip2, gzip (and hopefully more in the future)

This repository contains the code for the [`indexed_bzip2`](https://github.com/mxmlnkn/librapidarchive/blob/HEAD/python/indexed_bzip2) and [`rapidgzip`](https://github.com/mxmlnkn/rapidgzip) Python modules.
Both are built upon the same basic architecture to enable block-parallel decoding based on prefetching and caching.

# rapidgzip

This module provides: 
 - a `rapidgzip` command line tool for parallel decompression of gzip files with a similar command line interface to `gzip` so that it can be used as a replacement.
 - a `rapidgzip.open` Python method for reading and seeking inside gzip files using multiple threads for a speedup of **21** over the built-in gzip module using a 12-core processor.

The random seeking support is similar to the one provided by [indexed_gzip](https://github.com/pauldmccarthy/indexed_gzip), and the parallel capabilities are effectively a working version of [pugz](https://github.com/Piezoid/pugz), which is only a concept and only works with a limited subset of file contents, namely non-binary (ASCII characters 0 to 127) compressed files.

| Module                              |…
