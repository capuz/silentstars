---
repo: "NosCoreIO/NosCore"
name: "NosCore"
description: "NosCore is a Nostale emulator in c# (.Net 10) using SuperSocket / Entity Framework / WebAPI / Autofac / Mapster / Serilog"
readmeQualityOk: true
url: "https://github.com/NosCoreIO/NosCore"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 162
forks: 85
openIssues: 79
closedIssues: 614
watchers: 15
contributors: 34
recentReleases: 0
createdAt: "2018-01-21T08:28:57Z"
lastCommitAt: "2026-11-16T11:51:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 45
maintainers: ["erwan-joly", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd72922fc40b92863c7338cabfd3977925b047270afa4bdefc1562d8c98e5239/NosCoreIO/NosCore"
fundingLinks: ["GITHUB:https://github.com/0Lucifer0", "PATREON:https://patreon.com/NosCore", "KO_FI:https://ko-fi.com/noscoreio"]
---

A NosTale server written in C# on .NET 11: master, login and world servers on PostgreSQL, with the game data read
from the client's own files.

## Getting started

[documentation/getting-started.md](https://github.com/NosCoreIO/NosCore/blob/HEAD/documentation/getting-started.md) goes from a fresh clone to a character in the
world: the game data the parser needs, the database, the order to start the servers in, the accounts that exist by
default and how to point a client at your server.
[documentation/architecture.md](https://github.com/NosCoreIO/NosCore/blob/HEAD/documentation/architecture.md) explains how the servers, the projects and the
sibling packages fit together.

It needs the [.NET 11 SDK](https://dotnet.microsoft.com/download/dotnet/11.0) and a PostgreSQL on `localhost:5432`
(user `postgres`, password `password`). Nothing else needs configuring. In short, with each server in its own
terminal:

```bash
dotnet build NosCore.sln
cd build/net11.0
dotnet NosCore.Parser.dll --folder <parser input folder>
dotnet NosCore.MasterServer.dll
dotnet NosCore.LoginServer.dll
dotnet NosCore.WorldServer.dll
```

The parser creates the database, applies the migrations and imports the game…
