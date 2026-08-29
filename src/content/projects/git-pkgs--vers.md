---
repo: "git-pkgs/vers"
name: "vers"
description: "A Go library for parsing, comparing and sorting version ranges according to the VERS spec. "
readmeQualityOk: true
url: "https://github.com/git-pkgs/vers"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "package-management", "package-url", "vers", "version-ranges"]
stars: 5
forks: 2
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-15T07:57:13Z"
lastCommitAt: "2026-08-29T10:21:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 60
maintainers: ["andrew", "dependabot[bot]", "abhinavgautam01"]
openGraphImageUrl: "https://opengraph.githubassets.com/3700f4d5bb6cd44e1e79ffd0ea83b7504b7eb7f13d4c05345bcfdc98dbbfb0f7/git-pkgs/vers"
fundingLinks: ["GITHUB:https://github.com/andrew", "KO_FI:https://ko-fi.com/andrewnez", "BUY_ME_A_COFFEE:https://buymeacoffee.com/andrewnez"]
---

# vers

A Go implementation of the [VERS specification](https://github.com/package-url/purl-spec/blob/main/VERSION-RANGE-SPEC.rst) for version range parsing and comparison across package ecosystems.

## Installation

```bash
go get github.com/git-pkgs/vers
```

## Usage

### Parse VERS URIs

The VERS URI format provides a universal way to express version ranges:

```go
package main

import (
    "fmt"
    "github.com/git-pkgs/vers"
)

func main() {
    // Parse a VERS URI
    r, _ := vers.Parse("vers:npm/>=1.0.0|<2.0.0")

    fmt.Println(r.Contains("1.5.0"))  // true
    fmt.Println(r.Contains("2.0.0"))  // false
    fmt.Println(r.Contains("0.9.0"))  // false
}
```

### Parse Native Package Manager Syntax

Each package ecosystem has its own version constraint syntax. This library parses them all:

```go
// npm: caret, tilde, x-ranges, hyphen ranges
r, _ := vers.ParseNative("^1.2.3", "npm")
r, _ = vers.ParseNative("~1.2.3", "npm")
r, _ = vers.ParseNative("1.0.0 - 2.0.0", "npm")
r, _ = vers.ParseNative(">=1.0.0 <2.0.0", "npm")

// Composer: caret, tilde, wildcard, hyphen, AND and OR ranges
r, _ = vers.ParseNative("^1.2.3", "composer")
r, _ = vers.ParseNative("~1.2", "composer")
r, _…
