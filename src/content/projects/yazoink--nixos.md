---
repo: "yazoink/nixos"
name: "nixos"
description: "My NixOS desktop configs"
url: "https://github.com/yazoink/nixos"
language: "Nix"
languages: ["Nix"]
languagePcts: [71]
stars: 12
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-30T07:00:07Z"
lastCommitAt: "2026-06-25T06:38:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 70
maintainers: ["yazoink"]
openGraphImageUrl: "https://opengraph.githubassets.com/166d08a225101c1fffe2385762d5194d1c319b0be8fdcd5da2885c536d547bf7/yazoink/nixos"
---

# NixOS

My NixOS desktop configs with home-manager.

## Rices

### Labwc

("moonfly" colorscheme)

### Labwc "glass"

("rose-pine" colorscheme)

### Hyprland

("paradise" colorscheme)

## Features

- Consistent theming across Gtk/Qt and pretty much everything else
- Auto-generated theme based on the current stylix base16 colorscheme for everything except icons and cursors
- Ability to easily toggle between desktop colorschemes in config
- Declarative Etterna package/installation (works sometimes)
- [Script](https://github.com/yazoink/nixos/blob/main/modules/home-manager/features/shell-config/scripts/rebuild/rebuild) for rebuilding the system that notifies you when it's done
- [Script](https://github.com/yazoink/nixos/blob/main/modules/home-manager/features/shell-config/scripts/clean/clean) for cleaning the system that notifies you when it's done
- Various other [useful scripts](https://github.com/yazoink/nixos/tree/main/modules/home-manager/features/shell-config/scripts)
- Custom options for easy toggling of features (see [here](https://github.com/yazoink/nixos/tree/main/options/default.nix)).

## Documentation

See [documentation.md](./documentation.md)
