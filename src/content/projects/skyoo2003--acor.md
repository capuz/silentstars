---
repo: "skyoo2003/acor"
name: "acor"
description: "Aho-Corasick automaton working On Redis/Valkey"
readmeQualityOk: true
url: "https://github.com/skyoo2003/acor"
homepage: "https://skyoo2003.github.io/acor"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["golang", "aho-corasick", "redis", "ahocorasick", "acor", "valkey"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-12-11T11:44:31Z"
lastCommitAt: "2026-08-09T04:47:25Z"
lastReleaseAt: "2026-04-19T22:59:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 87
maintainers: ["skyoo2003", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8b1adac8206398489de059a50b790a65a881566e8f08d4fa17103a1769cba32/skyoo2003/acor"
fundingLinks: ["GITHUB:https://github.com/skyoo2003"]
discussionCount: 1
---

# ACOR

**A**ho-**C**orasick automaton working **O**n **R**edis — distributed multi-pattern matching for Go.

ACOR stores a shared Aho-Corasick pattern dictionary in Redis and exposes it
through a Go library and CLI. Multiple application instances can update the
same dictionary at runtime while preset engines serve matches from local memory.

Typical uses include content filtering, keyword extraction, intrusion detection,
search highlighting, and real-time text classification.

## Highlights

- **Shared state** — every application instance uses the same Redis-backed dictionary
- **Runtime updates** — Pub/Sub invalidation, with optional polling for missed messages
- **Fast reads** — preset engines match locally without Redis I/O on the hot path
- **Flexible deployment** — standalone Redis, Sentinel, Cluster, Ring, and Valkey
- **Complete matching API** — occurrences, positions, sets, streams, batches, and parallel matching

## Installation

ACOR requires Go 1.25 or newer and Redis 3.0 or newer, or Valkey 7.2 or newer.

```sh
go get github.com/skyoo2003/acor/pkg/acor@latest
```

## Quick Start

Start Redis locally, then create a matcher:

```go
package main

import (
	"fmt"…
