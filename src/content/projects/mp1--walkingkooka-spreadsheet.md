---
repo: "mP1/walkingkooka-spreadsheet"
name: "walkingkooka-spreadsheet"
description: "Building a web based spreadsheet application server & rich web app"
readmeQualityOk: true
url: "https://github.com/mP1/walkingkooka-spreadsheet"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "j2cl", "apache-license-2"]
stars: 6
forks: 2
openIssues: 61
closedIssues: 1129
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-09-10T03:59:56Z"
lastCommitAt: "2026-08-03T06:44:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 99
undervaluedScore: 82
maintainers: ["mP1"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5e6c2f64e1039c058853ca8eab9c4b92392bdcbc7763ec9d0d9184464bada31/mP1/walkingkooka-spreadsheet"
---

# Application

This repo contains the powerful engine that performs all the features and actions expected of a functional spreadsheet.

The application is logically separated into two parts.

- The [client](https://github.com/mP1/walkingkooka-spreadsheet-dominokit) contains the web browser application.
  Actions performed by the user become REST API calls to the server.
- The [server](https://github.com/mP1/walkingkooka-spreadsheet-server) contains all the supporting REST APIs using JSON
  for request and response payloads that eventually interact with
  [engine](https://github.com/mP1/walkingkooka-spreadsheet/blob/master/src/main/java/walkingkooka/spreadsheet/engine/SpreadsheetEngine.java).

## Global settings ([SpreadsheetMetadata](https://github.com/mP1/walkingkooka-spreadsheet/blob/master/src/main/java/walkingkooka/spreadsheet/meta/SpreadsheetMetadata.java))

Each and every spreadsheet is represented by a single `SpreadsheetMetadata` object instance.
A wide variety of items are stored for each spreadsheet including but not limited to:

- Each item is allocated a
  unique…
