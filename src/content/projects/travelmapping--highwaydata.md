---
repo: "TravelMapping/HighwayData"
name: "HighwayData"
description: "Highway Data, including all systems, boundaries, etc."
readmeQualityOk: true
url: "https://github.com/TravelMapping/HighwayData"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 10
forks: 41
openIssues: 0
closedIssues: 158
watchers: 10
contributors: 30
recentReleases: 0
createdAt: "2015-04-11T18:38:41Z"
lastCommitAt: "2026-07-04T23:13:44Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 78
maintainers: ["si404", "michihdeu", "jteresco"]
openGraphImageUrl: "https://opengraph.githubassets.com/68e8fb1a630e8b3a547c4c8d6303aba83f8f4b514b0cefdd58efd52fa06d25c6/TravelMapping/HighwayData"
---

# HighwayData

This repository is for raw data used by the Travel Mapping project.

Please help us improve our data by reporting any problems you notice with the data in [the project forum](https://forum.travelmapping.net/).

In general, the project's data is in plain text files in two formats: CSV using semicolon separators, and WPT or "waypoint" files.  WPT files are required to contain only plain ASCII text.  Some CSV files can include non-ASCII characters, but should always use a UTF-8 encoding when such characters are used.

The project's data is organized herein as follows:

Several CSV files at the top level are used to describe some project-wide information.

* `continents.csv`, `countries.csv`, `regions.csv`, and `regions_countries_continents.csv` are used to define the lists, names, abbreviations, and hierarchies for the geographic entities and governmental subdivisions used by the project.

* `datacheckfps.csv` contains a list of false positives that will be detected in the "datacheck" list of possible errors in the data.  Entries listed here will be shown only in the "crossed off" list on the datacheck error page.

* `systems.csv` contains a list of the highway systems…
