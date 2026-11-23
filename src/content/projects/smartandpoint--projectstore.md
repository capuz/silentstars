---
repo: "SmartAndPoint/ProjectStore"
name: "ProjectStore"
description: "Decisions, specs and stories as plain markdown, for every coding agent. Code changes. Context stays."
readmeQualityOk: true
url: "https://github.com/SmartAndPoint/ProjectStore"
homepage: "https://projectstore.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
topics: ["adr", "ai-agents", "architecture-decision-records", "claude-code", "codex", "coding-agents", "context-engineering", "developer-tools", "mcp", "obsidian"]
stars: 13
forks: 1
openIssues: 9
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-19T08:23:15Z"
lastCommitAt: "2026-11-23T13:26:24Z"
lastReleaseAt: "2026-08-04T06:06:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 41
maintainers: ["Evgenii-Konev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1243313281/cb277cad-7ac5-4836-938c-48ab285dc199"
discussionCount: 0
---

# ProjectStore

> ProjectStore is a method and a framework for building apps and services of any size with AI agents. It keeps the project's record — what was decided, what is in flight, what was checked — as reviewed markdown in git, readable by any agent and anyone with the repo.

A project workflow plugin for [Claude Code](https://claude.com/claude-code) and [OpenAI Codex](https://developers.openai.com/codex/) (experimental). Both are released together at one version, and one command sets a project up for either or both: see [Install](#install).

---

## Two months of agents, and nobody knows why

Agents write code fast. They re-decide settled questions even faster: every fresh session arrives empty, makes its own architectural call, and commits under its own assumptions. Two months later you have noodle code — every strand reviews fine on its own, and each was written under a different theory of the project. Ask *"why is this a queue and not a cron job?"* and nobody can answer. The agent that decided is long gone.

The fix is not a smarter agent. It is a loop with verification in it.
