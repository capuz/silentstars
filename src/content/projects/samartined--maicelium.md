---
repo: "samartined/mAIcelium"
name: "mAIcelium"
description: "A centralized, multi-IDE workspace that connects AI coding agents to shared knowledge."
readmeQualityOk: true
url: "https://github.com/samartined/mAIcelium"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["showcase"]
stars: 5
forks: 1
openIssues: 8
closedIssues: 20
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-28T18:05:42Z"
lastCommitAt: "2026-11-22T01:10:18Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 59
maintainers: ["samartined", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/32c3272b0355b4a4c01f17c07f2641e401e4efb07325a3cc4593507035c38f3c/samartined/mAIcelium"
---

# mAIcelium

A centralized, multi-IDE workspace that connects AI coding agents to shared knowledge — like a fungal network feeding nutrients to every organism in the forest.

## The problem

When you work with multiple AI-powered IDEs (Cursor, Claude Code, Antigravity), each one maintains its own rules, skills, and context in isolation. You end up duplicating configurations, losing consistency, and manually keeping things in sync.

## The solution

mAIcelium provides a single workspace directory where:

- **One source of truth** (`mesh/`) orchestrates all rules, skills, prompts, and commands, including optional layer repos mounted under `mesh/layers/`.
- **Symlinks** distribute that knowledge to each IDE in the format it expects.
- **Projects plug in and out** without copying files — just symlinks to your real repos.
- **Scripts automate everything** — no manual symlink management.

```mermaid
graph LR
    Mesh["mesh/"] -->|symlinks| Cursor[".cursor/"]
    Mesh -->|"symlinks + CLAUDE.md"| Claude[".claude/"]
    Mesh -->|symlinks| Agents[".agents/"]
    Projects["projects/"] -->|symlinks| Repos["Your repos"]
```
