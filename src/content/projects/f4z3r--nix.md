---
repo: "f4z3r/nix"
name: "nix"
description: "My personal NixOS setup, with all the stuff I need, configured the way I want to use it."
readmeQualityOk: true
url: "https://github.com/f4z3r/nix"
language: "Lua"
languages: ["Lua", "Nix"]
languagePcts: [61, 37]
topics: ["linux-rice", "nixos"]
stars: 40
forks: 0
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-04-26T15:21:26Z"
lastCommitAt: "2026-10-16T08:25:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 44
maintainers: ["f4z3r", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee6df19b4de22c913bfe379569868ea6d4d82935d90cde5f6802282f3900f3eb/f4z3r/nix"
---

# f4z3r's NixOS Flake

### A flake configuring my entire setup, just the way I like it...

[Screenshots](#screenshots) | [Software](#what-software-am-i-using) |
[Static Configuration](#static-configuration)

> [!WARNING]
>
> Use at your own risk. I am updating this repository continuously, and much stuff will not work for
> you as I inject data (such as secrets, configs I want to protect, etc) only at runtime or during
> the build process. However, parts of the configuration can be useful to people (I hope), even if
> it is tailored to my (sometimes very specific) needs.

## Screenshots

Supports quake terminals:

## What Software Am I Using?

- Channel: NixOS unstable
- Package Manager: `nix`
- Window Manager: `hyprland`
- Bar: `waybar`
- Layered Keyboard Mapping: `kanata`
- Launcher: `rofi`
- GTK Theme: `Orchis Black`
- GTK Icon Theme: `Papirus Dark`
- Terminal: `ghostty`
- Multiplexer: `tmux`
- Shell: `fish`
- Editor: `neovim`
- Prompt: `starship`
- Audio: `pipewire`, `mpd`, `ncmpcpp`
- Fonts: Monaspace Nerd Fonts (Monaspice)

> **NOTE:** the entire setup is optimized for shortcuts to be nice with a Colemak Mod-DH setup.
> Specifically I am running the following setup:…
