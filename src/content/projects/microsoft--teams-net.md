---
repo: "microsoft/teams.net"
name: "teams.net"
description: "A suite of packages used to build on the Teams Platform."
readmeQualityOk: true
url: "https://github.com/microsoft/teams.net"
homepage: "https://microsoft.github.io/teams-sdk/csharp"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 47
forks: 22
openIssues: 13
closedIssues: 106
watchers: 11
contributors: 4281
recentReleases: 0
createdAt: "2025-04-08T14:53:03Z"
lastCommitAt: "2026-11-02T17:53:19Z"
lastReleaseAt: "2025-12-22T15:00:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 58
maintainers: ["corinagum", "MehakBindra", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a22f9758493a44bd10b184e7ebcbed8cc5b2c01beefdfb439669985dfc277e94/microsoft/teams.net"
discussionCount: 0
---

# Microsoft Teams Bot Core SDK

The core SDK for building Microsoft Teams bots in .NET. It implements the [Activity Protocol](https://github.com/microsoft/Agents/blob/main/specs/activity/protocol-activity.md) and provides a modern, layered framework with first-class support for ASP.NET Core dependency injection, authentication via MSAL, and extensible activity schemas.

## Packages

| Package | Description |
|---------|-------------|
| [Microsoft.Teams.Core](https://github.com/microsoft/teams.net/blob/HEAD/src/Microsoft.Teams.Core/) | Foundational library &mdash; activity protocol, conversation client, user token client, middleware pipeline, and authentication |
| [Microsoft.Teams.Apps](https://github.com/microsoft/teams.net/blob/HEAD/src/Microsoft.Teams.Apps/) | High-level Teams framework &mdash; typed activity routing, handler registration, OAuth flows, Teams API clients, and streaming |
| [Microsoft.Teams.Apps.BotBuilder](https://github.com/microsoft/teams.net/blob/HEAD/src/Microsoft.Teams.Apps.BotBuilder/) | Compatibility bridge for existing Bot Framework SDK v4 bots to run on the new Core infrastructure |

## Quick Start

```csharp
using Microsoft.Teams.Apps;

var builder =…
