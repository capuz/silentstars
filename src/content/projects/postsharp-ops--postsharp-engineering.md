---
repo: "postsharp-ops/PostSharp.Engineering"
name: "PostSharp.Engineering"
description: "PostSharp.Engineering is the in-house multi-repo continuous build and integration framework used at PostSharp Technologies."
readmeQualityOk: true
url: "https://github.com/postsharp-ops/PostSharp.Engineering"
language: "C#"
languages: ["C#"]
languagePcts: [83]
topics: ["continuous-integration"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 13
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2021-12-02T11:58:22Z"
lastCommitAt: "2026-09-17T08:50:58Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 71
maintainers: ["gfraiteur", "PostSharpBot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f62f8a4b2964e1574b55b5b5ce4a264391bb968e306fd0703f27c37d18cc3ef/postsharp-ops/PostSharp.Engineering"
---

# PostSharp.Engineering

Build orchestration SDK for PostSharp and Metalama repositories.

## Overview

PostSharp.Engineering is an internal build orchestration framework designed for complex multi-repository .NET projects. It provides:

- **Unified build workflow** via `Build.ps1` front-end script
- **Dependency management** across repositories (local, feed, and build server sources)
- **CI/CD integration** with TeamCity project and build configuration generation
- **Multi-target publishing** to NuGet feeds, VSIX marketplace, AWS S3, IIS, and more
- **Version management** with automatic bumping and tagging
- **Docker support** for containerized builds

While released under an open-source license (as a dependency of Metalama), this SDK is an ad-hoc solution for PostSharp/Metalama projects, not a general-purpose build framework.

## Packages

This repository produces three NuGet packages:

| Package | Purpose |
|---------|---------|
| **PostSharp.Engineering.BuildTools** | Core build SDK, added as a PackageReference from the `eng/src` build project |
| **PostSharp.Engineering.Sdk** | MSBuild SDK with `.props` and `.targets` files for project configuration |…
