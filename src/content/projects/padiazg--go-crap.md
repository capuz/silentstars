---
repo: "padiazg/go-crap"
name: "go-crap"
description: "A CLI tool that calculates the CRAP score (cyclomatic complexity x coverage) for Go projects."
url: "https://github.com/padiazg/go-crap"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 7
forks: 1
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-06-02T20:45:41Z"
lastCommitAt: "2026-06-24T00:23:14Z"
lastReleaseAt: "2026-06-18T21:24:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 60
maintainers: ["padiazg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1fd5712bb7245a8a485014955ae7336b115e2d8bf267d58b59569aa21bbf5b0/padiazg/go-crap"
---

# go-crap

CRAP score calculator for Go projects. Calculates the CRAP score (cyclomatic complexity × coverage) for every function in a Go module. Inspired by [cargo-crap](https://github.com/Boehs/cargo-crap) for Rust.

## Installation

```shell
go install github.com/padiazg/go-crap@latest
```

Or build from source:

```shell
git clone https://github.com/padiazg/go-crap.git
cd go-crap
go build -o go-crap .
```

Or use Brew:

```shell
brew tap padiazg/go-crap 
brew install go-crap
```

## Usage

```shell
go-crap scan [path] [flags]
```

Scans the Go module at the given path (defaults to `.`) and outputs a ranked table of functions by CRAP score.

### Example

```shell
# Scan current module
go-crap scan

# Scan a specific directory
go-crap scan ./internal/score

# Show only the 10 worst offenders
go-crap scan --top 10

# Fail CI if any function exceeds threshold
go-crap scan --fail-above --threshold 30

# Exclude test files and protobuf
go-crap scan --exclude '.*_test\.go' --exclude 'pb/.*\.go'
```

### Flags

| Flag | Short | Description | Default |
| - | - | - | - |
| `--threshold` | `-t` | Score above which a function is marked as problematic | `30.0` |
| `--fail-above` | | Exit…
