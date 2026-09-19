---
repo: "innovation-upstream/devrc"
name: "devrc"
description: "Premade Opinionated Neovim and Tmux developer environment built with home-manager + nixpkgs (Works great with NixOS 😄)"
readmeQualityOk: true
url: "https://github.com/innovation-upstream/devrc"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["devenv", "neovim", "nix", "nixos", "nixpkgs", "tmux"]
stars: 5
forks: 0
openIssues: 26
closedIssues: 30
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2022-06-23T17:27:14Z"
lastCommitAt: "2026-09-19T01:36:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 73
maintainers: ["ZacxDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/66728627584f3bc85558d91c1f09594320b45261c711930a385124263a36402f/innovation-upstream/devrc"
---

# DEVRC

Personal development environment configuration using NixOS, home-manager, and flakes.

## Architecture

```
flake.nix                  # Pinned nixpkgs + home-manager inputs
flake.lock                 # Auto-generated dependency lock
nix/
  home.nix                 # Home-manager entry point (services, file symlinks)
  sessionVariables.nix     # Environment variables (EDITOR, FZF, LSP paths)
  pkgs/
    default.nix            # Core packages (coreutils, search, git)
    lang/default.nix       # Language runtimes + LSPs (Go, Python, Rust, Node, etc.)
    tools/default.nix      # Dev tools (docker-compose, lazygit, k9s, nemo)
    tools/tmux-fuzzyclaw.nix  # Custom Go binary (local build)
  programs/                # Per-program home-manager modules
    neovim/ zsh/ bash/ tmux/ git/ fzf/ direnv/ alacritty/ ranger/
scripts/                   # Tmux activity tracking, task dashboard, bar/status tooling
cmd/install.sh             # Activation script
```

## Installation

1. `mkdir -p ~/workspace && cd ~/workspace`
2. Clone this repo
3. First-time setup (no home-manager in PATH yet):
   ```sh
   nix run github:nix-community/home-manager -- switch --flake ./devrc --impure
   ```…
