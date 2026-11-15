---
repo: "credfeto/credfeto-dotnet-package-update"
name: "credfeto-dotnet-package-update"
description: "Dotnet tool for updating packages automatically"
readmeQualityOk: true
url: "https://github.com/credfeto/credfeto-dotnet-package-update"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 1
closedIssues: 25
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2018-05-23T14:03:40Z"
lastCommitAt: "2026-11-15T11:12:40Z"
lastReleaseAt: "2021-11-05T10:43:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 78
maintainers: ["credfeto", "dnyw4l3n13"]
openGraphImageUrl: "https://opengraph.githubassets.com/40f0a2fe4f7e7f9aca39faadb97af3be28248cefd62dbfc213a63156fba2d8d6/credfeto/credfeto-dotnet-package-update"
fundingLinks: ["GITHUB:https://github.com/credfeto", "BUY_ME_A_COFFEE:https://buymeacoffee.com/mark.ridgwell"]
---

# credfeto-dotnet-package-update

Command line .NET global tool that scans a folder of projects and updates NuGet package references to
the latest available version, for use in scripted or automated builds.

## Build Status

| Branch  | Status                                                |
| ------- | ----------------------------------------------------- |
| main    | [][pre-release] |
| release | [][release]             |

## Overview

`Credfeto.Package.Update` walks every project under a given folder, finds references to a package (or
a prefix of package ids), checks the configured NuGet feeds for a newer version, and rewrites the
project files in place. It is designed to be driven from a script or CI pipeline rather than used
interactively: it exits with a non-zero code when nothing was updated, and prints the ids and versions
of every package it changed so a calling script can act on the result.

## Quick Start

```shell
dotnet tool install --global Credfeto.Package.Update
dotnet updatepackages --folder D:\Source --package-id Credfeto.Extensions:prefix
```

## Installation

### Install as a global tool

```shell
dotnet tool install --global Credfeto.Package.Update
```

To…
