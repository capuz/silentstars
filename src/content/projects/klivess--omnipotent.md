---
repo: "Klivess/Omnipotent"
name: "Omnipotent"
description: "A bot which does everything for me"
readmeQualityOk: true
url: "https://github.com/Klivess/Omnipotent"
language: "C#"
languages: ["C#"]
languagePcts: [97]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-03-01T00:46:47Z"
lastCommitAt: "2026-11-05T14:04:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 76
maintainers: ["Klivess", "KliveAgent"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dabc35d6002b2a1fd9cd9f236198aa7b4b9bc41b423ab4ee336860d471769ef/Klivess/Omnipotent"
---

# Omnipotent

**A self-hosted .NET automation platform and modular service runtime that coordinates 31 long-running modules through shared API, permissions, monitoring, persistence and AI orchestration infrastructure.**

**31 modules · 380 permission-gated API routes · 1,363 passing tests · 136k lines of C# · in development since 2024**

Built by [Nourdin "Klivess"](https://github.com/Klivess), a University of Bath CS & AI student.

[Service runtime](https://github.com/Klivess/Omnipotent/blob/HEAD/Docs/service-runtime.md) · [API and security](https://github.com/Klivess/Omnipotent/blob/HEAD/Docs/api-and-security.md) · [Agents and retrieval](https://github.com/Klivess/Omnipotent/blob/HEAD/Docs/agent-and-rag.md) · [Metrics](#code-and-test-metrics) · [Private production dashboard](https://klive.uk)

## What this is

Omnipotent is a **modular service platform**, not a bot and not a microservice deployment. Every
module is an `OmniService` subclass running on its own dedicated thread inside **one .NET 9 process**,
sharing a service graph, a logger, a settings store, a scheduler and a single HTTP listener.

That choice is the design. Modules hold live references to each other instead of…
