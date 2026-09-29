---
repo: "fmind/dot"
name: "dot"
description: "AI-driven, CLI-first dotfiles for Linux & macOS — chezmoi + mise, Fish, Neovim, and a typed Python CLI"
readmeQualityOk: true
url: "https://github.com/fmind/dot"
homepage: "https://fmind.dev"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["ai-agents", "chezmoi", "claude-code", "dotfiles", "fish-shell", "mise", "neovim", "cli", "developer-environment", "ghostty"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 28
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-05T17:20:19Z"
lastCommitAt: "2026-09-29T10:04:35Z"
lastReleaseAt: "2026-07-14T16:04:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["fmind", "mederic-hurier-partner"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4ed96f0d9a581aef0353f077610e873bb374b3ba3e7e3392a2eb912c1f6309e/fmind/dot"
---

# Dot

My personal dotfiles for **AI-driven, CLI-first development** on Linux and macOS. [Chezmoi](https://www.chezmoi.io/) manages the files; [mise](https://mise.jdx.dev/) manages tools and tasks. Read, borrow, or fork to build your own workstation.

[Install](#installation) · [Use](#everyday-use) · [Credentials](#credentials) · [Adapt](#adapting-this)

## Highlights

- **Terminal:** Fish, Starship, Atuin, zoxide, fzf, Ghostty, and Zellij.
- **Editor:** Neovim with LazyVim, styled with [fmind/theme](https://github.com/fmind/theme).
- **Agents:** Antigravity, Claude Code, Codex, Copilot, Grok, and OpenCode share a persona and [skills](https://github.com/fmind/dot/blob/HEAD/skills/). `dot agent session sync` normalizes their local sessions into the shared archive; OpenCode reads `~/.local/share/opencode/opencode.db` (override with `agent.sources.opencode`). Its transcript adapter excludes tool parts and synthetic text; OpenCode usage accounting remains unavailable.
- **Development:** Python with uv, Ruff, ty, and pytest, plus cloud and infrastructure tools.
- **Automation:** the `dot` CLI checks workstation health, manages workspaces, and reports agent usage.

## Prerequisites

|…
