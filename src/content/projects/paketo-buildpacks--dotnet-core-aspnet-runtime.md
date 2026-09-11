---
repo: "paketo-buildpacks/dotnet-core-aspnet-runtime"
name: "dotnet-core-aspnet-runtime"
description: "A Cloud Native Buildpack that installs the ASP.NET Core Runtime"
readmeQualityOk: true
url: "https://github.com/paketo-buildpacks/dotnet-core-aspnet-runtime"
language: "Go"
languages: ["Go"]
languagePcts: [83]
stars: 6
forks: 2
openIssues: 3
closedIssues: 12
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2022-08-03T15:21:35Z"
lastCommitAt: "2026-09-11T08:14:20Z"
lastReleaseAt: "2023-02-07T21:43:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 78
maintainers: ["dependabot[bot]", "paketo-bot", "ZephireNZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/864694ed25272f32a22b049a1804238ecd8f6c66b9d77f8913d51f63595f5113/paketo-buildpacks/dotnet-core-aspnet-runtime"
---

# Paketo Buildpack for ASP.NET Core Runtime

The ASP.NET Core Runtime CNB provides a version of the [ASP.NET Core
Runtime](https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0).
The ASP.NET Core Runtime dependency will be made available on the `$PATH` and
`$DOTNET_ROOT` at run-time for .NET Core apps containing a
`*.runtimeconfig.json` file with runtime frameworks specified.

The buildpack is published for consumption as an image at
`paketobuildpacks/dotnet-core-aspnet-runtime`. It is a part of the [Paketo
Buildpack for .NET Core](https://github.com/paketo-buildpacks/dotnet-core),
which is a top-level language family buildpack that leverages all related .NET
Core buildpacks together.

## Integration

The ASP.NET Core Runtime CNB provides `dotnet-core-aspnet-runtime` as a
dependency. Downstream buildpacks, like [.NET Core
Execute](https://github.com/paketo-buildpacks/dotnet-execute) can require the
`dotnet-core-aspnet-runtime` dependency by generating a [Build Plan
TOML](https://github.com/buildpacks/spec/blob/master/buildpack.md#build-plan-toml)
file that looks like the following:

```toml
[[requires]]

  # The name of the ASP.NET Core Runtime dependency is…
