---
repo: "Kuestenlogik/Bowire"
name: "Bowire"
description: "The API workbench that embeds in your own service. gRPC, REST, GraphQL, MQTT, SignalR, WebSocket, MCP and more - embedded in ASP.NET or as a standalone CLI."
readmeQualityOk: true
url: "https://github.com/Kuestenlogik/Bowire"
homepage: "https://bowire.io"
language: "C#"
languages: ["C#", "JavaScript"]
languagePcts: [60, 30]
topics: ["api-client", "api-testing", "api-workbench", "csharp", "developer-tools", "dotnet", "graphql", "grpc", "http-client", "mcp"]
stars: 12
forks: 1
openIssues: 113
closedIssues: 479
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-02T20:06:21Z"
lastCommitAt: "2026-10-21T07:44:33Z"
lastReleaseAt: "2026-05-04T21:44:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 51
maintainers: ["github-actions[bot]", "thomas-stegemann"]
openGraphImageUrl: "https://opengraph.githubassets.com/a19f764b424aff7bde6195cb8e3c80bea0ced22dedabe740e6d7ff41bb8eca80/Kuestenlogik/Bowire"
discussionCount: 14
postedAt: "2026-07-17T06:06:24.975Z"
---

# Bowire

**The API workbench that embeds in your own service.** gRPC, REST, GraphQL, JSON-RPC, SignalR, WebSocket, SSE, MQTT, Socket.IO, MCP, OData, AsyncAPI, AMQP, Kafka, Akka.NET, NATS, SOAP, Pulsar — run against any service URL with zero code changes.

[Quickstart](https://bowire.io/quickstart.html) · [Features](https://bowire.io/features.html) · [Why Bowire](https://bowire.io/why-bowire.html) · [Docs](https://bowire.io/docs/) · [Downloads](https://bowire.io/downloads.html) · [Bootcamp](https://bowire.io/bootcamp/)

## Install

```bash
# .NET tool (cross-platform, recommended)
dotnet tool install -g Kuestenlogik.Bowire.Tool
```

Windows MSIs, portable ZIPs, Docker images, `winget install Kuestenlogik.Bowire`, and `choco install bowire` — with a Homebrew tap still pending — all listed on the [Downloads page](https://bowire.io/downloads.html). It's the source of truth for what's available right now.

→ **[5-minute Quickstart](https://bowire.io/quickstart.html)** for the first call against your own service.

## Embedded mode

Mount the workbench inside an existing ASP.NET host:

```bash
dotnet add package Kuestenlogik.Bowire
```

```csharp
var app = WebApplication.Create(args);…
