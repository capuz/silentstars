---
repo: "owainlewis/neo"
name: "neo"
description: "The best minimalist coding agent harness and agent orchestrator. "
readmeQualityOk: true
url: "https://github.com/owainlewis/neo"
homepage: "https://owainlewis.com"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["agent-harness", "coding-agent", "neo"]
stars: 15
forks: 3
openIssues: 8
closedIssues: 73
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2025-11-10T22:39:34Z"
lastCommitAt: "2026-07-07T06:38:13Z"
lastReleaseAt: "2026-06-28T03:19:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 64
maintainers: ["owainlewis", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fc4fdba72aaab0b6ecac716a659067c1b68a9058b4c3968004e4ebe26b8311c/owainlewis/neo"
---

# Neo

Neo is a terminal-first coding agent written in Go for people who want an
inspectable, fast local tool instead of a hidden browser workflow.

Run `neo` to open an interactive terminal UI where you can watch the agent read
files, run commands, and make edits in real time. The codebase stays small on
purpose: a policy-free core loop, with file, shell, session, and prompt features
layered on as independent modules.

## Features

- **Interactive chat.** `neo` opens a Bubble Tea terminal UI. Type a task and
  watch the agent work.
- **Small tool surface.** Read, search, shell, and edit tools are inspectable
  and permissioned.
- **Permission modes.** Choose `ask`, `trusted`, or `readonly` depending on how
  much approval you want before Neo runs tools.
- **Visible workflows.** Ask Neo to run a workflow or provide numbered steps and
  the TUI shows a live checklist while the agent works.
- **AGENTS.md support.** Drop an `AGENTS.md` in your project (or `~/.neo/`) and
  its guidance is loaded into the agent's system prompt. Feature-flagged.
- **Skills.** Reusable prompt snippets in `.neo/skills/<name>/SKILL.md`. Mention
  `$name` in a message and the skill's instructions are…
