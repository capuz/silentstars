---
repo: "raphapr/dotfiles"
name: "dotfiles"
description: "sensible hacker defaults managed with chezmoi"
readmeQualityOk: true
url: "https://github.com/raphapr/dotfiles"
language: "Shell"
languages: ["Shell", "Lua"]
languagePcts: [49, 34]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2014-04-05T05:20:42Z"
lastCommitAt: "2026-11-06T12:17:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 63
maintainers: ["raphapr"]
openGraphImageUrl: "https://opengraph.githubassets.com/961cc92eef81ff4aac9ceeac5c6636ddd314992f4b7c24a535ca89b842723b89/raphapr/dotfiles"
---

# dotfiles

Personal dotfiles for Arch-based Linux systems, managed with [chezmoi](https://chezmoi.io). This setup provides an opinionated GNU/Linux configuration focused around i3wm, along with a curated selection of (mostly) open source tools. While these dotfiles are configured to work on my systems, requiring personal dependencies, you are welcome to adapt them to fit your own needs.

## Installation

### Quick Start

```bash
sudo pacman -S chezmoi
# Install the 1Password CLI (`op`) before applying secret-backed templates.
eval $(op signin)
chezmoi init raphapr --apply
```

### Manual Setup

1. Install chezmoi:

   ```bash
   sudo pacman -S chezmoi
   ```

2. Sign in to 1Password before rendering secret-backed templates:

   ```bash
   eval $(op signin)
   ```

3. Initialize and apply:
   ```bash
   chezmoi init raphapr
   chezmoi apply
   ```

## Components

### Window Manager & Interface

- **i3wm** - Tiling window manager
- **polybar** - Status bar
- **rofi** - Application launcher and menu system
- **dunst** - Notification daemon
- **feh** - Image viewer and wallpaper setter
- **redshift** - Screen color temperature adjuster
- **autorandr** - Display configuration manager…
