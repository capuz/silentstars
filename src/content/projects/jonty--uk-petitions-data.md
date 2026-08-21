---
repo: "Jonty/uk_petitions_data"
name: "uk_petitions_data"
description: "An up-to-date archive of the data from https://petition.parliament.uk & http://petitions.number10.gov.uk"
readmeQualityOk: true
url: "https://github.com/Jonty/uk_petitions_data"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["git-scraping", "parliament", "petitions", "archive", "uk", "petitions-data", "data", "petition"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-01-09T12:17:44Z"
lastCommitAt: "2026-08-21T04:12:17Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 69
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/9057abcf63019ba0faf37bf31dc3b5c818714335f2c79d847a6a07b9c01f9878/Jonty/uk_petitions_data"
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
