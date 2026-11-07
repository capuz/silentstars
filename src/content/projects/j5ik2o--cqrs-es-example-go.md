---
repo: "j5ik2o/cqrs-es-example-go"
name: "cqrs-es-example-go"
description: "An example of CQRS/Event Sourcing and GraphQL implemented in Go."
readmeQualityOk: true
url: "https://github.com/j5ik2o/cqrs-es-example-go"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["cqrs", "ddd", "event-sourcing", "graphql"]
stars: 36
forks: 4
openIssues: 3
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-11-02T13:51:45Z"
lastCommitAt: "2026-11-07T22:51:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 56
maintainers: ["renovate[bot]", "j5ik2o"]
openGraphImageUrl: "https://opengraph.githubassets.com/47b87949cc6a32f5e60d75eba044781a6bd501923a164de9fb10ae0e6b50fca6/j5ik2o/cqrs-es-example-go"
---

# cqrs-es-example-go

## Overview

This is an example of CQRS/Event Sourcing and GraphQL implemented in Go. This example is class-based, not actor-model based.

This project uses [j5ik2o/event-store-adapter-go](https://github.com/j5ik2o/event-store-adapter-go) for Event Sourcing.

Please refer to [here](https://github.com/j5ik2o/cqrs-es-example) for implementation examples in other languages.

[日本語](https://github.com/j5ik2o/cqrs-es-example-go/blob/HEAD/README.ja.md)

## Feature

- [x] Write API Server(GraphQL)
- [x] Read API Server(GraphQL)
- [x] Read Model Updater on Local
- [x] Docker Compose Support
- [ ] Read Model Updater on AWS Lambda
- [ ] Deployment to AWS

## Component Composition

- Write API Server
  - API is implemented by GraphQL (Mutation)
  - Event Sourced Aggregate is implemented by [j5ik2o/event-store-adapter-go](https://github.com/j5ik2o/event-store-adapter-go)
- Read Model Updater
  - Builds read models from the head table's DynamoDB Streams
  - Locally, run code that emulates Lambda behavior (local-rmu)
- Read API Server
  - API is implemented by GraphQL (Query)

## Configuration

The applications read their settings from environment variables.

| Application…
