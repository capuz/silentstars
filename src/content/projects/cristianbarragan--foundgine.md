---
repo: "CristianBarragan/Foundgine"
name: "Foundgine"
description: "Foundgine is a semantic execution runtime for .NET. It lets applications expose capabilities as structured intent rather than exposing persistence APIs directly, then resolves authorization, planning and provider execution behind a stable boundary."
readmeQualityOk: true
url: "https://github.com/CristianBarragan/Foundgine"
homepage: "https://cristianbarragan.github.io/Foundgine/docs-site/index.html"
language: "C#"
languages: ["C#"]
languagePcts: [88]
topics: ["dotnet-core", "execution-engine", "agentic-ai", "ai-agents", "authorization", "csharp", "dotnet", "dotnet-library", "graphql", "graphql-server"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-29T11:29:36Z"
lastCommitAt: "2026-08-31T09:59:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 73
maintainers: ["CristianBarragan", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9a3cdb075870796be3e72c91b4bdeaa239b39a046e3a0ca49248f9a6f550cd5/CristianBarragan/Foundgine"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs-site/assets/logo/foundgine-logo-dark.png">
</picture>

# [Foundgine.io](https://cristianbarragan.github.io/Foundgine/docs-site/index.html)

# Foundgine

**Programmable semantic execution for .NET.**

Foundgine separates **what a caller wants** from **how the application executes it**.

A caller submits structured intent. Foundgine resolves that intent against an application-defined semantic model, validates it, applies authorization, builds a provider-independent execution plan, and sends that plan to a provider such as SQL or InMemory.

> **Canonical lifecycle:** Caller → Intent → Semantic Model → Semantic Operation Graph → Retrieval → Resolution → Authorization → Plan Binding → Execution IR → Provider → Execution → Evidence.
>
> **Retrieval is discovery, not authority:** relational lookup, `pg_trgm`, `tsvector`, optional `pg_search`/BM25, and optional Apache AGE produce candidates + evidence. Those results still pass through semantic resolution and authorization.

## **Walkthrough: from natural language to authorized execution**

**See the complete walkthrough:** [**From Natural Language to Authorized…
