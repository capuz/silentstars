---
repo: "omeid/conex"
name: "conex"
description: "Conex integrates Docker with testing package so you can easily run your integration tests with containers."
readmeQualityOk: true
url: "https://github.com/omeid/conex"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["golang", "docker", "testing-tools", "integration-testing", "docker-golang"]
stars: 87
forks: 10
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2017-04-17T10:13:24Z"
lastCommitAt: "2026-07-16T05:59:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 38
maintainers: ["omeid"]
openGraphImageUrl: "https://opengraph.githubassets.com/74a8b0f435be608a224dd1e8fadf700540d510c5a5a7601253145a2b695c23e9/omeid/conex"
---

# Conex [](https://godoc.org/github.com/omeid/conex) [](https://goreportcard.com/report/github.com/omeid/conex)

Conex integrates Go `testing` with Docker (and Tart, experimentally) so integration tests can start real dependencies with less boilerplate.

## Why?

Integration tests are high-value when they run against real services. Conex handles common setup work so tests stay focused on behavior:

- Start and stop containers
- Create unique names to avoid collisions
- Pull images (or build from Dockerfiles) before tests run
- Wait for TCP/UDP ports to accept connections
- Expose ports

It also supports a driver convention so reusable test helpers can register their required images.

## Quick Start

To use conex, simply call `conex.Main(m)` from `TestMain`:

```go
package example_test

import (
  "testing"

  "github.com/omeid/conex"
)

func TestMain(m *testing.M) {
  conex.Main(m)
}
```

## Example

```go
package example_test

import (
  "testing"

  "github.com/omeid/conex"
  "github.com/conex/postgres"
  _ "github.com/lib/pq" // Bring your own driver!
)

func TestMain(m *testing.M) {
  conex.Main(m)
}

func TestPostgres(t *testing.T) {
  db, container := postgres.Box(t, nil)…
