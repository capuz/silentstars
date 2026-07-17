---
repo: "flowmux-ai/flowmux-terminal"
name: "flowmux-terminal"
description: "FlowMux — Agent Workflow Multiplexer Terminal. Go with the agents' flow."
readmeQualityOk: true
url: "https://github.com/flowmux-ai/flowmux-terminal"
homepage: "https://flowmux-ai.github.io/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-agent", "claude-code", "codex", "linux", "mux", "opencode", "terminal", "flowmux", "ai-agent-terminal", "ai-coding-agents"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-05-08T12:07:45Z"
lastCommitAt: "2026-07-17T05:59:07Z"
lastReleaseAt: "2026-05-15T01:57:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 63
maintainers: ["JSUYA"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd4b945ce6bdc5738af3fac0b16a86665bfad1e0c4a731c9dc70ee13b51b1dac/flowmux-ai/flowmux-terminal"
---

# FlowMux

**Agent Workflow Multiplexer Terminal** — *Go with the agents' flow.*

[Website](https://flowmux-ai.github.io/) · [Latest release](https://github.com/flowmux-ai/flowmux-terminal/releases/latest)

</div>

### A terminal for AI agent workflows, browser control, and task signals.

flowmux is a Linux/GTK4 terminal for AI coding agents. The terminal pane uses
the system VTE widget for terminal emulation, flowmux-owned PTYs, and GTK integration.
Supported on Ubuntu 24.04 and later.

> Unofficial GPL-3.0-or-later reimplementation inspired by [cmux](https://cmux.com/ko), a macOS/AppKit app. Not affiliated with cmux.
  
## Control internal browser

A WebKitGTK 6.0 browser tab lives next to terminal tabs in the same pane tree.
The clip shows an AI agent driving the page over flowmux's IPC socket —
snapshot the DOM, click, type, read state back — with no system Chromium and
no separate driver.

## AI Agent notification (Claude, Codex, OpenCode)

flowmux installs lifecycle hooks into Claude Code, Codex, and OpenCode so
*task complete*, *needs approval*, and *error* events surface as native
desktop notifications — routed to the workspace that fired them, suppressed
while that…
