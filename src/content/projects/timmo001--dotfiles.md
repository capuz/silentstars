---
repo: "timmo001/dotfiles"
name: "dotfiles"
description: "🧰 My public Omarchy dotfiles, managed with GNU Stow and the dot command."
readmeQualityOk: true
url: "https://github.com/timmo001/dotfiles"
homepage: "https://dotfiles.timmo.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["dotfiles", "linux", "stow", "arch", "arch-linux", "omarchy", "hyprland", "rice", "tooling"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-01-14T21:16:45Z"
lastCommitAt: "2026-07-04T23:13:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 66
maintainers: ["timmo001", "cursor[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/86ea7e7dfca36f1be5d8b635b0f3f6268f028872c472f176a7ebaa9a6d41f73e/timmo001/dotfiles"
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
- A single compiled binary at `scripts/.local/bin/dot` (Bun + Effect…
