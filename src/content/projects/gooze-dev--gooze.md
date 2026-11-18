---
repo: "gooze-dev/gooze"
name: "gooze"
description: "Mutation testing for Go: incremental cache, CI sharding, OCI baselines"
readmeQualityOk: true
url: "https://github.com/gooze-dev/gooze"
homepage: "https://gooze.dev"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["golang", "mutation", "mutation-testing", "test", "test-automation", "ci", "code-quality", "go", "testing"]
stars: 5
forks: 1
openIssues: 69
closedIssues: 74
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-11T12:37:28Z"
lastCommitAt: "2026-11-18T12:03:04Z"
lastReleaseAt: "2026-06-21T14:38:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 89
undervaluedScore: 70
maintainers: ["mouse-blink"]
openGraphImageUrl: "https://opengraph.githubassets.com/64996af8727b53da376b9d8b1f439c2fb49062c8f455a69219f14e68aa536fdc/gooze-dev/gooze"
---

A Golang mutation testing tool inspired by TMNT "ooze" mutagen.

Gooze helps you measure test suite quality by introducing small, controlled mutations
into your Go source and running tests to see which changes are caught. It supports
Go path patterns (like `./...`) for fast targeting and can parallelize mutation runs
to speed up larger projects.

**Choosing a tool?** See the [comparison of Go mutation testing tools](https://gooze.dev/docs/comparison/).

## Install

```bash
go install gooze.dev/pkg/gooze@latest
```

`gooze.dev/pkg/gooze` is a vanity import path: `https://gooze.dev/pkg/gooze?go-get=1`
serves a `go-import` meta tag pointing at this repository.

## Quick start

```bash
gooze run --estimate ./...   # preview files and mutation counts, no tests run
gooze run ./...              # run mutation testing
gooze report view            # per-file scores and surviving mutations
```

`gooze report view [paths...]` summarizes the stored reports: one row per file,
then one line per mutation that counts against the score, one per mutation that
did not build, if any, then the score:
