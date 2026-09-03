---
repo: "Corsinvest/cv4vs-agents"
name: "cv4vs-agents"
description: "Agentic coding inside Visual Studio — Claude Code with a rich chat pane, an interactive terminal, and the IDE (editor, solution, debugger) exposed to the agent over MCP."
readmeQualityOk: true
url: "https://github.com/Corsinvest/cv4vs-agents"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [61, 36]
topics: ["agentic", "ai-agent", "anthropic", "claude", "claude-code", "coding-agent", "csharp", "mcp", "visual-studio", "vsix"]
stars: 7
forks: 4
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-21T06:24:09Z"
lastCommitAt: "2026-09-03T08:12:59Z"
lastReleaseAt: "2026-08-26T09:04:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 65
maintainers: ["franklupo", "olxsoft01-boop"]
openGraphImageUrl: "https://opengraph.githubassets.com/cba9d7d8d0c7fe3a5089c351078e9050303fed26aa889e5e02d41879b26edf6f/Corsinvest/cv4vs-agents"
---

# cv4vs Agents — Claude Code for Visual Studio

**Claude Code inside Visual Studio.**
*Built by a developer, for developers. Made in Italy.* 🇮🇹

A Visual Studio 2022 / 2026 extension that brings the **Claude Code** CLI inside the IDE — a rich
chat experience plus an interactive terminal, both wired into Visual Studio's editor,
solution, debugger and build system.

It is **not** a fork of the CLI. It drives the real `claude.exe` (installed via npm,
`@anthropic-ai/claude-code`); the binary is never bundled. Version differences are handled by
feature-detection, not by pinning a CLI version.

**Design philosophy: lazy and fast.** Nothing is built, read or started until you actually look at
it. The chat holds **nothing in memory** — the transcript is read from the session file on demand,
newest page first, older pages only as you scroll, and heavy blocks (images, sub-agent transcripts,
full diffs) only when you open them. Same for the rest: services, the MCP server and the panes
themselves start on first use, not on solution load. Long sessions and large solutions stay as light
and quick as an empty one.

> Status: work in progress. This README is a living overview of what the…
