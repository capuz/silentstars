---
repo: "dignite-projects/vault-extract"
name: "vault-extract"
description: "A channel layer that turns any content requiring IDP — scans, photos, image PDFs, Office files, digital-born docs — into trustworthy structured data: OCR + Markdown + metadata + optional field extraction, exposed via REST / EventBus / MCP (Webhook planned) to downstream RAG platforms, business systems, and AI clients. Built on ABP."
url: "https://github.com/dignite-projects/vault-extract"
homepage: "https://dignite.com/vault-extract"
language: "C#"
languages: ["C#"]
languagePcts: [86]
topics: ["abp", "abp-framework", "azure-document-intelligence", "document-digitization", "document-processing", "dotnet", "llm", "markdown", "mcp", "mcp-server"]
stars: 6
forks: 0
openIssues: 25
closedIssues: 246
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-04-20T02:18:12Z"
lastCommitAt: "2026-06-27T06:22:34Z"
lastReleaseAt: "2026-06-13T05:02:34Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 59
maintainers: ["duguankui", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c710f6f97ec1f16e4d0fa083b5faec4b5d70cb993aac76c2c1432be9e6f8133/dignite-projects/vault-extract"
discussionCount: 1
---

# Dignite Vault Extract

> **Dignite Vault Extract = any content requiring IDP (Intelligent Document Processing) — scans / photos / PDF images / Office files / digital-born documents → trustworthy structured data.**
> A **channel layer**, not an end-product. It doesn't consume, doesn't own, doesn't dive into business — it hands Markdown + structured metadata to downstream RAG platforms, business systems, and AI clients via REST / EventBus / MCP server / Webhook (planned).

For the full positioning, architecture rules, OUT-of-scope list, Markdown-first contract, multi-stage ETO event contract, and security covenant, see [CLAUDE.md](./CLAUDE.md). It is the truth source — this README only stages the operational entry points.

## Data flow

```
content requiring IDP: scans / photos / PDF images / Office files / digital-born documents
    ↓
[Dignite Vault Extract channel]: OCR + Markdown + system metadata + type-bound field extraction
    ↓ (REST / EventBus / MCP server / Webhook — planned)
    ├─→ downstream RAG platform
    ├─→ business systems (finance / CLM / HR / ERP)
    ├─→ AI clients (Claude Desktop / Cursor / any MCP client)
    └─→ any consumer (build your own subscriber)
```…
