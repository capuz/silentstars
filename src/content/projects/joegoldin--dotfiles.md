---
repo: "joegoldin/dotfiles"
name: "dotfiles"
description: "nixos and dotfile configs"
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
lastCommitAt: "2026-07-02T06:36:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 68
maintainers: ["joegoldin", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/c54984f76024db06aa446ed3500798956ce4dd2f397630d4451bd2bcde5e5b0c/joegoldin/dotfiles"
---

# dotfiles

Nix configuration for all of my machines: NixOS workstations and servers,
a MacBook (nix-darwin), and a Steam Deck, with home-manager everywhere.
The repo follows the [dendritic pattern](https://github.com/mightyiam/dendritic),
uses [den](https://github.com/denful/den) as the engine, and wires in
[drowse](https://github.com/figsoda/drowse) for dynamic derivations.

| Output                                      | Machine                         | Role                                |
| ------------------------------------------- | ------------------------------- | ----------------------------------- |
| `joe-desktop`                               | desktop tower (AMD GPU, Plasma) | daily driver                        |
| `office-pc` (+ `office-pc-installer` ISO)   | compute box (ROCm + vllm)       | ML/training                         |
| `Joes-MacBook-Pro`                          | MacBook (aarch64-darwin)        | laptop                              |
| `joe-steamdeck`                             | Steam Deck (Jovian)             | gaming                              |
| `cloud-proxy`                               | VPS                             | caddy reverse…
