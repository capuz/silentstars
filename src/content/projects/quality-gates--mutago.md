---
repo: "quality-gates/mutago"
name: "mutago"
description: "Mutation testing for Go. Find gaps in your test suite."
readmeQualityOk: true
url: "https://github.com/quality-gates/mutago"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 9
forks: 5
openIssues: 30
closedIssues: 103
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-05-29T13:39:18Z"
lastCommitAt: "2026-11-07T09:30:42Z"
lastReleaseAt: "2026-07-13T14:51:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 55
maintainers: ["jonbaldie"]
openGraphImageUrl: "https://opengraph.githubassets.com/1abaa2e62743b4a810343b2b398a9feababcba358adf10a298827a5a58558099/quality-gates/mutago"
---

# mutago

Catch weak tests in Go before they calcify: small source changes that should
fail the suite and do not. Mutation testing answers whether the tests would
catch a real bug of that shape — not only whether lines executed.

`mutago` is a local CLI. It mutates Go production source, runs your tests
against each mutant, and reports kills, escapes, and scores. Go 1.26+.
Full documentation: https://quality-gates.github.io/mutago/

## Quick start

```console
go install github.com/quality-gates/mutago/v2/cmd/mutago@latest
mutago ./...
```

That mutates the module and prints each mutant status on stdout. Exit `0` is
clean against any configured gates; non-zero means a gate failed or the tool
or test run failed.

Common next steps:

```console
mutago --coverage ./...
mutago --coverage --min-msi 75 --min-covered-msi 80 ./...
mutago --quiet --coverage --logger-github ./...
```

## Install

```console
# Homebrew (macOS)
brew install quality-gates/tap/mutago

# Go install
go install github.com/quality-gates/mutago/v2/cmd/mutago@latest
mutago --version
```

## Custom mutators

Register your own operators with `mutator.Register`, then blank-import their
package in a full mutago clone and…
