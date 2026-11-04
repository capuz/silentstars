---
repo: "atoms-co/splitter"
name: "splitter"
description: "Coordinator for stateful sharded services"
readmeQualityOk: true
url: "https://github.com/atoms-co/splitter"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 270
forks: 20
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 9
recentReleases: 5
createdAt: "2026-04-01T19:49:01Z"
lastCommitAt: "2026-11-04T02:57:27Z"
lastReleaseAt: "2026-10-07T21:05:26Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 87
undervaluedScore: 29
maintainers: ["Daniel-lxh", "styurin", "pallav31"]
openGraphImageUrl: "https://opengraph.githubassets.com/f81084b4d8641cd302ce91d733a98ed9011c89c5700c3a28fd3be8b74c3e453c/atoms-co/splitter"
discussionCount: 0
---

Splitter is a control-plane service for assigning work to connected clients.
Its primary focus is coordination for stateful sharded services.

## Features

- Uses UUID spaces as work domains: splits them into shards and assigns to clients.
- Emphasizes exclusive shard ownership in a steady state using leases. Optional dual ownership
  during shard transitions for advanced use cases.
- Promotes an easier programming model in comparison to coordinators that provide eventual
  consistency in shard assignments.
- Shard management is handled centrally in Splitter, using Raft for storage and coordination.
- Assumes that client instances are dynamic and can come and go.
- Region-aware assignments for multi-regional services.
- Automatic propagation of routing information to client instances.
- Can be used for leadership election by client instances.
- Provides authoritative shard alignment information for external services interested in
  arranging data and compute across multiple regions.
- Built with no external dependencies and only requires persistent storage to store metadata.

## Documentation

- [Sharding Model](https://github.com/atoms-co/splitter/blob/HEAD/docs/sharding.md)…
