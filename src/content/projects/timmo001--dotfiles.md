---
repo: "timmo001/dotfiles"
name: "dotfiles"
description: "🧰 An agent-driven Omarchy setup for development, desktop, and automation."
readmeQualityOk: true
url: "https://github.com/timmo001/dotfiles"
homepage: "https://dotfiles.timmo.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["dotfiles", "linux", "stow", "arch", "arch-linux", "omarchy", "hyprland", "rice", "tooling", "ghostty"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-01-14T21:16:45Z"
lastCommitAt: "2026-09-14T09:13:45Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 72
maintainers: ["timmo001", "renovate[bot]", "cursor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd919e82551633dab04874b5f1286986c17b03528756e1873206a475f2b7b664/timmo001/dotfiles"
---

# 🧰 Dotfiles

Personal [Omarchy](https://omarchy.org) dotfiles, managed with [GNU Stow](https://www.gnu.org/software/stow/) and the `dot` command.

**Docs:** <https://dotfiles.timmo.dev>

> [!CAUTION]
> This repository is for reference. The configs are tuned for Omarchy and my machines, with a private overlay that is not public, so installation is not recommended; borrow pieces rather than installing wholesale. The shared OpenCode config is the exception: [`opencode-config`](https://github.com/timmo001/opencode-config).

## Quick start

```bash
# Public source of truth; stow packages live under this checkout
git clone git@github.com:timmo001/dotfiles.git ~/.config/dotfiles

# Private overlay clone during init needs an authenticated gh
gh auth status || gh auth login

cd ~/.config/dotfiles

# Allow this repo's mise.toml, then install the pinned toolchain
mise trust
mise install

# Build the checked-out binary before it is on PATH
mise run dot:build

# First-use setup (pulls private overlay when gh auth works)
~/.config/dotfiles/scripts/.local/bin/dot init
```

Ongoing: `dot doctor` (health checks), `dot update` (pull, stow, rebuild).

## Docs map

-…
