---
repo: "Resgrid/Relay"
name: "Relay"
description: "Dispatch personnel and units from audio inputs, streams, files and more. "
url: "https://github.com/Resgrid/Relay"
homepage: "https://resgrid.com"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["naudio", "wpf", "resgrid", "csharp", "dotnet", "wpf-application", "scanner", "audio", "firefighter", "firefighting"]
stars: 17
forks: 10
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 3
createdAt: "2018-04-22T03:14:41Z"
lastCommitAt: "2026-06-28T02:02:04Z"
lastReleaseAt: "2026-06-25T22:22:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 76
undervaluedScore: 67
maintainers: ["ucswift"]
openGraphImageUrl: "https://opengraph.githubassets.com/b23dc35e8a1f4b2d267a81b598e03579103553bee9a87b97ba2ae1683d07747a/Resgrid/Relay"
---

# Resgrid Relay

Resgrid Relay is a .NET 10 solution for creating Resgrid calls from either:

1. Windows audio tone monitoring
2. Direct SMTP ingestion for emails sent to Resgrid dispatch addresses

The project now uses the **Resgrid v4 API** and **OpenID Connect refresh-token authentication** instead of the legacy v3 username/password flow.

## Solution layout

| Project | Target | Purpose |
| --- | --- | --- |
| `Providers\Resgrid.Providers.ApiClient` | `net10.0` | Resgrid v4 API + OIDC refresh-token client |
| `Resgrid.Audio.Core` | `net10.0-windows` | Windows audio detection, recording, and audio-call submission |
| `Resgrid.Audio.Relay.Console` | `net10.0`, `net10.0-windows` | Main worker/CLI entry point for SMTP and audio modes |
| `Resgrid.Audio.Relay` | `net10.0-windows` | Lightweight Windows monitoring UI |
| `Resgrid.Audio.Tests` | `net10.0-windows` | Audio, dispatch-list, and SMTP routing tests |

## Modes

### SMTP mode

- Cross-platform
- Intended for Linux/Docker deployments
- Runs an SMTP listener and creates Resgrid calls from inbound mail
- Replaces the old Postmark SMTP email API path

### Audio mode

- Windows only
- Uses the existing DTMF/audio watcher flow
-…
