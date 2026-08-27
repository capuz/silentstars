---
repo: "Alos-no/Cloudflare.NET"
name: "Cloudflare.NET"
description: "C# client library for Cloudflare API: DNS, Zones, R2, D1, Workers, WAF, and more. Strongly-typed with resilience built-in."
readmeQualityOk: true
url: "https://github.com/Alos-no/Cloudflare.NET"
homepage: "https://alos.no/cfnet/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["cloudflare", "cloudflare-api", "cloudflare-dns", "cloudflare-r2", "csharp", "dotnet", "graphql", "s3", "cloudflare-account", "cloudflare-for-saas"]
stars: 30
forks: 5
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-04T19:24:19Z"
lastCommitAt: "2026-08-27T14:16:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 51
maintainers: ["alexis-"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a7b104f5ad72af3c40a1b104271a8c53f5d930c640d5ce727301752d3203330/Alos-no/Cloudflare.NET"
---

# Cloudflare.NET - .NET SDK for Cloudflare API

**Cloudflare.NET** is a comprehensive **C# client library** for the **Cloudflare REST API**. It provides strongly-typed access to Cloudflare services including DNS management, Zone configuration, R2 object storage, Workers, WAF rules, and more. Built with testability and maintainability in mind.

> Cloudflare does not provide an official **.NET SDK** or **C# library**. This project aims to fill that gap with a community-maintained alternative.

**[Documentation](https://alos.no/cfnet)** | **[Getting Started](https://alos.no/cfnet/articles/getting-started.html)** | **[API Reference](https://alos.no/cfnet/api/)**

## Packages

| Package | Description |
|---------|-------------|
| **Cloudflare.NET.Api** | Core REST API client for Zones, DNS, Security, and R2 bucket management |
| **Cloudflare.NET.R2** | High-level S3-compatible client for R2 object storage |
| **Cloudflare.NET.Analytics** | GraphQL client for Cloudflare Analytics API |

```bash
dotnet add package Cloudflare.NET.Api
dotnet add package Cloudflare.NET.R2        # Optional
dotnet add package Cloudflare.NET.Analytics # Optional
```

## Example

```csharp
// Register in…
