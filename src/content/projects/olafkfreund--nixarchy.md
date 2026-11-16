---
repo: "olafkfreund/nixarchy"
name: "nixarchy"
description: "Omarchy 4.x vendored for NixOS — the upstream tree packaged as a derivation, not reimplemented in Nix"
readmeQualityOk: true
url: "https://github.com/olafkfreund/nixarchy"
language: "Nix"
languages: ["Nix"]
languagePcts: [77]
topics: ["desktop-environment", "hyprland", "nix", "nix-flake", "nixos", "omarchy", "wayland"]
stars: 157
forks: 10
openIssues: 3
closedIssues: 688
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-08-25T14:37:04Z"
lastCommitAt: "2026-11-16T10:56:29Z"
lastReleaseAt: "2026-10-13T13:21:41Z"
status: "thriving"
tags: ["release_machine", "community_hub"]
healthScore: 100
undervaluedScore: 34
maintainers: ["xxxxxxxxxxxxx", "olafkfreund", "ryantm"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ad5c626f224e6508c74ec575ebbc8a5ada70ea107c8ffb9e565ae5ee4f16cbc/olafkfreund/nixarchy"
discussionCount: 33
---

# nixarchy

[Omarchy](https://omarchy.org) vendored for NixOS — the whole desktop, with its
menus rewired to Nix instead of pacman.

> 📖 **[Read the manual](https://olafkfreund.github.io/nixarchy/)**

**[Install](#install)** ·
**[Try it in a VM](#try-it-in-a-vm)** ·
**[Getting started](https://olafkfreund.github.io/nixarchy/manual/getting-started)** ·
**[Roadmap](#roadmap)** ·
**[Discussions](https://github.com/olafkfreund/nixarchy/discussions)**

Omarchy 4.x is not a dotfiles repo, it's an application: **564 shell commands**,
a QuickShell desktop shell, 22 themes, and Hyprland configured through the Lua
API introduced in 0.55. Nixarchy packages that tree as a derivation and replaces
the parts that assume Arch, rather than reimplementing it in Nix.

Tracking an upstream release is a source bump, not a re-port.

What that buys you: the Install menu writes to a Nix config instead of running
pacman, **76 applications** are selectable that way, **every other package and
NixOS option is one `Install ▸ Search` away**, plugins and themes still install
from a git URL at runtime the way upstream intends, and every command that
assumed `/usr` either points at what NixOS uses or says why it…
