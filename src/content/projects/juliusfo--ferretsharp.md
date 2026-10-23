---
repo: "JuliusFo/FerretSharp"
name: "FerretSharp"
description: "Oracle explorer for .NET developers – workspaces, FK navigation, sandbox editing, EF Core model and LINQ console"
readmeQualityOk: true
url: "https://github.com/JuliusFo/FerretSharp"
language: "C#"
languages: ["C#"]
languagePcts: [78]
topics: ["blazor", "database", "dotnet", "entity-framework-core", "linq", "oracle", "sql-editor", "wpf"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-02T07:28:25Z"
lastCommitAt: "2026-10-23T09:33:14Z"
lastReleaseAt: "2026-10-08T10:48:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 67
maintainers: ["JuliusFo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1401313031/f8c84ad3-3037-492d-8c13-3aefac4cd3b6"
---

An Oracle database explorer for .NET developers – with workspaces, foreign-key navigation,<br>
  safe sandbox editing and a bridge to your EF Core model.

> [!NOTE]
> The user interface is in English and German (*Settings › Appearance › Language*; English by default). Code, commits and
> this README are in English; the design notes in `docs/` are German.

## Why

General-purpose database tools know your schema, but not your application. FerretSharp is built around the way a .NET
developer works with an Oracle database day to day:

- **Workspaces** per connection – "Bug 3711", "Export Q3" – each with its own tabs, filters and its **own database session**,
  so two workspaces can look at (and later edit) the same table independently.
- **Follow the data**: jump from a row to the rows it references or that reference it – also along relationships that
  exist only in your EF Core model, without a foreign-key constraint.
- **Edit without fear**: every change runs in an explicit transaction you commit or roll back; production connections are
  read-only by default, enforced by Oracle itself.
- **Speak C#**: entity and property names next to tables and columns, enum members instead of…
