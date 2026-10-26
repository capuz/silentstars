---
repo: "paketo-buildpacks/dotnet-core"
name: "dotnet-core"
description: "A Cloud Native Buildpack for .NET Core"
readmeQualityOk: true
url: "https://github.com/paketo-buildpacks/dotnet-core"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [69, 31]
topics: ["cnb"]
stars: 49
forks: 6
openIssues: 14
closedIssues: 154
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2020-04-13T20:22:58Z"
lastCommitAt: "2026-10-26T18:06:39Z"
lastReleaseAt: "2021-01-29T22:07:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 54
maintainers: ["dependabot[bot]", "paketo-bot", "ZephireNZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/fea1d31f4021615a1d7a4427193c5e5f6d38554ce422b4cc574cc7bb8856f892/paketo-buildpacks/dotnet-core"
---

# Paketo Buildpack for .NET Core

## `docker.io/paketobuildpacks/dotnet-core`

The Paketo Buildpack for .NET Core provides a set of collaborating buildpacks that
enable the building of a .NET Core application. These buildpacks include:

- [ASP.NET Runtime CNB](https://github.com/paketo-buildpacks/dotnet-core-aspnet-runtime)
- [,NET Core SDK CNB](https://github.com/paketo-buildpacks/dotnet-core-sdk)
- [.NET Publish CNB](https://github.com/paketo-buildpacks/dotnet-publish)
- [.NET Execute CNB](https://github.com/paketo-buildpacks/dotnet-execute)
- [Visual Studio Debugger CNB](https://github.com/paketo-buildpacks/vsdbg)
- [ICU (International Components for Unicode) CNB](https://github.com/paketo-buildpacks/icu)

The buildpack supports building both runtime-dependent and self-contained
applications. Additionally, the buildpack supports a number of combinations of
runtimes, SDKs, and ASP.NET library configurations.

The buildpack supports the inclusion of
[NodeJS](https://nodejs.org) for applications that may require it. This support
is provided by the [Paketo Buildpack for Node Engine](https://github.com/paketo-buildpacks/node-engine).

Usage examples can be found in the
[`samples`…
