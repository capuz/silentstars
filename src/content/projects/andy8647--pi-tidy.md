---
repo: "Andy8647/pi-tidy"
name: "pi-tidy"
description: "Claude Code-style tool folding for the pi coding agent — a reply's tool calls collapse to one clickable line"
readmeQualityOk: true
url: "https://github.com/Andy8647/pi-tidy"
homepage: "https://www.npmjs.com/package/pi-tidy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["pi-coding-agent", "pi-extension", "pi-package", "tui"]
stars: 44
forks: 7
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 4
recentReleases: 8
createdAt: "2026-07-18T05:59:01Z"
lastCommitAt: "2026-11-01T10:43:53Z"
lastReleaseAt: "2026-10-19T04:22:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 48
maintainers: ["Andy8647", "dreanzy", "s5unty"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1304643299/5e4fc97d-44f7-4c3a-b417-360d47185768"
---

# pi-tidy

Tool folding for the [pi](https://github.com/earendil-works/pi) coding agent: a reply's tool calls
fold into one line you can click open, while edits, failures and background jobs stay in view — and
every box gets a rounded transparent frame.

**▶ [Watch the 40-second demo](https://cdn.jsdelivr.net/gh/Andy8647/pi-tidy@v0.4.3/assets/demo.mp4)**

## Features

- **Rounded borders** — ╭╮╰╯ box drawing instead of pi's default ┌┐└┘
- **Every tool box** — built-in tools, MCP calls (pi-mcp-adapter), subagents, and any other extension's tools all get the same frame
- **Every message box** — compaction and branch summaries, skill invocations, and extension custom messages get the same frame, each kind in its own border color
- **User messages that fit** — tidy's rounded frame, as wide as the text, with the user icon in its top border; a one-word prompt gets a small box. Or the rail (a rule above and below, an accent `│` in front), or pi's own look
- **Your own `!` commands, marked as yours** — a `!` / `!!` run gets the rounded frame too, with the user icon, the `!` you typed and the user message color, so it never passes for the agent's bash box
- **Per-tool border colors** —…
