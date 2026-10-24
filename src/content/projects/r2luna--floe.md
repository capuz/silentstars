---
repo: "r2luna/floe"
name: "floe"
description: "Run a colony of coding agents in parallel git worktrees, keyboard first."
readmeQualityOk: true
url: "https://github.com/r2luna/floe"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [74, 21]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-14T19:27:20Z"
lastCommitAt: "2026-10-24T00:14:03Z"
lastReleaseAt: "2026-09-16T23:54:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["brunocbatista"]
openGraphImageUrl: "https://opengraph.githubassets.com/12aa8a61e397f65bcbc8c23760242d230045d0e46492a41ccfa276d12edeb54a/r2luna/floe"
---

# Floe

**Run a colony of coding agents in parallel, one git worktree each, without touching the mouse.**

One agent at a time is a bottleneck. Five agents in one checkout step on each other's files.
Floe gives every task its own worktree and its own session, puts them all on one screen, and lets
you review, steer and merge each one from the keyboard.

Claude Code, Codex, Gemini, OpenCode, LM Studio and Ollama are all first-class. Pick the harness
per session, or ask a second one for a side opinion while the first keeps working.

## Highlights

- **Worktrees as the unit of work.** `⌘N` cuts a branch into its own worktree and provisions it:
  `.env` copied and rewritten per branch, dependencies installed, a database of its own.
- **Sessions per worktree.** Start as many agent sessions on a branch as you need, jump between
  them with `⌃O` / `⌃I`, and see which ones are waiting on you.
- **Colony board.** A kanban where every card is a task with its own worktree and agent. The
  board's own session, the nanny, releases tasks, merges finished ones and logs every move.
- **Queries.** Type `@codex` mid-turn and a second agent answers in a side panel. Merge its
  conversation into the…
