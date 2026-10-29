---
repo: "zkousama/morocco-communes"
name: "morocco-communes"
description: "Morocco's 1,503 communes as open data: HCP codes, the 2024 and 2014 censuses, boundaries, an HTTP API and an MCP server."
readmeQualityOk: true
url: "https://github.com/zkousama/morocco-communes"
homepage: "https://communes.pages.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["api", "census", "geojson", "mcp-server", "morocco", "open-data"]
stars: 50
forks: 7
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-21T14:01:22Z"
lastCommitAt: "2026-10-29T14:05:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 41
maintainers: ["zkousama"]
openGraphImageUrl: "https://opengraph.githubassets.com/10c927c0b3629218a5e93fdcd3dc17257d8dbc852bc0d2606ac44c789bc4c922/zkousama/morocco-communes"
---

# Morocco communes

An open dataset and HTTP API for Morocco's administrative divisions: 12 régions, 75
provinces and préfectures, 8 préfectures d'arrondissements, 213 cercles, 1,503 communes
and 41 arrondissements, with
official HCP geographic codes, names in French and Arabic, 2024 and 2014 population, HCP's
census figures on age, education, languages, work and housing from both years, the 2024
count of economic establishments, the douars of the rural communes, and boundaries from
OpenStreetMap.

HCP publishes the census as spreadsheets. This builds a dataset, an API and a site from them
and from OpenStreetMap, and shows the working.

## The dataset

`data/v1/` is committed and versioned, so you can use it without the API at all.
[`CHANGELOG.md`](https://github.com/zkousama/morocco-communes/blob/HEAD/CHANGELOG.md) says what each version added; the build refuses a version
with no entry in it.

| Directory | Holds | Licence |
|---|---|---|
| `attributes/` | every unit, JSON and CSV | HCP, on CC BY 4.0 terms |
| `geometry/` | one TopoJSON per région, and which communes border which | **ODbL**, share-alike |
| `indicators/` | the census indicators for every unit, 2024 and 2014, JSON…
