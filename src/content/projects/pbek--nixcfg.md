---
repo: "pbek/nixcfg"
name: "nixcfg"
description: "Personal NixOS config"
readmeQualityOk: true
url: "https://github.com/pbek/nixcfg"
homepage: "https://pbek.github.io/nixcfg/"
language: "Nix"
languages: ["Nix"]
languagePcts: [87]
topics: ["nix-flake", "nixos", "nixos-configuration", "dotfiles"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-04-13T12:30:45Z"
lastCommitAt: "2026-11-09T11:58:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 71
maintainers: ["pbek", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59a4d8c576b26e7d1083634607258486919fa64065fd8afb187cdc96381932ce/pbek/nixcfg"
---

# nixcfg

[GitHub](https://github.com/pbek/nixcfg) |
[Documentation](https://pbek.github.io/nixcfg/) |
[Hokage Options](https://github.com/pbek/nixcfg/blob/HEAD/docs/hokage-options.md)

My personal NixOS config of my machines.

**Not meant to be used by others**, but feel free to take inspiration from it.

See [Hokage Options](https://github.com/pbek/nixcfg/blob/HEAD/docs/hokage-options.md) for detailed configuration options.

## Screenhots

#### Shell

## Setup

Pick your hostname, you might find some inspiration [here](https://spaceplace.nasa.gov/review/switch-a-roo/planet_sizes.en.jpg).

Set your hostname and run the [install script](https://github.com/pbek/nixcfg/blob/HEAD/install.sh):

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

# edit…
