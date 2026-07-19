---
repo: "wikieden/robocode"
name: "robocode"
description: "Rust-first reimplementation of a local agent CLI inspired by Claude Code."
readmeQualityOk: true
url: "https://github.com/wikieden/robocode"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 99
forks: 6
openIssues: 1
closedIssues: 0
watchers: 8
contributors: 2
recentReleases: 10
createdAt: "2026-04-08T13:38:05Z"
lastCommitAt: "2026-07-19T06:08:34Z"
lastReleaseAt: "2026-05-27T13:32:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 27
maintainers: ["wikieden"]
openGraphImageUrl: "https://opengraph.githubassets.com/4214bf7df24ab04e7bb5b6240b2a462382f4de21db5f87b44a6fadb331562b83/wikieden/robocode"
---

# Viden

Viden is a local-first coding-agent cockpit for developers who want one
terminal surface to chat with a model, approve real workspace changes, supervise
delegated agents, and keep enough evidence to resume work later.

Chinese version: [README.zh-CN.md](https://github.com/wikieden/robocode/blob/HEAD/README.zh-CN.md)

## Why It Exists

Most coding agents are good at a single conversation. Viden is built around a
slightly different job: coordinating programming work. It keeps the active
conversation, tool effects, approvals, tests, tasks, memory, provider health,
and external agent lanes visible in one operator cockpit.

## Highlights

- Cockpit TUI: transcript, approval state, workspace snapshot, active tasks,
  diagnostics, provider health, and recent evidence stay visible together.
- Real tool execution: file read/write/edit, search, shell, web, Git, LSP, test
  commands, task state, and memory all run through the shared runtime path.
- Permission-aware edits: mutating file, shell, Git, workflow, and delegated
  agent actions are mediated by permission modes before they affect the
  workspace.
- Multi-provider runtime: DeepSeek, OpenAI, Anthropic, OpenAI-compatible…
