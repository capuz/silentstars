---
repo: "research-software-ecosystem/content"
name: "content"
description: "A metadata commons to store research software metadata"
readmeQualityOk: true
url: "https://github.com/research-software-ecosystem/content"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
topics: ["biohackeu20"]
stars: 48
forks: 36
openIssues: 53
closedIssues: 23
watchers: 5
contributors: 22
recentReleases: 1
createdAt: "2019-01-25T13:56:12Z"
lastCommitAt: "2026-11-05T14:06:45Z"
lastReleaseAt: "2026-10-30T08:35:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 55
maintainers: ["biotools-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/16a450af88bb2abb0782ec6a3568e7996f1da5054d79357dfcf988a6edc54ed0/research-software-ecosystem/content"
---

# Research Software Ecosystem (RSEc) metadata commons

This repository aggregates metadata about research software for exchange between registries, package repositories, container services, workflow platforms and benchmarking services. Records from different sources are grouped by software entry, with selected transformations into shared formats such as Bioschemas.

Metadata are stored in source-specific representations rather than a single repository-wide schema. The Git history records changes to the aggregated records; metadata retain the provenance and terms of their respective sources.

_Note_: the repository is still currently named `content` for historical reasons which are to be addressed in the future. Unless for technical purposes, this repository is the `metadata-commons` of the RSEc.

## Repository structure

- [`data/`](https://github.com/research-software-ecosystem/content/blob/HEAD/data/) — metadata grouped by software entry, with files for each source or representation.
- [`imports/`](https://github.com/research-software-ecosystem/content/blob/HEAD/imports/) — source-specific imported records.
-…
