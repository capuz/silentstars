---
repo: "LukePrior/nbn-upgrade-map"
name: "nbn-upgrade-map"
description: "Interactive map showing premises eligible for the NBN FTTP upgrade program."
readmeQualityOk: true
url: "https://github.com/LukePrior/nbn-upgrade-map"
homepage: "https://nbn.lukeprior.com/"
language: "Python"
languages: ["Python"]
languagePcts: [69]
topics: ["nbn", "australia", "collaborate"]
stars: 229
forks: 28
openIssues: 36
closedIssues: 196
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2022-07-22T12:30:25Z"
lastCommitAt: "2026-11-05T08:04:48Z"
lastReleaseAt: "2025-10-01T03:11:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 42
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4095fb0ef65e7bbefb0a94304fcb5fa79b18703d55866302604a74a7a0463f83/LukePrior/nbn-upgrade-map"
---

# NBN FTTP Upgrade Map

The Australian National Broadband Network (NBN) announced an on-demand upgrade program for select premises serviced via Fibre to the Node (FTTN) and Fibre to the Curb (FTTC) to Fibre to the Premises (FTTP) in October 2020.

NBN has progressively announced towns and suburbs where FTTN users will be eligible for a FTTP upgrade (FTTC areas aren't disclosed by NBN).

The details regarding actual availability of the program are limited with not all households in announced suburbs eligible for upgrades.

To address these concerns this project runs automated checks against the announced suburbs to generate interactive maps showing which premises are ready to upgrade.  You can see the current version of this data at <https://nbn.lukeprior.com>

## Tech Explanation

To know what premises reside within a given town/suburb the [Geocoded National Address File of Australia (GNAF)](https://data.gov.au/data/dataset/geocoded-national-address-file-g-naf) is used which contains 15.4 million Australian addresses. This dataset is provided over multiple files and requires significant processing before it can easily be used with a databse solution such as PostgreSQL, Hugh…
