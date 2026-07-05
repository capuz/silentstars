---
repo: "dmbyer/Hedron"
name: "Hedron"
description: "A C# mud with web admin targeting .net core on Blazor server"
readmeQualityOk: true
url: "https://github.com/dmbyer/Hedron"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["mud", "mud-server", "text-game", "rpg", "text-based-game", "csharp"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 24
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2018-12-12T03:14:48Z"
lastCommitAt: "2026-07-05T21:00:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 72
maintainers: ["dmbyer"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc1478ea7985b44b794c591d98a2fd4137f5d1694c652b7a6a272af3a908a949/dmbyer/Hedron"
---

# Hedron

Hedron is a C# **MUD (Multi-User Dungeon) game engine** targeting **.NET 8**. It serves a live, event-driven world over a telnet listener, with content authored as YAML data files and editable through an in-process Blazor web UI. The codebase is under active rebuild — see [`CLAUDE.md`](https://github.com/dmbyer/Hedron/blob/HEAD/CLAUDE.md) and [`docs/`](https://github.com/dmbyer/Hedron/blob/HEAD/docs/) for architecture and roadmap.

## Requirements

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- Any OS supported by the .NET 8 runtime (developed on Windows)

## Project structure

| Project | Output | Responsibility |
|---|---|---|
| [`Core/`](https://github.com/dmbyer/Hedron/blob/HEAD/Core/) | library | The engine: ECS components, systems, handlers, events, commands, and the content/persistence modules. No transport or hosting. |
| [`Server/`](https://github.com/dmbyer/Hedron/blob/HEAD/Server/) | console exe | Telnet host. Owns DI composition (`CompositionRoot`) and the headless `generate` content-generation run-mode. |
| [`Hedron.Web/`](https://github.com/dmbyer/Hedron/blob/HEAD/Hedron.Web/) | web app | Blazor Server **content-authoring UI** (browse / create /…
