---
repo: "waldronlab/BugSigDBExports"
name: "BugSigDBExports"
description: "BugSigDB data files"
readmeQualityOk: true
url: "https://github.com/waldronlab/BugSigDBExports"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["r01ca230551"]
stars: 5
forks: 4
openIssues: 8
closedIssues: 29
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-07-20T16:35:07Z"
lastCommitAt: "2026-10-10T09:10:54Z"
lastReleaseAt: "2022-01-05T03:21:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 89
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/24a456d0326a67467c5da5c9c4bf9c48c5ee35b2bb1aa4d951d6617f77d6a2b5/waldronlab/BugSigDBExports"
postedAt: "2026-09-04T08:22:03.127Z"
---

Hourly export status: 

# BugSigDBExports

This repository contains data files exported from
[BugSigDB](https://bugsigdb.org), a manually curated database of published
microbial signatures.

See https://doi.org/10.5281/zenodo.5606165 for all releases.

## Citation

Ludwig Geistlinger, Chloe Mirzayi, Fatima Zohra, Rimsha Azhar,
Shaimaa Elsafoury, Clare Grieve, Jennifer Wokaty, Samuel David Gamboa-Tuz,
Pratyay Sengupta, Isaac Hecht, Aarthi Ravikrishnan, Rafael Goncalves,
Eric Franzosa, Karthik Raman, Vincent Carey, Jennifer B. Dowd,
Heidi E. Jones, Sean Davis, Nicola Segata, Curtis Huttenhower, Levi Waldron (2023)
BugSigDB captures patterns of differential abundance across a broad range of host-associated microbial signatures. 
*Nature Biotechnology*, doi: [10.1038/s41587-023-01872-y](https://doi.org/10.1038/s41587-023-01872-y).

## What does BugSigDBExports do?

At the core of the repo is the 
[dump_release.R](https://github.com/waldronlab/BugSigDBExports/blob/main/inst/scripts/dump_release.R) 
script which

1. obtains and merges the exported study, experiment, and signature tables (Plan A: canonical S3 export URLs; Plan B fallback: dynamic URL resolution via…
