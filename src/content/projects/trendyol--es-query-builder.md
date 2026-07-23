---
repo: "Trendyol/es-query-builder"
name: "es-query-builder"
description: "A Simple query builder for Elasticsearch"
readmeQualityOk: true
url: "https://github.com/Trendyol/es-query-builder"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["elasticsearch", "performant", "query-builder", "simple", "builder", "go", "golang", "query"]
stars: 35
forks: 2
openIssues: 1
closedIssues: 14
watchers: 9
contributors: 67
recentReleases: 0
createdAt: "2024-09-02T11:07:06Z"
lastCommitAt: "2026-07-23T06:16:34Z"
lastReleaseAt: "2024-10-29T15:09:57Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 82
undervaluedScore: 31
maintainers: ["GokselKUCUKSAHIN", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f42b5bc1dbb35d7ddbadab08f57e2a65c3324149c2008291e5c167755b2af34a/Trendyol/es-query-builder"
---

# es-query-builder [][doc] [][release] [][ci] [][go-report] [][cov] [][scorecard] [][opensff-badge]

A simple, user-friendly, and streamlined library for programmatically building Elasticsearch DSL queries in Go, designed
for low overhead and minimal memory usage.

## Install
With [Go's module support](https://go.dev/wiki/Modules#how-to-use-modules), `go [build|run|test]` automatically fetches the necessary dependencies when you add the import in your code:

```sh
import "github.com/Trendyol/es-query-builder"
```

Alternatively, use `go get`:

```sh
go get -u github.com/Trendyol/es-query-builder
```

### Example
```json
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "author": "George Orwell"
          }
        }
      ],
      "must_not": [
        {
          "terms": {
            "genre": [
              "Fantasy",
              "Science Fiction"
            ]
          }
        },
        {
          "exists": {
            "field": "out_of_print"
          }
        }
      ],
      "should": [
        {
          "terms": {
            "title": [
              "1984",
              "Animal Farm"
            ]
          }
        }…
