---
repo: "DebugProbe/DebugProbe.AspNetCore"
name: "DebugProbe.AspNetCore"
description: "Inspect ASP.NET Core HTTP traffic with a built-in dashboard and compare traces across environments."
readmeQualityOk: true
url: "https://github.com/DebugProbe/DebugProbe.AspNetCore"
homepage: "http://debugprobe.dev"
language: "C#"
languages: ["C#", "JavaScript"]
languagePcts: [62, 26]
topics: ["aspnetcore", "debugging", "developer-tools", "diagnostics", "dotnet", "middleware", "request-tracing", "observability", "tracing", "trace-comparison"]
stars: 33
forks: 6
openIssues: 1
closedIssues: 34
watchers: 2
contributors: 8
recentReleases: 10
createdAt: "2026-04-17T20:11:33Z"
lastCommitAt: "2026-07-12T06:17:27Z"
lastReleaseAt: "2026-07-09T04:25:50Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 50
maintainers: ["georgidhristov", "DevSars24", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a44430d65b3c54bc5458454c49b984e7516ac825ccdeff1cc6777e5872f214a/DebugProbe/DebugProbe.AspNetCore"
discussionCount: 3
---

# DebugProbe.AspNetCore

DebugProbe.AspNetCore is a lightweight ASP.NET Core debugging tool for inspecting HTTP traffic directly inside your application.

It captures request and response data, exposes a local dashboard, and helps compare traces across environments so you can spot differences between local, staging, and other API runs.

## Links

- Website: [debugprobe.dev](https://debugprobe.dev)
- Documentation: [debugprobe.dev/docs](https://debugprobe.dev/docs)
- Roadmap: [Roadmap.md](https://github.com/DebugProbe/DebugProbe.AspNetCore/blob/main/Roadmap.md)
- Live demo: [demo.debugprobe.dev/debug](https://demo.debugprobe.dev/debug)
- Demo API: [demo.debugprobe.dev/swagger](https://demo.debugprobe.dev/swagger)
- NuGet: [DebugProbe.AspNetCore](https://www.nuget.org/packages/DebugProbe.AspNetCore)

## Install

```bash
dotnet add package DebugProbe.AspNetCore
```

## Quick Start

```csharp
builder.Services.AddDebugProbe();

app.UseDebugProbe();
```

Start your application and open:

```txt
http://localhost:{port}/debug
```

In Production, DebugProbe captures traces but does not register UI endpoints unless explicitly enabled.
DebugProbe does not require authentication by default.…
