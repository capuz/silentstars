---
repo: "bruvduroiu/dotfiles"
name: "dotfiles"
description: "Extendable NixOS + Home Manager configuration"
readmeQualityOk: true
url: "https://github.com/bruvduroiu/dotfiles"
language: "Nix"
languages: ["Nix"]
languagePcts: [79]
topics: ["dotfiles", "dotfiles-linux", "dotfiles-macos", "nix", "nixos"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-03-22T09:17:04Z"
lastCommitAt: "2026-07-06T07:02:39Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 31
maintainers: ["bruvduroiu"]
openGraphImageUrl: "https://opengraph.githubassets.com/90fe0c34d8874654bdc76a61a09be725c8d734fbbd725c15a4f4439d82b13340/bruvduroiu/dotfiles"
---

<h1 align="center">dotfiles</h1> 

## Why?

- A single repository that manages all my machines: Framework13, Steam Deck, other potential servers
- Must be able to:
    - apply configuration to any machine from my main Framework13 laptop
    - encrypt and store secrets I might need here
    - define common service definition and decide which machine gets which service / config
- Must be able to manage home directory, dotfiles and `~/.config` via this repository
    - dislike symlinking

## The current setup

System Management: [NixOS](https://nixos.org/)
- replacing all dotfile management with NixOS Home Manager

Gaming System Management: [Jovian-NixOS](https://github.com/Jovian-Experiments/Jovian-NixOS)

Syncthing for syncing all my devices

Terminal Emulator: [Ghostty](https://ghostty.org/)
- Zig-based terminal emulator
- uses platform-native UI & GPU acceleration (e.g. MacOS secure input for passwords)

Shell: [fish](https://fishshell.com/)
- completions
- sane scripting
- user friendly

Text Editor: [neovim](https://neovim.io/)
- vi-movements
- great community, loads of completions

Secrets Management: [sops-nix](https://github.com/Mic92/sops-nix)
- easy to manage AGE keys
-…
