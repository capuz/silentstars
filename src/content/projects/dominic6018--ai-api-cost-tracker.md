---
repo: "Dominic6018/ai-api-cost-tracker"
name: "ai-api-cost-tracker"
description: "Self-hosted AI API cost tracker. See spend per project, customer, and feature across OpenAI, Anthropic, and Gemini."
readmeQualityOk: true
url: "https://github.com/Dominic6018/ai-api-cost-tracker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ai", "anthropic", "cost-tracking", "docker", "gemini", "llm", "openai", "opentelemetry", "postgresql", "self-hosted"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 87
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-27T10:35:32Z"
lastCommitAt: "2026-11-17T12:16:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 48
maintainers: ["Dominic6018", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aff3cf6d4e5dc180094d160ac64b83bdd2add66f70d47b6a6521a45b2d55cbb1/Dominic6018/ai-api-cost-tracker"
---

# AI API Cost Tracker

A lightweight, self-hosted ledger of what your AI API calls cost. Your app sends the token counts from each request; the tracker prices them exactly against dated, tier-aware model prices and shows spend by project, provider and model, with monthly budgets and alerts. **Prompts and responses are never sent or stored**, only token counts.

It complements LLM gateways (which route requests and cap spend) and tracing tools (which follow a request through an agent) rather than replacing them: it's the system of record for cost. Cost per customer, feature and agent run is next on the [roadmap](https://github.com/Dominic6018/ai-api-cost-tracker/blob/HEAD/docs/ROADMAP.md#milestone-7-cost-by-customer-feature-and-agent-run).

| Spend over time                                                                                                                                                                                                                        | Usage events…
