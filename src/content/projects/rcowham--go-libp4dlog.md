---
repo: "rcowham/go-libp4dlog"
name: "go-libp4dlog"
description: "go-libp4dlog is a library for Go to parse Perforce Helix Core p4d text log files."
readmeQualityOk: true
url: "https://github.com/rcowham/go-libp4dlog"
language: "Go"
languages: ["Go"]
languagePcts: [88]
stars: 17
forks: 12
openIssues: 9
closedIssues: 11
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2018-09-05T10:27:57Z"
lastCommitAt: "2026-11-27T16:23:43Z"
lastReleaseAt: "2020-04-20T19:21:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 74
undervaluedScore: 44
maintainers: ["rcowham", "P4Karl2"]
openGraphImageUrl: "https://opengraph.githubassets.com/a095c2dab70ddb09ef81011e8b9b042761a7bc1b66348e415f31eab48c54db31/rcowham/go-libp4dlog"
---

# go-libp4dlog

go-libp4dlog is a Go language library to parse Perforce p4d text logs, with a command line executable `log2sql` to process them.

Check the [releases](https://github.com/rcowham/go-libp4dlog/releases) page for the latest binary releases.

* `p4dlog` - log analyzer (this page)
* `p4locks` - lock analyzer - see [p4locks README](https://github.com/rcowham/go-libp4dlog/blob/HEAD/cmd/p4locks/README.md)

Contents:

- [go-libp4dlog](#go-libp4dlog)
  - [Running the log analyzer](#running-the-log-analyzer)
  - [Examples](#examples)
  - [Some sample SQL queries](#some-sample-sql-queries)
  - [Testing and debugging of tests](#testing-and-debugging-of-tests)
  - [Viewing historical metrics via Grafana/Prometheus/VictoriaMetrics](#viewing-historical-metrics-via-grafanaprometheusvictoriametrics)
    - [Closing down and removing data](#closing-down-and-removing-data)
  - [P4D Log Analysis](#p4d-log-analysis)
  - [Output of this library](#output-of-this-library)
- [p4locks - lock analyzer](#p4locks---lock-analyzer)
-…
