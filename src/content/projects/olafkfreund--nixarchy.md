---
repo: "olafkfreund/nixarchy"
name: "nixarchy"
description: "Omarchy 4.x vendored for NixOS — the upstream tree packaged as a derivation, not reimplemented in Nix"
readmeQualityOk: true
url: "https://github.com/olafkfreund/nixarchy"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [76, 21]
topics: ["desktop-environment", "hyprland", "nix", "nix-flake", "nixos", "omarchy", "wayland"]
stars: 100
forks: 6
openIssues: 2
closedIssues: 377
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-08-25T14:37:04Z"
lastCommitAt: "2026-09-29T10:03:59Z"
lastReleaseAt: "2026-09-18T09:13:19Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 37
maintainers: ["olafkfreund"]
openGraphImageUrl: "https://opengraph.githubassets.com/048d62745ce17eb6f0cbe99b25cbdcea0b4b08f0a6544dd437e08167041f6339/olafkfreund/nixarchy"
discussionCount: 14
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

Omarchy 4.x is not a dotfiles repo, it's an application: **445 shell commands**,
a QuickShell desktop shell, 22 themes, and Hyprland configured through the Lua
API introduced in 0.55. Nixarchy packages that tree as a derivation and replaces
the parts that assume Arch, rather than reimplementing it in Nix.

Tracking an upstream release is a source bump, not a re-port.

What that buys you: the Install menu writes to a Nix config instead of running
pacman, **68 applications** are selectable that way, **every other package and
NixOS option is one `Install ▸ Search` away**, plugins and themes still install
from a git URL at runtime the way upstream intends, and every command that
assumed `/usr` either points at what NixOS uses or says why it…
