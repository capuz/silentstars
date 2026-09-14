---
repo: "Skymly/GitPulse"
name: "GitPulse"
description: "A cross-platform GitHub client built with .NET MAUI, showcasing the Observables reactive source-generator library."
readmeQualityOk: true
url: "https://github.com/Skymly/GitPulse"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["csharp", "dotnet", "github", "maui", "observables", "r3", "roslyn", "source-generator"]
stars: 7
forks: 0
openIssues: 4
closedIssues: 238
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-06-30T14:00:59Z"
lastCommitAt: "2026-09-14T09:12:20Z"
lastReleaseAt: "2026-09-01T16:26:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 61
maintainers: ["Skymly"]
openGraphImageUrl: "https://opengraph.githubassets.com/60a9eb259d00082aecb7e795d0fb33052322e11a8557761e33b738a5eda99708/Skymly/GitPulse"
---

# GitPulse

A cross-platform GitHub client built with .NET MAUI, serving as a real-world
showcase application for the [Observables](https://github.com/Skymly/Observables)
source-generator library (declarative reactive HTTP / events bridging for R3).

This is not a toy demo — it is a working tool the author uses day-to-day and
iterates on until genuinely useful.

## Quick Start

### Prerequisites

- .NET 10 SDK
- .NET MAUI workload (`dotnet workload install maui`)
- Windows (primary) or Android (secondary target)

### Build & Run

```powershell
git clone https://github.com/Skymly/GitPulse.git
cd GitPulse

# Via Nuke (CI-authoritative: format + Windows App compile + Android compile + library tests)
./build.ps1 --target CiAll --configuration Release

# Or traditional dotnet
dotnet build GitPulse.slnx -c Release
dotnet run --project src/GitPulse.App/GitPulse.App.csproj -c Debug -f net10.0-windows10.0.19041.0
```

### Configure GitHub Access

On first launch, open **Settings** and paste a GitHub Personal Access Token
(PAT). The token is encrypted at rest:

- Windows: DPAPI (CurrentUser scope)
- Android: SecureStorage

## Features

The application is under active development. See the…
