---
repo: "ir77/dotfiles"
name: "dotfiles"
description: "Dotfiles and environment setup files for personal use, etc."
originalDescription: "自分のdotfilesや環境構築用のファイルなど"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/ir77/dotfiles"
language: "Shell"
languages: ["Shell", "Vim Script"]
languagePcts: [74, 20]
topics: ["zsh", "vim", "dein", "homebrew"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2014-05-16T12:43:34Z"
lastCommitAt: "2026-11-20T11:58:05Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 66
maintainers: ["yushi-uchimura", "ir77"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f1d0a1c513fce2ea1c818589e4ea9fda39a1c2aa72c0241df17077d240a519b/ir77/dotfiles"
---

# Dotfiles
A personal development environment configuration for macOS.
It includes settings for zsh, vim, git, and other tools, along with scripts that automatically install various tools.

## Screenshot
**Zsh (Starship)**

## Installation
Run the following scripts in order.

```bash
git clone --recurse-submodules git@github.com:ir77/dotfiles.git
sh setup1-brew.sh        # Install and update Homebrew, and install the tools listed in the Brewfile
sh setup2-rc.sh          # Create symbolic links for the configuration files
sh setup3-macdefaults.sh # macOS system settings (Dock, Finder, etc.)
```

After running `setup2-rc.sh`, set your Git user information in `~/.gitconfig.local` (the script displays instructions).

### Updating

```bash
git pull
git submodule update --remote
```
