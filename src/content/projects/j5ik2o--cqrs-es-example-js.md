---
repo: "j5ik2o/cqrs-es-example-js"
name: "cqrs-es-example-js"
description: "An example of CQRS/Event Sourcing and GraphQL implemented in TypeScript."
readmeQualityOk: true
url: "https://github.com/j5ik2o/cqrs-es-example-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["cqrs", "ddd", "event-sourcing", "graphql"]
stars: 24
forks: 5
openIssues: 7
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-02-15T05:18:52Z"
lastCommitAt: "2026-11-07T10:37:00Z"
status: "thriving"
tags: []
healthScore: 60
undervaluedScore: 25
maintainers: ["j5ik2o", "renovate[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/7135138a0a656add7910a1733cd6a79db3e09441d69e9e1a2bf46c712b98fe39/j5ik2o/cqrs-es-example-js"
---

# cqrs-es-example-js

## Overview

This is an example of CQRS/Event Sourcing and GraphQL implemented in TypeScript. The domain and application layers use a **functional, non-class / no-interface (Go-like) style** — plain frozen objects with `namespace` companions and free functions, modeled after the [event-store-adapter-js](https://github.com/j5ik2o/event-store-adapter-js) v3.1.0 example domain. (type-graphql classes remain only at the GraphQL boundary, where decorators are structurally required.)

This project uses [j5ik2o/event-store-adapter-js](https://github.com/j5ik2o/event-store-adapter-js) **v3.1.0** for Event Sourcing, and the write API can persist to either **DynamoDB** or **Cloud Spanner** (`PERSISTENCE_BACKEND=dynamodb|spanner`). See [Persistence backends & the Spanner read-model pipeline](https://github.com/j5ik2o/cqrs-es-example-js/blob/HEAD/docs/spanner-local-pipeline.md).

Please refer to [here](https://github.com/j5ik2o/cqrs-es-example) for implementation examples in other languages.

[日本語](https://github.com/j5ik2o/cqrs-es-example-js/blob/HEAD/README.ja.md)

## Feature

- [x] Write API Server(GraphQL)
- [x] Read API Server(GraphQL)
- [x] Read Model Updater on…
