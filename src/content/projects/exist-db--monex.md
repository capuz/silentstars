---
repo: "eXist-db/monex"
name: "monex"
description: "Monitoring Application for eXist-db"
readmeQualityOk: true
url: "https://github.com/eXist-db/monex"
language: "JavaScript"
languages: ["JavaScript", "XQuery", "HTML"]
languagePcts: [45, 26, 22]
topics: ["exist-db", "xquery", "performance", "monitoring", "xar"]
stars: 7
forks: 19
openIssues: 22
closedIssues: 55
watchers: 13
contributors: 29
recentReleases: 0
createdAt: "2014-03-22T20:05:02Z"
lastCommitAt: "2026-07-06T07:02:58Z"
lastReleaseAt: "2019-04-24T22:04:28Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 74
maintainers: ["duncdrum", "dependabot[bot]", "joewiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/43313d3990ad895f69ff4759d9c2c95108838b6a966c9686923994b170bc316b/eXist-db/monex"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/existdb"]
---

# Monex (Monitoring for eXist)

An application for monitoring, profiling and inspecting a running eXist-db instance.

## Features

The app includes:

- **Monitoring dashboard**: live KPI strip, capacity vs workload panels — memory, page caches, embeddings status, running/waiting/recent queries
- **Query profiling** page: essential for tuning queries and indexes
- **Index browser**: inspect Lucene, range, and ngram indexes (including `vector-field` and `vector-store` when configured)
- **Remote console**: send log messages from any query in eXist to the remote console.
Uses web sockets for real-time updates.
- **Remote Monitoring**: monitor multiple remote eXistdb instances. Provides timelines for long term monitoring.

Vector and embedding panels on Monitoring require eXist-db 7.x with the vector extension; they hide gracefully when unavailable.

## Configure Monex

### Enable Remote Monitoring

#### Preconditions

Monex remote monitoring requires the eXistdb scheduler module to be enabled. Make sure it is enabled in `$eXistdb_home/extensions/build.properties`

```txt
# Scheduler module
include.module.scheduler = true
```

and in `$eXistdb_home/conf.xml` make sure the Scheduler…
