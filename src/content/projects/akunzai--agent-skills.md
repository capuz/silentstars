---
repo: "akunzai/agent-skills"
name: "agent-skills"
description: "Charley's Agent Skills"
readmeQualityOk: true
url: "https://github.com/akunzai/agent-skills"
language: "Shell"
languages: ["Shell", "Standard ML"]
languagePcts: [59, 28]
topics: ["agent-skills"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 49
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-05-28T04:40:44Z"
lastCommitAt: "2026-10-19T09:15:15Z"
lastReleaseAt: "2026-10-01T14:08:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["akunzai", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/27d02ebf26d0541c743780a30cf367b19332a04a4f8c6c6c861b7319e4794fe9/akunzai/agent-skills"
---

# Charley's Agent Skills

Reusable agent skills — compatible with Antigravity, Claude Code, Codex,
GitHub Copilot CLI, Cursor CLI, and more.
Those runtimes can load the skills; **effectiveness is measured only on
GitHub Copilot's agent runtime** via [Waza](https://github.com/microsoft/waza),
with models served through OpenRouter. See
[docs/evals/waza.md](https://github.com/akunzai/agent-skills/blob/HEAD/docs/evals/waza.md).

## Why

AI agents are powerful out of the box, but they lack persistent memory
and opinionated workflows across sessions. This project fills that gap with
reusable skills grouped into three areas: **Engineering** (implementation
dispatch, git/forge workflows, toolchain, and tests), **Memory** (durable
project context that survives across sessions), and **Media** (website
walkthroughs as auto-zoom demo videos).

## Skills

### Install

Install and manage skills across agents with [Skills Manager](https://github.com/akunzai/skills-manager):

```bash
skills add akunzai/agent-skills
```

Alternatively, install via `npx skills`:

```bash
npx skills add akunzai/agent-skills
```

The interactive picker groups the catalog as **Charley Skills**.

### Engineering

####…
