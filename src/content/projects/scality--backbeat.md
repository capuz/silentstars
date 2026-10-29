---
repo: "scality/backbeat"
name: "backbeat"
description: "Zenko Backbeat is the core engine for asynchronous replication, optimized for queuing metadata updates and dispatching work to long-running tasks in the background."
readmeQualityOk: true
url: "https://github.com/scality/backbeat"
homepage: "https://www.zenko.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["replication", "async", "disaster-recovery", "javascript", "nodejs", "s3", "cross-region-replication", "artesca", "zenko"]
stars: 61
forks: 24
openIssues: 2
closedIssues: 6
watchers: 50
contributors: 36
recentReleases: 0
createdAt: "2017-02-09T00:31:22Z"
lastCommitAt: "2026-10-29T10:08:20Z"
lastReleaseAt: "2021-12-22T22:37:39Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 49
maintainers: ["francoisferrand", "delthas", "maeldonn"]
openGraphImageUrl: "https://opengraph.githubassets.com/572a634049f5c987f481a3c9a7654e1cb254c10dc6b8da57f7b4bac64d156184/scality/backbeat"
---

# Zenko Backbeat

## OVERVIEW

Backbeat is an engine with a messaging system at its heart.
It's part of Zenko, [Scality](http://www.scality.com/)’s
Open Source Multi-Cloud Data Controller.
Learn more about Zenko at [Zenko.io](http://www.zenko.io/)

Backbeat is optimized for queuing metadata updates and dispatching work
to long-running tasks in the background.
The core engine can be extended for many use cases,
which are called extensions, as listed below.

## EXTENSIONS

### Asynchronous Replication

This feature replicates objects from one S3 bucket to another S3
bucket in a different geographical region. The extension uses the
local Metadata journal as the source of truth and replicates object
updates in a FIFO order.

## DESIGN

- [Backbeat core design](https://github.com/scality/backbeat/blob/HEAD/DESIGN.md)
- [Configuration](https://github.com/scality/backbeat/blob/HEAD/docs/configuration.md)
- [CRR to AWS S3 workflow](https://github.com/scality/backbeat/blob/HEAD/docs/crr-to-aws-s3.md)
- [Object Lifecycle management](https://github.com/scality/backbeat/blob/HEAD/docs/lifecycle.md)
- [Metrics](https://github.com/scality/backbeat/blob/HEAD/docs/metrics.md)
- [CRR Pause and…
