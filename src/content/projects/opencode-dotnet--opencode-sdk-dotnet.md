---
repo: "opencode-dotnet/opencode-sdk-dotnet"
name: "opencode-sdk-dotnet"
description: "Unofficial typed .NET SDK for the opencode HTTP API (pre-release; MCP server planned)."
readmeQualityOk: true
url: "https://github.com/opencode-dotnet/opencode-sdk-dotnet"
homepage: "https://www.nuget.org/packages/OpenCodeDotNet.Sdk/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["csharp", "dotnet", "http-client", "openapi", "opencode", "sdk"]
stars: 32
forks: 0
openIssues: 139
closedIssues: 191
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-08-07T22:26:54Z"
lastCommitAt: "2026-10-31T07:29:47Z"
lastReleaseAt: "2026-10-13T01:28:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 91
undervaluedScore: 44
maintainers: ["Blind-Striker"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b076a61e3a4ba61f6e3fa53b6adbb64665478c80953bf059c4edb8905107c59/opencode-dotnet/opencode-sdk-dotnet"
---

# opencode SDK for .NET

> **🚀 Quick Start**: [Install](#-installation) | [Quick start](#-quick-start) | [Guide](https://github.com/opencode-dotnet/opencode-sdk-dotnet/blob/master/docs/guide/getting-started.md) | [API coverage](#-api-coverage)

> **Unofficial.** This project is not affiliated with or endorsed by the
> [opencode](https://opencode.ai) team.

> **📦 New package ids and a new home (`0.9.0-preview.5`).** The packages are now
> [`OpenCodeDotNet.Sdk`](https://www.nuget.org/packages/OpenCodeDotNet.Sdk) and
> [`OpenCodeDotNet.Sdk.Extensions`](https://www.nuget.org/packages/OpenCodeDotNet.Sdk.Extensions);
> `OpenCodeAI.Sdk` and `OpenCodeAI.Sdk.Extensions` are deprecated. Namespaces are unchanged, so
> only the `PackageReference` changes. The repository moved to the `opencode-dotnet` organization,
> and old links redirect.

A strongly typed .NET client for the [opencode](https://github.com/anomalyco/opencode) server — the
HTTP API that every opencode front-end (TUI, desktop, web UI, plugins) uses. The SDK speaks the
OpenCode 2.x API; the 1.x server API is not supported.

```csharp
await using var server = await OpenCodeServer.StartAsync();
using var client =…
