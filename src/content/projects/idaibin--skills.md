---
repo: "idaibin/skills"
name: "skills"
description: "Independent Agent Skills for repository analysis, planning, implementation, review, delivery, design, and runtime verification."
readmeQualityOk: true
url: "https://github.com/idaibin/skills"
homepage: "https://skills.sh/idaibin/skills"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai", "ai-agents", "codex", "developer-tools", "agent-skills", "llm", "claude-code", "skills", "software-engineering"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-03T00:27:56Z"
lastCommitAt: "2026-10-17T04:56:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 61
maintainers: ["idaibin", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7025915a474ef8a9a5e2debecb3291e94150b0dfe6288fbc3efcc3229d9450a/idaibin/skills"
---

# Agent Skills for Software Engineering

Reusable Agent Skills for practical software-engineering work.

Install only the capabilities you need, or use the complete catalog. Each Skill owns
one clear kind of work—such as repository mapping, implementation, review, browser
operation, or external-AI collaboration—and keeps its authority boundary explicit.

## Quick Start

Browse the 19 available Skills:

```bash
npx skills@latest add idaibin/skills --list
```

Choose Skills interactively:

```bash
npx skills@latest add idaibin/skills
```

Install selected Skills globally for Codex:

```bash
npx skills@latest add idaibin/skills \
  --skill repo-map repo-review ask-ai \
  --global --agent codex
```

Install the complete catalog:

```bash
npx skills@latest add idaibin/skills \
  --skill '*' --global --agent codex --yes
```

See [INSTALL.md](https://github.com/idaibin/skills/blob/HEAD/INSTALL.md) for project installs, suggested sets, updates, removal,
and other supported agents.

## Catalog

| Skill | What it helps with |
| --- | --- |
| `work-retro` | Retrospect across work history and propose evidence-backed, context-scoped improvements. |
| `repo-map` | Scan, query, and render…
