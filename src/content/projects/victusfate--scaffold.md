---
repo: "victusfate/scaffold"
name: "scaffold"
description: "opinionated agent neutral scaffold for new projects"
readmeQualityOk: true
url: "https://github.com/victusfate/scaffold"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["agent", "agentic-ai", "coding"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-19T16:56:01Z"
lastCommitAt: "2026-10-24T08:08:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["victusfate", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb16d5e030de184576430354c09ef35ef2cfce0ba37829c9212bb6ab5f47acda/victusfate/scaffold"
---

# scaffold

An opinionated, cross-harness project scaffold for building software with AI coding agents. Drop it into any new project and your agent follows the same design → PRD → TDD workflow, with quality gates that score the code, whether you use Claude Code, Codex, Cursor, Antigravity, or pi.dev.

## Usage

**Browser / mobile:** hit "Use this template" above → create new repository → open in your preferred coding agent.

**CLI:**
```bash
gh repo create my-new-project --template victusfate/scaffold --private
gh repo clone victusfate/my-new-project
```

## Philosophy

- **Single source of truth** — `AGENTS.md` holds all agent instructions. `CLAUDE.md` imports it; `GEMINI.md` references it; `.cursor/rules/agents.mdc` points to it. No duplication.
- **Careful before fast** — features start with a structured design Q&A (`grill-with-docs`) that locks in vocabulary and decisions before any code is written.
- **Automatic flow** — once the Q&A is done, the rest runs on its own (PRD → TDD → review gate), with no handoffs for you to manage.
- **Minimum viable diff** — agents are told to make the smallest change that does the job and skip opportunistic refactors.
- **Quality is scored,…
