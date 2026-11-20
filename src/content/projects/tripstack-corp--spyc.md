---
repo: "Tripstack-Corp/spyc"
name: "spyc"
description: "A Rust TUI file commander where the AI agent in the side pane can query the file commander itself"
readmeQualityOk: true
url: "https://github.com/Tripstack-Corp/spyc"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ai-agent", "claude-code", "cli", "crossterm", "developer-tools", "file-commander", "file-manager", "mcp", "ratatui", "rust"]
stars: 20
forks: 2
openIssues: 95
closedIssues: 151
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-05-14T19:38:39Z"
lastCommitAt: "2026-11-20T12:24:04Z"
lastReleaseAt: "2026-11-09T13:52:35Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 47
maintainers: ["DerekMarshall", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b89eabc29e4fca05a403baf423d846283df73139d49abc6a06beb74ea020f48a/Tripstack-Corp/spyc"
discussionCount: 0
---

The file commander built for collaborating with your coding agents.

  Keyboard-driven · MCP-native · Rust · macOS 13+ and Linux

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
