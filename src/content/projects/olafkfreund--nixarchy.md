---
repo: "olafkfreund/nixarchy"
name: "nixarchy"
description: "Omarchy 4.x vendored for NixOS — the upstream tree packaged as a derivation, not reimplemented in Nix"
readmeQualityOk: true
url: "https://github.com/olafkfreund/nixarchy"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [71, 25]
topics: ["desktop-environment", "hyprland", "nix", "nix-flake", "nixos", "omarchy", "wayland"]
stars: 50
forks: 4
openIssues: 13
closedIssues: 168
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-08-25T14:37:04Z"
lastCommitAt: "2026-09-11T08:15:45Z"
lastReleaseAt: "2026-09-09T09:04:13Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 42
maintainers: ["olafkfreund", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/81d33070aca21b6a68866e145802e1a60ca8f9d1fda359f7f5c72da213c3f833/olafkfreund/nixarchy"
discussionCount: 8
---

# nixarchy

[Omarchy](https://omarchy.org) vendored for NixOS — the whole desktop, with its
menus rewired to Nix instead of pacman.

> 📖 **[Read the manual](https://olafkfreund.github.io/nixarchy/)**

**[Getting started](https://olafkfreund.github.io/nixarchy/manual/getting-started)** ·
**[Add it to a NixOS machine you already run](#adding-it-to-a-machine-you-already-run)** ·
**[Try it in a VM](#try-it-in-a-vm)** ·
**[Roadmap](#roadmap)** ·
**[Discussions](https://github.com/olafkfreund/nixarchy/discussions)**

Omarchy 4.x is not a dotfiles repo, it's an application: **444 shell commands**,
a QuickShell desktop shell, 22 themes, and Hyprland configured through the Lua
API introduced in 0.55. Nixarchy packages that tree as a derivation and replaces
the parts that assume Arch, rather than reimplementing it in Nix.

Tracking an upstream release is a source bump, not a re-port.

What that buys you: the Install menu writes to a Nix config instead of running
pacman, **64 applications** are selectable that way, **every other package and
NixOS option is one `Install ▸ Search` away**, plugins and themes still install
from a git URL at runtime the way upstream intends, and every command…
