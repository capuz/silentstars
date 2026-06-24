---
repo: "OPATP/GTFSwizard"
name: "GTFSwizard"
description: "GTFSwizard is a set of tools for exploring and manipulating General Transit Feed Specification (GTFS) files in R."
url: "https://github.com/OPATP/GTFSwizard"
homepage: "https://opatp.github.io/GTFSwizard/"
language: "HTML"
languages: ["HTML", "R"]
languagePcts: [74, 26]
topics: ["gtfs", "transit"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2024-04-23T01:23:05Z"
lastCommitAt: "2026-06-24T00:25:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 66
maintainers: ["nelsonquesado"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c5e984bccffab3d3570f8efbc4c48a1963f37d02cc206875c1dfca74931fd04/OPATP/GTFSwizard"
---

# GTFSwizard <img align="right" src="figs/GTFSwizard_logo.png?raw=true" alt="logo" height="180">
##### Development version 1.2.1
development 2026-06-21

GTFSwizard is a set of tools for creating, exploring, and manipulating [General Transit Feed Specification (GTFS)](https://gtfs.org/) files in R.

Its main purpose is to provide researchers and practitioners with a seamless and easy way to visually explore and simulate changes within GTFS files, which represent public transportation schedules and geographic data. The package allows users to filter data by routes, trips, stops, and time, generate spatial visualizations, and perform detailed analyses of transit networks, including headway, dwell times, route frequencies, travel times, corridors and hubs. Editing functions to delay, speed change, and split trips, and to merge distinct GTFS are available. This is an ongoing work and new features are planned to be implemented soon.

## Installation
The development version is **1.2.1**. The CRAN version is **1.2.0**.

``` r
# CRAN version:
install.packages("GTFSwizard")
library(GTFSwizard)

# Development version:
install.packages('remotes') # if not already installed…
