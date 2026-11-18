---
repo: "mimshins/ork"
name: "ork"
description: "Local orchestration harness for coding agents (Claude Code, OpenCode, Command Code): hierarchical workflows in git-friendly YAML, run on your machine. Built with Ork."
readmeQualityOk: true
url: "https://github.com/mimshins/ork"
homepage: "https://github.com/mimshins/ork/blob/main/docs/README.md"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["agent-orchestration", "agentic-workflow", "claude", "claude-ai", "claude-code", "workflow-automation", "workflow-engine", "workflow-orchestration", "ai-agents", "coding-agents"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-30T10:12:01Z"
lastCommitAt: "2026-11-18T12:04:12Z"
lastReleaseAt: "2026-11-08T13:32:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["mimshins", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/53cc49f89505cd62db6db525a4437e79825fd21ae1e3ebef102ae96ffb8d485c/mimshins/ork"
discussionCount: 1
---

# Ork

**An orchestration harness for coding agents (Claude Code, OpenCode, Command
Code, Codex) that runs on your machine.**

Ork lets you design workflows of agent and tool nodes, save them as plain YAML
next to your code, and run them locally with your own accounts. Think n8n, but
for agents and engineering tasks:

- **Hierarchical.** A leader hands each child only the brief it needs, gets a
  short report back, and has the child's branch merged into its own.
- **Isolated.** Every writing agent works in its own git worktree and branch, so
  your checkout stays as it was unless you ask a step to work there. Ork never
  pushes on its own.
- **Context-engineered.** Fresh sessions per task, briefs instead of
  transcripts, cache-friendly prompts, a model and effort per node, budgets, and
  bounded loops.
- **Your agent tools.** Each agent node runs a session of Claude Code, OpenCode,
  Command Code or Codex, under your own login, and one workflow can mix them
  ([Drivers](https://github.com/mimshins/ork/blob/HEAD/docs/guides/drivers.md)).
- **Yours.** Your repository's `CLAUDE.md`, `AGENTS.md` and skills load as they
  do in your agent tool, and Ork never stores a credential.
