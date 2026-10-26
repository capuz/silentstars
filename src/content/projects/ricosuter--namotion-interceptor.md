---
repo: "RicoSuter/Namotion.Interceptor"
name: "Namotion.Interceptor"
description: "Observable .NET object graphs with MQTT, OPC UA, and WebSocket sync"
readmeQualityOk: true
url: "https://github.com/RicoSuter/Namotion.Interceptor"
language: "C#"
languages: ["C#"]
languagePcts: [94]
topics: ["aspnetcore", "blazor", "csharp", "dotnet", "graphql", "interceptor", "iot", "mqtt", "opcua", "websocket"]
stars: 14
forks: 1
openIssues: 162
closedIssues: 57
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-03-20T09:46:35Z"
lastCommitAt: "2026-10-26T09:18:13Z"
lastReleaseAt: "2025-03-25T22:53:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 81
undervaluedScore: 58
maintainers: ["RicoSuter"]
openGraphImageUrl: "https://opengraph.githubassets.com/da1236ee7852bbb6ec13ea995c99db956b3f5d5661f94319bea6839a0091f28a/RicoSuter/Namotion.Interceptor"
---

> **Note**: This library is in active development. APIs may change between versions.

# Namotion.Interceptor for .NET

Namotion.Interceptor is a .NET library for building reactive applications with automatic property tracking and change propagation. It uses **C# 13 partial properties** and **source generation** to transform your classes into observable object graphs, without reflection on property access or proxy objects.

Mark your classes with `[InterceptorSubject]` and declare properties as `partial`. The source generator handles the rest: creating interception logic, change detection, derived property updates, and lifecycle management. Your domain models remain clean POCOs while gaining reactive capabilities.

The library supports **bidirectional synchronization** with external systems. When a property changes locally, connectors propagate the change outward. When external data arrives, your object model updates and triggers change notifications. Built-in integrations include MQTT, OPC UA, WebSocket, ASP.NET Core, Blazor, GraphQL, and MCP. Typical use cases are IoT dashboards, industrial HMIs, real-time web apps, and data synchronization services.

## Why Namotion.Interceptor?…
