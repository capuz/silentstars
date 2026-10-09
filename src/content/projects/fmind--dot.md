---
repo: "fmind/dot"
name: "dot"
description: "AI-driven, CLI-first dotfiles for Linux & macOS — chezmoi + mise, Fish, Neovim, and a typed Python CLI"
readmeQualityOk: true
url: "https://github.com/fmind/dot"
homepage: "https://fmind.dev"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai-agents", "chezmoi", "claude-code", "dotfiles", "fish-shell", "mise", "neovim", "cli", "developer-environment", "ghostty"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 28
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-04-05T17:20:19Z"
lastCommitAt: "2026-10-09T18:55:22Z"
lastReleaseAt: "2026-07-14T16:04:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 62
maintainers: ["fmind", "mederic-hurier-partner"]
openGraphImageUrl: "https://opengraph.githubassets.com/120a46d77ac67ff9ee837b5e4682b8b3c9dc98b1e978db5a55c5d7a080a2ba44/fmind/dot"
---

# Dot

My personal dotfiles for **AI-driven, CLI-first development** on Linux and macOS. [Chezmoi](https://www.chezmoi.io/) manages the files; [mise](https://mise.jdx.dev/) manages tools and tasks. Read, borrow, or fork to build your own workstation.

[Install](#installation) · [Use](#everyday-use) · [Credentials](#credentials) · [Adapt](#adapting-this)

  <img
    src=".github/assets/dot-overview.svg"
    alt="How dot works: clone this repository of dotfiles, persona, skills, tool baseline and encrypted credentials; install.sh bootstraps mise and chezmoi; chezmoi applies files, mise installs locked tools and the dot CLI checks health, so your Linux or macOS workstation gets its terminal, editor, Python, cloud tools and six agent harnesses. Change the source, never the deployed copy."
    width="960"
  >

## Highlights

- **Terminal:** Fish, Starship, Atuin, zoxide, fzf, Ghostty, and Zellij.
- **Editor:** Neovim with LazyVim, styled with [fmind/theme](https://github.com/fmind/theme).
- **Agents:** Antigravity, Claude Code, Codex, Copilot, Grok, and OpenCode share a persona and [skills](https://github.com/fmind/dot/blob/HEAD/skills/); `dot agent session sync` archives their local…
