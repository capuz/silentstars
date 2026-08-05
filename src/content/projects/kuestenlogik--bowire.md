---
repo: "Kuestenlogik/Bowire"
name: "Bowire"
description: "Multi-protocol API workbench for .NET — discover, invoke, record, mock, replay across gRPC, REST, GraphQL, MQTT, SignalR, WebSocket, SSE, MCP, OData, Socket.IO, and more... including your custom protocol."
readmeQualityOk: true
url: "https://github.com/Kuestenlogik/Bowire"
homepage: "https://bowire.io"
language: "C#"
languages: ["C#", "JavaScript"]
languagePcts: [58, 30]
topics: ["api-client", "api-testing", "api-workbench", "csharp", "developer-tools", "dotnet", "graphql", "grpc", "http-client", "mcp"]
stars: 6
forks: 1
openIssues: 77
closedIssues: 274
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-02T20:06:21Z"
lastCommitAt: "2026-08-04T22:11:57Z"
lastReleaseAt: "2026-05-04T21:44:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 57
maintainers: ["thomas-stegemann", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/66710b189c55bd65bdb934f31512678b96b5456912b2985e8100f5b83d6aaec0/Kuestenlogik/Bowire"
discussionCount: 4
postedAt: "2026-07-17T06:06:24.975Z"
---

# Bowire

**The multi-protocol API workbench.** gRPC, REST, GraphQL, JSON-RPC, SignalR, WebSocket, SSE, MQTT, Socket.IO, MCP, OData, AsyncAPI, AMQP, Kafka, Akka.NET, NATS, SOAP, Pulsar — run against any service URL with zero code changes.

[Quickstart](https://bowire.io/quickstart.html) · [Features](https://bowire.io/features.html) · [Why Bowire](https://bowire.io/why-bowire.html) · [Docs](https://bowire.io/docs/) · [Downloads](https://bowire.io/downloads.html) · [Bootcamp](https://bowire.io/bootcamp/)

## Install

```bash
# .NET tool (cross-platform, recommended)
dotnet tool install -g Kuestenlogik.Bowire.Tool
```

Windows MSIs, portable ZIPs, Docker images, and pending winget / Homebrew / Chocolatey distributions — all listed on the [Downloads page](https://bowire.io/downloads.html). It's the source of truth for what's available right now.

→ **[5-minute Quickstart](https://bowire.io/quickstart.html)** for the first call against your own service.

## Embedded mode

Mount the workbench inside an existing ASP.NET host:

```bash
dotnet add package Kuestenlogik.Bowire
```

```csharp
var app = WebApplication.Create(args);
app.MapBowire();   // workbench at /bowire
app.Run();
```…
