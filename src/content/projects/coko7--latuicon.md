---
repo: "coko7/latuicon"
name: "latuicon"
description: "😴 TUI icon picker (emojis / kaomojis / unicode / nerd fonts) ripped from late.sh"
readmeQualityOk: true
url: "https://github.com/coko7/latuicon"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["cli", "emoji", "emoji-picker", "icon", "icon-picker", "kaomoji", "kaomoji-picker", "nerd-fonts", "tui", "unicode"]
stars: 54
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 6
createdAt: "2026-06-16T12:31:27Z"
lastCommitAt: "2026-08-29T10:21:47Z"
lastReleaseAt: "2026-08-27T18:10:56Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 31
maintainers: ["coko7", "github-actions[bot]", "orhun"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1271197200/eb4f99a9-85ff-4fd7-a3aa-8ae3bc965bca"
---

# 😴 latuicon

`latuicon`, the **lat**e **TUI** **icon** picker: a rip-off of the [late.sh](https://github.com/mpiorowski/late-sh) embedded icon picker.

</p>

</p>

A terminal UI icon picker for emoji, kaomoji, Unicode characters, and [Nerd Font](https://www.nerdfonts.com/) glyphs. Press Enter to print the selected icon to stdout; press Esc to exit without output.

> [!TIP]
> Want to use `latuicon` in Neovim? Check out the [`latuicon.nvim`](https://github.com/coko7/latuicon.nvim) wrapper plugin!

## Table of Contents

- [Install](#install)
  - [Nix](#nix)
  - [Cargo](#cargo)
  - [Arch Linux (AUR)](#arch-linux-aur)
  - [Build from source](#build-from-source)
  - [Nix development environment](#nix-development-environment)
- [Usage](#usage)
  - [Keybindings](#keybindings)
  - [Tabs](#tabs)
  - [Desktop integration example (Hyprland)](#desktop-integration-example-hyprland)
- [Configuration](#configuration)
  - [Themes](#themes)
  - [Search mode](#search-mode)
- [What's the relationship with late.sh?](#whats-the-relationship-with-latesh)

## Install

### Nix

Run without installing:

```sh
nix run github:coko7/latuicon
```

Or install it into your Nix profile:

```sh
nix profile add…
