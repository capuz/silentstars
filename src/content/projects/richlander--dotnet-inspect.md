---
repo: "richlander/dotnet-inspect"
name: "dotnet-inspect"
description: "Tool to inspect .NET assets, like docker inspect and kubectl describe."
readmeQualityOk: true
url: "https://github.com/richlander/dotnet-inspect"
language: "C#"
languages: ["C#"]
languagePcts: [91]
stars: 151
forks: 12
openIssues: 999
closedIssues: 2666
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-01-24T16:42:59Z"
lastCommitAt: "2026-10-21T23:36:39Z"
lastReleaseAt: "2026-02-20T23:46:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 33
maintainers: ["richlander"]
openGraphImageUrl: "https://opengraph.githubassets.com/240123665de2581112cacde964a6aab5702141f38d32c07af939dbca2214b6d7/richlander/dotnet-inspect"
---

# dotnet-inspect

Inspect .NET libraries, NuGet packages, restored projects, and platform
assemblies without loading inspected code. Explore metadata, APIs,
dependencies, source, implementation details, and version differences from the
CLI or browser.

**Try it online:** [production demo][api-demo] ·
[working build](https://dotnet-inspect.ca) ·
[nightly CoreCLR interpreter](https://coreclr.dotnet-inspect.ca)

## Install or run

Install the global tool:

```bash
dotnet tool install -g dotnet-inspect
dotnet-inspect package System.Text.Json
```

Or run it without installing:

```bash
dnx dotnet-inspect -y -- package System.Text.Json
```

## Daily driver

### Inspect an API

```bash
dnx dotnet-inspect -y -- member JsonSerializer \
  --package System.Text.Json@10.0.0 Serialize:1 --tfm net10.0
```

[Open the same API in Inspect Web][api-demo].

### Review package dependencies

```bash
dnx dotnet-inspect -y -- depends \
  --package System.Text.Json@10.0.0 --tfm net10.0
```

[Open the same dependency view in Inspect Web][package-dependencies].

### Trace type dependencies

```bash
dnx dotnet-inspect -y -- depends JsonSerializer \
  --package System.Text.Json@10.0.0 --tfm net10.0
```…
