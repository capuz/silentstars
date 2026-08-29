---
repo: "carlos-menezes/caravan"
name: "caravan"
description: "A flexible, transport-based TypeScript-first logging system for JavaScript applications."
readmeQualityOk: true
url: "https://github.com/carlos-menezes/caravan"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 69
forks: 4
openIssues: 2
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2024-12-22T18:32:40Z"
lastCommitAt: "2026-08-28T12:58:49Z"
lastReleaseAt: "2026-08-28T00:45:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 40
maintainers: ["carlos-menezes"]
openGraphImageUrl: "https://opengraph.githubassets.com/44dccf1885cbeb76e83efcbf80abc7cec2f604fb7e0d1b25e2f4ce12b84b00ff/carlos-menezes/caravan"
discussionCount: 2
promoted: true
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
