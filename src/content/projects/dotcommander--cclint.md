---
repo: "dotcommander/cclint"
name: "cclint"
description: "Linter for Claude Code agents, commands, and skills"
readmeQualityOk: true
url: "https://github.com/dotcommander/cclint"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["claude-code", "cli", "golang", "linter"]
stars: 18
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-12-22T22:37:01Z"
lastCommitAt: "2026-10-30T11:03:02Z"
lastReleaseAt: "2026-02-17T20:27:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 55
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/edcc05fbd2389cbfc5c5adf561d051266e1355dee827a6406f7e3672138c718d/dotcommander/cclint"
---

# cclint

A linter for Claude Code components. Catches schema errors, enforces structure, and flags cross-file problems before they surface as confusing runtime behavior.

It checks agents, commands, skills, plugins, settings, rules, and output styles.
Context files can be checked explicitly with `cclint context`.

## Install

```bash
go install github.com/dotcommander/cclint@latest
```

## Usage

```bash
cclint                    # lint detected Claude project, or ~/.claude otherwise
cclint agents             # one component type
cclint ./path/to/file.md  # lint specific files
cclint --staged           # only staged files (pre-commit)
cclint --scores           # quality scores (0-100)
cclint fmt --write        # auto-format component files
```

## What it catches

- Frontmatter schema errors (embedded CUE schemas)
- Size, structure, and naming violations per component type
- Cross-file issues: broken references, orphaned skills, ghost triggers
- Settings validation: hooks, permissions, MCP servers, security
- Delegation anti-patterns in commands and agents

## Baseline mode

For projects with existing violations, adopt incrementally:

```bash
cclint --baseline-create   # snapshot…
