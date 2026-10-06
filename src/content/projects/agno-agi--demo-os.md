---
repo: "agno-agi/demo-os"
name: "demo-os"
description: "The Agno demo showcase — agents, teams, and workflows built with Agno."
readmeQualityOk: true
url: "https://github.com/agno-agi/demo-os"
homepage: "https://agno.com"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["agentos", "agno", "ai-agents", "demo"]
stars: 35
forks: 12
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-04-10T13:22:48Z"
lastCommitAt: "2026-10-06T10:42:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 30
maintainers: ["sannya-singal", "harshsinha03", "SamJupe"]
openGraphImageUrl: "https://opengraph.githubassets.com/90ea70b489a36684e544b5db9c65ff2fa6356e0c2bdbcdcabce4eebb6e018e66/agno-agi/demo-os"
---

# Demo AgentOS

A reference AgentOS application built with Agno.

This repo packages a broad set of agent patterns into one runnable system: standalone agents, multi-agent teams, scheduled workflows, shared memory, guardrails, and external integrations. You can run it locally, inspect each example in isolation, and use it as a starting point for your own AgentOS.

The architecture is intentionally simple. Fourteen agents, eleven teams, and five workflows run inside one FastAPI service with PostgreSQL for persistence and shared context. The goal is not to show off a feature checklist. It is to show how agentic systems can be built with ordinary application architecture, clear boundaries, and production-minded patterns.

Use this project to:

1. **See how core Agno patterns fit together in a single app.**
2. **Explore working examples of memory, RAG, tool use, scheduling, guardrails, and collaboration modes.**
3. **Extend the system with your own agents, teams, workflows, and integrations.**

## Quick Start

```sh
# Clone the repo
git clone https://github.com/agno-agi/demo-os.git demo-os
cd demo-os

cp example.env .env
# Edit .env and add your OPENAI_API_KEY

# Start the application…
