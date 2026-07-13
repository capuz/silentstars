---
repo: "abrt/abrt"
name: "abrt"
description: "Automatic bug detection and reporting tool"
readmeQualityOk: true
url: "https://github.com/abrt/abrt"
language: "C"
languages: ["C", "Shell", "Python"]
languagePcts: [48, 28, 20]
stars: 245
forks: 76
openIssues: 153
closedIssues: 836
watchers: 22
contributors: 78
recentReleases: 0
createdAt: "2013-02-01T14:38:04Z"
lastCommitAt: "2026-07-13T06:36:51Z"
lastReleaseAt: "2024-02-12T21:48:17Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 22
maintainers: ["msrb"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3b462ebdcdc456c2823015e2dbc0eb8b1db321b449e347d04a2e96b8b637db2/abrt/abrt"
---

# ABRT

**A set of tools to help users detect and report application crashes.**

### About

Its main purpose is to ease the process of reporting an issue and finding a
solution.

The solution in this context might be a bugzilla ticket, knowledge base article
or a suggestion to update a package to a version containing a fix.

This repository is one among a suite of related projects. The following diagram
summarizes the dependencies between the individual packages comprising the ABRT
suite.

```mermaid
flowchart BT
    abrt-java-connector --> abrt
    abrt-java-connector -. build .-> satyr
    abrt:::focus --> libreport & satyr
    abrt-java-connector --> libreport
    gnome-abrt --> abrt & libreport
    reportd --> libreport
    libreport --> satyr
    retrace-server[Retrace Server] -. "optional, for<br>packages only" .-> faf
    faf["ABRT Analytics (FAF)"] --> satyr

click abrt "https://github.com/abrt/abrt" "abrt GitHub repository" _blank
click abrt-java-connector "https://github.com/abrt/abrt-java-connector" "abrt-java-connector GitHub repository" _blank
click faf "https://github.com/abrt/faf" "ABRT Analytics GitHub repository" _blank
click gnome-abrt…
