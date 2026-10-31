---
repo: "TGYD-helige/pi"
name: "pi"
description: "Pluggable extension packages for the Pi AI-agent runtime. Each package exposes LLM-callable tools via MCP — covering IM workspace integrations (Lark, DingTalk, WeCom), browser & computer automation, persistent memory, telemetry, task scheduling, image generation, web access, security policies, and more."
readmeQualityOk: true
url: "https://github.com/TGYD-helige/pi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent-runtime", "ai-agent", "browser-automation", "computer-use", "langfuse", "llm", "mcp", "monorepo", "opentelemetry", "typescript"]
stars: 89
forks: 20
openIssues: 3
closedIssues: 38
watchers: 0
contributors: 17
recentReleases: 0
createdAt: "2026-05-14T14:23:50Z"
lastCommitAt: "2026-10-31T02:00:31Z"
lastReleaseAt: "2026-05-26T09:10:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 34
maintainers: ["Weaxs", "HS-Jack-YZY", "youerning"]
openGraphImageUrl: "https://opengraph.githubassets.com/f60f59fb7c80f054295d9ef6bff4eb2ca8d0b0fa158a9452f42c7f5b3e91f172/TGYD-helige/pi"
---

# Pi

Shared TypeScript packages for Pi runtime applications.

On Pi 0.99+, video, teamwork, curated memory, Mem0, and scheduler tools expose bounded structured results for codemode scripts. Scripts can consume IDs, complete memory entries/task prompts, media paths, and available QC metadata directly; see the corresponding package READMEs for result contracts.

This repository contains the open-source runtime contracts, adapters, and orchestration helpers that are consumed by Pi Agent and related applications. The packages are intentionally small and composable: host applications provide HTTP routing, authentication, model runtime setup, deployment configuration, and product-specific UI.

## Packages

| Category | Package | Purpose |
| --- | --- | --- |
| Core | `@amaster.ai/pi-shared` | Shared runtime types and contracts: settings loader, session/event/artifact types, turn and subagent types. |
| Core | `@amaster.ai/pi-storage` | JSON-file and MySQL/Prisma persistence adapters for sessions, transcripts, events, memory, artifacts, subagents, and scheduled tasks. |
| Extension | `@amaster.ai/pi-attachments` | Attachment normalization, local/remote upload handling, document parsing,…
