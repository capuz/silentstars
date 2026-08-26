---
repo: "CollieIsCute/dotfiles"
name: "dotfiles"
description: "write a script for me to set up the environment of new computer"
readmeQualityOk: true
url: "https://github.com/CollieIsCute/dotfiles"
language: "Go Template"
languages: ["Go Template", "Shell"]
languagePcts: [50, 40]
topics: ["neovim", "nvim", "tmux", "fish", "catppuccin", "hyprland", "wayland", "chezmoi", "noctalia", "matugen"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2021-03-11T05:50:17Z"
lastCommitAt: "2026-08-26T04:17:20Z"
lastReleaseAt: "2026-06-17T19:19:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 81
maintainers: ["CollieIsCute"]
openGraphImageUrl: "https://opengraph.githubassets.com/019ebd9d0e52de1e87b0e0e936d517c82cb43ecfc54f4ea4d94e1918be90a19f/CollieIsCute/dotfiles"
---

# Collie's Dotfiles

Personal dotfiles managed with [chezmoi](https://chezmoi.io). One repo, several machines.

## Install

```bash
chezmoi init --apply collieiscute -v
```

## Supported platforms

| OS | Package manager | Status |
|---|---|---|
| macOS | Homebrew | daily-driven |
| Arch | pacman + paru | daily-driven |
| Ubuntu / Debian / Linux Mint | apt | CI-tested only |
| Windows | Scoop | CI-tested only |

## Custom touches worth knowing

### Theme

- Linux uses Noctalia's wallpaper-derived **light** palette; macOS and Windows use Matugen with the same per-app theme paths.
- Generated app themes stay outside chezmoi. [`.chezmoiexternal.toml`](https://github.com/CollieIsCute/dotfiles/blob/HEAD/home/.chezmoiexternal.toml) only pins the Matugen template inputs.
- Fish and cursor themes stay independent.
- Font: **JetBrainsMono Nerd Font** across every terminal / bar / lock screen.

### chezmoi quirks I keep tripping over (that this repo handles)

- `run_onchange_*` scripts only re-run when their **rendered** content changes. Manifest files (`fish_plugins`, `Brewfile`) that aren't templated into the script bodies don't trigger reruns. Both are pinned via embedded sha256 hash…
