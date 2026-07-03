---
repo: "richlander/dotnet-inspect"
name: "dotnet-inspect"
description: "Tool to inspect .NET assets, like docker inspect."
url: "https://github.com/richlander/dotnet-inspect"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 139
forks: 8
openIssues: 61
closedIssues: 462
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-01-24T16:42:59Z"
lastCommitAt: "2026-07-03T12:21:11Z"
lastReleaseAt: "2026-02-20T23:46:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 29
maintainers: ["richlander"]
openGraphImageUrl: "https://opengraph.githubassets.com/495d8b6fd23fdcdf057799fcf41fb7ab7e57eb482acc066399c83215ba3ffa0f/richlander/dotnet-inspect"
---

# dotnet-inspect

CLI tool for inspecting .NET libraries and NuGet packages. It is for .NET what `docker inspect` and `kubectl describe` are for container land: view package metadata, API surfaces, dependencies, source provenance, and version-to-version changes.

## Install or run

```bash
dotnet tool install -g dotnet-inspect
dotnet-inspect <command>
```

Run without installing:

```bash
dnx dotnet-inspect -y -- <command>
```

## What it inspects

| Source | Examples | Notes |
| ------ | -------- | ----- |
| NuGet packages | `package System.Text.Json`, `type --package Markout` | Supports versions, custom sources, `nuget.config`, TFMs, package layout, dependencies, and vulnerabilities. |
| Restored projects | `type Command --project ./src/App`, `project ./src/App -S Grounding --print` | Uses an existing `project.assets.json` as restored-assets context for API lookup, relationship search, and package grounding; restore/build first if dependencies changed. No restore/build/MSBuild evaluation is run. |
| Platform libraries | `library System.Private.CoreLib`, `library System.Text.Json --version 10.0.0`, `diff --platform System.Runtime@9.0.0..10.0.0` | Resolves installed SDK/runtime…
