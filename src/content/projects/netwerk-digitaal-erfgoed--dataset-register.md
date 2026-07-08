---
repo: "netwerk-digitaal-erfgoed/dataset-register"
name: "dataset-register"
description: "API, crawler and browser components for the NDE Dataset Register"
readmeQualityOk: true
url: "https://github.com/netwerk-digitaal-erfgoed/dataset-register"
homepage: "https://datasetregister.netwerkdigitaalerfgoed.nl"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [69, 25]
topics: ["dataset-register", "rdf", "open-data", "linked-data"]
stars: 7
forks: 4
openIssues: 61
closedIssues: 416
watchers: 3
contributors: 11
recentReleases: 5
createdAt: "2020-10-15T12:47:18Z"
lastCommitAt: "2026-07-08T05:40:47Z"
lastReleaseAt: "2026-04-20T09:15:11Z"
status: "thriving"
tags: ["legacy_hero", "release_machine"]
healthScore: 97
undervaluedScore: 91
maintainers: ["ddeboer", "dependabot[bot]", "coret"]
openGraphImageUrl: "https://opengraph.githubassets.com/00f22f93d81ed3f087e1aeef69352dc5a3b63354a8cbc9b90bef56d33e1c81eb/netwerk-digitaal-erfgoed/dataset-register"
---

# Dataset Register

This is the [NDE](https://www.netwerkdigitaalerfgoed.nl/en/about-us/) Dataset Register,
a service that helps users find and discover datasets.

Institutions (such as cultural heritage organizations) register their dataset descriptions with the NDE Dataset Register
using its HTTP API. The Dataset Register builds an index by fetching, [validating](#validate-dataset-descriptions) and
periodically [crawling](#crawler) dataset descriptions.

The HTTP API is documented at https://datasetregister.netwerkdigitaalerfgoed.nl/api.

See the [Dataset Register Demonstrator](https://datasetregister.netwerkdigitaalerfgoed.nl),
a client application for this repository’s HTTP API, for more background information (in Dutch).

## Design principles

1. The application follows modern standards and best practices.
2. The application uses [Linked Data Platform (LDP)](https://www.w3.org/TR/ldp/) for HTTP operations.
3. The application prefers [JSON-LD](http://json-ld.org) as the data exchange format.
4. The application uses established Linked Data vocabularies,
   including [Schema.org](https://schema.org) and [DCAT](https://www.w3.org/TR/vocab-dcat-3/).
   The Schema.org ↔ DCAT…
