---
repo: "on-par/software-factory"
name: "software-factory"
description: "Local CLI for shipping GitHub issues with multi-agent planning, building, checking, and PR creation."
readmeQualityOk: true
url: "https://github.com/on-par/software-factory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agents", "automation", "claude-code", "cli", "github", "pull-requests", "github-actions"]
stars: 5
forks: 2
openIssues: 374
closedIssues: 1811
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-09T19:56:12Z"
lastCommitAt: "2026-10-26T21:00:00Z"
lastReleaseAt: "2026-10-17T19:22:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 68
maintainers: ["patrob"]
openGraphImageUrl: "https://opengraph.githubassets.com/98fed574855a244d058badcd8cb23e2e16a25890c34ecb2035843d08b8e1ef76/on-par/software-factory"
---

# On PAR Dev's Software Factory

On PAR Dev's Software Factory is a local CLI that takes a GitHub issue through plan, build and check with AI agents, then opens a ready-for-review PR. You decide what merges.

Built in TypeScript. Routes work across Claude and Codex, with experimental local models through Ollama, and logs cost per task.

For an example of its output, see [#2288](https://github.com/on-par/software-factory/pull/2288): the factory planned and built issue #2269 (`factory cost --json`), ran its checkers (7 pass, 1 rework round), opened the PR with an evidence pack comment, and CI passed. Merging was a separate step.

## Status

What works today (this table matches the code on main):

| Feature                                               | Status     | Notes                                                                                                            |
| ----------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `factory ship` pipeline (PLAN → BUILD → CHECK → SHIP) | ✅ Working | Covered by an end-to-end pipeline integration test…
