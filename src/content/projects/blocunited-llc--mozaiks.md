---
repo: "BlocUnited-LLC/mozaiks"
name: "mozaiks"
description: "The Mozaiks core is a self-hostable runtime for deploying AI-driven, multi-tenant web apps with real-time UI, auth, and billing built in. Apps are defined via YAML and lightweight Python/JS stubs for agent logic, workflows, and integrations — so developers focus on behavior, not plumbing. :link: https://docs.mozaiks.ai/  :link: https://mozaiks.ai"
readmeQualityOk: true
url: "https://github.com/BlocUnited-LLC/mozaiks"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["agent-framework", "agentic-ai", "ai", "ai-agents", "genai", "llm", "multi-agent", "open-source", "python", "workflow-orchestration"]
stars: 24
forks: 10
openIssues: 46
closedIssues: 37
watchers: 2
contributors: 9
recentReleases: 1
createdAt: "2026-01-08T20:40:29Z"
lastCommitAt: "2026-11-07T16:11:29Z"
lastReleaseAt: "2026-10-19T12:15:49Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 53
maintainers: ["elCaptnCode", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1dbd03183b96bbeb9cdb4bd17fa16b23b89435227559d14779cd455a59c0e6d3/BlocUnited-LLC/mozaiks"
discussionCount: 4
---

# Mozaiks

## What is Mozaiks?

Mozaiks is an open-source AI app factory for building, running, and iterating on
AI-native software products.

It brings together three things that usually live in separate tools:

- **Mozaiks Studio** for creating apps, continuing builds, and managing them.
- **AI workflow orchestration powered by [AG2](https://github.com/ag2ai/ag2)** for planning, tool use, human
  review, and generation.
- **Generated app files** with modules, pages, workflows, config, and brand
  assets that Mozaiks validates before making active.

The goal is not to generate a throwaway demo. Mozaiks stages production-shaped
artifacts, validates them against strict contracts, and keeps runtime concerns
separate from builder workflows.

## Genesis Builds and Refinement Runs

Every Mozaiks app begins with one **Genesis Build**: the first complete journey
from product intent to a staged, validated app. It establishes the app's first
canonical artifact lineage.

Every later change is a **Refinement Run**. Mozaiks starts from the app's current
artifacts and history, determines what the request affects, and re-enters only
the parts of the build needed to stage a safe new version for…
