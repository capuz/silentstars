---
repo: "credfeto/credfeto-dotnet-repo-tools"
name: "credfeto-dotnet-repo-tools"
description: "DotNet / C# repo bulk update tools"
readmeQualityOk: true
url: "https://github.com/credfeto/credfeto-dotnet-repo-tools"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["code-cleanup", "dotnet", "dotnet-core", "package-management", "template-manager"]
stars: 7
forks: 1
openIssues: 28
closedIssues: 90
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-12-16T11:00:19Z"
lastCommitAt: "2026-11-15T11:12:54Z"
lastReleaseAt: "2024-01-03T08:59:44Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 74
maintainers: ["credfeto", "dnyw4l3n13", "steward-warden"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5d40b9407444001dd343ef9f0d24e59024a1efd8a6ecfc503d2ed21f41b3aa4/credfeto/credfeto-dotnet-repo-tools"
fundingLinks: ["GITHUB:https://github.com/credfeto", "BUY_ME_A_COFFEE:https://buymeacoffee.com/mark.ridgwell"]
---

# credfeto-dotnet-repo-tools

Bulk-manages a fleet of .NET/C# git repositories: keeps their NuGet packages up to date, syncs common files from a shared template repository, prunes unnecessary dependencies, and cleans up code style, all across many repositories in one run.

## Overview

`updaterepo` clones every repository listed in a `repos.lst` file, applies the requested operation (package updates, template sync, dependency reduction, or code cleanup), and pushes the results back as commits, tracking progress in a `tracking.json` file so repeated runs are incremental. A standalone companion tool, `cscleanup`, formats individual C# files or projects without needing a git repository at all.

## Quick Start

After [installing](#installation) the tool:

```bash
dotnet updaterepo update-packages \
    --repositories repos.lst \
    --work ~/temp \
    --tracking ~/temp/tracking.json \
    --packages packages.json \
    --template git@github.com:credfeto/cs-template.git \
    --release release.json
```

## Installation

```bash
dotnet tool install --global Credfeto.DotNet.Repo.Tools.Cmd
dotnet tool install --global Credfeto.DotNet.Repo.Formatter
```

## Usage

`updaterepo` exposes…
