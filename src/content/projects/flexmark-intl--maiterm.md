---
repo: "Flexmark-Intl/maiterm"
name: "maiterm"
description: "A modern terminal emulator with workspace organization, split panes, editor tabs, and smart automation — built with Tauri, Svelte 5, and xterm.js."
readmeQualityOk: true
url: "https://github.com/Flexmark-Intl/maiterm"
homepage: "https://maiterm.dev/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [59, 21]
stars: 10
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-19T17:50:22Z"
lastCommitAt: "2026-10-26T18:06:55Z"
lastReleaseAt: "2026-03-05T23:46:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 63
maintainers: ["flxmrk"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0aa8f5a1ca5ade9f56572628058a12922a9cccbacffb4fb1ca2e67efad4a7e3/Flexmark-Intl/maiterm"
discussionCount: 0
---

A terminal emulator built with Tauri 2 + Svelte 5, designed to make terminal-based AI workflows better and more organized. maiTerm is not "AI in a terminal" — there is no built-in LLM, no chat sidebar, no magic autocomplete. Instead, it's a proper terminal that understands what AI coding agents are doing and gives you the tools to manage them.

Our initial focus is on **Claude Code** integrations:

- **Real-time session tracking** — hooks report Claude's state (active, idle, needs permission) with live tab indicators
- **Auto-resume** — automatically reconnects to your last Claude session when you open a tab, using hooks-captured session IDs
- **Tab state awareness** — know at a glance which tabs have Claude thinking (pulsing dot), waiting for input (green dot), or needing permission (lock icon)
- **Workspace organization** — group related Claude sessions by project; split panes to run multiple agents side by side
- **Agent Bridge** — bridge two running Claude sessions (local + remote, or two related projects) so they collaborate directly while you stay the one making the calls
- **Scrollback persistence** — full terminal state in SQLite survives restarts, so you never lose…
