---
repo: "git-pkgs/manifests"
name: "manifests"
description: "A Go library for parsing package manager manifest and lockfiles."
readmeQualityOk: true
url: "https://github.com/git-pkgs/manifests"
homepage: "https://git-pkgs.dev"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["dependencies", "go", "lockfile", "package-management", "software-supply-chain", "git-pkgs", "golang"]
stars: 6
forks: 7
openIssues: 13
closedIssues: 27
watchers: 2
contributors: 8
recentReleases: 5
createdAt: "2026-01-15T08:11:13Z"
lastCommitAt: "2026-11-23T12:20:45Z"
lastReleaseAt: "2026-09-16T07:11:25Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 89
maintainers: ["andrew", "abhinavgautam01", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5164c99a71d87bbda54a10eac6cd4ccc1bf596192b1e24dc3ca7e83f94da7b64/git-pkgs/manifests"
fundingLinks: ["GITHUB:https://github.com/andrew", "KO_FI:https://ko-fi.com/andrewnez", "BUY_ME_A_COFFEE:https://buymeacoffee.com/andrewnez"]
---

# manifests

A Go library for parsing package manager manifest and lockfiles. Extracts dependencies with version constraints, scopes, and integrity hashes.

## Installation

```bash
go get github.com/git-pkgs/manifests
```

## Usage

```go
package main

import (
    "fmt"
    "os"
    "github.com/git-pkgs/manifests"
)

func main() {
    content, _ := os.ReadFile("package.json")
    result, err := manifests.Parse("package.json", content)
    if err != nil {
        panic(err)
    }

    fmt.Printf("Ecosystem: %s\n", result.Ecosystem)
    fmt.Printf("Kind: %s\n", result.Kind)
    fmt.Printf("Package: %s %s\n", result.Name, result.Version)
    for _, dep := range result.Dependencies {
        fmt.Printf("  %s@%s (%s)\n", dep.Name, dep.Version, dep.Scope)
    }
}
```
