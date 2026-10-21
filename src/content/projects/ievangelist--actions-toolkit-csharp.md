---
repo: "IEvangelist/actions-toolkit-csharp"
name: "actions-toolkit-csharp"
description: "The unofficial GitHub ToolKit for developing GitHub Actions with C#"
readmeQualityOk: true
url: "https://github.com/IEvangelist/actions-toolkit-csharp"
homepage: "https://davidpine.dev/posts/github-actions-sdk/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["csharp", "docker", "dotnet", "github-actions"]
stars: 66
forks: 9
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2022-11-22T05:00:47Z"
lastCommitAt: "2026-10-21T23:35:58Z"
lastReleaseAt: "2023-11-18T03:02:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 43
maintainers: ["dependabot[bot]", "IEvangelist"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/569107047/6c47e13f-013b-41a1-9e3c-b60326eefec9"
fundingLinks: ["GITHUB:https://github.com/IEvangelist"]
---

# GitHub Actions Workflow .NET SDK

The .NET equivalent of the official GitHub [actions/toolkit](https://github.com/actions/toolkit) repository, and is currently a work in progress. While there isn't currently 100% feature complete compatibility between these two repositories, that is the eventual goal.

> [!IMPORTANT]
> This repository is in the middle of a rename and feature-parity initiative ([#5][issue-5]).
> NuGet package IDs are moving from `GitHub.Actions.*` to `ActionsToolkit.*`, and all ten
> upstream `@actions/toolkit` packages will ship together as **v1.0.0** of `ActionsToolkit.*`
> once each row in [PACKAGES.md](https://github.com/IEvangelist/actions-toolkit-csharp/blob/HEAD/PACKAGES.md) is fully ✅. Native AOT correctness is verified per
> package via dedicated `tests/<pkg>.Aot.Tests` projects.

[issue-5]: https://github.com/IEvangelist/actions-toolkit-csharp/issues/5

## Blog

[🔗 Hello from the GitHub Actions: Core .NET SDK](https://davidpine.net/blog/github-actions-sdk)

## GitHub Actions .NET Toolkit

The GitHub Actions .NET ToolKit provides a set of packages to make creating actions easier.

## Packages

:heavy_check_mark:…
