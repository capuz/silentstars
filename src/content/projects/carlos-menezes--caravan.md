---
repo: "carlos-menezes/caravan"
name: "caravan"
description: "A flexible, transport-based TypeScript-first logging system for JavaScript applications."
readmeQualityOk: true
url: "https://github.com/carlos-menezes/caravan"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 70
forks: 4
openIssues: 2
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2024-12-22T18:32:40Z"
lastCommitAt: "2026-08-29T21:04:45Z"
lastReleaseAt: "2026-08-28T00:45:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 42
maintainers: ["carlos-menezes"]
openGraphImageUrl: "https://opengraph.githubassets.com/c14f1eef8ef1dbda3b73ae01c47c25c5b365211b80cc4317c99f44e66470ae40/carlos-menezes/caravan"
discussionCount: 2
promoted: true
postedAt: "2026-08-30T00:54:20.535Z"
---

/ˈkærəvæn/

A small, typed logging library for JavaScript applications. Caravan gives you a core logger
with levels, context and pluggable transports, plus a set of transport
packages for where the logs actually go.

## Packages

- [`@caravan-logger/logger`](https://github.com/carlos-menezes/caravan/blob/HEAD/caravan/core): the core logger. Handles levels,
  context inheritance and dispatching records to transports.
- [`@caravan-logger/transport-stream`](https://github.com/carlos-menezes/caravan/blob/HEAD/caravan/transport-stream): a
  transport that writes log records to a Node.js or web `WritableStream`,
  optionally formatting records before they're written.
- [`@caravan-logger/transport-datadog`](https://github.com/carlos-menezes/caravan/blob/HEAD/caravan/transport-datadog): a
  transport that sends log records to Datadog's Logs API.
- [`@caravan-logger/transport-better-stack`](https://github.com/carlos-menezes/caravan/blob/HEAD/caravan/transport-better-stack): a
  transport that sends log records to Better Stack's Logs ingesting API.
- [`@caravan-logger/transport-sqlite`](https://github.com/carlos-menezes/caravan/blob/HEAD/caravan/transport-sqlite): a
  transport that inserts…
