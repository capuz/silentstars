---
repo: "danielsmithdevelopment/ClawQL"
name: "ClawQL"
description: "MCP server: search + execute over OpenAPI 3, Swagger 2, or Google Discovery, with optional internal GraphQL for lean API responses. Bundled multi-provider specs (GCP top 50, Cloudflare, Jira, GitHub, Slack, Sentry, n8n) let agents discover operations without loading full API definitions into context."
readmeQualityOk: true
url: "https://github.com/danielsmithdevelopment/ClawQL"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [59, 28]
stars: 12
forks: 3
openIssues: 139
closedIssues: 77
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-19T22:39:38Z"
lastCommitAt: "2026-07-08T05:40:35Z"
lastReleaseAt: "2026-07-03T03:48:21Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 85
undervaluedScore: 50
maintainers: ["cursoragent", "danielsmithdevelopment", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f369e0fb928c333451e757eeb37d69003c3b3dea42ff1b5efcd4e0915a137149/danielsmithdevelopment/ClawQL"
---

# ClawQL

ClawQL is an MCP server for API discovery and execution with a token-efficient `search -> execute` workflow over **OpenAPI**, **Google Discovery**, and optional **native GraphQL** and **gRPC** sources (see **`CLAWQL_GRAPHQL_URL`** / **`CLAWQL_GRAPHQL_SOURCES`** / **`CLAWQL_GRPC_SOURCES`** in `.env.example` and [ADR 0002](https://github.com/danielsmithdevelopment/ClawQL/blob/HEAD/docs/adr/0002-multi-protocol-supergraph.md)). GraphQL-only vendors (e.g. Linear) need no OpenAPI spec: use **`CLAWQL_PROVIDER=linear`** (bundled SDL under **`providers/linear/`** + **`LINEAR_API_KEY`**), or point **`CLAWQL_GRAPHQL_URL`** at their HTTP endpoint and auth headers, or load **`search`** from **`CLAWQL_GRAPHQL_SCHEMA_PATH`** / **`CLAWQL_GRAPHQL_INTROSPECTION_PATH`** (or per-source **`schemaPath`** / **`introspectionPath`**) when upstream introspection is disabled — without **`CLAWQL_SPEC_*`** / **`CLAWQL_PROVIDER`**, the default bundled REST specs are not loaded.

## What You Get

Feature tiers (aligned with the [architecture diagram](https://github.com/danielsmithdevelopment/ClawQL/blob/HEAD/docs/readme/images/clawql-feature-tiers.png) — details in…
