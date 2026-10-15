---
repo: "EvotecIT/DbaClientX"
name: "DbaClientX"
description: "DbaClientX is a small PowerShell module that allows running queries against SQL Server, PostgreSQL, MySQL, SQLite, and Oracle"
readmeQualityOk: true
url: "https://github.com/EvotecIT/DbaClientX"
language: "C#"
languages: ["C#"]
languagePcts: [92]
topics: ["dbatools", "powershell", "sql-server"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-06-13T18:25:56Z"
lastCommitAt: "2026-10-15T08:32:04Z"
lastReleaseAt: "2026-06-20T16:02:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 79
maintainers: ["PrzemyslawKlys"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/814801483/c64023fa-0904-4d4b-a12d-b4e69d2a1f12"
fundingLinks: ["GITHUB:https://github.com/PrzemyslawKlys", "CUSTOM:https://paypal.me/PrzemyslawKlys"]
---

# DbaClientX - Multi-provider database client for .NET and PowerShell

DbaClientX is a lightweight database client for .NET and PowerShell. It keeps the database-specific work in provider libraries and exposes a small PowerShell surface for pleasant data movement, query execution, transactions, and bulk writes.

## NuGet Packages

## PowerShell Module

## Two Brands In One Repository

DbaClientX remains the database and data-movement product. Its .NET packages and `DbaClientX` PowerShell module keep their existing version family and `DbaX` commands.

FabricClientX is an unreleased sibling product for Microsoft Fabric and Power BI automation. It has separate .NET packages, a `FabricClientX` PowerShell module, `FabricX` commands, version source, package-build configuration, and artifact folder. The two brands share this repository while their APIs and consumers settle, but they can be installed and released independently.

See [`Module-FabricClientX`](https://github.com/EvotecIT/DbaClientX/blob/HEAD/Module-FabricClientX) for the intended command surface and [`docs/architecture-decision.md`](https://github.com/EvotecIT/DbaClientX/blob/HEAD/docs/architecture-decision.md) for the…
