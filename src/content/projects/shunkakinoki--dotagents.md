---
repo: "shunkakinoki/dotagents"
name: "dotagents"
description: "Configuration for Agents"
readmeQualityOk: true
url: "https://github.com/shunkakinoki/dotagents"
language: "Makefile"
languages: ["Makefile"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-08-30T21:52:08Z"
lastCommitAt: "2026-07-20T06:33:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 49
maintainers: ["shunkakinoki"]
openGraphImageUrl: "https://opengraph.githubassets.com/e284cf6e8a9ca96ca9fddc0e2effc6134b2f0677e64be439fcf850df5544e1d5/shunkakinoki/dotagents"
---

# dotagents
Rules for Agents

## Sync workflow

```bash
make sync
```

This runs the full pipeline: prepares `.ruler/`, generates agent instruction files (`~/.claude/CLAUDE.md`, etc.) via Ruler, reconciles managed external skills from `SKILLS.txt` against the actual installed skill directories, then syncs commands, local repo skills, MCP config, and dot directories to `$HOME`.

To force a clean reinstall of external skills, run:

```bash
make skills-refresh
```
