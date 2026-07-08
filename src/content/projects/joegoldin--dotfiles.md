---
repo: "joegoldin/dotfiles"
name: "dotfiles"
description: "nixos and dotfile configs"
readmeQualityOk: true
url: "https://github.com/joegoldin/dotfiles"
language: "Nix"
languages: ["Nix"]
languagePcts: [93]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-07-28T02:44:33Z"
lastCommitAt: "2026-07-08T05:42:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 68
maintainers: ["joegoldin"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d101ac390453e19c9b5c68429315f930f2f9ca3cc7f92c52f21bf0a77670475/joegoldin/dotfiles"
---

# dotfiles

Nix configuration for all of my machines: NixOS workstations and servers,
a MacBook (nix-darwin), and a Steam Deck, with home-manager everywhere.
The repo follows the [dendritic pattern](https://github.com/mightyiam/dendritic),
uses [den](https://github.com/denful/den) as the engine, and wires in
[drowse](https://github.com/figsoda/drowse) for dynamic derivations.

| Output                                      | Machine                         | Role                                |
| ------------------------------------------- | ------------------------------- | ----------------------------------- |
| `elphael`                               | desktop tower (AMD GPU, Plasma) | daily driver                        |
| `volcano-manor` (+ `volcano-manor-installer` ISO)   | compute box (ROCm + vllm)       | ML/training                         |
| `torrent`                          | MacBook (aarch64-darwin)        | laptop                              |
| `malenia`                             | Steam Deck (Jovian)             | gaming                              |
| `dectus`                               | VPS                             | caddy reverse proxy + fail2ban…
