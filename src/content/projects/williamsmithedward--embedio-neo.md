---
repo: "WilliamSmithEdward/embedio-neo"
name: "embedio-neo"
description: "Tiny. Modular. Cross-platform. A modern continuation of EmbedIO Web Server for .NET"
readmeQualityOk: true
url: "https://github.com/WilliamSmithEdward/embedio-neo"
homepage: "https://www.nuget.org/packages/EmbedIO-Neo"
language: "C#"
languages: ["C#"]
languagePcts: [92]
topics: ["cross-platform", "csharp", "dotnet", "embedded", "http", "http-server", "lightweight", "rest-api", "webapi", "webserver"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 131
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-05T01:01:12Z"
lastCommitAt: "2026-11-03T12:47:09Z"
lastReleaseAt: "2026-10-17T02:23:32Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 70
maintainers: ["WilliamSmithEdward", "dependabot[bot]", "williamsmithedward-repo-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/36a1d1eeca1401e78b8cebfa791b120bb9750f378effd32b03d35c4b5998bd44/WilliamSmithEdward/embedio-neo"
discussionCount: 2
---

# EmbedIO-Neo

A small, modular web server for .NET. EmbedIO-Neo lets you add JSON APIs, static
files and WebSockets to desktop apps, local tools and services.

Upgrading? Coming from the original EmbedIO 3.x, start with the
[upgrade checklist](https://github.com/WilliamSmithEdward/embedio-neo/blob/main/docs/compatibility/upgrading-from-embedio-3.md). Already on
EmbedIO-Neo v1, read the [v1-to-v2 migration guide](https://github.com/WilliamSmithEdward/embedio-neo/blob/main/docs/compatibility/neo-v1-to-v2.md).

## Overview

V2 uses an independently authored HTTP engine with HTTP/1.1, HTTP/2 and HTTP/3
protocol implementations. The Microsoft HttpListener and Mono-derived listener
backends have been removed. Applications retain the EmbedIO namespaces and
modular request pipeline.

- JSON callbacks and attribute-based Web API controllers.
- Static, embedded and ZIP-backed files, including conditional requests and ranges.
- Managed WebSockets, sessions, CORS and server-sent events.
- Opt-in bearer authentication, controller roles and policies, with a separate JWT adapter.
- Bounded authenticated tus uploads with checksums and process-restart recovery (2.12.0+).
- HTTPS with an…
