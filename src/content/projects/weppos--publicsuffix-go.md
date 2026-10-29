---
repo: "weppos/publicsuffix-go"
name: "publicsuffix-go"
description: "Domain name parser for Go based on the Public Suffix List."
readmeQualityOk: true
url: "https://github.com/weppos/publicsuffix-go"
homepage: "https://simonecarletti.com/code/publicsuffix-go"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "golang", "publicsuffix", "psl"]
stars: 221
forks: 37
openIssues: 1
closedIssues: 25
watchers: 5
contributors: 8
recentReleases: 0
createdAt: "2016-03-10T21:36:33Z"
lastCommitAt: "2026-10-29T10:36:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 36
maintainers: ["github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2663c619532ecbbff11be90d7923f5b8ce190d9b7e342858aea3e50e31f6b57d/weppos/publicsuffix-go"
fundingLinks: ["GITHUB:https://github.com/weppos"]
---

# PublicSuffix for Go

The `publicsuffix` package provides a Go domain name parser based on the [Public Suffix List](https://publicsuffix.org/).

## Requirements

`publicsuffix-go` requires **Go >= 1.21**. We do our best not to break older versions of Go if we don't have to, but due to tooling constraints, we don't always test older versions.

## Getting started

Clone the repository [in your workspace](https://golang.org/doc/code.html#Organization) and move into it:

```shell
mkdir -p $GOPATH/src/github.com/weppos && cd $_
git clone git@github.com:weppos/publicsuffix-go.git
cd publicsuffix-go
```

Fetch the dependencies:

```shell
go get ./...
```

Run the test suite.

```shell
go test ./...
```

## Installation

```shell
go get github.com/weppos/publicsuffix-go
```

## Testing

The following command runs the entire test suite.

```shell
go test ./...
```

There are 3 different test suites built into this library:

- Acceptance: the acceptance test suite contains some high level tests to ensure the library behaves as expected
- PSL: the PSL test suite runs the library against the [official Public Suffix test cases](https://github.com/publicsuffix/list/blob/master/tests/tests.txt)…
