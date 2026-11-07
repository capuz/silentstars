---
repo: "gtrabanco/agentic-workflow"
name: "agentic-workflow"
description: "Stack-agnostic agentic-programming workflow skills + documentation scaffold"
readmeQualityOk: true
url: "https://github.com/gtrabanco/agentic-workflow"
homepage: "https://agwo.party"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
topics: ["agents", "agentskills", "claude-ai", "claude-code", "claude-skills", "skills", "workflow"]
stars: 23
forks: 4
openIssues: 27
closedIssues: 190
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-06-04T18:35:09Z"
lastCommitAt: "2026-11-07T22:51:13Z"
lastReleaseAt: "2026-11-05T17:48:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 53
maintainers: ["gtrabanco"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1259670522/53e3c46e-5446-44ec-a27c-ca7f69318a4d"
---

# Agentic Workflow Skills

A reusable set of **agent skills** that run a disciplined, doc-driven workflow
for building software with agents — from idea/issue to a reviewed, classified,
merge-ready change. The skills are **project-adaptive**: they discover and obey
each repository's own guide, architecture, roadmap and style docs at runtime, so
the same workflow works on any stack.

They are plain Markdown (`SKILL.md` files), so they work with **any agent** that
reads skills — Claude Code, Cursor, Codex, OpenCode, Cline, and
[70+ others](https://skills.sh) — installed with the
[`skills`](https://github.com/vercel-labs/skills) CLI (see
[Install](#install)).
> The examples in `docs/` are generic and illustrative; the skills
> themselves are stack-agnostic and architecture-agnostic.

> The model-agnostic install (`npx skills add gtrabanco/agentic-workflow`)
> carries no skill `model:`/`effort:` frontmatter — every skill simply
> **inherits whatever model and effort your agent session is already using**.
> The goal: using this workflow should never lock you into one vendor's model lineup — you pick the model, the skills just run the discipline.

## What's inside

```
skills/…
