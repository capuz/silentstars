---
repo: "it-at-m/zammad-ai"
name: "zammad-ai"
description: "GenAI-powered agent for Zammad"
readmeQualityOk: true
url: "https://github.com/it-at-m/zammad-ai"
homepage: "https://it-at-m.github.io/zammad-ai"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["genai", "python", "zammad", "zammad-api"]
stars: 21
forks: 2
openIssues: 10
closedIssues: 29
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2025-09-23T09:14:45Z"
lastCommitAt: "2026-07-07T06:37:31Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 54
maintainers: ["pilitz", "renovate[bot]", "freinold"]
openGraphImageUrl: "https://opengraph.githubassets.com/55dea4cfad193b83a4bf94ab1a6bfb047db248a7529164172209a71724446fdf/it-at-m/zammad-ai"
---

# Zammad-AI

Zammad-AI is a GenAI-powered extension for Zammad. The repository contains two separate Python services:

- `zammad-ai-workflow`: the backend service for ticket triage, answer generation, Kafka processing, and the optional embedded frontend.
- `zammad-ai-index`: the indexing job that synchronizes Zammad knowledge base content into Qdrant Database.

The services are intentionally separated from the core Zammad application so prompts, retrieval, automation rules, and integrations can evolve independently.

## Why a separate zammad-ai component

Zammad provides native [AI features](https://zammad.com/en/product/artificial-intelligence) (for example AI Agents, AI Ticket Summary, and AI Writing Assistant) with flexible operating models like managed AI, bring-your-own-model, or self-hosted LLMs. This repository addresses a different goal: a fully controllable integration layer for project-specific automation and knowledge retrieval workflows.

We keep this component separate from Zammad core to:

- Ship GenAI workflow changes independently from Zammad release cycles.
- Implement organization-specific triage, routing, and answer generation logic.
- Integrate custom retrieval…
