---
repo: "thenativeweb/eventsourcingdb-client-golang"
name: "eventsourcingdb-client-golang"
description: "The official Go client SDK for EventSourcingDB."
readmeQualityOk: true
url: "https://github.com/thenativeweb/eventsourcingdb-client-golang"
homepage: "https://www.eventsourcingdb.io"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 25
forks: 1
openIssues: 0
closedIssues: 30
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2022-09-22T09:22:04Z"
lastCommitAt: "2026-11-10T14:49:32Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 61
maintainers: ["goloroden", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4685d96aab08d46295727d2f8ceed32aa6e45b26586f057088f074fd0299a7dc/thenativeweb/eventsourcingdb-client-golang"
---

# eventsourcingdb

The official Go client SDK for [EventSourcingDB](https://www.eventsourcingdb.io) – a purpose-built database for event sourcing.

EventSourcingDB enables you to build and operate event-driven applications with native support for writing, reading, and observing events. This client SDK provides convenient access to its capabilities in Go.

For more information on EventSourcingDB, see its [official documentation](https://docs.eventsourcingdb.io/).

This client SDK includes support for [Testcontainers](https://testcontainers.com/) to spin up EventSourcingDB instances in integration tests. It lives in a package of its own, so applications that only use the client do not depend on Testcontainers. For details, see [Using Testcontainers](#using-testcontainers).

If you upgrade from version 1 of this client SDK, see [Upgrading From Version 1](#upgrading-from-version-1).

## Getting Started

Install the client SDK:

```shell
go get github.com/thenativeweb/eventsourcingdb-client-golang/v2/eventsourcingdb
```

Import the package and create an instance by providing the URL of your EventSourcingDB instance and the API token to use:

```go
import (
  "net/url"…
