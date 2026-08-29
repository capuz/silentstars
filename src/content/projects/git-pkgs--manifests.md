---
repo: "git-pkgs/manifests"
name: "manifests"
description: "A Go library for parsing package manager manifest and lockfiles. "
readmeQualityOk: true
url: "https://github.com/git-pkgs/manifests"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["dependencies", "go", "lockfile", "package-management", "software-supply-chain"]
stars: 5
forks: 4
openIssues: 8
closedIssues: 8
watchers: 1
contributors: 5
recentReleases: 6
createdAt: "2026-01-15T08:11:13Z"
lastCommitAt: "2026-08-29T10:20:07Z"
lastReleaseAt: "2026-08-28T15:56:07Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 86
undervaluedScore: 73
maintainers: ["andrew", "dependabot[bot]", "abhinavgautam01"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b978af6a735403d1211024ca22b1ac57d4f7d4ee29d3f7ea5f67ff3dac83bc2/git-pkgs/manifests"
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

## Supported Ecosystems

| Ecosystem | Manifests | Lockfiles |
|-----------|-----------|-----------|
| alpine | APKBUILD | |
| arch | PKGBUILD | |
| asdf | .tool-versions | |
| bazel | MODULE.bazel | |
| bower | bower.json | |
| brew | Brewfile | Brewfile.lock.json |
| cargo | Cargo.toml | Cargo.lock |
| carthage | Cartfile, Cartfile.private | Cartfile.resolved |
| clojars | project.clj | |
| cocoapods | Podfile,…
