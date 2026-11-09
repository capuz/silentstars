---
repo: "allanabiud/dotfiles"
name: "dotfiles"
description: "Dotfiles Repo"
readmeQualityOk: true
url: "https://github.com/allanabiud/dotfiles"
language: "Lua"
languages: ["Lua", "Python"]
languagePcts: [66, 23]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-07-01T14:22:22Z"
lastCommitAt: "2026-11-09T04:34:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 46
maintainers: ["allanabiud"]
openGraphImageUrl: "https://opengraph.githubassets.com/709a93ac7b3ee76fd97e03e5f4a129c7c541049cd95ea174ee74f4d3f89d2a0d/allanabiud/dotfiles"
---

# Dotfiles

Managed with [chezmoi](https://www.chezmoi.io/).

## Quick Start on a New Machine

```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply allanabiud
```

Or if chezmoi is already installed:

```bash
chezmoi init --apply allanabiud/dotfiles
```

## Structure

- Active configs (`niri`, `hypr`, `kitty`, `starship`, `zsh`, `nvim`, `mpd`, `rmpc`, `fastfetch`, `scripts`) are applied directly.
- Inactive configs (`i3`, `sway`, `mango`, `waybar`, etc.) are safely stored in `.chezmoiignore` and can be enabled whenever needed.
- Scripts are located in `~/.config/scripts/`.
