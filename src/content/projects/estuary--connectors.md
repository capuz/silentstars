---
repo: "estuary/connectors"
name: "connectors"
description: "Connectors for capturing data from external data sources"
readmeQualityOk: true
url: "https://github.com/estuary/connectors"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [56, 38]
stars: 83
forks: 45
openIssues: 358
closedIssues: 795
watchers: 8
contributors: 41
recentReleases: 1
createdAt: "2021-05-26T18:10:26Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2026-10-22T18:09:32Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 51
maintainers: ["mdibaiee", "Alex-Bair", "steven-estuary"]
openGraphImageUrl: "https://opengraph.githubassets.com/b56667d7bf97dc74aa682ef2c7c63d87c35749276f286827db4c26245c04e999/estuary/connectors"
discussionCount: 2
---

# Estuary Connectors

This repo hosts development for connectors for use with Flow.

The `source-*` connectors all implement the [flow capture
protocol](https://github.com/estuary/flow/blob/master/go/protocols/capture/capture.proto). Source connectors in this repo can be used with Flow.

The `materialize-*` connectors all implement the [Flow Materialize gRPC protocol](https://github.com/estuary/flow/blob/master/go/protocols/materialize/materialize.proto), and only work with Flow.

All connectors in this repository are dual licensed under MIT or Apache 2.0 at your discretion.

# Developing a New Connector

There are some things to consider and some tips here for developing a new connector.

- [ ] Writing integration tests is highly recommended, it can help us avoid regressions as we develop connectors. See the [tests](https://github.com/estuary/connectors/tree/main/tests) directly for more information and examples.
  - [ ] Try to be comprehensive in the tests to include edge cases, such as different data types, different types of tables, hitting certain limits of your connector (e.g. maximum character limits, etc.)
- [ ] You can use the…
