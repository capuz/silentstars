---
repo: "thenativeweb/architecturekit-golang"
name: "architecturekit-golang"
description: "Building blocks for DDD-based applications with CQRS and event sourcing, in Go, on top of the EventSourcingDB."
readmeQualityOk: true
url: "https://github.com/thenativeweb/architecturekit-golang"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-09-22T18:03:44Z"
lastCommitAt: "2026-10-03T22:05:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 47
maintainers: ["goloroden", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e2b235489761e28373ec23716d5c5736f5e3ed0a9054b6830e397d9208bc1b9/thenativeweb/architecturekit-golang"
---

# architecturekit

Building blocks for DDD-based applications with CQRS and event sourcing in Go, on top of [EventSourcingDB](https://www.eventsourcingdb.io) – a purpose-built database for event sourcing.

architecturekit covers both sides of an event-sourced application: commands, events, and the state to decide on for writing, and projections, views, and queries for reading. An optional package exposes commands and queries over HTTP.

For more information on EventSourcingDB, see its [official documentation](https://docs.eventsourcingdb.io/).

architecturekit includes a test package to test deciders, projections, and queries without a database. For details, see [Testing Deciders](#testing-deciders). For the tests that need a real database, a second package starts one in a container (see [Testing with a Database](#testing-with-a-database)).

## Getting Started

Install the packages:

```shell
go get github.com/thenativeweb/architecturekit-golang/architecturekit github.com/thenativeweb/eventsourcingdb-client-golang/eventsourcingdb
```

Import the package, create an EventSourcingDB client, and create a store by providing the client and the source to use for all events you write:…
