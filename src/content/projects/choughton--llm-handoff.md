---
repo: "choughton/llm-handoff"
name: "llm-handoff"
description: "A file-based dispatch protocol for multi-CLI AI coding workflows. Prompts are advisory; validators are authoritative. Uses markdown files for managing state, backlog, and handoffs."
readmeQualityOk: true
url: "https://github.com/choughton/llm-handoff"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "claude", "cli", "codex", "gemini", "handoff", "llm", "multi-agent", "orchestration", "python"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-21T00:49:46Z"
lastCommitAt: "2026-10-21T23:36:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["choughton"]
openGraphImageUrl: "https://opengraph.githubassets.com/4258986402b3794f5114252a6f55a7bccf76b29cd8db7b417990f15411c2e60f/choughton/llm-handoff"
---

# llm-handoff

`llm-handoff` is a reference implementation of a file-based dispatch loop for
multi-CLI AI coding workflows. It runs one agent CLI at a time against a
single repository, passes work between them through one Markdown file, and
only advances when that file parses, routes, and validates.

> Prompts are advisory. Validators are authoritative.

Built for solo developers coordinating Codex, Claude Code, or Antigravity
(`agy`) on one repo without git worktrees, pull-request choreography, or a
service orchestrator.

## Contents

- [Status](#status)
- [Quick Start](#quick-start)
- [Files Or Linear: Where Work Is Tracked](#files-or-linear-where-work-is-tracked)
- [Gotchas](#gotchas)
- [Gates And Scanners](#gates-and-scanners)
- [How It Works](#how-it-works)
- [Agent Safety Defaults](#agent-safety-defaults)
- [What This Is And Is Not](#what-this-is-and-is-not)
- [Why Not LangGraph, AutoGen, Or CrewAI?](#why-not-langgraph-autogen-or-crewai)
- [Known Limitations](#known-limitations)
- [Further Reading](#further-reading)
- [License](#license)

## Status

Pre-release. The dispatcher is being extracted from a project-specific
implementation into a public reference workflow, and…
