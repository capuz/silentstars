---
repo: "jaeyeom/sugo"
name: "sugo"
description: "Handy syntactic sugar that can save you the trouble. Written in Go."
readmeQualityOk: true
url: "https://github.com/jaeyeom/sugo"
language: "Go"
languages: ["Go"]
languagePcts: [90]
stars: 11
forks: 1
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-07-28T22:05:17Z"
lastCommitAt: "2026-08-13T05:18:19Z"
lastReleaseAt: "2025-12-23T18:48:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 68
undervaluedScore: 36
maintainers: ["jaeyeom"]
openGraphImageUrl: "https://opengraph.githubassets.com/28b9d4a36d8db0a8e616d6e7a40d9049e2bff38252762dfdb2ae4891dac348c6/jaeyeom/sugo"
---

# sugo
Sugo offers handy syntactic sugar (though not technically a syntactic sugar) for
Go, designed to simplify your code and save you time. Whether you're dealing
with repetitive tasks or complex operations, `sugo` provides intuitive solutions
that enhance readability and efficiency in Go programming.

## Features
 - **par**: Run multiple goroutines concurrently, possibly for parellelizing it.
 - **errors/must**: If you prefer not to manually handle errors, you may use it.
   Use `must.Of` / `must.Of2` / `must.Of3` for any type.
 - **ptr/ref**: Convenient way to create a pointer to a literal value.
   Use `ref.Of` for any type.
 - **ptr/deref**: Convenient way to dereference a pointer with a default value
   for a `nil` pointer. Use `deref.Of` / `deref.Or` for any type.
 - **arg**: ArgMin/ArgMax.
 - **ranger**: To deal with integer indices safely. It's more useful with `par`.

## Getting Started

### Installation
```bash
go get github.com/jaeyeom/sugo
```

## Usage
Please take a look at examples in https://pkg.go.dev/github.com/jaeyeom/sugo

## Versions
Backward compatibility is guaranteed for the same major version since v1.0.0.

## Contributing
We welcome contributions from…
