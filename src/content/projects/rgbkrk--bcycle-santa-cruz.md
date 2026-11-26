---
repo: "rgbkrk/bcycle-santa-cruz"
name: "bcycle-santa-cruz"
description: "BCycle Data for Santa Cruz"
readmeQualityOk: true
url: "https://github.com/rgbkrk/bcycle-santa-cruz"
language: "TypeScript"
languages: ["TypeScript", "Jupyter Notebook"]
languagePcts: [60, 40]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2023-11-02T02:07:54Z"
lastCommitAt: "2026-11-26T23:31:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 72
maintainers: ["rgbkrk"]
openGraphImageUrl: "https://opengraph.githubassets.com/b77b2ff93e67aff0aa36ce2b159e144a4d1ae79032d1dd678db042fa58992b91/rgbkrk/bcycle-santa-cruz"
---

# BCycle Data Collection

Santa Cruz rolled out a bikeshare service through BCycle. To my surprise and delight, I noticed they adhere to the [General Bikeshare Feed Specification](https://github.com/MobilityData/gbfs). You can find [all the endpoints BCycle Santa Cruz provides](https://gbfs.bcycle.com/bcycle_santacruz/gbfs.json) which includes the status and information of each station, such as the number of bikes available, the number of docks available, and the location of the station.

As a frequent rider, I'm interested in finding out the changes in capacity over time for each station. Since the service is a near realtime feed, I can collect the data every 10 minutes and store it in this repository [using github actions](https://github.com/rgbkrk/bcycle-santa-cruz/blob/HEAD/.github/workflows/data-collection.yml).
