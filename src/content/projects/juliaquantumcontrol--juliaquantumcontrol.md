---
repo: "JuliaQuantumControl/JuliaQuantumControl"
name: "JuliaQuantumControl"
description: "Development environment for the @JuliaQuantumControl organization"
readmeQualityOk: true
url: "https://github.com/JuliaQuantumControl/JuliaQuantumControl"
homepage: "https://github.com/JuliaQuantumControl"
language: "Julia"
languages: ["Julia"]
languagePcts: [95]
topics: ["julia", "devops"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-10-16T16:16:44Z"
lastCommitAt: "2026-09-17T01:41:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 46
undervaluedScore: 41
maintainers: ["goerz"]
openGraphImageUrl: "https://opengraph.githubassets.com/530c97299c9f8c723f5fd14ed81b06b6ab2dd821e47f8a7e48d438ad0a2bd134/JuliaQuantumControl/JuliaQuantumControl"
---

# JuliaQuantumControl Dev Environment

The packages within the [JuliaQuantumControl][] organization are tightly coupled. This repository provides a development environment that contains checkouts of all packages, together with scripts for working across the organization.

When developing on a Unix system ([WSL](https://docs.microsoft.com/en-us/windows/wsl/) is recommended on Windows), set up the development environment with

```
git clone git@github.com:JuliaQuantumControl/JuliaQuantumControl.git
cd JuliaQuantumControl
make clone
```

This clones all the active package repositories within the [JuliaQuantumControl][] organization, as well as the [`.github`](https://github.com/JuliaQuantumControl/.github) repository with the organization-wide [`CONTRIBUTING.md`](https://github.com/JuliaQuantumControl/.github/blob/master/CONTRIBUTING.md), into subfolders of `JuliaQuantumControl`. You may then navigate into any of the package folders for development, e.g.

```
cd QuantumControl.jl
make test
make devrepl
```

Run `make` within a package folder for the available targets. The development workflow for the packages is described in…
