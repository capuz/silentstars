---
repo: "SheepReaper/IHeartFiction"
name: "IHeartFiction"
description: "I❤️Fiction is an ambitious open-source project to build a modern, feature-rich platform for both original and fan fiction. Built on a .NET and ASP.NET Core backend with a Blazor frontend, it aims to be a viable competitor to established platforms by focusing on a clean user experience, powerful authoring tools, and a strong community."
readmeQualityOk: true
url: "https://github.com/SheepReaper/IHeartFiction"
homepage: "https://iheartfiction.net"
language: "JavaScript"
languages: ["JavaScript", "C#"]
languagePcts: [50, 40]
topics: ["aspnetcore", "blazor", "cqrs", "docker", "dotnet", "dotnet-aspire", "entityframeworkcore", "fanfiction", "fiction", "keycloak"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2019-07-06T21:56:44Z"
lastCommitAt: "2026-07-21T06:12:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 82
maintainers: ["renovate[bot]", "SheepReaper", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5659abae244e1f4d6c1895724865209c418d98ed87a57d7e0cdd93c9009365b0/SheepReaper/IHeartFiction"
fundingLinks: ["GITHUB:https://github.com/SheepReaper", "PATREON:https://patreon.com/SheepReaper", "KO_FI:https://ko-fi.com/sheepreaper", "BUY_ME_A_COFFEE:https://buymeacoffee.com/bgonza8687"]
discussionCount: 5
---

# I❤️Fiction

I❤️Fiction is an ambitious open-source project to build a modern, feature-rich platform for both original and fan fiction. Built on a .NET and ASP.NET Core backend with a Blazor frontend, it aims to be a viable competitor to established platforms by focusing on a clean user experience, powerful authoring tools, and a strong community.

## Getting Started

To get the project running locally, you'll need the following installed:

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- (Optional) [Aspire CLI](https://learn.microsoft.com/en-us/dotnet/aspire/fundamentals/setup-tooling?tabs=unix%2Cwindows&pivots=dotnet-cli#-aspire-cli)

Once the prerequisites are installed, you can run the project using the .NET CLI:

```bash
dotnet run --project src/aspire/IHFiction.AppHost
```

OR (If the AppHost is set up as the default startup project)

```bash
dotnet run
```

Alternatively, you can run the project using the Aspire CLI (if you have it installed).

```bash
aspire run
```

### After the stack starts (First-time Set-up)

The Keycloak realm `fiction` is pre-configured by the realm import file.…
