---
repo: "timmo001/dotfiles"
name: "dotfiles"
description: "🧰 An agent-driven Omarchy setup for development, desktop, and automation."
readmeQualityOk: true
url: "https://github.com/timmo001/dotfiles"
homepage: "https://dotfiles.timmo.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["dotfiles", "linux", "stow", "arch", "arch-linux", "omarchy", "hyprland", "rice", "tooling", "ghostty"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-01-14T21:16:45Z"
lastCommitAt: "2026-08-28T14:34:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 78
maintainers: ["renovate[bot]", "timmo001"]
openGraphImageUrl: "https://opengraph.githubassets.com/778c4dd8c7c156cc04b725f77a301dfaa15431e3eb84f28bc9fed9e2d10a0195/timmo001/dotfiles"
---

# 🧰 Dotfiles

My public [Omarchy](https://omarchy.org) dotfiles, managed with GNU Stow and the `dot` command.

**Full documentation:** <https://dotfiles.timmo.dev>

> [!CAUTION]
> These are my personal dotfiles, tightly tuned for [Omarchy](https://omarchy.org) (an Arch Linux based distro) and my specific machines. They are **not** meant to be installed as-is by anyone else: they are unlikely to work on plain Arch without replicating my setup, and they lean on a deeply integrated private overlay (`dotfiles-private`) that is not public, so the public repo alone is an incomplete picture. Use them as a reference to borrow from, or pull individual pieces into your own dotfiles. The shared OpenCode config is the exception: it is generated from this repo and published as [`opencode-config`](https://github.com/timmo001/opencode-config), written to be portable and reusable on its own.
>
> Much of this project, including the documentation and a lot of the code, is generated or heavily assisted by LLMs and coding agents.

## At a glance

- Stow-based dotfiles rooted at `~/.config/dotfiles`, applied with the `dot` command
- A single compiled `dot` CLI at `scripts/.local/bin/dot` (Bun +…
