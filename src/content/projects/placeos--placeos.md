---
repo: "PlaceOS/PlaceOS"
name: "PlaceOS"
description: "Integrate the physical with the digital. Then automate it."
readmeQualityOk: true
url: "https://github.com/PlaceOS/PlaceOS"
homepage: "https://placeos.com"
language: "Crystal"
languages: ["Crystal", "HTML"]
languagePcts: [46, 45]
stars: 34
forks: 6
openIssues: 32
closedIssues: 101
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2020-07-08T06:21:59Z"
lastCommitAt: "2026-11-09T00:52:48Z"
lastReleaseAt: "2022-05-16T02:02:10Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 58
maintainers: ["stakach"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/278007102/d0b1a500-193b-11eb-88dd-a9476c511a06"
---

# PlaceOS

This repository defines [PlaceOS](https://place.technology/) platform releases.
It provides new release notification and the canonical reference for the platform's release history.

## Platform Versioning

A PlaceOS deployment is a set of interdependent services and associated tools.
Each of these have their own version number, test and release process.
Platform versions overlay this to provide a set of compatible, deployable components.

A platform version looks like:

    placeos-1.2104.1
            |  |   |
            |  |   revision
            |  |
            |  minor release (year, month)
            |
            major release

### Major
Releases that share a major version are consistent for core features.

Moving to a new major version _may_ include breaking changes and the removal of deprecated functionality.
This includes both machine facing (API’s, infrastructure) and human facing (core platform concepts, UX).

### Minor
Minor versions introduce new features that are forwards compatible.

Numbering reflects the original release packaging date (`YYMM`). This will perpetually increase, including across major versions.

When moving to a new minor version…
