---
repo: "Public-Health-Scotland/scotpho-indicator-production"
name: "scotpho-indicator-production"
description: "Code used to prepare data for indicators in ScotPHO's profiles"
readmeQualityOk: true
url: "https://github.com/Public-Health-Scotland/scotpho-indicator-production"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["public-health", "health-data", "data-manipulation"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 23
recentReleases: 0
createdAt: "2018-09-20T13:21:48Z"
lastCommitAt: "2026-09-16T08:47:42Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 87
undervaluedScore: 69
maintainers: ["abigap01", "vaelliott", "monicamcgibbon"]
openGraphImageUrl: "https://opengraph.githubassets.com/292fed5b13fa2b74565357ae82a29ac9259116bee44bb6f6b93415a4d8503150/Public-Health-Scotland/scotpho-indicator-production"
---

# indicator-production
Code used to prepare data for indicators in the [ScotPHO's profiles](https://scotland.shinyapps.io/ScotPHO_profiles_tool/).

Input files for the various indicators are sourced either direct from datasources such as SMRA (SMR01/NRS deaths), opendata  portals or via bespoke requests to data owners.
Final output files need to have the same format and follow a set of common transformations.
Most input files are processed using scripts within the functions folder (pre 2025 functions found within scripts "1.indicator_analysis"/"2.deprivation_analysis"). 
For details on how to use these functions please read the instruction in the script.
These functions can prepare data for intermediate zones, HSC localities, HSC partnerships, alcohol and drug partnerships, council areas, health boards and Scotland.

All indicators have a 'main' output file (this is what populate summary/trend and rank tabs within online profiles tool).
For some indicators we also prepare data by socioeconomic deprivation or population group categories.

Geography and population lookups used in the creation of indicator output files are created with the code from [this…
