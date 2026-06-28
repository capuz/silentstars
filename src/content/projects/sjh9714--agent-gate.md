---
repo: "sjh9714/Agent-Gate"
name: "Agent-Gate"
description: "GitHub Action for AI-generated PRs: no-checkout CI evidence for workflow, agent config, and package script drift."
url: "https://github.com/sjh9714/Agent-Gate"
homepage: "https://github.com/marketplace/actions/agent-gate-for-ai-prs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai", "ai-agents", "ci", "code-review", "coding-agents", "developer-tools", "github-action", "github-actions", "mcp", "pull-requests"]
stars: 10
forks: 1
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-13T01:41:10Z"
lastCommitAt: "2026-06-28T02:00:43Z"
lastReleaseAt: "2026-06-24T04:09:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 44
maintainers: ["sjh9714"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1267931785/126049ed-1c31-486c-8643-e79d0e44e5c0"
---

# Agent Gate

> Catch risky AI-generated PRs before merge — without checking out PR code.

Agent Gate is a GitHub Action that checks deterministic merge evidence:
out-of-scope edits, GitHub Actions permission escalation, agent instruction
drift, MCP config drift, missing test-file evidence, and package lifecycle
script drift.

The Action uses no checkout of PR code, no runtime LLM calls, no repository script execution, and no policy loaded from an untrusted PR head. The same analyzer also powers local replay fixtures for deterministic demos.

[30-second install](#30-second-install) · [Example report](#real-report-example) · [Tune policy](#after-the-first-run-tune-policy) · [Action reference](#action-reference) · [Evidence model](docs/evidence-model.md)

Policy boundaries for AI PRs, backed by repeatable evidence.

## 30-Second Install

Download the observe-mode workflow template into your repository:

macOS/Linux:

```bash
mkdir -p .github/workflows \
  && curl -fsSL https://raw.githubusercontent.com/sjh9714/Agent-Gate/v0.2.5/templates/agent-gate-observe.yml \
  -o .github/workflows/agent-gate.yml
```

Windows PowerShell:

```powershell
New-Item -ItemType Directory -Force…
