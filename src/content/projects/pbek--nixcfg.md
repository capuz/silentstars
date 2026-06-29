---
repo: "pbek/nixcfg"
name: "nixcfg"
description: "Personal NixOS config"
url: "https://github.com/pbek/nixcfg"
homepage: "https://pbek.github.io/nixcfg/"
language: "Nix"
languages: ["Nix"]
languagePcts: [88]
topics: ["nix-flake", "nixos", "nixos-configuration", "dotfiles"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-04-13T12:30:45Z"
lastCommitAt: "2026-06-29T07:24:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 71
maintainers: ["pbek", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ccbe0ff14171c6cc961928852bc1a67c69c608b2ba45929c3392064a07e68e6/pbek/nixcfg"
---

# nixcfg

[GitHub](https://github.com/pbek/nixcfg) |
[Documentation](https://pbek.github.io/nixcfg/) |
[Hokage Options](docs/hokage-options.md)

My personal NixOS config of my machines.

**Not meant to be used by others**, but feel free to take inspiration from it.

See [Hokage Options](docs/hokage-options.md) for detailed configuration options.

## Screenhots

#### Shell

## Setup

Pick your hostname, you might find some inspiration [here](https://spaceplace.nasa.gov/review/switch-a-roo/planet_sizes.en.jpg).

Set your hostname and run the [install script](./install.sh):

```bash
# Start with a fresh NixOS installation in ~/Code/nixcfg
HOSTNAME=yourhostname bash <(curl -s https://raw.githubusercontent.com/pbek/nixcfg/main/install.sh)

# Initially build and switch to new configuration for host "yourhostname" after you adapted flake.nix and your configuration.nix
nix-shell -p git --run "sudo nixos-rebuild switch --flake .#yourhostname -L"
```

Afterward here are some useful commands:

```bash
# Build and switch to new configuration
make switch

# edit configuration.nix
kate . &

# check for Nvidia card
nix-shell -p pciutils --run 'lspci | grep VGA'

# look at network load and other…
