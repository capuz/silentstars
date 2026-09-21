---
repo: "tkz0/tkzmux"
name: "tkzmux"
description: "Native macOS session manager for Claude Code: one window, a terminal per session, status from Claude's own hooks. Metal renderer on libghostty-vt."
readmeQualityOk: true
url: "https://github.com/tkz0/tkzmux"
language: "Swift"
languages: ["Swift"]
languagePcts: [97]
topics: ["claude-code", "ghostty", "macos", "metal", "session-manager", "swift", "terminal"]
stars: 22
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-07T19:30:35Z"
lastCommitAt: "2026-09-21T09:14:29Z"
lastReleaseAt: "2026-09-10T20:08:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 46
maintainers: ["tkz0", "rebasedaily", "cubic-dev-ai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/60e8f81ad01bfd6e2df4fae1e294ea7affd677fc44a88213b69f510208b3cdc3/tkz0/tkzmux"
---

# tkzmux

A native macOS session manager for coding agents — [Claude Code](https://claude.com/claude-code),
[Codex CLI](https://developers.openai.com/codex/cli) and the
[Antigravity CLI](https://antigravity.google) today. Every conversation gets its own real terminal
in one window, whichever agent is driving it. A sidebar lists the sessions grouped by repository,
and each row shows a status derived from that agent's own hooks — plus, for Claude Code, its
session descriptors too: *working*, *done*, or **NEEDS YOU** when a permission prompt or an
unattended answer is waiting. The terminal is a from-scratch Metal renderer driving
[libghostty-vt](https://github.com/ghostty-org/ghostty), the project's only third-party dependency.
Sessions survive a quit: screen and scrollback are snapshotted, and a restored row reopens under a
fresh shell with its own agent's resume command — `claude --resume`, `codex resume` or
`agy --conversation` — a keystroke away.

## Status

A personal project, built for one person's workflow, developed in the open. It is **not a
supported product**: no roadmap, no compatibility promise, no commitment to answer issues. Use it
if it helps you, fork it if it nearly…
