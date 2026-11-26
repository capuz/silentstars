---
repo: "NCAS-CMS/cf-python"
name: "cf-python"
description: "A CF-compliant Earth Science data analysis library"
readmeQualityOk: true
url: "https://github.com/NCAS-CMS/cf-python"
homepage: "http://ncas-cms.github.io/cf-python"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["cf", "metadata", "netcdf", "um", "pp", "cfdm", "cfunits", "data-analysis", "earth-science", "python"]
stars: 152
forks: 23
openIssues: 129
closedIssues: 300
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2019-09-13T08:57:37Z"
lastCommitAt: "2026-11-26T23:30:46Z"
lastReleaseAt: "2023-04-27T17:46:54Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 44
maintainers: ["sadielbartholomew", "davidhassell"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fd0e1f9af10e7fe5c91f638908136c72704f0378e5071baed7b27b2d75597ef/NCAS-CMS/cf-python"
discussionCount: 3
---

cf-python
=========

The Python `cf` package is an Earth Science data analysis library that
is built on a complete implementation of the CF data model.

#### References

Dask
====

From version 3.14.0 the `cf` package uses
[Dask](https://docs.dask.org) for all of its data manipulations.

Documentation
=============

http://ncas-cms.github.io/cf-python

Installation
============

http://ncas-cms.github.io/cf-python/installation.html

Cheat Sheet
===========

https://ncas-cms.github.io/cf-python/cheat_sheet.html

Recipes
=======

https://ncas-cms.github.io/cf-python/recipes

Tutorial
========

https://ncas-cms.github.io/cf-python/tutorial.html

Functionality
=============

The `cf` package implements the [CF data
model](https://cfconventions.org/cf-conventions/cf-conventions.html#appendix-CF-data-model)
for its internal data structures and so is able to process any
CF-compliant dataset. It is not strict about CF-compliance, however,
so that partially conformant datasets may be ingested from existing
datasets and written to new datasets. This is so that datasets which
are partially conformant may nonetheless be modified in memory.
