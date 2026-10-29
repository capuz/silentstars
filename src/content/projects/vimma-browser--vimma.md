---
repo: "vimma-browser/vimma"
name: "vimma"
description: "A keyboard-first browser for people who live in Vim and tmux. Built on Firefox."
readmeQualityOk: true
url: "https://github.com/vimma-browser/vimma"
homepage: "https://vimma.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [75]
topics: ["browser", "firefox", "keyboard-driven", "linux", "omarchy", "tmux", "vim"]
stars: 12
forks: 0
openIssues: 23
closedIssues: 144
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-09T08:19:23Z"
lastCommitAt: "2026-10-29T12:25:35Z"
lastReleaseAt: "2026-10-27T22:05:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "under_pressure"]
healthScore: 97
undervaluedScore: 58
maintainers: ["JRanne", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1411511592/a15716cf-42c7-4c4e-a828-793d46257a23"
fundingLinks: ["GITHUB:https://github.com/JRanne"]
discussionCount: 0
---

# Vimma

**A keyboard-first browser for people who live in Vim and tmux.** You already have the muscle
memory; Vimma puts it to work on the web. Bare keys drive the page, `ctrl+b` drives tabs, panes
and workspaces, and your hands never leave the keyboard.

- **Vim on the page:** `j`/`k` to scroll, `f` for link hints, `/` to find, `:` for commands, and
  `Esc` to get back to normal mode. Copy a paragraph, list item or code block in three keys: `F`,
  its label, then `y` (or `v` to adjust it first).
- **tmux for the window:** `ctrl+b`, tmux's default prefix, then `c` for a new tab, `v` to split,
  `w` to switch workspace. If your fingers know tmux, they already know Vimma.
- **Every key is yours:** every binding, the prefix and the leader can be remapped in
  `config.toml`, Firefox's own keys too: every Firefox shortcut is a Vimma binding with
  Firefox's meaning, listed in `ctrl+b ?`, and `:firefox <id>` runs any other Firefox command.
- **Local AI agents, kept apart:** Claude Code, Codex, opencode and Copilot reach Vimma through
  MCP (`vimma-ctl mcp`), only in an agent workspace with its own cookies. An agent asks you
  first, and one answer (`a`) lets an agent work through its…
