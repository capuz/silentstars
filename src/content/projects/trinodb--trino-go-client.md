---
repo: "trinodb/trino-go-client"
name: "trino-go-client"
description: "Go client for Trino"
readmeQualityOk: true
url: "https://github.com/trinodb/trino-go-client"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 185
forks: 76
openIssues: 0
closedIssues: 94
watchers: 7
contributors: 511
recentReleases: 0
createdAt: "2020-08-03T16:07:09Z"
lastCommitAt: "2026-10-16T07:47:58Z"
lastReleaseAt: "2023-05-17T17:31:35Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 45
maintainers: ["nineinchnick", "slachiewicz", "Flgado"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bb551595e0e9ef07e1cebc64bbc8da7c348dbe17e4124e2281823133865c94d/trinodb/trino-go-client"
---

# Trino Go client

A [Trino](https://trino.io) client for the [Go](https://golang.org) programming
language. It is a driver for the standard `database/sql` package: your program
opens a `*sql.DB` and sends SQL statements to Trino over HTTP or HTTPS, and
the driver turns the results into Go values.

The driver authenticates with HTTP Basic credentials, Kerberos, JSON web
tokens or OAuth2, reads results through the spooling protocol when the server
offers it, runs transactions, and converts every Trino type, including nested
`ARRAY`, `MAP`, `ROW` and `VARIANT` values, into Go values.

## Requirements

* Go 1.27 or newer
* Trino 372 or newer

## Installation

```bash
go get github.com/trinodb/trino-go-client/trino
```

## Quick start

Import the package for its side effect of registering the `trino` driver, then
open a database with a [DSN](#dsn):

```go
import (
	"database/sql"

	_ "github.com/trinodb/trino-go-client/trino"
)

db, err := sql.Open("trino", "http://user@localhost:8080?catalog=tpch&schema=sf1")
if err != nil {
	return err
}
defer db.Close()

rows, err := db.QueryContext(ctx, "SELECT name, regionkey FROM nation WHERE nationkey < ?", 5)
if err != nil {
	return err
}…
