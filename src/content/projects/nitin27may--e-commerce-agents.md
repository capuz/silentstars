---
repo: "nitin27may/e-commerce-agents"
name: "e-commerce-agents"
description: "6 specialized AI agents collaborating via A2A protocol to power e-commerce — product discovery, orders, pricing, reviews, inventory & support. Dual-stack (Python + .NET/C#) with generative UI. Built with Microsoft Agent Framework, FastAPI, Next.js, and PostgreSQL + pgvector."
readmeQualityOk: true
url: "https://github.com/nitin27may/e-commerce-agents"
homepage: "https://nitinksingh.com/e-commerce-agents/"
language: "Python"
languages: ["Python", "C#"]
languagePcts: [49, 35]
topics: ["azure-openai", "e-commerce", "fastapi", "microsoft-agent-framework", "multi-agent", "nextjs", "openai", "opentelemetry", "postgresql", "a2a-protocol"]
stars: 37
forks: 4
openIssues: 17
closedIssues: 36
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-05T04:35:21Z"
lastCommitAt: "2026-11-19T04:53:58Z"
lastReleaseAt: "2026-08-27T13:55:56Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 47
maintainers: ["claude", "dependabot[bot]", "nitin27may"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1201731193/bc052841-a18b-4d88-9a36-2a7c0cb74194"
discussionCount: 0
---

# E-Commerce Agents

A **hands-on course in [Microsoft Agent Framework](https://github.com/microsoft/agent-framework) (MAF)** — 34 chapters in Python and .NET, with a no-key start — and the **multi-agent e-commerce platform** it builds up to. In the platform, six specialized AI agents collaborate over **A2A-style HTTP** (`/message:send`; spec conformance is tracked in [#88](https://github.com/nitin27may/e-commerce-agents/issues/88)) to handle product discovery, orders, pricing, reviews, inventory and support — with **two complete backends, Python and .NET / C#** (differences documented in the [parity matrix](https://github.com/nitin27may/e-commerce-agents/blob/HEAD/docs/parity-matrix.md)), behind one Next.js frontend.

### Learn

New to MAF? Run chapter 1 now — no API key, no Docker:

```bash
uv sync --project tutorials
uv run --project tutorials python tutorials/01-first-agent/python/main.py
```
