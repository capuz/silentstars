---
repo: "maxclax/dotfiles"
name: "dotfiles"
description: "Cross-platform dotfiles managed with chezmoi, Nix Home Manager, and age encryption. Includes GTD-style Org-mode workflow, Doom Emacs, tmux, and automated backup with Borgmatic."
readmeQualityOk: true
url: "https://github.com/maxclax/dotfiles"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [56]
topics: ["age-encryption", "borgmatic", "chezmoi", "doom-emacs", "dotfiles", "gtd", "home-manager", "linux", "macos", "nix"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-11-23T16:09:16Z"
lastCommitAt: "2026-10-03T09:21:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 74
maintainers: ["maxclax"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0397f39120cb4d9aa7cafb857fb0d2c0585268c8a370e794ca2ffefb0169a18/maxclax/dotfiles"
---

# Dotfiles

My personal dotfiles for macOS and Linux, managed with
[`chezmoi`](https://github.com/twpayne/chezmoi) and [Nix](https://nixos.org/) with
[Home Manager](https://github.com/nix-community/home-manager). Secured with
[age](https://age-encryption.org/) encryption and [1Password](https://1password.com/) integration.

## Recommendations

1. Fork the repository's main branch.
2. Follow the instructions below to set up your environment.
3. Create a personal/private branch for your personal data and push to your repo.
4. Use your personal develop branch between your setups.

## Prerequisites

- [Nix](https://nixos.org/download.html) package manager
- [Home Manager](https://github.com/nix-community/home-manager)
- [chezmoi](https://www.chezmoi.io/)
- [age](https://age-encryption.org/)
- [1Password](https://1password.com/) and
  [1Password CLI](https://1password.com/downloads/command-line/)

## Quick Install

```bash
sh -c "$(curl -fsLS https://raw.githubusercontent.com/maxclax/dotfiles/main/install.sh)"
```

## Manual Installation (without init)

1. Install chezmoi:

   ```bash
   # brew install curl wget git
   # sudo apt update && sudo apt install -y curl wget git
   sh -c…
