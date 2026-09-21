---
repo: "cooneycw/claude-power-pack"
name: "claude-power-pack"
description: "Claude Code best practices and MCP second opinion server"
readmeQualityOk: true
url: "https://github.com/cooneycw/claude-power-pack"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [63, 36]
stars: 19
forks: 6
openIssues: 25
closedIssues: 586
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-11-25T16:10:06Z"
lastCommitAt: "2026-09-21T09:14:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["cooneycw"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fe62ff85d4e608c3e9fa22498816c7a9ed31598cba754c5b22ed92cfaf3c537/cooneycw/claude-power-pack"
discussionCount: 1
---

# Claude Power Pack

**v8.0.0** - A productivity toolkit for [Claude Code](https://docs.anthropic.com/en/docs/claude-code) that adds workflow automation, MCP servers, security scanning, secrets management, and CI/CD integration - and, from 8.0, a verification discipline: a check whose output is read as evidence ships with a committed input that makes it report the other verdict, and a second model reviews every change by default.

## What It Does

- **Workflow commands** (`/flow:auto`, `/flow:start`, `/flow:eli5`, `/flow:finish`) - Issue-driven development with worktrees, a pre-implementation ELI5 plan/necessity approval gate that cannot be bypassed (#775), quality gates, automated PR lifecycle, and CI verification. The necessity gate also ships standalone as [eli5-gate](https://github.com/cooneycw/eli5-gate) - installable without CPP via `/plugin marketplace add cooneycw/eli5-gate` or `npx skills add cooneycw/eli5-gate`; CPP vendors its canonical core (file gate improvements there)
- **Wave orchestration** (`/flow:wave`, `/flow:register`, `/flow:sync`) - dependency-ordered issue waves fanned out across worker sessions, coordinated through a durable mailbox with an…
