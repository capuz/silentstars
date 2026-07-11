---
repo: "goccy/googlesqlite"
name: "googlesqlite"
description: "Run GoogleSQL using SQLite3 as the backend"
readmeQualityOk: true
url: "https://github.com/goccy/googlesqlite"
homepage: "https://goccy.github.io/googlesqlite/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["golang", "golang-library", "googlesql", "sqlite", "webassembly"]
stars: 11
forks: 4
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-04-19T03:52:44Z"
lastCommitAt: "2026-07-11T05:57:57Z"
lastReleaseAt: "2026-06-13T05:36:17Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 62
maintainers: ["goccy", "dependabot[bot]", "Amund211"]
openGraphImageUrl: "https://opengraph.githubassets.com/27b8d5e3942a88f16de5666047275a4e3b2d7c2554197375f9656a312dce090c/goccy/googlesqlite"
---

# GoogleSQLite

GoogleSQLite is a Go project that runs GoogleSQL — the SQL dialect
used by BigQuery and Cloud Spanner — on top of a SQLite backend. It is
exposed as a `database/sql` driver, so any `database/sql` consumer gets
a local GoogleSQL execution engine with no external services to run.

GoogleSQL parsing and analysis is provided by
[`goccy/go-googlesql`](https://github.com/goccy/go-googlesql), and query
execution runs on
[`ncruces/go-sqlite3`](https://github.com/ncruces/go-sqlite3). Both are
implemented in pure Go, so GoogleSQLite is pure Go as well — no cgo is
required.

Because GoogleSQL is the dialect behind BigQuery and Cloud Spanner,
this project gives strong support to use cases such as locally
emulating those services.

## Usage

```go
import (
	"database/sql"

	_ "github.com/goccy/googlesqlite"
)

db, err := sql.Open("googlesqlite", ":memory:")
if err != nil {
	log.Fatal(err)
}
defer db.Close()

rows, err := db.Query(`SELECT FORMAT('%t', DATE '2026-05-14') AS today`)
// ...
```

The driver registers under `googlesqlite`. DSN is the underlying
SQLite path (`:memory:`, a file path, or
`file:foo.db?cache=shared`).

## Playground

Try GoogleSQLite in your browser, with…
