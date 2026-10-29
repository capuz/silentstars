---
repo: "asa1984/dotfiles"
name: "dotfiles"
description: "Nix is great"
readmeQualityOk: true
url: "https://github.com/asa1984/dotfiles"
language: "Nix"
languages: ["Nix", "OCaml"]
languagePcts: [40, 39]
stars: 98
forks: 0
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-01-12T06:10:06Z"
lastCommitAt: "2026-10-29T10:36:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 44
maintainers: ["asa1984", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7a40b7ee1c331a12902833a8f6ca00b1116bb4e81b0d1a4a756d22a8da8ac2b/asa1984/dotfiles"
---

# dotfiles

asa1984's nix-darwin & home-manager configurations

| Category | Name           | Description                                             |
| -------- | -------------- | ------------------------------------------------------- |
| OS       | macOS          |                                                         |
| Shell    | zsh + Starship | Simple & Stylish                                        |
| Editor   | Neovim         | [asa1984.nvim](https://github.com/asa1984/asa1984.nvim) |
| Terminal | WezTerm        | Practical terminal emulator                             |

## 🏗️ File Structure

Each host has its own self-contained flake (`hosts/<host>/flake.nix` + `flake.lock`).

### `hosts`

Per-host configurations

| Name     | Description    |
| -------- | -------------- |
| endfield | My primary macOS |

### `modules`

Reusable Nix modules (option definitions only)

### `configs`

Shared concrete settings for home-manager / nix-darwin

### `pkgs`

User packages

| Name                      | Description                               |
| ------------------------- | ----------------------------------------- |
| gh-q                      | `gh` extension to…
