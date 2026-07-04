---
repo: "Jonty/uk_petitions_data"
name: "uk_petitions_data"
description: "An up-to-date archive of the data from https://petition.parliament.uk & http://petitions.number10.gov.uk"
url: "https://github.com/Jonty/uk_petitions_data"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["git-scraping", "parliament", "petitions", "archive", "uk", "petitions-data", "data", "petition"]
stars: 16
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-01-09T12:17:44Z"
lastCommitAt: "2026-07-04T06:11:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 70
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/3460e727265bcd0d570e622641bfae56fafcef2df93c5ac9f35a4f609900d5b2/Jonty/uk_petitions_data"
---

UK Petitions Data
=================

This is a complete dump of the [UK Government and Parliament Petitions website](https://petition.parliament.uk/) data, updated every 30 minutes. It includes geographical voting data.

This also includes a complete machine-readable dump of the old `petitions.number10.gov.uk` website that started it all.

This data is published under the [OGL](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

Current State
=============

Done:
-----

* A complete dump of the full petitions data for every public petition for every government
* A complete dump of petitions.number10.gov.uk converted into the same format as the modern petitions website
* Automatic hourly updates by a CircleCi job
* Vote counts by country and constituency

Not done:
---------
* More petition sources
* Automatically building an sqlite DB
* A nice interface to search/browse the data

Pull requests to fix things welcome.
