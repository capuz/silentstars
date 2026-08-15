---
repo: "J-Tech-Japan/Sekiban"
name: "Sekiban"
description: "Sekiban - an Opinionated Event Sourcing and CQRS Framework using C#. It can store data into Azure Cosmos DB, AWS Dynamo DB or Postgres"
readmeQualityOk: true
url: "https://github.com/J-Tech-Japan/Sekiban"
homepage: "https://www.sekiban.dev"
language: "C#"
languages: ["C#"]
languagePcts: [73]
topics: ["cosmosdb", "cqrs", "csharp", "dynamodb", "eventsourcing", "c-sharp", "cosmos-db", "dynamo-db", "event-sourcing", "dotnet"]
stars: 378
forks: 11
openIssues: 0
closedIssues: 410
watchers: 6
contributors: 35
recentReleases: 0
createdAt: "2023-05-25T05:14:51Z"
lastCommitAt: "2026-08-15T04:04:46Z"
lastReleaseAt: "2023-07-13T15:38:57Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 96
undervaluedScore: 38
maintainers: ["tomohisa", "joemphilips", "tkawae"]
openGraphImageUrl: "https://opengraph.githubassets.com/859f6f600ac8966b52edd1f09ca6232450a966f45ef91d095ff1f2a57357ebaf/J-Tech-Japan/Sekiban"
fundingLinks: ["GITHUB:https://github.com/J-Tech-Japan"]
discussionCount: 17
---

# Sekiban - Event Sourcing and CQRS Framework

</p>

**Sekiban** is an event sourcing and CQRS framework for .NET. It supports Azure Cosmos DB, PostgreSQL, and DynamoDB as event stores, with Microsoft Orleans for actor-based scalability.

📚 **Documentation**: [sekiban.dev](https://www.sekiban.dev/)

## Implementations

> **Note**: Sekiban has two implementations. **DCB (Dynamic Consistency Boundary)** is the recommended approach for new projects. Legacy Sekiban.Pure is deprecated.

| Implementation | Description | Status |
|---------------|-------------|--------|
| **Sekiban DCB** | Dynamic Consistency Boundary - tag-based event sourcing | ✅ Recommended |
| Sekiban.Pure | Traditional aggregate-based event sourcing | ⚠️ Deprecated |
| Sekiban.Core | Single-server version without actor model | ❌ Legacy |
| Sekiban.ts | TypeScript event sourcing | 🔬 Alpha |

## Quick Start

### Sekiban DCB (Recommended)

```bash
dotnet new install Sekiban.Pure.Templates
dotnet new sekiban-orleans-aspire -n YourProjectName
```

### Cloud Deployment

DCB supports both Azure and AWS:

| Component | Azure | AWS |
|-----------|-------|-----|
| Event Store | Cosmos DB / PostgreSQL | DynamoDB |
|…
