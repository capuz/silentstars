---
repo: "bindoffice/terry"
name: "terry"
description: "Open source gpui-based cross-platform terminal with vertical tabs for AI coding agents. Built for multitasking, organization, and programmability. Support MCP."
readmeQualityOk: true
url: "https://github.com/bindoffice/terry"
homepage: "https://bindoffice.github.io/terry/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["aiagent", "gpui", "terminal", "gpui-component", "rust", "terminal-emulator", "terry", "vt100", "ai", "cmux"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-07-22T14:54:06Z"
lastCommitAt: "2026-10-30T10:46:56Z"
lastReleaseAt: "2026-09-14T13:14:39Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 65
maintainers: ["solos"]
openGraphImageUrl: "https://opengraph.githubassets.com/aebadc6b2adb0f54daecbc06a3610396fdf3a89e946d515b3cbdca0b638b14bd/bindoffice/terry"
discussionCount: 0
---

# Terry

[中文](https://github.com/bindoffice/terry/blob/HEAD/README.zh.md)

**Terry** turns your terminal into a workspace.  
Group shells, browse files, and keep an AI agent beside you — built for people who live in the command line.

## Preview

## Features

- **Terminal workspace** — group multiple terminals, switch groups with `ctrl-alt-shift-up` / `ctrl-alt-shift-down`; new sessions open in the right working directory; groups support automatic tiling layouts (manual / splits / tall / fat / grid / stack / horizontal / vertical, kitty-style); enable **broadcast input** from a group's context menu to type into every terminal in the group at once (`ctrl-alt-b`)
- **Tab management** — `cmd-shift-t` (`ctrl-shift-t`) reopens the most recently closed terminal with its cwd, profile/SSH/tmux launch, colors and font zoom; “Move Tab to New Window” moves a running terminal, process intact, into a new window
- **Quake terminal** — A drop-down terminal summoned anywhere with `ctrl+\`` , docked to the top of the screen (macOS)
- **CLI** — Drive a running Terry from scripts and editors: `terry new-tab --cwd ~/src`, `terry send-text "cargo test"`, `terry run "cargo test"`, and `terry session…
