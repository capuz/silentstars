---
repo: "roshbhatia/sysinit"
name: "sysinit"
description: "dotfiles and other configuration for initializing a new devenv (managed by nix)"
url: "https://github.com/roshbhatia/sysinit"
language: "Nix"
languages: ["Nix"]
languagePcts: [71]
topics: ["dotfiles", "dotfiles-linux", "dotfiles-macos", "neovim", "nix-darwin", "nixos", "nixos-configuration", "wezterm"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-08-07T20:58:35Z"
lastCommitAt: "2026-06-27T00:47:37Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 71
maintainers: ["github-actions[bot]", "roshbhatia", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/02c33f58c46cfa6e23e44ce04a44ad0355fcdd01696d16658a0e0d852f1c2d3c/roshbhatia/sysinit"
---

# sysinit

```ascii
          ▗▄▄▄       ▗▄▄▄▄    ▄▄▄▖
          ▜███▙       ▜███▙  ▟███▛
           ▜███▙       ▜███▙▟███▛
            ▜███▙       ▜██████▛
     ▟█████████████████▙ ▜████▛     ▟▙
    ▟███████████████████▙ ▜███▙    ▟██▙
           ▄▄▄▄▖           ▜███▙  ▟███▛
          ▟███▛             ▜██▛ ▟███▛
         ▟███▛               ▜▛ ▟███▛
▟███████████▛                  ▟██████████▙
▜██████████▛                  ▟███████████▛
      ▟███▛ ▟▙               ▟███▛
     ▟███▛ ▟██▙             ▟███▛
    ▟███▛  ▜███▙           ▝▀▀▀▀
    ▜██▛    ▜███▙ ▜██████████████████▛
     ▜▛     ▟████▙ ▜████████████████▛
           ▟██████▙       ▜███▙
          ▟███▛▜███▙       ▜███▙
         ▟███▛  ▜███▙       ▜███▙
         ▝▀▀▀    ▀▀▀▀▘       ▀▀▀▘
```

This comprises most of my dotfiles, managed (mostly) by `nix`.

## Quick Start

### Build and Apply Configuration

```bash
# First run needs the nix run, then can be ommited
nix run nixpkgs#nh -- darwin switch .
nh -- darwin switch .
```
### Lima NixOS VM

```bash
# Start Lima VM
limactl start --name=$HOSTNAME lima.yaml

# Shell into the VM
limactl shell 

# First run needs the nix run, then can be ommited
nix run nixpkgs#nh os switch…
