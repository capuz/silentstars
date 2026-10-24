---
repo: "thenativeweb/eventsourcingdb-client-javascript"
name: "eventsourcingdb-client-javascript"
description: "The official JavaScript client SDK for EventSourcingDB."
readmeQualityOk: true
url: "https://github.com/thenativeweb/eventsourcingdb-client-javascript"
homepage: "https://www.eventsourcingdb.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 29
forks: 3
openIssues: 0
closedIssues: 22
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2022-05-13T04:36:04Z"
lastCommitAt: "2026-10-24T08:09:41Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 62
maintainers: ["dependabot[bot]", "goloroden"]
openGraphImageUrl: "https://opengraph.githubassets.com/2240f455f42b677f79b7846e7de487796720d0be704eb632dbbacd8616567edf/thenativeweb/eventsourcingdb-client-javascript"
---

# eventsourcingdb

The official JavaScript client SDK for [EventSourcingDB](https://www.eventsourcingdb.io) – a purpose-built database for event sourcing.

EventSourcingDB enables you to build and operate event-driven applications with native support for writing, reading, and observing events. This client SDK provides convenient access to its capabilities in JavaScript and TypeScript.

For more information on EventSourcingDB, see its [official documentation](https://docs.eventsourcingdb.io/).

This client SDK includes support for [Testcontainers](https://testcontainers.com/) to spin up EventSourcingDB instances in integration tests. For details, see [Using Testcontainers](#using-testcontainers).

If you are upgrading from version 1 of this client SDK, see [Upgrading From Version 1](#upgrading-from-version-1).

## Getting Started

Install the client SDK:

```shell
npm install eventsourcingdb
```

Import the `Client` class and create an instance by providing the URL of your EventSourcingDB instance and the API token to use:

```typescript
import { Client } from 'eventsourcingdb';

const url = new URL('http://localhost:3000');
const apiToken = 'secret';

const client = new…
