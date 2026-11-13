---
repo: "dlrivada/Encina"
name: "Encina"
description: "Build regulation-ready .NET 10 applications — GDPR, NIS2, EU AI Act compliance out of the box. 107 packages: ROP/CQRS core, 10 DB providers, ABAC security, messaging patterns, sharding, CDC, caching, event sourcing, and more."
readmeQualityOk: true
url: "https://github.com/dlrivada/Encina"
language: "C#"
languages: ["C#"]
languagePcts: [96]
topics: ["abac", "caching", "change-data-capture", "compliance", "database-sharding", "distributed-systems", "domain-driven-design", "dotnet-library", "enterprise", "eu-ai-act"]
stars: 10
forks: 3
openIssues: 2124
closedIssues: 809
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-12-22T11:41:00Z"
lastCommitAt: "2026-11-13T11:20:41Z"
lastReleaseAt: "2026-03-25T13:18:06Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 83
undervaluedScore: 59
maintainers: ["dlrivada", "seragAhmed", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e7494ff10ba639d92c3cd0f169ddea0d4e626f384c67a8fc932a14bf19a884f/dlrivada/Encina"
discussionCount: 1
---

# Encina

**Build resilient .NET applications with Railway Oriented Programming.**

Encina is a comprehensive toolkit for building robust .NET applications. Built on [LanguageExt](https://github.com/louthy/language-ext), it provides explicit error handling through `Either<EncinaError, T>`, CQRS patterns, messaging infrastructure, and composable pipeline behaviors.

## Key Features

- **Railway Oriented Programming**: All operations return `Either<EncinaError, T>` - no exceptions for business logic
- **CQRS Support**: Explicit `ICommand<T>` and `IQuery<T>` contracts with dedicated handlers
- **Pipeline Behaviors**: Composable middleware for validation, caching, transactions, and more
- **Audit Trail**: Automatic tracking of who created/modified entities and when (see [docs](https://github.com/dlrivada/Encina/blob/HEAD/docs/features/audit-tracking.md))
- **Soft Delete**: Automatic delete-to-update conversion with global query filters (see [docs](https://github.com/dlrivada/Encina/blob/HEAD/docs/features/soft-delete.md))
- **Temporal Tables**: SQL Server point-in-time queries and entity history (see…
