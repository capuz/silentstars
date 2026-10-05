---
repo: "Tripstack-Corp/spyc"
name: "spyc"
description: "A Rust TUI file commander where the AI agent in the side pane can query the file commander itself"
readmeQualityOk: true
url: "https://github.com/Tripstack-Corp/spyc"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-agent", "claude-code", "cli", "crossterm", "developer-tools", "file-commander", "file-manager", "mcp", "ratatui", "rust"]
stars: 17
forks: 2
openIssues: 72
closedIssues: 74
watchers: 1
contributors: 3
recentReleases: 8
createdAt: "2026-05-14T19:38:39Z"
lastCommitAt: "2026-10-05T10:47:36Z"
lastReleaseAt: "2026-08-18T13:08:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 47
maintainers: ["DerekMarshall", "dependabot[bot]", "calebjacksonhoward"]
openGraphImageUrl: "https://opengraph.githubassets.com/41c0676fae85ca4aa0ccf9199804a88104909eb797fab1c1b5807be3ee88298b/Tripstack-Corp/spyc"
discussionCount: 0
---

The file commander built for collaborating with your coding agents.

  Keyboard-driven · MCP-native · Rust · macOS and Linux

---

## Why spyc?

Put an AI coding agent in your terminal and you get a chat window. You still
describe your working tree to it, paste paths back and forth, and lose track of
what it's looking at.

spyc runs the agent in a pane beside a keyboard-driven file commander and gives
it live, structured access to what you're looking at over a local MCP socket.
The agent asks spyc *what is the cursor on, what is staged, what is picked* —
no copy-paste, no path description. Pick three files, ask a question, and it
sees your selection. When it names a path in its answer, `gf` jumps you there.

Sharing a terminal with an agent usually means sharing a *screen* — cells and
scrollback for it to scrape. What spyc shares is the working set: cursor,
picks, filter, branch, worktree, as structured state it can query. The file
manager is the shared workspace where you and your agents actually work — not a
file list bolted onto a chat window.

## What it is

A two-pane terminal program. The **top pane** is a vim-flavoured file commander
with git-aware listings; the **bottom…
