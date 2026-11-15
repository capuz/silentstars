---
repo: "viewizard/dncdbg"
name: "dncdbg"
description: "DNCDbg is a managed-code debugger for .NET applications with Debug Adapter Protocol (DAP) support."
readmeQualityOk: true
url: "https://github.com/viewizard/dncdbg"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["debugger", "csharp", "coreclr", "dotnet", "managed", "dap"]
stars: 29
forks: 5
openIssues: 3
closedIssues: 3
watchers: 1
contributors: 6
recentReleases: 2
createdAt: "2026-01-19T19:50:58Z"
lastCommitAt: "2026-11-15T08:25:10Z"
lastReleaseAt: "2026-10-09T10:08:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["viewizard"]
openGraphImageUrl: "https://opengraph.githubassets.com/9393da13d81b3af765d4fd0d8e07c08e424c6e556acc36f747b5c322f2d26269/viewizard/dncdbg"
---

# Debugger for the .NET Core Runtime

**DNCDbg** is an acronym for .NET Core (dot net core) Debugger. It implements the [Debug Adapter Protocol](https://microsoft.github.io/debug-adapter-protocol/), allowing you to debug .NET applications running on all versions of the .NET runtime.

Initially, DNCDbg was based on version 3.1.3 of the [NetCoreDbg](https://github.com/Samsung/netcoredbg) source code, but unlike NetCoreDbg, its development is fully hosted on GitHub, making it more collaborative and flexible.

**Project goals:** implement functionality close to that of the MSVS C# debugger (excluding features related to the MSVS IDE and those not supported by DAP), provide complete [Debug Adapter Protocol](https://microsoft.github.io/debug-adapter-protocol/) support, and achieve low memory consumption and high performance.

## Development Process

The project uses Trunk-Based Development, which means you can build the current upstream code and be sure you have the latest version with all features and fixes included. Upcoming changes can be found in [CHANGELOG.md](https://github.com/viewizard/dncdbg/blob/HEAD/CHANGELOG.md).

## Contributing

Contributions are welcome! Please read our…
