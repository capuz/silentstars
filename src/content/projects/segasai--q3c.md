---
repo: "segasai/q3c"
name: "q3c"
description: "PostgreSQL extension for spatial indexing on a sphere"
readmeQualityOk: true
url: "https://github.com/segasai/q3c"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["postgresql", "sphere", "astronomy", "nearest-neighbors", "query", "coordinates"]
stars: 90
forks: 27
openIssues: 2
closedIssues: 34
watchers: 14
contributors: 4
recentReleases: 0
createdAt: "2015-03-28T15:01:30Z"
lastCommitAt: "2026-11-04T02:55:05Z"
lastReleaseAt: "2020-03-14T01:42:26Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 78
undervaluedScore: 33
maintainers: ["segasai", "devrimgunduz"]
openGraphImageUrl: "https://opengraph.githubassets.com/82cc6e503011fff54fe41f0c51b6d00456b2c0e3523cbb72ca07d20b152d47ee/segasai/q3c"
---

# Q3C

Author: Sergey Koposov, University of Edinburgh

Copyright (c) 2004-2026 Sergey Koposov

Email:  skoposov AT ed DOT ac DOT uk

Fresh versions of the software could be obtained here: https://github.com/segasai/q3c 

To read more about the Q3C indexing, you can check out the paper published in ADASS conference proceedings 
http://adsabs.harvard.edu/abs/2006ASPC..351..735K
The citation is "Koposov, S., & Bartunov, O. 2006, Astronomical Society of the Pacific Conference Series, 351, 735".
Q3C is also registered in the ASCL library https://ascl.net/1905.008 . If you use Q3C, you are kindly asked to cite the 2006 paper.
I am also always happy to hear about any usage of Q3C.

## Prerequisites

In order to use Q3C you need to have a PostgreSQL database installed (version 9.1
or later). If you have PostgreSQL version lower than 9.1, you will need to use 
an older version of Q3C (1.4.x). 

To successfully compile Q3C you must have pg_config in your PATH (that means that you may need to install the -devel versions of PostgreSQL packages)

## Installation

- make 
- make install
- Execute "CREATE EXTENSION q3c" in the PostgreSQL client(psql) for the database where you plan to use q3c…
