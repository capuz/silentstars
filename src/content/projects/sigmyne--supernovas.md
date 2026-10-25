---
repo: "Sigmyne/SuperNOVAS"
name: "SuperNOVAS"
description: "The Naval Observatory NOVAS C astrometry library, made better"
readmeQualityOk: true
url: "https://github.com/Sigmyne/SuperNOVAS"
homepage: "https://sigmyne.github.io/SuperNOVAS/"
language: "C"
languages: ["C", "C++"]
languagePcts: [66, 31]
topics: ["positional-astronomy", "astronomy", "astrometry", "astronomy-library", "astronomy-software", "c-language", "c-programming-language", "observatory", "open-source"]
stars: 61
forks: 16
openIssues: 0
closedIssues: 98
watchers: 5
contributors: 10
recentReleases: 0
createdAt: "2024-01-25T12:24:52Z"
lastCommitAt: "2026-10-25T08:40:30Z"
lastReleaseAt: "2025-08-24T17:27:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "community_hub"]
healthScore: 98
undervaluedScore: 56
maintainers: ["attipaci", "csp256", "joeytroy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/748170057/b2f54493-8bdb-43c4-8995-69a8a2d5370e"
fundingLinks: ["GITHUB:https://github.com/attipaci"]
discussionCount: 29
---

# SuperNOVAS

The NOVAS C astrometry library, made better.

 - [C99 API documentation](https://sigmyne.github.io/SuperNOVAS/doc/html/topics.html)
 - [C++ API documentation](https://sigmyne.github.io/SuperNOVAS/doc/html/cpp/topics.html)
 - [SuperNOVAS pages](https://sigmyne.github.io/SuperNOVAS) on github.io 

[SuperNOVAS](https://github.com/Sigmyne/SuperNOVAS/) is a C/C++ astronomy software library, providing 
high-precision astrometry such as one might need for running an observatory, a precise planetarium program, or for
analyzing astronomical datasets. It started as a fork of the Naval Observatory Vector Astrometry Software 
([NOVAS](https://aa.usno.navy.mil/software/novas_info)) C version 3.1, but since then it has grown into its own, 
providing bug fixes, tons of new features, and a much improved API compared to the original NOVAS.

__SuperNOVAS__ is easy to use and it is very fast, with 3--5 orders of magnitude faster position calculations than 
[astropy](https://www.astropy.org/) 7.0.0 in a single thread (see the [benchmarks](#benchmarks)), and its performance 
will scale further with the number of CPUs when calculations are performed in parallel threads.

__SuperNOVAS__ is…
