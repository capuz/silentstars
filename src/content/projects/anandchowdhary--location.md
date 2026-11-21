---
repo: "AnandChowdhary/location"
name: "location"
description: "📍 Tracking my location in real time for over 10 years in this repo"
readmeQualityOk: true
url: "https://github.com/AnandChowdhary/location"
homepage: "https://anandchowdhary.com/location"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["api", "location", "location-tracker", "serverless", "typescript", "workers"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-24T00:02:03Z"
lastCommitAt: "2026-11-21T11:36:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 65
maintainers: ["FindingAnand", "AnandChowdhary"]
openGraphImageUrl: "https://opengraph.githubassets.com/87afa3861b840ff016e75bc61591a84291f1eb984676dc8ae5cb888886985e15/AnandChowdhary/location"
---

# 📍 Anand's location

This repository tracks my (approximate) location. An Apple Shortcut sends my coordinates to a GitHub Actions workflow, which stores them in `api.json` (rounded to ~1 km), commits them, and publishes the history to GitHub Pages.

**Location history on git:** https://github.com/AnandChowdhary/location/commits/main/api.json

| API                         | Endpoint                                                              |
| --------------------------- | --------------------------------------------------------------------- |
| Current location            | https://anandchowdhary.github.io/location/api.json                    |
| Full (raw) location history | https://anandchowdhary.github.io/location/history-full.json           |
| Normalized location history | https://anandchowdhary.github.io/location/history.json                |
| Unique locations            | https://anandchowdhary.github.io/location/history-unique.json         |
| Unique countries            | https://anandchowdhary.github.io/location/history-countries.json      |
| Full country history        | https://anandchowdhary.github.io/location/history-countries-full.json |
