---
repo: "NathanFouere/nix-cfg"
name: "nix-cfg"
description: "Personal NixOS configuration"
readmeQualityOk: true
url: "https://github.com/NathanFouere/nix-cfg"
language: "Nix"
languages: ["Nix"]
languagePcts: [97]
topics: ["nix", "nixos", "fluxcd", "k3s"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-16T16:10:25Z"
lastCommitAt: "2026-11-02T13:38:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 66
maintainers: ["NathanFouere", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/487168416ae056dc15303ac93908298444b4f2719222b30ea3ef97e4b61e4b7b/NathanFouere/nix-cfg"
---

# nix-cfg

Personal NixOS configuration managed with flakes. Heavily inspired by [Vimjoyer work](https://www.youtube.com/watch?v=a67Sv4Mbxmc).

## Installation

### Using an existing host configuration

1 - Clone the repository

2 - Remove the existing hardware configuration if you want to use an already defined host: 
```bash
rm -f hosts/<host>/hardware-configuration.nix
```

3 - Regenerate the hardware configuration if you want to use an already defined host: 
```bash
sudo nixos-generate-config --show-hardware-config > hosts/<host>/hardware-configuration.nix
```

4 - Switch to the new configuration: 
```bash
sudo nixos-rebuild switch --flake .#<host>
```

### Creating a new host configuration

1 - Clone the repository

2 - Do ur stuff

3 - Generate the hardware configuration: 
```bash
sudo nixos-generate-config --show-hardware-config > hosts/<host>/hardware-configuration.nix
```

4 - Switch to the new configuration: 
```bash 
sudo nixos-rebuild switch --flake .#<host>
```

## Update && Upgrade

```bash
nix flake update
sudo nixos-rebuild switch --flake .#<host>
```

## Ollama / Opencode

Connect to the host "tour" and run the following command to run opencode with ollama
```bash…
