---
repo: "forge-trust/AppSurface"
name: "AppSurface"
description: "AppSurface is a modular application-surface framework for .NET."
readmeQualityOk: true
url: "https://github.com/forge-trust/AppSurface"
language: "C#"
languages: ["C#"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 38
closedIssues: 244
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2025-08-09T22:46:47Z"
lastCommitAt: "2026-08-13T05:18:16Z"
lastReleaseAt: "2026-07-02T20:50:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 76
maintainers: ["akrock", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/faf982562b0bcda68cc5c543fb4ef75151b2ad2c5d3d8444949a1afed304ec7e/forge-trust/AppSurface"
---

# AppSurface

> ⚠️ **Under Construction:** This library is actively being developed and is not intended for production use yet.
> Monorepo for the ForgeTrust.AppSurface projects

ForgeTrust.AppSurface is a collection of .NET libraries designed to provide a lightweight, modular startup pipeline for both console and web applications.

If you are deciding which package to install first, start with the [AppSurface package chooser](https://github.com/forge-trust/AppSurface/blob/HEAD/packages/README.md). If you are choosing among Auth packages, use the [AppSurface Auth adoption ladder](https://github.com/forge-trust/AppSurface/blob/HEAD/start-here/auth-adoption-ladder.md) before installing optional auth adapters.

## Vision

The primary vision of AppSurface is to simplify application bootstrapping by encouraging **composition through small, focused modules**. Instead of monolithic startup classes or scattered configuration logic, AppSurface allows developers to encapsulate features into reusable modules that handle:

-   Dependency Injection (DI) registration
-   Host configuration
-   Application-specific startup logic

This approach aims to:
-   **Share cross-cutting concerns**…
