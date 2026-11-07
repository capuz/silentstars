---
repo: "lawzava/megapowers"
name: "megapowers"
description: "One plugin for Claude Code and Codex: task skills, an output style, a destructive-command tripwire, and a doctor. Measured, not vibed."
readmeQualityOk: true
url: "https://github.com/lawzava/megapowers"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["agent-skills", "ai-agents", "claude-code", "claude-code-plugins", "codex", "llm-orchestration"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-03T08:39:48Z"
lastCommitAt: "2026-11-07T09:30:06Z"
lastReleaseAt: "2026-07-12T22:35:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 54
maintainers: ["lawzava"]
openGraphImageUrl: "https://opengraph.githubassets.com/d94e7104d40f12e12041212317680e2a3e5ff3f065ec64808875afd3c4365d13/lawzava/megapowers"
---

Plan, test, debug, and ship with more care in Claude Code and Codex.<br>
  One plugin, task skills, and an optional Claude Code output style.

Coding agents are fast, but they can skip steps: edit before they know the
cause, say "done" without re-running the tests, or push and deploy without a
second look. megapowers gives Claude Code and Codex a skill (a short
playbook) for each of those moments. When your request matches one, the agent
can load it and follow it.

It is exactly one plugin, with tested installs for Claude Code and Codex.
The harness-neutral skills and their supporting files may also be copied into
other Agent Skills harnesses. Local agent bindings and hooks stay in the user's
setup; copying skills does not install a plugin or its optional output style.
It uses each tool's own
agents, permissions, worktrees, and memory, and ships no daemon, scheduler,
model router, formatter, or status line.

## What changes when it is installed

| You ask | What the agent does |
|---|---|
| "Why is this test flaky?" | `systematic-debugging`: finds the root cause before editing anything |
| "Add rate limiting to the API" | `test-first-implementation`: writes a failing test, sees it…
