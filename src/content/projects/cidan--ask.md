---
repo: "Cidan/ask"
name: "ask"
description: "Interactive REPL wrapper around the Claude CLI with glamour-rendered output"
readmeQualityOk: true
url: "https://github.com/Cidan/ask"
language: "Go"
languages: ["Go", "C"]
languagePcts: [80, 20]
stars: 5
forks: 2
openIssues: 6
closedIssues: 11
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-19T19:48:36Z"
lastCommitAt: "2026-08-19T04:08:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 56
maintainers: ["Cidan", "ask"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f5320cb4cf0c951d02a7ff853e458b1315168a29196edb86849b83b1ac2df53/Cidan/ask"
---

# ask

</p>

  A Bubble Tea v2 TUI for <a href="https://github.com/anthropics/claude-code">Claude Code</a>.<br />
  Streaming markdown, inline images, tabs, themes, colored diffs,<br />
  a draggable scrollbar, and a richer MCP-driven question modal.
</p>

`ask` spawns the `claude` CLI in
`-p --input-format stream-json --output-format stream-json` mode,
pipes events through a Bubble Tea TUI, and swaps Claude's built-in
`AskUserQuestion` tool for a tabbed modal backed by an embedded MCP
server. Sessions resume, tabs isolate, shell mode drops you straight
into `$SHELL`, and sixteen themes re-paint the whole UI live.

## Features

- **Chat with Claude Code** via streaming JSON input/output
- **[Tabs](#tabs)** — `Ctrl+T` opens a new tab with its own claude subprocess, shell, MCP bridge, history, session, and cwd; `Ctrl+←` / `Ctrl+→` cycle between tabs; a byobu-style strip at the bottom shows each tab's shortened cwd (prefixed with `▸` when that tab is busy); closing the last tab quits
- **Resume sessions** — `/resume` opens a picker of prior conversations in the current directory
- **Pick the provider + model** — `Ctrl+M` opens a crush-style picker: search box on top, "Recently used"…
