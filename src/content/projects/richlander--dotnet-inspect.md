---
repo: "richlander/dotnet-inspect"
name: "dotnet-inspect"
description: "Tool to inspect .NET assets, like docker inspect."
url: "https://github.com/richlander/dotnet-inspect"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 137
forks: 8
openIssues: 46
closedIssues: 312
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-01-24T16:42:59Z"
lastCommitAt: "2026-06-27T00:36:09Z"
lastReleaseAt: "2026-02-20T23:46:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 29
maintainers: ["richlander"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e8dfc089a4d1ea7466f4f43d7aeba5edc0d27a3f447b639ad7b3eb9fb73d077/richlander/dotnet-inspect"
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
| Restored projects | `project ./src/App --agents-index`, `project ./src/App --readme Markout` | Resolves direct package references from `project.assets.json` for compact package grounding manifests and version-pinned docs. |
| Platform libraries | `library System.Private.CoreLib`, `library System.Text.Json --version 10.0.0`, `diff --platform System.Runtime@9.0.0..10.0.0` | Resolves installed SDK/runtime assemblies, including runtime-only implementation assemblies with no NuGet package. |
| Local…
