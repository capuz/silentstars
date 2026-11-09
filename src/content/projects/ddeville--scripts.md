---
repo: "ddeville/scripts"
name: "scripts"
description: "A bunch of configs, tools and install scripts I use on every machine I set up."
readmeQualityOk: true
url: "https://github.com/ddeville/scripts"
homepage: "https://ddeville.me"
language: "QML"
languages: ["QML", "Shell"]
languagePcts: [41, 31]
topics: ["scripts", "setup", "dotfiles", "config"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2014-09-08T16:04:12Z"
lastCommitAt: "2026-11-09T04:34:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 72
maintainers: ["ddeville"]
openGraphImageUrl: "https://opengraph.githubassets.com/118d16d0fb44cc58557fcd5a4f37bfb52da24c72dacccb476dfc3219595a37e1/ddeville/scripts"
---

# Scripts

A bunch of configs, tools and install scripts I use on every machine I set up. This repo is named `scripts` mostly for historical reasons.

## Installation

### Arch Linux

Follow the instructions in `install/arch/setup.txt` to kick off the installation from the ISO and run `make -C install`.

### MacOS

Give Terminal Full Disk Access and run the `install/macos/install.sh` script.

## Post-installation

- On MacOS, use Ghostty as the default terminal and give it Full Disk Access and Developer Tools support by going to "System Settings" > "Privacy & Security" > "Full Disk Access" / "Developer Tools". The installer associates Unix executables with Ghostty.
- On Arch Linux, adjust displays in `config/linux/.config/hypr/hyprland.lua` and workspace assignments in `config/linux/.config/hypr/workspaces.lua`.
- Check health of a few Neovim plugins and make sure that the appropriate packages are installed:
    - `nvim +checkhealth lazy`
    - `nvim +checkhealth mason`
    - `nvim +checkhealth conform`
    - `nvim +checkhealth` to check health of everything at once

### System configuration on Arch Linux…
