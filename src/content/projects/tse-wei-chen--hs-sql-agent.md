---
repo: "tse-wei-chen/hs-sql-agent"
name: "hs-sql-agent"
description: "C# SQL Agent MCP server featuring raw SQL input, strict AST validation, and an embedded Admin UI. Eliminates LLM hallucinations and security risks across 6 major databases."
readmeQualityOk: true
url: "https://github.com/tse-wei-chen/hs-sql-agent"
language: "C#"
languages: ["C#"]
languagePcts: [88]
topics: ["mcp-server", "nl2sql", "sql-agent", "mcp", "mysql", "postgresql", "postgres", "sqlite", "security", "anti-hallucination"]
stars: 11
forks: 1
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-04-03T08:10:29Z"
lastCommitAt: "2026-08-27T14:22:29Z"
lastReleaseAt: "2026-04-16T12:32:40Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 48
maintainers: ["tse-wei-chen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1200271184/6610715f-2e99-4316-a71e-495fb1272d49"
---

# hs-sql-agent

> **A high-performance MCP server for secure SQL access and enterprise governance.**

`hs-sql-agent` connects MCP clients to SQLite, PostgreSQL, MySQL, SQL Server, Oracle, and Firebird through an HTTP MCP endpoint and a built-in Admin Panel.

## Why hs-sql-agent?

Instead of executing unrestricted LLM-generated SQL, the server parses supported SQL into structured definitions, validates it, and rebuilds the final statement through a provider-specific SQL compiler.

- **Six database providers** — SQLite, PostgreSQL, MySQL, SQL Server, Oracle, and Firebird.
- **Governed access** — Per-key database binding, table whitelisting, CORS, rate limits, and execution policies.
- **Safe DML** — Read-only impact preview, one-time approval challenge, commit-time row-set revalidation, and MCP Elicitation for explicit human approval.
- **Admin Panel** — Manage databases, keys, roles, custom tools, audit records, and runtime policies.
- **Enterprise ready** — OIDC SSO, TOTP MFA, audit retention, Prometheus metrics, OTLP, and webhook/SIEM delivery.
- **Semantic metadata** — Table and column synonyms, relationships, and scoped metric metadata for schema discovery.

SQL support is…
