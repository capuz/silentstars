---
repo: "nelsonquesado/GTFSwizard"
name: "GTFSwizard"
description: "GTFSwizard Package"
url: "https://github.com/nelsonquesado/GTFSwizard"
language: "HTML"
languages: ["HTML", "R"]
languagePcts: [73, 27]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-03T23:27:44Z"
lastCommitAt: "2026-06-23T23:26:55Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 38
maintainers: ["nelsonquesado"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bf596d9576796e6dee85fda330f1e9ee5ebd094e61c5b6256ef0b0206727bb1/nelsonquesado/GTFSwizard"
---

# GTFSwizard <img align="right" src="figs/GTFSwizard_logo.png?raw=true" alt="logo" height="180">
##### Development version 1.2.1 (2026-06-21)
##### CRAN version 1.2.0 (2026-06-16)

GTFSwizard is a set of tools for creating, exploring, and manipulating [General Transit Feed Specification (GTFS)](https://gtfs.org/) files in R.

Its main purpose is to provide researchers and practitioners with a seamless and easy way to visually explore and simulate changes within GTFS files, which represent public transportation schedules and geographic data. The package allows users to filter data by routes, trips, stops, and time, generate spatial visualizations, and perform detailed analyses of transit networks, including headway, dwell times, route frequencies, travel times, corridors and hubs. Editing functions to delay, speed change, and split trips, and to merge distinct GTFS are available. This is an ongoing work and new features are planned to be implemented soon.

## Installation
The development version is **1.2.1**. The CRAN version is **1.2.0**.

``` r
# CRAN version:
install.packages("GTFSwizard")
library(GTFSwizard)

# Development version:
install.packages('remotes') # if not already…
