---
repo: "DuendeSoftware/docs.duendesoftware.com"
name: "docs.duendesoftware.com"
description: "Documentation for our Products"
readmeQualityOk: true
url: "https://github.com/DuendeSoftware/docs.duendesoftware.com"
homepage: "https://docs.duendesoftware.com"
language: "MDX"
languages: ["MDX"]
languagePcts: [89]
stars: 35
forks: 144
openIssues: 5
closedIssues: 172
watchers: 5
contributors: 108
recentReleases: 0
createdAt: "2020-09-10T13:52:12Z"
lastCommitAt: "2026-10-14T08:57:39Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 70
maintainers: ["maartenba", "khalidabuhakmeh", "Erwinvandervalk"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a2ac9a22af3817065a56a338956e5048df535c8c35977b88a64823afc8602dd/DuendeSoftware/docs.duendesoftware.com"
---

# docs.duendesoftware.com

Welcome to the documentation of all [Duende Software](https://duendesoftware.com) products and open-source tools!

## Getting Started

You will need the following installed:
* [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
* Node.js 24+

### Quick Start (Astro only)

```bash
cd astro
npm install
npm run dev
```

### Development with .NET Aspire

For local development with the full stack (Astro dev server + ASP.NET Core):

```bash
dotnet build.cs aspire
```

This starts:
* **Astro dev server** at http://localhost:4321 (with hot reload)
* **ASP.NET Core server** (for production-like static file serving)
* **Aspire Dashboard** at https://localhost:17001 (for traces, logs, metrics)

Alternatively in VS Code, GitHub Codespaces, or WebStorm, you can use the devcontainer to get a development environment set up.

## Build Commands

All commands use the `build.cs` file-based build script and can be run from any directory in the repository:

| Command | Action |
| :------ | :----- |
| `dotnet build.cs` | Build everything (Astro + .NET) |
| `dotnet build.cs astro-build` | Build Astro to wwwroot |
| `dotnet build.cs dotnet-build` | Build .NET…
