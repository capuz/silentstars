---
repo: "dgageot/gogo"
name: "gogo"
description: "A fast and capable task runner"
readmeQualityOk: true
url: "https://github.com/dgageot/gogo"
homepage: "https://dgageot.github.io/gogo/"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 17
forks: 10
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-09T10:00:37Z"
lastCommitAt: "2026-07-24T05:53:33Z"
lastReleaseAt: "2026-07-22T08:15:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 88
undervaluedScore: 57
maintainers: ["dgageot", "dependabot[bot]", "melmennaoui"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d116dfd08345adccac9f539edd9b491d3f4280059243b2825e2376e15f5d31c/dgageot/gogo"
---

# gogo

A simple task runner.

## Installation

```sh
go install github.com/dgageot/gogo@latest
```

## Usage

Create a `gogo.yaml` in your project root:

```yaml
tasks:
  default:
    cmd: echo "Hello, World!"

  build:
    cmd: go build -o bin/myapp ./...
    sources: go            # built-in preset: **/*.go + go.mod + go.sum
    generates:
      - bin/myapp

  test:
    cmd: go test ./...
    sources: go
```

Run a task:

```sh
gogo build
gogo test
```

List available tasks:

```sh
gogo -l
```

Watch sources and re-run on changes:

```sh
gogo -w test
```

Dry run — see what would execute:

```sh
gogo -n build
```

## Features

A quick tour. Each item links to the canonical docs page.

- **Incremental builds** — SHA-256 source checksums or `generates:` timestamp comparison ([Sources & Checksums](https://dgageot.github.io/gogo/features/sources-checksums/))
- **Status checks** — `status:` commands probe the desired end state and skip the task when it already exists
- **Source presets** — reuse named glob lists; built-in `go` / `go-vendored`, or define your own ([Sources & Checksums](https://dgageot.github.io/gogo/features/sources-checksums/#presets))
- **Watch mode** — polls…
