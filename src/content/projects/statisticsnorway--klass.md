---
repo: "statisticsnorway/klass"
name: "klass"
description: "Klass is Statistics Norway's system for classifications and code lists."
readmeQualityOk: true
url: "https://github.com/statisticsnorway/klass"
homepage: "https://data.ssb.no/api/klass/swagger-ui/index.html"
language: "Java"
languages: ["Java"]
languagePcts: [85]
topics: ["classification", "codelist", "statistics", "gsim", "backstage"]
stars: 8
forks: 4
openIssues: 0
closedIssues: 7
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2016-08-25T11:49:23Z"
lastCommitAt: "2026-10-07T10:31:46Z"
lastReleaseAt: "2023-08-10T11:27:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 83
maintainers: ["dependabot[bot]", "tilen1976", "mmwinther"]
openGraphImageUrl: "https://opengraph.githubassets.com/365b015d28359aed2bec083c3c3c791763842ad80ae23a643590a9dc631d7436/statisticsnorway/klass"
---

# Klass

Klass is Statistics Norway's system for classifications and code lists. The data model is based on the structure and principles described by [GSIM](https://statswiki.unece.org/spaces/gsim/pages/97356506/1_Introduction).

The information in Klass is exposed through a REST API, available to all, free of charge under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.no) license. The API documentation is available in multiple flavours:

- API Guide: <https://data.ssb.no/api/klass/v1/api-guide.html>
- Swagger UI: <https://data.ssb.no/api/klass/swagger-ui/index.html>
- OpenAPI spec: <https://data.ssb.no/api/klass/v3/api-docs>

## Overview

Klass consists of 4 maven modules

- Klass API (Standalone application that provides the Klass API)
- Klass Forvaltning (Internal tool for maintenance of classifications)
- Klass Shared (Classes shared between API and Forvaltning. primary database and search components)
- Klass Solr (Solr Core configuration and configuration for embedded solr for test/development)
- Klass Index Job (Responsible for periodically updating the OpenSearch index)

## Build

Run `mvn install` to build the project.

## Deploy

Klass is hosted on the…
