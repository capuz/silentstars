---
repo: "Ladas552/Nix-Lands"
name: "Nix-Lands"
description: "[MIRROR] My NixOS config Part 4: Tack is unbreakable https://tangled.org/ladas552.me/Nix-Lands"
readmeQualityOk: true
url: "https://github.com/Ladas552/Nix-Lands"
homepage: "https://nix.ladas552.me"
language: "Nix"
languages: ["Nix"]
languagePcts: [93]
topics: ["ghostty", "helix", "kitty", "mpd", "mpv", "niri", "nix-flake", "nixos", "nixos-wsl", "sops-nix"]
stars: 25
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-20T10:49:47Z"
lastCommitAt: "2026-10-29T12:24:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 56
maintainers: ["Ladas552"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa8eae51d0ef2f809431bc374093cc4eb9a87ff79fe519b405e3a8d46e206496/Ladas552/Nix-Lands"
---

# What is this?
This is my multi host, modular Nix config. It declares configs for different programs using Nix language, such as:
- [Noctalia shell](https://github.com/noctalia-dev/noctalia-shell) - desktop components with generous customizability
- [Niri](https://github.com/YaLTeR/niri) - Scrollable Tilling Wayland Compositor via Community [Niri-nix](https://codeberg.org/BANanaD3V/niri-nix) module
- Wrapped package configurations via [adios-wrappers](https://github.com/llakala/adios-wrappers) modules library that uses a truly lazy loaded Nix module system - [adios](https://github.com/llakala/lladios)
- Excellent [Hjem](https://github.com/feel-co/hjem) linker with set of modules of [Hjem-rum](https://github.com/snugnug/hjem-rum)

I also declare configuration as packages/wrappers that you can try with `nix run
github:Ladas552/Nix-Lands#app`, replace `app` with:

- [nvf](https://github.com/NotAShelf/nvf) - Nix declared Neovim (current daily driver)
- all the other wrappers/scripts/packages in [pkgs directory](https://github.com/Ladas552/Nix-Lands/blob/HEAD/pkgs/default.nix)

# Overview of things to note

## Hosts

- NixPort is my amd laptop
- NixBox is my minipc with Pentium that I…
