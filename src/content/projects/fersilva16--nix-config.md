---
repo: "fersilva16/nix-config"
name: "nix-config"
description: "My NixOS configuration"
readmeQualityOk: true
url: "https://github.com/fersilva16/nix-config"
language: "Nix"
languages: ["Nix", "TypeScript"]
languagePcts: [50, 29]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-03-17T05:06:09Z"
lastCommitAt: "2026-10-08T10:52:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 62
maintainers: ["fersilva16"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa4b8ade46986f13b46e90dc16dc039729755e3a5daf2dd2d77461a806fe54c7/fersilva16/nix-config"
---

# My NixOS configuration

## Darwin installation

1. Install Nix: https://nixos.org/download/
2. `softwareupdate --install-rosetta`
3. `sudo nix run nix-darwin --extra-experimental-features nix-command --extra-experimental-features flakes -- switch --flake .#vega`

Rebuild: `sudo darwin-rebuild switch --flake .#vega`
