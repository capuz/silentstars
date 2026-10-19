---
repo: "zdavatz/oddb.org"
name: "oddb.org"
description: "Open Drug Database for Switzerland"
readmeQualityOk: true
url: "https://github.com/zdavatz/oddb.org"
homepage: "https://ch.oddb.org"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [61, 36]
topics: ["drug", "database", "open", "switzerland", "ruby", "postgresql", "bag", "swissmedic", "refdata", "spezialitaetenliste"]
stars: 10
forks: 9
openIssues: 12
closedIssues: 232
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2012-12-06T18:37:02Z"
lastCommitAt: "2026-10-19T09:14:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 85
maintainers: ["zdavatz"]
openGraphImageUrl: "https://opengraph.githubassets.com/93acbf722992b5af1b921f787bbd340daa697f906e0f9a2467e6a462aed53329/zdavatz/oddb.org"
---

# oddb.org
* https://github.com/zdavatz/oddb.org

## Description
Open Drug Database for Switzerland. See the live version at http://ch.oddb.org

## Features/Problems
* **SDIF Interactions**: Drug interaction checking uses the [SDIF (Swiss Drug Interactions Finder)](https://github.com/zdavatz/sdif) SQLite database (`data/sqlite/interactions.db`). Four sources: EPha.ch curated ATC-to-ATC interactions, substance-level matches, ATC class-level keyword matching in Swissmedic FachInfo text, and CYP enzyme-mediated interactions. Each interaction shows its source (EPha.ch or Swissmedic FI) with type badge (Wirkstoff, ATC-Klasse, CYP). Route indicators (topisch, i.v., s.c., etc.) and approved combination therapy hints are displayed next to drug names. FI results display a "Gegenrichtung hat höhere Einstufung" hint when their severity is below the pair maximum across all interaction types. EPha results show the hint only for asymmetric EPha ratings between directions.
* Twitter share and mail/notify icons have been removed from drug search result lists.
* The `desitin` flavor was retired in August 2026 on request. Unlike just-medical it was still in use — 1206 requests from 459 distinct…
