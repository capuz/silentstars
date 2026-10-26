---
repo: "GISBoost/easy-R5"
name: "easy-R5"
description: "A QGIS processing plugin for transit accessibility analysis on the Conveyal R5 routing engine — travel-time matrices, cumulative accessibility and isochrones, inside QGIS, no R and no conda."
readmeQualityOk: true
url: "https://github.com/GISBoost/easy-R5"
language: "Python"
languages: ["Python", "QML"]
languagePcts: [71, 24]
topics: ["accessibility", "gtfs", "r5", "transport", "qgis-plugin"]
stars: 6
forks: 0
openIssues: 11
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-09-02T12:49:34Z"
lastCommitAt: "2026-10-26T09:15:54Z"
lastReleaseAt: "2026-10-25T17:44:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 73
undervaluedScore: 49
maintainers: ["GISBoost"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1311e2f5d99b132c880493fa99cd7b28fcb4b43a6b5a29bcf8d06cdd091456f/GISBoost/easy-R5"
---

A QGIS processing plugin for transit accessibility analysis on the
[**Conveyal R5**](https://github.com/conveyal/r5) routing engine — travel-time matrices,
cumulative-opportunity accessibility and isochrones over a departure-time window, computed inside
QGIS with no R, no conda and no Docker.

> **Status: 0.3.1, experimental.** All fifteen algorithms work; the travel-time matrix and
> accessibility are verified end-to-end (accessibility reproduces r5r's Gdańsk output
> *exactly* — [`docs/notes/validation-gdansk.md`](https://github.com/GISBoost/easy-R5/blob/HEAD/docs/notes/validation-gdansk.md)).
> New in 0.3.0, each verified on a real Łódź network: **network scenarios** (draw a new line,
> remove or re-time routes — R5 applies them in memory) with **Compare scenarios**, a **GTFS
> pre-flight check**, **2SFCA competitive accessibility** and a **population-weighted equity
> summary** — see [`docs/prd/PR_easy-R5_v03.md`](https://github.com/GISBoost/easy-R5/blob/HEAD/docs/prd/PR_easy-R5_v03.md).
> The flag stays `experimental` until a clean-install run of the full pipeline is signed
> off. See [`KNOWN_ISSUES.md`](https://github.com/GISBoost/easy-R5/blob/HEAD/KNOWN_ISSUES.md).

Sibling…
