---
repo: "coalesce-labs/catalyst"
name: "catalyst"
description: "Token-efficient Claude Code workspace with parallel agents and persistent memory. Research → Plan → Implement →   Validate workflow."
url: "https://github.com/coalesce-labs/catalyst"
language: "JavaScript"
languages: ["JavaScript", "TypeScript", "Shell"]
languagePcts: [39, 36, 22]
topics: ["agent-memory", "agentic-coding", "ai-agents", "ai-coding", "claude-code-commands", "claude-code-plugin", "claude-code-plugins-marketplace", "claude-code-subagents", "context-engineering", "token-optimization"]
stars: 16
forks: 2
openIssues: 273
closedIssues: 899
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-04T11:10:26Z"
lastCommitAt: "2026-06-27T06:22:49Z"
lastReleaseAt: "2026-03-25T05:45:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 53
maintainers: ["ryanrozich"]
openGraphImageUrl: "https://opengraph.githubassets.com/21adc1f1dfd73d881694cf8aef361ce1ec0f3ce67bd4cc2566d29d23e134e1d9/coalesce-labs/catalyst"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/brand-v2/readme-hero/readme-hero-dark.png">
</picture>

# Catalyst - Claude Code Workspace

A portable development workflow for Claude Code, packaged as a Claude Code plugin marketplace.

This is the workspace I use daily for AI-assisted development. It's battle-tested on real projects
and optimized for efficient, context-aware AI collaboration. I'm sharing it so others can use it,
fork it, and contribute ideas back.

## Tech Stack & Integrations

Catalyst integrates with your development tools through both **CLI-based** (token-efficient) and
**MCP-based** (richer features) approaches:

### Project Management & Issue Tracking

- **Linear** - Issue tracking, sprint planning, ticket lifecycle (CLI via
  [Linearis](https://www.npmjs.com/package/linearis))
  - `catalyst-dev`: Core research agents and workflow commands
  - `catalyst-pm`: Advanced PM workflows (PRDs, strategy, priorities)
  - `catalyst-pm-ops`: Operational PM workflows (cycle analysis, milestone tracking, backlog grooming, cadence, comms)

### Version Control & Code Hosting

- **GitHub** - Pull requests, code review, repository management (CLI via…
