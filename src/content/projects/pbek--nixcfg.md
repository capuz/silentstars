---
repo: "pbek/nixcfg"
name: "nixcfg"
description: "Personal NixOS config"
readmeQualityOk: true
url: "https://github.com/pbek/nixcfg"
homepage: "https://pbek.github.io/nixcfg/"
language: "Nix"
languages: ["Nix"]
languagePcts: [88]
topics: ["nix-flake", "nixos", "nixos-configuration", "dotfiles"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-04-13T12:30:45Z"
lastCommitAt: "2026-09-14T09:12:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 70
maintainers: ["pbek", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bdc278f40f8acf3a35d7678cf0a9fad38717ec47457e193bd6a440a60d80303/pbek/nixcfg"
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
