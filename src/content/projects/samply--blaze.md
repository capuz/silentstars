---
repo: "samply/blaze"
name: "blaze"
description: "A FHIR® Server with internal, fast CQL Evaluation Engine"
readmeQualityOk: true
url: "https://github.com/samply/blaze"
homepage: "https://blaze-server.org"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [84]
topics: ["fhir", "fhir-server", "cql-evaluation-engine", "hl7", "fhir-store", "health-informatics", "healthcare"]
stars: 231
forks: 27
openIssues: 206
closedIssues: 739
watchers: 6
contributors: 28
recentReleases: 0
createdAt: "2019-03-29T09:35:01Z"
lastCommitAt: "2026-10-29T19:53:39Z"
lastReleaseAt: "2019-09-11T12:11:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 95
undervaluedScore: 41
maintainers: ["alexanderkiel", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82e6e59bd0e9d59a47318b83b12930da83b93f5c6d1f0542b9900832cd8c448e/samply/blaze"
discussionCount: 4
---

A FHIR® Server with internal, fast CQL Evaluation Engine

## Survey

Please take one minute to fill out the short [Blaze Usage Survey](https://tally.so/r/gD7VGP) — your feedback helps us prioritize future development.

## Goal

The goal of this project is to provide a FHIR® Server with an internal CQL Evaluation Engine which is able to answer population wide aggregate queries in a timely manner to enable interactive, online queries over millions of patients.

## Demo

A demo installation can be found [here](https://blaze.life.uni-leipzig.de/fhir) (user/password: demo).

## State

Blaze is stable and widely used in the [Medical Informatics Initiative](https://www.medizininformatik-initiative.de) in Germany and in [Biobanks](https://www.bbmri-eric.eu) across Europe.

Latest release: [v1.12.1][5]

## Key Features

* Implements large parts of the [FHIR® R4 API][1]
* Contains a fast [CQL Evaluation Engine][17]
* Supports the operations [$evaluate-measure][2], [$cql][20], [$everything][13], [$validate-code][14], [$expand][15] [amongst others][21]
* Offers [terminology services][16] including LOINC and SNOMED CT
* Scales horizontally via [Distributed Storage Variant][18]
* Comes with a…
