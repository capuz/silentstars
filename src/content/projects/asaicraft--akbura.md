---
repo: "Asaicraft/Akbura"
name: "Akbura"
description: "Akbura is a UI library for building applications using a declarative, component-based language."
readmeQualityOk: true
url: "https://github.com/Asaicraft/Akbura"
language: "C#"
languages: ["C#"]
languagePcts: [97]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2025-11-20T10:47:34Z"
lastCommitAt: "2026-09-28T10:06:16Z"
lastReleaseAt: "2026-09-11T08:36:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5675555409fb7a832da1fff8f2cf60f5269b868fe730fdaab0645f895a616653/Asaicraft/Akbura"
discussionCount: 0
---

# Akbura

Akbura is an experimental declarative UI language and compiler for .NET and Avalonia, with reactive state and typed styling through AKCSS.

The `Akbura` package includes BlackSilence, the production incremental compiler. Furioso remains only as a compatibility baseline for tests and benchmarks.

> [!WARNING]
> Akbura is under active development. Syntax and APIs may change.

## Getting started

Install the current Akbura templates from NuGet:

```bash
dotnet new install Akbura.Templates::12.0.4-alpha.13
```

Create and run an Avalonia desktop application:

```bash
dotnet new akbura.app -n MyApp
cd MyApp
dotnet run
```

The template includes Akbura, AKCSS, Debug diagnostics, and optional dependency
injection. Use `--di Microsoft.Extensions.DependencyInjection` or
`--di Splat.Locator` when creating the project to select a DI provider.

To add Akbura to an existing Avalonia project instead, install the package and
create a component with the item template:

```bash
dotnet add package Akbura --version 12.0.4-alpha.13
dotnet new akbura.component -n Counter --namespace MyApp.Components -o Components
```

For a component with a C# code-behind partial class, use
`dotnet new…
