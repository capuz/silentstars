---
repo: "corvus-dotnet/Corvus.JsonSchema"
name: "Corvus.JsonSchema"
description: "Support for Json Schema validation and entity generation"
readmeQualityOk: true
url: "https://github.com/corvus-dotnet/Corvus.JsonSchema"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["json-schema", "json-schema-validator"]
stars: 202
forks: 25
openIssues: 10
closedIssues: 368
watchers: 10
contributors: 11
recentReleases: 0
createdAt: "2021-11-17T11:55:01Z"
lastCommitAt: "2026-11-13T10:25:22Z"
lastReleaseAt: "2022-07-01T10:17:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 41
maintainers: ["mwadams", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc640e5c8c387d9e23da11a357d0150f2ec10f5e4e498f4e4fec89c8fdd3ea21/corvus-dotnet/Corvus.JsonSchema"
discussionCount: 7
---

# Corvus.Text.Json

High-performance, source-generated, strongly-typed C# models from JSON Schema — with pooled-memory parsing, full draft 4 through 2020-12 validation, and 136B per-document allocation.

## Features

- **Source Generation** — Generate strongly-typed C# from JSON Schema at build time with the Roslyn incremental source generator, or ahead of time with the `corvusjson` CLI tool.
- **[OpenAPI](#openapi)** — Generate strongly-typed OpenAPI 2.0, 3.0, 3.1, and 3.2 HTTP clients and ASP.NET Core server stubs with typed parameters, request/response validation, streaming, and result matching.
- **[AsyncAPI](#asyncapi)** — Generate strongly-typed AsyncAPI 2.6 and 3.0 producers, consumers, handlers, and request/reply flows with broker transport packages for NATS, Kafka, AMQP, MQTT, WebSocket, and Azure Service Bus.
- **Schema Validation** — Full JSON Schema draft 4, 6, 7, 2019-09, and 2020-12 validation. Over 10× faster than other .NET JSON Schema validators.
- **Pooled Memory** — `ParsedJsonDocument<T>` uses `ArrayPool<byte>` for minimal GC impact. Just 136 bytes per-document allocation.
- **Mutable Documents** — `JsonDocumentBuilder<T>` and `JsonWorkspace` provide a builder…
