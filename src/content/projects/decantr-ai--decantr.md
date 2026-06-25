---
repo: "decantr-ai/decantr"
name: "decantr"
description: "Decantr AI design intelligence layer for AI-generated web applications"
url: "https://github.com/decantr-ai/decantr"
homepage: "https://decantr.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["ai", "ai-coding", "claude", "cursor", "design-intelligence", "design-system", "llm-tools", "mcp", "mcp-server", "model-context-protocol"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-03-26T12:21:46Z"
lastCommitAt: "2026-06-25T01:38:40Z"
lastReleaseAt: "2026-05-27T21:18:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 68
maintainers: ["david-aimi", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1192642434/8eb90a73-7d8e-44ea-8672-5db9e9784a1d"
---

# Decantr

**AI Frontend Governance for production codebases touched by AI agents.**

Decantr is the governance layer between product intent and AI-edited frontend code. It gives coding assistants three things they don't have on their own: typed contracts, route-scoped context, and machine-actionable evidence, so UI changes stay coherent instead of drifting prompt by prompt. The model still writes the code; Decantr defines the contract, context, and verification loop around it.

> AI generates the interface. Decantr proves, with local evidence, whether the outcome stayed aligned.

## Pick your path

| Path | Use when | Start with |
| --- | --- | --- |
| **[Brownfield adoption](docs/reference/workflow-model.md#brownfield-adoption)** &nbsp;⭐ | Attaching Decantr to an existing Angular/React/Vue/etc. project | `decantr scan` -> `decantr adopt --yes` |
| **[Hybrid operating layer](docs/reference/workflow-model.md#hybrid-operating-layer)** | An attached app wants selected Decantr or project-owned UI law, without source takeover | `decantr codify`, `decantr doctor`, `decantr task` |
| **[Greenfield starter kit](#greenfield-blueprint)** | New project, published app composition as the…
