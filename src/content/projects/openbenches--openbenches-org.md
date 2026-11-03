---
repo: "openbenches/openbenches.org"
name: "openbenches.org"
description: "OpenBenches.org - an open data repository for memorial benches"
readmeQualityOk: true
url: "https://github.com/openbenches/openbenches.org"
homepage: "https://openbenches.org/"
language: "PHP"
languages: ["PHP"]
languagePcts: [66]
topics: ["hacktoberfest", "hacktoberfest2023"]
stars: 206
forks: 30
openIssues: 32
closedIssues: 315
watchers: 5
contributors: 18
recentReleases: 0
createdAt: "2017-07-11T18:44:01Z"
lastCommitAt: "2026-11-03T10:51:51Z"
lastReleaseAt: "2025-08-25T18:50:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 81
undervaluedScore: 37
maintainers: ["edent", "sebastic"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/96925393/12f5568f-d483-4276-bd63-29a31c222145"
fundingLinks: ["GITHUB:https://github.com/openbenches", "OPEN_COLLECTIVE:https://opencollective.com/openbenches", "CUSTOM:https://openbenches.myspreadshop.co.uk/"]
discussionCount: 14
---

# OpenBenches

https://OpenBenches.org/ is an open data repository for memorial benches.

## Supporters

You can [sponsor OpenBenches on GitHub](https://github.com/sponsors/openbenches/).

We'd like to thank the following sponsors for their generosity:

* [decoded.legal](https://decoded.legal/)
* [Richard Leyton](https://leyton.org/)
* [Ben Smith](https://bensmith.uk/)
* [TeknikGeek](https://www.teknikgeek.se/)

## Contributing

All contributions are welcome.  Before making a pull request, please:

1. Raise a new issue describing the problem and how you intend to fix it.
2. Submit a Pull Request referencing the Issue.

## Open Data API

You can get all the data, or partial data, from the API.  Data is returned in [geoJSON](http://geojson.org/) format and has the following structure:

```JSON
{
	"type": "FeatureCollection",
	"features": [{
		"id": 1234657,
		"type": "Feature",
		"geometry": {
			"type": "Point",
			"coordinates": [0.1234, 5.678]
		},
		"properties": {
			"created_at": "2021-06-05T12:27:36+01:00",
			"popupContent": "IN LOVING MEMORY OF\nBOB AND\nJANE",
			"media": [{
				"URL": "\/image\/3f786850e387550fdab836ed7e6dc881de23001b",
				"mediaID": 123456789,…
