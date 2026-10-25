---
repo: "Valour-Software/Valour"
name: "Valour"
description: "Valour is bringing communities into the future with unique features, blazing performance, and respect for users."
readmeQualityOk: true
url: "https://github.com/Valour-Software/Valour"
homepage: "https://valour.gg"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [64, 21]
topics: ["chat", "blazor", "communities", "csharp", "dotnet", "dotnetcore", "social-media", "social-network", "streaming", "video"]
stars: 400
forks: 42
openIssues: 94
closedIssues: 539
watchers: 13
contributors: 28
recentReleases: 0
createdAt: "2020-10-16T18:56:46Z"
lastCommitAt: "2026-10-25T22:11:08Z"
lastReleaseAt: "2026-02-14T03:52:02Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "funded", "community_hub"]
healthScore: 96
undervaluedScore: 38
maintainers: ["SpikeViper", "SkyJoshua", "Toby222"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/304714369/4b40cf05-bb91-4ed9-9226-e83653a2d97f"
fundingLinks: ["PATREON:https://patreon.com/ValourSoftware", "CUSTOM:https://patreon.com/ValourSoftware"]
discussionCount: 24
---

# Valour

Valour is an open-source community platform built with .NET and Blazor.
Communities are called planets. Each planet can have chat channels, thread feeds,
wikis, voice and video calls, roles, an economy, and a village where members walk
around and meet. The client supports tabs, splits, and multiple open conversations.

Use the app at [app.valour.gg](https://app.valour.gg), install the Android app from
[Google Play](https://play.google.com/store/apps/details?id=gg.valour.app), or visit
[valour.gg](https://valour.gg) for the public website and the other downloads. The
[documentation index](https://github.com/Valour-Software/Valour/blob/HEAD/Docs/README.md) covers development, hosting, and architecture.

## Codebase

| Directory | Purpose |
| --- | --- |
| `Config/` | Server configuration classes and a sample settings file |
| `Valour/Client/` | Shared Razor UI, client services, TypeScript, styles, and assets |
| `Valour/Client.Blazor/` | Browser WebAssembly host for the shared UI |
| `Valour/Client.Maui/` | Native application host |
| `Valour/Sdk/` | API client, models, caches, and SignalR connections |
| `Valour/Shared/` | Shared contracts, permissions, requests, and…
