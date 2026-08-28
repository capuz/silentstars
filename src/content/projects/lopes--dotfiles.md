---
repo: "lopes/dotfiles"
name: "dotfiles"
description: "Lopes' personal configuration files"
readmeQualityOk: true
url: "https://github.com/lopes/dotfiles"
homepage: "https://lopes.id"
language: "Shell"
languages: ["Shell", "Vim Script"]
languagePcts: [60, 27]
topics: ["bash", "zsh", "vim", "git", "aliases", "linux", "macos", "unix", "aerospace", "ghostty"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-07-28T01:57:32Z"
lastCommitAt: "2026-08-28T14:33:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 55
maintainers: ["lopes"]
openGraphImageUrl: "https://opengraph.githubassets.com/84fadd2c1a8a31d4006750c7bf287a05eb8ac675b7e27da0c951d8f239ef9249/lopes/dotfiles"
---

# dotfiles
My personal, **minimalist** configuration files built on simplicity, security, and efficiency.

---

## Philosophy
1. **Layout**: Optimize screen space by removing superfluous elements.
2. **Colors**: Consistent GitHub Dark Dimmed colorscheme across all tools.
3. **Symbols**: Meaningful icons and glyphs via Nerd Fonts.
4. **Controls**: Streamlined shortcuts with vi-style navigation where it fits.
5. **Relevancy**: Only settings and tools that serve actual, practical usage.

---

## Packages

All packages are declared in [`Brewfile`](https://github.com/lopes/dotfiles/blob/HEAD/Brewfile): formulae, casks, taps, and VSCode extensions. `brew bundle install` reads it and installs everything in one pass. Update it with `make brew-dump` after installing or removing tools.

---

## Quick Start

### 1. Workstation (macOS)
```sh
# 1. install Homebrew (https://brew.sh)
# 2. clone and bootstrap
cd "$HOME/Projects"
git clone https://github.com/lopes/dotfiles
cd dotfiles
make bootstrap   # brew bundle + make install + macos-defaults.sh
# 3. restart your shell
```

### 2. Server (Linux / Debian)
```sh
# 1. clone and bootstrap
cd "$HOME/Projects"
git clone…
