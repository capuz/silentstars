---
repo: "richlander/dotnet-inspect"
name: "dotnet-inspect"
description: "Tool to inspect .NET assets, like docker inspect and kubectl describe."
readmeQualityOk: true
url: "https://github.com/richlander/dotnet-inspect"
language: "C#"
languages: ["C#"]
languagePcts: [95]
stars: 147
forks: 10
openIssues: 458
closedIssues: 1216
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-01-24T16:42:59Z"
lastCommitAt: "2026-08-30T00:44:10Z"
lastReleaseAt: "2026-02-20T23:46:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 30
maintainers: ["richlander"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1b713b553928bac12d2a41241768603d941c4701b2d35372124f24c578fc0da/richlander/dotnet-inspect"
---

# dotnet-inspect

CLI tool for inspecting .NET libraries and NuGet packages. It is for .NET what
`docker inspect` and `kubectl describe` are for containers: view package
metadata, API surfaces, dependencies, source provenance, implementation
receipts, and version-to-version changes.

## Install or run

```bash
dotnet tool install -g dotnet-inspect
dotnet-inspect <command>
```

Run without installing:

```bash
dnx dotnet-inspect -y -- <command>
```

## Repository development SDK

Published tool users can install or run `dotnet-inspect` with the commands
above. Contributors building this repository should use the current .NET 11
preview SDK.

Check the selected SDK first:

```bash
command -v dotnet
dotnet --version
```

Build from source:

```bash
dotnet build dotnet-inspect.slnx -c Release
```

See [AGENTS.md](https://github.com/richlander/dotnet-inspect/blob/HEAD/AGENTS.md) for contributor workflow, targeted test commands,
and repository-specific guidance.

## What it inspects

| Source | Examples | Notes |
| ------ | -------- | ----- |
| NuGet packages | `package System.Text.Json`, `type --package Markout` | Supports versions, custom sources, `nuget.config`, TFMs, package layout,…
