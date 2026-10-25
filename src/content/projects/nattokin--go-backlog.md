---
repo: "nattokin/go-backlog"
name: "go-backlog"
description: "Go client library for Nulab Backlog API"
readmeQualityOk: true
url: "https://github.com/nattokin/go-backlog"
homepage: "https://pkg.go.dev/github.com/nattokin/go-backlog"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["backlog", "nulab-backlog", "backlog-client", "backlog-api"]
stars: 5
forks: 1
openIssues: 31
closedIssues: 119
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-03-24T13:03:28Z"
lastCommitAt: "2026-10-25T08:40:16Z"
lastReleaseAt: "2026-04-17T15:51:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 83
maintainers: ["nattokin", "dependabot[bot]", "x0Lazarus"]
openGraphImageUrl: "https://opengraph.githubassets.com/1668b1041f28ccd426b427b014d4e114b219c02ae8830ee3e653b0dc62941a90/nattokin/go-backlog"
---

go-backlog
====

[Go](https://golang.org) client library for [Nulab Backlog API](https://developer.nulab.com/docs/backlog)

## Features

- **Type-safe option builders** — Filter and configure requests using strongly-typed option methods (e.g. `WithKeyword`, `WithCount`, `WithOrder`), avoiding raw string/map parameters.
- **Idiomatic Go structs** — API responses are mapped to Go structs with proper types (`time.Time`, typed constants, etc.) instead of raw JSON.
- **Context support** — Every API method accepts `context.Context` for cancellation and timeout control.
- **Structured error types** — Errors are returned as typed values (e.g. `*APIResponseError` for API errors, `*ValidationError` for invalid arguments), enabling precise handling with `errors.As`.

## Requirements

- Go >= 1.23

## Installation

```
go get github.com/nattokin/go-backlog
```

## Examples

```go
c, err := backlog.NewClient(
    os.Getenv("BACKLOG_BASE_URL"),
    os.Getenv("BACKLOG_TOKEN"),
)

// Get all Wiki pages in a project.
wikis, err := c.Wiki.List(context.Background(), "MYPROJECT")

// Filter by keyword using an option.
wikis, err = c.Wiki.List(context.Background(), "MYPROJECT",…
