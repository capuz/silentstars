---
repo: "mutablelogic/go-sqlite"
name: "go-sqlite"
description: "Golang interface to SQLite"
readmeQualityOk: true
url: "https://github.com/mutablelogic/go-sqlite"
homepage: "https://pkg.go.dev/github.com/mutablelogic/go-sqlite"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["sqlite", "sqlite3", "sqlite-orm", "golang", "rest-api", "database"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-12-18T13:39:58Z"
lastCommitAt: "2026-11-18T11:38:54Z"
lastReleaseAt: "2021-10-03T16:32:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 73
maintainers: ["djthorpe"]
openGraphImageUrl: "https://opengraph.githubassets.com/df812f309b74110f8529de4864412becb27a3c4621f581b77f233ba1d5257e5d/mutablelogic/go-sqlite"
---

# go-sqlite

SQLite support for Go, of the same shape as [go-pg](https://github.com/mutablelogic/go-pg). Pure Go, without cgo. This module provides:

* Easy semantics for Insert, Delete, Update, Get and List operations, on Go types;
* Binding SQL statements to named arguments, and queries stored in files;
* Transactions, and bulk operations, which reuse their statements;
* One writer and many readers, so reads don't wait for writes;
* Conversion of Go values to SQLite's, and back, including JSON, times and UUIDs;
* Extensions, such as full-text search, and functions written in Go;
* Tracing, with OpenTelemetry.

Documentation: <https://pkg.go.dev/github.com/mutablelogic/go-sqlite>

## Motivation

The package reduces the boilerplate of reading and writing Go types to SQLite. Its operations align with API calls: _POST_, _PUT_, _GET_, _DELETE_ and _PATCH_.
